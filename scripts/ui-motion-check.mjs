// Run: ego-browser nodejs < scripts/ui-motion-check.mjs
// Uses the dedicated TaskSpace for this motion revision, not another worker's tabs.
const fs = await import('node:fs/promises');
const task = await taskSpace(61);
const page = task.page('p1');
const dir = '/tmp/maipharm-desktop-revision';
const results = [];
const check = (name, pass, evidence) => results.push({ name, pass: !!pass, evidence });
const state = () => page.evaluate(() => ({
  time: document.querySelector('.intro-orbit').getAnimations()[0]?.currentTime,
  bg: [...document.querySelectorAll('.intro-field,.intro-orbit,.intro-light')].map(e => ({
    transform: getComputedStyle(e).transform, opacity: getComputedStyle(e).opacity,
    pointer: getComputedStyle(e).pointerEvents,
  })),
  copy: [...document.querySelector('.intro-message').children].map(e => ({
    text: e.textContent, opacity: getComputedStyle(e).opacity,
    transform: getComputedStyle(e).transform,
    rect: { x: e.getBoundingClientRect().x, y: e.getBoundingClientRect().y },
  })),
  width: innerWidth, overflow: document.documentElement.scrollWidth > innerWidth,
}));
await page.cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
await page.cdp('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
await page.cdp('Page.bringToFront');
await page.cdp('egoAutomated.disable');
await page.cdp('Runtime.enable');
await page.reload();
await page.evaluate(() => {
  window.__motionErrors = [];
  addEventListener('error', e => window.__motionErrors.push(e.message));
  addEventListener('unhandledrejection', e => window.__motionErrors.push(String(e.reason)));
});
await page.waitForFunction(() => document.querySelector('.intro-orbit')?.getAnimations()[0]?.currentTime >= 1500);
const first = await state();
await page.screenshot({ path: `${dir}/motion-frame-1.png` });
await page.waitForFunction(() => document.querySelector('.intro-orbit').getAnimations()[0].currentTime >= 4500);
const second = await state();
await page.screenshot({ path: `${dir}/motion-frame-2.png` });
check('Actual autonomous background changes over 3 seconds', first.bg.every((e, i) => e.transform !== second.bg[i].transform), { first, second });
check('Foreground stays fully visible and stationary after reveal', JSON.stringify(first.copy) === JSON.stringify(second.copy) && second.copy.every(e => e.opacity === '1'), second.copy);
check('Ambient layers cannot intercept navigation', second.bg.every(e => e.pointer === 'none'), second.bg);
await page.waitForFunction(() => document.querySelector('.intro-orbit').getAnimations()[0].currentTime >= 27750, undefined, { timeout: 30000 });
const beforeLoop = await state();
await page.screenshot({ path: `${dir}/motion-loop-before.png` });
await page.waitForFunction(() => document.querySelector('.intro-orbit').getAnimations()[0].currentTime >= 28300);
const afterLoop = await state();
await page.screenshot({ path: `${dir}/motion-loop-after.png` });
check('Actual first orbit loop continues beyond 28 seconds', beforeLoop.time < 28000 && afterLoop.time >= 28000 && beforeLoop.bg[2].transform !== afterLoop.bg[2].transform, { beforeLoop, afterLoop });
check('No foreground periodic fade across first loop', JSON.stringify(first.copy) === JSON.stringify(afterLoop.copy), afterLoop.copy);

// The actual tab-switch probe was attempted. Ego activates the observed tab,
// so it cannot observe a genuinely hidden document without changing visibility.
results.push({ name: 'Actual hidden-tab pause', pass: null, status: 'UNVERIFIED', evidence: 'Ego observation brings the target tab to front; listener and cleanup reviewed in source.' });

await page.evaluate(() => document.querySelector('[data-intro]').style.transform = 'translateY(200vh)');
await page.waitForFunction(() => document.querySelector('[data-intro]').dataset.motionPaused === 'true');
check('Intersection observer pauses offscreen intro', await page.evaluate(() => document.getAnimations().every(a => a.playState === 'paused')));
await page.evaluate(() => document.querySelector('[data-intro]').style.removeProperty('transform'));
await page.waitForFunction(() => document.querySelector('[data-intro]').dataset.motionPaused === 'false');

for (const width of [320, 390, 767]) {
  await page.cdp('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
  const mobile = await state();
  check(`Mobile ${width}px has autonomous motion and no horizontal overflow`, !mobile.overflow && await page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length === 4), mobile);
  if (width === 390) await page.screenshot({ path: `${dir}/motion-mobile.png` });
}
await page.cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 768, deviceScaleFactor: 1, mobile: false });
const laptop = await page.evaluate(() => ({
  width: innerWidth, height: innerHeight,
  enterBottom: document.querySelector('[data-enter]').getBoundingClientRect().bottom,
  navBottom: document.querySelector('.intro-direct').getBoundingClientRect().bottom,
  overflow: document.documentElement.scrollWidth > innerWidth,
}));
check('1440x768 entry and direct navigation fit first viewport', laptop.width === 1440 && laptop.enterBottom <= 768 && laptop.navBottom <= 768 && !laptop.overflow, laptop);
await page.screenshot({ path: `${dir}/motion-laptop.png` });
await page.cdp('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await page.cdp('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
await page.reload();
await page.waitForSelector('.intro-message h1');
const reduced = await page.evaluate(() => ({
  animations: document.getAnimations().length,
  visible: [...document.querySelector('.intro-message').children].every(e => getComputedStyle(e).opacity === '1' && getComputedStyle(e).transform === 'none'),
  overflow: document.documentElement.scrollWidth > innerWidth,
}));
check('Reduced motion is static with all copy visible immediately', reduced.animations === 0 && reduced.visible && !reduced.overflow, reduced);
await page.screenshot({ path: `${dir}/motion-reduced.png` });
await page.focus('a[data-enter]');
const focus = await page.evaluate(() => ({ outline: getComputedStyle(document.activeElement).outlineStyle, height: document.activeElement.getBoundingClientRect().height, href: document.activeElement.getAttribute('href') }));
check('Entry link retains clear focus and click target', focus.outline === 'solid' && focus.height >= 44 && focus.href === '/about', focus);
await page.press('a[data-enter]', 'Enter');
await page.waitForURL('**/about');
check('Keyboard entry navigates and intro animations are cleaned up', await page.evaluate(() => location.pathname === '/about' && !document.querySelector('.intro-motion') && document.getAnimations().every(a => !a.animationName?.startsWith('intro-'))));
await page.goto('http://localhost:5173/?lang=en');
check('English wording and entry preserved', await page.evaluate(() => document.querySelector('h1').textContent === 'More time for patient care' && document.querySelector('[data-enter]').textContent.includes('Enter MaiPharm')));
const events = await page.events();
check('No runtime exceptions or console errors', !events.some(e => JSON.stringify(e).includes('exceptionThrown') || (e.method === 'Runtime.consoleAPICalled' && e.params?.type === 'error')), events);
await fs.writeFile(`${dir}/motion-results.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify({ passed: results.filter(r => r.pass).length, total: results.length, failures: results.filter(r => r.pass === false), unverified: results.filter(r => r.pass === null), resultsPath: `${dir}/motion-results.json` }, null, 2));
// Leave this space active until the independent review and any fixes are done.
