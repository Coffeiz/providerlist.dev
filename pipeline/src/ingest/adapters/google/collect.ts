import { collectOfficialProviderDocs, type OfficialDocsCandidateFacts } from '../official-provider-docs.ts';
import type { CapturedDocument } from '../document-set.ts';
import type { CapabilityInput, CapabilityOutput, ParameterSpec } from '@providerlist/schema/types';
import { upsertCoverageRecord } from '../document-observation.ts';
import type { CapabilityFact, EvidenceRef, ProviderCollectionIR } from '../../ir/provider-collection.ts';
import { GOOGLE_INGEST_SOURCES } from './sources.ts';

function mapGoogleProfile(documents: readonly CapturedDocument[]) {
  const models = documents.find(({ source }) => source.id === 'google-models');
  const overview = documents.find(({ source }) => source.id === 'google-api-overview');
  const pricing = documents.find(({ source }) => source.id === 'google-pricing');
  if (!models && !overview) return undefined;
  const docs: Record<string, string> = {};
  const evidence: EvidenceRef[] = [];
  if (models) { docs.overview = models.source.url; evidence.push({ source_ref: models.source.id, locator: 'Models | Gemini API', assertion: 'Google 官方模型指南说明 Gemini API 当前模型。' }); }
  if (overview) { docs.api = overview.source.url; evidence.push({ source_ref: overview.source.id, locator: 'Gemini API reference', assertion: 'Google 官方 Gemini API Reference。' }); }
  if (pricing) { docs.pricing = pricing.source.url; evidence.push({ source_ref: pricing.source.id, locator: 'Gemini Developer API pricing', assertion: 'Google 官方 Gemini Developer API 定价文档。' }); }
  const profileEvidence = models?.source.id ?? overview!.source.id;
  return {
    name: { value: 'Google', evidence: [{ source_ref: profileEvidence, locator: 'Google AI for Developers', assertion: '官方 Gemini API 文档由 Google AI for Developers 发布。' }] },
    aliases: { value: ['Gemini API'], evidence: [{ source_ref: profileEvidence, locator: 'Gemini API', assertion: '官方文档将此服务称为 Gemini API。' }] },
    kind: { value: 'first_party' as const, evidence: [{ source_ref: overview?.source.id ?? profileEvidence, locator: 'Gemini API reference', assertion: '文档说明 Google Gemini API 的官方请求地址。' }] },
    docs: { value: docs, evidence },
  };
}

function googleCodeExecutionFact(document: CapturedDocument): CapabilityFact | undefined {
  if (!['"type": "code_execution"', 'code_execution_call', 'arguments.code', 'code_execution_result', 'step.result', 'file input', 'inline images'].every((token) => document.body.toLowerCase().includes(token.toLowerCase()))) return undefined;
  const sourceRef = document.source.id;
  const locator = '#input-output';
  const assertion = '官方 Code execution 文档说明输入提示词、可选文件以及模型生成代码和执行结果。';
  return {
    id: { value: 'code-execution', evidence: [{ source_ref: sourceRef, locator, assertion }] },
    kind: { value: 'code_execution', evidence: [{ source_ref: sourceRef, locator, assertion: 'Google Gemini API 将 Code execution 定义为模型内置工具。' }] },
    links: { value: { documentation: document.source.url }, evidence: [{ source_ref: sourceRef, locator, assertion: '链接指向官方 Code execution 文档。' }] },
    operations: [{
      id: { value: 'code-execution', evidence: [{ source_ref: sourceRef, locator, assertion }] },
      kind: { value: 'code_execution', evidence: [{ source_ref: sourceRef, locator, assertion }] },
      routes: [],
      parameters: { value: [
        { name: 'tools[].type', type: 'string', required: true, enum: ['code_execution'], route_mappings: ['body.tools[].type'] },
        ...(document.body.includes('codeExecution') ? [{ name: 'tools[].codeExecution', type: 'object' as const, required: false, route_mappings: ['body.tools[].codeExecution'] }] : []),
      ], evidence: [{ source_ref: sourceRef, locator: '#enable-code-execution', assertion: '官方示例显示 Interactions API 使用 type=code_execution，GenerateContent API 使用空 codeExecution 配置对象。' }] },
      input: { value: [
        { name: 'input', kind: 'text', required: true },
        ...(document.body.toLowerCase().includes('file input') ? [{ name: 'file', kind: 'file' as const, required: false }] : []),
      ], evidence: [{ source_ref: sourceRef, locator: '#input-output', assertion: '官方文档列出 User prompt 与可选的文本/CSV 文件输入。' }] },
      output: { value: [
        { kind: 'structured', fields: ['steps[].type=model_output', 'steps[].content[].text', 'steps[].type=code_execution_call', 'steps[].arguments.code', 'steps[].type=code_execution_result', 'steps[].result'] },
        { kind: 'image', artifact: { kind: 'inline' } },
      ], evidence: [{ source_ref: sourceRef, locator: '#input-output', assertion: '官方示例枚举代码调用与执行结果步骤；支持的模型可返回内联图像。' }] },
    }],
  };
}

interface GoogleCapabilitySpec {
  readonly sourceId: string;
  readonly id: string;
  readonly kind: string;
  readonly locator: string;
  readonly requiredMarkers: readonly string[];
  readonly input: readonly CapabilityInput[];
  readonly output: readonly CapabilityOutput[];
  readonly parameters: readonly ParameterSpec[];
  readonly inputAssertion: string;
  readonly outputAssertion: string;
}

const GOOGLE_CAPABILITY_SPECS = [
  {
    sourceId: 'google-google-search', id: 'google-search', kind: 'web_search', locator: 'Resource:Tool.googleSearch / Resource:GroundingMetadata',
    requiredMarkers: ['input', 'contents', 'google_search', 'googleSearch', 'search_types', 'timeRangeFilter', 'startTime', 'endTime', 'searchTypes', 'webSearch', 'imageSearch', 'groundingMetadata', 'searchEntryPoint', 'renderedContent', 'groundingChunks', 'groundingSupports', 'webSearchQueries', 'imageSearchQueries', 'google_search_call', 'google_search_result', 'url_citation', 'search_suggestions'],
    input: [
      { name: 'input', kind: 'text', required: true },
      { name: 'contents', kind: 'text', required: true },
    ],
    output: [{ kind: 'structured', fields: ['steps[].type=google_search_call', 'steps[].arguments.queries[]', 'steps[].type=google_search_result', 'steps[].result[].search_suggestions', 'steps[].content[].annotations[].type=url_citation', 'steps[].content[].annotations[].url', 'steps[].content[].annotations[].title', 'steps[].content[].annotations[].start_index', 'steps[].content[].annotations[].end_index', 'candidates[].content.parts[].text', 'candidates[].groundingMetadata.searchEntryPoint.renderedContent', 'candidates[].groundingMetadata.searchEntryPoint.sdkBlob', 'candidates[].groundingMetadata.groundingChunks[].web.uri', 'candidates[].groundingMetadata.groundingChunks[].web.title', 'candidates[].groundingMetadata.groundingSupports[].segment', 'candidates[].groundingMetadata.groundingSupports[].groundingChunkIndices[]', 'candidates[].groundingMetadata.groundingSupports[].confidenceScores[]', 'candidates[].groundingMetadata.webSearchQueries[]', 'candidates[].groundingMetadata.imageSearchQueries[]'] }],
    parameters: [
      { name: 'tools[].type', type: 'string', required: true, enum: ['google_search'], route_mappings: ['body.tools[].type'] },
      { name: 'tools[].search_types[]', type: 'array', required: false, route_mappings: ['body.tools[].search_types'] },
      { name: 'tools[].googleSearch', type: 'object', required: false, route_mappings: ['body.tools[].googleSearch'] },
      { name: 'tools[].googleSearch.timeRangeFilter.startTime', type: 'string', required: false, route_mappings: ['body.tools[].googleSearch.timeRangeFilter.startTime'] },
      { name: 'tools[].googleSearch.timeRangeFilter.endTime', type: 'string', required: false, route_mappings: ['body.tools[].googleSearch.timeRangeFilter.endTime'] },
      { name: 'tools[].googleSearch.searchTypes.webSearch', type: 'object', required: false, route_mappings: ['body.tools[].googleSearch.searchTypes.webSearch'] },
      { name: 'tools[].googleSearch.searchTypes.imageSearch', type: 'object', required: false, route_mappings: ['body.tools[].googleSearch.searchTypes.imageSearch'] },
    ],
    inputAssertion: 'Official GenerateContent examples submit the search prompt through contents.',
    outputAssertion: '官方 GroundingMetadata 响应示例列出搜索查询、搜索入口、网页来源和文本依据字段。',
  },
  {
    sourceId: 'google-google-maps', id: 'google-maps', kind: 'google_maps', locator: 'Resource:Tool.googleMaps / Resource:GroundingMetadata',
    requiredMarkers: ['input', 'contents', 'google_maps', 'googleMaps', 'latitude', 'longitude', 'enableWidget', 'enable_widget', 'groundingMetadata', 'groundingChunks', 'placeId', 'placeAnswerSources', 'googleMapsWidgetContextToken', 'groundingSupports', 'place_citation'],
    input: [
      { name: 'input', kind: 'text', required: true },
      { name: 'contents', kind: 'text', required: true },
    ],
    output: [{ kind: 'structured', fields: ['steps[].content[].text', 'steps[].content[].annotations[].type=place_citation', 'steps[].content[].annotations[].name', 'steps[].content[].annotations[].url', 'steps[].content[].annotations[].start_index', 'steps[].content[].annotations[].end_index', 'candidates[].content.parts[].text', 'candidates[].groundingMetadata.groundingChunks[].maps.uri', 'candidates[].groundingMetadata.groundingChunks[].maps.title', 'candidates[].groundingMetadata.groundingChunks[].maps.text', 'candidates[].groundingMetadata.groundingChunks[].maps.placeId', 'candidates[].groundingMetadata.groundingChunks[].maps.placeAnswerSources', 'candidates[].groundingMetadata.groundingSupports[]', 'candidates[].groundingMetadata.googleMapsWidgetContextToken'] }],
    parameters: [
      { name: 'tools[].type', type: 'string', required: true, enum: ['google_maps'], route_mappings: ['body.tools[].type'] },
      { name: 'tools[].latitude', type: 'number', required: false, route_mappings: ['body.tools[].latitude'] },
      { name: 'tools[].longitude', type: 'number', required: false, route_mappings: ['body.tools[].longitude'] },
      { name: 'tools[].enable_widget', type: 'boolean', required: false, route_mappings: ['body.tools[].enable_widget'] },
      { name: 'tools[].googleMaps', type: 'object', required: false, route_mappings: ['body.tools[].googleMaps'] },
      { name: 'toolConfig.retrievalConfig.latLng.latitude', type: 'number', required: false, route_mappings: ['body.toolConfig.retrievalConfig.latLng.latitude'] },
      { name: 'toolConfig.retrievalConfig.latLng.longitude', type: 'number', required: false, route_mappings: ['body.toolConfig.retrievalConfig.latLng.longitude'] },
    ],
    inputAssertion: 'Official GenerateContent examples use contents for the prompt and toolConfig.retrievalConfig.latLng for an optional contextual location.',
    outputAssertion: '官方示例列出 place_citation 注释；GenerateContent schema 还定义 Maps grounding chunk 和 widget token。',
  },
  {
    sourceId: 'google-url-context', id: 'url-context', kind: 'web_fetch', locator: 'Resource:Tool.urlContext / Resource:UrlContextMetadata',
    requiredMarkers: ['input', 'contents', 'url_context', 'urlContext', 'urlContextMetadata', 'urlMetadata', 'retrievedUrl', 'urlRetrievalStatus', 'url_citation', 'url_context_result', 'start_index', 'end_index'],
    input: [
      { name: 'input', kind: 'text', required: true },
      { name: 'contents', kind: 'text', required: true },
    ],
    output: [{ kind: 'structured', fields: ['steps[].type=url_context_result', 'steps[].url_context_result.url', 'steps[].url_context_result.status', 'steps[].content[].annotations[].type=url_citation', 'steps[].content[].annotations[].url', 'steps[].content[].annotations[].title', 'steps[].content[].annotations[].start_index', 'steps[].content[].annotations[].end_index', 'candidates[].content.parts[].text', 'candidates[].urlContextMetadata.urlMetadata[].retrievedUrl', 'candidates[].urlContextMetadata.urlMetadata[].urlRetrievalStatus'] }],
    parameters: [
      { name: 'tools[].type', type: 'string', required: true, enum: ['url_context'], route_mappings: ['body.tools[].type'] },
      { name: 'tools[].urlContext', type: 'object', required: false, route_mappings: ['body.tools[].urlContext'] },
    ],
    inputAssertion: 'Official requests provide the question and URLs to read in contents.',
    outputAssertion: '官方响应示例列出文本引用以及 URL 检索状态和 retrieved URL 元数据。',
  },
  {
    sourceId: 'google-batch-api-schema', id: 'batch', kind: 'batch', locator: 'GenerateContentBatch / InputConfig / GenerateContentBatchOutput',
    requiredMarkers: ['GenerateContentBatch', 'displayName', 'inputConfig', 'fileName', 'requests', 'priority', 'responsesFile', 'inlinedResponses', 'BatchState'],
    input: [
      { name: 'model', kind: 'text', required: true },
      { name: 'inputConfig', kind: 'structured', required: true },
      { name: 'inputConfig.requests.requests[]', kind: 'structured', required: false },
      { name: 'inputConfig.fileName', kind: 'file', required: false },
    ],
    output: [{ kind: 'structured', fields: ['name', 'displayName', 'inputConfig', 'state', 'done', 'metadata.state', 'batchStats', 'output.inlinedResponses', 'output.responsesFile', 'response.inlinedResponses', 'response.responsesFile', 'error'] }],
    parameters: [
      { name: 'model', type: 'string', required: true, route_mappings: ['path.batch.model'] },
      { name: 'displayName', type: 'string', required: true, route_mappings: ['body.batch.displayName'] },
      { name: 'inputConfig', type: 'object', required: true, route_mappings: ['body.batch.inputConfig'] },
      { name: 'inputConfig.requests.requests[]', type: 'array', required: false, route_mappings: ['body.batch.inputConfig.requests.requests'] },
      { name: 'inputConfig.fileName', type: 'string', required: false, route_mappings: ['body.batch.inputConfig.fileName'] },
      { name: 'priority', type: 'integer', required: false, default: 0, route_mappings: ['body.batch.priority'] },
    ],
    inputAssertion: 'The Batch API schema requires a model, displayName, and inputConfig; inputConfig selects inlined requests or a file.',
    outputAssertion: 'The Batch API schema exposes the batch resource state and either inlined responses or a responses file.',
  },
  {
    sourceId: 'google-files-api', id: 'file-search', kind: 'file_search', locator: 'Resource:Tool.fileSearch / Resource:GroundingChunk.retrievedContext',
    requiredMarkers: ['file_search', 'fileSearch', 'fileSearchStoreNames', 'retrievedContext', 'file_citation'],
    input: [
      { name: 'contents', kind: 'text', required: true },
      { name: 'tools[].fileSearch.fileSearchStoreNames[]', kind: 'structured', required: true },
    ],
    output: [{ kind: 'structured', fields: ['steps[].content[].annotations[].type=file_citation', 'steps[].content[].annotations[].file_name', 'steps[].content[].annotations[].source', 'steps[].content[].annotations[].page_number', 'steps[].content[].annotations[].media_id', 'steps[].content[].annotations[].custom_metadata', 'candidates[].content.parts[].text', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.uri', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.title', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.text', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.fileSearchStore', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.customMetadata[].key', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.customMetadata[].stringValue', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.customMetadata[].numericValue', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.customMetadata[].stringListValue.values[]', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.pageNumber', 'candidates[].groundingMetadata.groundingChunks[].retrievedContext.mediaId', 'candidates[].groundingMetadata.groundingSupports[]'] }],
    parameters: [],
    inputAssertion: 'File Search 官方文档示例定义 Interactions 的 input/file_search_store_names；GenerateContent Schema 定义 contents/fileSearchStoreNames。',
    outputAssertion: 'File Search 官方文档示例列出 file_citation 注释；GenerateContent Schema 提供 retrievedContext 结构。',
  },
] as const satisfies readonly GoogleCapabilitySpec[];

function collectGoogleServiceCapabilities(documents: readonly CapturedDocument[]) {
  const facts: CapabilityFact[] = [];
  const coverage: NonNullable<ProviderCollectionIR['coverage']>[number][] = [];
  const reviewItems: ProviderCollectionIR['review_items'][number][] = [];
  const apiReference = documents.find(({ source }) => source.id === 'google-generate-content-api');
  for (const spec of GOOGLE_CAPABILITY_SPECS) {
    const document = documents.find(({ source }) => source.id === spec.sourceId);
    if (!document) continue;
    const lowerBody = `${apiReference?.body ?? ''}\n${document.body}`.toLowerCase();
    const requiredMarkers = spec.id === 'file-search'
      ? spec.requiredMarkers.filter((marker) => !['topK', 'metadataFilter', 'customMetadata', 'pageNumber', 'mediaId', 'groundingSupports'].includes(marker))
      : spec.requiredMarkers;
    const missing = requiredMarkers.filter((marker) => !lowerBody.includes(marker.toLowerCase()));
    if (missing.length) {
      coverage.push({
        source_ref: spec.sourceId, scope: 'capability', market: 'global', status: 'not_parsed', record_count: 0,
        record_unit: 'independent Capability records',
        note: `官方文档结构未匹配预期，缺少字段标记：${missing.join(', ')}；不生成不完整 Capability。`,
      });
      reviewItems.push({
        id: `google-${spec.id}-io-not-parsed`, kind: 'incomplete_coverage', subject_ref: `global/${spec.kind}`,
        message: `未能从已登记的官方文档完整确认 ${spec.kind} 的输入/输出结构；检查文档变更后再更新映射。`,
        evidence: [{ source_ref: spec.sourceId, locator: spec.locator, assertion: `未发现必要结构标记：${missing.join(', ')}。` }],
      });
      continue;
    }
    const sourceEvidence = (assertion: string): EvidenceRef[] => [
      ...(apiReference ? [{ source_ref: apiReference.source.id, locator: spec.locator, assertion }] : []),
      { source_ref: spec.sourceId, locator: spec.locator, assertion: `能力文档确认此工具适用：${assertion}` },
    ];
    const assertion = `Google official documentation defines the Gemini ${spec.kind} tool.`;
    const fileSearchParams = spec.id === 'file-search' ? [
      ...(lowerBody.includes('file_search') ? [{ name: 'tools[].type', type: 'string' as const, required: true, enum: ['file_search'], route_mappings: ['body.tools[].type'] }] : []),
      ...(lowerBody.includes('file_search_store_names') ? [{ name: 'tools[].file_search_store_names', type: 'array' as const, required: true, route_mappings: ['body.tools[].file_search_store_names'] }] : []),
      ...(lowerBody.includes('filesearchstorenames') ? [{ name: 'tools[].fileSearch.fileSearchStoreNames[]', type: 'array' as const, required: true, route_mappings: ['body.tools[].fileSearch.fileSearchStoreNames'] }] : []),
      ...(lowerBody.includes('topk') ? [{ name: 'tools[].fileSearch.topK', type: 'integer' as const, required: false, route_mappings: ['body.tools[].fileSearch.topK'] }] : []),
      ...(lowerBody.includes('metadatafilter') ? [{ name: 'tools[].fileSearch.metadataFilter', type: 'string' as const, required: false, route_mappings: ['body.tools[].fileSearch.metadataFilter'] }] : []),
    ] : spec.parameters;
    const fileSearchInput = spec.id === 'file-search' ? [
      ...(lowerBody.includes('input=') || lowerBody.includes('"input"') ? [{ name: 'input', kind: 'text' as const, required: true }] : []),
      ...(lowerBody.includes('contents') ? [{ name: 'contents', kind: 'text' as const, required: true }] : []),
      ...(lowerBody.includes('file_search_store_names') ? [{ name: 'tools[].file_search_store_names[]', kind: 'structured' as const, required: true }] : []),
      ...(lowerBody.includes('filesearchstorenames') ? [{ name: 'tools[].fileSearch.fileSearchStoreNames[]', kind: 'structured' as const, required: true }] : []),
    ] : spec.input;
    facts.push({
      id: { value: spec.id, evidence: sourceEvidence(assertion) },
      kind: { value: spec.kind, evidence: sourceEvidence(assertion) },
      links: { value: { documentation: document.source.url }, evidence: sourceEvidence('链接指向 Google 官方能力文档。') },
      operations: [{
        id: { value: spec.id, evidence: sourceEvidence(assertion) },
        kind: { value: spec.kind, evidence: sourceEvidence(assertion) },
        routes: [],
        input: { value: fileSearchInput, evidence: sourceEvidence(spec.inputAssertion) },
        output: { value: spec.output, evidence: sourceEvidence(spec.outputAssertion) },
        parameters: { value: fileSearchParams, evidence: sourceEvidence('Parameter names and optional fields are included when present in the captured official File Search guide or GenerateContent schema.') },
      }],
    });
    coverage.push({
      source_ref: spec.sourceId, scope: 'capability', market: 'global', status: 'complete', record_count: 1,
      record_unit: 'independent Capability records', note: `已按官方能力文档与 GenerateContent API Schema 映射 ${spec.kind} 已披露的输入、输出和参数。`,
    });
  }
  return { facts, coverage, reviewItems };
}

function mapGoogleEndpoint(documents: readonly CapturedDocument[], ir: ProviderCollectionIR): ProviderCollectionIR {
  const profile = mapGoogleProfile(documents);
  const withProfile = profile ? { ...ir, profile: { ...ir.profile, ...profile } } : ir;
  const document = documents.find(({ source }) => source.id === 'google-api-overview');
  const generateContentApi = documents.find(({ source }) => source.id === 'google-generate-content-api');
  const codeExecutionDocument = documents.find(({ source }) => source.id === 'google-code-execution');
  const codeExecutionFact = codeExecutionDocument ? googleCodeExecutionFact(codeExecutionDocument) : undefined;
  const serviceCapabilities = collectGoogleServiceCapabilities(documents);
  const requestUrl = document?.body.match(/https:\/\/generativelanguage\.googleapis\.com\/(v\d+[a-z0-9]*)\/models\/[a-z0-9._-]+:generateContent\b/i)?.[0];
  const parsedUrl = requestUrl ? new URL(requestUrl) : undefined;
  const versionPrefix = parsedUrl?.pathname.match(/^\/(v\d+[a-z0-9]*)\//i)?.[1];
  const baseUrl = parsedUrl && versionPrefix ? `${parsedUrl.origin}/${versionPrefix}` : undefined;
  if (!baseUrl && !codeExecutionFact && !serviceCapabilities.facts.length && !serviceCapabilities.coverage.length) return withProfile;
  const endpointEvidence: EvidenceRef[] = document && requestUrl && versionPrefix ? [{
    source_ref: document.source.id,
    locator: `#${versionPrefix}/models/{model}:generateContent`,
    assertion: `Google Gemini Developer API 官方请求示例使用 ${requestUrl}；按 API Origin 和版本前缀登记 Base URL。`,
  }] : [];
  let withCoverage = document && baseUrl ? upsertCoverageRecord(withProfile, {
    source_ref: document.source.id, scope: 'api', market: 'global', status: 'partial', record_count: 1,
    record_unit: 'API Endpoint records',
    note: '已从官方请求示例解析 Gemini Developer API Base URL；Route、参数及逐模型支持范围仍未映射。',
  }) : withProfile;
  for (const record of serviceCapabilities.coverage) withCoverage = upsertCoverageRecord(withCoverage, record);
  if (generateContentApi) withCoverage = upsertCoverageRecord(withCoverage, {
    source_ref: generateContentApi.source.id, scope: 'capability', market: 'global',
    status: serviceCapabilities.facts.length === GOOGLE_CAPABILITY_SPECS.length ? 'complete' : 'partial',
    record_count: serviceCapabilities.facts.length, record_unit: 'independent Capability records',
    note: 'GenerateContent Tool and response schemas are mapped alongside Interactions API examples for Search, Maps, URL Context, and File Search.',
  });
  if (codeExecutionDocument) withCoverage = upsertCoverageRecord(withCoverage, {
    source_ref: codeExecutionDocument.source.id, scope: 'capability', market: 'global',
    status: codeExecutionFact ? 'complete' : 'not_parsed', record_count: codeExecutionFact ? 1 : 0,
    record_unit: 'independent Capability records',
    note: codeExecutionFact
      ? 'Mapped Code Execution input, output, and Interactions API tool type from its dedicated official guide.'
      : 'The Code Execution guide did not contain all required input/output markers; no incomplete Capability was emitted.',
  });
  const endpointId = document?.source.id ?? codeExecutionDocument?.source.id ?? documents[0]!.source.id;
  return {
    ...withCoverage,
    services: [{
      id: { value: 'global', evidence: [{ source_ref: endpointId, locator: baseUrl ? `#${versionPrefix}` : '#code-execution', assertion: '来源登记市场为 global，且属于 Gemini Developer API。' }] },
      name: { value: 'Gemini Developer API', evidence: [{ source_ref: endpointId, locator: 'Gemini API reference', assertion: 'Google 将该 API 命名为 Gemini API。' }] },
      endpoints: baseUrl ? [{
        id: { value: 'gemini-developer-api', evidence: endpointEvidence },
        base_url: { value: baseUrl, evidence: endpointEvidence },
        api_region: { value: 'Global', evidence: endpointEvidence },
        documentation: { value: document!.source.url, evidence: endpointEvidence },
      }] : [],
      offerings: [],
      capabilities: [...(codeExecutionFact ? [codeExecutionFact] : []), ...serviceCapabilities.facts],
      plans: [],
    }],
    review_items: [
      ...withCoverage.review_items,
      ...serviceCapabilities.reviewItems,
      ...(codeExecutionDocument && !codeExecutionFact ? [{
        id: 'google-code-execution-not-parsed', kind: 'incomplete_coverage' as const, subject_ref: 'global/code_execution',
        message: '未能从 Google Code execution 官方文档确认完整输入、输出和启用参数结构。',
        evidence: [{ source_ref: codeExecutionDocument.source.id, locator: '#input-output', assertion: 'Code execution 文档缺少预期关键标记；需人工检查文档变化。' }],
      }] : []),
    ],
  };
}

const CONFIG = {
  providerId: 'google',
  displayName: 'Google Gemini API',
  sources: GOOGLE_INGEST_SOURCES,
  modelIdPattern: /\b(?:gemini|gemma|imagen|veo|lyria|embedding|deep-research|aqa|text-embedding)-[a-z0-9]+(?:[.-][a-z0-9]+)*\b/gi,
  knownLimitations: [
    'models.list 需要 API Key 且按项目/API 权限列出账号可见模型；不使用凭证调用。',
    'Gemini Developer API 与 Vertex AI Model Garden 是不同服务与授权面；只采集已登记的 Gemini Developer API 来源。',
    '模型指南、定价页与模型清单接口覆盖范围不同；价格页提及不能证明当前供应，API 行为示例不能证明逐模型能力。',
    'Batch 是请求处理模式与折扣，不是订阅 Plan，也不单独构成模型 Offering。',
  ],
  mapToIR: (documents: readonly CapturedDocument[], _facts: OfficialDocsCandidateFacts, observationIR: ProviderCollectionIR) =>
    mapGoogleEndpoint(documents, observationIR),
} as const;

export function collectGoogle(options: { readonly repoRoot: string }) {
  return collectOfficialProviderDocs(CONFIG, options);
}

export const googleCollectorConfig = CONFIG;
export const googleParser = { mapGoogleEndpoint };
