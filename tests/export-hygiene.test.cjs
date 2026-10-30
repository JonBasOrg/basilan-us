const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
test('public export checker does not embed private organization domains in its own source',()=>{
 const source=fs.readFileSync('scripts/check-export.cjs','utf8');assert.doesNotMatch(source,/["'][a-z0-9-]+\.onmicrosoft\.com["']/i);assert.doesNotMatch(source,/["'][a-z0-9-]+\.(?:local|internal|lan)["']/i);
});
