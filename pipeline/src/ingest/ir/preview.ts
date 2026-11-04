import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { ProviderDocument } from '@providerlist/schema/types';
import { serviceMarketForId } from '@providerlist/schema/types';
import { readProviderSource } from '../../data/provider-store.ts';
import { loadModelRegistrySource } from '../../compile/build.ts';
import { applyCatalogAbsenceRetirementProposals } from '../catalog-absence.ts';
import type { CandidateEnvelope, SnapshotMetadata } from '../types.ts';
import { resolveProviderCollectionIdentities } from './identity-resolution.ts';
import type { ProviderCollectionIR } from './provider-collection.ts';
import { projectProviderCollectionIR } from './conversion.ts';
import { keyedEntries, semanticallyEqual } from '../semantic-diff.ts';

type IRCandidate = CandidateEnvelope<ProviderCollectionIR>;

/** Keep pre-record_unit candidates previewable without pretending their count basis is known. */
function normalizeLegacyCoverage(candidate: IRCandidate): IRCandidate {
  const legacyCoverage = candidate.current.coverage.filter((record) =>
    'record_count' in record && record.record_count !== undefined && !('record_unit' in record && record.record_unit));
  if (legacyCoverage.length === 0) return candidate;
  return {
    ...candidate,
    current: {
      ...candidate.current,
      coverage: candidate.current.coverage.map((record) =>
        'record_count' in record && record.record_count !== undefined && !('record_unit' in record && record.record_unit)
          ? { ...record, record_unit: 'legacy records (unit unspecified)' }
          : record),
      review_items: [...candidate.current.review_items, {
        id: 'legacy-coverage-count-unit',
        kind: 'incomplete_coverage',
        message: '该候选早于 coverage.record_unit 契约；预览保留原计数并明确标记计数单位未知。请在下次采集时重建候选。',
        evidence: legacyCoverage.map(({ source_ref }) => ({ source_ref, assertion: '旧候选未记录 record_count 的计数单位。' })),
      }],
    },
  };
}

export interface ProviderIRPreviewResult {
  readonly providerId: string;
  readonly status: 'needs_review' | 'converted';
  readonly offeringCount: number;
  readonly projectionFingerprint: string;
  readonly projectionIssues: readonly string[];
  readonly reviewNotes: readonly string[];
  readonly collectedSources: readonly SnapshotMetadata[];
  /** 当前 IR 候选与现有 Provider 合并后的内存文档，仅供对照与评审，不会持久化。 */
  readonly document: ProviderDocument | null;
  readonly reportPath: string;
}

export function previewStatusLabel(status: ProviderIRPreviewResult['status']): string {
  return status === 'needs_review' ? '待核对；不会写入正式数据' : '可投影；仍需单独审核和生成正式数据变更';
}

function display(value: unknown): string {
  if (value === undefined) return '—';
  const serialized = JSON.stringify(value, null, 2);
  if (serialized === undefined) return '—';
  const escaped = serialized.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\|/g, '&#124;');
  return `<code>${escaped.replace(/\r?\n/g, '<br>')}</code>`;
}

function pointerPart(value: string): string {
  return value.replace(/~/g, '~0').replace(/\//g, '~1');
}

function arrayEntries(value: readonly unknown[]): Map<string, unknown> {
  return new Map(keyedEntries(value) ?? value.map((item, index) => [String(index), item] as const));
}

function fieldChanges(previous: unknown, proposed: unknown, path: string): string[] {
  if (semanticallyEqual(previous, proposed)) return [];
  if (previous === undefined) return [`| 新增 | ${path} | — | ${display(proposed)} |`];
  if (proposed === undefined) return [`| 移除建议 | ${path} | ${display(previous)} | — |`];
  if (Array.isArray(previous) && Array.isArray(proposed)) {
    const oldEntries = arrayEntries(previous);
    const newEntries = arrayEntries(proposed);
    const keys = [...new Set([...oldEntries.keys(), ...newEntries.keys()])].sort();
    return keys.flatMap((key) => fieldChanges(oldEntries.get(key), newEntries.get(key), `${path}/${pointerPart(key)}`));
  }
  if (previous && proposed && typeof previous === 'object' && typeof proposed === 'object' && !Array.isArray(previous) && !Array.isArray(proposed)) {
    const oldRecord = previous as Record<string, unknown>;
    const newRecord = proposed as Record<string, unknown>;
    const keys = [...new Set([...Object.keys(oldRecord), ...Object.keys(newRecord)])].sort();
    return keys.flatMap((key) => fieldChanges(oldRecord[key], newRecord[key], `${path}/${pointerPart(key)}`));
  }
  return [`| 更新 | ${path} | ${display(previous)} | ${display(proposed)} |`];
}

/** 输出所有 ProviderDocument 字段变化，含嵌套 Endpoint、Route、Price 与来源数据。 */
export function previewProviderDocumentChanges(previous: unknown, proposed: unknown): string[] {
  return fieldChanges(previous, proposed, '');
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : null;
}

function keyedRateItems(value: unknown): Map<string, Record<string, unknown>> {
  if (!Array.isArray(value)) return new Map();
  return new Map(value.flatMap((item) => {
    const record = asRecord(item);
    if (typeof record?.metric !== 'string') return [];
    const key = JSON.stringify([record.metric, record.ttl ?? null, record.context ?? null]);
    return [[key, record] as const];
  }));
}

function priceRateLabel(item: Record<string, unknown> | undefined): string {
  if (!item) return '—';
  return [item.value, item.unit, item.quantity !== 1 ? `×${item.quantity}` : '', item.list_value ? `(原价 ${item.list_value})` : '']
    .filter((part) => part !== undefined && part !== '')
    .join(' ');
}

/** Summarize price edits by owning entity, pricing group, and billing metric. */
export function summarizeSemanticPriceChanges(previous: unknown, proposed: unknown): string[] {
  const collect = (value: unknown, path = '', result = new Map<string, Record<string, unknown>>()): Map<string, Record<string, unknown>> => {
    if (Array.isArray(value)) value.forEach((item, index) => collect(item, `${path}/${index}`, result));
    else if (value && typeof value === 'object') {
      const record = value as Record<string, unknown>;
      if (Array.isArray(record.pricing)) record.pricing.forEach((group, index) => {
        const parsed = asRecord(group);
        if (parsed) result.set(`${path}/pricing/${index}`, parsed);
      });
      Object.entries(record).filter(([key]) => key !== 'pricing').forEach(([key, child]) => collect(child, `${path}/${pointerPart(key)}`, result));
    }
    return result;
  };
  const before = collect(previous);
  const after = collect(proposed);
  const summaries: string[] = [];
  for (const groupPath of [...new Set([...before.keys(), ...after.keys()])].sort()) {
    const oldGroup = before.get(groupPath);
    const newGroup = after.get(groupPath);
    const group = newGroup ?? oldGroup!;
    const label = `${groupPath} · ${group.currency ?? ''}`;
    if (!oldGroup || !newGroup) {
      summaries.push(`${oldGroup ? '移除建议' : '新增'}定价组 ${label}`);
      continue;
    }
    const oldRates = keyedRateItems(oldGroup.rates);
    const newRates = keyedRateItems(newGroup.rates);
    const changedRates = [...new Set([...oldRates.keys(), ...newRates.keys()])].sort().flatMap((rateKey) => {
      const oldRate = oldRates.get(rateKey);
      const newRate = newRates.get(rateKey);
      if (semanticallyEqual(oldRate, newRate)) return [];
      const rate = newRate ?? oldRate;
      const metric = [rate?.metric, rate?.ttl ? `TTL ${rate.ttl}` : undefined, rate?.context ? `context ${rate.context}` : undefined].filter(Boolean).join(' / ');
      return [`${metric} ${priceRateLabel(oldRate)} → ${priceRateLabel(newRate)}`];
    });
    if (changedRates.length) summaries.push(`价格调整 ${label} · ${changedRates.join('；')}`);
    if (!semanticallyEqual(oldGroup.conditions, newGroup.conditions)) {
      summaries.push(`计价条件调整 ${label} · ${JSON.stringify(oldGroup.conditions ?? '无')} → ${JSON.stringify(newGroup.conditions ?? '无')}`);
    }
  }
  return summaries;
}

function unescapePointerPart(value: string): string {
  return value.replace(/~1/g, '/').replace(/~0/g, '~');
}

function stableDiffPathToPointer(document: unknown, diffPath: string): string | undefined {
  const tokens = diffPath.split('/').slice(1).map(unescapePointerPart);
  const pointer: string[] = [];
  let current: unknown = document;
  for (const token of tokens) {
    if (Array.isArray(current)) {
      const entries = keyedEntries(current);
      const index = entries ? [...entries.keys()].indexOf(token) : Number(token);
      if (!Number.isInteger(index) || index < 0 || index >= current.length) return undefined;
      pointer.push(String(index));
      current = current[index];
    } else if (current !== null && typeof current === 'object') {
      pointer.push(token);
      current = (current as Record<string, unknown>)[token];
    } else return undefined;
  }
  return `/${pointer.map(pointerPart).join('/')}`;
}

/** Add source locations to each changed field when the projected evidence path resolves. */
function collectEvidenceLocations(value: unknown, locations = new Map<string, Set<string>>()): Map<string, Set<string>> {
  if (Array.isArray(value)) {
    value.forEach((item) => collectEvidenceLocations(item, locations));
  } else if (value !== null && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    if (Array.isArray(record.evidence)) {
      record.evidence.forEach((item) => {
        if (item === null || typeof item !== 'object') return;
        const ref = item as { source_ref?: unknown; assertion?: unknown; locator?: unknown };
        if (typeof ref.source_ref !== 'string' || typeof ref.locator !== 'string') return;
        const key = `${ref.source_ref}\u0000${typeof ref.assertion === 'string' ? ref.assertion : ''}`;
        const known = locations.get(key) ?? new Set<string>();
        known.add(ref.locator);
        locations.set(key, known);
      });
    }
    Object.values(record).forEach((item) => collectEvidenceLocations(item, locations));
  }
  return locations;
}

export function previewChangesWithEvidence(
  changes: readonly string[],
  document: ProviderDocument,
  ir?: ProviderCollectionIR,
): string[] {
  const evidence = document.evidence ?? [];
  const locationsBySourceAndAssertion = ir ? collectEvidenceLocations(ir) : new Map<string, Set<string>>();
  return changes.map((change) => {
    const columns = change.split('|').slice(1, -1).map((column) => column.trim());
    const diffPath = columns[1];
    if (!diffPath) return change;
    const pointer = stableDiffPathToPointer(document, diffPath);
    const locations = pointer
      ? evidence.filter((item) => item.field === pointer).map(({ source_ref, assertion }) => {
        const locator = [...(locationsBySourceAndAssertion.get(`${source_ref}\u0000${assertion ?? ''}`) ?? [])].join(', ');
        return [source_ref, locator, assertion].filter(Boolean).join(' · ').replace(/[|\r\n]/g, ' ');
      })
      : [];
    const suffix = locations.length ? locations.join('<br>') : '未关联本轮字段证据';
    return `${change.slice(0, -1)} | ${suffix} |`;
  });
}

/** Render source-scoped coverage so a reviewer can distinguish missing data from zero facts. */
export function previewCoverageRows(
  coverage: ProviderCollectionIR['coverage'],
  snapshots: readonly SnapshotMetadata[],
): string[] {
  const sourceNames = new Map(snapshots.map(({ source_id, source_name }) => [source_id, source_name]));
  return coverage.map(({ source_ref, scope, market, status, record_count, record_unit, note }) =>
    `| ${sourceNames.get(source_ref) ?? source_ref} (${source_ref}) | ${scope} | ${market ?? '—'} | ${status} | ${record_count ?? '—'} | ${record_unit ?? '—'} | ${(note ?? '—').replace(/[|\r\n]/g, ' ')} |`);
}

type APIService = ProviderDocument['services'][number];
type APIOffering = NonNullable<APIService['offerings']>[number];
type APIServiceCapability = NonNullable<APIService['capabilities']>[number];
type ProviderPlan = NonNullable<ProviderDocument['plans']>[number];
type ProviderPricingGroup = NonNullable<APIOffering['pricing']>[number];
type ProviderPricingRate = ProviderPricingGroup['rates'][number];

function mergeById<T extends { readonly id: string }>(previous: readonly T[] = [], proposed: readonly T[] = []): T[] {
  const merged = new Map(previous.map((item) => [item.id, item]));
  for (const item of proposed) merged.set(item.id, item);
  return [...merged.values()];
}

function routeKey(route: unknown): string {
  return JSON.stringify(route);
}

function mergeRoutes<T>(previous: readonly T[] = [], proposed: readonly T[] = [], replace = false): T[] {
  if (replace) return [...proposed];
  const routes = new Map(previous.map((route) => [routeKey(route), route]));
  for (const route of proposed) routes.set(routeKey(route), route);
  return [...routes.values()];
}

function mergeEndpoints(previous: NonNullable<APIService['endpoints']> = [], proposed: NonNullable<APIService['endpoints']> = []): NonNullable<APIService['endpoints']> {
  const endpoints = new Map(previous.map((endpoint) => [endpoint.id, endpoint]));
  for (const endpoint of proposed) {
    const old = endpoints.get(endpoint.id);
    endpoints.set(endpoint.id, {
      ...old,
      ...endpoint,
      ...((old?.routes || endpoint.routes) ? { routes: mergeRoutes(old?.routes, endpoint.routes) } : {}),
    });
  }
  return [...endpoints.values()];
}

function mergePartialPlan(previous: ProviderPlan, proposed: ProviderPlan): ProviderPlan {
  const billingOptions = new Map(previous.billing_options.map((option) => [option.billing_period, option]));
  for (const option of proposed.billing_options) {
    const old = billingOptions.get(option.billing_period);
    billingOptions.set(option.billing_period, {
      ...old,
      ...option,
      ...(old?.evidence_refs || option.evidence_refs ? {
        evidence_refs: [...new Set([...(old?.evidence_refs ?? []), ...(option.evidence_refs ?? [])])],
      } : {}),
    });
  }
  return {
    ...previous,
    ...proposed,
    billing_options: [...billingOptions.values()],
    ...(previous.links || proposed.links ? { links: { ...previous.links, ...proposed.links } } : {}),
    ...(previous.allowance || proposed.allowance ? { allowance: { ...previous.allowance, ...proposed.allowance } } : {}),
    ...(previous.credits !== undefined || proposed.credits !== undefined ? { credits: proposed.credits ?? previous.credits } : {}),
    ...(previous.evidence_refs || proposed.evidence_refs ? {
      evidence_refs: [...new Set([...(previous.evidence_refs ?? []), ...(proposed.evidence_refs ?? [])])],
    } : {}),
  };
}

function pricingGroupKey(group: ProviderPricingGroup): string {
  const conditions = group.conditions?.map((condition) => {
    if (!('field' in condition)) return condition;
    return { field: condition.field, operator: condition.operator ?? 'eq', value: condition.value };
  });
  return JSON.stringify([group.currency, group.deployment ?? null, group.region ?? null, conditions ?? null, group.applies_to ?? null]);
}

function mergePartialPricingGroup(previous: ProviderPricingGroup, proposed: ProviderPricingGroup): ProviderPricingGroup {
  const rates = new Map(previous.rates.map((rate) => [JSON.stringify([rate.metric, rate.unit, rate.ttl ?? null, rate.context ?? null]), rate]));
  for (const rate of proposed.rates) rates.set(JSON.stringify([rate.metric, rate.unit, rate.ttl ?? null, rate.context ?? null]), rate);
  return {
    ...previous,
    ...proposed,
    rates: [...rates.values()] as ProviderPricingRate[],
    ...(previous.evidence_refs || proposed.evidence_refs ? {
      evidence_refs: [...new Set([...(previous.evidence_refs ?? []), ...(proposed.evidence_refs ?? [])])],
    } : {}),
  };
}

function exactPricingGroupKey(group: ProviderPricingGroup): string {
  const sort = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(sort);
    if (value && typeof value === 'object') {
      return Object.fromEntries(Object.entries(value).sort(([left], [right]) => left.localeCompare(right)).map(([key, item]) => [key, sort(item)]));
    }
    return value;
  };
  const { evidence_refs: _evidenceRefs, ...content } = group;
  return JSON.stringify(sort(content));
}

/** Partial price coverage preserves omitted groups and rates; complete coverage replaces them. */
function mergePartialPricing(previous: readonly ProviderPricingGroup[] = [], proposed: readonly ProviderPricingGroup[] = []): ProviderPricingGroup[] {
  const groups = [...previous];
  const rateKey = (rate: ProviderPricingRate) => JSON.stringify([rate.metric, rate.unit, rate.ttl ?? null, rate.context ?? null]);
  for (const group of proposed) {
    const candidates = groups.map((old, index) => ({ old, index }))
      .filter(({ old }) => pricingGroupKey(old) === pricingGroupKey(group));
    if (candidates.length === 0) { groups.push(group); continue; }
    if (candidates.length === 1) {
      const index = candidates[0]!.index;
      groups[index] = mergePartialPricingGroup(groups[index]!, group);
      continue;
    }
    const unmatched: ProviderPricingRate[] = [];
    const updates = new Map<number, ProviderPricingRate[]>();
    for (const rate of group.rates) {
      const matches = candidates.filter(({ old }) => old.rates.some((item) => rateKey(item) === rateKey(rate)));
      if (matches.length !== 1) { unmatched.push(rate); continue; }
      const index = matches[0]!.index;
      updates.set(index, [...(updates.get(index) ?? []), rate]);
    }
    for (const [index, rates] of updates) {
      groups[index] = mergePartialPricingGroup(groups[index]!, { ...group, rates });
    }
    if (unmatched.length) groups.push({ ...group, rates: unmatched });
  }
  const unique = new Map<string, ProviderPricingGroup>();
  for (const group of groups) {
    const key = exactPricingGroupKey(group);
    const previous = unique.get(key);
    unique.set(key, previous ? {
      ...previous,
      evidence_refs: [...new Set([...(previous.evidence_refs ?? []), ...(group.evidence_refs ?? [])])],
    } : group);
  }
  return [...unique.values()];
}

function scopeCoverage(
  ir: ProviderCollectionIR,
  serviceId: string,
): Map<ProviderCollectionIR['coverage'][number]['scope'], { readonly present: boolean; readonly complete: boolean }> {
  const service = ir.services.find(({ id }) => id.value === serviceId);
  if (!service) return new Map();
  const market = serviceMarketForId(serviceId)?.toLowerCase();
  const result = new Map<ProviderCollectionIR['coverage'][number]['scope'], { present: boolean; complete: boolean }>();
  for (const entry of ir.coverage) {
    if (entry.market && entry.market !== market) continue;
    const current = result.get(entry.scope);
    result.set(entry.scope, { present: true, complete: (current?.complete ?? true) && entry.status === 'complete' });
  }
  return result;
}

function mergeScopedCapability(
  previous: APIServiceCapability,
  proposed: APIServiceCapability,
  coverage: ReturnType<typeof scopeCoverage>,
): APIServiceCapability {
  const pricing = coverage.get('pricing');
  const api = coverage.get('api');
  return {
    ...previous,
    ...proposed,
    ...(pricing?.present && (previous.pricing || proposed.pricing) ? {
      pricing: pricing.complete ? proposed.pricing ?? [] : mergePartialPricing(previous.pricing, proposed.pricing),
    } : {}),
    ...(api?.present && (previous.routes || proposed.routes) ? { routes: mergeRoutes(previous.routes, proposed.routes, api.complete) } : {}),
    ...(previous.evidence_refs || proposed.evidence_refs ? {
      evidence_refs: [...new Set([...(previous.evidence_refs ?? []), ...(proposed.evidence_refs ?? [])])],
    } : {}),
  };
}

function mergeScopedOffering(
  previous: APIOffering | undefined,
  proposed: APIOffering,
  coverage: ReturnType<typeof scopeCoverage>,
): APIOffering {
  if (!previous) return proposed;
  const modelCatalog = coverage.get('model_catalog')?.present ?? false;
  const api = coverage.get('api');
  const capability = coverage.get('capability')?.present ?? false;
  const pricing = coverage.get('pricing')?.present ?? false;
  return {
    ...previous,
    ...(modelCatalog ? {
      model_ref: proposed.model_ref ?? previous.model_ref,
      ...(proposed.links ? { links: { ...previous.links, ...proposed.links } } : {}),
    } : {}),
    ...(api?.present || capability ? {
      ...(proposed.api_limits ? { api_limits: proposed.api_limits } : {}),
    } : {}),
    ...(pricing ? {
      pricing: coverage.get('pricing')?.complete
        ? proposed.pricing ?? []
        : mergePartialPricing(previous.pricing, proposed.pricing),
    } : {}),
    ...(proposed.evidence_refs?.length ? { evidence_refs: [...new Set([...(previous.evidence_refs ?? []), ...proposed.evidence_refs])] } : {}),
  };
}

/**
 * IR coverage is source- and market-scoped. Partial collection in one data
 * domain must preserve facts from domains the adapter did not collect.
 */
export function mergePartialProviderProjection(
  previous: ProviderDocument | undefined,
  proposed: ProviderDocument,
  ir: ProviderCollectionIR,
): ProviderDocument {
  if (!previous) return proposed;
  const previousServices = new Map(previous.services.map((service) => [service.id, service]));
  const projectedServiceIds = new Set(proposed.services.map(({ id }) => id));
  const services = proposed.services.map((projected) => {
    const old = previousServices.get(projected.id);
    if (!old) return projected;
    const coverage = scopeCoverage(ir, projected.id);
    const apiCoverage = coverage.get('api');
    const offerings = new Map((old.offerings ?? []).map((offering) => [offering.id, offering]));
    for (const offering of projected.offerings ?? []) {
      offerings.set(offering.id, mergeScopedOffering(offerings.get(offering.id), offering, coverage));
    }
    const has = (scope: ProviderCollectionIR['coverage'][number]['scope']) => coverage.get(scope)?.present ?? false;
    return {
      ...old,
      ...projected,
      account_requirements: has('api') ? projected.account_requirements ?? old.account_requirements : old.account_requirements,
      ...(coverage.get('pricing')?.present && (old.pricing || projected.pricing) ? {
        pricing: coverage.get('pricing')?.complete
          ? projected.pricing ?? []
          : mergePartialPricing(old.pricing, projected.pricing),
      } : {}),
      endpoints: apiCoverage?.present && projected.endpoints?.length
        ? (apiCoverage.complete ? projected.endpoints : mergeEndpoints(old.endpoints, projected.endpoints))
        : old.endpoints,
      offerings: [...offerings.values()],
      capabilities: has('capability')
        ? (() => {
          const capabilities = new Map((old.capabilities ?? []).map((item) => [item.kind, item]));
          for (const item of projected.capabilities ?? []) {
            const previousCapability = capabilities.get(item.kind);
            capabilities.set(item.kind, previousCapability ? mergeScopedCapability(previousCapability, item, coverage) : item);
          }
          return [...capabilities.values()];
        })()
        : old.capabilities,
      plan_ids: has('plan')
        ? [...new Set([...(old.plan_ids ?? []), ...(projected.plan_ids ?? [])])]
        : old.plan_ids,
      sources: [...new Set([...(old.sources ?? []), ...(projected.sources ?? [])])],
    };
  });
  for (const service of previous.services) {
    if (!projectedServiceIds.has(service.id)) services.push(service);
  }
  const planCoverage = new Map(ir.services.map((service) => [
    service.id.value,
    scopeCoverage(ir, service.id.value).get('plan'),
  ]));
  const plansById = new Map((previous.plans ?? []).map((plan) => [plan.id, plan]));
  for (const plan of proposed.plans ?? []) {
    const old = plansById.get(plan.id);
    const coverage = planCoverage.get(plan.service_ref);
    plansById.set(plan.id, old && coverage?.present && !coverage.complete
      ? mergePartialPlan(old, plan)
      : plan);
  }
  return {
    ...previous,
    data_version: proposed.data_version,
    generated_at: proposed.generated_at,
    provider: {
      ...previous.provider,
      ...proposed.provider,
      aliases: [...new Set([...previous.provider.aliases, ...proposed.provider.aliases])],
      sources: [...new Set([...(previous.provider.sources ?? []), ...(proposed.provider.sources ?? [])])],
    },
    services,
    sources: mergeById(previous.sources, proposed.sources),
    evidence: mergeById(previous.evidence, proposed.evidence),
    plans: [...plansById.values()],
  };
}

async function readOptionalProvider(dataDir: string, providerId: string): Promise<ProviderDocument | undefined> {
  try { return await readProviderSource(dataDir, providerId); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return undefined;
    throw error;
  }
}

/** 对任意 Provider 的领域 IR 候选生成通用投影与变更预览，不写正式数据。 */
export async function previewLatestProviderIRCandidate(options: {
  readonly repoRoot: string;
  readonly providerId: string;
  readonly candidateScope?: 'ir' | 'ir-global';
}): Promise<ProviderIRPreviewResult | null> {
  const candidateRoot = path.join(options.repoRoot, 'data/candidates', options.providerId, options.candidateScope ?? 'ir');
  let state: { provider_id?: string; candidate_hash?: string };
  try { state = JSON.parse(await readFile(path.join(candidateRoot, 'state.json'), 'utf8')) as typeof state; }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null;
    throw error;
  }
  if (state.provider_id !== options.providerId || !state.candidate_hash || !/^sha256:[a-f0-9]{64}$/.test(state.candidate_hash)) {
    throw new Error(`${options.providerId} IR 候选状态无效`);
  }
  const candidatePath = path.join(candidateRoot, 'reviews', `${state.candidate_hash.slice(7)}.json`);
  const storedCandidate = JSON.parse(await readFile(candidatePath, 'utf8')) as IRCandidate;
  const candidate = normalizeLegacyCoverage(storedCandidate);
  if (candidate.provider_id !== options.providerId || candidate.candidate_hash !== state.candidate_hash || candidate.current.provider_id !== options.providerId) {
    throw new Error(`${options.providerId} IR 候选身份或指纹不匹配`);
  }
  // 文档观察 IR 还不是领域事实，不应抢占该 Provider 仍在使用的旧转换路径。
  if (!candidate.current.profile && candidate.current.services.length === 0) return null;

  const snapshots: readonly SnapshotMetadata[] = candidate.sources;
  const projectionTime = snapshots.map(({ retrieved_at }) => retrieved_at).sort().at(-1) ?? candidate.observed_at;
  const registry = await loadModelRegistrySource(path.join(options.repoRoot, 'data'));
  const current = await readOptionalProvider(path.join(options.repoRoot, 'data'), options.providerId);
  const identities = resolveProviderCollectionIdentities(candidate.current, registry.models, current);
  const sourceIndependentIdentities = resolveProviderCollectionIdentities(candidate.current, registry.models);
  const sourceIndependentProjection = projectProviderCollectionIR({
    ir: candidate.current,
    snapshots,
    identityResolutions: sourceIndependentIdentities,
    generatedAt: projectionTime,
  });
  const projectionFingerprintBasis = sourceIndependentProjection.document ?? {
    status: sourceIndependentProjection.status,
    issues: sourceIndependentProjection.issues,
    review_notes: sourceIndependentProjection.review_notes,
  };
  const projectionFingerprint = `sha256:${createHash('sha256').update(JSON.stringify(projectionFingerprintBasis)).digest('hex')}`;
  const projection = projectProviderCollectionIR({
    ir: candidate.current,
    snapshots,
    identityResolutions: identities,
    generatedAt: projectionTime,
    preserveFrom: current,
  });
  const offeringCount = candidate.current.services.reduce((total, service) => total + service.offerings.length, 0);
  const reportPath = path.join(candidateRoot, 'conversion-preview.md');
  let previewDocument = projection.document
    ? mergePartialProviderProjection(current, projection.document, candidate.current)
    : null;
  if (previewDocument) {
    let absenceState: unknown;
    try { absenceState = JSON.parse(await readFile(path.join(candidateRoot, 'catalog-absence.json'), 'utf8')); }
    catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
    previewDocument = applyCatalogAbsenceRetirementProposals(previewDocument, absenceState, options.providerId);
  }
  const changes = previewDocument
    ? previewProviderDocumentChanges(current, previewDocument)
    : [];
  const priceSummaries = previewDocument
    ? summarizeSemanticPriceChanges(current, previewDocument)
    : [];
  const providerName = previewDocument?.provider.name ?? options.providerId;
  const report = [
    `# ${providerName} IR 字段投影预览`, '',
    `- 转换状态：${previewStatusLabel(projection.status === 'projected' ? 'converted' : 'needs_review')}`,
    `- IR 候选指纹：${candidate.candidate_hash}`,
    `- 不依赖当前 Provider 文件的投影指纹：${projectionFingerprint}`,
    `- 观察时间：${candidate.observed_at}`,
    `- IR Offering：${offeringCount}`,
    `- 精确 ID 自动关联：${identities.filter(({ match }) => match === 'exact_id').length}`,
    `- 唯一斜杠后缀自动关联：${identities.filter(({ match }) => match === 'model_id_after_slash').length}`,
    `- 唯一名称自动关联：${identities.filter(({ match }) => match === 'exact_name').length}`,
    `- 保留既有关联：${identities.filter(({ match }) => match === 'preserved_existing').length}`,
    `- 歧义或未匹配：${identities.filter(({ match }) => match === 'ambiguous' || match === 'unmatched').length}`,
    '',
    '## 语义变更摘要', '',
    ...(priceSummaries.length ? priceSummaries.map((summary) => `- ${summary}`) : ['- 没有检测到价格规则层面的业务变化。']),
    '',
    '## 字段变更预览', '',
    '| 变化 | 字段路径 | 旧值 | IR 投影值 | 字段证据定位 |', '|---|---|---|---|---|',
    ...(changes.length && previewDocument
      ? previewChangesWithEvidence(changes, previewDocument, candidate.current)
      : ['| 无 | — | — | 没有可展示的字段变化 | — |']),
    '',
    '## 来源覆盖', '',
    '| 来源 | 数据域 | 市场 | 覆盖状态 | 记录数 | 说明 |', '|---|---|---|---|---:|---|',
    ...(candidate.current.coverage.length
      ? previewCoverageRows(candidate.current.coverage, snapshots)
      : ['| 无 | — | — | — | — | 没有登记 coverage |']),
    '',
    '## 身份关联核对', '',
    '| Service / Provider Model ID | Model ID | 命中方式 | 说明 |', '|---|---|---|---|',
    ...identities.map(({ service_id, provider_model_id, model_ref, match, review_note }) =>
      `| ${service_id}/${provider_model_id} | ${model_ref ?? '—'} | ${match} | ${review_note.replace(/[|\r\n]/g, ' ')} |`),
    '',
    '## 阻止自动写入的项目', '',
    ...(projection.issues.length ? projection.issues.map((issue) => `- ${issue}`) : ['- 无。']),
    '',
    '## 采集评审备注', '',
    ...(projection.review_notes.length ? projection.review_notes.map((note) => `- ${note}`) : ['- 无。']),
    '',
    '本命令只读取正式数据并写入本报告，不修改 `data/providers/`、`data/collector/` 或采集生命周期文件。',
    '',
  ].join('\n');
  await writeFile(reportPath, report);
  return {
    providerId: options.providerId,
    status: projection.status === 'projected' ? 'converted' : 'needs_review',
    offeringCount,
    projectionFingerprint,
    projectionIssues: projection.issues,
    reviewNotes: projection.review_notes,
    collectedSources: snapshots,
    document: previewDocument,
    reportPath: path.relative(options.repoRoot, reportPath),
  };
}
