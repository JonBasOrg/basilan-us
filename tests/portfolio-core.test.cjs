const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const {load}=require('./helpers.cjs');
test('preview contains exactly the 14 selected enterprise projects and six requested features',()=>{
 const selected=JSON.parse(fs.readFileSync('content/selection.json','utf8')).enterpriseProjects;const {loadPortfolio}=load('src/lib/portfolio.server.ts');const rows=loadPortfolio(undefined,{reviewPreview:'1'}).filter(p=>p.kind==='employer');assert.equal(rows.length,14);assert.deepEqual(new Set(rows.map(p=>p.id)),new Set(selected.map(p=>p.id)));assert.deepEqual(rows.filter(p=>p.featured).map(p=>p.id),selected.filter(p=>p.featured).map(p=>p.id));assert.ok(rows.every(p=>p.approval==='approved'));assert.equal(loadPortfolio().filter(p=>p.kind==='employer').length,14);
});
test('default output preserves all three existing personal products and media',()=>{
 const rows=load('src/lib/portfolio.server.ts').loadPortfolio().filter(p=>p.kind==='personal');assert.deepEqual(rows.map(p=>p.id),['trading-platform','classic-games','classic-games-web']);assert.equal(rows[0].url,'https://invest.basilan.us');assert.equal(rows[1].gallery.length,4);assert.equal(rows[2].url,'https://games.basilan.us');assert.ok(!JSON.stringify(rows).includes('internalReference'));
});
