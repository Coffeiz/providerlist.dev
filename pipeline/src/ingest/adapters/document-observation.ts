import type { CapturedDocument } from './document-set.ts';
import type { IngestSource } from '../types.ts';
import type { CoverageRecord, DocumentObservationFact, ProviderCollectionIR, ReviewItem } from '../ir/provider-collection.ts';

export type EvidenceTable = {
  readonly heading: string;
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
};

export type SourceObservation = {
  readonly source_id: string;
  readonly scope: IngestSource['scope'];
  readonly extraction: IngestSource['extraction'];
  readonly access_scope: IngestSource['access_scope'];
  readonly title: string | null;
  readonly tables: readonly EvidenceTable[];
  readonly structured_records: readonly unknown[];
  readonly api_mentions: readonly string[];
  readonly plan_or_price_mentions: readonly string[];
  readonly capability_mentions: readonly string[];
  readonly excerpt: string;
};

function decodeEntities(text: string): string {
  return text.replace(/&#(x[\da-f]+|\d+);/gi, (_match, value: string) => {
    const codePoint = value[0]?.toLowerCase() === 'x' ? Number.parseInt(value.slice(1), 16) : Number.parseInt(value, 10);
    return Number.isFinite(codePoint) && codePoint >= 0 && codePoint <= 0x10ffff
      ? String.fromCodePoint(codePoint)
      : _match;
  }).replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&apos;/gi, "'");
}

function stripHtml(html: string): string {
  return decodeEntities(html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, ' ')
    .replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript\s*>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<(?:br|\/p|\/div|\/li|\/h[1-6]|\/tr|\/section|\/article|\/button|\/summary|\/details)\b[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, ' '))
    .replace(/[\t\u00a0 ]+/g, ' ').replace(/\n\s+/g, '\n').trim();
}

function cellText(value: string): string {
  return stripHtml(value).replace(/\s+/g, ' ').trim();
}

function markdownTables(body: string): EvidenceTable[] {
  const lines = body.split(/\r?\n/);
  const tables: EvidenceTable[] = [];
  let heading = '';
  for (let i = 0; i < lines.length; i++) {
    const line = (lines[i] ?? '').trim();
    const headingMatch = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
    if (headingMatch?.[1]) heading = headingMatch[1];
    if (!line.startsWith('|') || !(lines[i + 1] ?? '').trim().startsWith('|')) continue;
    const split = (row: string): string[] => row.trim().replace(/^\|/, '').replace(/\|$/, '').split(/(?<!\\)\|/).map(cellText);
    const headers = split(line);
    const separator = split((lines[i + 1] ?? '').trim());
    if (!separator.length || !separator.every((cell) => /^:?-+:?$/.test(cell.replace(/\s/g, ''))) ) continue;
    const rows: string[][] = [];
    i += 2;
    while (i < lines.length && (lines[i] ?? '').trim().startsWith('|')) {
      const row = (lines[i] ?? '').trim();
      if (!/^\|\s*:?-+:?\s*(?:\|\s*:?-+:?\s*)+\|?$/.test(row)) rows.push(split(row));
      i++;
    }
    i--;
    tables.push({ heading, headers, rows });
  }
  return tables;
}

function htmlTables(body: string): EvidenceTable[] {
  const tables: EvidenceTable[] = [];
  let heading = '';
  const sections = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1\s*>|<table\b[^>]*>([\s\S]*?)<\/table\s*>/gi;
  for (const section of body.matchAll(sections)) {
    if (section[2] !== undefined) {
      heading = cellText(section[2]);
      continue;
    }
    const rows = [...(section[3] ?? '').matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr\s*>/gi)].map((row) =>
      [...(row[1] ?? '').matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)\s*>/gi)]
        .map((cell) => cellText(cell[1] ?? '')),
    ).filter((cells) => cells.length > 0);
    if (rows.length >= 2) tables.push({ heading, headers: rows[0] ?? [], rows: rows.slice(1) });
  }
  return tables;
}

function jsonRecords(body: string): unknown[] {
  try {
    const parsed: unknown = JSON.parse(body);
    if (Array.isArray(parsed)) return parsed;
    if (!parsed || typeof parsed !== 'object') return [];
    const root = parsed as Record<string, unknown>;
    for (const key of ['data', 'models', 'items', 'results']) {
      if (Array.isArray(root[key])) return root[key] as unknown[];
    }
  } catch { /* Non-JSON sources have no structured records. */ }
  return [];
}

const API_PATTERN = /\b(?:GET|POST|PUT|PATCH|DELETE|WS)\s+(?:(?:https?|wss):\/\/[^\s`"'<>]+|\/?v\d+(?:\/[\w{}:./?-]+)+)|(?:api_base|base_url|base url|api endpoint|api host|api 接入|基础地址)[^\n]*(?:(?:https?|wss):\/\/|\/?v\d+\/)|(?:https?|wss):\/\/(?:api\.|[^/\s]*api\.)[^\s`"'<>]*\/v\d+/i;
const PLAN_PATTERN = /\b(?:plan|monthly|annual|yearly|subscription|套餐|月费|年费|订阅|计划)\b/i;
const PRICE_PATTERN = /(?:\$|€|£|¥|\bUSD\b|\bEUR\b|\bCNY\b|\/\s*(?:million|1m|Mt|month|image|minute|request)|每百万|每张|每分钟)/i;
const CAPABILITY_PATTERN = /(?:embedding|rerank(?:er|ing)?|image|vision|video|audio|speech|transcri|tool.?call|reasoning|structured|OCR|realtime|向量|重排|图像|视觉|视频|音频|语音|转写|工具调用|推理|结构化|实时)/i;

function openApiRouteMentions(body: string): string[] {
  const lines = body.split(/\r?\n/);
  const routes: string[] = [];
  for (let index = 0; index < lines.length; index++) {
    const pathMatch = lines[index]?.match(/^\s{2,}(\/v\d+(?:\/[\w{}:.-]+)*):\s*$/);
    if (!pathMatch) continue;
    const method = lines.slice(index + 1, index + 6).find((line) => /^\s{4,}(?:get|post|put|patch|delete):\s*$/i.test(line))
      ?.trim().replace(/:$/, '').toUpperCase();
    if (method) routes.push(`${method} ${pathMatch[1]}`);
  }
  return routes;
}

/** 提取通用官方文档线索，供需要跨页面对照的 Provider 专属适配器复用。 */
export function extractDocumentObservation(document: Pick<CapturedDocument, 'source' | 'body'>): SourceObservation {
  const { source, body } = document;
  const tables = [...markdownTables(body), ...(source.extraction === 'html' ? htmlTables(body) : [])];
  const containsHtml = /<(?:!doctype|html|head|body|script|style|div|table)\b/i.test(body);
  const text = source.extraction === 'html' || containsHtml ? stripHtml(body) : body;
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const apiMentions = [...new Set([
    ...lines.filter((line) => API_PATTERN.test(line)).map((line) => line.slice(0, 500)),
    ...openApiRouteMentions(body),
  ])].slice(0, 100);
  const planOrPriceMentions = [...new Set(lines.filter((line) => PLAN_PATTERN.test(line) || PRICE_PATTERN.test(line)).map((line) => line.slice(0, 500)))].slice(0, 160);
  const capabilityMentions = [...new Set(lines.filter((line) => CAPABILITY_PATTERN.test(line)).map((line) => line.slice(0, 500)))].slice(0, 120);
  const looksHtml = source.extraction === 'html' || /<(?:!doctype|html|head|title)\b/i.test(body);
  const title = looksHtml ? body.match(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i)?.[1] : body.match(/^#\s+(.+)$/m)?.[1];
  return {
    source_id: source.id,
    scope: source.scope,
    extraction: source.extraction,
    access_scope: source.access_scope,
    title: title ? cellText(title) : null,
    tables,
    structured_records: source.extraction === 'json' ? jsonRecords(body) : [],
    api_mentions: apiMentions,
    plan_or_price_mentions: planOrPriceMentions,
    capability_mentions: capabilityMentions,
    excerpt: lines.slice(0, source.scope === 'model_catalog' ? 240 : 100).join('\n').slice(0, 24000),
  };
}

/**
 * 将 Provider 自己解析出的来源级线索封装成统一 IR 观察。
 * 该函数只处理通用包装，不裁定 Offering、价格、身份或 Provider 语义。
 */
export function buildDocumentObservationIR(input: {
  readonly providerId: string;
  readonly documents: readonly CapturedDocument[];
  readonly collectionNotes?: readonly string[];
  readonly reviewItems?: readonly ReviewItem[];
  readonly modelIdsBySource?: Readonly<Record<string, readonly string[]>>;
  readonly recordsBySource?: Readonly<Record<string, readonly unknown[]>>;
  readonly coverageBySource?: Readonly<Record<string, Pick<CoverageRecord, 'status' | 'note'>>>;
}): ProviderCollectionIR {
  if (!input.documents.length) throw new Error(`${input.providerId} IR 无来源快照`);
  const sourceRefs = new Set(input.documents.map(({ source }) => source.id));
  for (const id of Object.keys(input.modelIdsBySource ?? {})) if (!sourceRefs.has(id)) throw new Error(`${input.providerId} IR 模型观察引用了未知来源 ${id}`);
  for (const id of Object.keys(input.recordsBySource ?? {})) if (!sourceRefs.has(id)) throw new Error(`${input.providerId} IR 结构观察引用了未知来源 ${id}`);
  const observedAt = input.documents.map(({ metadata }) => metadata.retrieved_at).sort().at(-1);
  if (!observedAt) throw new Error(`${input.providerId} IR 来源缺少取回时间`);
  const observations: DocumentObservationFact[] = input.documents.map((document) => {
    const observation = extractDocumentObservation(document);
    return {
      ...observation,
      source_ref: observation.source_id,
      model_id_mentions: input.modelIdsBySource?.[observation.source_id] ?? [],
      ...(input.recordsBySource?.[observation.source_id]
        ? { structured_records: input.recordsBySource[observation.source_id]! }
        : {}),
    };
  });
  return {
    ir_version: '1.0.0',
    provider_id: input.providerId,
    observed_at: observedAt,
    source_refs: input.documents.map(({ source }) => source.id),
    coverage: input.documents.map(({ source }) => ({
      source_ref: source.id,
      scope: source.scope ?? 'documentation',
      ...(source.market ? { market: source.market } : {}),
      ...(input.coverageBySource?.[source.id] ?? {
        status: 'not_parsed' as const,
        note: '来源线索保留在观察区，尚未映射为可投影 Provider 领域字段。',
      }),
    })),
    document_observations: observations,
    ...(input.collectionNotes?.length ? { collection_notes: input.collectionNotes } : {}),
    services: [],
    review_items: [...(input.reviewItems ?? [])],
  };
}

/** Update the canonical coverage row for one source/domain/market tuple. */
export function upsertCoverageRecord(
  ir: ProviderCollectionIR,
  record: CoverageRecord,
): ProviderCollectionIR {
  const sameKey = (candidate: CoverageRecord) => candidate.source_ref === record.source_ref
    && candidate.scope === record.scope
    && candidate.market === record.market;
  const matches = ir.coverage.flatMap((candidate, index) => sameKey(candidate) ? [index] : []);
  if (matches.length > 1) {
    throw new Error(`IR 已包含重复 coverage：${record.source_ref}/${record.scope}/${record.market ?? 'any'}`);
  }
  if (!matches.length) return { ...ir, coverage: [...ir.coverage, record] };
  const [index] = matches;
  return {
    ...ir,
    coverage: ir.coverage.map((candidate, candidateIndex) => candidateIndex === index ? record : candidate),
  };
}
