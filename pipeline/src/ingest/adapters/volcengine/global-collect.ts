import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, readdir } from 'node:fs/promises';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { buildDocumentObservationIR } from '../document-observation.ts';
import type { ProviderCollectionIR, ReviewItem } from '../../ir/provider-collection.ts';
import { VOLCENGINE_GLOBAL_INGEST_SOURCES } from './global-sources.ts';

interface ModelListing {
  readonly model_id: string;
  readonly label: string;
  readonly source_id: string;
  readonly region_ids: readonly string[];
}

export interface VolcengineGlobalCandidateFacts {
  readonly product: 'BytePlus ModelArk';
  readonly market: 'global';
  readonly provider_relationship: 'BytePlus ModelArk is confirmed as the volcengine global service';
  readonly model_catalog: readonly ModelListing[];
  readonly pricing_evidence: readonly { readonly source_id: string; readonly mentioned_model_ids: readonly string[]; readonly text: string }[];
  readonly regions: readonly { readonly region_id: string; readonly base_url: string; readonly source_id: string }[];
  readonly api_routes: readonly { readonly api_name: string; readonly method: 'GET' | 'POST'; readonly path: string; readonly base_url: string; readonly source_id: string }[];
  readonly api_capability_evidence: readonly { readonly api_name: string; readonly source_id: string; readonly evidence: readonly string[] }[];
  readonly featured_model_capability_evidence: readonly { readonly model_name: string; readonly evidence: string }[];
  readonly service_capability_evidence: readonly { readonly source_id: string; readonly evidence: string }[];
  readonly regional_availability_evidence: readonly { readonly source_id: string; readonly text: string }[];
  readonly plan_evidence: readonly { readonly source_id: string; readonly text: string }[];
  readonly source_coverage: readonly { readonly source_id: string; readonly content_type: string | null; readonly byte_length: number }[];
}

type IRCandidate = CandidateEnvelope<ProviderCollectionIR>;
type DocContent = { data?: Record<string, { ops?: { insert?: unknown; attributes?: Record<string, string> }[] }> };

function readJsonString(body: string, start: number): string | undefined {
  const quote = body.indexOf('"', start);
  if (quote < 0) return undefined;
  let escaped = false;
  for (let index = quote + 1; index < body.length; index++) {
    const char = body[index];
    if (escaped) { escaped = false; continue; }
    if (char === '\\') { escaped = true; continue; }
    if (char === '"') {
      try { return JSON.parse(body.slice(quote, index + 1)) as string; } catch { return undefined; }
    }
  }
  return undefined;
}

function contentForTitle(body: string, title: string): DocContent | undefined {
  const titleIndex = body.indexOf(`"Title":"${title}"`);
  if (titleIndex < 0) return undefined;
  const contentKey = body.indexOf('"Content":', titleIndex);
  if (contentKey < 0) return undefined;
  const serialized = readJsonString(body, contentKey + '"Content":'.length);
  if (!serialized) return undefined;
  try { return JSON.parse(serialized) as DocContent; } catch { return undefined; }
}

function opsFor(document: CapturedDocument, title?: string): string[] {
  const content = title ? contentForTitle(document.body, title) : undefined;
  if (content?.data) {
    return Object.values(content.data).flatMap(({ ops }) => (ops ?? [])
      .filter((op): op is typeof op & { insert: string } => typeof op.insert === 'string')
      .map((op) => op.insert.replace(/[\t\r\n]+/g, ' ').trim())
      .filter(Boolean));
  }
  return [...document.body.matchAll(/"insert":"((?:\\.|[^"\\])*)"/g)]
    .flatMap((match) => { try { return [JSON.parse(`"${match[1]}"`) as string]; } catch { return []; } })
    .map((text) => text.replace(/[\t\r\n]+/g, ' ').trim()).filter(Boolean);
}

function modelListings(document: CapturedDocument): ModelListing[] {
  const title = 'Model list';
  const titleIndex = document.body.indexOf(`"Title":"${title}"`);
  if (titleIndex < 0) return [];
  const contentKey = document.body.indexOf('"Content":', titleIndex);
  const serialized = contentKey < 0 ? undefined : readJsonString(document.body, contentKey + '"Content":'.length);
  if (!serialized) return [];
  let content: DocContent;
  try { content = JSON.parse(serialized) as DocContent; } catch { return []; }
  const rows: ModelListing[] = [];
  for (const zone of Object.values(content.data ?? {})) {
    for (const op of zone.ops ?? []) {
      if (typeof op.insert !== 'string' || !op.attributes?.hyperlink) continue;
      let href = '';
      try { href = (JSON.parse(op.attributes.hyperlink) as { href?: string }).href ?? ''; } catch { continue; }
      if (!/\/model\/detail(?:\?|$)/.test(href)) continue;
      const match = href.match(/[?&]Id=([^&#]+)/i);
      const modelId = decodeURIComponent(match?.[1] ?? op.insert.trim());
      if (!modelId || !/[a-z0-9]/i.test(modelId)) continue;
      const region = href.match(/region:([a-z0-9-]+)/i)?.[1];
      rows.push({ model_id: modelId, label: op.insert.trim(), source_id: document.source.id, region_ids: region ? [region] : [] });
    }
  }
  return [...new Map(rows.map((row) => [row.model_id.toLowerCase(), row])).values()];
}

function snippets(document: CapturedDocument, title?: string, pattern?: RegExp, limit = 500): { source_id: string; text: string }[] {
  const ops = opsFor(document, title);
  const out: { source_id: string; text: string }[] = [];
  for (let index = 0; index < ops.length; index++) {
    if (!pattern?.test(ops[index] ?? '')) continue;
    const text = ops.slice(Math.max(index - 2, 0), Math.min(index + 3, ops.length)).join(' ').replace(/\s+/g, ' ').trim();
    if (text.length > 700) continue;
    out.push({ source_id: document.source.id, text });
  }
  return [...new Map(out.map((entry) => [entry.text, entry])).values()].slice(0, limit);
}

function pricingRows(document: CapturedDocument): { source_id: string; mentioned_model_ids: string[]; text: string }[] {
  const ops = opsFor(document, 'Pricing');
  const modelIdPattern = /\b(?:deepseek|glm|kimi|seed|seedance|seedream|dola|doubao|hitem3d|kinfra|skylark|wan|hy|mimo|flux|qwen|hunyuan|vega|klings?)[-_][a-z0-9][a-z0-9._-]*/gi;
  const rows: { source_id: string; mentioned_model_ids: string[]; text: string }[] = [];
  for (let index = 0; index < ops.length; index++) {
    const ids = [...new Set(ops[index]!.match(modelIdPattern) ?? [])];
    if (ids.length === 0) continue;
    const context = ops.slice(Math.max(index - 9, 0), Math.min(index + 15, ops.length));
    if (!context.some((line) => /\$\s?\d|USD|Free|not applicable/i.test(line))) continue;
    rows.push({ source_id: document.source.id, mentioned_model_ids: ids, text: context.join(' ').replace(/\s+/g, ' ').trim() });
  }
  return [...new Map(rows.map((row) => [`${row.mentioned_model_ids.join(',').toLowerCase()}\0${row.text}`, row])).values()].slice(0, 500);
}

function featuredModelCapabilities(document: CapturedDocument): { model_name: string; evidence: string }[] {
  const content = contentForTitle(document.body, 'Model list');
  if (!content?.data) return [];
  const rows: { model_name: string; evidence: string }[] = [];
  for (const zone of Object.values(content.data)) {
    const values = (zone.ops ?? []).flatMap((op) => typeof op.insert === 'string' ? [op.insert.trim()] : []).filter(Boolean);
    if (!values.some((value) => /Key capabilities:/i.test(value))) continue;
    const text = values.join(' ').replace(/\s+/g, ' ').trim();
    const modelName = values.find((value) => !/^\*+$/.test(value) && !/^(Best for:|Key capabilities:|Key limits?:)$/i.test(value));
    if (modelName) rows.push({ model_name: modelName, evidence: text });
  }
  return rows;
}

function parseApiRoutes(documents: ReadonlyMap<string, CapturedDocument>): VolcengineGlobalCandidateFacts['api_routes'] {
  const apiDocs = [
    ['byteplus-modelark-chat-api', 'Chat API'],
    ['byteplus-modelark-responses-api', 'Create a model response'],
    ['byteplus-modelark-messages-api', 'Create message'],
    ['byteplus-modelark-image-generation-api', 'Image generation API'],
    ['byteplus-modelark-create-video-generation-task-api', 'Create a video generation task'],
    ['byteplus-modelark-get-video-generation-task-api', 'Retrieve a video generation task'],
    ['byteplus-modelark-multimodal-vectorization-api', 'Multimodal embedding'],
    ['byteplus-modelark-hyper3d-create-task-api', 'Create a 3D generation task'],
    ['byteplus-modelark-hitem3d-create-task-api', 'Create a 3D generation task'],
  ] as const;
  const routes: VolcengineGlobalCandidateFacts['api_routes'][number][] = [];
  for (const [sourceId, title] of apiDocs) {
    const document = documents.get(sourceId);
    if (!document) continue;
    const ops = opsFor(document, title);
    let method: 'GET' | 'POST' | undefined;
    let url: string | undefined;
    for (const line of ops) {
      const explicit = line.match(/\b(GET|POST)\s+(https:\/\/\S+)/i);
      const curl = line.match(/\bcurl(?:\s+-X\s+(GET|POST))?\s+(https:\/\/\S+)/i);
      const match = explicit ?? curl;
      if (!match) continue;
      method = (match[1]?.toUpperCase() as 'GET' | 'POST' | undefined) ?? 'POST';
      url = match[2];
      break;
    }
    if (!method || !url) continue;
    try {
      const parsed = new URL(url.replace(/[\\`),.;]+$/, ''));
      const apiRoot = parsed.pathname.match(/^(.*\/api\/(?:v\d+|compatible\/v\d+))/)?.[1];
      routes.push({
        api_name: title,
        method,
        path: apiRoot ? decodeURIComponent(parsed.pathname.slice(apiRoot.length) || '/') : decodeURIComponent(parsed.pathname),
        base_url: `${parsed.origin}${apiRoot ?? ''}`,
        source_id: sourceId,
      });
    } catch { /* invalid links remain available in the immutable source snapshot */ }
  }
  return routes;
}

function buildFacts(documents: readonly CapturedDocument[]): VolcengineGlobalCandidateFacts {
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const catalog = byId.get('byteplus-modelark-model-list');
  const pricing = byId.get('byteplus-modelark-model-pricing');
  const regionsDoc = byId.get('byteplus-modelark-region-availability');
  const globalAvailability = byId.get('byteplus-modelark-international-availability');
  const productOverview = byId.get('byteplus-modelark-product-overview');
  const quickStart = byId.get('byteplus-modelark-quick-start');
  if (!catalog || !pricing || !regionsDoc || !globalAvailability || !productOverview || !quickStart || documents.length !== VOLCENGINE_GLOBAL_INGEST_SOURCES.length) {
    throw new Error('BytePlus ModelArk 国际目录、价格、区域与国际可用性来源必须全部采集');
  }
  const modelCatalog = modelListings(catalog);
  if (modelCatalog.length < 5) throw new Error(`BytePlus ModelArk 模型目录解析异常：仅识别到 ${modelCatalog.length} 个模型`);
  // The document's embedded title is "Pricing" (the navigation label is "Model pricing").
  const pricingEvidence = pricingRows(pricing);
  if (pricingEvidence.length < 5) throw new Error(`BytePlus ModelArk 价格页解析异常：仅识别到 ${pricingEvidence.length} 条价格证据`);
  const planDocuments = documents.filter(({ source }) => source.scope === 'plan' || source.id === 'byteplus-modelark-model-pricing');
  if (planDocuments.length !== 7) throw new Error(`BytePlus ModelArk 套餐来源未完整采集：${planDocuments.length}/7`);
  const planDocumentTitles: Readonly<Record<string, string>> = {
    'byteplus-modelark-coding-plan-personal-overview': 'Subscription overview',
    'byteplus-modelark-coding-plan-team-overview': 'Coding Plan Team plan overview',
    'byteplus-modelark-models-and-plans': 'Models & Plans',
    'byteplus-modelark-agent-plan-integration': 'Integrate with third-party tools',
    'byteplus-modelark-model-pricing': 'Pricing',
  };
  const planEvidence = planDocuments.flatMap((document) => {
    const ops = opsFor(document, planDocumentTitles[document.source.id]);
    if (document.source.id === 'byteplus-modelark-model-pricing') {
      const cells = ops.filter((text) => text !== '*');
      const planRows: { source_id: string; text: string }[] = [];
      for (let index = 0; index < cells.length; index += 1) {
        const tier = cells[index];
        if (tier !== 'Lite' && tier !== 'Pro') continue;
        const row = cells.slice(index, index + 5);
        if (row[1] !== '1 month' || row[2] !== '3 months' || !/^\$\d/.test(row[3] ?? '') || !/^\$\d/.test(row[4] ?? '')) continue;
        planRows.push({ source_id: document.source.id, text: `Coding Plan ${tier}: ${row[1]} ${row[3]} USD; ${row[2]} ${row[4]} USD.` });
      }
      if (planRows.length !== 2) throw new Error(`BytePlus ModelArk Coding Plan 价格行解析异常：${planRows.length}/2`);
      return planRows;
    }
    const relevant = ops.flatMap((text, index) => /Coding Plan|Agent Plan|subscription plan|subscription price|Team Lite|Team Pro|Lite|Pro|USD|quota|not available for API calls/i.test(text)
      ? [ops.slice(Math.max(index - 1, 0), Math.min(index + 2, ops.length)).join(' ').replace(/\s+/g, ' ').trim()]
      : []);
    if (relevant.length > 0) return [...new Set(relevant)].slice(0, 200).map((text) => ({ source_id: document.source.id, text }));
    const plainText = document.body.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/\s+/g, ' ').trim();
    return [{ source_id: document.source.id, text: plainText.slice(0, 1200) }];
  });
  const regionText = opsFor(regionsDoc, 'Region availability');
  const regions = [
    { region_id: 'ap-southeast-1', base_url: 'https://ark.ap-southeast.bytepluses.com/api/v3', source_id: regionsDoc.source.id },
    { region_id: 'eu-west-1', base_url: 'https://ark.eu-west.bytepluses.com/api/v3', source_id: regionsDoc.source.id },
  ];
  const apiRoutes = parseApiRoutes(byId);
  if (apiRoutes.length < 9) throw new Error(`BytePlus ModelArk API 路由解析异常：识别到 ${apiRoutes.length}/9 条`);
  const featuredCapabilities = featuredModelCapabilities(catalog);
  const asCapabilityEvidence = (items: readonly { source_id: string; text: string }[]) => items.map(({ source_id, text }) => ({ source_id, evidence: text }));
  const apiCapabilityEvidence = apiRoutes.flatMap((route) => {
    const document = byId.get(route.source_id);
    if (!document) return [];
    const title = route.api_name;
    const evidence = snippets(document, title, /Model capabilities|Supported models?|input|output|task ID|asynchronous|dimensions|reference image|text-to-image|image-to-video|text-to-3D|image-to-3D|embedding|vector/i, 120)
      .map(({ text }) => text);
    return [{ api_name: route.api_name, source_id: route.source_id, evidence }];
  });
  const capabilityEvidence = [
    ...asCapabilityEvidence(snippets(catalog, 'Model list', /models for text and code|supported in the|Base URL by region|capabilities and limits/i, 80)),
    ...asCapabilityEvidence(snippets(productOverview, 'Product overview', /Text generation|multimodal understanding|image generation|video generation|3D generation|embedding|models/i, 200)),
    ...asCapabilityEvidence(snippets(quickStart, 'Quick start', /Text generation|Multimodal understanding|Image generation|Video generation|Tool use|not available for BytePlus|web search|knowledge search/i, 200)),
    ...asCapabilityEvidence(snippets(byId.get('byteplus-modelark-image-generation-api')!, 'Image generation API', /capabilities by model|single image|reference images|interactive editing|layer decomposition|not currently supported/i, 200)),
    ...asCapabilityEvidence(snippets(byId.get('byteplus-modelark-create-video-generation-task-api')!, 'Create a video generation task', /Model capabilities|supports|audio-only|reference-to-video|image-to-video|text-to-video|30 seconds/i, 200)),
    ...asCapabilityEvidence(snippets(byId.get('byteplus-modelark-multimodal-vectorization-api')!, 'Multimodal embedding', /Dense Vector|Sparse Vector|image|video|text|dimensions|vector/i, 200)),
  ];
  return {
    product: 'BytePlus ModelArk',
    market: 'global',
    provider_relationship: 'BytePlus ModelArk is confirmed as the volcengine global service',
    model_catalog: modelCatalog,
    pricing_evidence: pricingEvidence,
    regions,
    api_routes: apiRoutes,
    api_capability_evidence: apiCapabilityEvidence,
    featured_model_capability_evidence: featuredCapabilities,
    service_capability_evidence: [...new Map(capabilityEvidence.map((item) => [`${item.source_id}\0${item.evidence}`, item])).values()],
    regional_availability_evidence: [
      ...snippets(regionsDoc, 'Region availability', /EU|Europe|Dublin|ap-southeast|seed-2-0-lite|Chat API|Image generation/i, 250),
      ...snippets(globalAvailability, 'International Availability for BytePlus Model Service', /available|country|region|Malaysia|Singapore|EEA|Restricted Models|purchase/i, 250),
      ...snippets(catalog, 'Model list', /EU|Europe|eu-west-1|seed-2-0|seedream-5-0-lite/i, 250),
      ...regionText.filter((text) => /Dublin|Johor|ap-southeast-1|eu-west-1/.test(text)).map((text) => ({ source_id: regionsDoc.source.id, text })),
    ],
    plan_evidence: planEvidence,
    source_coverage: documents.map(({ source, metadata }) => ({ source_id: source.id, content_type: metadata.content_type, byte_length: metadata.byte_length })),
  };
}

function toVolcengineGlobalIR(
  documents: readonly CapturedDocument[],
  facts: VolcengineGlobalCandidateFacts,
): ProviderCollectionIR {
  const recordsBySource: Record<string, unknown[]> = Object.fromEntries(documents.map(({ source }) => [source.id, []]));
  const modelIdsBySource: Record<string, string[]> = Object.fromEntries(documents.map(({ source }) => [source.id, []]));
  const addRecords = (records: readonly { source_id: string }[]) => {
    for (const record of records) recordsBySource[record.source_id]?.push(record);
  };
  addRecords(facts.model_catalog);
  addRecords(facts.pricing_evidence);
  addRecords(facts.regions);
  addRecords(facts.api_routes);
  addRecords(facts.api_capability_evidence);
  addRecords(facts.service_capability_evidence);
  addRecords(facts.regional_availability_evidence);
  addRecords(facts.plan_evidence);
  for (const record of facts.featured_model_capability_evidence) {
    recordsBySource['byteplus-modelark-model-list']?.push(record);
  }
  for (const model of facts.model_catalog) modelIdsBySource[model.source_id]?.push(model.model_id);
  for (const row of facts.pricing_evidence) modelIdsBySource[row.source_id]?.push(...row.mentioned_model_ids);
  for (const ids of Object.values(modelIdsBySource)) {
    for (let index = ids.length - 1; index >= 0; index -= 1) {
      if (ids.indexOf(ids[index]!) !== index) ids.splice(index, 1);
    }
  }
  const overview = documents.find(({ source }) => source.id === 'byteplus-modelark-product-overview');
  const catalog = documents.find(({ source }) => source.id === 'byteplus-modelark-model-list');
  const pricing = documents.find(({ source }) => source.id === 'byteplus-modelark-model-pricing');
  const regionAvailability = documents.find(({ source }) => source.id === 'byteplus-modelark-region-availability');
  if (!catalog || !pricing || !regionAvailability || !overview) throw new Error('BytePlus ModelArk IR 缺少目录、价格、区域或产品身份来源');
  const observed = <T,>(value: T, sourceRef: string, assertion: string) => ({
    value,
    evidence: [{ source_ref: sourceRef, assertion }],
  });
  const serviceId = 'global';
  const endpoints = facts.regions.map((region) => ({
    id: observed(`${region.region_id}-v3`, region.source_id, '官方区域来源列出该区域。'),
    base_url: observed(region.base_url, region.source_id, '官方区域来源列出该 API Base URL。'),
    api_region: observed(region.region_id, region.source_id, '区域标识取自官方区域来源。'),
    region_code: observed(region.region_id, region.source_id, '区域代码取自官方区域来源。'),
  }));
  const offerings = facts.model_catalog.map((model) => ({
    provider_model_id: observed(model.model_id, model.source_id, '精确模型 ID 来自 BytePlus ModelArk 官方模型目录。'),
    display_name: observed(model.label, model.source_id, '目录展示名来自 BytePlus ModelArk 官方模型目录。'),
    service_id: observed(serviceId, model.source_id, '目录由已确认的 BytePlus ModelArk global Service 提供。'),
    supply_observations: [{
      kind: 'listed_current' as const,
      evidence: [{ source_ref: model.source_id, assertion: '模型当前列于官方模型目录；此观察不表示账号授权或逐区域可调用。' }],
    }],
    operations: [],
    prices: [],
  }));
  const reviewItems: ReviewItem[] = [
    {
      id: 'global-domain-facts-not-normalized',
      kind: 'incomplete_coverage',
      message: '模型目录已映射为 global Service 下的 listed_current Offering，区域 Base URL 已映射为 Endpoint；逐模型 Route、API 能力、区域可用性和 PriceFact 仍未完成可靠关联。',
      evidence: [
        { source_ref: catalog.source.id, assertion: `${offerings.length} 个精确目录 ID 已生成 Offering。` },
        { source_ref: pricing.source.id, assertion: `${facts.pricing_evidence.length} 条价格原文仍未关联为 PriceFact。` },
        { source_ref: regionAvailability.source.id, assertion: `${endpoints.length} 个区域 Base URL 已生成 Endpoint。` },
      ],
    },
    {
      id: 'global-agent-plan-price-not-disclosed',
      kind: 'incomplete_coverage',
      message: '国际官方文档确认 Agent Plan 是订阅服务，并提供工具接入说明；当前公开的国际定价表只列 Coding Plan，未找到 Agent Plan 的国际档位、币种与价格，因此不从中国区方案推算或发布国际 Agent Plan 价格。',
      evidence: facts.plan_evidence.filter(({ source_id }) => source_id === 'byteplus-modelark-models-and-plans' || source_id === 'byteplus-modelark-agent-plan-integration').map(({ source_id, text }) => ({ source_ref: source_id, assertion: text }))
        .concat(facts.plan_evidence.some(({ source_id }) => source_id === 'byteplus-modelark-models-and-plans' || source_id === 'byteplus-modelark-agent-plan-integration')
          ? []
          : [{ source_ref: pricing.source.id, assertion: '当前国际定价来源只记录已公开的 Coding Plan 价格，未找到 Agent Plan 价格。' }]),
    },
  ];
  const ir = buildDocumentObservationIR({
    providerId: 'volcengine',
    documents,
    modelIdsBySource,
    recordsBySource,
    coverageBySource: Object.fromEntries(documents.map(({ source }) => [source.id, {
      status: 'partial' as const,
      note: '来源已解析；目前只将可精确关联的 global Service、目录 Offering 与区域 Endpoint 映射为领域事实。',
    }])),
    reviewItems,
    collectionNotes: [
      `按既有确认将 ${facts.product} 记录为火山方舟独立的 global Service。`,
      '模型目录只证明 listed_current；不推断账号授权、逐区域可调用性或未明确支持的 Operation。',
      '价格、逐模型 Route、区域可用性和计划来源仍保留原文观察，待完成精确映射。',
    ],
  });
  return {
    ...ir,
    services: [{
      id: observed(serviceId, overview.source.id, facts.provider_relationship),
      name: observed(facts.product, overview.source.id, '官方产品概览以 BytePlus ModelArk 命名该服务。'),
      endpoints,
      offerings,
      capabilities: [],
      plans: [],
    }],
  };
}

async function useLastCompleteApiSnapshot(repoRoot: string, documents: CapturedDocument[]): Promise<CapturedDocument[]> {
  const sourceId = 'byteplus-modelark-get-video-generation-task-api';
  const current = documents.find((document) => document.source.id === sourceId);
  if (!current || current.metadata.byte_length >= 50_000) return documents;

  const directory = path.join(repoRoot, 'data/upstream/snapshots', sourceId);
  const metadataFiles = (await readdir(directory)).filter((name) => name.endsWith('.json'));
  const candidates = await Promise.all(metadataFiles.map(async (name) => {
    try {
      const metadata = JSON.parse(await readFile(path.join(directory, name), 'utf8')) as CapturedDocument['metadata'];
      return metadata.source_id === sourceId && metadata.http_status === 200 && metadata.byte_length >= 50_000
        ? metadata
        : null;
    } catch { return null; }
  }));
  const previous = candidates.filter((metadata): metadata is CapturedDocument['metadata'] => metadata !== null)
    .sort((left, right) => right.retrieved_at.localeCompare(left.retrieved_at))[0];
  if (!previous) return documents;
  const body = await readFile(path.join(directory, previous.body_file), 'utf8');
  return documents.map((document) => document.source.id === sourceId
    ? { ...document, metadata: previous, body }
    : document);
}

export async function collectVolcengineGlobal(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const captured = await captureDocumentSet(options.repoRoot, VOLCENGINE_GLOBAL_INGEST_SOURCES);
  const documents = await useLastCompleteApiSnapshot(options.repoRoot, captured);
  const current = buildFacts(documents);
  const ir = toVolcengineGlobalIR(documents, current);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'volcengine',
    candidateScope: 'ir-global',
    documents,
    current: ir,
    modelCount: current.model_catalog.length,
    renderReview: renderIRReview,
  });
}

function renderIRReview(candidate: IRCandidate): string {
  const ir = candidate.current;
  return [
    '## 国际市场 IR 覆盖',
    '',
    `- 来源：${ir.source_refs.length} 项；覆盖范围均为部分解析。`,
    `- 文档观察：${ir.document_observations.length} 项；模型 ID 提及：${ir.document_observations.reduce((count, observation) => count + observation.model_id_mentions.length, 0)} 个。`,
    `- 领域事实：${ir.services.length} 个 Service、0 个 Offering；暂不将国际产品自动映射为火山方舟供应。`,
    `- 复核项：${ir.review_items.length} 项。`,
    '',
    '国际资料以 BytePlus ModelArk 名义发布。Provider 归属与模型、价格、区域及 Route 的字段映射需要先经人工确认。',
  ].join('\n');
}

export const volcengineGlobalParser = { buildFacts, toVolcengineGlobalIR, modelListings, opsFor, snippets, pricingRows, readJsonString, contentForTitle };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectVolcengineGlobal({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
