const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
const project=id=>JSON.parse(fs.readFileSync(`content/projects/${id}.json`,'utf8'));
test('cost portfolio reflects implemented PowerShell and executive reporting without unverified expiration automation',()=>{
 const cost=project('azure-cost-optimization-reporting');assert.ok(cost.technologies.includes('PowerShell'));assert.match(cost.description,/executive/i);assert.match(cost.description,/tag/i);assert.match(cost.description,/Reserved Instances/);assert.match(cost.description,/Savings Plans/);assert.doesNotMatch(cost.description,/expiration tracking|expiry alerts|scheduled reports|realized savings/i);
});
test('operational copy distinguishes monthly license review and evaluated backup tooling from deployed automation',()=>{
 assert.match(project('m365-licensing-governance').description,/monthly/i);assert.match(project('cloud-backup-disaster-recovery').description,/Evaluated Azure Backup/);assert.ok(project('azure-resource-inventory-automation').technologies.includes('PowerShell'));assert.ok(project('fabric-powerbi-data-platform').technologies.includes('Azure Synapse Analytics'));assert.match(project('enterprise-sql-performance-rca').description,/blocking.*wait/i);
});
