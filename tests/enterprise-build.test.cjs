const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const os=require('node:os');
const scratch=path.join(os.homedir(),'AppData/Local/hermes/cache/scratch');
test('build cleanup removes stale resume and prior exports even with review source configured',()=>{
 const {prepareExport}=require('../scripts/prepare-export.cjs');const root=fs.mkdtempSync(path.join(scratch,'portfolio-clean-'));
 for(const file of ['public/resume/eduardo-basilan-resume.pdf','out/resume/index.html','out/experience/index.html']){const p=path.join(root,file);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,'stale');}
 try{prepareExport(root);assert.equal(fs.existsSync(path.join(root,'public/resume')),false);assert.equal(fs.existsSync(path.join(root,'out')),false);}finally{fs.rmSync(root,{recursive:true,force:true});}
});
