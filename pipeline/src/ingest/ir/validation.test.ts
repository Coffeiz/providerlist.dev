import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { SnapshotMetadata } from '../types.ts';
import type { ProviderCollectionIR } from './provider-collection.ts';
import { assertValidProviderCollectionIR, validateProviderCollectionIR } from './validation.ts';

const snapshot: SnapshotMetadata = {
  source_id: 'provider-catalog',
  source_name: '官方目录',
  request_url: 'https://example.com/models',
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

function emptyIR(): ProviderCollectionIR {
  return {
    ir_version: '1.0.0',
    provider_id: 'example',
    observed_at: '2026-10-26T00:00:00.000Z',
    source_refs: ['provider-catalog'],
    coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'complete', record_count: 0, record_unit: 'unique model IDs' }],
    document_observations: [],
    services: [],
    review_items: [],
  };
}

describe('ProviderCollectionIR 校验', () => {
  it('允许来源明确完整且结果为零条的覆盖记录', () => {
    assert.deepEqual(validateProviderCollectionIR(emptyIR(), [snapshot]), []);
  });

  it('逐来源核对登记的数据域和市场，避免其它域的 coverage 掩盖缺项', () => {
    const sources = [{ id: 'provider-catalog', scope: 'pricing' as const, market: 'global' as const }];
    const wrongDomain = validateProviderCollectionIR(emptyIR(), [snapshot], sources);
    assert.ok(wrongDomain.some(({ code }) => code === 'missing_registered_scope_coverage'));

    const wrongMarket = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'pricing', market: 'cn', status: 'partial' }],
    }, [snapshot], sources);
    assert.ok(wrongMarket.some(({ code }) => code === 'missing_registered_scope_coverage'));

    const correct = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'pricing', market: 'global', status: 'partial' }],
    }, [snapshot], sources);
    assert.deepEqual(correct, []);
  });

  it('来源未声明 scope 时不擅自推断为 documentation', () => {
    const sourceWithoutScope = [{ id: 'provider-catalog', market: 'global' as const }];
    const ir = {
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', market: 'global', status: 'partial' as const }],
    };
    assert.deepEqual(validateProviderCollectionIR(ir, [snapshot], sourceWithoutScope), []);
  });

  it('要求每个已计数的 coverage 明确单位，且拒绝脱离计数的单位', () => {
    const missingUnit = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'complete', record_count: 0 }],
    }, [snapshot]);
    assert.ok(missingUnit.some(({ code, path }) => code === 'missing_record_count_unit' && path === '$.coverage[0].record_unit'));

    const blankUnit = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'partial', record_count: 1, record_unit: '  ' }],
    }, [snapshot]);
    assert.ok(blankUnit.some(({ code }) => code === 'missing_record_count_unit'));

    const orphanUnit = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'partial', record_unit: 'models' }],
    }, [snapshot]);
    assert.ok(orphanUnit.some(({ code }) => code === 'record_count_unit_without_count'));
  });

  it('允许适配器定义源记录计数单位，仅对标准 IR 事实单位自动复算', () => {
    for (const recordUnit of ['recognized Token price rows', 'API Endpoint and Route records']) {
      const sourceCount = validateProviderCollectionIR({
        ...emptyIR(),
        coverage: [{ source_ref: 'provider-catalog', scope: 'api', status: 'partial', record_count: 3, record_unit: recordUnit }],
      }, [snapshot]);
      assert.deepEqual(sourceCount, [], `${recordUnit} is an audited source-record unit`);
    }
  });

  it('拒绝未登记的 record_unit，避免未审计计数口径混入 coverage', () => {
    const ir = {
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'api', status: 'partial' as const, record_count: 2, record_unit: 'misc rows' }],
    };
    assert.ok(validateProviderCollectionIR(ir, [snapshot]).some(({ code }) => code === 'unsupported_record_count_unit'));
  });

  it('只允许明确标注为 recognized 的采集器源侧计数不与聚合 IR 事实数比较', () => {
    const ir = {
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'api', status: 'partial' as const, record_count: 8, record_unit: 'recognized API source records' }],
    };
    assert.deepEqual(validateProviderCollectionIR(ir, [snapshot]), []);
  });

  it('拒绝同一来源、数据域和市场的重复 coverage，避免状态冲突', () => {
    const ir = {
      ...emptyIR(),
      coverage: [
        { source_ref: 'provider-catalog', scope: 'model_catalog', market: 'cn', status: 'complete', record_count: 12, record_unit: 'unique model IDs' },
        { source_ref: 'provider-catalog', scope: 'model_catalog', market: 'cn', status: 'failed', note: '请求失败' },
      ],
    };

    const issues = validateProviderCollectionIR(ir, [snapshot]);
    assert.ok(issues.some(({ code, path }) => code === 'duplicate_coverage_record' && path === '$.coverage[1]'));
  });

  it('要求完整覆盖报告记录数，并核对完整模型目录与 Offering 数量', () => {
    const observed = (value: string) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const missingCount = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'complete' }],
    }, [snapshot]);
    assert.ok(missingCount.some(({ code }) => code === 'complete_coverage_requires_count'));

    const mismatch = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'complete', record_count: 2, record_unit: 'unique model IDs' }],
      services: [{
        id: observed('global'), endpoints: [], capabilities: [], plans: [],
        offerings: [{
          provider_model_id: observed('model-a'), service_id: observed('global'),
          supply_observations: [{ kind: 'listed_current', evidence: [{ source_ref: 'provider-catalog' }] }],
          operations: [], prices: [],
        }],
      }],
    }, [snapshot]);
    assert.ok(mismatch.some(({ code }) => code === 'model_catalog_coverage_count_mismatch'));
  });

  it('按 Service ID 映射市场校验市场目录数量', () => {
    const observed = (value: string) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const ir = {
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', market: 'cn', status: 'complete', record_count: 1, record_unit: 'unique model IDs' }],
      services: [{
        id: observed('cn'), endpoints: [], capabilities: [], plans: [],
        offerings: [{
          provider_model_id: observed('model-a'), service_id: observed('cn'),
          supply_observations: [{ kind: 'listed_current', evidence: [{ source_ref: 'provider-catalog' }] }],
          operations: [], prices: [],
        }],
      }],
    };

    assert.deepEqual(validateProviderCollectionIR(ir, [snapshot]), []);
  });

  it('对 coverage 声明为 IR 事实单位的来源计数与关联事实逐项核对', () => {
    const observed = (value: string) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const service = {
      id: observed('global'),
      endpoints: [], capabilities: [], plans: [],
      offerings: [{
        provider_model_id: observed('model-a'), service_id: observed('global'),
        supply_observations: [{ kind: 'listed_current' as const, evidence: [{ source_ref: 'provider-catalog' }] }],
        operations: [], prices: [],
      }],
    };
    const matched = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'partial', record_count: 1, record_unit: 'current Offering records' }],
      services: [service],
    }, [snapshot]);
    assert.ok(!matched.some(({ code }) => code === 'coverage_fact_count_mismatch'));

    const mismatched = validateProviderCollectionIR({
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'partial', record_count: 2, record_unit: 'current Offering records' }],
      services: [service],
    }, [snapshot]);
    assert.ok(mismatched.some(({ code }) => code === 'coverage_fact_count_mismatch'));
  });

  it('拒绝没有覆盖声明或来源证据的归一化事实', () => {
    const ir = {
      ...emptyIR(),
      coverage: [],
      services: [{
        id: { value: 'cn', evidence: [] },
        endpoints: [], offerings: [], capabilities: [], plans: [],
      }],
    };
    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('missing_source_coverage'));
    assert.ok(codes.includes('missing_observed_evidence'));
  });

  it('拒绝非十进制价格、零计量数量和非法价格条件 AST', () => {
    const observed = (value: unknown) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const ir = {
      ...emptyIR(),
      coverage: [{ source_ref: 'provider-catalog', scope: 'model_catalog', status: 'complete', record_count: 1, record_unit: 'unique model IDs' }],
      services: [{
        id: observed('global'), endpoints: [], capabilities: [], plans: [],
        offerings: [{
          provider_model_id: observed('model-a'), service_id: observed('global'), supply_observations: [], operations: [],
          prices: [{
            pricing: observed([{
              currency: observed('USD'), conditions: [{ field: 'input', operator: 'between', value: [0, 'many'] }],
              rates: observed([{ metric: 'input', unit: 'per_1m_tokens', quantity: 0, value: '1e-3' }]),
            }]),
          }],
        }],
      }],
    };
    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('invalid_price_condition'));
    assert.ok(codes.includes('invalid_rate_quantity'));
    assert.ok(codes.includes('invalid_decimal_amount'));
  });

  it('Plan Credits 估算值使用 ~ 前缀，且不能同时填写 Credits 和 ratio', () => {
    const observed = (value: unknown) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const ir = {
      ...emptyIR(),
      services: [{
        id: observed('global'), endpoints: [], capabilities: [], offerings: [],
        plans: [{
          id: observed('plan-a'), billing_options: observed([]),
          credits: observed('~9007199254740992'), ratio: observed('2'),
        }],
      }],
    };

    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('invalid_plan_credits'));
    assert.ok(codes.includes('plan_credits_ratio_conflict'));
  });

  it('拒绝引用未随候选提供的来源和没有对应 source_refs 的字段证据', () => {
    const ir = {
      ...emptyIR(),
      source_refs: ['provider-catalog'],
      coverage: [{ source_ref: 'missing-source', scope: 'pricing', status: 'complete', record_count: 1, record_unit: 'PriceFact records' }],
      services: [{ name: { value: 'Example', evidence: [{ source_ref: 'missing-source' }] } }],
    };

    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('unknown_coverage_source'));
    assert.ok(codes.includes('unknown_evidence_source'));
  });

  it('拒绝空或非字符串的可选证据定位与说明', () => {
    const ir = {
      ...emptyIR(),
      review_items: [{
        id: 'missing-response-shape', kind: 'unsupported_mapping', message: '响应结构尚未归一。',
        evidence: [
          { source_ref: 'provider-catalog', locator: '  ', assertion: '' },
          { source_ref: 'provider-catalog', locator: 42 },
        ],
      }],
    };

    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('invalid_evidence_locator'));
    assert.ok(codes.includes('invalid_evidence_assertion'));
  });

  it('校验 ReviewItem 的唯一 ID、类型、说明和来源证据', () => {
    const ir = {
      ...emptyIR(),
      review_items: [
        { id: 'unparsed', kind: 'unparsed_fact', message: '模型价格未解析', evidence: [{ source_ref: 'missing-source' }] },
        { id: 'unparsed', kind: 'unknown-kind', message: '', evidence: [] },
      ],
    };

    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('duplicate_review_item_id'));
    assert.ok(codes.includes('invalid_review_item_kind'));
    assert.ok(codes.includes('invalid_review_item_message'));
    assert.ok(codes.includes('missing_review_evidence'));
    assert.ok(codes.includes('unknown_evidence_source'));
  });

  it('用可读错误阻止无效 IR 进入后续处理', () => {
    assert.throws(
      () => assertValidProviderCollectionIR({ ...emptyIR(), ir_version: '3.0.0' }, [snapshot]),
      /invalid_ir_version.*只接受 IR 版本 1\.0\.0/u,
    );
  });

  it('拒绝重复 Offering ID、跨 Service 归属和不存在的 Route Endpoint', () => {
    const observed = (value: string) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const ir = {
      ...emptyIR(),
      services: [{
        id: observed('cn'),
        endpoints: [],
        capabilities: [],
        plans: [],
        offerings: ['model-a', 'model-a'].map((id) => ({
          provider_model_id: observed(id),
          service_id: observed('global'),
          supply_observations: [],
          operations: [{
            id: observed('chat'),
            kind: observed('chat'),
            routes: [{
              id: observed('chat-completions'),
              endpoint_ref: observed('missing-endpoint'),
              protocol: observed('openai-chat-completions'),
              method: observed('POST'),
              path_template: observed('/v1/chat/completions'),
              operation_kind: observed('chat'),
            }],
          }],
          prices: [],
        })),
      }],
    };

    const codes = validateProviderCollectionIR(ir, [snapshot]).map(({ code }) => code);
    assert.ok(codes.includes('duplicate_offering_id'));
    assert.ok(codes.includes('offering_service_mismatch'));
    assert.ok(codes.includes('unknown_route_endpoint'));
  });

  it('Capability 价格只能引用所属 Capability', () => {
    const observed = (value: string) => ({ value, evidence: [{ source_ref: 'provider-catalog' }] });
    const ir = {
      ...emptyIR(),
      services: [{
        id: observed('global'),
        endpoints: [],
        offerings: [],
        capabilities: [{
          id: observed('global-web-search'),
          kind: observed('web_search'),
          operations: [],
          prices: [{
            capability_ref: observed('global-web-fetch'),
            currency: observed('USD'),
            unit: observed('per_request'),
            rules: { value: [], evidence: [{ source_ref: 'provider-catalog' }] },
          }],
        }],
        plans: [],
      }],
    };

    assert.ok(validateProviderCollectionIR(ir, [snapshot]).some(({ code }) => code === 'price_capability_mismatch'));
  });
});
