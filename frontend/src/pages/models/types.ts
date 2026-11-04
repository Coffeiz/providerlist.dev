import type { AccountMarket, Model, Offering } from '../../types';

export interface ModelPriceEntry {
  readonly id: string;
  readonly ruleId: string;
  readonly amount: string;
  readonly cacheMetric?: string;
  readonly cacheTtl?: string;
  readonly cacheContext?: string;
  readonly metricLabel?: string;
  readonly converted?: string;
  readonly detail?: string;
  readonly convertedDetail?: string;
  readonly condition?: string;
  readonly tierLabel?: string;
  readonly serviceTier?: boolean;
  readonly unsupported?: boolean;
}

export interface ModelTableRow {
  readonly providerId: string;
  readonly providerName: string;
  readonly providerLogo?: string;
  readonly accountMarket: AccountMarket;
  readonly serviceId: string;
  readonly offering: Offering;
  readonly model?: Model;
  readonly inputPrices: readonly ModelPriceEntry[];
  readonly outputPrices: readonly ModelPriceEntry[];
  readonly otherPrices: readonly ModelPriceEntry[];
  readonly releaseDate?: string;
}
