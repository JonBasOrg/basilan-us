const { test } = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('./helpers.cjs');

test('project metadata and page resolve Next 16 asynchronous route params', async () => {
  const route = load('src/app/projects/[slug]/page.tsx');
  const props = { params: Promise.resolve({ slug: 'trading-platform' }) };
  const metadata = await route.generateMetadata(props);
  assert.equal(typeof metadata.title, 'string');
  assert.ok(metadata.title.length > 0);
  assert.equal(metadata.alternates.canonical, 'https://basilan.us/projects/trading-platform');
  const page = await route.default(props);
  assert.equal(page.props.project.slug, 'trading-platform');
  assert.deepEqual(await route.generateMetadata({ params: Promise.resolve({ slug: 'not-a-project' }) }), {});
  await assert.rejects(async () => route.default({ params: Promise.resolve({ slug: 'not-a-project' }) }), /NEXT_HTTP_ERROR_FALLBACK;404/);
});

test('metadata routes explicitly opt into static export', () => {
  for (const file of ['src/app/robots.ts', 'src/app/sitemap.ts']) {
    const route = load(file);
    assert.equal(route.dynamic, 'force-static', file);
    assert.ok(route.default());
  }
});
