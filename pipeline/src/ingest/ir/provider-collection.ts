import type {
  ApiLimits,
  BillingUnit,
  Callability,
  ConstraintRule,
  CapabilityInput,
  CapabilityOutput,
  ParameterSpec,
  PriceCondition,
  PricingRate,
  RouteReasoningSpec,
  ServiceCapability,
} from '@providerlist/schema/types';

export type ApiCapabilities = Readonly<Record<string, boolean | null>>;

export type CollectionScope = 'model_catalog' | 'pricing' | 'api' | 'capability' | 'plan' | 'documentation';
export type CoverageStatus = 'complete' | 'partial' | 'failed' | 'not_parsed';

export interface EvidenceRef {
  readonly source_ref: string;
  readonly locator?: string;
  readonly assertion?: string;
}

export interface Observed<T> {
  readonly value: T;
  readonly evidence: readonly EvidenceRef[];
}

interface CoverageRecordBase {
  readonly source_ref: string;
  readonly scope: CollectionScope;
  readonly market?: 'cn' | 'global';
  readonly status: CoverageStatus;
  readonly note?: string;
}

export type CoverageRecord = CoverageRecordBase & (
  | {
  /**
   * Number of source records the Provider adapter recognized for this scope.
   * It is not a raw DOM row count or necessarily the number of final IR facts:
   * one source record may fan out into several facts, and unresolved records
   * may stay in Review. `record_unit` states the adapter-specific counting unit.
   */
    readonly record_count: number;
    /**
     * Human-readable unit counted by record_count. IR fact units are checked against mapped facts;
     * `recognized ...` units explicitly count adapter-parsed source records that may remain in Review
     * or fan out/aggregate during projection, so they are not compared to normalized fact counts.
     */
    readonly record_unit: string;
  }
  | {
    readonly record_count?: never;
    readonly record_unit?: never;
  }
);

export type ReviewItemKind =
  | 'unparsed_fact'
  | 'ambiguous_identity'
  | 'source_conflict'
  | 'incomplete_coverage'
  | 'unsupported_mapping';

export interface ReviewItem {
  readonly id: string;
  readonly kind: ReviewItemKind;
  readonly subject_ref?: string;
  readonly message: string;
  readonly evidence: readonly EvidenceRef[];
}

/**
 * 可复用文档解析器提取的结构化线索。保留源范围与定位，但不把页面提及
 * 自动提升为已确认的 Provider / Service / Offering 事实。
 */
export interface DocumentObservationFact {
  readonly source_ref: string;
  readonly scope?: CollectionScope;
  readonly extraction?: 'markdown' | 'json' | 'html' | 'docs';
  readonly access_scope?: 'public' | 'account_scoped' | 'unknown';
  readonly title: string | null;
  readonly tables: readonly {
    readonly heading: string;
    readonly headers: readonly string[];
    readonly rows: readonly (readonly string[])[];
  }[];
  readonly structured_records: readonly unknown[];
  readonly api_mentions: readonly string[];
  readonly plan_or_price_mentions: readonly string[];
  readonly capability_mentions: readonly string[];
  readonly model_id_mentions: readonly string[];
  readonly excerpt: string;
}

export interface ProviderProfileFacts {
  readonly name?: Observed<string>;
  readonly aliases?: Observed<readonly string[]>;
  readonly kind?: Observed<'first_party' | 'aggregator' | 'cloud_platform' | 'other'>;
  readonly docs?: Observed<Readonly<Record<string, string>>>;
  readonly logo?: Observed<string>;
}

/** Provider 来源中出现的 Model 发布规格观察，仅供身份核对，不投影到 ProviderDocument。 */
export interface EndpointFact {
  readonly id: Observed<string>;
  readonly base_url: Observed<string>;
  readonly api_region: Observed<string>;
  readonly region_code?: Observed<string>;
  readonly documentation?: Observed<string>;
}

export interface SupplyObservation {
  readonly kind: 'listed_current' | 'listed_historical' | 'priced_current' | 'unknown';
  readonly evidence: readonly EvidenceRef[];
}

export interface RouteFact {
  readonly id: Observed<string>;
  readonly endpoint_ref: Observed<string>;
  readonly protocol: Observed<string>;
  readonly method: Observed<string>;
  readonly path_template: Observed<string>;
  readonly operation_kind: Observed<string>;
  readonly provider_model_ids?: Observed<readonly string[]>;
  readonly reasoning?: Observed<RouteReasoningSpec>;
  readonly documentation?: Observed<string>;
  readonly callability?: Observed<Callability>;
}

export interface OperationFact {
  readonly id: Observed<string>;
  readonly kind: Observed<string>;
  readonly routes: readonly RouteFact[];
  readonly input?: Observed<readonly CapabilityInput[]>;
  readonly output?: Observed<readonly CapabilityOutput[]>;
  readonly parameters?: Observed<readonly ParameterSpec[]>;
  readonly constraints?: Observed<readonly ConstraintRule[]>;
  readonly schema_operation?: Observed<Partial<ServiceCapability> & { readonly document_ref?: string }>;
}

export interface PriceRuleFact {
  /** Adapter input; the shared IR boundary converts this to an entity-level pricing group. */
  readonly rate_items: readonly CollectorRateFact[];
  readonly deployment?: string;
  readonly conditions?: readonly PriceCondition[];
  readonly region?: string;
  readonly unsupported_metrics?: readonly string[];
  readonly effective_from?: string;
  readonly effective_until?: string;
  readonly when?: PriceCondition;
  readonly evidence: readonly EvidenceRef[];
}

/** Parser-only price row used by collectors before normalization at the IR boundary. */
export type CollectorRateFact = Omit<PricingRate, 'value' | 'list_value'> & {
  readonly amount_decimal: PricingRate['value'];
  readonly list_amount_decimal?: PricingRate['list_value'];
};

/** Shared IR/API price item. Quantity is omitted for the usual single billing unit. */
export type PricingRateFact = Omit<PricingRate, 'quantity' | 'value' | 'list_value'> & {
  readonly quantity?: number;
  readonly value: PricingRate['value'];
  readonly list_value?: PricingRate['value'];
};

export interface PricingGroupFact {
  readonly currency: Observed<string>;
  readonly rates: Observed<readonly PricingRateFact[]>;
  readonly deployment?: Observed<string>;
  readonly region?: Observed<string>;
  readonly conditions?: readonly PriceCondition[];
  readonly unsupported_metrics?: readonly string[];
  readonly applies_to?: readonly string[];
  readonly effective_from?: string;
  readonly effective_until?: string;
  readonly evidence: readonly EvidenceRef[];
}

export interface PriceFact {
  readonly provider_model_id?: Observed<string>;
  readonly operation_ref?: Observed<string>;
  readonly capability_ref?: Observed<string>;
  /** Adapter input fields are converted before writing IR candidate artifacts. */
  readonly currency: Observed<string>;
  readonly unit: Observed<BillingUnit>;
  readonly rules: Observed<readonly PriceRuleFact[]>;
  readonly pricing?: Observed<readonly PricingGroupFact[]>;
}

export interface OfferingFact {
  readonly provider_model_id: Observed<string>;
  readonly display_name?: Observed<string>;
  readonly service_id: Observed<string>;
  readonly supply_observations: readonly SupplyObservation[];
  readonly api_limits?: Observed<ApiLimits>;
  readonly api_capabilities?: Observed<ApiCapabilities>;
  readonly operations: readonly OperationFact[];
  readonly prices: readonly PriceFact[];
}

export interface ModelReferenceResolution {
  readonly provider_model_id: string;
  readonly service_id: string;
  readonly model_ref: string | null;
  readonly match: 'exact_id' | 'model_id_after_slash' | 'exact_name' | 'ambiguous' | 'unmatched' | 'preserved_existing';
  readonly candidates: readonly string[];
  readonly review_note: string;
}

export interface CapabilityFact {
  readonly id: Observed<string>;
  readonly kind: Observed<string>;
  readonly required_plan_ids?: Observed<readonly string[]>;
  readonly operations: readonly OperationFact[];
  readonly links?: Observed<Readonly<Record<string, string>>>;
  readonly prices?: readonly PriceFact[];
}

export interface PlanFact {
  readonly id: Observed<string>;
  readonly name?: Observed<string>;
  readonly billing_options: Observed<readonly CollectionPlanBillingOption[]>;
  readonly currency?: Observed<string>;
  readonly ratio?: Observed<string>;
  readonly description?: Observed<string>;
  readonly links?: Observed<Readonly<Record<string, string>>>;
  readonly allowance?: Observed<Readonly<Record<string, number>>>;
  readonly credits?: Observed<number | string>;
}

/** Collector evidence keeps each scraped fee's source currency until IR projection. */
export interface CollectionPlanBillingOption {
  readonly billing_period: 'month' | 'quarter' | 'year' | 'custom' | 'one_time';
  readonly subscription_fee?: { readonly currency: string; readonly amount: string };
  readonly promotional_fee?: { readonly currency: string; readonly amount: string };
  readonly sale_type?: 'first_month';
  readonly evidence_refs?: readonly string[];
}

export interface ServiceFacts {
  readonly id: Observed<string>;
  readonly name?: Observed<string>;
  readonly website?: Observed<string>;
  readonly docs?: Observed<Readonly<Record<string, string>>>;
  readonly account_requirements?: Observed<readonly string[]>;
  readonly endpoints: readonly EndpointFact[];
  readonly offerings: readonly OfferingFact[];
  readonly capabilities: readonly CapabilityFact[];
  /** Service-scoped charges, separate from model and independent Capability pricing. */
  readonly prices?: readonly PriceFact[];
  readonly plans: readonly PlanFact[];
}

/**
 * 内部采集事实契约。它是快照和正式 Provider 文件之间的候选表示，
 * 不属于 packages/schema 的公开契约，也不得直接写入正式目录。
 */
export interface ProviderCollectionIR {
  readonly ir_version: '1.0.0';
  readonly provider_id: string;
  readonly observed_at: string;
  readonly source_refs: readonly string[];
  readonly coverage: readonly CoverageRecord[];
  readonly document_observations: readonly DocumentObservationFact[];
  readonly collection_notes?: readonly string[];
  readonly profile?: ProviderProfileFacts;
  readonly services: readonly ServiceFacts[];
  readonly review_items: readonly ReviewItem[];
}
