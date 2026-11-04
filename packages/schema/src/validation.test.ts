/**
 * 公开 JSON 契约的校验测试。
 *
 * 用独立的 Provider 样例作为活样本——
 * 任何 schema 改动都必须同步更新它们，测试会立刻暴露不一致。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { validateFxReference, validateFxReferenceDocument, validateProviderDocument } from './validation.ts';
import { isKnownModelType, bucketModelTypes, KNOWN_MODEL_TYPES } from './model-types.ts';

const dataDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../pipeline/src/fixtures/data/providers',
);

async function loadFixtures(): Promise<Record<string, unknown>[]> {
  const files = (await readdir(dataDir)).filter((f) => f.endsWith('.json'));
  const documents: Record<string, unknown>[] = [];
  for (const file of files) {
    const raw = await readFile(path.join(dataDir, file), 'utf8');
    documents.push(JSON.parse(raw) as Record<string, unknown>);
  }
  return documents;
}

describe('标准模型类型', () => {
  it('基线包含 13 个已知类型', () => {
    assert.equal(KNOWN_MODEL_TYPES.length, 13);
  });

  it('包含设计文档基线中的全部类型', () => {
    for (const type of [
      'chat', 'image', 'video', 'embedding', 'reranking',
      'decision', 'transcription', 'speech', 'realtime', 'music', 'world_model', 'computer_use',
    ]) {
      assert.ok(isKnownModelType(type), `${type} 应为已知类型`);
    }
  });

  it('未知类型被归入 unknown 桶而不是 chat', () => {
    const buckets = bucketModelTypes(['chat', 'chat', 'future-thing']);
    assert.equal(buckets.chat, 2);
    assert.equal(buckets.unknown, 1);
    assert.equal(buckets.future ?? 0, 0);
  });
});

describe('Provider 数据夹具', () => {
  it('全部通过契约校验', async () => {
    const documents = await loadFixtures();
    assert.ok(documents.length > 0, '应至少有一个夹具');
    for (const document of documents) {
      const report = validateProviderDocument(document);
      const errors = report.issues.filter((i) => i.severity === 'error');
      assert.deepEqual(
        errors.map((e) => `${e.code} @ ${e.path}: ${e.message}`),
        [],
        '夹具不应有校验错误',
      );
      assert.equal(report.ok, true);
    }
  });

  it('Provider 夹具不存放规范 Model 字段', async () => {
    const documents = await loadFixtures();
    for (const document of documents) {
      const services = (document.services ?? []) as { offerings?: Record<string, unknown>[] }[];
      for (const service of services) {
        for (const offering of service.offerings ?? []) {
          for (const field of ['type', 'model_type', 'input', 'output', 'input_modalities', 'output_modalities', 'modalities', 'api_modalities', 'limits', 'capabilities', 'release_date']) {
            assert.equal(field in offering, false, `${String(document.provider && (document.provider as { id?: string }).id)}/${String(offering.id)} 不应包含 ${field}`);
          }
        }
      }
    }
  });
});

describe('validateProviderDocument', () => {
  const base = {
    schema_version: '1.0.0',
    data_version: '2026-10-23.1',
    generated_at: '2026-10-23T06:00:00Z',
    provider: {
      id: 'test-provider',
      name: '测试供应商',
      aliases: [],
      kind: 'first_party',
    },
    services: [],
    sources: [],
  };

  it('空服务列表通过校验', () => {
    const report = validateProviderDocument(base);
    assert.equal(report.ok, true);
  });

  it('Service ID 只能使用已登记的市场标识', () => {
    const report = validateProviderDocument({
      ...base,
      services: [
        { id: 'cn', provider_id: 'test-provider', name: '中国市场',  },
        { id: 'global', provider_id: 'test-provider', name: '国际市场',  },
      ],
    });
    assert.equal(report.issues.some((i) => i.code === 'schema.service_market_id'), false);
    const invalid = validateProviderDocument({
      ...base,
      services: [{ id: 'global-plans', provider_id: 'test-provider', name: '国际套餐线',  }],
    });
    assert.ok(invalid.issues.some((i) => i.code === 'schema.service_market_id'));
  });

  it('缺少必填顶层字段时报错', () => {
    const report = validateProviderDocument({ ...base, data_version: undefined });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.required'));
  });

  it('provider.id 必须是 kebab-case', () => {
    const report = validateProviderDocument({
      ...base,
      provider: { ...base.provider, id: 'Test_Provider' },
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.provider_id'));
  });

  it('市场网站和文档链接必须是 https', () => {
    const report = validateProviderDocument({
      ...base,
      services: [{ id: 'cn', provider_id: 'test-provider', name: '中国市场', docs: { overview: 'http://example.com' } }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.service_docs_url'));
  });

  it('金额必须是十进制字符串', () => {
    const report = validateProviderDocument({
      ...base,
      services: [{ id: 'cn', provider_id: 'test-provider', name: '服务',  offerings: [{ id: 'o1', service_id: 'cn', display_name: '模型', model_ref: null, pricing: [{ currency: 'CNY', rates: [{ metric: 'input', unit: 'per_1m_tokens', value: 3 }] }] }] }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'pricing.value'));
  });

  it('负数价格被拒绝', () => {
    const report = validateProviderDocument({
      ...base,
      services: [{ id: 'cn', provider_id: 'test-provider', name: '服务',  offerings: [{ id: 'o1', service_id: 'cn', display_name: '模型', model_ref: null, pricing: [{ currency: 'CNY', rates: [{ metric: 'input', unit: 'per_1m_tokens', value: '-1.00' }] }] }] }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'pricing.negative'));
  });

  it('currency 必须是 ISO 4217 三字母', () => {
    const report = validateProviderDocument({
      ...base,
      services: [{ id: 'cn', provider_id: 'test-provider', name: '服务',  offerings: [{ id: 'o1', service_id: 'cn', display_name: '模型', model_ref: null, pricing: [{ currency: 'rmb', rates: [] }] }] }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.currency'));
  });

  it('RMB 不是合法 ISO 4217 代码——人民币必须用 CNY', () => {
    const report = validateProviderDocument({
      ...base,
      services: [{ id: 'cn', provider_id: 'test-provider', name: '服务',  offerings: [{ id: 'o1', service_id: 'cn', display_name: '模型', model_ref: null, pricing: [{ currency: 'RMB', rates: [] }] }] }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.currency_unknown'));
  });

  it('Endpoint Route 路径必须以斜杠开头', () => {
    const report = validateProviderDocument({ ...base, services: [{ id: 'cn', provider_id: 'test-provider', name: '服务', endpoints: [{ id: 'api', base_url: 'https://example.test', routes: [{ protocol: 'chat-completions', method: 'POST', path: 'missing-leading-slash' }] }] }] });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.route_path'));
  });

  describe('Capability 输入/输出类型', () => {
    /** 造一个带指定输入/输出类型的 Provider 文档。 */
    const withCapabilityIOKind = (kind: string) => ({
      ...base,
      services: [
        {
          id: 'cn',
          provider_id: 'test-provider',
          name: '服务',

          endpoints: [],
          offerings: [],
          capabilities: [
            {
              kind: 'web_search',
              input: [{ name: 'query', kind, required: true }],
              output: [{ kind }],
            },
          ],
        },
      ],
    });

    it('已知模态通过校验（含 3d 与 embedding）', () => {
      for (const kind of [
        'text',
        'image',
        'video',
        'audio',
        'file',
        'structured',
        '3d',
        'embedding',
      ]) {
        const report = validateProviderDocument(withCapabilityIOKind(kind));
        assert.equal(report.ok, true, `已知模态 ${kind} 不应报错`);
        assert.equal(
          report.issues.filter((i) => i.code.endsWith('capability_io_kind')).length,
          0,
          `已知模态 ${kind} 不应产生输入/输出类型告警`,
        );
      }
    });

    it('未知模态只警告并保留原值，不阻止发布', () => {
      const report = validateProviderDocument(withCapabilityIOKind('point-cloud'));
      assert.equal(report.ok, true, '未知模态不阻止发布');
      const warning = report.issues.find((i) => i.code === 'schema.unknown_capability_io_kind');
      assert.ok(warning, '未知模态应给出警告');
      assert.equal(warning.severity, 'warning');
      assert.match(warning.message, /point-cloud/);
    });

    it('词法非法的模态 ID 报错', () => {
      const report = validateProviderDocument(withCapabilityIOKind('Not A Kind'));
      assert.equal(report.ok, false);
      assert.ok(report.issues.some((i) => i.code === 'schema.invalid_capability_io_kind'));
    });
  });

  it('约束引用未声明字段时报错', () => {
    const report = validateProviderDocument({ ...base, services: [{ id: 'cn', provider_id: 'test-provider', name: '服务', capabilities: [{ kind: 'web_search', parameters: [{ name: 'resolution', type: 'string', required: false }], constraints: [{ if: { eq: ['undeclared', 'x'] }, then: { eq: ['resolution', '720p'] } }] }] }] });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'constraint.undeclared_ref'));
  });

  it('retired 状态可由 PR 提供证据，无需在源数据中重复记录', () => {
    const report = validateProviderDocument({ ...base, services: [{ id: 'cn', provider_id: 'test-provider', name: '服务', supply_status: 'retired' }] });
    assert.equal(report.ok, true);
  });

  it('Provider Offering 拒绝 Model 类型、模态、限制和能力字段', () => {
    const forbiddenFields = ['type', 'model_type', 'input', 'output', 'input_modalities', 'output_modalities', 'modalities', 'api_modalities', 'limits', 'capabilities', 'release_date'];
    for (const field of forbiddenFields) {
      const report = validateProviderDocument({
        ...base,
        services: [{
          id: 'cn', provider_id: 'test-provider', name: '服务',
           offerings: [{
            id: 'o1', service_id: 'cn', display_name: '模型',
            model_ref: null, [field]: field.includes('modalities') ? { input: ['text'] } : 'chat',
          }],
        }],
      });
      assert.ok(report.issues.some((i) => i.code === 'schema.offering_legacy_model_field' && i.path.endsWith(`/${field}`)), `${field} 应被明确禁止`);
    }
  });

  it('effective_until 早于 effective_from 时报错', () => {
    const report = validateProviderDocument({
      ...base,
      services: [{ id: 'cn', provider_id: 'test-provider', name: '服务',  offerings: [{ id: 'o1', service_id: 'cn', display_name: '模型', model_ref: null, pricing: [{ currency: 'CNY', rates: [], effective_from: '2026-10-01T00:00:00Z', effective_until: '2026-09-01T00:00:00Z' }] }] }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'pricing.effective_range'));
  });

  it('官方接入状态为 connected 时必须有 hostname 与发布时间', () => {
    const report = validateProviderDocument({
      ...base,
      provider: {
        ...base.provider,
        official_integration: { state: 'connected' },
      },
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'official.missing_hostname'));
    assert.ok(report.issues.some((i) => i.code === 'official.missing_published_at'));
  });
});

describe('参考汇率快照校验', () => {
  const fxBase = {
    id: 'fx-ecb-usd-reference',
    base: 'USD',
    quotes: [{ currency: 'CNY', rate_decimal: '6.67577' }],
    as_of_date: '2026-10-22',
    retrieved_at: '2026-10-23T09:20:00Z',
    source: {
      publisher: 'European Central Bank',
      dataset: 'Euro foreign exchange reference rates',
      url: 'https://data-api.ecb.europa.eu/service/data/EXR/D.USD+CNY.EUR.SP00.A?format=csvdata',
    },
    derivation: {
      formula: 'CNY_per_USD = (EUR/CNY) / (EUR/USD)',
      pairs: ['EUR/CNY', 'EUR/USD'],
    },
  };

  it('合法快照通过校验', () => {
    const report = validateFxReference(fxBase);
    assert.equal(report.ok, true, JSON.stringify(report.issues));
  });

  it('基准币种不需要单独报价', () => {
    const report = validateFxReference({
      ...fxBase,
      quotes: [...fxBase.quotes, { currency: 'USD', rate_decimal: '1' }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'fx.quote_equals_base'));
  });

  it('同一币种出现两条报价时必须报错', () => {
    const report = validateFxReference({
      ...fxBase,
      quotes: [...fxBase.quotes, { currency: 'CNY', rate_decimal: '6.67578' }],
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'duplicate.fx_quote'));
  });

  it('取回时间早于来源公布日时必须报错', () => {
    const report = validateFxReference({ ...fxBase, retrieved_at: '2026-10-21T00:00:00Z' });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'fx.retrieved_before_published'));
  });

  it('原始推导币对允许使用不同于公开快照的基准币种', () => {
    const report = validateFxReference({
      ...fxBase,
      derivation: { formula: 'CNY_per_USD = (EUR/CNY) / (EUR/USD)', pairs: ['EUR/CNY', 'EUR/USD'] },
    });
    assert.equal(report.ok, true, JSON.stringify(report.issues));
  });

  it('汇率必须是十进制字符串且为正数', () => {
    const numeric = validateFxReference({
      ...fxBase,
      quotes: [{ currency: 'CNY', rate_decimal: 6.67577 }],
    });
    assert.equal(numeric.ok, false);
    assert.ok(numeric.issues.some((i) => i.code === 'fx.decimal'));

    const negative = validateFxReference({
      ...fxBase,
      quotes: [{ currency: 'CNY', rate_decimal: '-6.67577' }],
    });
    assert.equal(negative.ok, false);
    assert.ok(negative.issues.some((i) => i.code === 'fx.non_positive_rate'));
  });

  it('发布文档缺信封字段时必须报错', () => {
    const report = validateFxReferenceDocument({ fx_reference: fxBase });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'schema.required'));
  });

  it('发布文档通过校验', () => {
    const report = validateFxReferenceDocument({
      schema_version: '1.0.0',
      data_version: 'v-test-1',
      generated_at: '2026-10-23T09:30:00Z',
      fx_reference: fxBase,
    });
    assert.equal(report.ok, true, JSON.stringify(report.issues));
  });
});

describe('参考汇率的未知币种', () => {
  it('RMB 不是 ISO 4217 代码，必须被拒绝', () => {
    const report = validateFxReference({
      id: 'fx-ecb-usd-reference',
      base: 'USD',
      quotes: [{ currency: 'RMB', rate_decimal: '6.67577' }],
      as_of_date: '2026-10-22',
      retrieved_at: '2026-10-23T09:20:00Z',
      source: { publisher: 'ECB', dataset: 'x', url: 'https://example.com' },
      derivation: { formula: 'x', pairs: ['EUR/CNY'] },
    });
    assert.equal(report.ok, false);
    assert.ok(report.issues.some((i) => i.code === 'fx.currency_unknown'));
  });
});
