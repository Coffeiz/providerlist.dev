import type { IngestSource, SnapshotMetadata } from '../types.ts';
import type { ProviderCollectionIR } from './provider-collection.ts';
import { serviceMarketForId } from '@providerlist/schema/types';

export interface IRValidationIssue {
  readonly code: string;
  readonly path: string;
  readonly message: string;
}

type JsonRecord = Record<string, unknown>;

function isRecord(value: unknown): value is JsonRecord {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function hasEvidenceFromSource(value: unknown, sourceRef: string): boolean {
  if (Array.isArray(value)) return value.some((entry) => hasEvidenceFromSource(entry, sourceRef));
  if (!isRecord(value)) return false;
  if (Array.isArray(value.evidence) && value.evidence.some((entry) => isRecord(entry) && entry.source_ref === sourceRef)) return true;
  return Object.entries(value).some(([key, entry]) => key !== 'evidence' && hasEvidenceFromSource(entry, sourceRef));
}

function coverageEntityCount(value: unknown, sourceRef: string, unit: string): number | undefined {
  if (!isRecord(value) || !Array.isArray(value.services)) return undefined;
  const services = value.services.filter(isRecord);
  const documentObservations = Array.isArray(value.document_observations) ? value.document_observations.filter(isRecord) : [];
  const offerings = services.flatMap((service) => Array.isArray(service.offerings) ? service.offerings.filter(isRecord) : []);
  const endpoints = services.flatMap((service) => Array.isArray(service.endpoints) ? service.endpoints.filter(isRecord) : []);
  const capabilities = services.flatMap((service) => Array.isArray(service.capabilities) ? service.capabilities.filter(isRecord) : []);
  const plans = services.flatMap((service) => Array.isArray(service.plans) ? service.plans.filter(isRecord) : []);
  const offeringOperations = offerings.flatMap((offering) => Array.isArray(offering.operations) ? offering.operations.filter(isRecord) : []);
  const capabilityOperations = capabilities.flatMap((capability) => Array.isArray(capability.operations) ? capability.operations.filter(isRecord) : []);
  const routes = [...offeringOperations, ...capabilityOperations].flatMap((operation) => Array.isArray(operation.routes) ? operation.routes.filter(isRecord) : []);
  const routesSupportedBySource = routes.filter((route) => ['id', 'protocol', 'method', 'path_template', 'operation_kind', 'provider_model_ids']
    .some((field) => hasEvidenceFromSource(route[field], sourceRef)));
  const offeringPrices = offerings.flatMap((offering) => Array.isArray(offering.prices) ? offering.prices.filter(isRecord) : []);
  const capabilityPrices = capabilities.flatMap((capability) => Array.isArray(capability.prices) ? capability.prices.filter(isRecord) : []);
  const sourceCount = (entries: readonly unknown[]) => entries.filter((entry) => hasEvidenceFromSource(entry, sourceRef)).length;
  const currentOfferings = offerings.filter((offering) => Array.isArray(offering.supply_observations)
    && offering.supply_observations.some((observation) => isRecord(observation)
      && ['listed_current', 'priced_current'].includes(String(observation.kind))
      && hasEvidenceFromSource(observation, sourceRef)));
  const pricedOfferings = offerings.filter((offering) => Array.isArray(offering.prices)
    && offering.prices.some((price) => hasEvidenceFromSource(price, sourceRef)));
  const sourcePriceFacts = [...offeringPrices, ...capabilityPrices].filter((price) => hasEvidenceFromSource(price, sourceRef));
  const sourceOfferings = offerings.filter((offering) => hasEvidenceFromSource(offering.provider_model_id, sourceRef));
  const modelIdSet = (entries: readonly JsonRecord[]) => new Set(entries
    .map((entry) => isRecord(entry.provider_model_id) ? entry.provider_model_id.value : undefined)
    .filter((modelId): modelId is string => typeof modelId === 'string'));
  const tokenPriceFacts = sourcePriceFacts.filter((price) => isRecord(price.unit)
    && typeof price.unit.value === 'string' && ['per_1m_tokens', 'per_1k_tokens', 'per_token'].includes(price.unit.value));
  const nonTokenOfferingPriceFacts = offeringPrices.filter((price) => hasEvidenceFromSource(price, sourceRef)
    && isRecord(price.unit) && typeof price.unit.value === 'string'
    && !['per_1m_tokens', 'per_1k_tokens', 'per_token'].includes(price.unit.value));
  const sourceRouteMatrixLocators = new Set(routesSupportedBySource.flatMap((route) =>
    ['id', 'protocol', 'method', 'path_template', 'operation_kind', 'provider_model_ids']
      .flatMap((field) => {
        const fact = route[field];
        if (!isRecord(fact) || !Array.isArray(fact.evidence)) return [];
        return fact.evidence.filter((entry) => isRecord(entry) && entry.source_ref === sourceRef && typeof entry.locator === 'string')
          .map((entry) => (entry as JsonRecord).locator as string);
      })));
  const sourceToolModelIds = modelIdSet(offerings.filter((offering) => hasEvidenceFromSource(offering.api_capabilities, sourceRef)
    || (Array.isArray(offering.operations) && offering.operations.some((operation) => isRecord(operation)
      && hasEvidenceFromSource(operation, sourceRef)
      && /search|fetch|tool/i.test(JSON.stringify(isRecord(operation.kind) ? operation.kind.value : operation.kind))))));

  switch (unit) {
    case 'API Endpoint records': return sourceCount(endpoints);
    case 'Route records': return routesSupportedBySource.length;
    case 'API Endpoint and Route records':
    case 'API Endpoint + Route records':
    case 'Endpoint + Route records': return undefined;
    case 'PlanFact records': return sourceCount(plans);
    case 'PriceFact records': return sourcePriceFacts.length;
    case 'mapped PriceFact records': return sourcePriceFacts.length;
    case 'Offering PriceFact records': return sourceCount(offeringPrices);
    case 'mapped price rows': return sourceCount(offeringPrices);
    case 'mapped Token price rows': return tokenPriceFacts.length;
    case 'non-Token model price rows': return nonTokenOfferingPriceFacts.length;
    case 'independent Capability records': return sourceCount(capabilities);
    case 'independent Capability Operation records': return sourceCount(capabilityOperations);
    case 'independent tool price facts': return sourceCount(capabilityPrices);
    case 'model IDs with built-in tool support': return sourceToolModelIds.size;
    case 'current Offering records': return currentOfferings.length;
    case 'unique model IDs': return modelIdSet(sourceOfferings).size;
    case 'unique current model IDs': return new Set(currentOfferings
      .map((offering) => isRecord(offering.provider_model_id) ? offering.provider_model_id.value : undefined)
      .filter((modelId): modelId is string => typeof modelId === 'string')).size;
    case 'models with mapped price facts':
    case 'supported model IDs with Batch PriceFacts': {
      const withSourcePrice = pricedOfferings;
      const mapped = unit === 'supported model IDs with Batch PriceFacts'
        ? withSourcePrice.filter((offering) => Array.isArray(offering.operations)
          && offering.operations.some((operation) => isRecord(operation)
            && /batch/i.test(String(isRecord(operation.kind) ? operation.kind.value : operation.kind))))
        : withSourcePrice;
      return new Set(mapped.map((offering) => isRecord(offering.provider_model_id) ? offering.provider_model_id.value : undefined)
        .filter((modelId): modelId is string => typeof modelId === 'string')).size;
    }
    case 'Batch Operation records':
      return sourceCount([...offeringOperations, ...capabilityOperations].filter((operation) =>
        /batch/i.test(String(isRecord(operation.kind) ? operation.kind.value : operation.kind))));
    case 'model IDs': {
      const apiModelFacts = offerings.filter((offering) => hasEvidenceFromSource(offering.api_limits, sourceRef)
        || hasEvidenceFromSource(offering.api_capabilities, sourceRef));
      return modelIdSet(apiModelFacts).size;
    }
    case 'supported Route matrices': return sourceRouteMatrixLocators.size;
    case 'structured document records':
      return documentObservations.filter((observation) => observation.source_ref === sourceRef)
        .reduce((count, observation) => count + (Array.isArray(observation.structured_records) ? observation.structured_records.length : 0), 0);
    case 'image schema groups': return documentObservations.some((observation) => observation.source_ref === sourceRef)
      && hasEvidenceFromSource(value.services, sourceRef) ? 1 : 0;
    case 'account-scoped model catalog records':
      return documentObservations.filter((observation) => observation.source_ref === sourceRef)
        .reduce((count, observation) => count + (Array.isArray(observation.structured_records) ? observation.structured_records.length : 0), 0);
    default: return undefined;
  }
}

const SUPPORTED_RECORD_UNITS = new Set([
  'API Endpoint records', 'Batch Operation records', 'Global Token Plan tiers',
  'M Plan tier descriptions', 'Model Registry observations', 'Offering PriceFact records', 'PlanFact records',
  'PriceFact records', 'Route records', 'Token Plan tier descriptions',
  'account-scoped model catalog records', 'current Offering records',
  'image schema groups', 'independent Capability Operation records',
  'independent Capability records', 'independent tool price facts',
  'mapped PriceFact records', 'mapped Token price rows', 'mapped price rows',
  'model IDs', 'model IDs with built-in tool support', 'models with mapped price facts',
  'non-Token model price rows', 'structured document records',
  'supported Route matrices', 'supported model IDs with Batch PriceFacts',
  'unique current model IDs', 'unique model IDs',
]);

function isSupportedRecordUnit(unit: string): boolean {
  // `recognized ...` units explicitly describe parser/source rows that have not
  // been projected to the normalized IR, so they cannot be recounted here.
  return SUPPORTED_RECORD_UNITS.has(unit) || unit.startsWith('recognized ')
    || ['API Endpoint and Route records', 'API Endpoint + Route records', 'Endpoint + Route records'].includes(unit);
}

function isIsoDateTime(value: unknown): value is string {
  return typeof value === 'string'
    && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(value)
    && !Number.isNaN(Date.parse(value));
}

function isDecimalString(value: unknown): value is string {
  return typeof value === 'string' && /^(?:0|[1-9]\d*)(?:\.\d+)?$/.test(value);
}

function validatePriceCondition(value: unknown, path: string, issues: IRValidationIssue[]): void {
  if (!isRecord(value)) {
    issues.push(issue('invalid_price_condition', path, '价格条件必须是有限 AST 对象。'));
    return;
  }
  if ('all' in value || 'any' in value) {
    const operator = 'all' in value ? 'all' : 'any';
    const children = value[operator];
    if (!Array.isArray(children) || children.length === 0) {
      issues.push(issue('invalid_price_condition', `${path}.${operator}`, `${operator} 必须包含至少一个子条件。`));
      return;
    }
    children.forEach((child, index) => validatePriceCondition(child, `${path}.${operator}[${index}]`, issues));
    return;
  }
  if ('not' in value) {
    validatePriceCondition(value.not, `${path}.not`, issues);
    return;
  }
  const allowedOps = ['eq', 'lt', 'lte', 'gt', 'gte', 'between'];
  const operator = value.operator ?? 'eq';
  if (typeof value.field !== 'string' || !value.field.trim() || !allowedOps.includes(String(operator)) || !('value' in value)) {
    issues.push(issue('invalid_price_condition', path, '叶条件必须含字段名、受支持的比较符和比较值。'));
    return;
  }
  if (operator === 'between' && (!Array.isArray(value.value) || value.value.length !== 2 || value.value.some((part) => typeof part !== 'number' || !Number.isFinite(part)))) {
    issues.push(issue('invalid_price_condition', `${path}.value`, 'between 的值必须是两个有限数字组成的闭区间。'));
  }
}

function validatePriceFact(value: unknown, path: string, issues: IRValidationIssue[]): void {
  if (!isRecord(value)) return;
  const pricing = isRecord(value.pricing) ? value.pricing.value : undefined;
  if (!Array.isArray(pricing) || pricing.length === 0) {
    issues.push(issue('invalid_pricing', `${path}.pricing.value`, '归一化价格必须是 pricing 数组。'));
    return;
  }
  pricing.forEach((group, groupIndex) => {
    const groupPath = `${path}.pricing.value[${groupIndex}]`;
    if (!isRecord(group)) {
      issues.push(issue('invalid_pricing_group', groupPath, '价格组必须是对象。'));
      return;
    }
    const currency = isRecord(group.currency) ? group.currency.value : undefined;
    if (typeof currency !== 'string' || !/^[A-Z]{3}$/.test(currency)) issues.push(issue('invalid_price_currency', `${groupPath}.currency.value`, '价格币种必须是大写 ISO 4217 代码。'));
    const region = isRecord(group.region) ? group.region.value : undefined;
    if (group.region !== undefined && (typeof region !== 'string' || !region.trim())) issues.push(issue('invalid_price_region', `${groupPath}.region.value`, '部署区域必须是非空字符串。'));
    if (group.conditions !== undefined) {
      if (!Array.isArray(group.conditions)) issues.push(issue('invalid_price_conditions', `${groupPath}.conditions`, '价格条件必须是数组。'));
      else group.conditions.forEach((condition, index) => validatePriceCondition(condition, `${groupPath}.conditions[${index}]`, issues));
    }
    const ratesObserved = isRecord(group.rates) ? group.rates.value : undefined;
    const rates = Array.isArray(ratesObserved) ? ratesObserved : [];
    const unsupported = Array.isArray(group.unsupported_metrics) ? group.unsupported_metrics : [];
    if (!rates.length && !unsupported.length) {
      issues.push(issue('empty_pricing_group', groupPath, '价格组必须包含费率项或明确不支持的计量项。'));
    }
    rates.forEach((item, itemIndex) => {
      const itemPath = `${groupPath}.rates.value[${itemIndex}]`;
      if (!isRecord(item)) {
        issues.push(issue('invalid_rate_item', itemPath, '费率项必须是对象。'));
        return;
      }
      if (typeof item.metric !== 'string' || !item.metric.trim()) issues.push(issue('invalid_rate_metric', `${itemPath}.metric`, '费率项必须有非空计量指标。'));
      if (item.ttl !== undefined && (typeof item.ttl !== 'string' || !/^[1-9][0-9]*(s|min|h|d)$/.test(item.ttl))) issues.push(issue('invalid_rate_ttl', `${itemPath}.ttl`, 'TTL 必须使用正整数加 s、min、h 或 d，例如 5min。'));
      if (item.context !== undefined && (typeof item.context !== 'string' || !item.context.trim())) issues.push(issue('invalid_rate_context', `${itemPath}.context`, '上下文价格档位必须是非空字符串。'));
      if (typeof item.unit !== 'string' || !item.unit.trim()) issues.push(issue('invalid_rate_unit', `${itemPath}.unit`, '费率项必须有非空单位。'));
      if (item.quantity !== undefined && (typeof item.quantity !== 'number' || !Number.isFinite(item.quantity) || item.quantity <= 0)) issues.push(issue('invalid_rate_quantity', `${itemPath}.quantity`, '费率数量必须是大于零的有限数值。'));
      if (!isDecimalString(item.value)) issues.push(issue('invalid_decimal_amount', `${itemPath}.value`, '金额必须是非负十进制字符串，不允许指数或浮点数。'));
      if (item.list_value !== undefined && !isDecimalString(item.list_value)) issues.push(issue('invalid_decimal_amount', `${itemPath}.list_value`, '原价必须是非负十进制字符串，不允许指数或浮点数。'));
    });
  });
}


function issue(code: string, path: string, message: string): IRValidationIssue {
  return { code, path, message };
}

/**
 * Validates IR structure and references that can be checked without a Model
 * Registry. It intentionally does not infer facts or coerce values.
 */
export function validateProviderCollectionIR(
  value: unknown,
  snapshots: readonly SnapshotMetadata[],
  sourceDefinitions: readonly Pick<IngestSource, 'id' | 'scope' | 'market'>[] = [],
): IRValidationIssue[] {
  const issues: IRValidationIssue[] = [];
  if (!isRecord(value)) return [issue('invalid_ir', '$', 'IR 根节点必须是对象。')];

  if (value.ir_version !== '1.0.0') {
    issues.push(issue('invalid_ir_version', '$.ir_version', '只接受 IR 版本 1.0.0。'));
  }
  if (typeof value.provider_id !== 'string' || !value.provider_id.trim()) {
    issues.push(issue('invalid_provider_id', '$.provider_id', 'provider_id 必须是非空字符串。'));
  }
  if (!isIsoDateTime(value.observed_at)) {
    issues.push(issue('invalid_observed_at', '$.observed_at', 'observed_at 必须是 UTC ISO 8601 时间。'));
  }

  const sourceRefs = Array.isArray(value.source_refs) ? value.source_refs : [];
  if (!Array.isArray(value.source_refs)) issues.push(issue('invalid_source_refs', '$.source_refs', 'source_refs 必须是字符串数组。'));
  const sourceRefSet = new Set<string>();
  sourceRefs.forEach((sourceRef, index) => {
    if (typeof sourceRef !== 'string' || !sourceRef.trim()) {
      issues.push(issue('invalid_source_ref', `$.source_refs[${index}]`, 'source_ref 必须是非空字符串。'));
      return;
    }
    if (sourceRefSet.has(sourceRef)) issues.push(issue('duplicate_source_ref', `$.source_refs[${index}]`, `来源引用重复：${sourceRef}`));
    sourceRefSet.add(sourceRef);
  });

  const snapshotRefs = new Set(snapshots.map(({ source_id }) => source_id));
  for (const sourceRef of sourceRefSet) {
    if (!snapshotRefs.has(sourceRef)) issues.push(issue('unknown_source_ref', '$.source_refs', `IR 引用了本候选中不存在的来源：${sourceRef}`));
  }

  if (Array.isArray(value.coverage)) {
    const coveredSources = new Set(value.coverage.filter(isRecord).map(({ source_ref }) => source_ref).filter((sourceRef): sourceRef is string => typeof sourceRef === 'string'));
    for (const sourceRef of sourceRefSet) {
      if (!coveredSources.has(sourceRef)) issues.push(issue('missing_source_coverage', '$.coverage', `来源 ${sourceRef} 没有任何覆盖声明。`));
    }
    const coverageRecords = value.coverage.filter(isRecord);
    for (const source of sourceDefinitions) {
      if (!sourceRefSet.has(source.id) || !source.scope) continue;
      const expectedScope = source.scope;
      const expectedMarket = source.market;
      const matching = coverageRecords.find((entry) => entry.source_ref === source.id
        && entry.scope === expectedScope
        && (expectedMarket === undefined || entry.market === expectedMarket));
      if (!matching) {
        issues.push(issue(
          'missing_registered_scope_coverage',
          '$.coverage',
          `来源 ${source.id} 登记的数据域 ${expectedScope}${expectedMarket ? `/${expectedMarket}` : ''} 没有对应 coverage；其它域的记录不能代替来源登记域。`,
        ));
      }
    }
  }

  const coverage = value.coverage;
  if (!Array.isArray(coverage)) {
    issues.push(issue('invalid_coverage', '$.coverage', 'coverage 必须是数组。'));
  } else {
    const coverageKeys = new Set<string>();
    coverage.forEach((entry, index) => {
      const path = `$.coverage[${index}]`;
      if (!isRecord(entry)) {
        issues.push(issue('invalid_coverage_record', path, '覆盖记录必须是对象。'));
        return;
      }
      if (typeof entry.source_ref !== 'string' || !sourceRefSet.has(entry.source_ref)) {
        issues.push(issue('unknown_coverage_source', `${path}.source_ref`, '覆盖来源必须存在于 source_refs。'));
      }
      if (!['model_catalog', 'pricing', 'api', 'capability', 'plan', 'documentation'].includes(String(entry.scope))) {
        issues.push(issue('invalid_coverage_scope', `${path}.scope`, '未知的覆盖范围。'));
      }
      if (!['complete', 'partial', 'failed', 'not_parsed'].includes(String(entry.status))) {
        issues.push(issue('invalid_coverage_status', `${path}.status`, '未知的覆盖状态。'));
      }
      if (entry.status === 'complete' && (!Number.isInteger(entry.record_count) || Number(entry.record_count) < 0)) {
        issues.push(issue('complete_coverage_requires_count', `${path}.record_count`, '完整覆盖必须提供实际解析记录数；空结果应明确写 0。'));
      }
      if (entry.market !== undefined && !['cn', 'global'].includes(String(entry.market))) {
        issues.push(issue('invalid_coverage_market', `${path}.market`, 'market 只能是 cn 或 global。'));
      }
      if (entry.record_count !== undefined && (!Number.isInteger(entry.record_count) || Number(entry.record_count) < 0)) {
        issues.push(issue('invalid_record_count', `${path}.record_count`, 'record_count 必须是非负整数。'));
      }
      if (entry.record_count !== undefined && (typeof entry.record_unit !== 'string' || !entry.record_unit.trim())) {
        issues.push(issue('missing_record_count_unit', `${path}.record_unit`, '提供 record_count 时必须说明实际计数单位。'));
      }
      if (entry.record_count === undefined && entry.record_unit !== undefined) {
        issues.push(issue('record_count_unit_without_count', `${path}.record_unit`, '没有 record_count 时不能提供计数单位。'));
      }
      if (typeof entry.source_ref === 'string' && typeof entry.record_count === 'number' && typeof entry.record_unit === 'string') {
        if (!isSupportedRecordUnit(entry.record_unit)) {
          issues.push(issue('unsupported_record_count_unit', `${path}.record_unit`, `不支持的 record_unit：${entry.record_unit}。`));
        } else {
          const expectedCount = coverageEntityCount(value, entry.source_ref, entry.record_unit);
          if (expectedCount !== undefined && expectedCount !== entry.record_count) {
            issues.push(issue(
              'coverage_fact_count_mismatch',
              `${path}.record_count`,
              `coverage 声明 ${entry.record_count} 个 ${entry.record_unit}，按该来源证据关联到 IR 事实的数量为 ${expectedCount}。`,
            ));
          }
        }
      }
      if (typeof entry.source_ref === 'string' && typeof entry.scope === 'string'
        && ['model_catalog', 'pricing', 'api', 'capability', 'plan', 'documentation'].includes(entry.scope)
        && (entry.market === undefined || entry.market === 'cn' || entry.market === 'global')) {
        const key = JSON.stringify([entry.source_ref, entry.scope, entry.market ?? null]);
        if (coverageKeys.has(key)) {
          issues.push(issue('duplicate_coverage_record', path, '同一来源、数据域和市场只能有一条 coverage 记录。'));
        }
        coverageKeys.add(key);
      }
    });
  }

  if (!Array.isArray(value.document_observations)) {
    issues.push(issue('invalid_document_observations', '$.document_observations', 'document_observations 必须是数组。'));
  } else {
    value.document_observations.forEach((observation, index) => {
      const path = `$.document_observations[${index}]`;
      if (!isRecord(observation) || typeof observation.source_ref !== 'string' || !sourceRefSet.has(observation.source_ref)) {
        issues.push(issue('unknown_observation_source', `${path}.source_ref`, '文档观察必须引用 source_refs 中的来源。'));
      }
    });
  }

  const services = Array.isArray(value.services) ? value.services : [];
  if (!Array.isArray(value.services)) issues.push(issue('invalid_services', '$.services', 'services 必须是数组。'));
  if (!Array.isArray(value.review_items)) {
    issues.push(issue('invalid_review_items', '$.review_items', 'review_items 必须是数组。'));
  } else {
    const reviewIds = new Set<string>();
    value.review_items.forEach((review, index) => {
      const path = `$.review_items[${index}]`;
      if (!isRecord(review)) {
        issues.push(issue('invalid_review_item', path, 'ReviewItem 必须是对象。'));
        return;
      }
      if (typeof review.id !== 'string' || !review.id.trim()) {
        issues.push(issue('invalid_review_item_id', `${path}.id`, 'ReviewItem 必须有非空 ID。'));
      } else if (reviewIds.has(review.id)) {
        issues.push(issue('duplicate_review_item_id', `${path}.id`, `ReviewItem ID 重复：${review.id}`));
      } else {
        reviewIds.add(review.id);
      }
      if (!['unparsed_fact', 'ambiguous_identity', 'source_conflict', 'incomplete_coverage', 'unsupported_mapping'].includes(String(review.kind))) {
        issues.push(issue('invalid_review_item_kind', `${path}.kind`, 'ReviewItem kind 不受支持。'));
      }
      if (typeof review.message !== 'string' || !review.message.trim()) {
        issues.push(issue('invalid_review_item_message', `${path}.message`, 'ReviewItem message 必须是非空字符串。'));
      }
      if (!Array.isArray(review.evidence) || review.evidence.length === 0) {
        issues.push(issue('missing_review_evidence', `${path}.evidence`, 'ReviewItem 必须包含至少一条来源证据。'));
      }
    });
  }

  if (Array.isArray(coverage) && Array.isArray(value.services)) {
    coverage.forEach((entry, index) => {
      if (!isRecord(entry) || entry.scope !== 'model_catalog' || entry.status !== 'complete'
        || !Number.isInteger(entry.record_count) || typeof entry.source_ref !== 'string') return;
      const sourceRef = entry.source_ref;
      const market = entry.market;
      const modelIds = new Set<string>();
      services.forEach((service) => {
        if (!isRecord(service) || !Array.isArray(service.offerings)) return;
        const serviceId = isRecord(service.id) && typeof service.id.value === 'string' ? service.id.value : '';
        const accountMarket = serviceMarketForId(serviceId)?.toLowerCase();
        if (market && accountMarket !== market) return;
        service.offerings.forEach((offering) => {
          if (!isRecord(offering) || !isRecord(offering.provider_model_id) || typeof offering.provider_model_id.value !== 'string') return;
          const supplyObservations = Array.isArray(offering.supply_observations) ? offering.supply_observations : [];
          const evidenceReferences = supplyObservations.flatMap((observation) => isRecord(observation) && Array.isArray(observation.evidence) ? observation.evidence : []);
          if (evidenceReferences.some((reference) => isRecord(reference) && reference.source_ref === sourceRef)) {
            modelIds.add(offering.provider_model_id.value);
          }
        });
      });
      if (modelIds.size !== entry.record_count) {
        issues.push(issue('model_catalog_coverage_count_mismatch', `$.coverage[${index}].record_count`, `完整模型目录声明 ${entry.record_count} 条，但 IR 中仅有 ${modelIds.size} 个由该来源支持的唯一 Offering。`));
      }
    });
  }

  const uniqueFactIds = (entries: unknown[], basePath: string, label: string): Set<string> => {
    const ids = new Set<string>();
    entries.forEach((entry, index) => {
      const id = isRecord(entry) && isRecord(entry.id) ? entry.id.value : undefined;
      if (typeof id !== 'string' || !id.trim()) {
        issues.push(issue('invalid_fact_id', `${basePath}[${index}].id.value`, `${label}必须有非空 ID。`));
        return;
      }
      if (ids.has(id)) issues.push(issue('duplicate_fact_id', `${basePath}[${index}].id.value`, `${label} ID 重复：${id}`));
      ids.add(id);
    });
    return ids;
  };

  const serviceIds = uniqueFactIds(services, '$.services', 'Service');
  void serviceIds;
  services.forEach((service, serviceIndex) => {
    const servicePath = `$.services[${serviceIndex}]`;
    if (!isRecord(service)) {
      issues.push(issue('invalid_service', servicePath, 'Service 必须是对象。'));
      return;
    }
    const serviceId = isRecord(service.id) ? service.id.value : undefined;
    if (typeof serviceId === 'string' && !serviceMarketForId(serviceId)) {
      issues.push(issue('invalid_service_market_id', `${servicePath}.id.value`, 'Service ID 必须是已登记的市场 ID。'));
    }
    const endpoints = Array.isArray(service.endpoints) ? service.endpoints : [];
    const endpointIds = uniqueFactIds(endpoints, `${servicePath}.endpoints`, 'Endpoint');
    const capabilities = Array.isArray(service.capabilities) ? service.capabilities : [];
    const capabilityIds = uniqueFactIds(capabilities, `${servicePath}.capabilities`, 'Capability');
    capabilities.forEach((capability, capabilityIndex) => {
      if (!isRecord(capability)) return;
      const capabilityPath = `${servicePath}.capabilities[${capabilityIndex}]`;
      const prices = Array.isArray(capability.prices) ? capability.prices : [];
      prices.forEach((price, priceIndex) => {
        const pricePath = `${capabilityPath}.prices[${priceIndex}]`;
        if (!isRecord(price)) return;
        validatePriceFact(price, pricePath, issues);
        const capabilityRef = isRecord(price.capability_ref) ? price.capability_ref.value : undefined;
        if (capabilityRef !== undefined && capabilityRef !== (isRecord(capability.id) ? capability.id.value : undefined)) {
          issues.push(issue('price_capability_mismatch', `${pricePath}.capability_ref.value`, 'Capability 价格必须引用所属 Capability。'));
        }
        const operationRef = isRecord(price.operation_ref) ? price.operation_ref.value : undefined;
        if (operationRef !== undefined && !(Array.isArray(capability.operations) && capability.operations.some((operation) => isRecord(operation) && isRecord(operation.id) && operation.id.value === operationRef))) {
          issues.push(issue('unknown_capability_price_operation', `${pricePath}.operation_ref.value`, 'Capability 价格引用的 Operation 必须存在于该 Capability。'));
        }
      });
    });
    const plans = Array.isArray(service.plans) ? service.plans : [];
    uniqueFactIds(plans, `${servicePath}.plans`, 'Plan');
    plans.forEach((plan, planIndex) => {
      if (!isRecord(plan)) return;
      const planPath = `${servicePath}.plans[${planIndex}]`;
      if (plan.ratio !== undefined
        && (!isRecord(plan.ratio) || !isDecimalString(plan.ratio.value))) {
        issues.push(issue('invalid_plan_ratio', `${planPath}.ratio.value`, 'Plan ratio 必须是非负十进制字符串。'));
      }
      if (plan.credits !== undefined) {
        const credits = isRecord(plan.credits) ? plan.credits.value : undefined;
        const numericCredits = typeof credits === 'number'
          ? credits
          : typeof credits === 'string' && /^~\d+$/.test(credits)
            ? Number(credits.slice(1))
            : Number.NaN;
        if (!Number.isSafeInteger(numericCredits) || numericCredits < 0) {
          issues.push(issue('invalid_plan_credits', `${planPath}.credits.value`, 'Plan Credits 必须是非负安全整数；估算值使用 ~ 前缀。'));
        }
      }
      if (plan.credits !== undefined && plan.ratio !== undefined) {
        issues.push(issue('plan_credits_ratio_conflict', planPath, '同一 Plan 应使用 Credits 数量或 ratio 其中一种额度口径。'));
      }
    });
    const offerings = Array.isArray(service.offerings) ? service.offerings : [];
    const offeringIds = new Set<string>();
    offerings.forEach((offering, offeringIndex) => {
      const offeringPath = `${servicePath}.offerings[${offeringIndex}]`;
      if (!isRecord(offering)) {
        issues.push(issue('invalid_offering', offeringPath, 'Offering 必须是对象。'));
        return;
      }
      const providerModelId = isRecord(offering.provider_model_id) ? offering.provider_model_id.value : undefined;
      if (typeof providerModelId !== 'string' || !providerModelId.trim()) {
        issues.push(issue('invalid_provider_model_id', `${offeringPath}.provider_model_id.value`, 'provider_model_id 必须是非空字符串。'));
      } else if (offeringIds.has(providerModelId)) {
        issues.push(issue('duplicate_offering_id', `${offeringPath}.provider_model_id.value`, `Service 内 provider_model_id 重复：${providerModelId}`));
      } else offeringIds.add(providerModelId);
      const linkedServiceId = isRecord(offering.service_id) ? offering.service_id.value : undefined;
      if (linkedServiceId !== serviceId) {
        issues.push(issue('offering_service_mismatch', `${offeringPath}.service_id.value`, 'Offering 的 service_id 必须与所属 Service 一致。'));
      }

      const operations = Array.isArray(offering.operations) ? offering.operations : [];
      uniqueFactIds(operations, `${offeringPath}.operations`, 'Operation');
      operations.forEach((operation, operationIndex) => {
        if (!isRecord(operation)) return;
        const routes = Array.isArray(operation.routes) ? operation.routes : [];
        uniqueFactIds(routes, `${offeringPath}.operations[${operationIndex}].routes`, 'Route');
        routes.forEach((route, routeIndex) => {
          const endpointRef = isRecord(route) && isRecord(route.endpoint_ref) ? route.endpoint_ref.value : undefined;
          if (typeof endpointRef !== 'string' || !endpointIds.has(endpointRef)) {
            issues.push(issue('unknown_route_endpoint', `${offeringPath}.operations[${operationIndex}].routes[${routeIndex}].endpoint_ref.value`, 'Route 必须引用所属 Service 中存在的 Endpoint。'));
          }
        });
      });

      const prices = Array.isArray(offering.prices) ? offering.prices : [];
      prices.forEach((price, priceIndex) => {
        const pricePath = `${offeringPath}.prices[${priceIndex}]`;
        if (!isRecord(price)) return;
        validatePriceFact(price, pricePath, issues);
        const priceModelId = isRecord(price.provider_model_id) ? price.provider_model_id.value : undefined;
        if (priceModelId !== undefined && priceModelId !== providerModelId) {
          issues.push(issue('price_offering_mismatch', `${pricePath}.provider_model_id.value`, '模型价格必须引用当前 Offering 的 provider_model_id。'));
        }
        const operationRef = isRecord(price.operation_ref) ? price.operation_ref.value : undefined;
        if (operationRef !== undefined && !operations.some((operation) => isRecord(operation) && isRecord(operation.id) && operation.id.value === operationRef)) {
          issues.push(issue('unknown_price_operation', `${pricePath}.operation_ref.value`, '价格引用的 Operation 必须存在于当前 Offering。'));
        }
        const capabilityRef = isRecord(price.capability_ref) ? price.capability_ref.value : undefined;
        if (capabilityRef !== undefined && (typeof capabilityRef !== 'string' || !capabilityIds.has(capabilityRef))) {
          issues.push(issue('unknown_price_capability', `${pricePath}.capability_ref.value`, '价格引用的 Capability 必须存在于所属 Service。'));
        }
      });
    });
  });

  const visitEvidence = (node: unknown, path: string): void => {
    if (Array.isArray(node)) {
      node.forEach((child, index) => visitEvidence(child, `${path}[${index}]`));
      return;
    }
    if (!isRecord(node)) return;

    if ('source_ref' in node && (typeof node.source_ref !== 'string' || !sourceRefSet.has(node.source_ref))) {
      issues.push(issue('unknown_evidence_source', `${path}.source_ref`, '字段证据必须引用 IR source_refs 中的来源。'));
    }
    if ('locator' in node && (typeof node.locator !== 'string' || !node.locator.trim())) {
      issues.push(issue('invalid_evidence_locator', `${path}.locator`, '证据定位如有提供，必须是非空字符串。'));
    }
    if ('assertion' in node && (typeof node.assertion !== 'string' || !node.assertion.trim())) {
      issues.push(issue('invalid_evidence_assertion', `${path}.assertion`, '证据说明如有提供，必须是非空字符串。'));
    }

    for (const [key, child] of Object.entries(node)) visitEvidence(child, `${path}.${key}`);
  };
  const visitObserved = (node: unknown, path: string): void => {
    if (Array.isArray(node)) {
      node.forEach((child, index) => visitObserved(child, `${path}[${index}]`));
      return;
    }
    if (!isRecord(node)) return;
    if ('value' in node && 'evidence' in node) {
      if (!Array.isArray(node.evidence) || node.evidence.length === 0) {
        issues.push(issue('missing_observed_evidence', path, 'IR 中每个已归一化事实都必须至少关联一条来源证据。'));
      }
    }
    for (const [key, child] of Object.entries(node)) visitObserved(child, `${path}.${key}`);
  };
  visitObserved(value.profile, '$.profile');
  visitObserved(value.services, '$.services');
  visitEvidence(value.profile, '$.profile');
  visitEvidence(value.document_observations, '$.document_observations');
  visitEvidence(value.services, '$.services');
  visitEvidence(value.review_items, '$.review_items');

  return issues;
}

export function assertValidProviderCollectionIR(
  value: unknown,
  snapshots: readonly SnapshotMetadata[],
  sourceDefinitions: readonly Pick<IngestSource, 'id' | 'scope' | 'market'>[] = [],
): asserts value is ProviderCollectionIR {
  const issues = validateProviderCollectionIR(value, snapshots, sourceDefinitions);
  if (issues.length) {
    const summary = issues.map(({ code, path, message }) => `${code} ${path}: ${message}`).join('\n');
    throw new Error(`ProviderCollectionIR 校验失败：\n${summary}`);
  }
}
