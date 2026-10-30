const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
test('project-centric site removes resume and experience routes and all timeline/PDF controls', () => {
  for (const route of ['resume', 'experience']) assert.ok(!fs.existsSync(`src/app/${route}/page.tsx`), `${route} must not remain a route`);
  for (const file of ['src/components/sections/ProfileSections.tsx', 'src/app/about/page.tsx', 'src/app/sitemap.ts']) {
    const text = fs.readFileSync(file, 'utf8');
    assert.doesNotMatch(text, /CareerTimeline|ResumeLinks|application\/pdf|\/resume|\/experience/);
  }
  const skills = fs.readFileSync('src/app/skills/page.tsx', 'utf8');
  assert.match(skills, /redirect/);
  assert.match(skills, /\/about#expertise/);
});
