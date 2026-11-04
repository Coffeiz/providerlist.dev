import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CandidateEnvelope } from '../../types.ts';
import { captureDocumentSet, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import { ALIBABA_INGEST_SOURCES } from './sources.ts';
import { extractAlibabaApiFacts, extractAlibabaTokenPlanEndpoints } from './api-parser.ts';
import { mapAlibabaApiIR } from './api-ir.ts';
import type { ProviderCollectionIR } from '../../ir/provider-collection.ts';

export interface AlibabaCandidateFacts {
  readonly api_endpoints: ReturnType<typeof extractAlibabaApiFacts>['endpoints'];
  readonly api_routes: ReturnType<typeof extractAlibabaApiFacts>['routes'];
  readonly api_review_items: ReturnType<typeof extractAlibabaApiFacts>['review_items'];
  readonly pricing_rows: readonly { readonly section: string; readonly raw: string; readonly model_ids: readonly string[] }[];
  readonly token_pricing_rows: readonly { readonly source_id: string; readonly locator: string; readonly api_region: string; readonly deployment_scope: string; readonly currency: 'CNY' | 'USD'; readonly section: string; readonly model_id: string; readonly unit: 'per_1m_tokens' | 'per_1k_tokens'; readonly input_price?: string; readonly cache_read_price?: string; readonly output_price?: string; readonly input_range: string; readonly input_modality?: string; readonly is_limited_time_free: boolean }[];
  readonly gallery_models: readonly { readonly section: string; readonly model_ids: readonly string[] }[];
  readonly global_gallery_models: readonly { readonly section: string; readonly model_ids: readonly string[] }[];
  readonly full_model_catalog: readonly { readonly source_id: string; readonly section: string; readonly model_ids: readonly string[] }[];
  readonly plan_evidence: readonly { readonly source_id: string; readonly relevant_lines: readonly string[] }[];
  readonly cache_evidence: readonly { readonly source_id: string; readonly market: string; readonly relevant_lines: readonly string[] }[];
  readonly catalog_api_boundary: 'requires_account_api_key_and_workspace_id';
  readonly entry_scope: readonly string[];
}

function extractTokenPlanDescriptions(body: string): readonly string[] {
  const descriptionsByKey = new Map<string, string[]>();
  for (const match of body.matchAll(/["']?([A-Za-z0-9_-]+)["']?\s*:\s*\x60([^\x60]*)\x60/g)) {
    const key = match[1]?.trim();
    const value = match[2]?.trim();
    if (!key || !value) continue;
    const values = descriptionsByKey.get(key) ?? [];
    values.push(value);
    descriptionsByKey.set(key, values);
  }
  return [...descriptionsByKey.entries()].flatMap(([key, values]) => {
    const chinese = values.find((value) => /[\u3400-\u9fff]/.test(value));
    const english = values.find((value) => !/[\u3400-\u9fff]/.test(value));
    if (!chinese && !english) return [];
    return [
      ...(chinese ? [`token_plan_description:cn:${key}:${chinese}`] : []),
      ...(english ? [`token_plan_description:global:${key}:${english}`] : []),
    ];
  });
}

type IRCandidate = CandidateEnvelope<ProviderCollectionIR>;

const MODEL_ID = /\b(?:qwen[0-9][A-Za-z0-9_.-]*|qwen-[A-Za-z0-9][A-Za-z0-9_./-]*|deepseek[-/][A-Za-z0-9_.-]+|kimi(?:[-/][A-Za-z0-9_.-]+)*|glm[-/][A-Za-z0-9_.-]+|zhipu\/[A-Za-z0-9_.-]+|minimax\/[A-Za-z0-9_.-]+|MiniMax-[A-Za-z0-9_.-]+|wan[0-9.]*[-/][A-Za-z0-9_.-]+|pixverse\/[A-Za-z0-9_.-]+|kling\/[A-Za-z0-9_.-]+|vidu\/[A-Za-z0-9_.-]+|hunyuan[-/][A-Za-z0-9_.-]+|mimo[-/][A-Za-z0-9_.-]+)\b/gi;

function clean(body: string): string {
  return body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '\n').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '\n')
    .replace(/<(h[1-6])\b[^>]*>/gi, '\n## ').replace(/<br\s*\/?>|<\/(?:p|div|li|h[1-6]|section|article|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/[\t ]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();
}

function extractOfficialHelpContent(body: string): string {
  const marker = 'window.__ICE_PAGE_PROPS__=';
  const markerIndex = body.indexOf(marker);
  if (markerIndex < 0) return body;
  const start = body.indexOf('{', markerIndex + marker.length);
  if (start < 0) return body;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < body.length; index += 1) {
    const character = body[index]!;
    if (inString) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') inString = false;
      continue;
    }
    if (character === '"') inString = true;
    else if (character === '{') depth += 1;
    else if (character === '}' && --depth === 0) {
      try {
        const pageProps: unknown = JSON.parse(body.slice(start, index + 1));
        if (pageProps && typeof pageProps === 'object' && 'docDetailData' in pageProps) {
          const content = (pageProps as { docDetailData?: { storeData?: { data?: { content?: unknown } } } })
            .docDetailData?.storeData?.data?.content;
          if (typeof content === 'string' && content.length) return content;
        }
      } catch {
        return body;
      }
      return body;
    }
  }
  return body;
}

function ids(value: string): string[] {
  const known = value.match(MODEL_ID) ?? [];
  const tokenLike = value.match(/\b[A-Za-z][A-Za-z0-9]*(?:[._/-][A-Za-z0-9]+)+\b/g) ?? [];
  const versioned = value.match(/\b(?=[A-Za-z0-9._/-]*\d)[A-Za-z][A-Za-z0-9._/-]{3,}\b/g) ?? [];
  const probable = tokenLike.filter((id) => id.includes('/') || /\d/.test(id));
  return [...new Set([...known, ...probable, ...versioned])].filter((id) => !/^(?:api|base-url|input-token|output-token|free-quota|model-id|workspace-id)$/i.test(id));
}

function extractPricingRows(body: string): AlibabaCandidateFacts['pricing_rows'] {
  const lines = clean(body).split('\n');
  let section = '未识别章节';
  const rows: { section: string; raw: string; model_ids: string[] }[] = [];
  for (const line of lines) {
    const heading = line.match(/^\s*#{1,6}\s+(.+)$/);
    if (heading) section = heading[1]!.trim();
    const modelIds = ids(line);
    if (modelIds.length && (line.includes('|') || /价格|单价|免费|输入|输出|Token|模型/.test(line))) {
      rows.push({ section, raw: line.trim(), model_ids: modelIds });
    }
  }
  return rows;
}

function extractGallery(body: string): AlibabaCandidateFacts['gallery_models'] {
  const grouped = new Map<string, Set<string>>();
  const cards = [...body.matchAll(/<Card\b([^>]*)>/gi)];
  if (cards.length) {
    const headings = [...body.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)];
    for (const card of cards) {
      const attributes = card[1] ?? '';
      const title = attributes.match(/\btitle\s*=\s*["']([^"']+)["']/i)?.[1]?.trim();
      const href = attributes.match(/\bhref\s*=\s*["']([^"']+)["']/i)?.[1];
      // The official model directory uses Cards with either console detail links or model-specific docs.
      if (!title || !href || !/(?:\/model\/market\/detail\/|#\/model-market\/detail\/|\/model-studio\/)/i.test(href)) continue;
      const heading = headings.filter((item) => (item.index ?? 0) < (card.index ?? 0)).at(-1)?.[1];
      const section = heading?.replace(/\s*<span\b.*$/, '').trim() ?? '未识别分类';
      const group = grouped.get(section) ?? new Set<string>();
      group.add(title);
      grouped.set(section, group);
    }
    if (grouped.size) return [...grouped].map(([section, modelIds]) => ({ section, model_ids: [...modelIds] }));
  }

  // Retain support for the older model-directory format, which listed IDs in HTML tables.
  for (const table of body.matchAll(/<table\b[\s\S]*?<\/table>/gi)) {
    const prefix = body.slice(0, table.index ?? 0);
    const heading = [...prefix.matchAll(/^#{1,6}\s+(.+?)\s*$/gm)].at(-1)?.[1];
    const section = heading?.replace(/\s*<span.*$/, '').trim() ?? '未识别分类';
    const group = grouped.get(section) ?? new Set<string>();
    for (const anchor of (table[0] ?? '').matchAll(/<(?:a|Link)\b[^>]*>([\s\S]*?)<\/(?:a|Link)>/gi)) {
      const label = cellText(anchor[1] ?? '');
      const id = label.match(MODEL_ID)?.[0];
      if (id && id.toLowerCase() === label.toLowerCase()) group.add(id);
    }
    if (group.size) grouped.set(section, group);
  }
  return [...grouped].map(([section, modelIds]) => ({ section, model_ids: [...modelIds] }));
}

function extractListedModels(body: string, sourceId: string): AlibabaCandidateFacts['full_model_catalog'] {
  const section = body.match(/^#\s+([^\n]+)$/m)?.[1]?.trim();
  if (!section) return [];
  const modelIds = [...new Set([...body.matchAll(/^\s*-\s+\[([^\]]+)\]\((?:https:\/\/docs\.bailian\.console\.aliyun\.com)?\/zh\/model-studio\/[^)]+\)/gm)]
    .map((match) => match[1]?.trim().replaceAll('\\_', '_'))
    .filter((value): value is string => Boolean(value)))];
  return modelIds.length ? [{ source_id: sourceId, section, model_ids: modelIds }] : [];
}

function cellText(value: string): string {
  return clean(value).replace(/^>\s*/gm, '').replace(/\s+/g, ' ').trim();
}

function tableRowsWithRowspans(table: string): string[][] {
  const rows: string[][] = [];
  let activeSpans = new Map<number, { readonly text: string; readonly remaining: number }>();
  for (const match of table.matchAll(/<tr\b[\s\S]*?<\/tr>/gi)) {
    const expanded: string[] = [];
    for (const [column, span] of activeSpans) expanded[column] = span.text;
    const newSpans = new Map<number, { readonly text: string; readonly remaining: number }>();
    let column = 0;
    for (const cell of (match[0] ?? '').matchAll(/<(th|td)\b([^>]*)>([\s\S]*?)<\/\1>/gi)) {
      while (expanded[column] !== undefined) column += 1;
      const attributes = cell[2] ?? '';
      const text = cellText(cell[3] ?? '');
      const spanValue = (name: string) => attributes.match(new RegExp(`\\b${name}\\s*=\\s*(?:\\{(\\d+)\\}|["']?(\\d+))`, 'i'));
      const rowSpan = Number(spanValue('rowSpan')?.[1] ?? spanValue('rowSpan')?.[2] ?? 1);
      const colSpan = Number(spanValue('colSpan')?.[1] ?? spanValue('colSpan')?.[2] ?? 1);
      for (let offset = 0; offset < colSpan; offset += 1) {
        expanded[column + offset] = text;
        if (rowSpan > 1) newSpans.set(column + offset, { text, remaining: rowSpan - 1 });
      }
      column += colSpan;
    }
    rows.push(expanded);
    const nextSpans = new Map<number, { readonly text: string; readonly remaining: number }>();
    for (const [index, span] of activeSpans) if (span.remaining > 1) nextSpans.set(index, { ...span, remaining: span.remaining - 1 });
    for (const [index, span] of newSpans) nextSpans.set(index, span);
    activeSpans = nextSpans;
  }
  return rows;
}

function extractTokenPricingRows(body: string, sourceId: string): AlibabaCandidateFacts['token_pricing_rows'] {
  const rows: AlibabaCandidateFacts['token_pricing_rows'][number][] = [];
  const tables = [...body.matchAll(/<table\b[\s\S]*?<\/table>/gi)].map((table) => ({ rows: tableRowsWithRowspans(table[0] ?? ''), index: table.index ?? 0 }));
  // Markdown pricing tables are common in Alibaba's newer docs; parse them alongside embedded HTML.
  for (const match of body.matchAll(/(?:^|\n)([^\n]*\|[^\n]*\n\s*\|?\s*:?-{3,}[\s|:-]*\n(?:[^\n]*\|[^\n]*\n)+)/g)) {
    const chunk = match[1] ?? '';
    if (!/模型\s*ID/i.test(chunk) || !/输入单价/.test(chunk)) continue;
    const markdownRows = chunk.split('\n').filter((line) => line.includes('|') && !/^\s*\|?\s*:?-{3,}/.test(line)).map((line) => {
      const cells = line.split('|').map((cell) => clean(cell).replace(/`/g, '').trim());
      if (!cells[0]) cells.shift();
      if (!cells.at(-1)) cells.pop();
      return cells;
    });
    tables.push({ rows: markdownRows, index: match.index ?? 0 });
  }
  tables.sort((a, b) => a.index - b.index);
  for (const [tableIndex, table] of tables.entries()) {
    const start = table.index;
    const prefix = body.slice(0, start);
    const tabTitle = [...prefix.matchAll(/<Tab\s+title=["']([^"']+)["']/gi)].at(-1)?.[1]?.trim();
    const htmlHeading = [...prefix.matchAll(/<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/gi)].at(-1)?.[1];
    const markdownHeading = [...prefix.matchAll(/^#{2,4}\s+(.+?)\s*$/gm)].at(-1)?.[1];
    const regionTitle = tabTitle ?? (htmlHeading ? cellText(htmlHeading) : markdownHeading?.replace(/\s*<span.*$/, '').trim()) ?? '';
    const region = /华北\s*2|北京/.test(regionTitle) ? '华北2（北京）'
      : /新加坡/.test(regionTitle) ? '新加坡'
        : /美国|弗吉尼亚/.test(regionTitle) ? '美国（弗吉尼亚）'
          : /德国|法兰克福/.test(regionTitle) ? '德国（法兰克福）'
            : /日本|东京/.test(regionTitle) ? '日本（东京）' : '';
    const section = markdownHeading?.replace(/\s*<span.*$/, '').trim() ?? (htmlHeading ? cellText(htmlHeading) : '未识别章节');
    const tr = table.rows;
    const headerIndex = tr.findIndex((cells) => cells.some((cell) => /模型\s*ID/.test(cell))
      && cells.some((cell) => /输入单价|单价.*输入Token/.test(cell))
      && cells.some((cell) => /百万\s*Token|千输入Token|per\s*1m|per\s*1k/i.test(cell)));
    if (headerIndex < 0) continue;
    const header = tr[headerIndex]!;
    const possibleSubHeader = tr[headerIndex + 1] ?? [];
    const hasGroupedHeader = possibleSubHeader.some((cell) => /文本|文档|图片|图像|音频/.test(cell)) && !possibleSubHeader.some((cell) => /qwen|deepseek|kimi|glm|wan/i.test(cell));
    const subHeader = hasGroupedHeader ? possibleSubHeader : [];
    if (!header) continue;
    const modelColumn = header.findIndex((cell) => /模型\s*ID/.test(cell));
    const combinedHeaders = header.map((cell, index) => `${cell} ${subHeader[index] ?? ''}`);
    const inputColumns = combinedHeaders.map((cell, index) => /输入单价|单价.*输入Token/.test(cell) && !/缓存命中/.test(cell) ? index : -1).filter((index) => index >= 0);
    const cacheColumn = combinedHeaders.findIndex((cell) => /缓存命中输入单价/.test(cell));
    const outputColumn = combinedHeaders.findIndex((cell) => /输出单价/.test(cell));
    const deploymentColumn = header.findIndex((cell) => /服务部署范围/.test(cell));
    const rangeColumn = combinedHeaders.findIndex((cell) => /单次请求的输入/.test(cell));
    for (const [rowIndex, cells] of tr.entries()) {
      if (rowIndex < headerIndex + 1 + (hasGroupedHeader ? 1 : 0)) continue;
      if (cells.length < header.length || cells[modelColumn] === header[modelColumn]) continue;
      const modelId = (cells[modelColumn] ?? '').match(MODEL_ID)?.[0];
      const limitedTimeFree = cells.some((cell) => /限时免费/.test(cell));
      const pricedInputs = inputColumns.map((column) => ({ column, value: cells[column] ?? '' }))
        .filter(({ value }) => /\d/.test(value) || limitedTimeFree)
        .map(({ column, value }) => ({ column, value: limitedTimeFree && !/\d/.test(value) ? '0' : value }));
      const outputValue = outputColumn >= 0 ? cells[outputColumn] ?? '' : '';
      const cacheValue = cacheColumn >= 0 ? cells[cacheColumn] ?? '' : '';
      const priceText = `${pricedInputs.map(({ value }) => value).join(' ')} ${cacheValue} ${outputValue}`;
      const currency = /\$|USD|美元/i.test(priceText) ? 'USD' : /[¥￥]|元|CNY/i.test(priceText) ? 'CNY'
        : limitedTimeFree ? sourceId === 'alibaba-global-model-pricing' ? 'USD' : 'CNY' : undefined;
      if (!modelId || !pricedInputs.length || !region || !currency) continue;
      const unit: 'per_1m_tokens' | 'per_1k_tokens' = /每千|per\s*1k/i.test(combinedHeaders.join(' ')) ? 'per_1k_tokens' : 'per_1m_tokens';
      for (const { column, value } of pricedInputs) {
        const inputPrice = limitedTimeFree ? '0' : value.match(/\d+(?:\.\d+)?/g)?.at(-1);
        if (!inputPrice) continue;
        const subLabel = subHeader[column] ?? '';
        const inputModality = /文档/.test(subLabel) ? 'document' : /图片|图像/.test(subLabel) ? 'image' : /音频/.test(subLabel) ? 'audio' : /文本/.test(subLabel) ? 'text' : undefined;
        rows.push({ source_id: sourceId, locator: `#${section}/table/${tableIndex + 1}/row/${rowIndex + 1}`, api_region: region, deployment_scope: cells[deploymentColumn] ?? '', currency, section, model_id: modelId, unit, input_price: inputPrice, ...(limitedTimeFree ? { output_price: '0' } : outputValue.match(/\d+(?:\.\d+)?/) ? { output_price: outputValue.match(/\d+(?:\.\d+)?/)![0] } : {}), ...(cacheValue.match(/\d+(?:\.\d+)?/) ? { cache_read_price: cacheValue.match(/\d+(?:\.\d+)?/)![0] } : {}), input_range: cells[rangeColumn] ?? '', ...(inputModality ? { input_modality: inputModality } : {}), is_limited_time_free: limitedTimeFree });
      }
    }
  }
  return [...new Map(rows.map((row) => [`${row.source_id}:${row.api_region}:${row.model_id}:${row.unit}:${row.input_range}:${row.input_modality ?? ''}:${row.input_price}:${row.cache_read_price}:${row.output_price}`, row])).values()];
}

export function facts(documents: readonly CapturedDocument[]): AlibabaCandidateFacts {
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const modelListSourceIds = [
    'alibaba-model-list-text-generation', 'alibaba-model-list-visual-understanding', 'alibaba-model-list-omni',
    'alibaba-model-list-image-generation', 'alibaba-model-list-video-generation', 'alibaba-model-list-world-model',
    'alibaba-model-list-3d-generation', 'alibaba-model-list-speech-synthesis', 'alibaba-model-list-audio-generation',
    'alibaba-model-list-speech-recognition', 'alibaba-model-list-speech-to-speech',
    'alibaba-model-list-embedding-reranking', 'alibaba-model-list-decision',
  ];
  const required = ['alibaba-model-pricing', 'alibaba-global-model-pricing', 'alibaba-context-cache', 'alibaba-global-context-cache', 'alibaba-models-gallery', 'alibaba-global-model-catalog', 'alibaba-global-api-base-url', 'alibaba-global-api-compatibility', 'alibaba-openai-chat-api', 'alibaba-openai-responses-api', 'alibaba-anthropic-messages-api', 'alibaba-global-coding-plan', 'alibaba-global-coding-plan-faq', 'alibaba-global-token-plan', 'alibaba-model-list-api-doc', 'alibaba-service-model-catalog', 'alibaba-api-compatibility', 'alibaba-coding-plan', 'alibaba-coding-plan-faq', 'alibaba-token-plan-personal', 'alibaba-token-plan', 'alibaba-token-plan-team', 'alibaba-token-plan-ui-copy', ...modelListSourceIds];
  if (required.some((id) => !byId.has(id))) throw new Error('阿里百炼目录、价格、缓存、计划与 API 文档来源必须完整采集');
  const pricing = byId.get('alibaba-model-pricing')!;
  const globalPricing = byId.get('alibaba-global-model-pricing')!;
  const gallery = byId.get('alibaba-models-gallery')!;
  const globalGallery = byId.get('alibaba-global-model-catalog')!;
  const apiDoc = clean(byId.get('alibaba-model-list-api-doc')!.body);
  if (!/DASHSCOPE_API_KEY|API Key/.test(apiDoc) || !/WorkspaceId|业务空间/.test(apiDoc)) throw new Error('模型列表 API 文档未能确认账号凭证及业务空间前提');
  const planDocs = documents.filter(({ source }) => source.scope === 'plan' || source.id === 'alibaba-coding-plan-faq');
  const cacheDocs = ['alibaba-context-cache', 'alibaba-global-context-cache'].map((sourceId) => {
    const document = byId.get(sourceId)!;
    return {
      source_id: sourceId,
      market: document.source.market ?? 'unspecified',
      relevant_lines: clean(document.body).split('\n').filter((line) => /缓存|折扣|价格|模型/.test(line)).slice(0, 100),
    };
  });
  const pricingRows = [...extractPricingRows(pricing.body), ...extractPricingRows(globalPricing.body)];
  const tokenPricingRows = [...extractTokenPricingRows(pricing.body, pricing.source.id), ...extractTokenPricingRows(globalPricing.body, globalPricing.source.id)];
  const galleryModels = extractGallery(gallery.body);
  const globalGalleryModels = extractGallery(globalGallery.body);
  if (pricingRows.length < 20) throw new Error(`阿里百炼价格页抽取行异常偏少：${pricingRows.length}`);
  if (!galleryModels.some(({ model_ids }) => model_ids.length)) throw new Error('阿里百炼模型大全没有解析到模型 ID');
  if (!globalGalleryModels.some(({ model_ids }) => model_ids.length)) throw new Error('阿里云国际模型列表没有解析到模型 ID');
  const modelListDocuments = modelListSourceIds.map((sourceId) => byId.get(sourceId)!);
  const modelListIndex = byId.get('alibaba-service-model-catalog')!;
  const categoryLinks = [...modelListIndex.body.matchAll(/^\s*-\s+\[[^\]]+\]\(([^)]+)\)/gm)].map((match) => match[1]!);
  for (const document of modelListDocuments) {
    const path = new URL(document.source.url).pathname.replace(/\.md$/, '');
    if (!categoryLinks.includes(path)) throw new Error(`阿里百炼服务支持目录未链接分类页 ${path}`);
  }
  const fullModelCatalog = modelListDocuments.flatMap((document) => extractListedModels(document.body, document.source.id));
  if (fullModelCatalog.length !== modelListSourceIds.length || (fullModelCatalog.find(({ section }) => section === '文本生成')?.model_ids.length ?? 0) < 20) {
    throw new Error('阿里百炼官方分类模型目录解析异常偏少');
  }
  const apiFacts = extractAlibabaApiFacts(documents);
  return {
    api_endpoints: [...apiFacts.endpoints, ...extractAlibabaTokenPlanEndpoints(documents)],
    api_routes: apiFacts.routes,
    api_review_items: apiFacts.review_items,
    pricing_rows: pricingRows,
    token_pricing_rows: tokenPricingRows,
    gallery_models: galleryModels,
    global_gallery_models: globalGalleryModels,
    full_model_catalog: fullModelCatalog,
    plan_evidence: planDocs.map(({ source, body }) => {
      if (source.id === 'alibaba-token-plan-ui-copy') {
        return { source_id: source.id, relevant_lines: extractTokenPlanDescriptions(body) };
      }
      const helpContent = extractOfficialHelpContent(body);
      return {
        source_id: source.id,
        relevant_lines: [...new Set([
          ...clean(helpContent).split('\n'),
          ...[...helpContent.matchAll(/<table\b[\s\S]*?<\/table>/gi)]
            .flatMap((table) => tableRowsWithRowspans(table[0] ?? '').map((row) => row.join(' | '))),
        ])].filter((line) => /套餐|模型|价格|计费|额度|API Key|Base URL|plan|pricing|price|credit|quota|subscription|monthly|seat|bundle|Singapore|region|USD|\$/i.test(line)).slice(0, 160),
      };
    }),
    cache_evidence: cacheDocs,
    catalog_api_boundary: 'requires_account_api_key_and_workspace_id',
    entry_scope: ['alibaba', 'alibaba-cn', 'alibaba-coding-plan', 'alibaba-coding-plan-cn', 'alibaba-token-plan', 'alibaba-token-plan-cn'],
  };
}

function renderIRReview(candidate: IRCandidate): string {
  const endpoints = candidate.current.services.reduce((count, service) => count + service.endpoints.length, 0);
  const routeCount = candidate.current.services.reduce((count, service) => count + service.offerings.reduce(
    (sum, offering) => sum + offering.operations.reduce((operationCount, operation) => operationCount + operation.routes.length, 0), 0,
  ), 0);
  const priceCount = candidate.current.services.reduce((count, service) => count + service.offerings.reduce(
    (sum, offering) => sum + offering.prices.reduce((priceCount, price) => priceCount + (price.pricing?.value.length ?? price.rules?.value.length ?? 0), 0), 0,
  ), 0);
  return [
    '# 阿里云百炼 API 与 Token 价格 IR 采集候选', '',
    `- Endpoint：${endpoints} 个`,
    `- 已关联模型的 Route：${routeCount} 个`,
    `- 与精确示例模型关联的 Token 价格规则：${priceCount} 条`,
    `- 待核对项：${candidate.current.review_items.length} 条`,
    '',
    '## 核对边界', '',
    '- 只把同一区域官方代码示例里的精确模型 ID 关联到 Route；页面中概括的模型系列不扩展成逐模型供应事实。',
    '- 没有精确模型示例的区域 Route 保留在原始事实候选中并进入 review，不生成模型 Route。',
    '- 价格只映射与同市场精确 Route 模型匹配的结构化 Token 行；促销、其它模型与非 Token 价格保留为 partial/review。',
    '- 不覆盖已有模型目录中的完整供应、能力或套餐事实。',
    '',
    ...candidate.current.review_items.map((item) => `- ${item.message}`),
    '',
  ].join('\n');
}

export async function collectAlibaba(options: { readonly repoRoot: string }): Promise<DocumentSetResult> {
  const documents = await captureDocumentSet(options.repoRoot, ALIBABA_INGEST_SOURCES);
  const current = facts(documents);
  const modelCount = new Set([...current.pricing_rows.flatMap(({ model_ids }) => model_ids), ...current.gallery_models.flatMap(({ model_ids }) => model_ids), ...current.full_model_catalog.flatMap(({ model_ids }) => model_ids)]).size;
  const ir = mapAlibabaApiIR(documents, current);
  return writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'alibaba',
    documents: documents.filter(({ source }) => ir.source_refs.includes(source.id)),
    current: ir,
    modelCount,
    renderReview: renderIRReview,
  });
}

export const alibabaParser = { clean, extractAlibabaApiFacts, extractGallery, extractListedModels, extractPricingRows, extractTokenPlanDescriptions, extractTokenPricingRows, facts, ids };

const modulePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === modulePath && process.argv[2] === 'collect') {
  const repoRoot = path.resolve(path.dirname(modulePath), '../../../../..');
  collectAlibaba({ repoRoot }).then((result) => console.log(JSON.stringify(result, null, 2))).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
