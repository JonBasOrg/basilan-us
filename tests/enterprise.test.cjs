const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const {load}=require('./helpers.cjs');
test('public visibility is explicit and false or missing records stay hidden even during review',()=>{
 const base=JSON.parse(fs.readFileSync('content/projects/trading-platform.json','utf8')); const root=fs.mkdtempSync(path.join(require('node:os').homedir(),'AppData/Local/hermes/cache/scratch/visibility-'));
 for(const [i,value] of [[0,true],[1,false],[2,undefined]])fs.writeFileSync(path.join(root,`${i}.json`),JSON.stringify({...base,id:`test-${i}`,slug:`test-${i}`,caseStudy:`/projects/test-${i}`,publicVisible:value}));
 try{const {loadPortfolio}=load('src/lib/portfolio.server.ts');assert.equal(loadPortfolio(root,{reviewPreview:'1'}).length,1);}finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('category filter isolates enterprise database work without hiding personal projects globally',()=>{
 const {selectProjects}=load('src/lib/portfolio.ts'); const base=JSON.parse(fs.readFileSync('content/projects/trading-platform.json','utf8'));
 const rows=[{...base,id:'sql',category:'Database & Data Platforms'},{...base,id:'cloud',category:'Cloud & Infrastructure'}];
 assert.deepEqual(selectProjects(rows,{category:'Database & Data Platforms'}).map(p=>p.id),['sql']);
});
test('enterprise details keep natural prose and never render private provenance or report headings',()=>{
 const React=require('react');const {renderToStaticMarkup}=require('react-dom/server');const {GenericCaseStudy}=load('src/components/projects/GenericCaseStudy.tsx');
 const base=JSON.parse(fs.readFileSync('content/projects/trading-platform.json','utf8'));
 const html=renderToStaticMarkup(React.createElement(GenericCaseStudy,{project:{...base,kind:'employer',sources:[{description:'DO NOT RENDER PRIVATE PROVENANCE'}]}}));
 assert.ok(html.includes(base.description));for(const label of ['>Overview<','>Implementation<','>Responsibilities<','DO NOT RENDER PRIVATE PROVENANCE'])assert.ok(!html.includes(label),label);
});
