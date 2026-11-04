/**
 * Demo 的数据契约类型——**直接引用 `@providerlist/schema`，不再维护手抄副本**。
 *
 * 之前这里存了一份手抄的精简副本。代价很实际：schema 改了 demo 不会知道，
 * 两份类型可以静默漂移。已经真的漂移过一次——demo 手写的模型类型标签把
 * 「图像生成 / 编辑」缩成了「图像生成」，站点显示的名字和契约定义的不一致。
 *
 * demo 消费的就是 schema 产出的 `/v1/*.json`，所以类型必须同源，
 * 否则 demo 验证的不是真实契约，只是一份「看起来对」的近似。
 *
 * 本文件保留为转发层，让现有 `from './types'` 的导入路径不变。
 * 这些都是纯类型导入，编译后被完全擦除，不产生运行时依赖。
 */

export type {
  AccountMarket,
  BillingUnit,
  Callability,
  CatalogCurrent,
  CatalogStats,
  ConditionExpression,
  ConstraintRule,
  CurrencyCode,
  DecimalMoney,
  DecimalString,
  Endpoint,
  Evidence,
  ExecutionSpec,
  FxDerivation,
  FxQuote,
  FxReference,
  FxReferenceDocument,
  FxSource,
  IsoDateTime,
  JsonPointer,
  SupplyStatus,
  MediaSpec,
  Manifest,
  Model,
  ModelOutputDimensions,
  ModelRegistryDocument,
  OfficialIntegration,
  Offering,
  OfferingStatus,
  Plan,
  PlanBillingOption,
  CapabilityInput,
  CapabilityOutput,
  ParameterSpec,
  PriceCondition,
  PricingGroup,
  Protocol,
  Provider,
  ProviderDocument,
  ProviderIndex,
  ProviderSummary,
  RouteReasoningControl,
  RouteReasoningSpec,
  Route,
  SearchIndexEntry,
  Service,
  ServiceCapability,
  Source,
} from '@providerlist/schema/types';

/**
 * `ModelType` 是**开放枚举**：标准类型 + 上游可能带来的未知值。
 * 未知值必须保留原值并归入「其他」，绝不静默并入 `chat`。
 */
export type { KnownModelType, ModelType } from '@providerlist/schema/model-types';
