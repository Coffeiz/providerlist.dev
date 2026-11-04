/**
 * 轻量 JSON Schema 校验与语义校验。
 *
 * 设计取舍（见 docs/architecture.md「Schema 层」）：
 * - 权威契约是 JSON Schema Draft 2020-12；本模块提供**零依赖**的运行时校验，
 *   保证 CI 在没有额外工具链的情况下也能阻止非法发布。
 * - 语义校验（交叉引用、供应状态一致性、约束可满足性）独立于结构校验，
 *   因为它们需要跨文件上下文，JSON Schema 表达不了。
 */

import {
  KNOWN_MODEL_TYPES,
  isKnownModelType,
  isValidModelTypeId,
  type ModelType,
} from './model-types.ts';
import { isKnownCapabilityIOKind, isValidCapabilityIOKindId } from './capability-io-kinds.ts';
import { serviceMarketForId } from './types.ts';

export interface ValidationIssue {
  readonly severity: 'error' | 'warning';
  readonly code: string;
  readonly path: string;
  readonly message: string;
}

export interface ValidationReport {
  readonly ok: boolean;
  readonly issues: readonly ValidationIssue[];
}

const ERROR = 'error' as const;
const WARNING = 'warning' as const;

function issue(
  severity: 'error' | 'warning',
  code: string,
  path: string,
  message: string,
): ValidationIssue {
  return { severity, code, path, message };
}

function isHttpsUrl(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname.length > 0;
  } catch {
    return false;
  }
}

/**
 * Capability 输入/输出类型校验（`input` 与 `output` 共用）。
 *
 * 与 `model_type` 同口径：词法非法是**错误**；未知模态只是**警告**——
 * 未知值必须保留原值，绝不静默归并到 text 或其他已知模态。
 */
function validateCapabilityIOKinds(
  entries: readonly unknown[],
  base: string,
  field: 'input' | 'output',
  issues: ValidationIssue[],
): void {
  for (const [index, entry] of entries.entries()) {
    if (!isRecord(entry)) continue;
    const kind = entry.kind;
    if (typeof kind !== 'string' || kind.length === 0) continue;
    const path = `${base}/${field}/${index}/kind`;
    if (!isValidCapabilityIOKindId(kind)) {
      issues.push(issue(ERROR, 'schema.invalid_capability_io_kind', path, `非法输入/输出类型 ID：${kind}`));
    } else if (!isKnownCapabilityIOKind(kind)) {
      issues.push(
        issue(WARNING, 'schema.unknown_capability_io_kind', path, `未知输入/输出类型「${kind}」，保留原值，不归并到其他模态`),
      );
    }
  }
}

/** 用户界面打开的文档链接必须是官网 HTML 页面；Source.url 可保留 Markdown 抓取地址。 */
function validateReadableDocumentationLinks(
  value: unknown,
  path: string,
  issues: ValidationIssue[],
  inLinkMap = false,
): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => validateReadableDocumentationLinks(item, `${path}/${index}`, issues, inLinkMap));
    return;
  }
  if (!isRecord(value)) {
    if (inLinkMap && typeof value === 'string' && /\.md(?:[?#]|$)/i.test(value)) {
      issues.push(issue(
        ERROR,
        'documentation.markdown_url',
        path,
        '面向用户的文档链接必须使用官网可读页面，不能链接 Markdown 原文 URL',
      ));
    }
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    const escapedKey = key.replace(/~/g, '~0').replace(/\//g, '~1');
    validateReadableDocumentationLinks(
      child,
      `${path}/${escapedKey}`,
      issues,
      inLinkMap || key === 'docs' || key === 'links' || key === 'documentation',
    );
  }
}

export interface ValidateOptions {
  /** 已发布版本号；`data_version` 必须与之匹配（若提供）。 */
  readonly expectedDataVersion?: string;
  /** 允许未收录的币种（默认 false——只接受已知 ISO 4217 代码）。 */
  readonly allowUnknownCurrency?: boolean;
}

/**
 * 已知 ISO 4217 币种代码。
 *
 * 只收录本项目实际会遇到的结算币种 + 常见大额/小数位特殊币种。
 * 「人民币」的正确代码是 `CNY`——`RMB` **不是** ISO 4217 代码，
 * 收录它会让「不同币种严禁直接比较数值」这条规则失效。
 */
export const KNOWN_CURRENCIES: ReadonlySet<string> = new Set([
  'CNY', 'USD', 'EUR', 'JPY', 'GBP', 'HKD', 'TWD', 'KRW', 'SGD',
  'AUD', 'CAD', 'CHF', 'INR', 'RUB', 'BRL', 'MXN', 'ZAR', 'THB',
  'MYR', 'IDR', 'PHP', 'VND', 'TRY', 'PLN', 'CZK', 'SEK', 'NOK',
  'DKK', 'NZD', 'AED', 'SAR', 'ILS', 'EGP', 'NGN', 'KES', 'UAH',
  'RON', 'HUF', 'CLP', 'COP', 'ARS', 'PEN', 'PKR', 'BDT', 'LKR',
  'KWD', 'BHD', 'OMR', 'JOD', 'TND',
]);

/**
 * 校验 Provider 公开文档的结构与语义。
 * 返回的 issues 中 `error` 会阻止发布；`warning` 只做提示。
 */
export function validateProviderDocument(
  doc: unknown,
  options: ValidateOptions = {},
): ValidationReport {
  const issues: ValidationIssue[] = [];

  if (!isRecord(doc)) {
    return {
      ok: false,
      issues: [issue(ERROR, 'schema.root_type', '/', '文档根必须是对象')],
    };
  }

  validateReadableDocumentationLinks(doc, '', issues);

  // ---- 顶层必填 -----------------------------------------------------------
  // 键存在但值为 undefined 同样算「缺少」——
  // 手工编辑 JSON 时很容易留下这种空位。
  for (const key of ['schema_version', 'data_version', 'generated_at', 'provider']) {
    if (!(key in doc) || doc[key] === undefined) {
      issues.push(issue(ERROR, 'schema.required', `/${key}`, `缺少必填字段 ${key}`));
    }
  }

  if (typeof doc.schema_version !== 'string') {
    issues.push(issue(ERROR, 'schema.type', '/schema_version', 'schema_version 必须是字符串'));
  }
  if (typeof doc.data_version !== 'string') {
    issues.push(issue(ERROR, 'schema.type', '/data_version', 'data_version 必须是字符串'));
  }
  if (
    options.expectedDataVersion !== undefined &&
    doc.data_version !== options.expectedDataVersion
  ) {
    issues.push(
      issue(
        ERROR,
        'version.mismatch',
        '/data_version',
        `data_version 不匹配：期望 ${options.expectedDataVersion}，实际 ${String(doc.data_version)}`,
      ),
    );
  }
  if (typeof doc.generated_at !== 'string' || Number.isNaN(Date.parse(doc.generated_at))) {
    issues.push(
      issue(ERROR, 'schema.datetime', '/generated_at', 'generated_at 必须是可解析的 ISO8601 datetime'),
    );
  }

  // ---- Provider ------------------------------------------------------------
  const provider = doc.provider;
  if (!isRecord(provider)) {
    issues.push(issue(ERROR, 'schema.provider', '/provider', 'provider 必须是对象'));
    return { ok: false, issues };
  }

  if (typeof provider.id !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(provider.id)) {
    issues.push(
      issue(ERROR, 'schema.provider_id', '/provider/id', 'provider.id 必须是 kebab-case slug'),
    );
  }
  if (typeof provider.name !== 'string' || provider.name.length === 0) {
    issues.push(issue(ERROR, 'schema.provider_name', '/provider/name', 'provider.name 不能为空'));
  }
  if (!Array.isArray(provider.aliases)) {
    issues.push(issue(ERROR, 'schema.aliases', '/provider/aliases', 'provider.aliases 必须是数组'));
  }
  const allowedKinds = ['first_party', 'aggregator', 'cloud_platform', 'other'];
  if (!allowedKinds.includes(String(provider.kind))) {
    issues.push(
      issue(ERROR, 'schema.provider_kind', '/provider/kind', `provider.kind 必须是 ${allowedKinds.join(' | ')}`),
    );
  }

  // 官方接入状态必须由授权记录编译生成，源数据自报一律降级。
  const official = provider.official_integration;
  if (isRecord(official) && official.state === 'connected') {
    if (!official.source_hostname) {
      issues.push(
        issue(
          ERROR,
          'official.missing_hostname',
          '/provider/official_integration/source_hostname',
          '官方接入状态为 connected 时必须记录 source_hostname',
        ),
      );
    }
    if (!official.last_published_at) {
      issues.push(
        issue(
          ERROR,
          'official.missing_published_at',
          '/provider/official_integration/last_published_at',
          '官方接入状态为 connected 时必须记录 last_published_at',
        ),
      );
    }
  }

  // ---- Services ------------------------------------------------------------
  const services = doc.services;
  if (!Array.isArray(services)) {
    issues.push(issue(ERROR, 'schema.services', '/services', 'services 必须是数组'));
    return { ok: false, issues };
  }

  const endpointIds = new Set<string>();
  const serviceIds = new Set<string>();
  const offeringKeys = new Set<string>();

  for (const [si, service] of services.entries()) {
    const base = `/services/${si}`;
    if (!isRecord(service)) {
      issues.push(issue(ERROR, 'schema.service', base, 'service 必须是对象'));
      continue;
    }
    if (typeof service.id !== 'string' || service.id.length === 0) {
      issues.push(issue(ERROR, 'schema.service_id', `${base}/id`, 'service.id 不能为空'));
    } else {
      if (!serviceMarketForId(service.id)) {
        issues.push(issue(ERROR, 'schema.service_market_id', `${base}/id`, `Service ID 必须是已登记的市场 ID：${service.id}`));
      }
      if (serviceIds.has(service.id)) {
        issues.push(
          issue(ERROR, 'duplicate.service_id', `${base}/id`, `service.id 重复：${service.id}`),
        );
      }
      serviceIds.add(service.id);
    }
    if (typeof service.provider_id === 'string' && provider.id !== service.provider_id) {
      issues.push(
        issue(
          ERROR,
          'reference.provider_id',
          `${base}/provider_id`,
          `service.provider_id (${service.provider_id}) 与 provider.id (${String(provider.id)}) 不一致`,
        ),
      );
    }
    if (service.website !== undefined && !isHttpsUrl(service.website)) {
      issues.push(issue(ERROR, 'schema.service_website', `${base}/website`, 'service.website 必须是 HTTPS URL'));
    }
    if (service.docs !== undefined) {
      if (!isRecord(service.docs)) {
        issues.push(issue(ERROR, 'schema.service_docs', `${base}/docs`, 'service.docs 必须是 URL 字典'));
      } else {
        for (const [key, value] of Object.entries(service.docs)) {
          if (!isHttpsUrl(value)) {
            issues.push(issue(ERROR, 'schema.service_docs_url', `${base}/docs/${key}`, 'service.docs 中的链接必须是 HTTPS URL'));
          }
        }
      }
    }

    // Endpoints
    const endpoints = Array.isArray(service.endpoints) ? service.endpoints : [];
    const validateRoutes = (owner: Record<string, unknown>, ownerBase: string) => {
      for (const [ri, route] of (Array.isArray(owner.routes) ? owner.routes : []).entries()) {
        const routeBase = `${ownerBase}/routes/${ri}`;
        if (!isRecord(route)) continue;
        if (typeof route.method !== 'string' || !/^[A-Z]+$/.test(route.method)) {
          issues.push(issue(ERROR, 'schema.http_method', `${routeBase}/method`, 'method 必须是 HTTP 动词（大写）'));
        }
        if (typeof route.path !== 'string' || !route.path.startsWith('/')) {
          issues.push(issue(ERROR, 'schema.route_path', `${routeBase}/path`, 'path 必须以 / 开头'));
        }
      }
    };
    for (const [ei, endpoint] of endpoints.entries()) {
      const epBase = `${base}/endpoints/${ei}`;
      if (!isRecord(endpoint)) continue;
      if (typeof endpoint.id !== 'string' || endpoint.id.length === 0) {
        issues.push(issue(ERROR, 'schema.endpoint_id', `${epBase}/id`, 'endpoint.id 不能为空'));
      } else {
        if (endpointIds.has(endpoint.id)) {
          issues.push(
            issue(ERROR, 'duplicate.endpoint_id', `${epBase}/id`, `endpoint.id 重复：${endpoint.id}`),
          );
        }
        endpointIds.add(endpoint.id);
      }
      if (typeof endpoint.base_url !== 'string' || !endpoint.base_url.startsWith('https://')) {
        issues.push(
          issue(ERROR, 'schema.base_url', `${epBase}/base_url`, 'base_url 必须是 https URL'),
        );
      }
      validateRoutes(endpoint, epBase);
    };

    // Offerings
    const offerings = Array.isArray(service.offerings) ? service.offerings : [];
    const serviceOfferingIds = new Set<string>();
    for (const [oi, offering] of offerings.entries()) {
      const offBase = `${base}/offerings/${oi}`;
      if (!isRecord(offering)) continue;

      const offeringId = typeof offering.id === 'string' ? offering.id : '(missing)';
      const key = `${String(service.id)}/${offeringId}`;
      if (offeringKeys.has(key)) {
        issues.push(
          issue(ERROR, 'duplicate.offering', `${offBase}/id`, `Service 内 Offering.id 重复：${key}`),
        );
      }
      offeringKeys.add(key);

      if (typeof offering.id !== 'string' || offering.id.length === 0) {
        issues.push(issue(ERROR, 'schema.offering_id', `${offBase}/id`, 'offering.id 必须是非空 Provider 调用模型 ID'));
      } else {
        serviceOfferingIds.add(offering.id);
      }
      if (!Object.prototype.hasOwnProperty.call(offering, 'model_ref')) {
        issues.push(issue(ERROR, 'schema.model_ref_required', `${offBase}/model_ref`, 'model_ref 必须显式填写规范 Model ID 或 null'));
      } else if (offering.model_ref !== null && (typeof offering.model_ref !== 'string' || offering.model_ref.length === 0)) {
        issues.push(issue(ERROR, 'schema.model_ref', `${offBase}/model_ref`, 'model_ref 必须是非空规范 ID 或 null'));
      }
      for (const field of ['type', 'model_type', 'input', 'output', 'input_modalities', 'output_modalities', 'modalities', 'api_modalities', 'limits', 'capabilities', 'api_capabilities', 'operations', 'release_date']) {
        if (field in offering) {
          issues.push(issue(ERROR, 'schema.offering_legacy_model_field', `${offBase}/${field}`, `${field} 属于规范 Model 数据，必须写入全局 Model 注册表`));
        }
      }

      if (offering.status !== undefined &&
          !['active', 'restricted', 'deprecated', 'retired', 'unknown'].includes(String(offering.status))) {
        issues.push(issue(ERROR, 'schema.offering_status', `${offBase}/status`, `非法 Offering 状态：${String(offering.status)}`));
      }

    }

    // Provider API capabilities do not count as model offerings.
    const capabilities = Array.isArray(service.capabilities) ? service.capabilities : [];
    const capabilityKinds = new Set<string>();
    for (const [ci, capability] of capabilities.entries()) {
      const capBase = `${base}/capabilities/${ci}`;
      if (!isRecord(capability)) continue;
      if (typeof capability.kind !== 'string' || capability.kind.length === 0) {
        issues.push(issue(ERROR, 'schema.capability_kind', `${capBase}/kind`, 'service_capability.kind 不能为空'));
      } else if (capabilityKinds.has(capability.kind)) {
        issues.push(issue(ERROR, 'duplicate.service_capability_kind', `${capBase}/kind`, `同一 Service 内 kind 重复：${capability.kind}；请合并到一条能力记录`));
      } else {
        capabilityKinds.add(capability.kind);
      }
      validateRoutes(capability, capBase);
      validateCapabilityIOKinds(Array.isArray(capability.input) ? capability.input : [], capBase, 'input', issues);
      validateCapabilityIOKinds(Array.isArray(capability.output) ? capability.output : [], capBase, 'output', issues);
      const declaredFields = new Set<string>();
      for (const item of [...(Array.isArray(capability.parameters) ? capability.parameters : []), ...(Array.isArray(capability.input) ? capability.input : [])]) {
        if (isRecord(item) && typeof item.name === 'string') declaredFields.add(item.name);
      }
      for (const [ri, constraint] of (Array.isArray(capability.constraints) ? capability.constraints : []).entries()) {
        if (!isRecord(constraint)) continue;
        const refs = collectConditionRefs(constraint.if).concat(collectConditionRefs(constraint.then));
        for (const ref of refs) if (!declaredFields.has(ref)) {
          issues.push(issue(ERROR, 'constraint.undeclared_ref', `${capBase}/constraints/${ri}`, `约束引用了未声明的字段：${ref}`));
        }
      }
    }
  }

  const planIds = new Set<string>();
  const planServices = new Map<string, string>();
  for (const [pi, plan] of (Array.isArray(doc.plans) ? doc.plans : []).entries()) {
    const base = `/plans/${pi}`;
    if (!isRecord(plan)) continue;
    if (typeof plan.id === 'string') {
      if (planIds.has(plan.id)) issues.push(issue(ERROR, 'duplicate.plan_id', `${base}/id`, `plan.id 重复：${plan.id}`));
      planIds.add(plan.id);
      if (typeof plan.service_ref === 'string') planServices.set(plan.id, plan.service_ref);
    }
    if (typeof plan.service_ref === 'string' && !serviceIds.has(plan.service_ref)) {
      issues.push(issue(ERROR, 'reference.plan_service', `${base}/service_ref`, `Plan 引用不存在的 Service：${plan.service_ref}`));
    }
    if (typeof plan.ratio === 'string' && !/^\d+(\.\d+)?$/.test(plan.ratio)) {
      issues.push(issue(ERROR, 'schema.plan_ratio', `${base}/ratio`, 'ratio 必须是非负十进制字符串'));
    }
    if (plan.credits !== undefined) {
      const numericCredits = typeof plan.credits === 'number'
        ? plan.credits
        : typeof plan.credits === 'string' && /^~\d+$/.test(plan.credits)
          ? Number(plan.credits.slice(1))
          : Number.NaN;
      if (!Number.isSafeInteger(numericCredits) || numericCredits < 0) {
        issues.push(issue(ERROR, 'schema.plan_credits', `${base}/credits`, 'credits 必须是非负安全整数；估算值使用 ~ 前缀'));
      }
    }
    if (plan.credits !== undefined && plan.ratio !== undefined) {
      issues.push(issue(ERROR, 'schema.plan_credits_ratio_conflict', base, '同一套餐应使用 credits 或 ratio 其中一种额度口径'));
    }
    const billingPeriods = new Set<string>();
    for (const [bi, option] of (Array.isArray(plan.billing_options) ? plan.billing_options : []).entries()) {
      const optionBase = `${base}/billing_options/${bi}`;
      if (!isRecord(option)) continue;
      if (typeof option.billing_period === 'string') {
        if (billingPeriods.has(option.billing_period)) {
          issues.push(issue(ERROR, 'duplicate.plan_billing_period', `${optionBase}/billing_period`, `Plan 内 billing_period 重复：${option.billing_period}`));
        }
        billingPeriods.add(option.billing_period);
      }
      if ((option.price !== undefined || option.sale_price !== undefined) && typeof plan.currency !== 'string') {
        issues.push(issue(ERROR, 'plan.currency_required', `${base}/currency`, 'Plan 包含价格时必须提供统一币种'));
      }
    }
  }
  for (const [si, service] of services.entries()) {
    if (!isRecord(service) || !Array.isArray(service.plan_ids)) continue;
    for (const [pi, planId] of service.plan_ids.entries()) {
      if (typeof planId === 'string' && !planIds.has(planId)) {
        issues.push(issue(ERROR, 'reference.service_plan', `/services/${si}/plan_ids/${pi}`, `Service 引用不存在的 Plan：${planId}`));
      }
    }
  }
  for (const [si, service] of services.entries()) {
    if (!isRecord(service)) continue;
    const servicePlanIds = new Set(Array.isArray(service.plan_ids) ? service.plan_ids : []);
    for (const [ci, capability] of (Array.isArray(service.capabilities) ? service.capabilities : []).entries()) {
      if (!isRecord(capability)) continue;
      for (const [pi, planId] of (Array.isArray(capability.required_plan_ids) ? capability.required_plan_ids : []).entries()) {
        if (typeof planId === 'string' && (!planIds.has(planId) || !servicePlanIds.has(planId) || planServices.get(planId) !== service.id)) {
          issues.push(issue(ERROR, 'reference.capability_plan', `/services/${si}/capabilities/${ci}/required_plan_ids/${pi}`, `Capability 必须引用本 Service 的有效 Plan：${planId}`));
        }
      }
    }
  }

  // ---- 跨对象约束 ---------------------------------------------------------
  // Route 在其使用对象内完整声明，不需要跨对象 Route 引用校验。
  // 每个 Offering 至少关联一个 Service（由结构保证：Offering 嵌在 Service 内）。
  // Pricing is attached to the entity it prices. Validate every owner through
  // the same rule so service, capability, operation, and offering rates agree.
  const validatePricing = (owner: unknown, base: string): void => {
    if (!isRecord(owner) || owner.pricing === undefined) return;
    if (!Array.isArray(owner.pricing)) {
      issues.push(issue(ERROR, 'pricing.groups', `${base}/pricing`, 'pricing 必须是数组'));
      return;
    }
    for (const [gi, group] of owner.pricing.entries()) {
      const groupBase = `${base}/pricing/${gi}`;
      if (!isRecord(group)) continue;
      if (typeof group.currency !== 'string' || !/^[A-Z]{3}$/.test(group.currency)) {
        issues.push(issue(ERROR, 'schema.currency', `${groupBase}/currency`, 'currency 必须是 ISO 4217 三字母代码'));
      } else if (!options.allowUnknownCurrency && !KNOWN_CURRENCIES.has(group.currency)) {
        issues.push(issue(ERROR, 'schema.currency_unknown', `${groupBase}/currency`, `未知币种代码：${group.currency}（人民币请用 CNY，不要用 RMB）`));
      }
      const from = group.effective_from;
      const until = group.effective_until;
      if (typeof from === 'string' && typeof until === 'string' && Date.parse(until) < Date.parse(from)) {
        issues.push(issue(ERROR, 'pricing.effective_range', `${groupBase}/effective_until`, 'effective_until 不得早于 effective_from'));
      }
      if (!Array.isArray(group.rates)) continue;
      for (const [ri, rate] of group.rates.entries()) {
        if (!isRecord(rate)) continue;
        if (typeof rate.unit !== 'string' || !rate.unit) issues.push(issue(ERROR, 'schema.unit', `${groupBase}/rates/${ri}/unit`, 'unit 不能为空'));
        if (typeof rate.value !== 'string' || !/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?$/.test(rate.value)) {
          issues.push(issue(ERROR, 'pricing.value', `${groupBase}/rates/${ri}/value`, 'value 必须是十进制字符串'));
        } else if (rate.value.startsWith('-')) {
          issues.push(issue(ERROR, 'pricing.negative', `${groupBase}/rates/${ri}/value`, '价格不得为负数'));
        }
      }
    }
  };
  for (const [si, service] of services.entries()) {
    const serviceBase = `/services/${si}`;
    validatePricing(service, serviceBase);
    if (!isRecord(service)) continue;
    for (const [ci, capability] of (Array.isArray(service.capabilities) ? service.capabilities : []).entries()) {
      const capabilityBase = `${serviceBase}/capabilities/${ci}`;
      validatePricing(capability, capabilityBase);
      if (!isRecord(capability)) continue;
    }
    for (const [oi, offering] of (Array.isArray(service.offerings) ? service.offerings : []).entries()) {
      const offeringBase = `${serviceBase}/offerings/${oi}`;
      validatePricing(offering, offeringBase);
      if (!isRecord(offering)) continue;
    }
  }

  const hasError = issues.some((i) => i.severity === ERROR);
  return { ok: !hasError, issues };
}

/** 校验全局 Model 注册表，并检查 Provider 的规范身份引用。 */
export function validateModelRegistryDocument(value: unknown, providers: readonly unknown[] = []): ValidationReport {
  const issues: ValidationIssue[] = [];
  if (!isRecord(value)) return { ok: false, issues: [issue(ERROR, 'model_registry.root_type', '/', 'Model 注册表根必须是对象')] };
  for (const key of ['schema_version', 'data_version', 'generated_at', 'models']) {
    if (!(key in value) || value[key] === undefined) issues.push(issue(ERROR, 'model_registry.required', `/${key}`, `Model 注册表缺少必填字段 ${key}`));
  }
  const models = Array.isArray(value.models) ? value.models : [];
  const modelIds = new Set<string>();
  for (const [index, model] of models.entries()) {
    const path = `/models/${index}`;
    if (!isRecord(model)) {
      issues.push(issue(ERROR, 'model_registry.model_type', path, 'Model 必须是对象'));
      continue;
    }
    if (typeof model.id !== 'string' || !model.id) issues.push(issue(ERROR, 'model_registry.model_id', `${path}/id`, 'Model id 必须是非空字符串'));
    else if (modelIds.has(model.id)) issues.push(issue(ERROR, 'model_registry.duplicate_model', `${path}/id`, `规范 Model id 重复：${model.id}`));
    else modelIds.add(model.id);
    for (const field of ['developer_id', 'developer_name', 'name']) {
      if (typeof model[field] !== 'string' || !model[field]) issues.push(issue(ERROR, 'model_registry.required_field', `${path}/${field}`, `${field} 必须是非空字符串`));
    }
    if (typeof model.id === 'string' && typeof model.developer_id === 'string') {
      const [developerId, modelSlug, ...extra] = model.id.split('/');
      if (developerId !== model.developer_id || extra.length > 0 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(modelSlug ?? '')) {
        issues.push(issue(ERROR, 'model_registry.noncanonical_model_id', `${path}/id`, `Model id 必须符合 <developer_id>/<小写连字符型号 slug>：${model.id}`));
      }
    }
    if (model.type !== undefined && typeof model.type === 'string') {
      if (!isValidModelTypeId(model.type)) issues.push(issue(ERROR, 'model_registry.invalid_model_type', `${path}/type`, `非法模型类型 ID：${model.type}`));
      else if (!isKnownModelType(model.type)) issues.push(issue(WARNING, 'model_registry.unknown_model_type', `${path}/type`, `未知 model_type「${model.type}」，网站会显示为「其他」`));
    }
    if (model.output_dimensions !== undefined) {
      const dimensions = model.output_dimensions;
      const dimensionsPath = `${path}/output_dimensions`;
      if (!isRecord(dimensions)) {
        issues.push(issue(ERROR, 'model_registry.output_dimensions', dimensionsPath, 'output_dimensions 必须是对象'));
      } else {
        const supported = Array.isArray(dimensions.supported) ? dimensions.supported : [];
        const hasMin = dimensions.min !== undefined;
        const hasMax = dimensions.max !== undefined;
        const hasRange = hasMin && hasMax;
        if (supported.length === 0 && !hasRange) {
          issues.push(issue(ERROR, 'model_registry.output_dimensions', dimensionsPath, '必须提供 supported，或同时提供 min 和 max'));
        }
        if (hasMin !== hasMax) {
          issues.push(issue(ERROR, 'model_registry.output_dimension_range', dimensionsPath, 'min 和 max 必须同时提供'));
        } else if (hasRange) {
          if (!Number.isInteger(dimensions.min) || (dimensions.min as number) <= 0 || !Number.isInteger(dimensions.max) || (dimensions.max as number) < (dimensions.min as number)) {
            issues.push(issue(ERROR, 'model_registry.output_dimension_range', dimensionsPath, 'min 和 max 必须组成有效的正整数区间'));
          }
        }
        const seenDimensions = new Set<number>();
        for (const [dimensionIndex, dimension] of supported.entries()) {
          if (!Number.isInteger(dimension) || (dimension as number) <= 0) {
            issues.push(issue(ERROR, 'model_registry.output_dimension_value', `${dimensionsPath}/supported/${dimensionIndex}`, '输出维度必须是正整数'));
          } else if (seenDimensions.has(dimension as number)) {
            issues.push(issue(ERROR, 'model_registry.output_dimension_duplicate', `${dimensionsPath}/supported/${dimensionIndex}`, `输出维度重复：${dimension}`));
          } else seenDimensions.add(dimension as number);
        }
        const defaultIsSupported = seenDimensions.has(dimensions.default as number)
          || (hasRange && Number.isInteger(dimensions.min) && Number.isInteger(dimensions.max)
            && (dimensions.default as number) >= (dimensions.min as number)
            && (dimensions.default as number) <= (dimensions.max as number));
        if (dimensions.default !== undefined && (!Number.isInteger(dimensions.default) || !defaultIsSupported)) {
          issues.push(issue(ERROR, 'model_registry.output_dimension_default', `${dimensionsPath}/default`, '默认输出维度必须落在 supported 或 min/max 范围内'));
        }
      }
    }
  }
  for (const [di, provider] of providers.entries()) {
    if (!isRecord(provider) || !Array.isArray(provider.services)) continue;
    for (const [si, service] of provider.services.entries()) {
      if (!isRecord(service) || !Array.isArray(service.offerings)) continue;
      for (const [oi, offering] of service.offerings.entries()) {
        if (!isRecord(offering) || offering.model_ref === null) continue;
        const path = `/providers/${di}/services/${si}/offerings/${oi}/model_ref`;
        if (typeof offering.model_ref !== 'string' || !modelIds.has(offering.model_ref)) issues.push(issue(ERROR, 'model_registry.dangling_ref', path, `model_ref 未指向注册表中的 Model：${String(offering.model_ref)}`));
      }
    }
  }
  return { ok: issues.every((item) => item.severity !== ERROR), issues };
}

// ---------------------------------------------------------------------------
// 参考汇率（语义校验）
// ---------------------------------------------------------------------------

/**
 * 校验参考汇率快照本体（`data/upstream/fx/*.json` 的内容）。
 *
 * JSON Schema 能表达「字段存在且类型正确」，但表达不了这些**语义**约束：
 * - `as_of_date` 必须是真实存在的日期，且不得晚于取回时间——
 *   把未来日期或抓取日当成「来源公布日」会让休市日的汇率被误标成今日汇率。
 * - 同一币种不能出现两条报价，否则换算方向不确定。
 * - 推导公式用到的币对必须以基准币种开头——
 *   交叉汇率的方向一旦含糊，第三方无法复算。
 */
export function validateFxReference(reference: unknown): ValidationReport {
  const issues: ValidationIssue[] = [];

  if (!isRecord(reference)) {
    return {
      ok: false,
      issues: [issue(ERROR, 'schema.fx_reference', '/fx_reference', 'fx_reference 必须是对象')],
    };
  }

  const base = typeof reference.base === 'string' ? reference.base : '';
  if (!/^[A-Z]{3}$/.test(base)) {
    issues.push(
      issue(ERROR, 'fx.base', '/fx_reference/base', 'base 必须是 ISO 4217 三字母代码'),
    );
  }

  const quotes = Array.isArray(reference.quotes) ? reference.quotes : [];
  if (quotes.length === 0) {
    issues.push(issue(ERROR, 'fx.no_quotes', '/fx_reference/quotes', 'quotes 至少要有一条报价'));
  }

  const seen = new Set<string>();
  for (const [qi, quote] of quotes.entries()) {
    const qBase = `/fx_reference/quotes/${qi}`;
    if (!isRecord(quote)) {
      issues.push(issue(ERROR, 'schema.fx_quote', qBase, 'quote 必须是对象'));
      continue;
    }
    const currency = typeof quote.currency === 'string' ? quote.currency : '';
    if (!/^[A-Z]{3}$/.test(currency)) {
      issues.push(
        issue(ERROR, 'fx.currency', `${qBase}/currency`, 'currency 必须是 ISO 4217 三字母代码'),
      );
    } else if (!KNOWN_CURRENCIES.has(currency)) {
      issues.push(
        issue(
          ERROR,
          'fx.currency_unknown',
          `${qBase}/currency`,
          `未知币种代码：${currency}（人民币请用 CNY，不要用 RMB）`,
        ),
      );
    }
    if (currency && currency === base) {
      issues.push(
        issue(
          ERROR,
          'fx.quote_equals_base',
          `${qBase}/currency`,
          `基准币种 ${base} 不需要单独报价（1 基准 = 1 基准）`,
        ),
      );
    }
    if (currency && seen.has(currency)) {
      issues.push(
        issue(ERROR, 'duplicate.fx_quote', `${qBase}/currency`, `币种重复报价：${currency}`),
      );
    }
    seen.add(currency);

    const rate = quote.rate_decimal;
    if (typeof rate !== 'string' || !/^-?\d+(\.\d+)?$/.test(rate)) {
      issues.push(
        issue(
          ERROR,
          'fx.decimal',
          `${qBase}/rate_decimal`,
          'rate_decimal 必须是十进制字符串（禁止 JSON number）',
        ),
      );
    } else if (Number(rate) <= 0) {
      issues.push(
        issue(ERROR, 'fx.non_positive_rate', `${qBase}/rate_decimal`, '汇率必须为正数'),
      );
    }
  }

  // as_of_date：真实日期，且不得晚于取回日
  const asOfDate = typeof reference.as_of_date === 'string' ? reference.as_of_date : '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(asOfDate)) {
    issues.push(
      issue(ERROR, 'fx.as_of_date', '/fx_reference/as_of_date', 'as_of_date 必须是 YYYY-MM-DD'),
    );
  } else if (Number.isNaN(Date.parse(`${asOfDate}T00:00:00Z`))) {
    issues.push(
      issue(ERROR, 'fx.as_of_date_invalid', '/fx_reference/as_of_date', `as_of_date 不是有效日期：${asOfDate}`),
    );
  }

  const retrievedAt = typeof reference.retrieved_at === 'string' ? reference.retrieved_at : '';
  if (Number.isNaN(Date.parse(retrievedAt))) {
    issues.push(
      issue(
        ERROR,
        'schema.datetime',
        '/fx_reference/retrieved_at',
        'retrieved_at 必须是可解析的 ISO8601 datetime',
      ),
    );
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(asOfDate) && retrievedAt.slice(0, 10) < asOfDate) {
    issues.push(
      issue(
        ERROR,
        'fx.retrieved_before_published',
        '/fx_reference/retrieved_at',
        `取回时间早于来源公布日 ${asOfDate}`,
      ),
    );
  }

  // 来源
  const source = reference.source;
  if (!isRecord(source)) {
    issues.push(issue(ERROR, 'schema.fx_source', '/fx_reference/source', 'source 必须是对象'));
  } else {
    if (typeof source.publisher !== 'string' || source.publisher.length === 0) {
      issues.push(
        issue(ERROR, 'fx.publisher', '/fx_reference/source/publisher', 'publisher 不能为空'),
      );
    }
    if (typeof source.url !== 'string' || !source.url.startsWith('https://')) {
      issues.push(
        issue(ERROR, 'fx.source_url', '/fx_reference/source/url', 'source.url 必须是 https URL'),
      );
    }
  }

  // 推导记录原始输入币对；交叉汇率的原始基准可能不同于公开快照基准。
  const derivation = reference.derivation;
  if (!isRecord(derivation)) {
    issues.push(
      issue(ERROR, 'schema.fx_derivation', '/fx_reference/derivation', 'derivation 必须是对象'),
    );
  } else {
    if (typeof derivation.formula !== 'string' || derivation.formula.length === 0) {
      issues.push(
        issue(
          ERROR,
          'fx.formula',
          '/fx_reference/derivation/formula',
          'derivation.formula 不能为空——方向必须能被第三方复算',
        ),
      );
    }
    const pairs = Array.isArray(derivation.pairs) ? derivation.pairs : [];
    if (pairs.length === 0) {
      issues.push(
        issue(ERROR, 'fx.no_pairs', '/fx_reference/derivation/pairs', 'derivation.pairs 至少要有一个币对'),
      );
    }
    for (const [pi, pair] of pairs.entries()) {
      if (typeof pair !== 'string' || !/^[A-Z]{3}\/[A-Z]{3}$/.test(pair)) {
        issues.push(
          issue(
            ERROR,
            'fx.pair_format',
            `/fx_reference/derivation/pairs/${pi}`,
            '币对格式必须是 BASE/QUOTE',
          ),
        );
        continue;
      }
    }
  }

  const hasError = issues.some((i) => i.severity === ERROR);
  return { ok: !hasError, issues };
}

/** 校验 `/v1/fx.json` 发布文档：外层信封 + 快照本体。 */
export function validateFxReferenceDocument(doc: unknown): ValidationReport {
  const issues: ValidationIssue[] = [];

  if (!isRecord(doc)) {
    return {
      ok: false,
      issues: [issue(ERROR, 'schema.root_type', '/', '文档根必须是对象')],
    };
  }

  for (const key of ['schema_version', 'data_version', 'generated_at', 'fx_reference']) {
    if (!(key in doc) || doc[key] === undefined) {
      issues.push(issue(ERROR, 'schema.required', `/${key}`, `缺少必填字段 ${key}`));
    }
  }

  const nested = validateFxReference(doc.fx_reference);
  issues.push(
    ...nested.issues.map((item) => ({
      ...item,
      path: item.path.replace(/^\/fx_reference/, '/fx_reference'),
    })),
  );

  const hasError = issues.some((i) => i.severity === ERROR);
  return { ok: !hasError, issues };
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** 从条件 AST 中收集所有被引用的字段名。 */
export function collectConditionRefs(node: unknown): string[] {
  if (!isRecord(node)) return [];
  const refs: string[] = [];
  if ('eq' in node || 'in' in node || 'lt' in node || 'lte' in node || 'gt' in node || 'gte' in node) {
    for (const key of ['eq', 'in', 'lt', 'lte', 'gt', 'gte'] as const) {
      const value = node[key];
      if (Array.isArray(value) && typeof value[0] === 'string') {
        refs.push(value[0]);
      }
    }
  }
  if ('requires' in node && Array.isArray(node.requires) && typeof node.requires[0] === 'string') {
    refs.push(node.requires[0]);
  }
  if ('excludes' in node && Array.isArray(node.excludes) && typeof node.excludes[0] === 'string') {
    refs.push(node.excludes[0]);
  }
  for (const key of ['all', 'any'] as const) {
    const list = node[key];
    if (Array.isArray(list)) {
      for (const child of list) refs.push(...collectConditionRefs(child));
    }
  }
  if ('not' in node) {
    refs.push(...collectConditionRefs(node.not));
  }
  return refs;
}


export { KNOWN_MODEL_TYPES };
export type { ModelType };
