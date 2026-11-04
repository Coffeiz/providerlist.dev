import type { ProviderDocument, Source } from '@providerlist/schema/types';
import type { SnapshotMetadata } from './types.ts';

/** Convert a registered snapshot to the transient evidence used by IR/review. */
export function sourceFromSnapshot(snapshot: SnapshotMetadata): Source {
  return {
    id: snapshot.source_id,
    kind: 'official_doc',
    url: snapshot.request_url,
    retrieved_at: snapshot.retrieved_at,
    content_hash: snapshot.content_hash,
    locator: snapshot.source_name,
  };
}

/** Remove transient collector evidence before persisting or comparing facts. */
export function stripTransientEvidence(document: ProviderDocument): ProviderDocument {
  const facts = JSON.parse(JSON.stringify(document)) as Record<string, unknown>;
  const transientFields = new Set(['evidence_refs', 'field_origin_refs', 'source_refs', 'sources', 'evidence', 'data_source_kinds', 'source_bindings']);

  const walk = (value: unknown, pointer = ''): void => {
    if (Array.isArray(value)) {
      value.forEach((item, index) => walk(item, `${pointer}/${index}`));
      return;
    }
    if (!value || typeof value !== 'object') return;
    const record = value as Record<string, unknown>;
    for (const [key, item] of Object.entries(record)) {
      if (transientFields.has(key)) {
        delete record[key];
      } else {
        walk(item, `${pointer}/${key.replace(/~/g, '~0').replace(/\//g, '~1')}`);
      }
    }
  };
  walk(facts);
  return facts as unknown as ProviderDocument;
}
