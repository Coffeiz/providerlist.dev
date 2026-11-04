import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { captureSnapshot } from './snapshot.ts';
import type { IngestSource } from './types.ts';

const source: IngestSource = {
  id: 'fixture-source',
  provider_id: 'fixture',
  name: 'Fixture source',
  url: 'https://example.test/fixture',
  enabled: true,
  accept: 'text/markdown',
  max_bytes: 16,
};

test('snapshot capture rejects disabled sources before making a request', async () => {
  const originalFetch = globalThis.fetch;
  let requests = 0;
  globalThis.fetch = async () => {
    requests += 1;
    return new Response('unexpected');
  };
  try {
    await assert.rejects(captureSnapshot({ ...source, enabled: false }, { repoRoot: os.tmpdir() }), /来源 fixture-source 已停用/u);
    assert.equal(requests, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('snapshot capture rejects upstream HTTP errors and writes no evidence snapshot', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-http-error-'));
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response('not found', { status: 404 });
  try {
    await assert.rejects(captureSnapshot(source, { repoRoot: root }), /来源 fixture-source 返回 HTTP 404/u);
    await assert.rejects(readdir(path.join(root, 'data/upstream/snapshots', source.id)), { code: 'ENOENT' });
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('snapshot capture preserves a successful empty response as a zero-byte source observation', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-empty-'));
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response('', { status: 200, headers: { 'content-type': 'text/markdown' } });
  try {
    const result = await captureSnapshot(source, { repoRoot: root });
    assert.equal(result.metadata.http_status, 200);
    assert.equal(result.metadata.byte_length, 0);
    assert.equal(result.created, true);
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('conditional capture reuses the persisted body and content-addressed snapshot on HTTP 304', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-conditional-'));
  const originalFetch = globalThis.fetch;
  const requests: Headers[] = [];
  globalThis.fetch = async (_input, init) => {
    requests.push(new Headers(init?.headers));
    if (requests.length === 1) return new Response('# stable catalog', {
      headers: { etag: '"catalog-v1"', 'last-modified': 'Wed, 28 Oct 2026 10:00:00 GMT', 'content-type': 'text/markdown' },
    });
    return new Response(null, { status: 304 });
  };
  try {
    const first = await captureSnapshot(source, { repoRoot: root });
    const second = await captureSnapshot(source, { repoRoot: root });
    assert.equal(requests[1]?.get('if-none-match'), '"catalog-v1"');
    assert.equal(requests[1]?.get('if-modified-since'), 'Wed, 28 Oct 2026 10:00:00 GMT');
    assert.equal(second.created, false);
    assert.equal(second.metadata.content_hash, first.metadata.content_hash);
    assert.equal(await readFile(path.join(root, 'data/upstream/snapshots', source.id, second.metadata.body_file), 'utf8'), '# stable catalog');
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('a corrupt conditional cache falls back to an unconditional fetch', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-cache-recovery-'));
  const originalFetch = globalThis.fetch;
  const requests: Headers[] = [];
  globalThis.fetch = async (_input, init) => {
    requests.push(new Headers(init?.headers));
    return new Response(requests.length === 1 ? 'old catalog' : 'new catalog', {
      headers: { etag: requests.length === 1 ? '"old"' : '"new"' },
    });
  };
  try {
    await captureSnapshot(source, { repoRoot: root });
    await writeFile(path.join(root, '.cache/provider-ingest', source.id, 'latest.json'), '{broken');
    const next = await captureSnapshot(source, { repoRoot: root });
    assert.equal(requests[1]?.has('if-none-match'), false);
    assert.equal(await readFile(path.join(root, 'data/upstream/snapshots', source.id, next.metadata.body_file), 'utf8'), 'new catalog');
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('same-content 200 responses refresh cache validators without changing the immutable snapshot', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-validator-refresh-'));
  const originalFetch = globalThis.fetch;
  const requests: Headers[] = [];
  globalThis.fetch = async (_input, init) => {
    requests.push(new Headers(init?.headers));
    if (requests.length === 1) return new Response('stable catalog', { headers: { etag: '"v1"' } });
    if (requests.length === 2) return new Response('stable catalog', { headers: { etag: '"v2"' } });
    return new Response(null, { status: 304 });
  };
  try {
    const first = await captureSnapshot(source, { repoRoot: root });
    const second = await captureSnapshot(source, { repoRoot: root });
    await captureSnapshot(source, { repoRoot: root });
    assert.equal(second.metadata.content_hash, first.metadata.content_hash);
    assert.equal(requests[2]?.get('if-none-match'), '"v2"');
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('snapshot capture retains Retry-After metadata for rate-limit backoff', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-snapshot-retry-after-'));
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response('rate limited', { status: 429, headers: { 'retry-after': '7' } });
  try {
    await assert.rejects(captureSnapshot(source, { repoRoot: root }), (error: unknown) => {
      assert.equal((error as { status?: number }).status, 429);
      assert.equal((error as { retryAfterMs?: number }).retryAfterMs, 7000);
      return true;
    });
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});
