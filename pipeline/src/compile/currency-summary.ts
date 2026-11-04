import type { CurrencyCode, PricingGroup, ProviderDocument, Service } from '@providerlist/schema/types';

export function pricingCurrencies(groups: readonly PricingGroup[] | undefined): CurrencyCode[] {
  return [...new Set((groups ?? []).map(({ currency }) => currency))].sort();
}

export function serviceBillingCurrencies(document: ProviderDocument, service: Service): CurrencyCode[] {
  const currencies = new Set<string>();
  const addGroups = (groups: readonly PricingGroup[] | undefined) => {
    for (const { currency } of groups ?? []) currencies.add(currency);
  };

  addGroups(service.pricing);
  for (const offering of service.offerings ?? []) addGroups(offering.pricing);
  for (const capability of service.capabilities ?? []) addGroups(capability.pricing);
  for (const plan of document.plans ?? []) {
    if (plan.service_ref === service.id && plan.currency) currencies.add(plan.currency);
  }

  return [...currencies].sort();
}
