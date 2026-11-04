import type { IngestSource, SnapshotMetadata } from '../types.ts';
import type { ProviderCollectionIR } from './provider-collection.ts';
import { validateProviderCollectionIR as validateProviderCollectionIRImpl } from './validation.ts';
import { normalizeProviderCollectionPricingContexts } from './pricing-context.ts';

/** Validate adapter drafts through the same normalization boundary as candidate persistence. */
export function validateProviderCollectionIR(
  draft: ProviderCollectionIR,
  snapshots: readonly SnapshotMetadata[],
  sourceDefinitions: readonly Pick<IngestSource, 'id' | 'scope' | 'market'>[] = [],
) {
  return validateProviderCollectionIRImpl(normalizeProviderCollectionPricingContexts(draft), snapshots, sourceDefinitions);
}
