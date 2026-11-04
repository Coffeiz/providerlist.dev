import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Model, ProviderDocument } from '@providerlist/schema/types';
import type { ProviderCollectionIR } from './provider-collection.ts';
import { resolveProviderCollectionIdentities } from './identity-resolution.ts';

const registry: readonly Model[] = [
  { id: 'developer/model-one', developer_id: 'developer', developer_name: 'Developer', name: 'Model One' },
  { id: 'model-two', developer_id: 'other', developer_name: 'Other', name: 'Model Two' },
  { id: 'other/model-three', developer_id: 'other', developer_name: 'Other', name: 'Model Three' },
  { id: 'another/model-three', developer_id: 'another', developer_name: 'Another', name: 'Model Three duplicate' },
];

function ir(): ProviderCollectionIR {
  const observed = <T>(value: T) => ({ value, evidence: [] });
  return {
    ir_version: '1.0.0',
    provider_id: 'provider',
    observed_at: '2026-10-26T00:00:00.000Z',
    source_refs: [],
    coverage: [],
    document_observations: [],
    services: [{
      id: observed('cn'),
      endpoints: [],
      capabilities: [],
      plans: [],
      offerings: ['developer/model-one', 'tenant/model-two', 'tenant/model-three', 'unmatched'].map((id) => ({
        provider_model_id: observed(id),
        service_id: observed('cn'),
        supply_observations: [],
        operations: [],
        prices: [],
      })),
    }],
    review_items: [],
  };
}

describe('ProviderCollectionIR Model 身份解析', () => {
  it('记录精确 ID、唯一斜杠后缀、歧义与未匹配规则', () => {
    const result = resolveProviderCollectionIdentities(ir(), registry);

    assert.deepEqual(result.map(({ match, model_ref, candidates }) => [match, model_ref, candidates]), [
      ['exact_id', 'developer/model-one', ['developer/model-one']],
      ['model_id_after_slash', 'model-two', ['model-two']],
      ['ambiguous', null, ['another/model-three', 'other/model-three']],
      ['unmatched', null, []],
    ]);
    assert.match(result[1]!.review_note, /斜杠后的型号段/u);
    assert.match(result[2]!.review_note, /多个规范 Model/u);
  });

  it('保留同一 Service 下已有且仍有效的关联，并说明保护理由', () => {
    const previous: ProviderDocument = {
      schema_version: '1.0.0',
      data_version: '1',
      generated_at: '2026-10-26T00:00:00.000Z',
      provider: {
        id: 'provider', name: 'Provider', aliases: [], kind: 'first_party',
      },
      services: [{
        id: 'cn', provider_id: 'provider', name: 'China',
        offerings: [{ id: 'tenant/model-two', service_id: 'cn', model_ref: 'developer/model-one' }],
      }],
    };
    const result = resolveProviderCollectionIdentities(ir(), registry, previous)
      .find(({ provider_model_id }) => provider_model_id === 'tenant/model-two');

    assert.equal(result?.model_ref, 'developer/model-one');
    assert.equal(result?.match, 'preserved_existing');
    assert.match(result?.review_note ?? '', /沿用上一版 Provider 数据/u);
  });
});
