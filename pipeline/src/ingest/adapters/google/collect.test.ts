import assert from 'node:assert/strict';
import test from 'node:test';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import type { CapturedDocument } from '../document-set.ts';
import { officialDocsParser } from '../official-provider-docs.ts';
import { googleCollectorConfig, googleParser } from './collect.ts';
import { assertOfficialProviderObservationAdapter } from '../official-provider-entrypoint-test.ts';

test('Google Gemini 采集入口保留官方模型观察，不把文档提及变成供应事实', () => {
  assertOfficialProviderObservationAdapter(googleCollectorConfig, 'gemini-2.5-pro');
});

test('Google API 示例只映射 Gemini Developer API Base URL，不创建模型供应', () => {
  const source = googleCollectorConfig.sources.find(({ id }) => id === 'google-api-overview')!;
  const body = 'curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent"';
  const document = {
    source,
    body,
    metadata: {
      source_id: source.id, source_name: source.name, request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200,
      content_type: 'text/html', etag: null, last_modified: null,
      content_hash: `sha256:${'d'.repeat(64)}`, byte_length: body.length,
      collector_version: 'test', body_file: `${source.id}.body`,
    },
  } as CapturedDocument;
  const facts = officialDocsParser.sourceGapFacts([document], googleCollectorConfig);
  const observationIR = officialDocsParser.toCollectionIR('google', [document], facts);
  const ir = googleParser.mapGoogleEndpoint([document], observationIR);

  assert.equal(ir.profile?.name?.value, 'Google');
  assert.deepEqual(ir.profile?.aliases?.value, ['Gemini API']);
  assert.equal(ir.profile?.kind?.value, 'first_party');
  assert.equal(ir.profile?.docs?.value.api, source.url);
  assert.deepEqual(ir.services[0]?.endpoints.map(({ id, base_url, api_region }) => [id.value, base_url.value, api_region.value]), [
    ['gemini-developer-api', 'https://generativelanguage.googleapis.com/v1beta', 'Global'],
  ]);
  assert.equal(ir.services[0]?.name?.value, 'Gemini Developer API');
  assert.deepEqual(ir.services[0]?.offerings, [], 'API 示例中的型号只证明请求格式，不证明账号供应');
  assert.deepEqual(ir.coverage.filter(({ source_ref, scope }) => source_ref === source.id && scope === 'api').map(({ status, record_count, record_unit }) => [status, record_count, record_unit]), [
    ['partial', 1, 'API Endpoint records'],
  ]);
  assert.deepEqual(validateProviderCollectionIR(ir, [document.metadata]), []);
});

test('Google 没有 Gemini generateContent 请求示例时不创建 Endpoint', () => {
  const source = googleCollectorConfig.sources.find(({ id }) => id === 'google-api-overview')!;
  const body = 'The API overview does not include a REST request.';
  const document = {
    source,
    body,
    metadata: {
      source_id: source.id, source_name: source.name, request_url: source.url,
      retrieved_at: '2026-10-26T00:00:00.000Z', http_status: 200,
      content_type: 'text/html', etag: null, last_modified: null,
      content_hash: `sha256:${'e'.repeat(64)}`, byte_length: body.length,
      collector_version: 'test', body_file: `${source.id}.body`,
    },
  } as CapturedDocument;
  const facts = officialDocsParser.sourceGapFacts([document], googleCollectorConfig);
  const observationIR = officialDocsParser.toCollectionIR('google', [document], facts);

  assert.deepEqual(googleParser.mapGoogleEndpoint([document], observationIR).services, []);
});

test('Google Code execution 候选包含提示词、文件输入、代码步骤和执行结果', () => {
  const source = googleCollectorConfig.sources.find(({ id }) => id === 'google-code-execution')!;
  const body = [
    '"type": "code_execution"', 'codeExecution: {}', 'input="What is the sum?"', 'code_execution_call', 'arguments.code',
    'code_execution_result', 'step.result', 'file input', 'inline images',
  ].join('\n');
  const document = {
    source, body,
    metadata: {
      source_id: source.id, source_name: source.name, request_url: source.url,
      retrieved_at: '2026-11-04T00:00:00.000Z', http_status: 200,
      content_type: 'text/markdown', etag: null, last_modified: null,
      content_hash: `sha256:${'f'.repeat(64)}`, byte_length: body.length,
      collector_version: 'test', body_file: `${source.id}.body`,
    },
  } as CapturedDocument;
  const facts = officialDocsParser.sourceGapFacts([document], googleCollectorConfig);
  const observationIR = officialDocsParser.toCollectionIR('google', [document], facts);
  const ir = googleParser.mapGoogleEndpoint([document], observationIR);
  const codeExecution = ir.services[0]?.capabilities.find(({ kind }) => kind.value === 'code_execution')?.operations[0];

  assert.deepEqual(codeExecution?.input?.value.map(({ name, kind }) => [name, kind]), [['input', 'text'], ['file', 'file']]);
  assert.deepEqual(codeExecution?.parameters?.value.map(({ name, type }) => [name, type]), [
    ['tools[].type', 'string'], ['tools[].codeExecution', 'object'],
  ]);
  assert.ok(codeExecution?.output?.value.some(({ fields }) => fields?.includes('steps[].arguments.code')));
  assert.ok(codeExecution?.output?.value.some(({ kind }) => kind === 'image'));
  assert.deepEqual(validateProviderCollectionIR(ir, [document.metadata]), []);
});

test('Google File Search 候选从捕获的官方示例映射查询、存储列表、topK 和 metadataFilter，不合成来源未提供的描述', () => {
  const source = googleCollectorConfig.sources.find(({ id }) => id === 'google-files-api')!;
  const apiSource = googleCollectorConfig.sources.find(({ id }) => id === 'google-generate-content-api')!;
  const makeDocument = (selectedSource: typeof source, body: string, suffix: string): CapturedDocument => ({
    source: selectedSource, body,
    metadata: {
      source_id: selectedSource.id, source_name: selectedSource.name, request_url: selectedSource.url,
      retrieved_at: '2026-11-04T00:00:00.000Z', http_status: 200,
      content_type: 'text/markdown', etag: null, last_modified: null,
      content_hash: `sha256:${suffix.repeat(64)}`, byte_length: body.length,
      collector_version: 'test', body_file: `${selectedSource.id}.body`,
    },
  } as CapturedDocument);
  const docs = [
    makeDocument(apiSource, 'fileSearchStoreNames topK metadataFilter retrievedContext groundingSupports', 'a'),
    makeDocument(source, [
      'file_search', 'fileSearch', 'fileSearchStoreNames', 'topK', 'metadataFilter', 'retrievedContext', 'file_citation', 'file_name',
      'contents="Tell me about this file"', '"fileSearchStoreNames": ["fileSearchStores/demo"]', '"topK": 5', '"metadataFilter": "year=2024"',
    ].join('\n'), 'b'),
  ];
  const facts = officialDocsParser.sourceGapFacts(docs, googleCollectorConfig);
  const base = officialDocsParser.toCollectionIR('google', docs, facts);
  const ir = googleParser.mapGoogleEndpoint(docs, base);
  const fileSearch = ir.services[0]?.capabilities.find(({ kind }) => kind.value === 'file_search')?.operations[0];

  assert.ok(fileSearch?.input?.value.some(({ name, description }) => name === 'contents' && description === undefined));
  assert.deepEqual(fileSearch?.parameters?.value.map(({ name }) => name), [
    'tools[].type', 'tools[].fileSearch.fileSearchStoreNames[]', 'tools[].fileSearch.topK', 'tools[].fileSearch.metadataFilter',
  ]);
  assert.ok(fileSearch?.parameters?.value.every(({ description }) => !description || /^[\x00-\x7F]*$/.test(description)));
  assert.deepEqual(validateProviderCollectionIR(ir, docs.map(({ metadata }) => metadata)), []);
});

test('Google Search、Maps、URL Context 候选保留两种 API 的英文输入和参数路径', () => {
  const makeDocument = (sourceId: string, body: string, suffix: string): CapturedDocument => {
    const source = googleCollectorConfig.sources.find(({ id }) => id === sourceId)!;
    return {
      source, body,
      metadata: {
        source_id: source.id, source_name: source.name, request_url: source.url,
        retrieved_at: '2026-11-04T00:00:00.000Z', http_status: 200,
        content_type: 'text/markdown', etag: null, last_modified: null,
        content_hash: `sha256:${suffix.repeat(64)}`, byte_length: body.length,
        collector_version: 'test', body_file: `${source.id}.body`,
      },
    } as CapturedDocument;
  };
  const docs = [
    makeDocument('google-generate-content-api', 'GenerateContent Tool schema', 'd'),
    makeDocument('google-google-search', [
      'input contents google_search googleSearch search_types timeRangeFilter startTime endTime searchTypes webSearch imageSearch',
      'groundingMetadata searchEntryPoint renderedContent groundingChunks groundingSupports webSearchQueries imageSearchQueries',
      'google_search_call google_search_result url_citation search_suggestions',
    ].join('\n'), 'e'),
    makeDocument('google-google-maps', [
      'input contents google_maps googleMaps latitude longitude enableWidget enable_widget groundingMetadata groundingChunks',
      'placeId placeAnswerSources googleMapsWidgetContextToken groundingSupports place_citation',
    ].join('\n'), 'f'),
    makeDocument('google-url-context', [
      'input contents url_context urlContext urlContextMetadata urlMetadata retrievedUrl urlRetrievalStatus',
      'url_citation url_context_result start_index end_index',
    ].join('\n'), 'a'),
  ];
  const facts = officialDocsParser.sourceGapFacts(docs, googleCollectorConfig);
  const base = officialDocsParser.toCollectionIR('google', docs, facts);
  const ir = googleParser.mapGoogleEndpoint(docs, base);
  const byKind = new Map(ir.services[0]?.capabilities.map(({ kind, operations }) => [kind.value, operations[0]]));
  const search = byKind.get('web_search');
  const maps = byKind.get('google_maps');
  const urlContext = byKind.get('web_fetch');

  for (const operation of [search, maps, urlContext]) {
    assert.deepEqual(operation?.input?.value.map(({ name }) => name), ['input', 'contents']);
    assert.ok([...(operation?.input?.value ?? []), ...(operation?.parameters?.value ?? [])]
      .every(({ description }) => !description || /^[\x00-\x7F]*$/.test(description)));
  }
  assert.ok(search?.parameters?.value.some(({ name }) => name === 'tools[].search_types[]'));
  assert.ok(maps?.parameters?.value.some(({ name }) => name === 'toolConfig.retrievalConfig.latLng.latitude'));
  assert.ok(urlContext?.parameters?.value.some(({ name }) => name === 'tools[].urlContext'));
  assert.deepEqual(validateProviderCollectionIR(ir, docs.map(({ metadata }) => metadata)), []);
});

test('Google Batch 候选从官方 API Schema 映射输入配置、参数与任务输出', () => {
  const source = googleCollectorConfig.sources.find(({ id }) => id === 'google-batch-api-schema')!;
  const body = [
    'GenerateContentBatch', 'displayName', 'inputConfig', 'fileName', 'requests', 'priority', 'responsesFile', 'inlinedResponses', 'BatchState',
  ].join('\n');
  const document = {
    source, body,
    metadata: {
      source_id: source.id, source_name: source.name, request_url: source.url,
      retrieved_at: '2026-11-04T00:00:00.000Z', http_status: 200,
      content_type: 'text/markdown', etag: null, last_modified: null,
      content_hash: `sha256:${'c'.repeat(64)}`, byte_length: body.length,
      collector_version: 'test', body_file: `${source.id}.body`,
    },
  } as CapturedDocument;
  const facts = officialDocsParser.sourceGapFacts([document], googleCollectorConfig);
  const observationIR = officialDocsParser.toCollectionIR('google', [document], facts);
  const ir = googleParser.mapGoogleEndpoint([document], observationIR);
  const batch = ir.services[0]?.capabilities.find(({ kind }) => kind.value === 'batch')?.operations[0];

  assert.deepEqual(batch?.input?.value.map(({ name }) => name), [
    'model', 'inputConfig', 'inputConfig.requests.requests[]', 'inputConfig.fileName',
  ]);
  assert.deepEqual(batch?.parameters?.value.map(({ name }) => name), [
    'model', 'displayName', 'inputConfig', 'inputConfig.requests.requests[]', 'inputConfig.fileName', 'priority',
  ]);
  assert.ok(batch?.output?.value.some(({ fields }) => fields?.includes('response.responsesFile')));
  const descriptions = [
    ...(batch?.input?.value ?? []), ...(batch?.parameters?.value ?? []),
  ].flatMap(({ description }) => description ? [description] : []);
  assert.ok(descriptions.every((description) => /^[\x00-\x7F]*$/.test(description)));
  assert.deepEqual(validateProviderCollectionIR(ir, [document.metadata]), []);
});
