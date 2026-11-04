/**
 * ProviderList 公共数据契约的 TypeScript 稳定类型。
 *
 * 对应公开 JSON Schema（见 `schemas/`）与 docs/data/schema.md。
 * 约定：
 * - 金额一律用十进制字符串（`DecimalMoney.amount`），禁止用 JS number 做计费累计。
 * - 未知值显式为 `null` 或缺省，**不得**用 `0` / `false` / 猜测的默认值代替。
 * - `null` 表示「未取得可信值」，`"0"` 表示「经确认免费」，二者不可混淆。
 */

import type { ModelType } from './model-types.ts';
// Capability 输入/输出类型是开放枚举，定义在 capability-io-kinds.ts（与 model_type 同模式）。
// 这里只引入类型，不重复导出——公开出口由 index.ts 统一收口。
import type { CapabilityIOKind } from './capability-io-kinds.ts';

// ---------------------------------------------------------------------------
// 基础标量
// ---------------------------------------------------------------------------

/** ISO 4217 币种代码，如 `CNY`。 */
export type CurrencyCode = string;

/** ISO 8601 datetime，含时区偏移。 */
export type IsoDateTime = string;

/** SHA-256 内容哈希（`sha256:<hex>`）。 */
export type ContentHash = string;

/** JSON Pointer，指向某个字段，如 `/services/0/offerings/0/pricing/0/rates/0/value`。 */
export type JsonPointer = string;

/** 十进制金额字符串，权威表示。 */
export type DecimalString = string;

export interface DecimalMoney {
  readonly currency: CurrencyCode;
  /** 十进制字符串，例如 `"3.00"`。 */
  readonly amount: DecimalString;
}

// ---------------------------------------------------------------------------
// 生命周期 / 可用性
// ---------------------------------------------------------------------------

/** Provider Service 当前供应状态。 */
export type SupplyStatus = 'active' | 'deprecated' | 'retired' | 'unknown';

/** Offering 在对应市场的统一状态。 */
export type OfferingStatus = 'active' | 'restricted' | 'deprecated' | 'retired' | 'unknown';

// ---------------------------------------------------------------------------
// 来源与证据
// ---------------------------------------------------------------------------

export type SourceKind =
  | 'official_doc'
  | 'official_api'
  | 'official_feed'
  | 'official_push'
  | 'community'
  | 'third_party'
  | 'upstream'
  | 'manual_test';

export interface Source {
  readonly id: string;
  readonly kind: SourceKind;
  readonly url?: string;
  /** 取回时间。 */
  readonly retrieved_at?: IsoDateTime;
  /** 防止文档无声变化。 */
  readonly content_hash?: ContentHash;
  /** 文档位置：heading / anchor / section / JSON Pointer。 */
  readonly locator?: string;
}

export interface Evidence {
  readonly id: string;
  readonly source_ref: string;
  readonly field: JsonPointer;
  readonly assertion?: string;
}

/** 字段来源身份：来自谁，与「验证到什么程度」互相独立。 */
export interface FieldOrigin {
  readonly kind: 'official_feed' | 'official_push' | 'official_doc' | 'community' | 'third_party' | 'upstream';
  readonly source_ref?: string;
  readonly submission_id?: string;
  readonly authorized_domain_ref?: string;
}

// ---------------------------------------------------------------------------
// 端点
// ---------------------------------------------------------------------------

export interface Endpoint {
  readonly id: string;
  readonly base_url: string;
  /** API 区域标签；**不等于**账号市场。 */
  readonly api_region: string;
  /** Endpoint 提供的协议与路径目录。 */
  readonly routes?: readonly Route[];
  readonly default_headers?: Readonly<Record<string, string>>;
  readonly documentation?: string;
}

// ---------------------------------------------------------------------------
// 思考 / 推理参数控制
// ---------------------------------------------------------------------------

export type RouteReasoningControlKind = 'effort' | 'budget_tokens' | 'toggle' | 'adaptive';

export interface RouteReasoningControl {
  readonly kind: RouteReasoningControlKind;
  /** 线上路径，优先用 JSON Pointer 或显式 path tokens。 */
  readonly wire_path: readonly (string | number)[];
  readonly values?: readonly (string | number)[];
  readonly min?: number;
  readonly max?: number;
  readonly off_encoding?: unknown;
  readonly default?: unknown;
  readonly translation_map?: Readonly<Record<string, string>>;
  readonly applies_when?: string;
  readonly source?: string;
}

export interface RouteReasoningSpec {
  /** 三态：`null` 表示未知，不等于 `false`。 */
  readonly supported: boolean | null;
  readonly controls?: readonly RouteReasoningControl[];
}

// ---------------------------------------------------------------------------
// 媒体约束
// ---------------------------------------------------------------------------

// Capability 输入/输出类型是开放枚举，定义在 capability-io-kinds.ts（与 model_type 同模式）。
// 这里不重复导出——公开出口由 index.ts 统一收口。
export type { CapabilityIOKind } from './capability-io-kinds.ts';

export interface Cardinality {
  readonly min: number;
  readonly max?: number;
}

export interface NumericRange {
  readonly min?: number;
  readonly max?: number;
}

export interface DimensionConstraint {
  readonly width?: NumericRange;
  readonly height?: NumericRange;
  readonly pixels?: NumericRange;
  readonly aspect_ratios?: readonly string[];
}

export interface MediaSpec {
  /** MIME 而非笼统扩展名；缺省表示未披露，不代表允许全部。 */
  readonly mime_types?: readonly string[];
  /** 单文件最大字节数；`0` 不是未知。 */
  readonly max_bytes?: number;
  readonly duration_seconds?: NumericRange;
  readonly dimensions?: DimensionConstraint;
  readonly fps?: NumericRange;
  readonly sample_rate_hz?: NumericRange;
  readonly channels?: NumericRange;
  readonly codec?: readonly string[];
  readonly container?: readonly string[];
  /** 输入与输出可不同。 */
  readonly transports?: readonly string[];
}

export interface CapabilityInput {
  readonly name: string;
  readonly kind: CapabilityIOKind;
  readonly required: boolean;
  readonly cardinality?: Cardinality;
  readonly media?: MediaSpec;
  readonly description?: string;
}

export type ArtifactKind = 'inline' | 'binary' | 'url' | 'file_id';

export interface OutputArtifact {
  readonly kind: ArtifactKind;
  /** 未知时保持 `null`，不要凭空填。 */
  readonly expires_in_seconds?: number | null;
  readonly download_auth?: string;
}

export interface CapabilityOutput {
  readonly kind: CapabilityIOKind;
  readonly media?: MediaSpec;
  readonly artifact?: OutputArtifact;
  /** 未知 != false。 */
  readonly streaming?: boolean | null;
  readonly fields?: readonly string[];
}

// ---------------------------------------------------------------------------
// 参数与约束
// ---------------------------------------------------------------------------

export type ParameterType = 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array';

export interface ParameterSpec {
  readonly name: string;
  readonly type: ParameterType;
  readonly required: boolean;
  readonly nullable?: boolean;
  readonly enum?: readonly (string | number | boolean)[];
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
  /** 无法确定时**不填**，不推断为厂商默认值。 */
  readonly default?: unknown;
  readonly description?: string;
  /** 请求 JSON Pointer、表单字段名或 Query/Header 模板。 */
  readonly route_mappings?: readonly string[];
  readonly evidence_refs?: readonly string[];
}

/**
 * 有限条件 AST。**不接受**字符串脚本、任意正则执行器或外部可执行表达式。
 * 字段引用只可指向已声明的参数 / input。
 */
export type ConditionExpression =
  | { readonly all: readonly ConditionExpression[] }
  | { readonly any: readonly ConditionExpression[] }
  | { readonly not: ConditionExpression }
  | { readonly eq: readonly [string, unknown] }
  | { readonly in: readonly [string, readonly unknown[]] }
  | { readonly lt: readonly [string, number] }
  | { readonly lte: readonly [string, number] }
  | { readonly gt: readonly [string, number] }
  | { readonly gte: readonly [string, number] }
  | { readonly requires: readonly [string] }
  | { readonly excludes: readonly [string] };

export interface ConstraintRule {
  readonly id: string;
  readonly if: ConditionExpression;
  readonly then: ConditionExpression;
  readonly description?: string;
}

// ---------------------------------------------------------------------------
// 执行方式
// ---------------------------------------------------------------------------

export type ExecutionMode = 'sync' | 'stream' | 'async_job' | 'bidirectional_realtime';

export interface PollingSpec {
  /** 未知时保持 `null`，不要凭空填。 */
  readonly recommended_interval_seconds?: number | null;
}

export interface ExecutionSpec {
  readonly mode: ExecutionMode;
  readonly polling?: PollingSpec;
  /** 异步任务状态映射；仅在官方信息明确时提供。 */
  readonly status_mapping?: Readonly<Record<string, string>>;
  readonly supports_cancel?: boolean | null;
  readonly documentation?: string;
}

// ---------------------------------------------------------------------------
// Route
// ---------------------------------------------------------------------------

export type Protocol =
  | 'chat-completions'
  | 'responses'
  | 'messages'
  | 'generate-content'
  | (string & {});

/**
 * 协议适配状态——**这是适配状态，不是真实性级别**。
 * 数据存在不等于能够执行。
 */
export type Callability = 'documented_only' | 'declarative_ready' | 'adapter_required' | 'api_probed';

export interface Route {
  readonly protocol: Protocol;
  readonly method: string;
  readonly path: string;
  readonly headers?: Readonly<Record<string, string>>;
  readonly compatibility?: Readonly<Record<string, unknown>>;
  readonly callability?: Callability;
  /** 异步任务 ID 的 JSON Pointer。 */
  readonly task_id_pointer?: JsonPointer;
  /** 任务状态查询路径。 */
  readonly status_path_template?: string;
  /** 结果获取路径。 */
  readonly result_path_template?: string;
  readonly cancel_path_template?: string;
  readonly documentation?: string;
}

// ---------------------------------------------------------------------------
// Offering / Model
// ---------------------------------------------------------------------------

export interface Model {
  readonly id: string;
  /** 原厂/开发者注册表中的稳定身份。 */
  readonly developer_id: string;
  readonly developer_name: string;
  readonly name: string;
  readonly family?: string;
  readonly type?: ModelType;
  readonly modalities?: ModelModalities;
  readonly limits?: ModelLimits;
  readonly output_dimensions?: ModelOutputDimensions;
  readonly specifications?: ModelSpecifications;
  readonly capabilities?: ModelCapabilities;
  readonly release_date?: string;
}

/** Model capabilities; reasoning is true/false or the documented effort tiers. */
export interface ModelCapabilities {
  readonly reasoning?: boolean | readonly string[];
  readonly tool_calling?: boolean | null;
  readonly structured_output?: boolean | null;
  readonly temperature?: boolean | null | NumericRange;
  readonly top_p?: boolean | null | NumericRange;
  readonly top_k?: boolean | null | NumericRange;
}

export interface ModelModalities {
  readonly input?: readonly string[];
  readonly output?: readonly string[];
}

export interface ModelLimits {
  readonly context?: number | null;
  readonly input?: number | null;
  readonly output?: number | null;
}

/** 原厂声明的模型向量输出维度。 */
export interface ModelOutputDimensions {
  readonly supported?: readonly number[];
  readonly min?: number;
  readonly max?: number;
  readonly default?: number;
}

/** Developer-published media generation specifications recorded on the canonical Model. */
export interface ModelSpecifications {
  readonly image_output_resolutions?: readonly string[];
  readonly video_output_resolutions?: readonly string[];
  readonly video_duration_seconds?: NumericRange;
  readonly audio_duration_seconds?: NumericRange;
}

export interface ApiLimits {
  readonly context?: number | null;
  readonly input?: number | null;
  readonly output?: number | null;
  readonly rpm?: number | null;
  readonly tpm?: number | null;
}

/** `/v1/models.json` —— 全局规范模型注册表，不包含内部来源台账。 */
export interface ModelRegistryDocument {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly models: readonly Model[];
  readonly sources?: readonly Source[];
  readonly evidence?: readonly Evidence[];
}

/** `/v1/models/{developer_id}/{model_slug}.json` —— 单个规范模型事实。 */
export interface ModelDocument {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly model: Model;
}

export interface Offering {
  /** Exact model identifier accepted by this Provider's API. */
  readonly id: string;
  readonly service_id: string;
  readonly model_ref: string | null;
  /** Provider API/Route 的限制，不覆盖 Model 发布规格。 */
  readonly api_limits?: ApiLimits;
  readonly pricing?: readonly PricingGroup[];
  readonly status?: OfferingStatus;
  readonly links?: Readonly<Record<string, string>>;
  readonly evidence_refs?: readonly string[];
  readonly field_origin_refs?: Readonly<Record<string, string>>;
}

// ---------------------------------------------------------------------------
// ServiceCapability（Service 市场能力；同一 kind 在一个市场仅记录一次）
// ---------------------------------------------------------------------------

export type ServiceCapabilityKind = 'web_search' | 'web_fetch' | 'file_search' | 'file_storage' | 'image_understanding' | 'batch' | (string & {});

export interface ServiceCapability {
  readonly kind: ServiceCapabilityKind;
  /** 可解锁此能力的套餐选项；至少持有其中一个即可。 */
  readonly required_plan_ids?: readonly string[];
  readonly routes?: readonly Route[];
  readonly input?: readonly CapabilityInput[];
  readonly output?: readonly CapabilityOutput[];
  readonly parameters?: readonly ParameterSpec[];
  readonly constraints?: readonly ConstraintRule[];
  readonly execution?: ExecutionSpec;
  readonly pricing?: readonly PricingGroup[];
  readonly links?: Readonly<Record<string, string>>;
  readonly evidence_refs?: readonly string[];
}

// ---------------------------------------------------------------------------
// 计费
// ---------------------------------------------------------------------------

export type BillingUnit =
  | 'per_1m_tokens'
  | 'per_1k_tokens'
  | 'per_token'
  | 'per_image'
  | 'per_megapixel'
  | 'per_second'
  | 'per_generated_second'
  | 'per_input_audio_minute'
  | 'per_character'
  | 'per_request'
  | 'per_month'
  | (string & {});

/**
 * 价格条件 AST。与 `ConditionExpression` 语义**分离**：
 * 两者可共享表达式解析器，但执行结果与允许字段域不同——
 * 计费规则变化不得隐式改变请求合法性。
 */
export type PriceCondition =
  | { readonly all: readonly PriceCondition[] }
  | { readonly any: readonly PriceCondition[] }
  | { readonly not: PriceCondition }
  | { readonly field: string; readonly operator?: 'eq' | 'lt' | 'lte' | 'gt' | 'gte' | 'between'; readonly value: unknown };

export interface PricingRate {
  /** 基础计量项，如 `input`、`output`、`cache_read`、`cache_write`、`generated_second`。 */
  readonly metric: string;
  /** 缓存价格适用的保留时间，如 `5min`、`1h`；来源未说明时省略。 */
  readonly ttl?: string;
  /** 输入上下文价格档位或 Token 比较式，如 `short`、`long`、`>=500000` 或 `>0 & <=256000`；来源未说明时省略。 */
  readonly context?: string;
  readonly unit: BillingUnit;
  readonly quantity?: number;
  readonly value: DecimalString;
  /** 促销现价的官方原价；仅填写来源明确提供划线价时。 */
  readonly list_value?: DecimalString;
}

export interface PricingGroup {
  readonly currency: CurrencyCode;
  readonly rates: readonly PricingRate[];
  /** Provider-declared deployment scope for this price group, when applicable. */
  readonly deployment?: string;
  /** 部署区域；不等同于账号市场。 */
  readonly region?: string;
  /** 各条件同时成立；any/not 可保留条件组。 */
  readonly conditions?: readonly PriceCondition[];
  /** 官方明确标注不支持的计量项；未列出表示未知，不等于不支持。 */
  readonly unsupported_metrics?: readonly string[];
  readonly applies_to?: readonly string[];
  readonly effective_from?: IsoDateTime;
  readonly effective_until?: IsoDateTime;
  readonly evidence_refs?: readonly string[];
}

// ---------------------------------------------------------------------------
// Service / Plan
// ---------------------------------------------------------------------------

export type AccountMarket = 'CN' | 'GLOBAL' | 'OTHER' | 'UNKNOWN';

/** Resolve a Service ID to the account-market code used by public projections. */
export function serviceMarketForId(serviceId: string): AccountMarket | undefined {
  switch (serviceId) {
    case 'cn': return 'CN';
    case 'global': return 'GLOBAL';
    case 'other': return 'OTHER';
    case 'unknown': return 'UNKNOWN';
    default: return undefined;
  }
}

/** Stable internal display name generated from the market directory key. */
export function serviceNameForId(serviceId: string): string | undefined {
  switch (serviceId) {
    case 'cn': return '中国市场';
    case 'global': return '国际市场';
    case 'other': return '其他市场';
    case 'unknown': return '未知市场';
    default: return undefined;
  }
}

export interface Service {
  /** Market key: cn/global/other/unknown. The account-market code is derived from this ID. */
  readonly id: string;
  readonly provider_id: string;
  readonly name: string;
  /** 当前账号市场的产品或开发者平台入口。 */
  readonly website?: string;
  /** 当前账号市场对应的官方文档链接。 */
  readonly docs?: Readonly<Record<string, string>>;
  readonly account_requirements?: readonly string[];
  readonly endpoints?: readonly Endpoint[];
  readonly plan_ids?: readonly string[];
  readonly supply_status?: SupplyStatus;
  readonly offerings?: readonly Offering[];
  readonly capabilities?: readonly ServiceCapability[];
  readonly pricing?: readonly PricingGroup[];
  readonly sources?: readonly string[];
}

/** On-disk Service fields. Identity and display name are derived from the Provider/market paths. */
export type ServiceSource = Omit<Service, 'id' | 'provider_id' | 'name' | 'offerings' | 'sources'>;

export interface Plan {
  readonly id: string;
  readonly service_ref: string;
  readonly name?: string;
  /** 套餐统一使用的币种；无已知价格时可省略。 */
  readonly currency?: CurrencyCode;
  readonly billing_options: readonly PlanBillingOption[];
  /** 相对该市场基准套餐的额度比例，以十进制字符串保存。 */
  readonly ratio?: DecimalString;
  /** 套餐额度；前缀 `~` 表示估算值。 */
  readonly credits?: number | string;
  readonly description?: string;
  readonly links?: Readonly<Record<string, string>>;
  readonly evidence_refs?: readonly string[];
  readonly allowance?: Readonly<Record<string, number>>;
  readonly valid_from?: IsoDateTime;
  readonly valid_until?: IsoDateTime;
}

/** 同一套餐档位下独立定价的月付、年付或其他计费周期。 */
export interface PlanBillingOption {
  readonly billing_period: 'month' | 'quarter' | 'year' | 'custom' | 'one_time';
  /** 该计费周期的官方标准价；币种由 Plan.currency 提供。 */
  readonly price?: DecimalString;
  /** 该计费周期的官方优惠价；币种由 Plan.currency 提供。 */
  readonly sale_price?: DecimalString;
  /** 优惠仅适用于该订阅计费选项的首个计费周期时标记。 */
  readonly sale_type?: 'first_month';
  readonly evidence_refs?: readonly string[];
}

// ---------------------------------------------------------------------------
// 官方接入
// ---------------------------------------------------------------------------

export type ClaimStatus = 'pending' | 'verified' | 'revoked' | 'expired';

export interface OfficialIntegration {
  /** 由授权 Registry 与 PublicationEvent **编译生成**，不接受源数据自报。 */
  readonly state: 'none' | 'domain_bound' | 'connected' | 'revoked' | 'stale';
  readonly source_hostname?: string;
  readonly coverage?: {
    readonly service_ids?: readonly string[];
    readonly offering_count?: number;
  };
  readonly last_published_at?: IsoDateTime;
}

export interface Provider {
  readonly id: string;
  readonly name: string;
  readonly legal_name?: string | null;
  readonly aliases: readonly string[];
  readonly kind: 'first_party' | 'aggregator' | 'cloud_platform' | 'other';
  /** 已确认可用的第三方开发工具集成；省略表示未知或未确认。 */
  readonly integrations?: Readonly<{
    readonly ai_sdk?: boolean;
  }>;
  readonly logo?: string;
  readonly services?: readonly Service[];
  readonly sources?: readonly string[];
  readonly official_integration?: OfficialIntegration;
}

// ---------------------------------------------------------------------------
// 顶层文档
// ---------------------------------------------------------------------------

export interface ProviderDocument {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly provider: Provider;
  readonly services: readonly Service[];
  readonly sources?: readonly Source[];
  readonly evidence?: readonly Evidence[];
  readonly plans?: readonly Plan[];
}

export interface ProviderSummary {
  readonly id: string;
  readonly name: string;
  readonly aliases: readonly string[];
  readonly kind: Provider['kind'];
  readonly logo?: string;
  readonly account_markets: readonly AccountMarket[];
  /** Generated from each Service's price currencies; never entered in Provider source data. */
  readonly billing_currencies: readonly CurrencyCode[];
  readonly model_types: readonly ModelType[];
  readonly active_offering_count: number;
  readonly service_capability_count: number;
  readonly official_integration?: OfficialIntegration;
}

export interface Manifest {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly catalog_status: 'published' | 'draft';
  readonly files: readonly { readonly path: string; readonly sha256: string; readonly bytes: number }[];
  readonly source_revisions?: Readonly<Record<string, string>>;
}

/** Stable public API envelope. Site-only datasets use a separate /assets/datasets path. */
export type PublicResourceEnvelope = {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
};

export type PublicReviewStatus = 'pending' | 'confirmed';
export type PublicSupplyStatus = 'active' | 'unknown' | 'retired';
export type PublicPrice = { readonly currency: CurrencyCode; readonly amount: DecimalString };
export interface PublicPricingRate {
  readonly metric: string;
  readonly context?: string;
  readonly ttl?: string;
  readonly unit: BillingUnit;
  readonly value: DecimalString;
  readonly list_value?: DecimalString;
  readonly quantity?: number;
}
export interface PublicPricingGroup {
  readonly currency: CurrencyCode;
  readonly rates: readonly PublicPricingRate[];
  readonly deployment?: string;
  readonly region?: string;
  readonly conditions?: readonly PriceCondition[];
  readonly applies_to?: readonly string[];
  readonly unsupported_metrics?: readonly string[];
  readonly effective_from?: IsoDateTime;
  readonly effective_until?: IsoDateTime;
}
export type PublicOfferingListItem = {
  readonly provider_id: string;
  readonly service_id: string;
  readonly market: AccountMarket;
  readonly id: string;
  readonly type: string;
  readonly status: OfferingStatus;
  readonly limits?: ModelLimits;
  readonly pricing?: readonly PublicPricingGroup[];
};
/** Internal site dataset item; model_ref is retained only for local model joins. */
export type SiteOfferingDatasetItem = PublicOfferingListItem & {
  readonly model_ref: string | null;
};
export type PublicOfferingList = PublicResourceEnvelope & {
  readonly total: number;
  readonly items: readonly PublicOfferingListItem[];
};
export type PublicModelList = PublicResourceEnvelope & {
  readonly type: string;
  readonly total: number;
  readonly items: readonly PublicModelListItem[];
};
export type PublicModelListItem = {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly developer_name?: string;
  readonly release_date?: string;
  readonly modalities?: ModelModalities;
  readonly limits?: ModelLimits;
  readonly capabilities?: ModelCapabilities;
};
/** Public Provider JSON keeps TOML-owned fields; path-derived joins stay private. */
type PublicProviderData<T> = T extends readonly (infer Item)[]
  ? readonly PublicProviderData<Item>[]
  : T extends object
    ? { readonly [Key in keyof T as Key extends
        | 'sources' | 'evidence' | 'evidence_refs' | 'field_origin_refs'
        | 'source_refs' | 'data_source_kinds' | 'source_bindings'
        | 'official_integration' | 'provider_id' | 'service_id'
        | 'service_ref' | 'plan_ids' ? never : Key]: PublicProviderData<T[Key]> }
    : T;

export type PublicProviderService = Omit<PublicProviderData<Service>, 'id' | 'name' | 'offerings'> & {
  readonly offerings?: readonly PublicProviderOffering[];
};
export type PublicProviderOffering = Omit<PublicProviderData<Offering>, 'model_ref'>;
export type PublicProviderPlan = PublicProviderData<Plan>;
export type PublicProviderResource = Omit<PublicProviderData<ProviderDocument>, 'services' | 'plans'> & {
  readonly services: readonly PublicProviderService[];
  readonly plans?: readonly PublicProviderPlan[];
};
export type SiteOfferingDataset = PublicResourceEnvelope & {
  readonly total: number;
  readonly items: readonly SiteOfferingDatasetItem[];
};
export type SupplyLedger = Readonly<Record<string, {
  readonly supply_status: PublicSupplyStatus;
  readonly review?: PublicReviewStatus;
}>>;

/** `/v1/providers.json` —— Provider 摘要索引。 */
export interface ProviderIndex {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly providers: readonly ProviderSummary[];
}

/** `/v1/search-index.json` —— 前端搜索索引。 */
export interface SearchIndex {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly entries: readonly SearchIndexEntry[];
}

export interface CatalogCurrent {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly providers: readonly ProviderSummary[];
  /**
   * 当前供应集的 Offering 粒度视图。
   *
   * `providers` 只是摘要；这份才是「当前目录全量集合」——
   * 消费者不必逐个下载 Provider 文档就能拿到供应项清单。
   *
   * 非当前项仍然列出并带 `status`：
   * 静态托管无法按查询参数产生不同内容，过滤由客户端按明确规则完成
   * （见 docs/architecture.md「当前目录与历史分离」）。
   */
  readonly offerings: readonly CurrentOffering[];
  readonly stats: CatalogStats;
}

/** 当前供应集的一条记录——Offering 粒度的扁平视图。 */
export interface CurrentOffering {
  readonly provider_id: string;
  readonly service_id: string;
  readonly id: string;
  readonly model_ref: string | null;
  readonly model_type: ModelType;
  readonly account_market: AccountMarket;
  /** Generated from this Offering's pricing groups. */
  readonly billing_currencies: readonly CurrencyCode[];
  readonly status: OfferingStatus;
  readonly pricing?: readonly PricingGroup[];
  readonly links?: Readonly<Record<string, string>>;
}

export interface CatalogStats {
  readonly provider_count: number;
  readonly service_count: number;
  readonly canonical_model_count: number;
  readonly active_offering_count: number;
  readonly active_offering_count_by_type: Readonly<Record<string, number>>;
  readonly service_capability_count: number;
  readonly first_party_direct_offering_count: number;
  readonly official_feed_coverage: {
    readonly provider_count: number;
    readonly offering_count: number;
  };
}

export interface SearchIndexEntry {
  readonly kind: 'provider' | 'offering';
  readonly provider_id: string;
  readonly id?: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly keywords: readonly string[];
  readonly model_type?: ModelType;
  readonly href: string;
}

// ---------------------------------------------------------------------------
// 参考汇率（派生层，不改写权威原价）
// ---------------------------------------------------------------------------

/**
 * 一条参考汇率报价。
 *
 * 语义：`1 base = rate_decimal quote`。方向必须显式——
 * 「USD/CNY」既可以理解成 1 美元换多少人民币，也可以反过来，
 * 因此这里不写成比值，而是写成「基准 → 报价」的具名对。
 */
export interface FxQuote {
  readonly currency: CurrencyCode;
  readonly rate_decimal: DecimalString;
}

/** 参考汇率的来源信息。 */
export interface FxSource {
  readonly publisher: string;
  readonly dataset: string;
  /** 精确取数 URL；不是首页链接。 */
  readonly url: string;
  /** 对应设计文档的参考条目编号，如 `R6`。 */
  readonly reference_refs?: readonly string[];
  /** 原始响应内容哈希——事后可核对「这批数字来自哪次抓取」。 */
  readonly content_hash?: ContentHash;
}

/** 交叉汇率的推导说明；币对记录来源数据，快照基准可与来源基准不同。 */
export interface FxDerivation {
  /** 人类可读公式，须标明换算方向。 */
  readonly formula: string;
  /** 公式中用到的原始币对。 */
  readonly pairs: readonly string[];
}

/**
 * 参考汇率快照。
 *
 * 关键约束（见设计文档 §5.5）：
 * - 这是**派生层**。实体 `pricing` 的原币种与原值永不因它改变。
 * - `as_of_date` 是**来源公布日**，不是抓取日，也不是「今天」。
 *   休市日必须使用最近一个有效参考汇率日期，并保留原日期。
 * - 参考汇率**不是结算汇率**，不得用于结算、税务或财务承诺。
 */
export interface FxReference {
  readonly id: string;
  /** 基准币种，如 `EUR`。 */
  readonly base: CurrencyCode;
  readonly quotes: readonly FxQuote[];
  /** 来源公布日（YYYY-MM-DD）。 */
  readonly as_of_date: string;
  /** 本项目取回时间。 */
  readonly retrieved_at: IsoDateTime;
  readonly source: FxSource;
  readonly derivation: FxDerivation;
}

/** `/v1/fx.json` —— 参考汇率公开快照。 */
export interface FxReferenceDocument {
  readonly schema_version: string;
  readonly data_version: string;
  readonly generated_at: IsoDateTime;
  readonly fx_reference: FxReference;
}
