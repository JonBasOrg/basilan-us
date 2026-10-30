const fs=require('node:fs');const path=require('node:path');const ts=require('typescript');
function load(file,cache=new Map()){
 const absolute=path.resolve(file);if(cache.has(absolute))return cache.get(absolute).exports;const mod={exports:{}};cache.set(absolute,mod);
 const code=ts.transpileModule(fs.readFileSync(absolute,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true}}).outputText;
 function req(id){if(id==='server-only')return {};if(id.startsWith('@/')||id.startsWith('.')){const base=id.startsWith('@/')?path.resolve('src',id.slice(2)):path.resolve(path.dirname(absolute),id);for(const ext of ['','.ts','.tsx'])if(fs.existsSync(base+ext)&&fs.statSync(base+ext).isFile())return load(base+ext,cache);}return require(id);}
 new Function('require','module','exports',code)(req,mod,mod.exports);return mod.exports;
}
module.exports={load};
