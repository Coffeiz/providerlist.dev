import assert from 'node:assert/strict';
import test from 'node:test';
import type { CapturedDocument } from '../document-set.ts';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import { tencentArticleBody, tencentCollectionIR } from './collect.ts';
import { TENCENT_INGEST_SOURCES } from './sources.ts';

function document(sourceId: string, html: string, index: number): CapturedDocument {
  const source = TENCENT_INGEST_SOURCES.find(({ id }) => id === sourceId);
  assert.ok(source, `registered source ${sourceId}`);
  return {
    source,
    body: html,
    metadata: {
      source_id: sourceId,
      market: 'cn',
      source_name: source.name,
      request_url: source.url,
      retrieved_at: `2026-10-25T17:03:${String(index).padStart(2, '0')}.000Z`,
      http_status: 200,
      content_type: 'text/html; charset=utf-8',
      etag: null,
      last_modified: null,
      content_hash: `sha256:${String(index).padStart(64, '0')}`,
      byte_length: html.length,
      collector_version: '0.1.0',
      body_file: `sha256-${String(index).padStart(64, '0')}.body`,
    },
  };
}

function table(headers: readonly string[], rows: readonly (readonly string[])[]): string {
  return `<table><tr>${headers.map((cell) => `<th>${cell}</th>`).join('')}</tr>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</table>`;
}

test('腾讯 hydration 正文被解出用于静态表格解析，不执行页面脚本', () => {
  const article = '<table><tr><td>模型</td></tr></table>';
  const payload = JSON.stringify({ loaderData: { 'product-article': { data: { article: { content: { body: article } } } } } });
  const encoded = JSON.stringify(payload);
  assert.equal(tencentArticleBody(`window.__staticRouterHydrationData = JSON.parse(${encoded});`), article);
  assert.equal(tencentArticleBody('普通文档正文'), '普通文档正文');
});

test('精确目录 ID 关联向量维度、Route 和价格，继承 rowspan 模型名并保留视频输入价格', () => {
  const catalog = document('tencent-model-list', table(
    ['模型名称', 'model（调用参数）', '模型介绍', '输出维度', '上下文窗口（Token）'],
    [
      ['Fixture-Text-Embedding', 'fixture-text-embedding', '轻量文本向量模型', '1024', '32k'],
      ['Fixture-Vision-Embedding-A', 'fixture-vision-embedding-a', '多模态向量模型', '1024', '32k'],
      ['Fixture-Vision-Embedding-B', 'fixture-vision-embedding-b', '多模态向量模型', '2560', '32k'],
    ],
  ), 1);
  const pricing = document('tencent-model-pricing', table(
    ['模型名称', '计费项', '价格（元/百万 tokens）'],
    [
      ['Fixture-Text-Embedding', '文本输入', '0.5'],
      ['Fixture-Vision-Embedding-A', '文本输入', '0.8'],
      ['Fixture-Vision-Embedding-A', '图片输入', '1.2'],
      ['', '视频输入', '1.5'],
      ['Fixture-Vision-Embedding-B', '文本输入', '0.6'],
      ['', '图片输入', '0.9'],
      ['', '视频输入', '1.8'],
    ],
  ), 2);
  const api = document('tencent-vector-api', '<p>POST https://tokenhub.tencentmaas.com/v1/embeddings</p><p>OpenAI Embeddings API</p>', 3);
  const apiUsage = document('tencent-api-usage', table(
    ['地域', '接口地址', '资源调度范围'],
    [['广州', 'https://tokenhub.tencentmaas.com', '中国大陆']],
  ), 4);
  const languageApi = document('tencent-language-api', [
    table(['model 参数值', 'OpenAI Chat Completions', 'OpenAI Responses', 'Anthropic'], [['fixture-unmatched-model', '支持', '支持', '支持']]),
    table(['协议', '路径'], [['OpenAI Chat Completions', '/v1/chat/completions'], ['OpenAI Responses', '/v1/responses'], ['Anthropic Messages', '/v1/messages']]),
  ].join(''), 9);
  const webSearch = document('tencent-web-search', [
    table(['model 参数值', 'API 协议', '端点'], [['fixture-unmatched-model', 'Responses API', '/v1/responses']]),
    table(['参数', '必选', '说明'], [['enable', '是', '启用联网搜索']]),
    table(['参数', '必选', '说明'], [['enable', '是', '启用联网搜索']]),
  ].join(''), 10);
  const overview = document('tencent-product-overview', '<title>大模型服务平台 TokenHub 产品简介_腾讯云</title><meta name="description" content="一站式 AI 大模型服务平台，聚合腾讯混元、DeepSeek 等多家模型">', 5);
  const apiGuide = document('tencent-api-guide-index', '<title>TokenHub 调用指南</title>', 6);
  const codingPlan = document('tencent-coding-plan', '<title>TokenHub Coding Plan</title>', 7);
  const tokenPlan = document('tencent-token-plan', [
    '<h2>通用 Token Plan</h2>',
    table(['套餐', '价格', '用量限制', '适用场景'], [
      ['Lite', '39 元/月', '1000 积分', '轻量体验'], ['Standard', '99 元/月', '3000 积分', '日常开发'],
      ['Pro', '199 元/月', '6000 积分', '专业开发'], ['Max', '399 元/月', '12000 积分', '高强度开发'],
    ]),
    '<h2>Hy Token Plan</h2>',
    table(['套餐', '价格', '用量限制', '适用场景'], [
      ['Hy Lite', '39 元/月', '1000 积分', '轻量 Hy 使用'], ['Hy Standard', '99 元/月', '3000 积分', '日常 Hy 使用'],
      ['Hy Pro', '199 元/月', '6000 积分', '专业 Hy 使用'], ['Hy Max', '399 元/月', '12000 积分', '高强度 Hy 使用'],
    ]),
  ].join(''), 8);
  const globalTokenPlan = document('tencent-token-plan-global', table(
    ['Plan', 'Lite Plan', 'Standard Plan', 'Pro Plan', 'Max Plan'],
    [
      ['Recommended', 'Good start', 'Everyday work', 'Advanced work', 'Maximum capacity'],
      ['Price', 'USD 6 / month', 'USD 16 / month', 'USD 50 / month', 'USD 100 / month'],
      ['Usage Limit', '1,500 credits', '4,000 credits', '12,500 credits', '25,000 credits'],
    ],
  ), 11);
  const documents = [catalog, pricing, api, apiUsage, overview, apiGuide, codingPlan, tokenPlan, globalTokenPlan, languageApi, webSearch];
  const ir = tencentCollectionIR(documents);
  assert.equal(ir.profile?.name?.value, '腾讯云 TokenHub');
  assert.deepEqual(ir.profile?.aliases?.value, ['大模型服务平台 TokenHub']);
  assert.equal(ir.profile?.kind?.value, 'cloud_platform');
  assert.equal(ir.profile?.kind?.evidence[0]?.source_ref, 'tencent-product-overview');
  const service = ir.services[0]!;
  assert.equal(service.name?.value, '中国市场');
  assert.deepEqual(service.offerings.map(({ provider_model_id }) => provider_model_id.value), ['fixture-text-embedding', 'fixture-vision-embedding-a', 'fixture-vision-embedding-b']);
  assert.equal('output_dimensions' in service.offerings[0]!, false);
  assert.deepEqual(service.offerings[0]!.prices[0]!.rules.value[0]!.rate_items, [{ metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.5' }]);
  assert.deepEqual(service.offerings[1]!.prices[0]!.rules.value[0]!.rate_items, [
    { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.8' },
    { metric: 'input_image', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '1.2' },
    { metric: 'input_video', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '1.5' },
  ]);
  assert.deepEqual(service.offerings[2]!.prices[0]!.rules.value[0]!.rate_items, [
    { metric: 'input', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.6' },
    { metric: 'input_image', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '0.9' },
    { metric: 'input_video', unit: 'per_1m_tokens', quantity: 1, amount_decimal: '1.8' },
  ]);
  assert.equal(ir.review_items[0]?.kind, 'incomplete_coverage');
  assert.match(ir.review_items[0]?.message ?? '', /语言、图像、视频、语音、3D、联网搜索和 Plan/);
  const issues = validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata));
  assert.deepEqual(issues, []);
});

test('缺少必需来源时拒绝生成 IR，避免把未采集解释为空目录', () => {
  assert.throws(() => tencentCollectionIR([]), /缺少模型目录、价格、API、产品档案或计划入口来源/);
});
