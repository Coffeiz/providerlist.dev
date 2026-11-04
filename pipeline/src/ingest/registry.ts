import { PROVIDER_INGEST_SOURCES } from './adapters/index.ts';
import type { IngestSource } from './types.ts';

/** 汇总各 Provider 子目录登记的固定来源白名单。 */
export const INGEST_SOURCES: readonly IngestSource[] = PROVIDER_INGEST_SOURCES;

export function findIngestSource(sourceId: string): IngestSource | undefined {
  return INGEST_SOURCES.find((source) => source.id === sourceId);
}
