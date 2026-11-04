import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import type { SnapshotMetadata } from './types.ts';
import { INGEST_SOURCES } from './registry.ts';

export interface CollectorSourceRecord {
  readonly url: string;
  readonly last_collected_at: string;
}

export interface CollectorRegistry {
  readonly schema_version: '1.0.0';
  readonly providers: Readonly<Record<string, { readonly sources: readonly CollectorSourceRecord[] }>>;
}

/** Remove URLs whose collector registration has been retired from the active source registry. */
export async function pruneUnregisteredCollectorSources(repoRoot: string): Promise<number> {
  const file = path.join(repoRoot, 'data/collector/providers.json');
  let registry: CollectorRegistry;
  try { registry = JSON.parse(await readFile(file, 'utf8')) as CollectorRegistry; }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return 0;
    throw error;
  }

  const providers: Record<string, { readonly sources: readonly CollectorSourceRecord[] }> = {};
  let removed = 0;
  for (const [providerId, entry] of Object.entries(registry.providers)) {
    const registeredUrls = new Set(INGEST_SOURCES.filter((source) => source.provider_id === providerId).map(({ url }) => url));
    const sources = entry.sources.filter(({ url }) => registeredUrls.has(url));
    removed += entry.sources.length - sources.length;
    providers[providerId] = { sources };
  }
  if (removed) await writeFile(file, `${JSON.stringify({ schema_version: registry.schema_version, providers }, null, 2)}\n`);
  return removed;
}

export async function validateCollectorRegistry(dataDir: string): Promise<readonly {
  readonly severity: 'error'; readonly code: string; readonly path: string; readonly message: string;
}[]> {
  const file = path.join(dataDir, 'collector/providers.json');
  let registry: unknown;
  try { registry = JSON.parse(await readFile(file, 'utf8')); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return [];
    return [{ severity: 'error', code: 'collector_registry.invalid_json', path: '/collector/providers.json', message: '采集记录必须是有效 JSON' }];
  }
  const issues: { severity: 'error'; code: string; path: string; message: string }[] = [];
  const root = registry as Partial<CollectorRegistry>;
  if (!root || root.schema_version !== '1.0.0' || !root.providers || typeof root.providers !== 'object' || Array.isArray(root.providers)) {
    return [{ severity: 'error', code: 'collector_registry.shape', path: '/collector/providers.json', message: '采集记录须包含 schema_version 1.0.0 和 providers 对象' }];
  }
  for (const [providerId, entry] of Object.entries(root.providers)) {
    const validSources = new Set(INGEST_SOURCES.filter((source) => source.provider_id === providerId).map(({ url }) => url));
    const sources = (entry as { sources?: unknown } | null)?.sources;
    if (!Array.isArray(sources)) {
      issues.push({ severity: 'error', code: 'collector_registry.sources', path: `/providers/${providerId}/sources`, message: 'sources 必须是数组' });
      continue;
    }
    const seen = new Set<string>();
    for (const [index, item] of sources.entries()) {
      const record = item as Partial<CollectorSourceRecord> | null;
      const pointer = `/providers/${providerId}/sources/${index}`;
      if (!record || typeof record.url !== 'string' || !validSources.has(record.url)) {
        issues.push({ severity: 'error', code: 'collector_registry.unregistered_url', path: `${pointer}/url`, message: 'URL 必须与该 Provider 代码登记的固定来源完全一致' });
        continue;
      }
      if (seen.has(record.url)) issues.push({ severity: 'error', code: 'collector_registry.duplicate_url', path: `${pointer}/url`, message: '同一 Provider 的 URL 不得重复' });
      seen.add(record.url);
      if (typeof record.last_collected_at !== 'string' || !Number.isFinite(Date.parse(record.last_collected_at))) {
        issues.push({ severity: 'error', code: 'collector_registry.timestamp', path: `${pointer}/last_collected_at`, message: 'last_collected_at 必须是有效时间戳' });
      }
    }
  }
  return issues;
}

/** Store only URLs and collection timestamps; content/evidence stays with candidates. */
export async function mergeCollectedSources(
  repoRoot: string,
  providerId: string,
  snapshots: readonly Pick<SnapshotMetadata, 'request_url' | 'retrieved_at'>[],
): Promise<boolean> {
  const file = path.join(repoRoot, 'data/collector/providers.json');
  let registry: CollectorRegistry = { schema_version: '1.0.0', providers: {} };
  try {
    registry = JSON.parse(await readFile(file, 'utf8')) as CollectorRegistry;
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }

  const providers = { ...registry.providers };
  const registeredUrls = new Set(INGEST_SOURCES.filter((source) => source.provider_id === providerId).map(({ url }) => url));
  const byUrl = new Map((providers[providerId]?.sources ?? [])
    .filter(({ url }) => registeredUrls.has(url))
    .map((source) => [source.url, source]));
  for (const snapshot of snapshots) {
    if (!snapshot.request_url || !snapshot.retrieved_at) continue;
    const previous = byUrl.get(snapshot.request_url);
    if (!previous || Date.parse(snapshot.retrieved_at) > Date.parse(previous.last_collected_at)) {
      byUrl.set(snapshot.request_url, { url: snapshot.request_url, last_collected_at: snapshot.retrieved_at });
    }
  }
  const sources = [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url));
  if (JSON.stringify(sources) === JSON.stringify(providers[providerId]?.sources ?? [])) return false;
  providers[providerId] = { sources };
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify({ schema_version: '1.0.0', providers }, null, 2)}\n`);
  return true;
}
