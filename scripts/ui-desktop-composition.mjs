// Run with ego-browser nodejs < scripts/ui-desktop-composition.mjs
// Optional CLI environment is intentionally unnecessary: edit base only for deployed review
const base='http://127.0.0.1:5173';
const fs=await import('node:fs/promises');
const task=await taskSpace('MaiPharm desktop composition revision');
const page=task.page('p1');
const results=[];
const check=(name,pass,evidence)=>results.push({name,pass:!!pass,evidence});
for(const width of [1440,1920,1024,768,390]) {
 await page.cdp('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<768});
 for(const route of ['/about','/products/ndsd']) {
  await page.goto(base+route+'?lang=ko');await page.waitForFunction(()=>document.querySelector('main h1'));await page.evaluate(()=>document.fonts.ready);
  const evidence=await page.evaluate(()=>{
   const box=s=>{const e=document.querySelector(s);if(!e)return null;const r=e.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,right:r.right,bottom:r.bottom}};
   const boxes=s=>[...document.querySelectorAll(s)].map(e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height,right:r.right,bottom:r.bottom}});
   const images=[...document.querySelectorAll('.pharmacy-photo,.founder-photo')].map(e=>({src:e.getAttribute('src'),loaded:e.complete&&e.naturalWidth>0,ratio:e.getBoundingClientRect().width/e.getBoundingClientRect().height,native:e.naturalWidth/e.naturalHeight}));
   return {width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,heroTitle:box('main h1'),heroSummary:box('main section:first-child .hero-description'),photo:box('.pharmacy-photo'),founder:box('.founder-photo'),identity:box('.founder-name'),experience:box('.experience'),feature:box('.ndsd-feature'),links:box('.solution-links'),faqTitle:box('main section:last-child h2'),faq:box('.brand-faq'),facts:boxes('.ndsd-facts>div'),steps:boxes('.start-steps>li'),field:boxes('.brand-columns>article'),images,sections:[...document.querySelectorAll('.brand-section')].map(e=>{const cs=getComputedStyle(e);return {content:e.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight)}})};
  });
  const beside=(a,b)=>a&&b&&a.right<=b.x+1&&Math.min(a.bottom,b.bottom)>Math.max(a.y,b.y);
  const stacked=(a,b)=>a&&b&&a.bottom<=b.y+1;
  const prefix=width+' '+route;
  check(prefix+' no horizontal overflow',!evidence.overflow,evidence.width);
  if(width>=1024) {
   check(prefix+' bounded content',evidence.sections.every(s=>s.content<=1281),evidence.sections);
   check(prefix+' FAQ heading beside answers',beside(evidence.faqTitle,evidence.faq),{title:evidence.faqTitle,answers:evidence.faq});
   if(route==='/about') {
    check(prefix+' story beside pharmacy photo',beside(evidence.heroTitle,evidence.photo),{title:evidence.heroTitle,photo:evidence.photo});
    check(prefix+' founder portrait beside identity and experience',beside(evidence.founder,evidence.identity)&&beside(evidence.founder,evidence.experience),{photo:evidence.founder,identity:evidence.identity,experience:evidence.experience});
    check(prefix+' feature beside eight solution links',beside(evidence.feature,evidence.links),{feature:evidence.feature,links:evidence.links});
    check(prefix+' native photo ratios and loaded assets',evidence.images.every(i=>i.loaded&&Math.abs(i.ratio-i.native)<.015),evidence.images);
    check(prefix+' field retains three columns',evidence.field.length===3&&evidence.field.every(b=>Math.abs(b.y-evidence.field[0].y)<1),evidence.field);
   } else {
    check(prefix+' NDSD headline beside summary',beside(evidence.heroTitle,evidence.heroSummary),{title:evidence.heroTitle,summary:evidence.heroSummary});
    check(prefix+' facts form two rows',evidence.facts.length===4&&beside(evidence.facts[0],evidence.facts[1])&&beside(evidence.facts[2],evidence.facts[3])&&stacked(evidence.facts[0],evidence.facts[2]),evidence.facts);
    check(prefix+' start steps form three columns',evidence.steps.length===3&&evidence.steps.every(b=>Math.abs(b.y-evidence.steps[0].y)<1)&&beside(evidence.steps[0],evidence.steps[1])&&beside(evidence.steps[1],evidence.steps[2]),evidence.steps);
   }
  } else if(width===390) {
   check(prefix+' mobile heading before summary',stacked(evidence.heroTitle,evidence.heroSummary),{title:evidence.heroTitle,summary:evidence.heroSummary});
   check(prefix+' mobile FAQ stays linear',stacked(evidence.faqTitle,evidence.faq),{title:evidence.faqTitle,answers:evidence.faq});
   if(route==='/about')check(prefix+' mobile founder and solutions preserve order',stacked(evidence.founder,evidence.identity)&&stacked(evidence.identity,evidence.experience)&&stacked(evidence.feature,evidence.links),evidence);
   else check(prefix+' mobile facts and steps stay linear',evidence.facts.slice(1).every((b,i)=>stacked(evidence.facts[i],b))&&evidence.steps.slice(1).every((b,i)=>stacked(evidence.steps[i],b)),{facts:evidence.facts,steps:evidence.steps});
  }
 }
}
await fs.writeFile('/tmp/maipharm-desktop-revision/geometry-result.json',JSON.stringify(results,null,2));
console.log(JSON.stringify({passed:results.filter(r=>r.pass).length,failed:results.filter(r=>!r.pass)},null,2));
if(results.some(r=>!r.pass))process.exitCode=1;
