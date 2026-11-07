// Run after ui-regression with: ego-browser nodejs < scripts/ui-interactions.mjs
const fs=await import('node:fs/promises'); const task=await taskSpace('MaiPharm implementation QA'); const page=task.page('p1'); const results=[];
const check=(name,pass,evidence)=>results.push({name,pass:!!pass,evidence});
await page.cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
for(const route of ['/about/','/products/ndsd/','/customer/','/products/']) {
 await page.goto('http://localhost:5173'+route); await page.waitForFunction(()=>document.querySelector('meta[property="og:title"]'));
 const evidence=await page.evaluate(()=>({title:document.title,h1:document.querySelector('h1')?.textContent,canonical:document.querySelector('link[rel=canonical]')?.href,counts:['meta[name=description]','link[rel=canonical]','meta[property="og:title"]','meta[property="og:url"]','meta[property="og:description"]','meta[property="og:image"]'].map(s=>document.querySelectorAll(s).length)}));
 check(`Trailing slash metadata ${route}`, evidence.counts.every(x=>x===1)&&!evidence.title.includes('약사의 시간을')&&evidence.canonical==='https://maipharm.com'+route.slice(0,-1),evidence);
}
await page.goto('http://localhost:5173/products');await page.click('text="핵심 솔루션" >> nth=0');
const filtered=await page.evaluate(()=>[...document.querySelectorAll('main a[href^="/products/"]')].map(a=>a.getAttribute('href')));
check('Catalog category filter preserves matching products',filtered.includes('/products/1')&&filtered.includes('/products/3')&&!filtered.includes('/products/2'),filtered);
await page.goto('http://localhost:5173/about');await page.click('button[aria-controls="company-news-list"]');
const news=await page.evaluate(()=>({count:document.querySelectorAll('.news-item').length,expanded:document.querySelector('[aria-controls="company-news-list"]').getAttribute('aria-expanded'),press:[...document.querySelectorAll('.news-item a')].map(a=>a.href)}));
check('News expands and preserves both original press URLs',news.count===9&&news.expanded==='true'&&news.press.some(h=>h.includes('/337671'))&&news.press.some(h=>h.endsWith('/782')),news);
await page.goto('http://localhost:5173/customer');
const form=await page.evaluate(()=>({invalid:!document.querySelector('form').checkValidity(),fields:[...document.querySelectorAll('form [name]')].map(e=>e.name),submit:!!document.querySelector('button[type=submit]'),captcha:!!document.querySelector('label[for=captcha]')}));
check('Inquiry retains required validation captcha and submit',form.invalid&&form.submit&&form.captcha&&['name','email','type','message','company','captcha'].every(k=>form.fields.includes(k)),form);
// Invalid browser validation cannot invoke EmailJS; no valid submission is attempted
await page.click('button[type=submit]');
check('Empty inquiry submission remains blocked',await page.evaluate(()=>!!document.querySelector('input:invalid')&&!document.querySelector('button[type=submit]').disabled));
for(const width of [390,320]) {
 await page.cdp('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:true});
 for(const route of ['/about','/products/ndsd']) {await page.goto('http://localhost:5173'+route);await page.evaluate(()=>scrollTo({top:65,behavior:'instant'}));await page.waitForFunction(()=>document.querySelector('header').dataset.theme==='dark');const evidence=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,logo:document.querySelector('header img').getAttribute('src'),hiddenHeaderControls:[...document.querySelectorAll('header nav')].every(e=>getComputedStyle(e).display==='none')}));check(`Mobile ${width} ${route} scroll and containment`,!evidence.overflow&&evidence.logo.includes('white')&&evidence.hiddenHeaderControls,evidence);}
}
await page.goto('http://localhost:5173/about?lang=en');await page.waitForFunction(()=>document.documentElement.lang==='en');
check('Direct English query translates company and metadata',await page.evaluate(()=>document.querySelector('h1').textContent.includes('Starting')&&document.title.includes('Company')));
await page.click('footer .language-switch');await page.waitForFunction(()=>document.documentElement.lang==='ko');
check('Footer language control works on mobile',await page.evaluate(()=>location.search.includes('lang=ko')&&document.querySelector('h1').textContent.includes('약국의')));
await page.goto('http://localhost:5173/');await page.focus('a[data-enter]');await page.press('a[data-enter]','Enter');await page.waitForURL('**/about');check('Keyboard Enter activates intro navigation',await page.evaluate(()=>location.pathname==='/about'));
await fs.writeFile('/tmp/maipharm-implementation/ui-interactions-result.json',JSON.stringify(results,null,2));console.log(JSON.stringify({passed:results.filter(r=>r.pass).length,failed:results.filter(r=>!r.pass)},null,2));if(results.some(r=>!r.pass))process.exitCode=1;
