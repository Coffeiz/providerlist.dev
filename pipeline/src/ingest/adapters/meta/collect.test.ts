import test from 'node:test';
import assert from 'node:assert/strict';
import type { SnapshotMetadata } from '../../types.ts';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import type { ProviderCollectionIR } from '../../ir/provider-collection.ts';
import type { CapturedDocument } from '../document-set.ts';
import { extractDocumentObservation } from '../document-observation.ts';
import { META_INGEST_SOURCES } from './sources.ts';
import { metaCollectorConfig, metaParser } from './collect.ts';
import { assertOfficialProviderObservationAdapter } from '../official-provider-entrypoint-test.ts';

function sourceDocument(sourceId: string, body: string): CapturedDocument {
  const source = META_INGEST_SOURCES.find(({ id }) => id === sourceId)!;
  const metadata: SnapshotMetadata = {
    source_id: source.id,
    market: source.market,
    source_name: source.name,
    request_url: source.url,
    retrieved_at: '2026-10-26T00:00:00.000Z',
    http_status: 200,
    content_type: 'text/html; charset=utf-8',
    etag: null,
    last_modified: null,
    content_hash: `sha256:${'a'.repeat(64)}`,
    byte_length: body.length,
    collector_version: 'test',
    body_file: `${source.id}.body`,
  };
  return { source, body, metadata };
}

function observationIR(input: CapturedDocument | readonly CapturedDocument[]): ProviderCollectionIR {
  const documents = Array.isArray(input) ? input : [input];
  return {
    ir_version: '1.0.0',
    provider_id: 'meta',
    observed_at: documents[0]!.metadata.retrieved_at,
    source_refs: documents.map(({ source }) => source.id),
    coverage: documents.map(({ source }) => ({ source_ref: source.id, scope: source.scope!, market: 'global' as const, status: 'not_parsed' as const, note: '尚未归一。' })),
    document_observations: documents.map((document) => {
      const observation = extractDocumentObservation(document);
      return { ...observation, source_ref: observation.source_id, model_id_mentions: [] };
    }),
    services: [],
    review_items: [],
  };
}

test('Meta 采集入口保留 API 模型文档观察，不把开放权重提及变成托管供应事实', () => {
  assertOfficialProviderObservationAdapter(metaCollectorConfig, 'muse-spark-1.3');
});

test('Meta IR 从官方 API Reference 映射 Base URL，但不推断模型 Offering 或模型 Route', () => {
  const document = sourceDocument('meta-api-reference', '<title>API reference — Meta Model API - Meta Model API</title><p>Base URL https://api.meta.ai/v1</p><p>GET /v1/models lists models for the authenticated account.</p>');
  const ir = metaParser.mapMetaApi([document], observationIR(document));
  const service = ir.services.find(({ id }) => id.value === 'global');

  assert.equal(ir.profile?.name?.value, 'Meta');
  assert.equal(service?.name?.value, 'Meta Model API');
  assert.deepEqual(service?.endpoints.map(({ base_url }) => base_url.value), ['https://api.meta.ai/v1']);
  assert.equal(service?.endpoints[0]?.api_region.value, '未标注');
  assert.deepEqual(service?.offerings, []);
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === document.source.id)?.status, 'partial');
  assert.ok(ir.review_items.some(({ id }) => id === 'meta-api-model-route-mapping-incomplete'));
  assert.deepEqual(validateProviderCollectionIR(ir, [document.metadata]), []);
});

test('Meta 官方文件接口和明确示例型号的网页搜索进入不同能力层', () => {
  const api = sourceDocument('meta-api-reference', '<p>Base URL https://api.meta.ai/v1</p><p>Files: POST /v1/files, GET /v1/files, GET/DELETE /v1/files/{file_id}</p>');
  const catalog = sourceDocument('meta-models', '<h2>Muse Spark</h2><table><tr><th>Version</th><th>Model API (pay-as-you-go)</th></tr><tr><td>Muse Spark (muse-spark-1.3)</td><td>Available</td></tr><tr><td>Muse Spark (muse-spark-1.2)</td><td>Available</td></tr></table>');
  const search = sourceDocument('meta-search-grounding', '<p>POST /v1/responses</p><code>{"model":"muse-spark-1.3","tools":[{"type":"web_search"}]}</code>');
  const schemas = sourceDocument('meta-files-schemas', '<h2>File Object</h2>');
  const documents = [api, catalog, search, schemas];
  const ir = metaParser.mapMetaApi(documents, observationIR(documents));
  const service = ir.services[0]!;
  const files = service.capabilities.find(({ id }) => id.value === 'files');
  assert.deepEqual(files?.operations.flatMap(({ routes }) => routes.map(({ method, path_template }) => `${method.value} ${path_template.value}`)).sort(), [
    'DELETE /v1/files/{file_id}', 'GET /v1/files', 'GET /v1/files/{file_id}', 'GET /v1/files/{file_id}/content', 'POST /v1/files',
  ]);
  assert.ok(service.offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-spark-1.3')?.operations.some(({ kind }) => kind.value === 'web_search'));
  assert.ok(!service.offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-spark-1.2')?.operations.some(({ kind }) => kind.value === 'web_search'));
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

test('Meta Files API 从官方 Route 与 Schema 来源采集参数和响应结构', () => {
  const api = sourceDocument('meta-api-reference', '<p>Base URL https://api.meta.ai/v1</p><p>Files: POST /v1/files, GET /v1/files, GET/DELETE /v1/files/{file_id}</p>');
  const schemas = sourceDocument('meta-files-schemas', '<h2>Create File Request</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>file</td><td>string (binary)</td><td>Yes</td><td>The file.</td></tr><tr><td>purpose</td><td>enum (\'user_data\', \'batch\')</td><td>Yes</td><td>Purpose.</td></tr></table><h2>File Object</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>id</td><td>string</td><td>Yes</td><td></td></tr><tr><td>bytes</td><td>integer</td><td>Yes</td><td></td></tr></table><h2>Delete File Response</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>deleted</td><td>boolean</td><td>Yes</td><td></td></tr></table>');
  const upload = sourceDocument('meta-files-upload-api', '<h2>Request body</h2>');
  const list = sourceDocument('meta-files-list-api', '<h2>Query parameters</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>limit</td><td>integer</td><td>No</td><td>Maximum number from 1 to 10,000.</td></tr></table>');
  const retrieve = sourceDocument('meta-files-retrieve-api', '<h2>Path parameters</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>file_id</td><td>string</td><td>Yes</td><td>File identifier.</td></tr></table>');
  const deletion = sourceDocument('meta-files-delete-api', '<h2>Path parameters</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>file_id</td><td>string</td><td>Yes</td><td>File identifier.</td></tr></table>');
  const content = sourceDocument('meta-files-content-api', '<h2>Path parameters</h2><table><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr><tr><td>file_id</td><td>string</td><td>Yes</td><td>File identifier.</td></tr></table>');
  const documents = [api, schemas, upload, list, retrieve, deletion, content];
  const ir = metaParser.mapMetaApi(documents, observationIR(documents));
  const capability = ir.services[0]?.capabilities.find(({ id }) => id.value === 'files');
  const uploadOperation = capability?.operations.find(({ id }) => id.value === 'post-files');
  const listOperation = capability?.operations.find(({ id }) => id.value === 'get-files');
  const deleteOperation = capability?.operations.find(({ id }) => id.value === 'delete-file');
  const contentOperation = capability?.operations.find(({ id }) => id.value === 'get-file-content');

  assert.deepEqual(uploadOperation?.parameters?.value.map(({ name, required, enum: values }) => [name, required, values]), [
    ['file', true, undefined], ['purpose', true, ['user_data', 'batch']],
  ]);
  assert.deepEqual(uploadOperation?.output?.value[0]?.fields, ['id', 'bytes']);
  assert.deepEqual(listOperation?.parameters?.value.map(({ name }) => name), ['limit']);
  assert.deepEqual(deleteOperation?.output?.value[0]?.fields, ['deleted']);
  assert.deepEqual(contentOperation?.output?.value, [{ kind: 'file' }]);
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

test('Meta IR 在 API Reference 结构变化或缺少 Base URL 时拒绝猜测 Endpoint', () => {
  const document = sourceDocument('meta-api-reference', '<title>API reference — Meta Model API - Meta Model API</title><p>Use the Responses API.</p>');
  const ir = metaParser.mapMetaApi([document], observationIR(document));

  assert.equal(ir.services.length, 0);
  assert.ok(ir.review_items.some(({ id }) => id === 'meta-api-base-url-unparsed'));
  assert.deepEqual(validateProviderCollectionIR(ir, [document.metadata]), []);
});

test('Meta IR 仅将公开目录中当前可用型号与同章节价格精确关联', () => {
  const api = sourceDocument('meta-api-reference', '<title>API reference — Meta Model API</title><p>Base URL https://api.meta.ai/v1</p><p>Responses: POST /v1/responses</p><p>Chat completions: POST /v1/chat/completions</p><p>Messages: POST /v1/messages</p>');
  const catalog = sourceDocument('meta-models', '<title>Models - Meta Model API</title><h2>Models at a glance</h2><table><tr><th>Use case</th><th>Model</th><th>Input</th><th>Output</th><th>API endpoints</th></tr><tr><td>Reasoning</td><td>Muse Wonder, Muse Spark</td><td>Text</td><td>Text</td><td>Responses, Chat Completions, Messages</td></tr><tr><td>Speech to text</td><td>Muse Voice Transcribe</td><td>Audio</td><td>Text</td><td>Transcribe</td></tr></table><h2>Muse Wonder availability</h2><table><tr><th>Variant</th><th>Model API (pay-as-you-go)</th><th>Muse Code</th></tr><tr><td>Muse Wonder (muse-wonder-1.0)</td><td>Available (Standard mode only)</td><td>Pay-as-you-go</td></tr><tr><td>Muse Wonder Full</td><td>Not available</td><td>Subscription</td></tr></table><h2>Muse Spark availability</h2><table><tr><th>Version</th><th>Model API (pay-as-you-go)</th><th>Muse Code</th></tr><tr><td>Muse Spark 1.3 (muse-spark-1.3)</td><td>Standard mode</td><td>Any plan</td></tr><tr><td>Muse Spark 1.3 Contributor (muse-spark-1.3-contributor)</td><td>Contributor mode</td><td>Any plan</td></tr></table><h2>Muse Voice Transcribe</h2><table><tr><th>Model ID</th><th>Input</th><th>Output</th></tr><tr><td>muse-voice-transcribe-1.0</td><td>Audio</td><td>Text transcript</td></tr></table><p>Reach Muse Voice Transcribe two ways: the realtime WebSocket endpoint (wss://api.meta.ai/v1/asr/realtime) for live audio, or the file endpoint (POST /v1/asr/transcribe) for a recording you already have.</p>');
  const pricing = sourceDocument('meta-pricing', '<title>Pricing and rate limits - Meta Model API</title><h2>Muse Wonder</h2><table><tr><th>Usage</th><th>Standard mode (per 1M tokens)</th><th>Contributor mode (per 1M tokens)</th></tr><tr><td>Input</td><td>$4.00</td><td>Not available</td></tr><tr><td>Output</td><td>$20.00</td><td>Not available</td></tr></table><h2>Muse Spark</h2><table><tr><th>Usage</th><th>Standard mode (per 1M tokens)</th><th>Contributor mode (per 1M tokens)</th></tr><tr><td>Cached input</td><td>$0.15</td><td>$0.002</td></tr><tr><td>Input</td><td>$1.25</td><td>$0.10</td></tr><tr><td>Output</td><td>$4.25</td><td>$0.20</td></tr></table>');
  const protocols = sourceDocument('meta-protocols', '<title>Choosing an API</title><table><tr><th>Format</th><th>Endpoint</th><th>Best for</th></tr><tr><td>Responses</td><td>POST /v1/responses</td><td>Agents</td></tr><tr><td>Chat Completions</td><td>POST /v1/chat/completions</td><td>Compatibility</td></tr><tr><td>Messages</td><td>POST /v1/messages</td><td>Anthropic format</td></tr></table>');
  const docs = [api, catalog, pricing, protocols];
  const ir = metaParser.mapMetaApi(docs, observationIR(docs));
  const offerings = ir.services.find(({ id }) => id.value === 'global')?.offerings ?? [];
  const wonder = offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-wonder-1.0');
  const sparkStandard = offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-spark-1.3');
  const sparkContributor = offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-spark-1.3-contributor');

  assert.equal(offerings.length, 4);
  assert.deepEqual(ir.profile?.aliases?.value, ['Meta Model API']);
  assert.equal(ir.profile?.kind?.value, 'first_party');
  assert.equal(ir.profile?.name?.evidence[0]?.source_ref, 'meta-models');
  assert.equal(ir.profile?.aliases?.evidence[0]?.source_ref, 'meta-api-reference');
  assert.equal(ir.profile?.kind?.evidence[0]?.source_ref, 'meta-models');
  assert.deepEqual(wonder?.operations.flatMap(({ routes }) => routes.map(({ path_template }) => path_template.value)), [
    '/v1/responses', '/v1/chat/completions', '/v1/messages',
  ]);
  assert.deepEqual(offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-voice-transcribe-1.0')?.operations.flatMap(({ routes }) => routes.map(({ path_template }) => path_template.value)), ['/v1/asr/transcribe']);
  assert.deepEqual(wonder?.prices[0]?.rules.value[0]?.rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal]), [
    ['input', '4.00'], ['output', '20.00'],
  ]);
  assert.deepEqual(sparkContributor?.prices[0]?.rules.value.map(({ conditions, rate_items }) => [conditions?.[0] && 'field' in conditions[0] ? conditions[0].value : undefined, rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal])]), [
    ['Contributor mode', [['cache_read', '0.002'], ['input', '0.10'], ['output', '0.20']]],
  ]);
  assert.deepEqual(sparkStandard?.prices[0]?.rules.value.map(({ conditions, rate_items }) => [conditions?.[0] && 'field' in conditions[0] ? conditions[0].value : undefined, rate_items.map(({ metric, amount_decimal }) => [metric, amount_decimal])]), [
    ['Standard mode', [['cache_read', '0.15'], ['input', '1.25'], ['output', '4.25']]],
  ]);
  assert.deepEqual(validateProviderCollectionIR(ir, docs.map(({ metadata }) => metadata)), []);
});

test('Meta IR 将官方图片专属 API 和实时语音 WebSocket 关联到精确型号与 Model Registry 观察', () => {
  const api = sourceDocument('meta-api-reference', '<title>API reference — Meta Model API</title><p>Base URL https://api.meta.ai/v1</p>');
  const catalog = sourceDocument('meta-models', '<title>Models - Meta Model API</title><h2>Models at a glance</h2><table><tr><th>Use case</th><th>Model</th><th>Input</th><th>Output</th><th>API endpoints</th></tr><tr><td>Image generation and editing</td><td>Muse Image</td><td>Text and image</td><td>Image</td><td>Responses, Image generation</td></tr><tr><td>Speech to text</td><td>Muse Voice Transcribe</td><td>Audio</td><td>Text (transcription)</td><td>Transcribe</td></tr></table><h2>Muse Image</h2><table><tr><th>Model ID</th><th>Input</th><th>Output</th></tr><tr><td>muse-image-1.0</td><td>Text, image</td><td>Image</td></tr></table><h2>Muse Voice Transcribe</h2><table><tr><th>Model ID</th><th>Input</th><th>Output</th></tr><tr><td>muse-voice-transcribe-1.0</td><td>Audio</td><td>Text transcript</td></tr></table>');
  const imageCreate = sourceDocument('meta-image-create-api', 'POST /images/generations. Request fields include model, prompt, n, size, response_format, output_format. Response ImagesResponse includes data[].b64_json and data[].url.');
  const imageEdit = sourceDocument('meta-image-edit-api', 'POST /images/edits. Request fields include model, prompt, images, image, n, size, response_format, output_format.');
  const imageSchemas = sourceDocument('meta-image-schemas', 'CreateImageRequest and CreateImageEditRequest schemas: n has minimum 1 and maximum 10.');
  const voiceTranscribe = sourceDocument('meta-voice-transcribe-api', 'POST https://api.meta.ai/v1/asr/transcribe');
  const voiceRealtime = sourceDocument('meta-voice-realtime-api', 'WS /asr/realtime. Connect to wss://api.meta.ai/v1/asr/realtime.');
  const docs = [api, catalog, imageCreate, imageEdit, imageSchemas, voiceTranscribe, voiceRealtime];
  const ir = metaParser.mapMetaApi(docs, observationIR(docs));
  const service = ir.services.find(({ id }) => id.value === 'global');
  const image = service?.offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-image-1.0');
  const voice = service?.offerings.find(({ provider_model_id }) => provider_model_id.value === 'muse-voice-transcribe-1.0');

  assert.deepEqual(service?.endpoints.map(({ id }) => id.value), [
    'meta-model-api', 'meta-model-api-realtime',
  ]);
  assert.deepEqual(image?.operations.flatMap(({ routes }) => routes.map(({ method, path_template, operation_kind }) => [method.value, path_template.value, operation_kind.value])), [
    ['POST', '/v1/images/generations', 'image_generation'],
    ['POST', '/v1/images/edits', 'image_generation'],
  ]);
  assert.deepEqual(image?.operations.find(({ kind }) => kind.value === 'image_generation')?.parameters?.value.find(({ name }) => name === 'n')?.max, 10);
  assert.deepEqual(voice?.operations.flatMap(({ routes }) => routes.map(({ method, path_template, endpoint_ref }) => [method.value, path_template.value, endpoint_ref.value])), [
    ['WS', '/v1/asr/realtime', 'meta-model-api-realtime'],
    ['POST', '/v1/asr/transcribe', 'meta-model-api'],
  ]);
  assert.equal(ir.coverage.find(({ source_ref }) => source_ref === imageCreate.source.id)?.status, 'partial');
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === voiceRealtime.source.id).map(({ record_count, record_unit }) => [record_count, record_unit]), [
    [1, 'Route records'],
  ]);
  assert.deepEqual(ir.coverage.filter(({ source_ref }) => source_ref === voiceTranscribe.source.id).map(({ record_count, record_unit }) => [record_count, record_unit]), [
    [1, 'Route records'],
  ]);
  assert.deepEqual(validateProviderCollectionIR(ir, docs.map(({ metadata }) => metadata)), []);
});
