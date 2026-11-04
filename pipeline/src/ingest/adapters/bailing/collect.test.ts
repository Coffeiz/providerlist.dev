import assert from 'node:assert/strict';
import test from 'node:test';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { BAILING_INGEST_SOURCES } from './sources.ts';
import { bailingParser, type BailingCandidateFacts } from './collect.ts';
import type { CapturedDocument } from '../document-set.ts';

const documents = BAILING_INGEST_SOURCES.map((source, index) => ({
  source,
  metadata: {
    source_id: source.id,
    source_name: source.name,
    request_url: source.url,
    retrieved_at: `2026-10-25T00:${String(index).padStart(2, '0')}:00.000Z`,
    http_status: 200,
    content_type: 'text/html',
    etag: null,
    last_modified: null,
    content_hash: `sha256:${String(index + 1).repeat(64)}`,
    byte_length: 100,
    collector_version: '0.1.0',
    body_file: `fixture-${index}.body`,
  },
  body: source.id === 'bailing-models'
    ? '<html><head><meta name="description" content="蚂蚁百灵模型系列：Ling 通用模型。"><meta name="keywords" content="蚂蚁百灵,Ling,Ming"></head><body><header><a href="https://www.ant-ling.com"><img alt="Ant Ling"></a></header></body></html>'
    : source.id === 'bailing-pricing'
      ? '<h2 id="定价">Ling-3.1-flash 当前限时 2.5 折，优惠结束后将逐步恢复原价。</h2><h2 id="模型定价">模型定价</h2><p>以下价格均以人民币（RMB）计价。</p><table><thead><tr><th>模型</th><th>定位</th><th>输入价格（每百万 token）</th><th>输出价格（每百万 token）</th><th>缓存读取（每百万 token）</th></tr></thead><tbody><tr><td><strong>Ling-3.1-flash</strong></td><td>新版</td><td><del>¥2.00</del><span style="color:green">¥0.50</span></td><td><del>¥6.00</del><span style="color:green">¥1.50</span></td><td><del>¥0.40</del><span style="color:green">¥0.10</span></td></tr><tr><td>Ling-3.0-flash</td><td>新版</td><td><del>¥0.50</del><span style="color:green">¥0.14</span></td><td><del>¥1.50</del><span style="color:green">¥0.42</span></td><td><del>¥0.10</del><span style="color:green">¥0.028</span></td></tr></tbody></table><h2>第三方平台</h2><table><thead><tr><th>模型</th><th>输入价格</th><th>输出价格</th><th>缓存读取</th></tr></thead><tbody><tr><td>Ling-3.1-flash</td><td>$0.075</td><td>$0.225</td><td>$0.015</td></tr></tbody></table>'
    : source.id === 'bailing-api-openai'
    ? '<h2>Chat Completions</h2><table><tr><td>POST</td><td>https://api.ant-ling.com/v1/chat/completions</td></tr></table>'
    : source.id === 'bailing-api-anthropic'
      ? '<h2>Messages</h2><table><tr><td>POST</td><td>https://api.ant-ling.com/anthropic/v1/messages</td></tr></table>'
      : '<h2>当前可用模型</h2><p>Ling-3.1-flash</p><p>Ling-3.0-flash</p>',
})) as CapturedDocument[];

const current: BailingCandidateFacts = {
  directory_evidence: [],
  pricing_model_ids: ['Ling-3.1-flash', 'Ling-3.0-flash', 'Ling-2.8-legacy'],
  price_evidence: [],
  current_api_models: ['Ling-3.1-flash', 'Ling-3.0-flash'],
  faq_api_models: ['Ling-3.1-flash'],
  price_catalog_mismatches: {
    priced_not_current: ['Ling-2.8-legacy'],
    current_without_price: [],
    faq_not_current: [],
  },
  documented_api_models: ['Ling-3.1-flash', 'Ling-3.0-flash'],
  api_recommended_models: ['Ling-3.1-flash'],
  route_evidence: [],
  capability_evidence: [],
  plan_and_quota_evidence: [],
  marketplace_prices_excluded: true,
};

test('蚂蚁百灵 IR 只把当前可用 API 清单映射为供应，不从价格提及增补模型', () => {
  const ir = bailingParser.toBailingCollectionIR(documents, current);
  const service = ir.services[0]!;

  assert.deepEqual(ir.profile?.name?.value, '蚂蚁百灵');
  assert.deepEqual(ir.profile?.aliases?.value, ['Ant Ling']);
  assert.equal(ir.profile?.kind?.value, 'first_party');
  assert.deepEqual(ir.profile?.docs?.value, {
    overview: BAILING_INGEST_SOURCES.find(({ id }) => id === 'bailing-api-overview')?.url,
    pricing: BAILING_INGEST_SOURCES.find(({ id }) => id === 'bailing-pricing')?.url,
  });
  assert.ok(ir.profile?.docs?.evidence.some(({ source_ref }) => source_ref === 'bailing-pricing'));
  assert.deepEqual(service.offerings.map(({ provider_model_id }) => provider_model_id.value), [
    'Ling-3.0-flash',
    'Ling-3.1-flash',
  ]);
  assert.deepEqual(service.offerings.map(({ display_name }) => display_name?.value), [
    'Ling-3.0-flash',
    'Ling-3.1-flash',
  ]);
  assert.equal(service.name?.value, '中国市场');
  assert.deepEqual(service.offerings.map(({ provider_model_id, prices }) => [provider_model_id.value, prices.length]), [
    ['Ling-3.0-flash', 1], ['Ling-3.1-flash', 1],
  ]);
  assert.deepEqual(service.offerings[0]!.prices[0]!.rules.value[0]!.rate_items, [
    { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.14' },
    { metric: 'output', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.42' },
    { metric: 'cache_read', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.028' },
  ]);
  const flashPrice = service.offerings[1]!.prices[0]!;
  assert.deepEqual(flashPrice.rules.value[0]!.rate_items.map(({ amount_decimal }) => amount_decimal), ['0.50', '1.50', '0.10']);
  assert.ok(flashPrice.rules.value[0]!.evidence[0]!.locator?.includes('/row/2'));
  assert.ok(ir.review_items.some(({ id, message }) => id === 'bailing-promotion-expiry' && message.includes('未给出明确结束日期')));
  assert.ok(!service.offerings.some(({ prices }) => prices.some(({ rules }) => rules.value.some(({ rate_items }) => rate_items.some(({ amount_decimal }) => amount_decimal.startsWith('0.075'))))));
  assert.ok(service.offerings.every(({ operations }) => operations.length === 0));
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === 'bailing-pricing').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['complete', 2, 'Offering PriceFact records'],
  ]);
  assert.deepEqual(service.offerings[0]!.supply_observations[0]!.evidence[0], {
    source_ref: 'bailing-current-models',
    locator: '#当前可用模型',
    assertion: '官方当前可用模型清单明确列出该 API 型号。',
  });
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === 'bailing-current-models').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['complete', 2, 'unique current model IDs'],
  ]);
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === 'bailing-api-openai').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['partial', 1, 'API Endpoint records'],
  ]);
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === 'bailing-api-anthropic').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['partial', 1, 'API Endpoint records'],
  ]);
  assert.ok(ir.coverage.filter(({ source_ref }) => !['bailing-current-models', 'bailing-pricing', 'bailing-api-openai', 'bailing-api-anthropic'].includes(source_ref)).every(({ status }) => status === 'not_parsed'));
  assert.deepEqual(service.endpoints.map(({ id, base_url }) => [id.value, base_url.value]), [
    ['openai-compatible', 'https://api.ant-ling.com/v1'],
    ['anthropic-compatible', 'https://api.ant-ling.com/anthropic'],
  ]);
  assert.ok(ir.review_items.some(({ id }) => id === 'bailing-price-catalog-crosscheck'));
  assert.ok(ir.review_items.every(({ evidence }) => evidence.every(({ locator }) => locator === undefined || locator.trim().length > 0)));
  assert.equal(ir.document_observations.length, BAILING_INGEST_SOURCES.length);
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

test('蚂蚁百灵缺少当前可用模型来源时拒绝生成供应 IR', () => {
  const incomplete = documents.filter(({ source }) => source.id !== 'bailing-current-models');
  assert.throws(() => bailingParser.toBailingCollectionIR(incomplete, current), /当前可用模型来源缺失/);
});

test('蚂蚁百灵官方品牌标识缺失时不从 Provider ID 补造档案事实', () => {
  const withoutBrandEvidence = documents.map((document) => document.source.id === 'bailing-models'
    ? { ...document, body: '<html><head><meta name="description" content="模型系列目录"></head></html>' }
    : document);
  assert.equal(bailingParser.toBailingProfile(withoutBrandEvidence), undefined);
});

test('蚂蚁百灵价格解析只接受原厂表绿色现价并忽略删除线原价及第三方表', () => {
  const priceDocument = documents.find(({ source }) => source.id === 'bailing-pricing')!;
  const parsed = bailingParser.bailingPriceFacts(priceDocument, new Set(['Ling-3.1-flash']));
  assert.deepEqual(parsed.parsedModelIds, ['Ling-3.1-flash']);
  assert.deepEqual(parsed.promotionModelIds, ['Ling-3.1-flash']);
  assert.deepEqual(parsed.pricesByModelId.get('Ling-3.1-flash')!.rules.value[0]!.rate_items.map(({ amount_decimal }) => amount_decimal), ['0.50', '1.50', '0.10']);
});
