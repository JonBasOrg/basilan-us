const {test}=require('node:test');const assert=require('node:assert/strict');
test('review packet is generated from exact current project, biography and recognition content',()=>{
 const {buildPacket}=require('../scripts/render-content-review.cjs');const text=buildPacket(process.cwd());assert.match(text,/March 2026/);assert.match(text,/Microsoft Certified Professional/);assert.match(text,/Apex Global Solutions \(AGS\)/);assert.match(text,/## All 14 project descriptions/);assert.match(text,/Do not publish/);assert.ok(!text.includes('sourceReference'));assert.ok(!text.includes('memory-vault'));
});
