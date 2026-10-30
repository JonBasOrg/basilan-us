const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
test('owner March 2026 confirmations constrain migration and retired ExpressRoute wording',()=>{
 const migration=JSON.parse(fs.readFileSync('content/projects/enterprise-data-center-exit-azure-migration.json','utf8'));const network=JSON.parse(fs.readFileSync('content/projects/enterprise-networking-cloud-connectivity.json','utf8'));assert.equal(migration.status,'Completed');assert.equal(migration.dates.end,'2026-03');assert.match(migration.description,/March 2026/);assert.match(migration.description,/selected legacy/);assert.match(network.description,/ExpressRoute.*retired.*March 2026/);assert.ok(!network.technologies.some(t=>/^ExpressRoute$/i.test(t)));
});
