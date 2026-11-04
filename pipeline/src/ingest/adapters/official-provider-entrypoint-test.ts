import assert from 'node:assert/strict';
import type { CapturedDocument } from './document-set.ts';
import { officialDocsParser, type OfficialDocsAdapterConfig } from './official-provider-docs.ts';

export function assertOfficialProviderObservationAdapter(
  config: OfficialDocsAdapterConfig,
  modelId: string,
): void {
  const source = config.sources.find(({ scope }) => scope === 'model_catalog') ?? config.sources[0];
  assert.ok(source, `${config.providerId} registers at least one source`);
  const document: CapturedDocument = {
    source,
    body: `Official model reference: ${modelId}`,
    metadata: {
      source_id: source.id,
      market: source.market,
      source_name: source.name,
      request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z',
      http_status: 200,
      content_type: 'text/markdown',
      etag: null,
      last_modified: null,
      content_hash: `sha256:${'a'.repeat(64)}`,
      byte_length: 32,
      collector_version: 'test',
      body_file: `${source.id}.body`,
    },
  };

  assert.ok(config.modelIdPattern.test(modelId), `${config.providerId} recognizes its documented model ID format`);
  const facts = officialDocsParser.sourceGapFacts([document], config);
  assert.deepEqual(facts.model_id_mentions.map(({ ids }) => ids), [[modelId]]);
  assert.deepEqual(facts.known_limitations, config.knownLimitations);

  const ir = officialDocsParser.toCollectionIR(config.providerId, [document], facts);
  assert.equal(ir.provider_id, config.providerId);
  assert.deepEqual(ir.source_refs, [source.id]);
  assert.deepEqual(ir.document_observations[0]?.model_id_mentions, [modelId]);
  assert.deepEqual(ir.services, [], 'document mentions stay observations until provider-specific evidence maps domain facts');

  const missingSourceFacts = officialDocsParser.sourceGapFacts([], config);
  assert.deepEqual(missingSourceFacts.observations, []);
  assert.deepEqual(missingSourceFacts.model_id_mentions, []);
  assert.ok(missingSourceFacts.coverage_gaps.some(({ status }) => status === 'not_in_sources'));

  for (const body of ['', '<main><h1>Documentation layout changed</h1><p>No recognized model rows.</p></main>']) {
    const changedDocument = { ...document, body };
    const changedFacts = officialDocsParser.sourceGapFacts([changedDocument], config);
    const changedIR = officialDocsParser.toCollectionIR(config.providerId, [changedDocument], changedFacts);
    assert.deepEqual(changedFacts.model_id_mentions, [], 'empty or changed documents do not fabricate model ID observations');
    assert.deepEqual(changedIR.services, [], 'unrecognized document structure remains an observation, not supply');
    assert.equal(changedIR.coverage[0]?.status, 'not_parsed');
  }
}
