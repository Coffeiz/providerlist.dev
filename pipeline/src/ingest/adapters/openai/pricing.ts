import type { CollectorRateFact, PriceFact, PriceRuleFact, Observed } from '../../ir/provider-collection.ts';
import type { BillingUnit } from '@providerlist/schema/types';

function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}

function splitMarkdownRow(line: string): string[] {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim().replaceAll('\\|', '|'));
}

function priceSectionTier(heading: string): string | undefined {
  const normalized = heading.toLowerCase();
  if (normalized.includes('ultrafast')) return 'ultrafast';
  if (normalized.includes('fast')) return 'fast';
  if (normalized.includes('batch') && normalized.includes('flex')) return undefined;
  if (/\bflex\b/.test(normalized)) return 'flex';
  if (/\bbatch\b/.test(normalized)) return 'batch';
  if (normalized.includes('standard')) return 'standard';
  return undefined;
}

function priceMetric(header: string, modality: string): { metric: string; ttl?: string; context?: string } | undefined {
  const key = header.trim().toLowerCase();
  const mode = modality.trim().toLowerCase();
  if (key === 'input') return { metric: mode === 'image' ? 'input_image' : mode === 'audio' ? 'input_audio' : 'input' };
  if (key === 'output' || key === 'output / cost') return { metric: mode === 'image' ? 'output_image' : mode === 'audio' ? 'output_audio' : 'output' };
  if (key === 'cached input') return { metric: mode === 'image' ? 'cache_read_image' : mode === 'audio' ? 'cache_read_audio' : 'cache_read' };
  const contextRate = key.match(/^(short|long) context (input|output|cached input|30m write|12h write)$/);
  if (!contextRate) return undefined;
  const [, context, kind] = contextRate;
  if (kind === 'input') return { metric: 'input', context };
  if (kind === 'output') return { metric: 'output', context };
  if (kind === 'cached input') return { metric: 'cache_read', context };
  return { metric: 'cache_write', ttl: kind === '30m write' ? '30min' : '12h', context };
}

function parseAmount(value: string): string | undefined {
  const match = value.trim().match(/^\$\s*(\d+(?:\.\d+)?)$/);
  return match?.[1];
}

function exactModelRow(label: string, modelId: string): boolean {
  return label === modelId || label.startsWith(`${modelId} (`);
}

/** Parse exact-model OpenAI token price rows without converting decimal strings through Number. */
export function openAIPriceFactForModel(body: string, modelId: string, sourceRef: string): PriceFact | undefined {
  const lines = body.split(/\r?\n/);
  const rules: PriceRuleFact[] = [];
  let sectionHeading = '';
  let sectionTier: string | undefined;
  let tableOrdinal = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index] ?? '';
    const heading = line.match(/^#{2,4}\s+(.+?)\s*$/)?.[1];
    if (heading) {
      sectionHeading = heading;
      const tier = priceSectionTier(heading);
      if (tier) sectionTier = tier;
      else if (/pricing data/i.test(heading)) sectionTier = undefined;
      continue;
    }
    if (!line.trim().startsWith('|')) continue;

    const headers = splitMarkdownRow(line);
    if (headers[0]?.toLowerCase() !== 'model' || !(lines[index + 1] ?? '').trim().startsWith('|')) continue;
    if (headers.some((header) => /category|training|estimated cost|use case/i.test(header))) {
      index += 1;
      while (index + 1 < lines.length && (lines[index + 1] ?? '').trim().startsWith('|')) index += 1;
      continue;
    }
    index += 2; // 表头与对齐行
    tableOrdinal += 1;
    let rowOrdinal = 0;
    while (index < lines.length && (lines[index] ?? '').trim().startsWith('|')) {
      rowOrdinal += 1;
      const cells = splitMarkdownRow(lines[index] ?? '');
      index += 1;
      if (!exactModelRow(cells[0] ?? '', modelId)) continue;

      const rateItems: CollectorRateFact[] = [];
      const modalityIndex = headers.findIndex((header) => header.trim().toLowerCase() === 'modality');
      const modality = modalityIndex >= 0 ? cells[modalityIndex] ?? '' : '';
      for (const [columnIndex, header] of headers.entries()) {
        if (columnIndex === 0) continue;
        const rate = priceMetric(header, modality);
        if (!rate) continue;
        const amountDecimal = parseAmount(cells[columnIndex] ?? '');
        if (amountDecimal === undefined) continue;
        rateItems.push({ ...rate, unit: 'per_1m_tokens' satisfies BillingUnit, quantity: 1, amount_decimal: amountDecimal });
      }
      if (rateItems.length === 0) continue;

      const tableLabel = sectionHeading.toLowerCase().includes('batch pricing')
        ? (sectionTier === 'flex' ? 'Flex' : 'Batch')
        : sectionHeading;
      const serviceTier = sectionTier ?? priceSectionTier(tableLabel);
      const rowEvidence = {
        source_ref: sourceRef,
        locator: `#${tableLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/table:${tableOrdinal}/row:${rowOrdinal}`,
        assertion: `OpenAI 官方定价表为 ${modelId} 列出 ${tableLabel} token 价格。`,
      };
      rules.push({
        ...(serviceTier ? { conditions: [{ field: 'service_tier', value: serviceTier }] as const } : {}),
        rate_items: rateItems,
        evidence: [rowEvidence],
      });
    }
    index -= 1; // 让外层循环处理紧随表格的标题或下一张表格
  }

  if (rules.length === 0) return undefined;
  return {
    provider_model_id: observed(modelId, sourceRef, `#${modelId}`, '价格表按精确模型 ID 关联。'),
    currency: observed('USD', sourceRef, '#pricing', 'OpenAI 定价页以美元符号列示价格。'),
    unit: observed('per_1m_tokens', sourceRef, '#pricing', '该价格表按每百万 Token 计价。'),
    rules: { value: rules, evidence: rules.flatMap(({ evidence }) => evidence) },
  };
}
