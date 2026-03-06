import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');

const routes = [
  '/',
  '/about',
  '/products',
  '/customer',
  '/products/1',
  '/products/2',
  '/products/3',
  '/products/4',
  '/products/5',
  '/products/6',
  '/products/7',
  '/products/8',
];

// Simple static file server for the dist directory
function startServer(port) {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let filePath = join(distDir, req.url === '/' ? '/index.html' : req.url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || !filePath.includes('.')) {
        filePath = join(distDir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const types = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          json: 'application/json',
          png: 'image/png',
          jpg: 'image/jpeg',
          svg: 'image/svg+xml',
          webp: 'image/webp',
          webmanifest: 'application/manifest+json',
          txt: 'text/plain',
          xml: 'application/xml',
        };
        res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => resolvePromise(server));
  });
}

async function prerender() {
  const port = 45678;
  const server = await startServer(port);
  console.log(`[prerender] Server started on port ${port}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of routes) {
    const page = await browser.newPage();

    try {
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait a bit for React to fully render
      await new Promise((r) => setTimeout(r, 1000));

      const html = await page.content();

      // Determine output path
      const outputPath = route === '/'
        ? join(distDir, 'index.html')
        : join(distDir, route, 'index.html');

      const outputDir = dirname(outputPath);
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(outputPath, html);
      console.log(`[prerender] ${route} -> ${outputPath}`);
    } catch (err) {
      console.error(`[prerender] Failed to render ${route}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('[prerender] Done!');
}

prerender().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
