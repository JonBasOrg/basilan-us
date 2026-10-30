const {test}=require('node:test'); const assert=require('node:assert/strict');
const {canDisplay}=require('../src/lib/profile-gate.cjs');
test('pending profile content stays out of normal builds',()=>{assert.equal(canDisplay({approval:'pending',confidentiality:'public-candidate'},false),false);});
