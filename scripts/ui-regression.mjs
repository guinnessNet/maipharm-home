// Run with: ego-browser nodejs < scripts/ui-regression.mjs
const fs = await import('node:fs/promises');
const task = await taskSpace('MaiPharm implementation QA');
const page = task.page('p1');
const results = [];
const check = (name, condition, evidence) => results.push({ name, pass: !!condition, evidence });
await page.cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await page.goto('http://localhost:5173/');
await page.waitForSelector('main');
await page.waitForFunction(() => document.querySelector('main')?.textContent.length > 30);
const intro = await page.evaluate(() => ({ enter: !!document.querySelector('a[data-enter][href="/about"]'), height: document.querySelector('[data-intro]')?.getBoundingClientRect().height, dark: document.querySelector('header')?.getAttribute('data-theme'), nav: [...document.querySelectorAll('a')].map(a => a.getAttribute('href')) }));
check('Immersive intro with real direct destinations', intro.enter && intro.height >= 800 && intro.dark === 'dark' && ['/about', '/products', '/customer'].every(h => intro.nav.includes(h)), intro);
if (intro.enter) { await page.click('a[data-enter]'); await page.waitForURL('**/about'); }
else await page.goto('http://localhost:5173/about');
await page.waitForSelector('main');
for (const y of [0,64,65,300,0]) {
  await page.evaluate(y => window.scrollTo({top:y,behavior:'instant'}), y);
  await page.waitForFunction(y => Math.abs(window.scrollY-y)<1, y);
  await page.waitForFunction(y => document.querySelector('header')?.dataset.theme === (y>64?'dark':'light'), y);
  const state = await page.evaluate(() => ({ y: scrollY, theme: document.querySelector('header')?.getAttribute('data-theme'), fixed: getComputedStyle(document.querySelector('header')).position, logo: document.querySelector('header img')?.getAttribute('src') }));
  check(`Header real scroll threshold at ${y}`, state.theme === (y > 64 ? 'dark' : 'light') && state.fixed === 'fixed' && state.logo?.includes(y > 64 ? 'white' : 'color'), state);
}
await page.cdp('Emulation.setDeviceMetricsOverride', {width:390,height:844,deviceScaleFactor:1,mobile:true});
await page.evaluate(() => window.scrollTo({top:0,behavior:'instant'}));
const mobile = await page.evaluate(() => { const h=document.querySelector('header'); const visible=[...h.querySelectorAll('a,button,select')].filter(e => e.getBoundingClientRect().width && e.getBoundingClientRect().height); const r=h.querySelector('img').getBoundingClientRect(); return {controls:visible.length, href:visible[0]?.getAttribute('href'), center:r.x+r.width/2, width:r.width, height:h.getBoundingClientRect().height, overflow:document.documentElement.scrollWidth>innerWidth}; });
check('Mobile centered logo only', mobile.controls===1 && mobile.href==='/' && Math.abs(mobile.center-195)<2 && mobile.width===104 && mobile.height===64 && !mobile.overflow, mobile);
for (const route of ['/products/ndsd','/products',...Array.from({length:8},(_,i)=>`/products/${i+1}`),'/customer','/about']) {
  await page.goto(`http://localhost:5173${route}`);
  await page.waitForSelector('main');
  const state = await page.evaluate(() => ({h1:document.querySelector('h1')?.textContent, phone:!!document.querySelector('a[href^="tel:"]') || /0(?:10|31|70)[- ]\d{3,4}[- ]\d{4}/.test(document.body.innerText), overflow:document.documentElement.scrollWidth>innerWidth}));
  check(`Existing route ${route} and no phone`, !!state.h1 && !state.phone && !state.overflow, state);
}
await fs.mkdir('/tmp/maipharm-implementation',{recursive:true});
await fs.writeFile('/tmp/maipharm-implementation/ui-regression-result.json',JSON.stringify({spaceId:task.spaceId,results},null,2));
console.log(JSON.stringify({spaceId:task.spaceId,passed:results.filter(r=>r.pass).length,failed:results.filter(r=>!r.pass)},null,2));
if(results.some(r=>!r.pass)) process.exitCode=1;
