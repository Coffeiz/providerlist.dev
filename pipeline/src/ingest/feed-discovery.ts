import type { ProviderDocument } from '@providerlist/schema/types';
import { serviceMarketForId, type AccountMarket } from '@providerlist/schema/types';

export interface FeedDiscoveryCandidate {
  readonly provider: {
    readonly id: string;
    readonly name: string;
  };
  readonly origin: string;
  readonly candidate_url: string;
  /** Catalog IDs shown as choices during later onboarding; none are authorized by discovery. */
  readonly service_candidates: readonly {
    readonly id: string;
    readonly account_market: AccountMarket;
    readonly endpoint_ids: readonly string[];
    readonly offering_ids: readonly string[];
    readonly capability_kinds: readonly string[];
    readonly plan_ids: readonly string[];
  }[];
  readonly state: 'awaiting_domain_claim';
}

/** Derive Feed candidates from each first-party market's exact website origin. */
export function generateFeedDiscoveryCandidates(
  documents: readonly ProviderDocument[],
): FeedDiscoveryCandidate[] {
  return documents.flatMap((document) => {
    const provider = document.provider;
    const plans = document.plans ?? [];
    if (provider.kind !== 'first_party') return [];
    const candidatesByOrigin = new Map<string, NonNullable<ProviderDocument['services']>[number][]>();
    for (const service of document.services ?? []) {
      if (!service.website) continue;
      let website: URL;
      try {
        website = new URL(service.website);
      } catch {
        throw new Error(`Service ${provider.id}/${service.id} has an invalid website URL`);
      }
      if (website.protocol !== 'https:' || website.username || website.password) {
        throw new Error(`Service ${provider.id}/${service.id} website must be an HTTPS URL without credentials`);
      }
      const group = candidatesByOrigin.get(website.origin) ?? [];
      group.push(service);
      candidatesByOrigin.set(website.origin, group);
    }
    return [...candidatesByOrigin].map(([origin, services]) => ({
      provider: { id: provider.id, name: provider.name },
      origin,
      candidate_url: new URL('/.well-known/providerlist.json', origin).toString(),
      service_candidates: services.map((service) => ({
        id: service.id,
        account_market: serviceMarketForId(service.id)!,
        endpoint_ids: (service.endpoints ?? []).map(({ id }) => id),
        offering_ids: (service.offerings ?? []).map(({ id }) => id),
        capability_kinds: (service.capabilities ?? []).map(({ kind }) => kind),
        plan_ids: plans.filter((plan) => plan.service_ref === service.id).map(({ id }) => id),
      })),
      state: 'awaiting_domain_claim',
    }));
  });
}
