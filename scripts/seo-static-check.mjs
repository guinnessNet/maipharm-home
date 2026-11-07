// Run after the coordinator's integrated build. Reads saved HTML with JavaScript disabled.
import puppeteer from 'puppeteer';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
const dist = resolve(process.argv[2] || 'dist');
const routes = ['/', '/about', '/products', '/customer', '/products/ndsd',
  ...Array.from({length:8}, (_, i) => `/products/${i+1}`)];
const browser = await puppeteer.launch({headless:true,args:['--no-sandbox']});
try {
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  const evidence = [];
  for (const route of routes) {
    const file = route === '/' ? join(dist,'index.html') : join(dist,route,'index.html');
    assert.ok(existsSync(file), `Missing saved HTML ${route}`);
    await page.setContent(readFileSync(file,'utf8'), {waitUntil:'domcontentloaded'});
    const data = await page.evaluate(() => ({
      lang:document.documentElement.lang,
      title:[...document.querySelectorAll('title')].map(n=>n.textContent),
      canonical:[...document.querySelectorAll('link[rel="canonical"]')].map(n=>n.href),
      descriptions:[...document.querySelectorAll('meta[name="description"]')].map(n=>n.content),
      og:Object.fromEntries(['url','title','description','image'].map(key=>[key,[...document.querySelectorAll(`meta[property="og:${key}"]`)].map(n=>n.content)])),
      main:document.querySelector('#root main')?.textContent || '',
      h1:document.querySelectorAll('#root h1').length,
      links:[...document.querySelectorAll('#root a[href]')].map(n=>n.getAttribute('href')),
      jsonld:[...document.querySelectorAll('script[type="application/ld+json"]')].map(n=>JSON.parse(n.textContent)),
    }));
    assert.equal(data.lang,'ko',`${route}: static language`);
    assert.equal(data.title.length,1,`${route}: title count`);
    assert.equal(data.h1,1,`${route}: one H1`);
    assert.ok(/[가-힣]/.test(data.main),`${route}: Korean static main`);
    assert.deepEqual(data.canonical,[`https://maipharm.com${route}`],`${route}: canonical`);
    assert.equal(data.descriptions.length,1,`${route}: description count`);
    assert.ok(data.descriptions[0]?.trim(),`${route}: description`);
    for (const [key,values] of Object.entries(data.og)) {
      assert.equal(values.length,1,`${route}: og:${key} count`);
      assert.ok(values[0]?.trim(),`${route}: og:${key}`);
    }
    assert.equal(data.og.url[0],`https://maipharm.com${route}`,`${route}: og:url`);
    const image = new URL(data.og.image[0]);
    assert.equal(image.origin,'https://maipharm.com',`${route}: own OG image`);
    assert.ok(existsSync(join(dist,image.pathname)),`${route}: OG file exists`);
    assert.ok(!/"telephone"\s*:/.test(JSON.stringify(data.jsonld)),`${route}: no contact phone`);
    if (route === '/') assert.ok(data.links.includes('/about'),'Enter is crawlable');
    if (route === '/about') {
      assert.ok(data.main.length>150,'Company text available without JavaScript');
      assert.ok(data.links.includes('/products/ndsd'),'NDSD deep link available');
    }
    evidence.push({route,title:data.title[0],canonical:data.canonical[0],staticCharacters:data.main.length,ogImage:image.pathname});
  }
  console.log(JSON.stringify({javascript:false,passed:routes.length,routes:evidence},null,2));
} finally { await browser.close(); }
