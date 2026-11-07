import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const routes = ['/', '/about', '/products', '/customer', '/products/ndsd',
  ...Array.from({ length: 8 }, (_, i) => `/products/${i + 1}`)];
const origin = 'https://maipharm.com';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript',
  '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json', '.txt': 'text/plain', '.xml': 'application/xml' };

async function prerender() {
  // Every route receives this immutable Vite seed, never a previously rendered page.
  const seed = readFileSync(join(distDir, 'index.html'));
  const server = createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (routes.includes(pathname)) {
      res.writeHead(200, { 'Content-Type': types['.html'] });
      return res.end(seed);
    }
    const path = resolve(distDir, `.${pathname}`);
    if (!path.startsWith(`${distDir}${sep}`) || !existsSync(path) || !statSync(path).isFile()) {
      res.writeHead(404);
      return res.end('Not found');
    }
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    res.end(readFileSync(path));
  });
  let browser;
  try {
    await new Promise((done, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', done);
    });
    const localOrigin = `http://127.0.0.1:${server.address().port}`;
    browser = await puppeteer.launch({ headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=ko-KR'] });
    const snapshots = [];
    for (const route of routes) {
      const page = await browser.newPage();
      const errors = [];
      try {
        page.on('pageerror', error => errors.push(error.message));
        page.on('response', response => {
          if (response.url().startsWith(localOrigin) && response.status() >= 400 &&
            ['script', 'stylesheet', 'document'].includes(response.request().resourceType())) {
            errors.push(`HTTP ${response.status()}: ${response.url()}`);
          }
        });
        page.on('requestfailed', request => {
          if (request.url().startsWith(localOrigin) &&
            ['script', 'stylesheet', 'document'].includes(request.resourceType())) {
            errors.push(`Request failed: ${request.url()}`);
          }
        });
        // Rendering should not depend on analytics, remote fonts, or network services.
        await page.setRequestInterception(true);
        page.on('request', request => {
          if (/^https?:/.test(request.url()) && !request.url().startsWith(localOrigin)) request.abort();
          else request.continue();
        });
        await page.setExtraHTTPHeaders({ 'Accept-Language': 'ko-KR,ko;q=0.9' });
        await page.evaluateOnNewDocument(() => {
          localStorage.setItem('i18nextLng', 'ko');
          Object.defineProperty(navigator, 'language', { get: () => 'ko-KR' });
          Object.defineProperty(navigator, 'languages', { get: () => ['ko-KR', 'ko'] });
        });
        const response = await page.goto(`${localOrigin}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        if (!response?.ok()) throw new Error(`Navigation failed: ${response?.status()}`);
        if (errors.length) throw new Error(errors.join('; '));
        const problems = await page.evaluate((expected) => {
          const problems = [];
          const one = (selector, attr, value) => {
            const nodes = [...document.querySelectorAll(selector)];
            if (nodes.length !== 1 || !nodes[0].getAttribute(attr)?.trim() ||
                (value && nodes[0].getAttribute(attr) !== value)) problems.push(`Invalid ${selector}`);
          };
          one('link[rel="canonical"]', 'href', expected);
          one('meta[name="description"]', 'content');
          for (const key of ['url', 'title', 'description', 'image']) {
            one(`meta[property="og:${key}"]`, 'content', key === 'url' ? expected : undefined);
          }
          if (document.querySelectorAll('title').length !== 1 || !document.title.trim()) problems.push('Missing title');
          if (document.documentElement.lang !== 'ko') problems.push('Initial language must be ko');
          const root = document.querySelector('#root');
          if (!root?.querySelector('main') || !root.querySelector('h1') || !/[가-힣]/.test(root.textContent)) problems.push('Missing Korean main content/H1');
          if (location.pathname === '/' && !root?.querySelector('a[href="/about"]')) problems.push('Missing crawlable Enter link');
          for (const node of document.querySelectorAll('script[type="application/ld+json"]')) {
            try {
              const data = JSON.parse(node.textContent);
              if (/"telephone"\s*:/.test(node.textContent)) problems.push('Contact phone metadata forbidden');
              const visit = (item) => {
                if (!item || typeof item !== 'object') return;
                if (item['@type'] === 'SoftwareApplication' && (item.offers?.price === '0' || item.offers?.price === 0)) problems.push('Unsupported free software offer');
                Object.values(item).forEach(visit);
              };
              visit(data);
            } catch { problems.push('Malformed JSON-LD'); }
          }
          return problems;
        }, `${origin}${route}`);
        if (problems.length) throw new Error(problems.join('; '));
        // DOM serialization merges adjacent text nodes. React hydration expects
        // their original boundaries, just as React's server renderer emits them.
        await page.evaluate(() => {
          const root = document.querySelector('#root');
          for (const element of [root, ...root.querySelectorAll('*')]) {
            if (['SCRIPT', 'STYLE', 'TEXTAREA', 'TITLE', 'OPTION'].includes(element.tagName)) continue;
            for (const node of [...element.childNodes]) {
              if (node.nodeType === Node.TEXT_NODE && node.nextSibling?.nodeType === Node.TEXT_NODE) {
                node.after(document.createComment(' '));
              }
            }
          }
        });
        snapshots.push({ route, html: await page.content() });
        console.log(`[prerender] validated ${route}`);
      } catch (error) {
        throw new Error(`[prerender] ${route}: ${error.message}`, { cause: error });
      } finally { await page.close(); }
    }
    // Publish snapshots only when the entire route set is valid.
    for (const { route, html } of snapshots) {
      const output = route === '/' ? join(distDir, 'index.html') : join(distDir, route, 'index.html');
      mkdirSync(dirname(output), { recursive: true });
      writeFileSync(output, html);
    }
    console.log(`[prerender] Done: ${snapshots.length} Korean static pages`);
  } finally {
    if (browser) await browser.close();
    await new Promise(done => server.close(done));
  }
}

prerender().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
