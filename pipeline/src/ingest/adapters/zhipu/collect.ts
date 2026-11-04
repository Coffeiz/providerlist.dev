/** 采集智谱 / Z.AI 两个官方市场的文档事实，生成待审候选，不写正式 Provider 文件。 */

import { createHash } from 'node:crypto';
import { mkdir, open, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { INGEST_SOURCES } from '../../registry.ts';
import { renderCandidateReview } from '../../candidate-review.ts';
import { datedReviewMarkdownPath } from '../../review-path.ts';
import { captureSnapshot } from '../../snapshot.ts';
import type { CandidateEnvelope, SnapshotMetadata } from '../../types.ts';
import { buildDocumentObservationIR } from '../document-observation.ts';
import { latestSnapshotRetrievedAt, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import type { ProviderCollectionIR, ReviewItem } from '../../ir/provider-collection.ts';
import type { CapabilityInput, CapabilityOutput, ParameterSpec } from '@providerlist/schema/types';

type Market = 'cn' | 'global';

export interface ZhipuModelObservation {
  readonly model_id: string;
  readonly catalog_rows: readonly MarkdownTableRow[];
  readonly pricing_rows: readonly MarkdownTableRow[];
}

export interface MarkdownTableRow {
  readonly source_id: string;
  readonly section: string;
  readonly headers: readonly string[];
  readonly cells: readonly string[];
  readonly text: string;
}

export interface ZhipuMarketObservation {
  readonly market: Market;
  readonly models: readonly ZhipuModelObservation[];
  readonly api_routes: readonly { readonly source_id: string; readonly text: string }[];
  readonly capabilities: readonly {
    readonly id: string;
    readonly kind: string;
    readonly source_id: string;
    readonly operation_id: string;
    readonly operation_kind: string;
    readonly input: readonly CapabilityInput[];
    readonly output: readonly CapabilityOutput[];
    readonly parameters: readonly ParameterSpec[];
    readonly method: string;
    readonly path: string;
  }[];
  readonly source_coverage: readonly { readonly source_id: string; readonly retrieved: boolean }[];
}

type ZhipuCandidate = CandidateEnvelope<readonly ZhipuMarketObservation[]>;

export interface ZhipuCollectResult {
  readonly changed: boolean;
  readonly marketCounts: Readonly<Record<Market, number>>;
  readonly fingerprint: string;
  readonly reviewPath: string | null;
  readonly reviewMarkdownPath: string | null;
  readonly snapshotCount: number;
  readonly irCandidate?: DocumentSetResult['irCandidate'];
}

const MODEL_ID = /\b(?:GLM-[A-Z0-9]+(?:[-.][A-Z0-9]+)*|CogVideoX-[A-Z0-9]+(?:[-.][A-Z0-9]+)*|Embedding-[A-Z0-9]+(?:[-.][A-Z0-9]+)*|Rerank(?:er)?-[A-Z0-9]+(?:[-.][A-Z0-9]+)*)\b/gi;

function modelIds(text: string): string[] {
  const clean = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/https?:\/\/\S+/g, '');
  const found = clean.match(MODEL_ID) ?? [];
  return [...new Map(found.map((id) => [id.toLowerCase(), id])).values()].sort((left, right) => left.localeCompare(right));
}

function tableRows(markdown: string, source_id: string): MarkdownTableRow[] {
  const lines = markdown.split(/\r?\n/).map((line) => line.replace(/^\s*>\s?/, '').trim());
  const rows: MarkdownTableRow[] = [];
  let section = '';
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line === undefined) continue;
    const heading = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
    if (heading?.[1]) section = heading[1];
    const isSeparator = (line: string) => /^\|(?:\s*:?-+:?\s*\|)+$/.test(line);
    const separator = lines[index + 1];
    if (!line.startsWith('|') || !separator?.startsWith('|') || !isSeparator(separator)) continue;
    const cells = (line: string) => line.replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
    const headers = cells(line);
    index += 2;
    while (index < lines.length && lines[index]?.startsWith('|')) {
      const row = lines[index];
      if (row === undefined) break;
      if (!isSeparator(row)) rows.push({ source_id, section, headers, cells: cells(row), text: compact(row) });
      index++;
    }
    index--;
  }
  return rows;
}

function compact(text: string, maxLength = 1200): string {
  const value = text.replace(/\s+/g, ' ').trim();
  return value.length > maxLength ? `${value.slice(0, maxLength)}…` : value;
}

function inspectCapabilities(market: Market, docs: ReadonlyMap<string, string>): ZhipuMarketObservation['capabilities'] {
  const searchSource = market === 'cn' ? 'zhipu-cn-web-search-api' : 'zhipu-global-web-search';
  const searchDoc = docs.get(searchSource) ?? '';
  const caps: ZhipuMarketObservation['capabilities'][number][] = [];
  if (searchDoc.includes('WebSearchRequest') && searchDoc.includes('WebSearchResponse')) {
    const isCn = market === 'cn';
    const parameters: ParameterSpec[] = isCn ? [
      { name: 'search_engine', type: 'string', required: true, enum: ['search_std', 'search_pro', 'search_pro_sogou', 'search_pro_quark'] },
      { name: 'search_intent', type: 'boolean', required: true, default: false },
      { name: 'count', type: 'integer', required: false, min: 1, max: 50, default: 10 },
      { name: 'search_domain_filter', type: 'string', required: false },
      { name: 'search_recency_filter', type: 'string', required: false, enum: ['oneDay', 'oneWeek', 'oneMonth', 'oneYear', 'noLimit'], default: 'noLimit' },
      { name: 'content_size', type: 'string', required: false, enum: ['medium', 'high'] },
      { name: 'request_id', type: 'string', required: false, min: 6, max: 64 },
      { name: 'user_id', type: 'string', required: false, min: 6, max: 128 },
    ] : [
      { name: 'search_engine', type: 'string', required: true, enum: ['search-prime'], default: 'search-prime' },
      { name: 'count', type: 'integer', required: false, min: 1, max: 50 },
      { name: 'search_domain_filter', type: 'string', required: false },
      { name: 'search_recency_filter', type: 'string', required: false, enum: ['oneDay', 'oneWeek', 'oneMonth', 'oneYear', 'noLimit'] },
      { name: 'request_id', type: 'string', required: false, min: 6, max: 64 },
      { name: 'user_id', type: 'string', required: false, min: 6, max: 128 },
    ];
    const outputFields = isCn
      ? ['id', 'created', 'request_id', 'search_intent[].query', 'search_intent[].intent', 'search_intent[].keywords', 'search_result[].title', 'search_result[].content', 'search_result[].link', 'search_result[].media', 'search_result[].icon', 'search_result[].refer', 'search_result[].publish_date']
      : ['id', 'created', 'search_result[].title', 'search_result[].content', 'search_result[].link', 'search_result[].media', 'search_result[].icon', 'search_result[].refer', 'search_result[].publish_date'];
    caps.push({
      id: `${market}-web-search`, kind: 'web_search', source_id: searchSource,
      operation_id: `${market}-web-search`, operation_kind: 'web_search',
      input: [{ name: 'search_query', kind: 'text', required: true }],
      output: [{ kind: 'structured', fields: outputFields }],
      parameters,
      method: 'POST', path: '/web_search',
    });
  }

  if (market === 'cn') {
    const sourceId = 'zhipu-cn-file-parser';
    const doc = docs.get(sourceId) ?? '';
    if (doc.includes('file_type') && doc.includes('tool_type') && doc.includes('task_id')) {
      caps.push({
        id: 'cn-file-parser', kind: 'file_storage', source_id: sourceId,
        operation_id: 'cn-file-parser', operation_kind: 'file_parser',
        input: [{ name: 'file', kind: 'file', required: true }],
        output: [{ kind: 'structured', fields: ['success', 'message', 'task_id', 'status', 'content', 'parsing_result_url'] }],
        parameters: [
          { name: 'tool_type', type: 'string', required: true, enum: ['lite', 'expert', 'prime'] },
          { name: 'file_type', type: 'string', required: true, enum: ['PDF', 'DOCX', 'DOC', 'XLS', 'XLSX', 'PPT', 'PPTX', 'PNG', 'JPG', 'JPEG', 'CSV', 'TXT', 'MD', 'HTML', 'EPUB', 'BMP', 'GIF', 'WEBP', 'HEIC', 'EPS', 'ICNS', 'IM', 'PCX', 'PPM', 'TIFF', 'XBM', 'HEIF', 'JP2'] },
          { name: 'taskIid', type: 'string', required: true, route_mappings: ['/files/parser/result/{taskIid}/{format_type}'] },
          { name: 'format_type', type: 'string', required: true, enum: ['text', 'download_link'], route_mappings: ['/files/parser/result/{taskIid}/{format_type}'] },
        ],
        method: 'POST', path: '/files/parser/create',
      });
    }
  }
  if (market === 'global') {
    const sourceId = 'zhipu-global-file-upload';
    const doc = docs.get(sourceId) ?? '';
    if (doc.includes('multipart/form-data') && doc.includes('Unique identifier of the uploaded file')) {
      caps.push({
        id: 'global-translation-file-upload', kind: 'file_storage', source_id: sourceId,
        operation_id: 'global-translation-file-upload', operation_kind: 'file_upload',
        input: [{ name: 'file', kind: 'file', required: true }],
        output: [{ kind: 'structured', fields: ['id', 'object', 'bytes', 'filename', 'purpose', 'created_at'] }],
        parameters: [{ name: 'purpose', type: 'string', required: true, enum: ['user_data', 'agent'], default: 'user_data' }],
        method: 'POST', path: '/files',
      });
    }

    const readerSource = 'zhipu-global-web-reader';
    const readerDoc = docs.get(readerSource) ?? '';
    if (readerDoc.includes('ReaderRequest:') && readerDoc.includes('ReaderResponse:')) {
      caps.push({
        id: 'global-web-reader', kind: 'web_fetch', source_id: readerSource,
        operation_id: 'global-web-reader', operation_kind: 'web_fetch',
        input: [{ name: 'url', kind: 'text', required: true }],
        output: [{ kind: 'structured', fields: ['id', 'created', 'request_id', 'model', 'reader_result.content', 'reader_result.description', 'reader_result.title', 'reader_result.url', 'reader_result.external', 'reader_result.metadata'] }],
        parameters: [
          { name: 'timeout', type: 'integer', required: false, min: 1, default: 20 },
          { name: 'no_cache', type: 'boolean', required: false, default: false },
          { name: 'return_format', type: 'string', required: false, enum: ['markdown', 'text'], default: 'markdown' },
          { name: 'retain_images', type: 'boolean', required: false, default: true },
          { name: 'no_gfm', type: 'boolean', required: false, default: false },
          { name: 'keep_img_data_url', type: 'boolean', required: false, default: false },
          { name: 'with_images_summary', type: 'boolean', required: false, default: false },
          { name: 'with_links_summary', type: 'boolean', required: false, default: false },
        ],
        method: 'POST', path: '/reader',
      });
    }

    const tokenizerSource = 'zhipu-global-tokenizer-api';
    const tokenizerDoc = docs.get(tokenizerSource) ?? '';
    if (tokenizerDoc.includes('TokenizerRequest:') && tokenizerDoc.includes('TokenizerResponse:')) {
      caps.push({
        id: 'global-tokenizer', kind: 'tokenizer', source_id: tokenizerSource,
        operation_id: 'global-tokenizer', operation_kind: 'tokenize',
        input: [{ name: 'messages', kind: 'structured', required: true }],
        output: [{ kind: 'structured', fields: ['id', 'request_id', 'usage.prompt_tokens', 'usage.image_tokens', 'usage.video_tokens', 'usage.total_tokens'] }],
        parameters: [
          { name: 'model', type: 'string', required: true, enum: ['glm-4.6'], default: 'glm-4.6' },
          { name: 'request_id', type: 'string', required: false, min: 6, max: 64 },
          { name: 'user_id', type: 'string', required: false, min: 6, max: 128 },
        ],
        method: 'POST', path: '/tokenizer',
      });
    }

    const agentSource = 'zhipu-global-agent-api';
    const agentDoc = docs.get(agentSource) ?? '';
    if (agentDoc.includes('TranslationAgentRequest:') && agentDoc.includes('TranslationAgentResponse:')) {
      caps.push({
        id: 'global-agents', kind: 'agent', source_id: agentSource,
        operation_id: 'global-agents', operation_kind: 'agent',
        input: [{ name: 'messages', kind: 'structured', required: true }],
        output: [{ kind: 'structured', fields: ['id', 'agent_id', 'status', 'choices', 'usage', 'async_id'] }],
        parameters: [
          { name: 'agent_id', type: 'string', required: true, enum: ['general_translation', 'vidu_template_agent', 'slides_glm_agent'] },
          { name: 'stream', type: 'boolean', required: false, default: false },
        ],
        method: 'POST', path: '/v1/agents',
      });
    }
  }
  return caps;
}

function inspectMarket(market: Market, sources: readonly SnapshotMetadata[], docs: ReadonlyMap<string, string>): ZhipuMarketObservation {
  const prefix = `zhipu-${market}-`;
  const marketSources = sources.filter((source) => source.source_id.startsWith(prefix));
  const catalogSource = `zhipu-${market}-model-catalog`;
  const pricingSource = `zhipu-${market}-pricing`;
  const catalog = docs.get(catalogSource) ?? '';
  const pricing = docs.get(pricingSource) ?? '';
  const modelMap = new Map<string, { model_id: string; catalog_rows: MarkdownTableRow[]; pricing_rows: MarkdownTableRow[] }>();
  const ensure = (id: string, evidence: 'catalog' | 'pricing' | 'documentation') => {
    const key = id.toLowerCase();
    const existing = modelMap.get(key) ?? { model_id: id, catalog_rows: [], pricing_rows: [] };
    if (evidence === 'catalog' || (evidence === 'pricing' && existing.catalog_rows.length === 0)) existing.model_id = id;
    modelMap.set(key, existing);
    return existing;
  };

  for (const row of tableRows(catalog, catalogSource)) {
    for (const id of modelIds(row.text)) ensure(id, 'catalog').catalog_rows.push(row);
  }
  for (const row of tableRows(pricing, pricingSource)) {
    for (const id of modelIds(row.text)) ensure(id, 'pricing').pricing_rows.push(row);
  }

  const api_routes: { source_id: string; text: string }[] = [];
  for (const source of marketSources) {
    const body = docs.get(source.source_id) ?? '';
    const id = source.source_id;
    if (/(?:api|openai|claude|responses|web-search|file-parser|file-upload)/.test(id)) {
      for (const line of body.split(/\r?\n/)) {
        if (/(?:https:\/\/[^\s)`]+|\b(?:GET|POST|PUT|DELETE)\s+\/?[\w{}./-]+|API (?:endpoint|Endpoint)|Base URL|基础 URL|接口地址)/i.test(line)) {
          api_routes.push({ source_id: id, text: compact(line, 500) });
        }
      }
    }
    if (id === catalogSource || id === pricingSource) continue;
  }

  const models = [...modelMap.values()].map((observed) => {
    return {
    model_id: observed.model_id,
    catalog_rows: observed.catalog_rows,
    pricing_rows: observed.pricing_rows,
  };
  }).sort((left, right) => left.model_id.localeCompare(right.model_id));

  if (models.length === 0 || models.every((model) => model.catalog_rows.length === 0)) {
    throw new Error(`${market} 市场模型概览解析不到模型目录行；拒绝生成不完整候选`);
  }
  if (models.every((model) => model.pricing_rows.length === 0)) {
    throw new Error(`${market} 市场价格页面解析不到模型价格行；拒绝生成不完整候选`);
  }
  return {
    market,
    models,
    api_routes: [...new Map(api_routes.map((item) => [`${item.source_id}\0${item.text}`, item])).values()],
    capabilities: inspectCapabilities(market, docs),
    source_coverage: marketSources.map((source) => ({ source_id: source.source_id, retrieved: true })),
  };
}

function fingerprint(facts: readonly ZhipuMarketObservation[]): string {
  return `sha256:${createHash('sha256').update(JSON.stringify(facts)).digest('hex')}`;
}

async function writeJson(filePath: string, value: unknown): Promise<void> {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(value, null, 2)}\n`, { flag: 'wx' });
  try { await rename(tempPath, filePath); } catch (error) { await rm(tempPath, { force: true }); throw error; }
}

async function writeText(filePath: string, value: string): Promise<void> {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${value.trimEnd()}\n`, { flag: 'wx' });
  try { await rename(tempPath, filePath); } catch (error) { await rm(tempPath, { force: true }); throw error; }
}

async function createOnce(filePath: string, value: unknown): Promise<void> {
  let handle: Awaited<ReturnType<typeof open>>;
  try { handle = await open(filePath, 'wx'); } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'EEXIST') return;
    throw error;
  }
  try { await handle.writeFile(`${JSON.stringify(value, null, 2)}\n`, 'utf8'); } finally { await handle.close(); }
}

function renderReview(candidate: ZhipuCandidate): string {
  const providerReport = [
    '## 适配器核对边界',
    '',
    '本节不重复展开当前目录、价格原文、模型清单或完整 API 路径。字段级新增、更新与缺席待核实项仅见上方变更摘要；来源快照与完整机器事实保存在候选 JSON。',
    '',
    '候选仅表示官方来源观察，不代表字段已核验、供应已确认或数据已发布。目录缺席不单独构成退役结论。',
    '',
  ].join('\n');
  return renderCandidateReview(candidate, providerReport);
}

export function toZhipuIR(documents: readonly CapturedDocument[], markets: readonly ZhipuMarketObservation[]): ProviderCollectionIR {
  const modelIdsBySource: Record<string, string[]> = {};
  const recordsBySource: Record<string, unknown[]> = {};
  for (const market of markets) {
    for (const model of market.models) {
      for (const row of model.catalog_rows) {
        (modelIdsBySource[row.source_id] ??= []).push(model.model_id);
        (recordsBySource[row.source_id] ??= []).push({ market: market.market, model_id: model.model_id, catalog_row: row });
      }
      for (const row of model.pricing_rows) (recordsBySource[row.source_id] ??= []).push({ market: market.market, model_id: model.model_id, pricing_row: row });
    }
    for (const route of market.api_routes) (recordsBySource[route.source_id] ??= []).push({ market: market.market, api_route_observation: route.text });
    for (const capability of market.capabilities) (recordsBySource[capability.source_id] ??= []).push({ market: market.market, service_capability_observation: capability });
  }
  const reviewItems: ReviewItem[] = [{
    id: 'zhipu-market-facts-await-domain-mapping',
    kind: 'unsupported_mapping',
    message: '模型目录、价格、API 参数和服务能力按中国与国际来源分别保存；它们尚未按 Service/Offering/Route/PriceFact 契约完成映射。',
    evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: `market=${source.market ?? 'unknown'}` })),
  }];
  return buildDocumentObservationIR({
    providerId: 'zhipu', documents, modelIdsBySource, recordsBySource,
    coverageBySource: Object.fromEntries(documents.filter(({ source }) => ['model_catalog', 'pricing', 'api', 'capability', 'plan'].includes(source.scope ?? '')).map(({ source }) => [
      source.id,
      { status: 'partial' as const, note: '来源事实已抽取到观察记录，尚未成为投影用领域字段。' },
    ])),
    collectionNotes: ['中国站和国际站使用独立来源与市场标签，不跨市场归并。', '只有模型目录表中的精确 ID 写入 model_id_mentions；文档中的提及保留为原始观察。'],
    reviewItems,
  });
}

function renderIRReview(candidate: CandidateEnvelope<ProviderCollectionIR>): string {
  const ir = candidate.current;
  return [
    '# 智谱 / Z.AI IR 观察候选', '',
    `- IR 指纹：\`${candidate.candidate_hash}\``,
    `- 来源快照：${candidate.sources.length} 份`,
    `- 中国目录 ID：${ir.document_observations.filter(({ source_ref }) => source_ref.startsWith('zhipu-cn-')).reduce((count, item) => count + item.model_id_mentions.length, 0)} 个`,
    `- 国际目录 ID：${ir.document_observations.filter(({ source_ref }) => source_ref.startsWith('zhipu-global-')).reduce((count, item) => count + item.model_id_mentions.length, 0)} 个`,
    '- 当前输出为来源观察 IR；尚无字段投影到 Provider 服务事实。',
    '', '## 待人工核对', '', ...ir.review_items.map(({ message }) => `- ${message}`),
    '', '## 来源快照', '', ...candidate.sources.map(({ source_id, request_url }) => `- \`${source_id}\`：${request_url}`), '',
  ].join('\n');
}

/** 两个市场必须各自取得模型目录和价格页；变化进入候选，不覆盖正式源数据。 */
export async function collectZhipu(options: { readonly repoRoot: string }): Promise<ZhipuCollectResult> {
  const registered = INGEST_SOURCES.filter((source) => source.provider_id === 'zhipu' && source.adapter_id === 'zhipu');
  const expected = new Set(['cn', 'global']);
  if (new Set(registered.map((source) => source.market)).size !== expected.size || registered.length < 10) {
    throw new Error('智谱 / Z.AI 中国站和国际站来源登记不完整');
  }
  const captured: CapturedDocument[] = await Promise.all(registered.map(async (source) => {
    const snapshot = await captureSnapshot(source, options);
    const body = await readFile(path.join(options.repoRoot, 'data/upstream/snapshots', source.id, snapshot.metadata.body_file), 'utf8');
    return { source, metadata: snapshot.metadata, body };
  }));
  const docs = new Map(captured.map(({ source, body }) => [source.id, body]));
  const sources = captured.map(({ metadata }) => metadata);
  const current = (['cn', 'global'] as const).map((market) => inspectMarket(market, sources, docs));
  const cn = current.find((market) => market.market === 'cn');
  const global = current.find((market) => market.market === 'global');
  if (!cn || !global) throw new Error('采集结果缺少中国站或国际站');
  const irOutput = await writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'zhipu',
    documents: captured,
    current: toZhipuIR(captured, current),
    modelCount: new Set(current.flatMap(({ models }) => models.map(({ model_id }) => model_id))).size,
    renderReview: renderIRReview,
  });
  const irCandidate: NonNullable<DocumentSetResult['irCandidate']> = {
    changed: irOutput.changed,
    modelCount: irOutput.modelCount,
    fingerprint: irOutput.fingerprint,
    reviewPath: irOutput.reviewPath,
    reviewMarkdownPath: irOutput.reviewMarkdownPath,
    snapshotCount: irOutput.snapshotCount,
    candidateScope: 'ir',
  };
  const hash = fingerprint(current);
  const candidateDir = path.join(options.repoRoot, 'data/candidates/zhipu');
  const statePath = path.join(candidateDir, 'state.json');
  const reviewPath = path.join(candidateDir, 'reviews', `${hash.slice(7)}.json`);
  let previous: { candidate_hash?: string; facts?: readonly ZhipuMarketObservation[]; review_markdown_file?: string } = {};
  try { previous = JSON.parse(await readFile(statePath, 'utf8')) as typeof previous; }
  catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
  const resultBase = {
    marketCounts: { cn: cn.models.length, global: global.models.length },
    fingerprint: hash,
    snapshotCount: sources.length,
  };
  if (previous.candidate_hash === hash) {
    let markdown: string | null = null;
    try {
      const existingCandidate = JSON.parse(await readFile(reviewPath, 'utf8')) as ZhipuCandidate;
      const observedAt = latestSnapshotRetrievedAt(sources);
      const datedMarkdownPath = await datedReviewMarkdownPath(
        path.dirname(reviewPath),
        observedAt,
        previous.review_markdown_file ?? existingCandidate.review_markdown_file,
      );
      const candidate = { ...existingCandidate, observed_at: observedAt, sources, current, review_markdown_file: path.basename(datedMarkdownPath) };
      await writeJson(reviewPath, candidate);
      await writeText(datedMarkdownPath, renderReview(candidate));
      await writeJson(statePath, { ...previous, provider_id: 'zhipu', candidate_hash: hash, facts: current, review_markdown_file: path.basename(datedMarkdownPath) });
      const legacyMarkdownPath = reviewPath.replace(/\.json$/u, '.md');
      if (legacyMarkdownPath !== datedMarkdownPath && !existingCandidate.review_markdown_file && !previous.review_markdown_file) await rm(legacyMarkdownPath, { force: true });
      markdown = path.relative(options.repoRoot, datedMarkdownPath);
    } catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
    return { changed: false, ...resultBase, reviewPath: null, reviewMarkdownPath: markdown, irCandidate };
  }
  const observedAt = latestSnapshotRetrievedAt(sources);
  const datedMarkdownPath = await datedReviewMarkdownPath(path.dirname(reviewPath), observedAt);
  const candidate: ZhipuCandidate = {
    provider_id: 'zhipu', candidate_kind: 'regional_model_and_api_observation',
    observed_at: observedAt, previous_candidate_hash: previous.candidate_hash ?? null,
    candidate_hash: hash, review_markdown_file: path.basename(datedMarkdownPath), sources, previous: previous.facts ?? null, current,
  };
  await mkdir(path.dirname(reviewPath), { recursive: true });
  await createOnce(reviewPath, candidate);
  await writeText(datedMarkdownPath, renderReview(candidate));
  await writeJson(statePath, { provider_id: 'zhipu', candidate_hash: hash, facts: current, review_markdown_file: path.basename(datedMarkdownPath) });
  return {
    changed: true, ...resultBase,
    reviewPath: path.relative(options.repoRoot, reviewPath),
    reviewMarkdownPath: path.relative(options.repoRoot, datedMarkdownPath),
    irCandidate,
  };
}

export const zhipuParser = { inspectMarket, toZhipuIR };
