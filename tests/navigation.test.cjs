const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
function load(file, cache = new Map()) {
  const absolute = path.resolve(file);
  if (cache.has(absolute)) return cache.get(absolute).exports;
  const module = { exports: {} }; cache.set(absolute, module);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const localRequire = id => {
    if (id === 'server-only') return {};
    if (id.startsWith('@/') || id.startsWith('.')) {
      const base = id.startsWith('@/') ? path.resolve('src', id.slice(2)) : path.resolve(path.dirname(absolute), id);
      for (const ext of ['', '.ts', '.tsx']) if (fs.existsSync(base + ext) && fs.statSync(base + ext).isFile()) return load(base + ext, cache);
    }
    return require(id);
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
test('navigation has exactly five destinations and highlights LinkedIn without duplicate contact', () => {
  const { site } = load('src/content/site.ts');
  assert.deepEqual(site.nav.map(item => item.label), ['Home', 'About', 'Projects', 'Awards', 'Contact']);
  assert.equal(site.social.linkedin, 'https://www.linkedin.com/in/ebasilanjr/');
  const nav = fs.readFileSync('src/components/layout/Nav.tsx', 'utf8');
  assert.ok(!nav.includes('mailto:'));
  assert.match(nav, /site\.social\.linkedin/);
  assert.match(nav, /LinkedIn/);
  for (const safeguard of ['Escape', 'overflow-y-auto', 'aria-expanded', 'aria-controls']) assert.ok(nav.includes(safeguard));
  const hero = renderToStaticMarkup(React.createElement(load('src/components/sections/Hero.tsx').Hero));
  assert.match(hero, /Explore My Projects/);
  assert.match(hero, /About Me/);
  assert.ok(!hero.includes('mailto:'));
});

test('homepage separates featured enterprise projects from all personal projects with balanced cards', () => {
  const home = fs.readFileSync('src/app/page.tsx', 'utf8');
  assert.match(home, /p.kind === "employer" && p.featured/);
  assert.match(home, /p.kind === "personal"/);
  assert.doesNotMatch(home, /Flagship|TradingMockup|GamesMockup|CurrentlyBuilding|IdeaToSoftware/);
  assert.match(home, /All projects/);
  assert.match(home, /emphasize=\{false\}/);
  const { ProjectCard } = load('src/components/projects/ProjectCard.tsx');
  const project = JSON.parse(fs.readFileSync('content/projects/trading-platform.json'));
  const html = renderToStaticMarkup(React.createElement(ProjectCard, { project, emphasize: false }));
  assert.ok(html.includes(project.description));
  assert.ok(!html.includes('line-clamp'));
  assert.ok(html.includes(project.caseStudy));
  const pending = renderToStaticMarkup(React.createElement(ProjectCard, { project: {...project, approval: 'pending', year: null, kind: 'employer', image: null, useMockup: undefined}, emphasize: false }));
  assert.match(pending, /Pending approval/);
  assert.ok(!pending.includes('md:col-span-2'));
});


test('About consolidates approved expertise with supporting project links, and awards use only the shared facade', () => {
  assert.ok(fs.existsSync('src/components/sections/Expertise.tsx'), 'Expertise component must exist');
  const expertise = fs.readFileSync('src/components/sections/Expertise.tsx', 'utf8');
  assert.match(expertise, /@\/content\/enterprise/);
  assert.match(expertise, /projectSlugs/);
  assert.match(expertise, /projects\.find/);
  assert.match(expertise, /id="expertise"/);
  const about = fs.readFileSync('src/app/about/page.tsx', 'utf8');
  assert.match(about, /<Expertise/);
  assert.doesNotMatch(about, /@\/content\/experience/);
  const sections = fs.readFileSync('src/components/sections/ProfileSections.tsx', 'utf8');
  assert.match(sections, /awards, reviewMode.*@\/content\/enterprise/);
  assert.doesNotMatch(sections, /node:fs|canDisplay|issuer \?\?/);
  assert.match(sections, /No awards have been approved/);
});


test('hero leads with enterprise capabilities and legacy profile content delegates to the approval facade', () => {
  const { site } = load('src/content/site.ts');
  for (const capability of ['Azure', 'SQL', 'Security', 'Automation']) assert.ok(site.positioning.some(word => word.includes(capability)), capability);
  const legacy = fs.readFileSync('src/content/experience.ts', 'utf8');
  assert.match(legacy, /@\/content\/enterprise/);
  assert.doesNotMatch(legacy, /export const profile =|export const expertiseAreas|export const techGroups/);
  const contact = renderToStaticMarkup(React.createElement(load('src/app/contact/page.tsx').default));
  assert.ok(contact.includes('mailto:jon@basilan.us'));
  assert.ok(contact.includes('https://www.linkedin.com/in/ebasilanjr/'));
});
