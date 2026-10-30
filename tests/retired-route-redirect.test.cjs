const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('retired experience URLs redirect to the approved About page before stale asset lookup', () => {
  const rules = fs.readFileSync(path.join(__dirname, '../public/_redirects'), 'utf8')
    .split(/\r?\n/).filter(line => line.trim() && !line.trim().startsWith('#'))
    .map(line => line.trim().split(/\s+/));
  for (const source of ['/experience', '/experience/*']) {
    const rule = rules.find(row => row[0] === source);
    assert.ok(rule, `Missing retirement redirect for ${source}`);
    assert.equal(rule[1], '/about/');
    assert.equal(rule[2], '301');
  }
  assert.equal(fs.existsSync(path.join(__dirname, '../src/app/experience/page.tsx')), false);
});
