const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const {load}=require('./helpers.cjs');
test('enterprise discovery respects the owner selection manifest',()=>{
 const root=fs.mkdtempSync(path.join(require('node:os').homedir(),'AppData/Local/hermes/cache/scratch/selected-'));const dir=path.join(root,'projects');fs.mkdirSync(dir);fs.writeFileSync(path.join(root,'selection.json'),JSON.stringify({enterpriseProjects:[{id:'chosen'}]}));const base=JSON.parse(fs.readFileSync('content/projects/trading-platform.json','utf8'));
 for(const id of ['chosen','not-selected'])fs.writeFileSync(path.join(dir,`${id}.json`),JSON.stringify({...base,id,slug:id,caseStudy:`/projects/${id}`,kind:'employer'}));
 try{assert.deepEqual(load('src/lib/portfolio.server.ts').loadPortfolio(dir).map(p=>p.id),['chosen']);fs.unlinkSync(path.join(root,'selection.json'));assert.equal(load('src/lib/portfolio.server.ts').loadPortfolio(dir).filter(p=>p.kind==='employer').length,0,'missing owner selection must deny employer discovery');}finally{fs.rmSync(root,{recursive:true,force:true});}
});
