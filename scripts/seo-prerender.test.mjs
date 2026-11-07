import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, copyFile, symlink, writeFile, readFile, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { spawn } from 'node:child_process';
import puppeteer from 'puppeteer';
import { build } from 'esbuild';

async function fixture(mode) {
  const dir = await mkdtemp(join(tmpdir(), 'maipharm-seo-'));
  await mkdir(join(dir, 'scripts'));
  await mkdir(join(dir, 'dist'));
  await copyFile(resolve('scripts/prerender.mjs'), join(dir, 'scripts/prerender.mjs'));
  await symlink(resolve('node_modules'), join(dir, 'node_modules'));
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"></head><body><div id="root"></div><script>
    if (${JSON.stringify(mode)} === 'error' || (${JSON.stringify(mode)} === 'late-error' && location.pathname === '/products')) throw new Error('fixture render crashed');
    if (document.querySelector('#root').textContent) throw new Error('snapshot contaminated seed');
    document.documentElement.lang = localStorage.i18nextLng || 'en';
    document.title = '마이팜 ' + location.pathname;
    document.head.insertAdjacentHTML('beforeend', '<meta name="description" content="마이팜 경로별 설명"><meta property="og:title" content="마이팜"><meta property="og:description" content="마이팜 설명"><meta property="og:image" content="https://maipharm.com/img/og-maipharm.png"><meta property="og:url" content="https://maipharm.com' + location.pathname + '"><link rel="canonical" href="https://maipharm.com' + location.pathname + '">');
    if (${JSON.stringify(mode)} === 'duplicate') document.head.insertAdjacentHTML('beforeend', '<link rel="canonical" href="https://maipharm.com/">');
    document.querySelector('#root').innerHTML = '<main><h1>마이팜 ' + location.pathname + '</h1><p>약국 운영을 돕는 회사와 제품에 관한 경로별 안내입니다.</p><a href="/about">Enter</a></main>';
    document.querySelector('#root a').replaceChildren(document.createTextNode('Enter'), document.createTextNode(' →'));
  </script></body></html>`;
  await writeFile(join(dir, 'dist/index.html'), html);
  const result = await new Promise((done) => {
    const child = spawn(process.execPath, [join(dir, 'scripts/prerender.mjs')]);
    let output = '';
    child.stdout.on('data', d => output += d);
    child.stderr.on('data', d => output += d);
    child.on('exit', code => done({ code, output }));
  });
  return { dir, ...result };
}

test('fresh seed and Korean locale produce independent static routes', async () => {
  const run = await fixture('valid');
  try {
    assert.equal(run.code, 0, run.output);
    const html = await readFile(join(run.dir, 'dist/about/index.html'), 'utf8');
    assert.match(html, /<html[^>]*lang="ko"/);
    assert.match(html, /<h1>마이팜 \/about<\/h1>/);
    assert.equal((html.split('</head>')[0].match(/rel="canonical"/g) || []).length, 1);
    assert.match(html, /href="https:\/\/maipharm.com\/about"/);
    const ndsd = await readFile(join(run.dir, 'dist/products/ndsd/index.html'), 'utf8');
    assert.match(ndsd, /<h1>마이팜 \/products\/ndsd<\/h1>/);
    const bundle = await build({stdin:{contents:`import React from 'react';import {hydrateRoot} from 'react-dom/client';hydrateRoot(document.querySelector('#root a'),React.createElement(React.Fragment,null,'Enter',' →'));`,resolveDir:process.cwd()},bundle:true,write:false,format:'iife',define:{'process.env.NODE_ENV':'"production"'}});
    const browser = await puppeteer.launch({headless:true,args:['--no-sandbox']});
    try {
      const page = await browser.newPage(); const errors=[];
      page.on('pageerror',error=>errors.push(error.message));
      await page.setContent(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,''));
      await page.addScriptTag({content:bundle.outputFiles[0].text});
      await page.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
      assert.deepEqual(errors,[],'Saved adjacent text nodes must hydrate without React errors');
    } finally { await browser.close(); }

  } finally { await rm(run.dir, { recursive: true, force: true }); }
});
for (const mode of ['error', 'duplicate', 'late-error']) {
  test(`render ${mode} fails the build instead of emitting false success`, async () => {
    const run = await fixture(mode);
    try {
      assert.notEqual(run.code, 0, run.output);
      await assert.rejects(access(join(run.dir, 'dist/about/index.html')), 'Failure must not publish partial snapshots');
    }
    finally { await rm(run.dir, { recursive: true, force: true }); }
  });
}
test('base template leaves canonical and route metadata to Helmet', async () => {
  const html = await readFile(resolve('index.html'), 'utf8');
  assert.doesNotMatch(html, /rel="canonical"|property="og:|name="description"|SoftwareApplication/);
});
