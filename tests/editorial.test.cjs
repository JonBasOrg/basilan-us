const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const os=require('node:os');const {load}=require('./helpers.cjs');
test('awards require explicit public approval even in local project review mode',()=>{
 const root=fs.mkdtempSync(path.join(os.homedir(),'AppData/Local/hermes/cache/scratch/editorial-'));fs.writeFileSync(path.join(root,'awards.json'),JSON.stringify({entries:[{title:'Pending award',year:2017,issuer:null,description:'draft',approval:'pending',confidentiality:'public',publicVisible:true},{title:'Approved award',year:2015,issuer:'Confirmed issuer',description:'reviewed',approval:'approved',confidentiality:'public',publicVisible:true}]}));
 try{const {loadEditorial}=load('src/lib/editorial.server.ts');assert.deepEqual(loadEditorial(root,'1').awards.map(a=>a.title),['Approved award']);}finally{fs.rmSync(root,{recursive:true,force:true});}
});
