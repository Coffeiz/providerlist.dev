import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { describe, it } from 'node:test';
import { writeProviderCollectionCandidate, type CapturedDocument } from '../adapters/document-set.ts';
import type { IngestSource, SnapshotMetadata } from '../types.ts';
import type { ProviderCollectionIR } from './provider-collection.ts';

const source: IngestSource = {
  id: 'provider-catalog',
  provider_id: 'example',
  name: '官方目录',
  url: 'https://example.com/models',
  enabled: true,
  accept: 'application/json',
  max_bytes: 1024,
  scope: 'model_catalog',
};
const metadata: SnapshotMetadata = {
  source_id: source.id,
  source_name: source.name,
  request_url: source.url,
  retrieved_at: '2026-10-26T00:00:00.000Z',
  http_status: 200,
  content_type: 'application/json',
  etag: null,
  last_modified: null,
  content_hash: `sha256:${'a'.repeat(64)}`,
  byte_length: 0,
  collector_version: 'test',
  body_file: 'catalog.body',
};
const documents: readonly CapturedDocument[] = [{ source, metadata, body: '[]' }];

function ir(observedAt: string): ProviderCollectionIR {
  return {
    ir_version: '1.0.0',
    provider_id: 'example',
    observed_at: observedAt,
    source_refs: [source.id],
    coverage: [{ source_ref: source.id, scope: 'model_catalog', status: 'complete', record_count: 0, record_unit: 'unique model IDs' }],
    document_observations: [],
    services: [],
    review_items: [],
  };
}

describe('ProviderCollectionIR 候选写入', () => {
  it('忽略 observed_at 的变化计算语义指纹，避免相同事实重复产生候选', async () => {
    const repoRoot = await mkdtemp(path.join(os.tmpdir(), 'providerlist-ir-'));
    try {
      const first = await writeProviderCollectionCandidate({
        repoRoot,
        providerId: 'example',
        documents,
        current: ir('2026-10-26T00:00:00.000Z'),
        renderReview: () => 'review',
      });
      const second = await writeProviderCollectionCandidate({
        repoRoot,
        providerId: 'example',
        documents,
        current: ir('2026-10-26T00:01:00.000Z'),
        renderReview: () => 'review',
      });

      assert.equal(first.changed, true);
      assert.equal(second.changed, false);
      assert.equal(first.fingerprint, second.fingerprint);
      const state = JSON.parse(await readFile(path.join(repoRoot, 'data/candidates/example/ir/state.json'), 'utf8')) as { facts: ProviderCollectionIR };
      assert.equal(state.facts.observed_at, '2026-10-26T00:01:00.000Z');
    } finally {
      await rm(repoRoot, { recursive: true, force: true });
    }
  });

  it('隔离 IR 状态，不覆盖旧合并器读取的 Provider 根候选', async () => {
    const repoRoot = await mkdtemp(path.join(os.tmpdir(), 'providerlist-ir-legacy-state-'));
    const legacyStatePath = path.join(repoRoot, 'data/candidates/example/state.json');
    const legacyState = { provider_id: 'example', candidate_hash: 'sha256:legacy', facts: { legacy_fact: true } };
    try {
      await mkdir(path.dirname(legacyStatePath), { recursive: true });
      await writeFile(legacyStatePath, `${JSON.stringify(legacyState)}\n`);
      await writeProviderCollectionCandidate({
        repoRoot,
        providerId: 'example',
        documents,
        current: ir('2026-10-26T00:00:00.000Z'),
        renderReview: () => 'review',
      });

      assert.deepEqual(JSON.parse(await readFile(legacyStatePath, 'utf8')), legacyState);
      const irState = JSON.parse(await readFile(path.join(repoRoot, 'data/candidates/example/ir/state.json'), 'utf8')) as { facts: ProviderCollectionIR };
      assert.equal(irState.facts.ir_version, '1.0.0');
    } finally {
      await rm(repoRoot, { recursive: true, force: true });
    }
  });

  it('在写入候选前拒绝 IR 到其他 Provider 或快照的引用', async () => {
    const repoRoot = await mkdtemp(path.join(os.tmpdir(), 'providerlist-invalid-ir-'));
    try {
      await assert.rejects(
        writeProviderCollectionCandidate({
          repoRoot,
          providerId: 'other-provider',
          documents,
          current: ir('2026-10-26T00:00:00.000Z'),
          renderReview: () => 'review',
        }),
        /IR Provider example 与候选 Provider other-provider 不一致/u,
      );
      await assert.rejects(
        writeProviderCollectionCandidate({
          repoRoot,
          providerId: 'example',
          documents,
          current: { ...ir('2026-10-26T00:00:00.000Z'), source_refs: ['missing-source'] },
          renderReview: () => 'review',
        }),
        /unknown_source_ref/u,
      );
    } finally {
      await rm(repoRoot, { recursive: true, force: true });
    }
  });
});
