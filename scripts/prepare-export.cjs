const fs=require('node:fs');const path=require('node:path');
function prepareExport(root=process.cwd()) {
 fs.rmSync(path.join(root,'out'),{recursive:true,force:true});
 fs.rmSync(path.join(root,'.next/types'),{recursive:true,force:true});
 fs.rmSync(path.join(root,'public/resume'),{recursive:true,force:true});
 for(const entry of fs.readdirSync(path.join(root,'public'),{withFileTypes:true})){
  if(entry.isFile() && /(?:resume|curriculum|career|\bcv\b).*\.pdf$/i.test(entry.name))throw new Error('Private career documents must not be placed in public assets');
 }
}
if(require.main===module)prepareExport();
module.exports={prepareExport};
