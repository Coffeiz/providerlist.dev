import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { captureDocumentSet, latestSnapshotRetrievedAt, writeDocumentCandidate } from './document-set.ts';
import type { CandidateEnvelope, IngestSource, SnapshotMetadata } from '../types.ts';

const source: IngestSource = {
  id: 'fixture-catalog',
  provider_id: 'fixture',
  name: 'Fixture catalog',
  url: 'https://example.test/catalog',
  enabled: true,
  accept: 'text/markdown',
  max_bytes: 1024,
  scope: 'model_catalog',
};

test('document collection rejects an empty source registry instead of treating it as an empty catalog', async () => {
  await assert.rejects(captureDocumentSet('/tmp/providerlist-empty-source-test', []), /适配器没有登记来源/u);
});

test('document collection retries a failed registered source and surfaces the upstream failure', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-source-failure-'));
  const originalFetch = globalThis.fetch;
  let requests = 0;
  globalThis.fetch = async () => {
    requests += 1;
    return new Response('upstream unavailable', { status: 503 });
  };
  try {
    await assert.rejects(captureDocumentSet(root, [source]), /来源 fixture-catalog 采集失败（重试 3 次）：来源 fixture-catalog 返回 HTTP 503/u);
    assert.equal(requests, 3);
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('document collection retries HTTP 429 using Retry-After before continuing', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-source-retry-after-'));
  const originalFetch = globalThis.fetch;
  let requests = 0;
  globalThis.fetch = async () => {
    requests += 1;
    return requests === 1
      ? new Response('rate limited', { status: 429, headers: { 'retry-after': '0' } })
      : new Response('catalog', { headers: { etag: '"catalog-v1"' } });
  };
  try {
    const [document] = await captureDocumentSet(root, [source]);
    assert.equal(requests, 2);
    assert.equal(document?.body, 'catalog');
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('an empty successful document remains a captured source snapshot, not a failed or missing catalog', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-empty-document-'));
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response('', { status: 200, headers: { 'content-type': 'text/markdown' } });
  try {
    const [document] = await captureDocumentSet(root, [source]);
    assert.ok(document);
    assert.equal(document.body, '');
    assert.equal(document.metadata.http_status, 200);
    assert.equal(document.metadata.byte_length, 0);
    assert.equal(document.source.id, source.id);
    assert.match(await readFile(path.join(root, 'data/upstream/snapshots', source.id, document.metadata.body_file), 'utf8'), /^$/u);
  } finally {
    globalThis.fetch = originalFetch;
    await rm(root, { recursive: true, force: true });
  }
});

test('candidate observation time is the latest retrieved source evidence and rejects missing evidence', () => {
  assert.equal(latestSnapshotRetrievedAt([
    { retrieved_at: '2026-10-25T03:00:00.000Z' },
    { retrieved_at: '2026-10-25T01:00:00.000Z' },
  ]), '2026-10-25T03:00:00.000Z');
  assert.throws(() => latestSnapshotRetrievedAt([]), /空快照集确定观察时间/u);
  assert.throws(() => latestSnapshotRetrievedAt([{ retrieved_at: '' }]), /有效 retrieved_at/u);
  assert.throws(() => latestSnapshotRetrievedAt([{ retrieved_at: '2026-10-25T03:00:00+01:00' }]), /有效 retrieved_at/u);
});

test('document candidate records source retrieval time instead of runtime wall-clock time', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'providerlist-candidate-observed-at-'));
  const metadata = (sourceId: string, retrievedAt: string): SnapshotMetadata => ({
    source_id: sourceId,
    source_name: sourceId,
    request_url: `https://example.test/${sourceId}`,
    retrieved_at: retrievedAt,
    http_status: 200,
    content_type: 'text/markdown',
    etag: null,
    last_modified: null,
    content_hash: `sha256:${'a'.repeat(64)}`,
    byte_length: 0,
    collector_version: 'fixture',
    body_file: `${sourceId}.md`,
  });
  const documents = [
    { source, metadata: metadata(source.id, '2026-10-25T01:00:00.000Z'), body: '' },
    { source: { ...source, id: 'fixture-pricing', scope: 'pricing' as const }, metadata: metadata('fixture-pricing', '2026-10-25T03:00:00.000Z'), body: '' },
  ];
  try {
    const result = await writeDocumentCandidate({
      repoRoot: root,
      providerId: 'fixture',
      candidateKind: 'fixture-observation',
      documents,
      current: { example: true },
      modelCount: 0,
      renderReview: () => 'fixture review',
    });
    assert.ok(result.reviewPath);
    const candidate = JSON.parse(await readFile(path.join(root, result.reviewPath), 'utf8')) as CandidateEnvelope<{ example: boolean }>;
    assert.equal(candidate.observed_at, '2026-10-25T03:00:00.000Z');
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
