/** MiniMax 中英文站模型目录与价格采集，并收集独立 Service API/能力与套餐。 */

import { createHash } from 'node:crypto';
import { mkdir, open, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { INGEST_SOURCES } from '../../registry.ts';
import { renderCandidateReview } from '../../candidate-review.ts';
import { datedReviewMarkdownPath } from '../../review-path.ts';
import { captureSnapshot } from '../../snapshot.ts';
import type { CandidateEnvelope, IngestSource, SnapshotMetadata } from '../../types.ts';
import type { CapabilityInput, CapabilityOutput, ParameterSpec } from '@providerlist/schema/types';
import { buildDocumentObservationIR } from '../document-observation.ts';
import { latestSnapshotRetrievedAt, writeProviderCollectionCandidate, type CapturedDocument, type DocumentSetResult } from '../document-set.ts';
import type { ProviderCollectionIR, ReviewItem } from '../../ir/provider-collection.ts';

export interface MiniMaxModelFact {
  readonly model_id: string;
  /** 原样保留官方目录分类，不在采集阶段推断 ProviderList model_type。 */
  readonly source_category: string;
  readonly source_listing: 'available' | 'historical' | 'price_listed' | 'documented';
  /** 历史目录状态原文；不在采集阶段裁决生命周期。 */
  readonly source_status?: string;
  /** 按官方表头和单元格原样保存，避免采集层错误推断币种、折扣或适用条件。 */
  readonly pricing_rows: readonly {
    readonly section: string;
    readonly headers: readonly string[];
    readonly values: readonly string[];
    readonly currency_code?: 'CNY' | 'USD';
    readonly currency_symbol?: string;
    readonly currency_evidence?: string;
    readonly normalized_rates: readonly {
      readonly metric: string;
      readonly unit: string;
      readonly quantity: number;
      readonly amount_decimal?: string;
      /** 官方表格显式划线标注的原价；现价仍是 amount_decimal。 */
      readonly list_amount_decimal?: string;
      readonly source_header: string;
      readonly source_value: string;
    }[];
  }[];

}

export interface MiniMaxMarketFacts {
  readonly market: 'cn' | 'global';
  readonly models: readonly MiniMaxModelFact[];
  /** 官方模型概览中的当前/历史音乐目录与原文准入提示；仅作观察。 */
  readonly music_model_overview: {
    readonly current_model_ids: readonly string[];
    readonly legacy_model_ids: readonly string[];
    readonly access_notice?: string;
  };
  readonly plan_multipliers: readonly { readonly tier: string; readonly multiplier: string }[];
  /** M Plan 使用参考按市场逐字取自对应官方文档，不翻译或概括。 */
  readonly plan_descriptions: readonly {
    readonly tier: string;
    readonly description: string;
    readonly source_id: string;
    readonly locator: string;
  }[];
  /** 独立于模型的官方服务能力观察；仅在对应文档明确出现时记录。 */
  readonly capabilities: readonly {
    readonly id: string;
    readonly kind: 'file_storage' | 'web_search' | 'image_understanding';
    readonly operation_id: string;
    readonly operation_kind: string;
    readonly source_suffix: 'file-upload-api' | 'mcp-guide';
    readonly requires_plan: boolean;
    readonly input?: readonly CapabilityInput[];
    readonly output?: readonly CapabilityOutput[];
    readonly parameters?: readonly ParameterSpec[];
    readonly method?: string;
    readonly path?: string;
  }[];
}

export interface MiniMaxMarketDocuments {
  readonly catalog: string;
  readonly pricing: string;
  readonly music_model_overview?: string;
  /** 中国站单独发布的多模态与 ASR 接口文档；只保留来源事实，不裁决供应状态。 */
  readonly video_api?: string;
  readonly asr_api?: string;
  readonly anthropic_api?: string;
  readonly function_call_api?: string;
  readonly responses_api?: string;
  readonly file_upload_api?: string;
  readonly mcp_guide?: string;
  readonly m_plan_page?: string;
  readonly m_plan_intro?: string;
}

export interface MiniMaxCollectResult {
  readonly changed: boolean;
  readonly modelCount: number;
  readonly fingerprint: string;
  readonly reviewPath: string | null;
  readonly reviewMarkdownPath: string | null;
  readonly snapshotCount: number;
  readonly irCandidate?: DocumentSetResult['irCandidate'];
}

interface CatalogModel {
  model_id: string;
  source_category: string;
  source_listing: 'available' | 'historical';
  description?: string;
  source_status?: string;
}

interface MarkdownTable {
  readonly section: string;
  readonly headers: readonly string[];
  readonly rows: readonly (readonly string[])[];
}

const AVAILABLE_HEADING = /^##\s+(可用模型|Available Models)\s*$/i;
const HISTORICAL_HEADING = /^##\s+(历史模型|Retired Models|Historical Models)\s*$/i;

function cellsFor(line: string): string[] | null {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|') || !trimmed.endsWith('|')) return null;
  return trimmed.slice(1, -1).split('|').map((cell) => cell.trim());
}

function isSeparator(cells: readonly string[]): boolean {
  return cells.length > 0 && cells.every((cell) => /^:?-+:?$/.test(cell.replace(/\s/g, '')));
}

function cleanCell(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\\\$/g, '$')
    .trim();
}

function modelIdFromCell(value: string): string {
  const link = value.match(/\[([^\]]+)\]\([^)]*\)/);
  const bold = value.match(/\*\*([^*]+)\*\*/);
  return cleanCell(link?.[1] ?? bold?.[1] ?? value);
}

function parseCatalogRows(
  lines: readonly string[],
  start: number,
  end: number,
  sourceListing: 'available' | 'historical',
): CatalogModel[] {
  const result: CatalogModel[] = [];
  let category = '';
  let inTable = false;
  let headers: string[] = [];

  for (let index = start + 1; index < end; index += 1) {
    const line = lines[index]?.trim() ?? '';
    const heading = line.match(/^###\s+(.+)$/);
    if (heading) {
      category = cleanCell(heading[1] ?? '');
      inTable = false;
      headers = [];
      continue;
    }
    const cells = cellsFor(line);
    if (!cells) {
      if (!line) inTable = false;
      continue;
    }
    if (isSeparator(cells)) {
      inTable = true;
      continue;
    }
    if (inTable && !category && sourceListing === 'historical') {
      const categoryColumn = headers.findIndex((header) => /类型|分类|category|type/i.test(header));
      if (categoryColumn >= 0) category = cleanCell(cells[categoryColumn] ?? '');
    }
    if (!inTable || !category || /模型名称|模型名|model name|^model$/i.test(cleanCell(cells[0] ?? ''))) {
      if (!inTable) headers = cells.map(cleanCell);
      continue;
    }
    const id = modelIdFromCell(cells[0] ?? '');
    if (!id) continue;
    const item: CatalogModel = {
      model_id: id,
      source_category: category,
      source_listing: sourceListing,
    };
    const statusIndex = headers.findIndex((header) => /状态|status/i.test(header));
    const status = statusIndex >= 0 ? cleanCell(cells[statusIndex] ?? '') : '';
    if (status) item.source_status = status;
    else if (sourceListing === 'historical' && cells[2]) item.source_status = cleanCell(cells[2] ?? '');
    result.push(item);
  }
  return result;
}

/** 支持中英文官方目录标题，目录结构变化时显式失败。 */
export function parseMiniMaxModelCatalog(markdown: string): CatalogModel[] {
  const lines = markdown.split(/\r?\n/);
  const availableStart = lines.findIndex((line) => AVAILABLE_HEADING.test(line.trim()));
  const historicalStart = lines.findIndex((line) => HISTORICAL_HEADING.test(line.trim()));
  if (availableStart < 0 || historicalStart <= availableStart) {
    throw new Error('MiniMax 模型目录结构变化：找不到可用模型与历史模型章节');
  }
  const models = [
    ...parseCatalogRows(lines, availableStart, historicalStart, 'available'),
    ...parseCatalogRows(lines, historicalStart, lines.length, 'historical'),
  ];
  if (models.length === 0) throw new Error('MiniMax 模型目录解析结果为空');
  const seen = new Set<string>();
  for (const model of models) {
    const key = `${model.source_listing}\0${model.model_id}`;
    if (seen.has(key)) throw new Error(`MiniMax 模型目录存在重复记录：${model.model_id}`);
    seen.add(key);
  }
  return models.sort((a, b) => {
    const left = `${a.model_id}\0${a.source_listing}\0${a.source_category}`;
    const right = `${b.model_id}\0${b.source_listing}\0${b.source_category}`;
    return left < right ? -1 : left > right ? 1 : 0;
  });
}

function parseMusicModelOverview(markdown: string): MiniMaxMarketFacts['music_model_overview'] {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => /^###\s+(?:Music|音乐模型)\s*$/i.test(line.trim()));
  if (start < 0) throw new Error('MiniMax 音乐模型概览结构变化：找不到音乐章节');
  const nextSection = lines.findIndex((line, index) => index > start && /^###\s+/.test(line.trim()));
  const section = lines.slice(start + 1, nextSection < 0 ? lines.length : nextSection);
  const legacyStart = section.findIndex((line) => /^\s*>?\s*(?:\*\*)?(?:Legacy Models|历史模型)(?:\*\*)?\s*$/i.test(line.trim()));
  const extractIds = (rows: readonly string[]) => rows.flatMap((line) => {
    const cells = cellsFor(line.replace(/^\s*>\s?/, '').trim());
    if (!cells) return [];
    const id = modelIdFromCell(cells[0] ?? '').trim().toLowerCase();
    return /^(?:music-\d+(?:\.\d+)?(?:-free)?|music-cover(?:-free)?)$/.test(id) ? [id] : [];
  });
  const current = extractIds(section.slice(0, legacyStart < 0 ? section.length : legacyStart));
  const legacy = legacyStart < 0 ? [] : extractIds(section.slice(legacyStart + 1));
  if (current.length === 0) throw new Error('MiniMax 音乐模型概览结构变化：当前型号表为空');
  const notice = section.map((line) => line.replace(/^\s*>\s?/, '').trim())
    .find((line) => /(?:new users|新用户)/i.test(line) && /(?:existing paying users|历史付费用户|旧有付费用户)/i.test(line));
  return {
    current_model_ids: [...new Set(current)].sort(),
    legacy_model_ids: [...new Set(legacy)].sort(),
    ...(notice ? { access_notice: cleanCell(notice) } : {}),
  };
}

function parseMarkdownTables(markdown: string): MarkdownTable[] {
  const lines = markdown.split(/\r?\n/).map((line) => line.replace(/^\s*>\s?/, ''));
  const result: MarkdownTable[] = [];
  let section = '';
  for (const match of markdown.matchAll(/<table\b[^>]*>([\s\S]*?)<\/table>/gi)) {
    const body = match[1] ?? '';
    const rawRows = [...body.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
    const spans = new Map<number, { remaining: number; value: string }>();
    const rows = rawRows.map((rawRow, rowIndex) => {
      const rawCells = [...(rawRow[1] ?? '').matchAll(/<(th|td)\b([^>]*)>([\s\S]*?)<\/\1>/gi)];
      const row: string[] = [];
      let column = 0;
      const placeSpan = (target: number) => {
        const span = spans.get(target);
        if (!span) return false;
        row[target] = span.value;
        span.remaining -= 1;
        if (span.remaining <= 0) spans.delete(target);
        return true;
      };
      for (const rawCell of rawCells) {
        while (placeSpan(column)) column += 1;
        const value = cleanCell((rawCell[3] ?? '').replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]+>/g, ' ')
          .replace(/&nbsp;|&#160;/gi, ' ').replace(/&amp;/gi, '&').replace(/&gt;/gi, '>')
          .replace(/&lt;/gi, '<').replace(/&yen;|&#165;/gi, '¥'));
        row[column] = value;
        const rowspan = Number(rawCell[2]?.match(/\browspan\s*=\s*["']?(\d+)/i)?.[1] ?? 1);
        if (rowspan > 1) spans.set(column, { remaining: rowspan - 1, value });
        column += 1;
      }
      if (rowIndex > 0) while (placeSpan(column)) column += 1;
      return row;
    }).filter((row) => row.length > 0);
    if (rows.length < 2) continue;
    const headers = rows[0] ?? [];
    const dataRows = rows.slice(1).filter((row) => row.some(Boolean));
    if (dataRows.length) result.push({ section, headers, rows: dataRows });
  }
  for (let index = 0; index < lines.length; index += 1) {
    const heading = lines[index]?.match(/^#{1,4}\s+(.+)$/);
    if (heading) section = cleanCell(heading[1] ?? '');
    const boldSection = lines[index]?.match(/^\*\*([^*]+)\*\*\\?\*?\s*$/);
    if (boldSection) section = cleanCell(boldSection[1] ?? '');
    const headers = cellsFor(lines[index] ?? '');
    const separator = cellsFor(lines[index + 1] ?? '');
    if (!headers || !separator || !isSeparator(separator)) continue;
    const rows: string[][] = [];
    index += 2;
    for (; index < lines.length; index += 1) {
      const row = cellsFor(lines[index] ?? '');
      if (!row) break;
      if (!isSeparator(row)) rows.push(row.map(cleanCell));
    }
    if (rows.length) result.push({ section, headers: headers.map(cleanCell), rows });
  }
  return result;
}

function mcpToolParameters(markdown: string, toolName: string): ParameterSpec[] {
  const table = parseMarkdownTables(markdown).find(({ section, headers }) =>
    section.replaceAll('\\_', '_').toLowerCase() === toolName.toLowerCase() &&
    headers.some((header) => /^(?:parameter|参数)$/i.test(header)) &&
    headers.some((header) => /^(?:type|类型)$/i.test(header)) &&
    headers.some((header) => /^(?:required|必填|必需)$/i.test(header)),
  );
  if (!table) return [];

  const nameIndex = table.headers.findIndex((header) => /^(?:parameter|参数)$/i.test(header));
  const typeIndex = table.headers.findIndex((header) => /^(?:type|类型)$/i.test(header));
  const requiredIndex = table.headers.findIndex((header) => /^(?:required|必填|必需)$/i.test(header));
  const descriptionIndex = table.headers.findIndex((header) => /^(?:description|说明)$/i.test(header));
  return table.rows.flatMap((row): ParameterSpec[] => {
    const name = cleanCell(row[nameIndex] ?? '').replaceAll('\\_', '_').replaceAll('`', '').trim();
    const sourceType = cleanCell(row[typeIndex] ?? '').toLowerCase();
    const type = ['string', 'integer', 'number', 'boolean', 'object', 'array'].find((candidate) => candidate === sourceType);
    if (!name || !type) return [];
    const requiredText = cleanCell(row[requiredIndex] ?? '');
    const description = cleanCell(row[descriptionIndex] ?? '');
    return [{
      name,
      type: type as ParameterSpec['type'],
      required: /^(?:✓|yes|是|required)$/i.test(requiredText),
      ...(description ? { description } : {}),
      route_mappings: [name],
    }];
  });
}

/** Extract every tier and its usage copy from the market's official M Plan table. */
export function parseMiniMaxPlanDescriptions(
  market: 'cn' | 'global',
  markdown: string,
): MiniMaxMarketFacts['plan_descriptions'] {
  const table = parseMarkdownTables(markdown).find(({ headers }) =>
    headers.some((header) => /^(?:档位|tier)$/i.test(header)) &&
    headers.some((header) => /^(?:使用参考|usage guide)$/i.test(header)),
  );
  if (!table) throw new Error(`MiniMax ${market} M Plan 文档结构变化：找不到档位使用参考表`);
  const tierIndex = table.headers.findIndex((header) => /^(?:档位|tier)$/i.test(header));
  const descriptionIndex = table.headers.findIndex((header) => /^(?:使用参考|usage guide)$/i.test(header));
  const tiers = new Map<string, { description: string; rowIndex: number }>();
  for (const [rowIndex, row] of table.rows.entries()) {
    const tier = cleanCell(row[tierIndex] ?? '').trim();
    if (!tier) continue;
    const description = cleanCell(row[descriptionIndex] ?? '');
    if (!description || tiers.has(tier.toLowerCase())) throw new Error(`MiniMax ${market} M Plan ${tier} 使用参考为空或重复`);
    if (market === 'cn' ? !/[\u3400-\u9fff]/.test(description) : /[\u3400-\u9fff]/.test(description)) {
      throw new Error(`MiniMax ${market} M Plan ${tier} 文案与来源市场语言不符`);
    }
    tiers.set(tier.toLowerCase(), { description, rowIndex });
  }
  if (!tiers.size) throw new Error(`MiniMax ${market} M Plan 使用参考表没有可解析的套餐行`);
  const sourceId = `minimax-${market}-m-plan-intro`;
  const section = /usage limits/i.test(table.section) ? 'usage-limits' : '用量额度';
  return [...tiers.entries()].map(([normalizedTier, { description, rowIndex }]) => ({
    tier: cleanCell(table.rows[rowIndex]?.[tierIndex] ?? normalizedTier).trim(),
    description,
    source_id: sourceId,
    locator: `#${section}/table/${rowIndex + 1}`,
  }));
}

function locateModel(text: string, modelIds: readonly string[]): string | undefined {
  const normalized = text.toLocaleLowerCase();
  return [...modelIds]
    .sort((a, b) => b.length - a.length)
    .find((modelId) => modelPattern(modelId).test(normalized));
}

/** 返回单元格中明确列出的模型 ID；同一价格行可能同时覆盖多个型号。 */
function locateModels(text: string, modelIds: readonly string[]): string[] {
  const matches = modelIds.flatMap((modelId) => {
    const match = modelPattern(modelId).exec(text);
    return match?.index === undefined ? [] : [{ modelId, start: match.index, end: match.index + match[0].length }];
  }).sort((left, right) => left.start - right.start || (right.end - right.start) - (left.end - left.start));
  const selected: typeof matches = [];
  for (const match of matches) {
    if (!selected.some((item) => match.start < item.end && item.start < match.end)) selected.push(match);
  }
  return selected.map(({ modelId }) => modelId);
}

function modelPattern(modelId: string): RegExp {
  const parts = modelId.split(/[-_]/).map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return new RegExp(`(^|[^a-z0-9])${parts.join('[\\s._-]*')}(?![a-z0-9.])`, 'i');
}

function pricingRows(markdown: string, modelIds: readonly string[]): Map<string, MiniMaxModelFact['pricing_rows']> {
  const found = new Map<string, NonNullable<MiniMaxModelFact['pricing_rows']>[number][]>();
  const currency = pricingCurrency(markdown);
  for (const table of parseMarkdownTables(markdown)) {
    const headers = table.headers;
    const modelColumn = headers.findIndex((header) => /model|^模型$|模型名称|模型名|模型\/接口|接口/i.test(header));
    let previousModelId: string | undefined;
    for (const values of table.rows) {
      const explicitModelIds = modelColumn >= 0 ? locateModels(values[modelColumn] ?? '', modelIds) : [];
      const rowModelIds = explicitModelIds.length > 0 ? explicitModelIds : [locateModel(values.join(' '), modelIds) ??
        (/(?:语音识别|speech[- ]to[- ]text|\basr\b)/i.test(table.section) && /speech[- ]to[- ]text/i.test(values.join(' '))
          ? modelIds.find((id) => /^asr-/i.test(id))
          : undefined)].filter((modelId): modelId is string => Boolean(modelId));
      const modelIdsForRow = rowModelIds.length > 0
        ? rowModelIds
        : modelColumn >= 0 && !values[modelColumn] && previousModelId
          ? [previousModelId]
          : [];
      if (modelIdsForRow.length === 0) continue;
      previousModelId = modelIdsForRow.at(-1);
      const normalizedRates = headers.flatMap((header, index) => {
        const sourceValue = values[index] ?? '';
        const rowText = values.join(' ');
        const metric = metricForHeader(header, table.section, rowText);
        const billing = billingUnitForHeader(header, sourceValue);
        if (!metric || !billing) return [];
        const amount = /^(?:免费|free)$/i.test(sourceValue.trim()) ? '0' : unambiguousDecimal(sourceValue);
        return [{
          metric,
          unit: billing.unit,
          quantity: billing.quantity,
          ...(amount ? { amount_decimal: amount } : {}),
          ...(listAmount(sourceValue) ? { list_amount_decimal: listAmount(sourceValue) } : {}),
          source_header: header,
          source_value: sourceValue,
        }];
      });
      const symbol = [...headers, ...values].join(' ').match(/US\$|\$|¥|￥|元/)?.[0];
      const pricingRow = {
        section: table.section,
        headers,
        values,
        ...(currency.code ? { currency_code: currency.code } : {}),
        ...(symbol ? { currency_symbol: symbol } : {}),
        ...(currency.evidence ? { currency_evidence: currency.evidence } : {}),
        normalized_rates: normalizedRates,
      };
      for (const modelId of modelIdsForRow) {
        const list = found.get(modelId) ?? [];
        list.push(pricingRow);
        found.set(modelId, list);
      }
    }
  }
  return found;
}

function pricingCurrency(markdown: string): { code?: 'CNY' | 'USD'; evidence?: string } {
  const usd = markdown.match(/all prices are in USD\.?/i)?.[0];
  if (usd) return { code: 'USD', evidence: usd };
  const cny = markdown.match(/(?:以下|所有)价格均以人民币计价[。.]?/)?.[0];
  if (cny) return { code: 'CNY', evidence: cny };
  return {};
}

function metricForHeader(header: string, section = '', rowText = ''): string | undefined {
  const value = header.toLocaleLowerCase();
  const isPriceColumn = /price|价格|单价|费率|cost/i.test(value);
  const context = `${section} ${rowText}`.toLocaleLowerCase();
  const billingText = `${header} ${rowText}`.toLocaleLowerCase();
  if (/cache.*write|缓存.*写/.test(value)) return 'cache_write';
  if (/cach(?:e|ing)|缓存/.test(value)) return 'cache_read';
  if (/input.*video|输入.*视频/.test(value)) return 'input_video';
  if (/input.*image|输入.*图像|输入.*图片/.test(value)) return 'input_image';
  if (isPriceColumn && /(?:图像|图片|image)/i.test(context) && /元\s*\/\s*张|per\s*image|每张/i.test(billingText)) return 'generated_image';
  if (/input|输入/.test(value)) return 'input';
  if (/output.*video|输出.*视频/.test(value)) return 'generated_video';
  if (isPriceColumn && /小时|per\s*hour/i.test(billingText) && /语音识别|speech recognition|speech[- ]to[- ]text|\basr\b/i.test(context)) return 'input_audio_hour';
  if (isPriceColumn && /(?:万字符|characters?)/i.test(billingText) && /语音|音频|speech|audio|tts|t2a/i.test(context)) return 'generated_character';
  if (isPriceColumn && /(?:元\s*\/\s*首|per\s*song)/i.test(billingText) && /音乐|\bmusic\b/i.test(context)) return 'generated_audio';
  if (/output|输出/.test(value)) return 'output';
  return undefined;
}

function billingUnitForHeader(header: string, value = ''): { unit: string; quantity: number } | undefined {
  const combined = `${header} ${value}`;
  if (/百万\s*tokens?|per\s*M(?:illion)?\s*tokens?|\/\s*M\s*tokens?/i.test(combined)) {
    return { unit: 'per_1m_tokens', quantity: 1 };
  }
  if (/per\s*second|每秒|元\/视频/i.test(combined)) return { unit: 'per_second', quantity: 1 };
  if (/小时|per\s*hour/i.test(combined)) return { unit: 'per_input_audio_hour', quantity: 1 };
  if (/per\s*image|每张|元\/张/i.test(combined)) return { unit: 'per_image', quantity: 1 };
  if (/per\s*song|元\s*\/\s*首/i.test(combined)) return { unit: 'per_song', quantity: 1 };
  if (/万字符/.test(combined) || /per\s*10k\s*characters?/i.test(combined)) return { unit: 'per_10k_characters', quantity: 1 };
  if (/(?:per|\/)\s*M(?:illion)?\s*characters?/i.test(combined)) return { unit: 'per_1m_characters', quantity: 1 };
  return undefined;
}

function unambiguousDecimal(raw: string): string | undefined {
  const active = raw.replace(/~~[^~]*~~/g, '').replace(/\\\$/g, '$');
  const songPrice = active.match(/(?:US\$|\$|¥|￥)?\s*(\d+(?:\.\d+)?)\s*\/\s*(?:up-to-5\s*minutes?\s+music|每首)/i);
  if (songPrice) return songPrice[1];
  const amounts = active.match(/\d+(?:,\d{3})*(?:\.\d+)?/g) ?? [];
  if (amounts.length !== 1) return undefined;
  return amounts[0]?.replace(/,/g, '');
}

function listAmount(raw: string): string | undefined {
  const value = raw.match(/~~\s*(?:(?:US\$|\$|¥|￥)\s*)?([\d,]+(?:\.\d+)?)\s*~~/);
  return value?.[1]?.replace(/,/g, '');
}

function factsForMarket(
  market: 'cn' | 'global',
  sources: readonly IngestSource[],
  docs: ReadonlyMap<string, string>,
): MiniMaxMarketFacts {
  const source = (suffix: string): IngestSource => {
    const match = sources.find((candidate) => candidate.id === `minimax-${market}-${suffix}`);
    if (!match) throw new Error(`MiniMax ${market} 来源缺失：${suffix}`);
    return match;
  };
  const optionalSource = (suffix: string): string | undefined => {
    const match = sources.find((candidate) => candidate.id === `minimax-${market}-${suffix}`);
    return match ? docs.get(match.id) : undefined;
  };
  const catalog = source('model-catalog');
  return parseMiniMaxMarketFacts(market, {
    catalog: docs.get(catalog.id) ?? '',
    pricing: docs.get(source('pricing').id) ?? '',
    ...(optionalSource('model-overview') ? { music_model_overview: optionalSource('model-overview') } : {}),
    ...(optionalSource('video-api') ? { video_api: optionalSource('video-api') } : {}),
    ...(optionalSource('asr-api') ? { asr_api: optionalSource('asr-api') } : {}),
    ...(optionalSource('anthropic-api') ? { anthropic_api: optionalSource('anthropic-api') } : {}),
    ...(optionalSource('function-call-api') ? { function_call_api: optionalSource('function-call-api') } : {}),
    ...(optionalSource('responses-api') ? { responses_api: optionalSource('responses-api') } : {}),
    ...(optionalSource('file-upload-api') ? { file_upload_api: optionalSource('file-upload-api') } : {}),
    ...(optionalSource('mcp-guide') ? { mcp_guide: optionalSource('mcp-guide') } : {}),
    ...(optionalSource('m-plan-page') ? { m_plan_page: optionalSource('m-plan-page') } : {}),
    ...(optionalSource('m-plan-intro') ? { m_plan_intro: optionalSource('m-plan-intro') } : {}),
  });
}

/** 将单一市场的官方文档映射为语义候选，不合并中英文站字段。 */
export function parseMiniMaxMarketFacts(
  market: 'cn' | 'global',
  documents: MiniMaxMarketDocuments,
): MiniMaxMarketFacts {
  const models = parseMiniMaxModelCatalog(documents.catalog);
  const pricingIds = [...documents.pricing.matchAll(/\bMiniMax-H3(?:-[A-Za-z0-9.-]+)?\b/gi)]
    .map((match) => match[0] ?? '');
  // 定价表本身也是官方模型名来源；保留目录暂未列出的历史音乐型号，避免丢失其历史价格。
  const musicPricingIds = [...documents.pricing.matchAll(/\b(?:music-\d+(?:\.\d+)?\+?(?:-free)?|music-cover(?:-free)?)(?=$|[^a-z0-9])/gi)]
    .map((match) => match[0] ?? '');
  const musicModelOverview = documents.music_model_overview
    ? parseMusicModelOverview(documents.music_model_overview)
    : { current_model_ids: [], legacy_model_ids: [] };
  const modelIds = [...new Set([...models.map((model) => model.model_id), ...pricingIds, ...musicPricingIds])];
  const prices = pricingRows(documents.pricing, modelIds);
  const serviceCapabilities: MiniMaxMarketFacts['capabilities'][number][] = [];
  const planMultipliers: MiniMaxMarketFacts['plan_multipliers'][number][] = [];
  for (const table of parseMarkdownTables(documents.m_plan_page ?? '')) {
    const tierIndex = table.headers.findIndex((header) => /^(?:档位|tier)$/i.test(header));
    if (tierIndex < 0) continue;
    for (const row of table.rows) {
      const tier = cleanCell(row[tierIndex] ?? '').trim();
      const multiplier = row.flatMap((cell) => [...cleanCell(cell).matchAll(/(\d+(?:\.\d+)?)\s*(?:倍|×|x)/gi)].map((match) => match[1]!))[0];
      if (tier && multiplier) planMultipliers.push({ tier, multiplier });
    }
  }
  const planDescriptions = documents.m_plan_intro
    ? parseMiniMaxPlanDescriptions(market, documents.m_plan_intro)
    : [];
  if (/\bPOST\s+`?\/v1\/files\/upload`?/i.test(documents.file_upload_api ?? '')) {
    serviceCapabilities.push({
      id: 'file-management',
      kind: 'file_storage',
      operation_id: 'file-upload',
      operation_kind: 'file_upload',
      input: [{ name: 'file', kind: 'file', required: true }],
      parameters: [{
        name: 'purpose',
        type: 'string',
        required: true,
        enum: ['voice_clone', 'prompt_audio', 't2a_async_input', 'video_understanding', 'video_generation_input'],

        route_mappings: ['multipart/form-data.purpose'],
      }],
      output: [{ kind: 'structured', fields: ['file.file_id', 'file.bytes', 'file.created_at', 'file.filename', 'file.purpose', 'base_resp.status_code', 'base_resp.status_msg'] }],
      source_suffix: 'file-upload-api',
      requires_plan: false,
      method: 'POST',
      path: '/files/upload',
    });
  }
  const mcpGuide = documents.mcp_guide ?? '';
  if (/\bMCP\b/i.test(mcpGuide) && /\bweb_search\b/.test(mcpGuide)) {
    const parameters = mcpToolParameters(mcpGuide, 'web_search');
    const query = parameters.find(({ name }) => name === 'query');
    serviceCapabilities.push({
      id: 'web-search',
      kind: 'web_search',
      operation_id: 'web-search-mcp',
      operation_kind: 'web_search',
      ...(query ? { input: [{ name: query.name, kind: 'text' as const, required: query.required }] } : {}),
      ...(parameters.length ? { parameters } : {}),
      output: [{ kind: 'structured' }],
      source_suffix: 'mcp-guide',
      requires_plan: true,
    });
  }
  if (/\bMCP\b/i.test(mcpGuide) && /\bunderstand_image\b/.test(mcpGuide)) {
    const parameters = mcpToolParameters(mcpGuide, 'understand_image');
    const inputs: CapabilityInput[] = parameters.flatMap(({ name, required }): CapabilityInput[] => {
      if (name === 'prompt') return [{ name, kind: 'text', required }];
      if (name === 'image_source') return [{ name, kind: 'image', required }];
      return [];
    });
    serviceCapabilities.push({
      id: 'image-understanding',
      kind: 'image_understanding',
      operation_id: 'understand-image-mcp',
      operation_kind: 'image_understanding',
      ...(inputs.length ? { input: inputs } : {}),
      ...(parameters.length ? { parameters } : {}),
      output: [{ kind: 'structured' }],
      source_suffix: 'mcp-guide',
      requires_plan: true,
    });
  }

  return {
    market,
    plan_multipliers: planMultipliers,
    plan_descriptions: planDescriptions,
    capabilities: serviceCapabilities,
    music_model_overview: musicModelOverview,
    models: [
      ...models.map((model) => ({ ...model, pricing_rows: prices.get(model.model_id) ?? [] })),
      ...[...prices.entries()]
        .filter(([modelId]) => !models.some((model) => model.model_id === modelId))
        .map(([modelId, pricing_rows]) => ({
          model_id: modelId,
          source_category: /asr-/i.test(modelId) ? '语音识别' : '官方价格表列示',
          source_listing: 'price_listed' as const,
          pricing_rows,
        })),
    ].sort((left, right) => left.model_id.localeCompare(right.model_id)),
  };
}

function semanticFingerprint(facts: readonly MiniMaxMarketFacts[]): string {
  return `sha256:${createHash('sha256').update(JSON.stringify(facts)).digest('hex')}`;
}

export function toMiniMaxIR(documents: readonly CapturedDocument[], markets: readonly MiniMaxMarketFacts[]): ProviderCollectionIR {
  const catalogIds: Record<string, string[]> = {};
  const pricingIds: Record<string, string[]> = {};
  const records: Record<string, unknown[]> = {};
  for (const market of markets) {
    const catalogSource = `minimax-${market.market}-model-catalog`;
    const pricingSource = `minimax-${market.market}-pricing`;
    const musicOverviewSource = `minimax-${market.market}-model-overview`;
    const catalogModels = market.models.filter(({ source_listing }) => source_listing === 'available' || source_listing === 'historical');
    catalogIds[catalogSource] = catalogModels.map(({ model_id }) => model_id);
    pricingIds[pricingSource] = market.models.filter(({ pricing_rows }) => pricing_rows.length > 0).map(({ model_id }) => model_id);
    records[catalogSource] = catalogModels.map(({ model_id, source_category, source_listing, source_status }) => ({ model_id, source_category, source_listing, source_status }));
    records[pricingSource] = market.models.flatMap(({ model_id, pricing_rows }) => pricing_rows.map((pricing_row) => ({ model_id, pricing_row })));
    catalogIds[musicOverviewSource] = [...market.music_model_overview.current_model_ids, ...market.music_model_overview.legacy_model_ids];
    records[musicOverviewSource] = [{
      current_model_ids: market.music_model_overview.current_model_ids,
      legacy_model_ids: market.music_model_overview.legacy_model_ids,
      ...(market.music_model_overview.access_notice ? { access_notice: market.music_model_overview.access_notice } : {}),
    }];
    const planIntroSource = `minimax-${market.market}-m-plan-intro`;
    records[planIntroSource] = [...market.plan_descriptions];
  }
  const reviewItems: ReviewItem[] = [{
    id: 'minimax-observations-await-complete-domain-mapping',
    kind: 'unsupported_mapping',
    message: '目录状态、Token 价格、视频/语音 API、协议参数和计划权益仍需按市场映射到 IR 领域字段；当前统一候选只保留来源观察。',
    evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: `market=${source.market ?? 'unknown'}` })),
  }];
  return buildDocumentObservationIR({
    providerId: 'minimax', documents, modelIdsBySource: catalogIds, recordsBySource: records,
    coverageBySource: Object.fromEntries(documents.filter(({ source }) => /model-catalog|pricing|api|guide|m-plan/.test(source.id)).map(({ source }) => [
      source.id,
      source.id.endsWith('-m-plan-intro') && markets.some((market) => market.plan_descriptions.length > 0 && market.plan_descriptions[0]?.source_id === source.id)
        ? { status: 'complete' as const, record_count: markets.find((market) => market.plan_descriptions[0]?.source_id === source.id)?.plan_descriptions.length ?? 0, record_unit: 'M Plan tier descriptions', note: '套餐档位和使用参考按官方表格实际行提取。' }
        : { status: 'partial' as const, note: '适配器抽取的原始型号/价格/接口记录仍未全部映射为通用领域事实。' },
    ])),
    collectionNotes: ['中国站与国际站事实分开保留。', '模型只从目录与价格来源收集；模型规格和 API 支持由人工维护或按 Service 独立记录。', '官方价格原文和转换费率同时保存；未核对过的计量条件不自动提升为 PriceFact。'],
    reviewItems,
  });
}

function renderMiniMaxIRReview(candidate: CandidateEnvelope<ProviderCollectionIR>): string {
  return [
    '# MiniMax IR 观察候选', '',
    `- IR 指纹：\`${candidate.candidate_hash}\``,
    `- 来源快照：${candidate.sources.length} 份`,
    '- 当前输出保留 CN/Global 目录、价格和 API 文档观察，不投影领域字段。',
    '', '## 待人工核对', '', ...candidate.current.review_items.map(({ message }) => `- ${message}`),
    '', '## 来源快照', '', ...candidate.sources.map(({ source_id, request_url }) => `- \`${source_id}\`：${request_url}`), '',
  ].join('\n');
}

async function writeJsonAtomically(filePath: string, value: unknown): Promise<void> {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${JSON.stringify(value, null, 2)}\n`, { flag: 'wx' });
  try {
    await rename(tempPath, filePath);
  } catch (error) {
    await rm(tempPath, { force: true });
    throw error;
  }
}

async function writeTextAtomically(filePath: string, value: string): Promise<void> {
  const tempPath = `${filePath}.${process.pid}.tmp`;
  await writeFile(tempPath, `${value.trimEnd()}\n`, { flag: 'wx' });
  try {
    await rename(tempPath, filePath);
  } catch (error) {
    await rm(tempPath, { force: true });
    throw error;
  }
}

async function createReviewFile(filePath: string, value: unknown): Promise<void> {
  let handle: Awaited<ReturnType<typeof open>>;
  try {
    handle = await open(filePath, 'wx');
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'EEXIST') return;
    throw error;
  }
  try {
    await handle.writeFile(`${JSON.stringify(value, null, 2)}\n`, 'utf8');
  } finally {
    await handle.close();
  }
}

type MiniMaxReviewCandidate = CandidateEnvelope<readonly MiniMaxMarketFacts[]>;

interface MiniMaxReviewDiff {
  readonly change: '新增' | '更新' | '消失（待核实）';
  readonly market: string;
  readonly modelId: string;
  readonly field: string;
  readonly previous: unknown;
  readonly current: unknown;
}

function reportCell(value: unknown): string {
  const text = value === undefined ? '未记录' : value === null ? 'null' : String(value);
  const escaped = text.split(/\r?\n/).map((line) => line
    .replace(/&/g, '&amp;')
    .replace(/\$/g, '&#36;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\|/g, '&#124;')
    .replace(/`/g, '&#96;')
    .replace(/\*/g, '&#42;')
    .replace(/_/g, '&#95;')
    .replace(/\[/g, '&#91;')
    .replace(/\]/g, '&#93;'))
    .join('<br>');
  return escaped;
}

function reportValue(value: unknown): string {
  if (value === undefined) return '未记录';
  if (value === null) return 'null';
  return typeof value === 'string' ? value : JSON.stringify(value, null, 2);
}

function collectMiniMaxDiffs(
  previous: readonly MiniMaxMarketFacts[] | null,
  current: readonly MiniMaxMarketFacts[],
): MiniMaxReviewDiff[] {
  const before = new Map((previous ?? []).flatMap((market) => market.models.map((model) => [
    `${market.market}\0${model.model_id}`,
    { market: market.market, model },
  ] as const)));
  const after = new Map(current.flatMap((market) => market.models.map((model) => [
    `${market.market}\0${model.model_id}`,
    { market: market.market, model },
  ] as const)));
  const diffs: MiniMaxReviewDiff[] = [];

  const addLeaves = (
    change: MiniMaxReviewDiff['change'],
    market: string,
    modelId: string,
    field: string,
    value: unknown,
    side: 'previous' | 'current',
  ): void => {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        diffs.push({ change, market, modelId, field, previous: side === 'previous' ? value : undefined, current: side === 'current' ? value : undefined });
        return;
      }
      value.forEach((item, index) => addLeaves(change, market, modelId, `${field}[${index}]`, item, side));
      return;
    }
    if (value !== null && typeof value === 'object') {
      const entries = Object.entries(value);
      if (entries.length === 0) {
        diffs.push({ change, market, modelId, field, previous: side === 'previous' ? value : undefined, current: side === 'current' ? value : undefined });
        return;
      }
      for (const [key, item] of entries) addLeaves(change, market, modelId, `${field}.${key}`, item, side);
      return;
    }
    diffs.push({
      change,
      market,
      modelId,
      field,
      previous: side === 'previous' ? value : undefined,
      current: side === 'current' ? value : undefined,
    });
  };

  const compare = (market: string, modelId: string, field: string, oldValue: unknown, newValue: unknown): void => {
    if (JSON.stringify(oldValue) === JSON.stringify(newValue)) return;
    if ((oldValue === undefined || oldValue === null) && newValue !== undefined && newValue !== null) {
      addLeaves('新增', market, modelId, field, newValue, 'current');
      return;
    }
    if (newValue === undefined && oldValue !== undefined) {
      addLeaves('消失（待核实）', market, modelId, field, oldValue, 'previous');
      return;
    }
    if (oldValue !== null && newValue !== null && typeof oldValue === 'object' && typeof newValue === 'object' &&
      !Array.isArray(oldValue) === !Array.isArray(newValue)) {
      const oldEntries = Array.isArray(oldValue) ? oldValue.map((value, index) => [String(index), value] as const) : Object.entries(oldValue);
      const newEntries = Array.isArray(newValue) ? newValue.map((value, index) => [String(index), value] as const) : Object.entries(newValue);
      const oldMap = new Map(oldEntries);
      const newMap = new Map(newEntries);
      for (const key of [...new Set([...oldMap.keys(), ...newMap.keys()])].sort()) {
        const oldEntry = oldMap.get(key);
        const newEntry = newMap.get(key);
        const childField = Array.isArray(oldValue) ? `${field}[${key}]` : `${field}.${key}`;
        if (oldEntry === undefined && newEntry !== undefined) addLeaves('新增', market, modelId, childField, newEntry, 'current');
        else if (newEntry === undefined && oldEntry !== undefined) addLeaves('消失（待核实）', market, modelId, childField, oldEntry, 'previous');
        else compare(market, modelId, childField, oldEntry, newEntry);
      }
      return;
    }
    diffs.push({ change: '更新', market, modelId, field, previous: oldValue, current: newValue });
  };

  for (const key of [...new Set([...before.keys(), ...after.keys()])].sort()) {
    const oldEntry = before.get(key);
    const newEntry = after.get(key);
    if (!oldEntry && newEntry) {
      addLeaves('新增', newEntry.market, newEntry.model.model_id, 'model', newEntry.model, 'current');
    } else if (oldEntry && !newEntry) {
      diffs.push({
        change: '消失（待核实）', market: oldEntry.market, modelId: oldEntry.model.model_id,
        field: '模型记录', previous: `${oldEntry.model.source_category} / ${oldEntry.model.source_listing}`, current: undefined,
      });
    } else if (oldEntry && newEntry) {
      compare(newEntry.market, newEntry.model.model_id, 'model', oldEntry.model, newEntry.model);
    }
  }
  return diffs;
}

function renderMiniMaxReviewMarkdown(candidate: MiniMaxReviewCandidate): string {
  const diffs = collectMiniMaxDiffs(candidate.previous, candidate.current);
  const additions = diffs.filter((diff) => diff.change === '新增').length;
  const updates = diffs.filter((diff) => diff.change === '更新').length;
  const suspectedMissing = diffs.filter((diff) => diff.change === '消失（待核实）').length;
  const lines = [
    '# MiniMax 数据变更评审表',
    '',
    `- Provider：\`${candidate.provider_id}\``,
    `- 候选类型：\`${candidate.candidate_kind}\``,
    `- 观察时间（UTC）：${candidate.observed_at}`,
    `- 候选指纹：\`${candidate.candidate_hash}\``,
    `- 前一候选指纹：\`${candidate.previous_candidate_hash ?? '首次观察'}\``,
    `- 新增字段：${additions} 项；更新字段：${updates} 项；缺席待核实：${suspectedMissing} 项`,
    '',
    '## 本次变化',
    '',
    `仅列出相对上一份已观察数据新增或变化的字段，共 ${diffs.length} 项。新模型或此前未取得的字段会完整列出本次取得的内容；未变化的数据不重复展开。列表缺席只表示待核实，不构成退役结论。`,
    '',
    '| 变化 | 市场 | 模型 ID | 字段 | 旧值 | 新值 |',
    '|---|---|---|---|---|---|',
  ];
  if (diffs.length === 0) lines.push('| 无 | — | — | — | — | — |');
  else {
    for (const diff of diffs) {
      lines.push(`| ${diff.change} | ${reportCell(diff.market)} | ${reportCell(diff.modelId)} | ${reportCell(diff.field)} | ${reportCell(reportValue(diff.previous))} | ${reportCell(reportValue(diff.current))} |`);
    }
  }

  lines.push('', '## 来源快照', '', '| 市场 | 来源 | 官方页面 | 取回时间（UTC） | HTTP | 内容 SHA-256 |', '|---|---|---|---|---:|---|');
  for (const source of candidate.sources) {
    lines.push(`| ${reportCell(source.market ?? '未分市场')} | ${reportCell(source.source_name)} | ${reportCell(source.request_url)} | ${reportCell(source.retrieved_at)} | ${source.http_status} | \`${reportCell(source.content_hash)}\` |`);
  }
  lines.push('', '> 本文件供人工评审；候选 JSON 保留完整机器可读结构。自动采集不等于核验或发布。');
  return renderCandidateReview(candidate, `${lines.join('\n')}\n`);
}

/** 两地来源分别形成候选事实，抓取时间和快照哈希不参与语义去重。 */
export async function collectMiniMax(options: { readonly repoRoot: string }): Promise<MiniMaxCollectResult> {
  const sources = INGEST_SOURCES.filter((source) => source.provider_id === 'minimax' && source.adapter_id === 'minimax');
  const expected = new Set(['cn', 'global']);
  if (new Set(sources.map((source) => source.market).filter(Boolean)).size !== expected.size) {
    throw new Error('MiniMax 中英文站来源配置不完整');
  }

  const captured: CapturedDocument[] = await Promise.all(sources.map(async (source) => {
    const snapshot = await captureSnapshot(source, options);
    const body = await readFile(path.join(options.repoRoot, 'data/upstream/snapshots', source.id, snapshot.metadata.body_file), 'utf8');
    return { source, metadata: snapshot.metadata, body };
  }));
  const docs = new Map(captured.map(({ source, body }) => [source.id, body]));
  const metadata: SnapshotMetadata[] = captured.map(({ metadata: snapshotMetadata }) => snapshotMetadata);

  const facts = (['cn', 'global'] as const).map((market) => factsForMarket(market, sources, docs));
  const irOutput = await writeProviderCollectionCandidate({
    repoRoot: options.repoRoot,
    providerId: 'minimax',
    documents: captured,
    current: toMiniMaxIR(captured, facts),
    modelCount: new Set(facts.flatMap(({ models }) => models.map(({ model_id }) => model_id))).size,
    renderReview: renderMiniMaxIRReview,
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
  const hash = semanticFingerprint(facts);
  const candidateDir = path.join(options.repoRoot, 'data/candidates/minimax');
  const statePath = path.join(candidateDir, 'current-supply-state.json');
  const reviewPath = path.join(candidateDir, 'reviews', `${hash.slice(7)}.json`);
  let previous: { candidate_hash?: string; semantic_facts?: readonly MiniMaxMarketFacts[]; review_markdown_file?: string } = {};
  try {
    previous = JSON.parse(await readFile(statePath, 'utf8')) as typeof previous;
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }

  const modelCount = facts.reduce((total, market) => total + market.models.length, 0);
  if (previous.candidate_hash === hash) {
    let existingMarkdownPath: string | null = null;
    try {
      const existingCandidate = JSON.parse(await readFile(reviewPath, 'utf8')) as MiniMaxReviewCandidate;
      const observedAt = latestSnapshotRetrievedAt(metadata);
      const markdownPath = await datedReviewMarkdownPath(path.dirname(reviewPath), observedAt, previous.review_markdown_file ?? existingCandidate.review_markdown_file);
      const candidate = { ...existingCandidate, observed_at: observedAt, sources: metadata, current: facts, review_markdown_file: path.basename(markdownPath) };
      await writeJsonAtomically(reviewPath, candidate);
      await writeTextAtomically(markdownPath, renderMiniMaxReviewMarkdown(candidate));
      await writeJsonAtomically(statePath, { ...previous, provider_id: 'minimax', candidate_hash: hash, semantic_facts: facts, review_markdown_file: path.basename(markdownPath) });
      const legacyMarkdownPath = reviewPath.replace(/\.json$/u, '.md');
      if (legacyMarkdownPath !== markdownPath && !existingCandidate.review_markdown_file && !previous.review_markdown_file) await rm(legacyMarkdownPath, { force: true });
      existingMarkdownPath = path.relative(options.repoRoot, markdownPath);
    } catch (error) {
      if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    }
    return {
      changed: false,
      modelCount,
      fingerprint: hash,
      reviewPath: null,
      reviewMarkdownPath: existingMarkdownPath,
      snapshotCount: metadata.length,
      irCandidate,
    };
  }

  await mkdir(path.dirname(reviewPath), { recursive: true });
  const observedAt = latestSnapshotRetrievedAt(metadata);
  const markdownPath = await datedReviewMarkdownPath(path.dirname(reviewPath), observedAt);
  const candidate: MiniMaxReviewCandidate = {
    provider_id: 'minimax',
    candidate_kind: 'regional_current_supply_observation',
    observed_at: observedAt,
    previous_candidate_hash: previous.candidate_hash ?? null,
    candidate_hash: hash,
    review_markdown_file: path.basename(markdownPath),
    sources: metadata,
    previous: previous.semantic_facts ?? null,
    current: facts,
  };
  await createReviewFile(reviewPath, candidate);
  await writeTextAtomically(markdownPath, renderMiniMaxReviewMarkdown(candidate));
  await writeJsonAtomically(statePath, { provider_id: 'minimax', candidate_hash: hash, semantic_facts: facts, review_markdown_file: path.basename(markdownPath) });

  return {
    changed: true,
    modelCount,
    fingerprint: hash,
    reviewPath: path.relative(options.repoRoot, reviewPath),
    reviewMarkdownPath: path.relative(options.repoRoot, markdownPath),
    snapshotCount: metadata.length,
    irCandidate,
  };
}
