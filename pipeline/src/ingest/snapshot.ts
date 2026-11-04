import { createHash } from 'node:crypto';
import { link, mkdir, open, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

import type { IngestSource, SnapshotCaptureResult, SnapshotMetadata } from './types.ts';

const REQUEST_TIMEOUT_MS = 20_000;
const MAX_REQUEST_TIMEOUT_MS = 60_000;
const COLLECTOR_VERSION = '0.1.0';
const SOURCE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export class SnapshotHttpError extends Error {
  readonly sourceId: string;
  readonly status: number;
  readonly retryAfterMs: number | null;

  constructor(
    sourceId: string,
    status: number,
    retryAfterMs: number | null,
  ) {
    super(`来源 ${sourceId} 返回 HTTP ${status}`);
    this.name = 'SnapshotHttpError';
    this.sourceId = sourceId;
    this.status = status;
    this.retryAfterMs = retryAfterMs;
  }
}

function retryAfterMilliseconds(value: string | null, now = Date.now()): number | null {
  if (!value) return null;
  const seconds = Number(value.trim());
  if (Number.isFinite(seconds) && seconds >= 0) return Math.min(120_000, seconds * 1000);
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.min(120_000, Math.max(0, date - now)) : null;
}

interface ReusableSnapshot {
  readonly metadata: SnapshotMetadata;
  readonly accept: string;
  readonly body: Uint8Array;
}

async function readReusableSnapshot(cacheSourceDir: string): Promise<ReusableSnapshot | null> {
  try {
    const cache = JSON.parse(await readFile(path.join(cacheSourceDir, 'latest.json'), 'utf8')) as {
      readonly metadata?: SnapshotMetadata;
      readonly accept?: string;
    };
    const metadata = cache.metadata;
    if (!metadata || typeof cache.accept !== 'string') return null;
    if (!/^[a-z0-9-]+\.body$/.test(metadata.body_file) || !/^sha256:[a-f0-9]{64}$/.test(metadata.content_hash)) return null;
    const body = new Uint8Array(await readFile(path.join(cacheSourceDir, metadata.body_file)));
    const actualHash = `sha256:${createHash('sha256').update(body).digest('hex')}`;
    if (actualHash !== metadata.content_hash || body.byteLength !== metadata.byte_length) return null;
    return { metadata, accept: cache.accept, body };
  } catch (error) {
    if (error instanceof SyntaxError || (error instanceof Error && 'code' in error && error.code === 'ENOENT')) return null;
    throw error;
  }
}

async function writeReusableSnapshot(cacheSourceDir: string, accept: string, metadata: SnapshotMetadata, body: Uint8Array, snapshotBodyPath: string): Promise<void> {
  await mkdir(cacheSourceDir, { recursive: true });
  const bodyTemp = path.join(cacheSourceDir, `${metadata.body_file}.tmp`);
  const metadataTemp = path.join(cacheSourceDir, 'latest.json.tmp');
  await rm(bodyTemp, { force: true });
  try {
    await link(snapshotBodyPath, bodyTemp);
  } catch (error) {
    // Cache and snapshot roots may be on different filesystems (for example in
    // a custom local setup); retain the old copy behavior as a safe fallback.
    if (!(error instanceof Error && 'code' in error && ['EXDEV', 'EPERM', 'EACCES', 'ENOTSUP', 'ENOENT'].includes(String(error.code)))) throw error;
    await writeFile(bodyTemp, body);
  }
  await writeFile(metadataTemp, `${JSON.stringify({ accept, metadata }, null, 2)}\n`);
  await rename(bodyTemp, path.join(cacheSourceDir, metadata.body_file));
  await rename(metadataTemp, path.join(cacheSourceDir, 'latest.json'));
  const oldFiles = (await readdir(cacheSourceDir)).filter((name) => name.endsWith('.body') && name !== metadata.body_file);
  await Promise.all(oldFiles.map((name) => rm(path.join(cacheSourceDir, name), { force: true })));
}

async function writeSnapshotFiles(snapshotDir: string, metadata: SnapshotMetadata, body: Uint8Array): Promise<void> {
  const basename = metadata.content_hash.replace(':', '-');
  const sourceDir = path.join(snapshotDir, metadata.source_id);
  await mkdir(sourceDir, { recursive: true });
  const bodyPath = path.join(sourceDir, metadata.body_file);
  const metadataPath = path.join(sourceDir, `${basename}.json`);
  try {
    await readFile(bodyPath);
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    await writeNewFile(bodyPath, body);
  }
  try {
    await readFile(metadataPath);
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
    await writeNewFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`);
  }
}

function validateSource(source: IngestSource): URL {
  if (!SOURCE_ID_PATTERN.test(source.id)) {
    throw new Error(`来源 ID 必须是 kebab-case：${source.id}`);
  }

  const url = new URL(source.url);
  if (url.protocol !== 'https:' || url.username || url.password || url.hash) {
    throw new Error(`来源 ${source.id} 必须使用无凭据、无片段的固定 HTTPS URL`);
  }
  if (!Number.isSafeInteger(source.max_bytes) || source.max_bytes <= 0) {
    throw new Error(`来源 ${source.id} 的 max_bytes 必须是正整数`);
  }
  if (source.timeout_ms !== undefined && (!Number.isSafeInteger(source.timeout_ms) || source.timeout_ms < REQUEST_TIMEOUT_MS || source.timeout_ms > MAX_REQUEST_TIMEOUT_MS)) {
    throw new Error(`来源 ${source.id} 的 timeout_ms 必须在 ${REQUEST_TIMEOUT_MS} 到 ${MAX_REQUEST_TIMEOUT_MS} 毫秒之间`);
  }
  return url;
}

async function readBoundedBody(response: Response, maxBytes: number): Promise<Uint8Array> {
  const declaredLength = Number(response.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    throw new Error(`响应超过来源限制：${declaredLength} bytes > ${maxBytes} bytes`);
  }

  if (!response.body) return new Uint8Array();
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBytes) {
        await reader.cancel('response exceeds configured size limit');
        throw new Error(`响应超过来源限制：>${maxBytes} bytes`);
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return body;
}

async function writeNewFile(filePath: string, content: Uint8Array | string): Promise<void> {
  const handle = await open(filePath, 'wx');
  try {
    await handle.writeFile(content);
  } finally {
    await handle.close();
  }
}

/**
 * 只抓取已登记来源并保存不可变原始快照；不解析、不改 data/providers，也不发布。
 * 目标目录默认是 data/upstream/snapshots/<source_id>/。
 */
export async function captureSnapshot(
  source: IngestSource,
  options: { readonly repoRoot: string; readonly snapshotDir?: string; readonly cacheDir?: string },
): Promise<SnapshotCaptureResult> {
  const url = validateSource(source);
  if (!source.enabled) throw new Error(`来源 ${source.id} 已停用`);

  const root = path.resolve(options.repoRoot, options.snapshotDir ?? 'data/upstream/snapshots');
  const cacheRoot = path.resolve(options.repoRoot, options.cacheDir ?? '.cache/provider-ingest');
  const cacheSourceDir = path.join(cacheRoot, source.id);
  const cached = await readReusableSnapshot(cacheSourceDir);
  const reusable = cached?.metadata.source_id === source.id
    && cached.metadata.request_url === url.toString()
    && cached.accept === source.accept
    && cached.body.byteLength <= source.max_bytes
    ? cached
    : null;
  const headers: Record<string, string> = { accept: source.accept };
  if (reusable?.metadata.etag) headers['if-none-match'] = reusable.metadata.etag;
  if (reusable?.metadata.last_modified) headers['if-modified-since'] = reusable.metadata.last_modified;

  const response = await fetch(url, {
    method: 'GET',
    redirect: 'error',
    signal: AbortSignal.timeout(source.timeout_ms ?? REQUEST_TIMEOUT_MS),
    headers,
  });
  if (response.status === 304) {
    await response.body?.cancel();
    if (!reusable) throw new Error(`来源 ${source.id} 返回 304，但没有可复用的快照正文`);
    await writeSnapshotFiles(root, reusable.metadata, reusable.body);
    await writeReusableSnapshot(cacheSourceDir, source.accept, {
      ...reusable.metadata,
      etag: response.headers.get('etag') ?? reusable.metadata.etag,
      last_modified: response.headers.get('last-modified') ?? reusable.metadata.last_modified,
    }, reusable.body, path.join(root, reusable.metadata.source_id, reusable.metadata.body_file));
    return { metadata: reusable.metadata, created: false };
  }
  if (!response.ok) {
    const httpError = new SnapshotHttpError(source.id, response.status, retryAfterMilliseconds(response.headers.get('retry-after')));
    await response.body?.cancel();
    throw httpError;
  }

  const body = await readBoundedBody(response, source.max_bytes);
  const retrievedAt = new Date().toISOString();
  const contentHash = `sha256:${createHash('sha256').update(body).digest('hex')}`;
  const basename = contentHash.replace(':', '-');
  const sourceDir = path.join(root, source.id);
  const bodyName = `${basename}.body`;
  const metadataName = `${basename}.json`;
  const bodyPath = path.join(sourceDir, bodyName);
  const metadataPath = path.join(sourceDir, metadataName);

  const metadata: SnapshotMetadata = {
    source_id: source.id,
    ...(source.market ? { market: source.market } : {}),
    source_name: source.name,
    request_url: url.toString(),
    retrieved_at: retrievedAt,
    http_status: response.status,
    content_type: response.headers.get('content-type'),
    etag: response.headers.get('etag'),
    last_modified: response.headers.get('last-modified'),
    content_hash: contentHash,
    byte_length: body.byteLength,
    collector_version: COLLECTOR_VERSION,
    body_file: bodyName,
  };

  await mkdir(sourceDir, { recursive: true });
  const metadataTemp = `${metadataPath}.tmp`;
  try {
    const previous = JSON.parse(await readFile(metadataPath, 'utf8')) as SnapshotMetadata;
    if (previous.content_hash === contentHash) {
      await writeReusableSnapshot(cacheSourceDir, source.accept, {
        ...previous,
        etag: response.headers.get('etag'),
        last_modified: response.headers.get('last-modified'),
      }, body, bodyPath);
      return { metadata: previous, created: false };
    }
    throw new Error(`快照路径冲突：${metadataPath}`);
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }

  let bodyCreated = false;
  let metadataTempCreated = false;
  try {
    await writeNewFile(bodyPath, body);
    bodyCreated = true;
    await writeNewFile(metadataTemp, `${JSON.stringify(metadata, null, 2)}\n`);
    metadataTempCreated = true;
    await rename(metadataTemp, metadataPath);
    metadataTempCreated = false;
  } catch (error) {
    await Promise.all([
      ...(bodyCreated ? [rm(bodyPath, { force: true })] : []),
      ...(metadataTempCreated ? [rm(metadataTemp, { force: true })] : []),
    ]);
    throw error;
  }

  await writeReusableSnapshot(cacheSourceDir, source.accept, metadata, body, bodyPath);
  return { metadata, created: true };
}
