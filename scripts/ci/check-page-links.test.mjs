import assert from 'node:assert/strict';
import test from 'node:test';
import { collectPageLinks, isMarkdownTarget } from './check-page-links.mjs';

test('detects markdown page links despite query strings and fragments', () => {
  assert.equal(isMarkdownTarget('https://docs.example.com/guide.md'), true);
  assert.equal(isMarkdownTarget('https://docs.example.com/guide.MD?lang=zh#top'), true);
  assert.equal(isMarkdownTarget('https://docs.example.com/guide'), false);
});

test('collects user-facing documentation links but ignores source evidence URLs', () => {
  const links = collectPageLinks({
    docs: { overview: 'https://docs.example.com/overview' },
    services: [{ endpoints: [{ documentation: 'https://docs.example.com/api' }] }],
    links: { official: 'https://example.com/plan' },
    sources: [{ url: 'https://docs.example.com/source.md' }],
  });

  assert.deepEqual(links.map(({ path }) => path), [
    '$.docs.overview',
    '$.services[0].endpoints[0].documentation',
    '$.links.official',
  ]);
});
