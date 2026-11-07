import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
const source=await fs.readFile(new URL('../src/lib/structuredData.ts',import.meta.url),'utf8');
const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText;
const {buildStructuredData}=await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const base={pathname:'/about/',name:'회사소개',description:'실제 회사 소개',language:'ko',productNames:['팜스퀘어','메디믹스'],faq:[['질문','답변']]};
for(const [pathname,type] of [['/about/','AboutPage'],['/customer/','ContactPage'],['/products/','CollectionPage'],['/products/1/','Product'],['/products/ndsd/','SoftwareSourceCode']]) {
 test(`${pathname} retains semantic type and normalized breadcrumb`,()=>{const schema=buildStructuredData({...base,pathname});assert.equal(schema[0]['@type'],type);assert.equal(schema[0].url,'https://maipharm.com'+pathname.slice(0,-1));assert.equal(schema.find(s=>s['@type']==='BreadcrumbList').itemListElement.at(-1).item,schema[0].url);});
}
test('FAQ matches caller-rendered questions and answers without fabricated offers',()=>{const schema=buildStructuredData(base);const faq=schema.find(s=>s['@type']==='FAQPage');assert.deepEqual(faq.mainEntity,[{'@type':'Question',name:'질문',acceptedAnswer:{'@type':'Answer',text:'답변'}}]);assert.doesNotMatch(JSON.stringify(schema),/telephone|offers|rating|price/);});
test('Product list retains eight destinations when provided',()=>{const data=buildStructuredData({...base,pathname:'/products',productNames:Array.from({length:8},(_,i)=>'제품'+i)});assert.equal(data.find(s=>s['@type']==='ItemList').itemListElement.length,8);});
