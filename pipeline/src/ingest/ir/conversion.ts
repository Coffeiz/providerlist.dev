import { createHash } from 'node:crypto';
import type {
  Evidence,
  CapabilityInput,
  Offering,
  Plan,
  ParameterSpec,
  PricingGroup,
  PricingRate,
  ProviderDocument,
  Route,
  Service,
  ServiceCapability,
  CapabilityOutput,
} from '@providerlist/schema/types';
import { validateProviderDocument } from '@providerlist/schema/validation';
import { sourceFromSnapshot } from '../provenance.ts';
import type { SnapshotMetadata } from '../types.ts';
import type { ModelReferenceResolution, Observed, OperationFact, ProviderCollectionIR } from './provider-collection.ts';
import { assertValidProviderCollectionIR } from './validation.ts';
import { normalizeProviderCollectionPricingContexts } from './pricing-context.ts';

export interface ProviderProjectionResult {
  readonly status: 'projected' | 'needs_review';
  readonly document: ProviderDocument | null;
  readonly issues: readonly string[];
  readonly review_notes: readonly string[];
}

type IdentityKey = `${string}\u0000${string}`;

const MODEL_OPERATION_CAPABILITY_KIND: Readonly<Record<string, string>> = {
  web_search: 'web_search',
  web_fetch: 'web_fetch',
  file_search: 'file_search',
  batch_processing: 'batch',
};

/** Normalize legacy Provider capability IDs before the public projection. */
function normalizeServiceCapabilityKind(kind: string): string {
  return kind === 'url_context' ? 'web_fetch' : kind;
}

interface PromotedModelToolGroup {
  readonly key: string;
  readonly kind: string;
  readonly endpointId?: string;
  readonly operation: OperationFact;
  readonly routes: ProviderCollectionIR['services'][number]['offerings'][number]['operations'][number]['routes'][number][];
}

function promotedModelToolGroups(facts: ProviderCollectionIR['services'][number]): PromotedModelToolGroup[] {
  const groups = new Map<string, PromotedModelToolGroup>();
  for (const offering of facts.offerings) {
    for (const operation of offering.operations) {
      const kind = MODEL_OPERATION_CAPABILITY_KIND[operation.kind.value];
      if (!kind) continue;
      const routesByEndpoint = new Map<string, typeof operation.routes>();
      if (operation.routes.length === 0) routesByEndpoint.set('', []);
      for (const route of operation.routes) {
        const endpointId = route.endpoint_ref.value;
        routesByEndpoint.set(endpointId, [...(routesByEndpoint.get(endpointId) ?? []), route]);
      }
      const operationShape = canonicalJson({
        input: observedValue(operation.input ?? legacyInputOutput(operation).input) ?? null,
        output: observedValue(operation.output ?? legacyInputOutput(operation).output) ?? null,
        parameters: observedValue(operation.parameters) ?? null,
        constraints: observedValue(operation.constraints) ?? null,
        schema_operation: observedValue(operation.schema_operation) ?? null,
      });
      for (const [endpointId, routes] of routesByEndpoint) {
        const key = canonicalJson({ kind, endpointId: endpointId || null, operationShape });
        const existing = groups.get(key);
        if (existing) {
          const knownRoutes = new Set(existing.routes.map((route) => canonicalJson({
            endpoint_ref: route.endpoint_ref.value,
            protocol: route.protocol.value,
            method: route.method.value,
            path: route.path_template.value,
          })));
          for (const route of routes) {
            const routeKey = canonicalJson({
              endpoint_ref: route.endpoint_ref.value,
              protocol: route.protocol.value,
              method: route.method.value,
              path: route.path_template.value,
            });
            if (!knownRoutes.has(routeKey)) {
              existing.routes.push(route);
              knownRoutes.add(routeKey);
            }
          }
        } else {
          groups.set(key, {
            key,
            kind,
            ...(endpointId ? { endpointId } : {}),
            operation: { ...operation, routes },
            routes: [...routes],
          });
        }
      }
    }
  }
  return [...groups.values()];
}

function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    return `{${Object.keys(record).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function uniqueValues<T>(values: readonly T[]): T[] {
  const seen = new Set<string>();
  return values.filter((value) => {
    const key = canonicalJson(value);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Collapse collector operations into one market capability per kind. */
function mergeCapabilitiesByKind(capabilities: readonly ServiceCapability[]): ServiceCapability[] {
  const groups = new Map<string, ServiceCapability>();
  for (const capability of capabilities) {
    const current = groups.get(capability.kind);
    if (!current) {
      groups.set(capability.kind, capability);
      continue;
    }
    const merged: ServiceCapability = { ...current };
    for (const field of ['routes', 'input', 'output', 'constraints', 'pricing', 'required_plan_ids', 'evidence_refs'] as const) {
      const values = uniqueValues([...(current[field] ?? []), ...(capability[field] ?? [])]);
      if (values.length) Object.assign(merged, { [field]: values });
    }
    if (current.parameters || capability.parameters) {
      const parameters = new Map<string, ParameterSpec[]>();
      for (const parameter of [...(current.parameters ?? []), ...(capability.parameters ?? [])]) {
        const key = `${parameter.name}\u0000${parameter.type}`;
        parameters.set(key, [...(parameters.get(key) ?? []), parameter]);
      }
      const mergedParameters = [...parameters.values()].map((items): ParameterSpec => {
        const first = items[0]!;
        const result: Record<string, unknown> = { ...first, required: items.every((item) => item.required) };
        const enums = uniqueValues(items.flatMap((item) => item.enum ?? []));
        if (enums.length) result.enum = enums;
        else delete result.enum;
        const mins = items.map(({ min }) => min).filter((value): value is number => value !== undefined);
        const maxes = items.map(({ max }) => max).filter((value): value is number => value !== undefined);
        if (mins.length) result.min = Math.min(...mins);
        else delete result.min;
        if (maxes.length) result.max = Math.max(...maxes);
        else delete result.max;
        for (const field of ['nullable', 'step', 'default', 'description'] as const) {
          const values = uniqueValues(items.map((item) => item[field]).filter((value) => value !== undefined));
          if (values.length === 1) result[field] = values[0];
          else if (field !== 'nullable') delete result[field];
        }
        for (const field of ['route_mappings', 'evidence_refs'] as const) {
          const values = uniqueValues(items.flatMap((item) => item[field] ?? []));
          if (values.length) result[field] = values;
          else delete result[field];
        }
        return result as unknown as ParameterSpec;
      });
      Object.assign(merged, { parameters: mergedParameters });
    }
    if (current.links || capability.links) {
      const links = { ...(current.links ?? {}) };
      const conflictingLinkKeys = new Set<string>();
      for (const [key, value] of Object.entries(capability.links ?? {})) {
        if (conflictingLinkKeys.has(key)) continue;
        if (!(key in links) || links[key] === value) links[key] = value;
        else {
          delete links[key];
          conflictingLinkKeys.add(key);
        }
      }
      if (Object.keys(links).length) Object.assign(merged, { links });
      else delete (merged as { links?: ServiceCapability['links'] }).links;
    }
    if (current.execution && capability.execution && canonicalJson(current.execution) !== canonicalJson(capability.execution)) {
      delete (merged as { execution?: ServiceCapability['execution'] }).execution;
    } else if (capability.execution) {
      Object.assign(merged, { execution: capability.execution });
    }
    groups.set(capability.kind, merged);
  }
  return [...groups.values()];
}

function stableId(prefix: string, value: string): string {
  return `${prefix}-${createHash('sha1').update(value).digest('hex').slice(0, 12)}`;
}

function observedValue<T>(fact: Observed<T> | undefined): T | undefined {
  return fact?.value;
}

/** Read candidate IR written before the source contract standardized these names. */
function legacyInputOutput(fact: { readonly input?: unknown; readonly output?: unknown }): {
  input?: Observed<readonly CapabilityInput[]>;
  output?: Observed<readonly CapabilityOutput[]>;
} {
  const legacy = fact as typeof fact & {
    input_slots?: Observed<readonly CapabilityInput[]>;
    output_specs?: Observed<readonly CapabilityOutput[]>;
  };
  return { input: legacy.input_slots, output: legacy.output_specs };
}

function sourceRefsIn(value: unknown): string[] {
  const refs = new Set<string>();
  const visit = (entry: unknown): void => {
    if (Array.isArray(entry)) {
      entry.forEach(visit);
      return;
    }
    if (!entry || typeof entry !== 'object') return;
    const record = entry as Record<string, unknown>;
    if (Array.isArray(record.evidence)) {
      for (const ref of record.evidence) {
        if (!ref || typeof ref !== 'object') continue;
        const sourceRef = (ref as Record<string, unknown>).source_ref;
        if (typeof sourceRef === 'string') refs.add(sourceRef);
      }
    }
    Object.values(record).forEach(visit);
  };
  visit(value);
  return [...refs];
}

function evidenceFor(
  fact: Observed<unknown> | undefined,
  fieldPath: string,
  evidence: Map<string, Evidence>,
  issues: string[],
): string[] {
  if (!fact) return [];
  return fact.evidence.map((ref, index) => {
    const sourceRef = ref.source_ref;
    if (!sourceRef) {
      issues.push(`${fieldPath} 的第 ${index + 1} 条证据缺少 source_ref`);
      return '';
    }
    const key = `${sourceRef}\u0000${fieldPath}\u0000${ref.locator ?? ''}\u0000${ref.assertion ?? ''}`;
    const id = stableId('ir-evidence', key);
    if (!evidence.has(id)) {
      evidence.set(id, {
        id,
        source_ref: sourceRef,
        field: fieldPath,
        ...(ref.locator ? { locator: ref.locator } : {}),
        ...(ref.assertion ? { assertion: ref.assertion } : {}),
      });
    }
    return id;
  }).filter(Boolean);
}

function toOperation(
  fact: ProviderCollectionIR['services'][number]['offerings'][number]['operations'][number],
  path: string,
  evidence: Map<string, Evidence>,
  issues: string[],
  routeRegistry: Map<string, Map<string, Route>>,
  pricing: readonly PricingGroup[] = [],
): ServiceCapability & { readonly document_ref?: string } {
  const base = fact.schema_operation?.value;
  // Legacy collectors may still provide a prose description at runtime. Keep
  // the projection boundary strict while retaining structured Operation fields.
  const baseWithoutDescription = base
    ? Object.fromEntries(Object.entries(base).filter(([key]) => !['description', 'id', 'supported_model_ids', 'base_url'].includes(key))) as Partial<ServiceCapability & { readonly document_ref?: string }>
    : {};
  const routes = fact.routes.map((route, index) => {
    const routePath = `${path}/routes/${index}`;
    evidenceFor(route.id, `${routePath}/id`, evidence, issues);
    evidenceFor(route.endpoint_ref, `${routePath}/endpoint_ref`, evidence, issues);
    evidenceFor(route.protocol, `${routePath}/protocol`, evidence, issues);
    evidenceFor(route.method, `${routePath}/method`, evidence, issues);
    evidenceFor(route.path_template, `${routePath}/path_template`, evidence, issues);
    evidenceFor(route.operation_kind, `${routePath}/operation_kind`, evidence, issues);
    evidenceFor(route.reasoning, `${routePath}/reasoning`, evidence, issues);
    evidenceFor(route.callability, `${routePath}/callability`, evidence, issues);
    const documentation = observedValue(route.documentation);
    const projectedRoute: Route = {
      protocol: route.protocol.value as Route['protocol'],
      method: route.method.value,
      path: route.path_template.value,
      ...(observedValue(route.callability) ? { callability: route.callability!.value } : {}),
      ...(documentation ? { documentation } : {}),
    };
    const endpointId = route.endpoint_ref.value;
    const endpointRoutes = routeRegistry.get(endpointId) ?? new Map<string, Route>();
    endpointRoutes.set(canonicalJson(projectedRoute), projectedRoute);
    routeRegistry.set(endpointId, endpointRoutes);
    return projectedRoute;
  });
  const legacy = legacyInputOutput(fact);
  const inputFact = fact.input ?? legacy.input;
  const outputFact = fact.output ?? legacy.output;
  const input = observedValue(inputFact);
  const output = observedValue(outputFact);
  const parameters = observedValue(fact.parameters);
  const constraints = observedValue(fact.constraints);
  evidenceFor(inputFact, `${path}/input`, evidence, issues);
  evidenceFor(outputFact, `${path}/output`, evidence, issues);
  evidenceFor(fact.parameters, `${path}/parameters`, evidence, issues);
  evidenceFor(fact.constraints, `${path}/constraints`, evidence, issues);
  evidenceFor(fact.id, `${path}/id`, evidence, issues);
  evidenceFor(fact.kind, `${path}/kind`, evidence, issues);
  return {
    ...baseWithoutDescription,
    kind: fact.kind.value,
    ...(input ? { input } : {}),
    ...(output ? { output } : {}),
    ...(parameters ? { parameters } : {}),
    ...(constraints ? { constraints } : {}),
    ...(pricing.length ? { pricing } : {}),
    ...(routes.length ? { routes } : {}),
    ...(fact.id.evidence[0]?.source_ref ? { document_ref: fact.id.evidence[0].source_ref } : {}),
  };
}

function toPricingGroups(input: {
  facts: ProviderCollectionIR['services'][number]['offerings'][number]['prices'];
  path: string;
  evidence: Map<string, Evidence>;
  issues: string[];
}): PricingGroup[] {
  const { facts, path, evidence, issues } = input;
  return facts.flatMap((price, index) => {
    const pricePath = `${path}/${index}`;
    if (!price.pricing) {
      issues.push(`${pricePath} 缺少归一化的 pricing 价格组`);
      return [];
    }
    evidenceFor(price.operation_ref, `${pricePath}/operation_ref`, evidence, issues);
    return price.pricing.value.map((group, groupIndex): PricingGroup => {
      const groupPath = `${pricePath}/pricing/${groupIndex}`;
      const currency = observedValue(group.currency);
      const rateValues = observedValue(group.rates) ?? [];
      evidenceFor(group.currency, `${groupPath}/currency`, evidence, issues);
      evidenceFor(group.deployment, `${groupPath}/deployment`, evidence, issues);
      evidenceFor(group.region, `${groupPath}/region`, evidence, issues);
      evidenceFor(group.rates, `${groupPath}/rates`, evidence, issues);
      if (!currency) issues.push(`${groupPath} 缺少币种，无法投影价格`);
      const refs = group.evidence.flatMap((ref, evidenceIndex) => evidenceFor(
        { value: null, evidence: [ref] }, `${groupPath}/evidence/${evidenceIndex}`, evidence, issues,
      ));
      return {
        currency: currency ?? 'XXX',
        rates: rateValues.map((rate): PricingRate => ({
          metric: rate.metric,
          ...(rate.ttl ? { ttl: rate.ttl } : {}),
          ...(rate.context ? { context: rate.context } : {}),
          unit: rate.unit,
          ...(rate.quantity !== undefined ? { quantity: rate.quantity } : {}),
          value: rate.value,
          ...(rate.list_value ? { list_value: rate.list_value } : {}),
        })),
        ...(observedValue(group.deployment) ? { deployment: observedValue(group.deployment) } : {}),
        ...(observedValue(group.region) ? { region: observedValue(group.region) } : {}),
        ...(group.conditions?.length ? { conditions: group.conditions } : {}),
        ...(group.unsupported_metrics?.length ? { unsupported_metrics: group.unsupported_metrics } : {}),
        ...(group.applies_to?.length ? { applies_to: group.applies_to } : {}),
        ...(group.effective_from ? { effective_from: group.effective_from } : {}),
        ...(group.effective_until ? { effective_until: group.effective_until } : {}),
        ...(refs.length ? { evidence_refs: refs } : {}),
      };
    });
  });
}

function toService(
  facts: ProviderCollectionIR['services'][number],
  identityByKey: ReadonlyMap<IdentityKey, ModelReferenceResolution>,
  evidence: Map<string, Evidence>,
  issues: string[],
  reviewNotes: string[],
  preservedService?: Service,
  profileDocs: Readonly<Record<string, string>> = {},
): { service: Service | null; plans: Plan[] } {
  const serviceId = facts.id.value;
  const path = `/services/${serviceId}`;
  const observedName = observedValue(facts.name);
  const name = observedName ?? preservedService?.name;
  const website = observedValue(facts.website) ?? preservedService?.website;
  const docs = { ...profileDocs, ...preservedService?.docs, ...observedValue(facts.docs) };
  if (!observedName && preservedService?.name) {
    reviewNotes.push(`${path}/name 未由本次 IR 采集；预览沿用正式数据中的现值，待补充本次来源证据。`);
  } else if (!name) issues.push(`${path}/name 缺少有来源依据的 Service 名称`);
  evidenceFor(facts.id, `${path}/id`, evidence, issues);
  evidenceFor(facts.name, `${path}/name`, evidence, issues);
  evidenceFor(facts.website, `${path}/website`, evidence, issues);
  evidenceFor(facts.docs, `${path}/docs`, evidence, issues);
  evidenceFor(facts.account_requirements, `${path}/account_requirements`, evidence, issues);
  const routeRegistry = new Map<string, Map<string, Route>>();
  const endpoints = facts.endpoints.map((endpoint, index) => {
    const endpointPath = `${path}/endpoints/${index}`;
    evidenceFor(endpoint.id, `${endpointPath}/id`, evidence, issues);
    evidenceFor(endpoint.base_url, `${endpointPath}/base_url`, evidence, issues);
    evidenceFor(endpoint.api_region, `${endpointPath}/api_region`, evidence, issues);
    evidenceFor(endpoint.region_code, `${endpointPath}/region_code`, evidence, issues);
    evidenceFor(endpoint.documentation, `${endpointPath}/documentation`, evidence, issues);
    const documentation = observedValue(endpoint.documentation);
    return {
      id: endpoint.id.value,
      base_url: endpoint.base_url.value,
      api_region: endpoint.api_region.value,
      ...(documentation ? { documentation } : {}),
    };
  });
  const endpointBaseUrls = new Map(facts.endpoints.map((endpoint) => [endpoint.id.value, endpoint.base_url.value]));
  const capabilities: ServiceCapability[] = facts.capabilities.flatMap((capability, index) => {
    const capabilityPath = `${path}/capabilities/${index}`;
    const capabilityEvidence = evidenceFor(capability.kind, `${capabilityPath}/kind`, evidence, issues);
    evidenceFor(capability.required_plan_ids, `${capabilityPath}/required_plan_ids`, evidence, issues);
    evidenceFor(capability.links, `${capabilityPath}/links`, evidence, issues);
    const capabilityPrices = capability.prices ?? [];
    const operations = capability.operations.map((operation, operationIndex) => toOperation(
      operation, `${capabilityPath}/operations/${operationIndex}`, evidence, issues, routeRegistry,
      toPricingGroups({ facts: capabilityPrices.filter((price) => observedValue(price.operation_ref) === operation.id.value), path: `${capabilityPath}/prices/${operation.id.value}`, evidence, issues }),
    ));
    const pricing = toPricingGroups({ facts: capabilityPrices.filter((price) => !observedValue(price.operation_ref)), path: `${capabilityPath}/pricing`, evidence, issues });
    const requiredPlanIds = observedValue(capability.required_plan_ids);
    const links = observedValue(capability.links);
    if (!operations.length) {
      return [{
        kind: normalizeServiceCapabilityKind(capability.kind.value),
        ...(requiredPlanIds ? { required_plan_ids: requiredPlanIds } : {}),
        ...(pricing.length ? { pricing } : {}),
        ...(links ? { links } : {}),
        ...(capabilityEvidence.length ? { evidence_refs: capabilityEvidence } : {}),
      }];
    }
    return operations.map((operation) => {
      const { kind: _operationKind, document_ref: _documentRef, pricing: operationPricing, ...operationFields } = operation;
      return {
        kind: normalizeServiceCapabilityKind(capability.kind.value),
        ...(requiredPlanIds ? { required_plan_ids: requiredPlanIds } : {}),
        ...operationFields,
        ...((operationPricing?.length || pricing.length) ? { pricing: [...(operationPricing ?? []), ...pricing] } : {}),
        ...(links ? { links } : {}),
        ...(capabilityEvidence.length ? { evidence_refs: capabilityEvidence } : {}),
      };
    });
  });
  const modelToolCapabilities: ServiceCapability[] = promotedModelToolGroups(facts).map((group, groupIndex) => {
    const operation = toOperation(
      group.operation,
      `${path}/model_api_capabilities/${groupIndex}`,
      evidence,
      issues,
      routeRegistry,
    );
    const { kind: _operationKind, document_ref: _documentRef, pricing: _operationPricing, ...operationFields } = operation;
    const baseUrl = group.endpointId ? endpointBaseUrls.get(group.endpointId) : undefined;
    if (group.endpointId && !baseUrl) {
      issues.push(`${path}/model_api_capabilities/${groupIndex} 引用未登记的 Endpoint：${group.endpointId}`);
    }
    return {
      kind: group.kind,
      ...operationFields,
    };
  });
  const offeringIdByModel = new Map(facts.offerings.map((offering) => [offering.provider_model_id.value, offering.provider_model_id.value]));
  const offerings: Offering[] = facts.offerings.map((offering, index) => {
    const offeringPath = `${path}/offerings/${index}`;
    const providerModelId = offering.provider_model_id.value;
    const id = offeringIdByModel.get(providerModelId)!;
    const resolution = identityByKey.get(`${serviceId}\u0000${providerModelId}`);
    if (!resolution) issues.push(`${offeringPath}/model_ref 缺少身份解析结果`);
    else {
      reviewNotes.push(`${serviceId}/${providerModelId} → ${resolution.model_ref ?? '未关联'}（${resolution.match}）：${resolution.review_note}`);
      if (resolution.match === 'ambiguous' || resolution.match === 'unmatched') {
        issues.push(`${offeringPath}/model_ref 需要人工核对：${resolution.review_note}`);
      }
    }
    const modelRef = resolution?.model_ref ?? null;
    const offeringEvidence = evidenceFor(offering.provider_model_id, `${offeringPath}/id`, evidence, issues);
    evidenceFor(offering.service_id, `${offeringPath}/service_id`, evidence, issues);
    evidenceFor(offering.api_limits, `${offeringPath}/api_limits`, evidence, issues);
    for (const observation of offering.supply_observations) {
      reviewNotes.push(`${serviceId}/${providerModelId} 供应观察 ${observation.kind}，不代表账号资格或实际调用状态。`);
    }
    const hasCurrentSupplyEvidence = offering.supply_observations.some(({ kind }) => kind === 'listed_current' || kind === 'priced_current');
    const hasHistoricalOnlyEvidence = offering.supply_observations.some(({ kind }) => kind === 'listed_historical')
      && !hasCurrentSupplyEvidence;
    const hasCollectedPrice = offering.prices.some(({ pricing }) =>
      pricing?.value.some(({ rates }) => (observedValue(rates) ?? []).length > 0) ?? false,
    );
    const supplyStatus = hasCurrentSupplyEvidence || (hasCollectedPrice && !hasHistoricalOnlyEvidence) ? 'active' : 'unknown';
    const pricing = toPricingGroups({ facts: offering.prices, path: `${offeringPath}/pricing`, evidence, issues });
    const apiLimits = observedValue(offering.api_limits);
    return {
      id,
      service_id: serviceId,
      model_ref: modelRef,
      status: supplyStatus,
      ...(apiLimits ? { api_limits: apiLimits } : {}),
      ...(pricing.length ? { pricing } : {}),
      ...(offeringEvidence.length ? { evidence_refs: offeringEvidence } : {}),
    };
  });
  const endpointsWithRoutes = endpoints.map((endpoint) => {
    const routes = routeRegistry.get(endpoint.id);
    return routes?.size ? { ...endpoint, routes: [...routes.values()] } : endpoint;
  });
  const servicePricing = toPricingGroups({ facts: facts.prices ?? [], path: `${path}/pricing`, evidence, issues });
  const plans: Plan[] = facts.plans.map((plan, index) => {
    const planPath = `${path}/plans/${index}`;
    const planEvidence = evidenceFor(plan.id, `${planPath}/id`, evidence, issues);
    const billingEvidence = plan.billing_options.value.map((_option, optionIndex) => evidenceFor(
      plan.billing_options,
      `${planPath}/billing_options/${optionIndex}/evidence_refs`,
      evidence,
      issues,
    ));
    const nameEvidence = evidenceFor(plan.name, `${planPath}/name`, evidence, issues);
    const descriptionEvidence = evidenceFor(plan.description, `${planPath}/description`, evidence, issues);
    const linksEvidence = evidenceFor(plan.links, `${planPath}/links`, evidence, issues);
    const ratioEvidence = evidenceFor(plan.ratio, `${planPath}/ratio`, evidence, issues);
    const description = observedValue(plan.description);
    const links = observedValue(plan.links);
    const ratio = observedValue(plan.ratio);
    const allowance = observedValue(plan.allowance);
    const credits = observedValue(plan.credits);
    const feeCurrencies = new Set(plan.billing_options.value.flatMap((option) => [option.subscription_fee?.currency, option.promotional_fee?.currency].filter((currency): currency is string => Boolean(currency))));
    const currency = observedValue(plan.currency) ?? [...feeCurrencies][0];
    if (feeCurrencies.size > 1 || (currency && [...feeCurrencies].some((feeCurrency) => feeCurrency !== currency))) {
      issues.push(`${planPath}/currency 套餐的计费选项必须使用同一币种`);
    }
    return {
      id: plan.id.value,
      service_ref: serviceId,
      ...(observedValue(plan.name) ? { name: plan.name!.value } : {}),
      ...(currency ? { currency } : {}),
      billing_options: plan.billing_options.value.map((option, optionIndex) => ({
        billing_period: option.billing_period,
        ...(option.subscription_fee ? { price: option.subscription_fee.amount } : {}),
        ...(option.promotional_fee ? { sale_price: option.promotional_fee.amount } : {}),
        ...(option.sale_type ? { sale_type: option.sale_type } : {}),
        ...(billingEvidence[optionIndex]?.length ? { evidence_refs: [...(option.evidence_refs ?? []), ...billingEvidence[optionIndex]!] } : {}),
      })),
      ...(ratio !== undefined ? { ratio } : {}),
      ...(description ? { description } : {}),
      ...(links ? { links } : {}),
      ...(allowance ? { allowance } : {}),
      ...(credits !== undefined ? { credits } : {}),
      ...([...planEvidence, ...nameEvidence, ...descriptionEvidence, ...linksEvidence, ...ratioEvidence, ...billingEvidence.flat()].length
        ? { evidence_refs: [...planEvidence, ...nameEvidence, ...descriptionEvidence, ...linksEvidence, ...ratioEvidence, ...billingEvidence.flat()] }
        : {}),
    };
  });
  if (!name) return { service: null, plans };
  return {
    service: {
      id: serviceId,
      provider_id: '',
      name,
      ...(website ? { website } : {}),
      ...(Object.keys(docs).length ? { docs } : {}),
      ...(endpointsWithRoutes.length ? { endpoints: endpointsWithRoutes } : {}),
      ...(facts.account_requirements ? { account_requirements: facts.account_requirements.value } : {}),
      ...(offerings.length ? { offerings } : {}),
      ...(capabilities.length || modelToolCapabilities.length ? { capabilities: mergeCapabilitiesByKind([...capabilities, ...modelToolCapabilities]) } : {}),
      ...(servicePricing.length ? { pricing: servicePricing } : {}),
      ...(plans.length ? { plan_ids: plans.map(({ id }) => id) } : {}),
      ...(sourceRefsIn(facts).length ? { sources: sourceRefsIn(facts) } : {}),
    },
    plans,
  };
}

function docsForMarket(docs: Readonly<Record<string, string>> | undefined, marketId: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, url] of Object.entries(docs ?? {})) {
    const prefix = /^(cn|china|global|intl|international)_/i.exec(key)?.[1]?.toLowerCase();
    const suffix = /_(cn|china|global|intl|international)$/i.exec(key)?.[1]?.toLowerCase();
    const scope = prefix ?? suffix;
    if (scope && !((scope === 'cn' || scope === 'china') && marketId === 'cn')
      && !((scope === 'global' || scope === 'intl' || scope === 'international') && marketId === 'global')) continue;
    const normalizedKey = key
      .replace(/^(cn|china|global|intl|international)_/i, '')
      .replace(/_(cn|china|global|intl|international)$/i, '');
    result[normalizedKey] = url;
  }
  return result;
}

/** 将已验证 IR 仅投影到公开字段；不解析 Provider 数据，也不写源文件。 */
export function projectProviderCollectionIR(input: {
  readonly ir: ProviderCollectionIR;
  readonly snapshots: readonly SnapshotMetadata[];
  readonly identityResolutions: readonly ModelReferenceResolution[];
  readonly generatedAt: string;
  /** 仅用于只读预览，补齐公开 Schema 必填字段；缺失事实仍保留待核状态。 */
  readonly preserveFrom?: ProviderDocument;
}): ProviderProjectionResult {
  const ir = normalizeProviderCollectionPricingContexts(input.ir);
  assertValidProviderCollectionIR(ir, input.snapshots);
  const issues: string[] = [];
  const reviewNotes: string[] = [];
  const evidence = new Map<string, Evidence>();
  const identityByKey = new Map<IdentityKey, ModelReferenceResolution>(input.identityResolutions.map((resolution) => [`${resolution.service_id}\u0000${resolution.provider_model_id}`, resolution]));
  const profile = ir.profile;
  let reviewRequired = false;
  const preservedProfile = input.preserveFrom?.provider;
  const observedProviderName = observedValue(profile?.name);
  const observedAliases = observedValue(profile?.aliases);
  const observedKind = observedValue(profile?.kind);
  const providerName = observedProviderName ?? preservedProfile?.name;
  const aliases = observedAliases ?? preservedProfile?.aliases;
  const kind = observedKind ?? preservedProfile?.kind;
  const preservedProfileFields = [
    ['name', observedProviderName, preservedProfile?.name],
    ['aliases', observedAliases, preservedProfile?.aliases],
    ['kind', observedKind, preservedProfile?.kind],
  ] as const;
  for (const [field, observed, preserved] of preservedProfileFields) {
    if (!observed && preserved !== undefined) {
      reviewNotes.push(`/provider/${field} 未由本次 IR 采集；预览沿用正式数据中的现值，待补充本次来源证据。`);
    } else if (!preserved && !observed) {
      issues.push(`Provider profile.${field} 缺少有来源依据的值`);
    }
  }
  evidenceFor(profile?.name, '/provider/name', evidence, issues);
  evidenceFor(profile?.aliases, '/provider/aliases', evidence, issues);
  evidenceFor(profile?.kind, '/provider/kind', evidence, issues);

  const preservedServices = new Map(input.preserveFrom?.services.map((service) => [service.id, service]) ?? []);
  const profileDocs = observedValue(profile?.docs);
  const serviceResults = ir.services.map((service) => toService(
    service, identityByKey, evidence, issues, reviewNotes,
    preservedServices.get(service.id.value),
    docsForMarket(profileDocs, service.id.value),
  ));
  const services = serviceResults.flatMap(({ service }) => service ? [{ ...service, provider_id: ir.provider_id }] : []);
  const plans = serviceResults.flatMap(({ plans: servicePlans }) => servicePlans);
  const sources = input.snapshots.map(sourceFromSnapshot);
  for (const coverage of ir.coverage) {
    if (coverage.status !== 'complete') {
      reviewRequired = true;
      reviewNotes.push(`来源 ${coverage.source_ref} 的 ${coverage.scope} 覆盖为 ${coverage.status}${coverage.note ? `：${coverage.note}` : ''}；投影仅用于差异审阅，按 coverage 合并时保留未采集字段。`);
    }
  }
  for (const item of ir.review_items) {
    reviewRequired = true;
    reviewNotes.push(`IR review ${item.id} (${item.kind})：${item.message}`);
  }
  for (const observation of ir.document_observations) {
    reviewNotes.push(`来源 ${observation.source_ref} 保留原始文档观察：${observation.tables.length} 个表格、${observation.structured_records.length} 条结构化记录、${observation.model_id_mentions.length} 个模型 ID 提及；此观察不自动等同已投影事实。`);
  }
  reviewNotes.push(...(ir.collection_notes ?? []));
  if (!providerName || !aliases || !kind || services.length !== ir.services.length) {
    return { status: 'needs_review', document: null, issues, review_notes: reviewNotes };
  }

  const document: ProviderDocument = {
    schema_version: '1.0.0',
    data_version: input.generatedAt,
    generated_at: input.generatedAt,
    provider: {
      id: ir.provider_id,
      name: providerName!,
      aliases: aliases!,
      kind: kind!,
      sources: ir.source_refs,
    },
    services,
    sources,
    ...(evidence.size ? { evidence: [...evidence.values()] } : {}),
    ...(plans.length ? { plans } : {}),
  };
  const schemaReport = validateProviderDocument(document);
  if (!schemaReport.ok) {
    const schemaIssues = schemaReport.issues.filter(({ severity }) => severity === 'error')
      .map(({ code, path, message }) => `公开 Provider Schema ${code} ${path}: ${message}`);
    return { status: 'needs_review', document: null, issues: [...issues, ...schemaIssues], review_notes: reviewNotes };
  }
  return { status: issues.length || reviewRequired || reviewNotes.some((note) => note.includes('沿用正式数据中的现值')) ? 'needs_review' : 'projected', document, issues, review_notes: reviewNotes };
}
