import type { Model, ProviderDocument } from '@providerlist/schema/types';
import { resolveModelRefPreservingExisting } from '../model-reference.ts';
import type { ModelReferenceResolution, ProviderCollectionIR } from './provider-collection.ts';

/**
 * Resolve each collected provider model ID against the canonical Model Registry.
 * Existing valid links are preserved; ambiguous and unmatched IDs remain null.
 */
export function resolveProviderCollectionIdentities(
  ir: ProviderCollectionIR,
  registry: readonly Model[],
  previous?: ProviderDocument,
): ModelReferenceResolution[] {
  const previousRefs = new Map<string, string | null>();
  for (const service of previous?.services ?? []) {
    for (const offering of service.offerings ?? []) {
      previousRefs.set(`${service.id}\u0000${offering.id}`, offering.model_ref);
    }
  }

  return ir.services.flatMap((service) => {
    const serviceId = service.id.value;
    return service.offerings.map((offering): ModelReferenceResolution => {
      const providerModelId = offering.provider_model_id.value;
      const preserved = resolveModelRefPreservingExisting(
        providerModelId,
        registry,
        previousRefs.get(`${serviceId}\u0000${providerModelId}`),
        offering.display_name?.value,
      );
      return {
        provider_model_id: providerModelId,
        service_id: serviceId,
        model_ref: preserved.model_ref,
        match: preserved.rule,
        candidates: preserved.candidates,
        review_note: preserved.assertion,
      };
    });
  });
}
