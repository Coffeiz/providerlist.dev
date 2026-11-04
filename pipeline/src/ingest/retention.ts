/** 候选与原始快照的有限保留策略。 */

import { mkdir, open, readFile, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';

const SNAPSHOT_RETENTION_MS = 0;
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HASH_PATTERN = /^(?:sha256:)?([a-f0-9]{64})$/i;

export type CandidateDecision = 'accepted' | 'rejected' | 'superseded';

interface ReviewCandidate {
  readonly provider_id?: string;
  readonly candidate_hash?: string;
  readonly review_markdown_file?: string;
  readonly sources?: readonly {
    readonly source_id?: string;
    readonly body_file?: string;
  }[];
}

interface CandidateDecisionRecord {
  readonly provider_id: string;
  readonly candidate_hash: string;
  readonly decision: CandidateDecision;
  readonly decided_at: string;
  readonly reviewed_by: string;
  readonly reason?: string;
  readonly reference?: string;
}

interface CandidateLifecycleEvent {
  readonly provider_id?: string;
  readonly candidate_hash?: string;
  readonly event?: string;
  readonly occurred_at?: string;
}

interface SnapshotMetadata {
  readonly retrieved_at?: string;
  readonly body_file?: string;
}

export interface IngestPruneResult {
  readonly reviews_removed: number;
  readonly snapshots_removed: number;
  readonly snapshot_bytes_removed: number;
}

function hashHex(value: string): string {
  const match = value.match(HASH_PATTERN);
  if (!match?.[1]) throw new Error('候选哈希必须是 64 位 SHA-256，可带 sha256: 前缀');
  return match[1].toLowerCase();
}

async function readJson<T>(filePath: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(filePath, 'utf8')) as T;
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null;
    throw error;
  }
}

function parsedTime(value: string | undefined): number | null {
  if (!value || !/Z$/i.test(value)) return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}

/** 显式记录人工处理结果；重复决策不覆盖旧记录。 */
export async function recordCandidateDecision(options: {
  readonly repoRoot: string;
  readonly providerId: string;
  readonly candidateHash: string;
  readonly decision: CandidateDecision;
  readonly reviewedBy: string;
  readonly decidedAt?: string;
  readonly reason?: string;
  readonly reference?: string;
}): Promise<string> {
  if (!ID_PATTERN.test(options.providerId)) throw new Error(`Provider ID 格式无效：${options.providerId}`);
  if (!['accepted', 'rejected', 'superseded'].includes(options.decision)) {
    throw new Error('处理结果只允许 accepted、rejected 或 superseded');
  }
  if (!options.reviewedBy.trim()) throw new Error('必须记录 reviewer');
  const hex = hashHex(options.candidateHash);
  const candidatePath = path.join(options.repoRoot, 'data/candidates', options.providerId, 'reviews', `${hex}.json`);
  const candidate = await readJson<ReviewCandidate>(candidatePath);
  if (!candidate || candidate.provider_id !== options.providerId || !candidate.candidate_hash) {
    throw new Error(`找不到匹配的候选文件：${candidatePath}`);
  }
  if (hashHex(candidate.candidate_hash) !== hex) throw new Error('候选文件名与 candidate_hash 不匹配');

  const decidedAt = options.decidedAt ?? new Date().toISOString();
  if (parsedTime(decidedAt) === null) throw new Error('decided_at 必须是带时区的 ISO 8601 时间');
  const decisionPath = path.join(options.repoRoot, 'data/candidates', options.providerId, 'decisions', `${hex}.json`);
  await mkdir(path.dirname(decisionPath), { recursive: true });
  const record: CandidateDecisionRecord = {
    provider_id: options.providerId,
    candidate_hash: `sha256:${hex}`,
    decision: options.decision,
    decided_at: decidedAt,
    reviewed_by: options.reviewedBy.trim(),
    ...(options.reason ? { reason: options.reason } : {}),
    ...(options.reference ? { reference: options.reference } : {}),
  };
  await writeDecisionOnce(decisionPath, record);
  return path.relative(options.repoRoot, decisionPath);
}

async function writeDecisionOnce(filePath: string, record: CandidateDecisionRecord): Promise<boolean> {
  let handle: Awaited<ReturnType<typeof open>>;
  try {
    handle = await open(filePath, 'wx');
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'EEXIST') return false;
    throw error;
  }
  try {
    await handle.writeFile(`${JSON.stringify(record, null, 2)}\n`, 'utf8');
  } finally {
    await handle.close();
  }
  return true;
}

async function listJsonFiles(directory: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return [];
    throw error;
  }
  return entries.filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => path.join(directory, entry.name));
}

async function listReviewDirectories(providerRoot: string): Promise<string[]> {
  const result: string[] = [];
  let entries;
  try {
    entries = await readdir(providerRoot, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return result;
    throw error;
  }

  for (const entry of entries.filter((item) => item.isDirectory() && ID_PATTERN.test(item.name))) {
    if (entry.name === 'reviews') {
      result.push(path.join(providerRoot, entry.name));
      continue;
    }
    // Candidate scopes (for example `ir`, `ir-global`, `global`) keep their
    // own review and decision directories one level below the Provider.
    const scopeRoot = path.join(providerRoot, entry.name);
    let scopedEntries;
    try {
      scopedEntries = await readdir(scopeRoot, { withFileTypes: true });
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') continue;
      throw error;
    }
    if (scopedEntries.some((item) => item.isDirectory() && item.name === 'reviews')) {
      result.push(path.join(scopeRoot, 'reviews'));
    }
  }
  return result;
}

function isDecisionRecord(value: CandidateDecisionRecord | null, providerId: string, candidateHash: string): value is CandidateDecisionRecord {
  return value !== null && value.provider_id === providerId && value.candidate_hash === candidateHash &&
    ['accepted', 'rejected', 'superseded'].includes(value.decision) && Boolean(value.reviewed_by?.trim()) &&
    parsedTime(value.decided_at) !== null;
}

async function pruneReviewCandidate(options: {
  readonly repoRoot: string;
  readonly candidatePath: string;
  readonly reviewDirectory: string;
  readonly providerRoot: string;
  readonly providerId: string;
}): Promise<{ removed: boolean; protectedSnapshots: string[] }> {
  const candidate = await readJson<ReviewCandidate>(options.candidatePath);
  if (!candidate || candidate.provider_id !== options.providerId || !candidate.candidate_hash) {
    return { removed: false, protectedSnapshots: [] };
  }
  const hex = hashHex(candidate.candidate_hash);
  const scopedDecisionPath = path.join(path.dirname(options.reviewDirectory), 'decisions', `${hex}.json`);
  const rootDecisionPath = path.join(options.providerRoot, 'decisions', `${hex}.json`);
  const decision = await readJson<CandidateDecisionRecord>(scopedDecisionPath) ??
    (scopedDecisionPath === rootDecisionPath ? null : await readJson<CandidateDecisionRecord>(rootDecisionPath));
  const resolved = isDecisionRecord(decision, options.providerId, `sha256:${hex}`);
  const relativeReviewDirectory = path.relative(options.providerRoot, options.reviewDirectory);
  const scopeParts = relativeReviewDirectory.split(path.sep).slice(0, -1);
  const latestLifecycle = await readCandidateLifecycle(options.repoRoot, options.providerId, hex, scopeParts);
  const lifecycleClosed = latestLifecycle !== null && [
    'closed_unmerged', 'merged_approved', 'merged_without_current_approval', 'superseded',
  ].includes(latestLifecycle.event ?? '');
  if (resolved || lifecycleClosed) {
    await rm(options.candidatePath, { force: true });
    const reviewFile = candidate.review_markdown_file;
    const markdownPath = reviewFile && path.basename(reviewFile) === reviewFile && /^(?:[a-f0-9]{64}|\d{4}-\d{2}-\d{2}(?:-\d+)?)\.md$/u.test(reviewFile)
      ? path.join(options.reviewDirectory, reviewFile)
      : options.candidatePath.replace(/\.json$/u, '.md');
    await rm(markdownPath, { force: true });
    return { removed: true, protectedSnapshots: [] };
  }

  const protectedSnapshots = (candidate.sources ?? []).flatMap((source) => {
    if (!source.source_id || !source.body_file || path.basename(source.body_file) !== source.body_file) return [];
    return [`${source.source_id}/${source.body_file}`];
  });
  return { removed: false, protectedSnapshots };
}

async function readCandidateLifecycle(
  repoRoot: string,
  providerId: string,
  candidateHash: string,
  scopeParts: readonly string[],
): Promise<CandidateLifecycleEvent | null> {
  const lifecycleRoot = path.join(repoRoot, 'data/ingestion-lifecycle', providerId);
  const paths = [
    path.join(lifecycleRoot, ...scopeParts, `${candidateHash}.jsonl`),
    ...(scopeParts.length ? [path.join(lifecycleRoot, `${candidateHash}.jsonl`)] : []),
  ];
  let latest: CandidateLifecycleEvent | null = null;
  let latestTime = -1;
  for (const filePath of paths) {
    let content: string;
    try { content = await readFile(filePath, 'utf8'); }
    catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') continue;
      throw error;
    }
    for (const line of content.split(/\r?\n/).filter(Boolean)) {
      let event: CandidateLifecycleEvent;
      try { event = JSON.parse(line) as CandidateLifecycleEvent; }
      catch { continue; }
      const eventTime = parsedTime(event.occurred_at);
      if (event.provider_id !== providerId || event.candidate_hash !== `sha256:${candidateHash}` || eventTime === null) continue;
      if (eventTime >= latestTime) {
        latest = event;
        latestTime = eventTime;
      }
    }
  }
  return latest;
}

async function pruneReviews(repoRoot: string): Promise<{ removed: number; protectedSnapshots: Set<string> }> {
  const candidatesRoot = path.join(repoRoot, 'data/candidates');
  let providers;
  try {
    providers = await readdir(candidatesRoot, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return { removed: 0, protectedSnapshots: new Set() };
    }
    throw error;
  }

  let removed = 0;
  const protectedSnapshots = new Set<string>();
  for (const provider of providers.filter((entry) => entry.isDirectory() && ID_PATTERN.test(entry.name))) {
    const providerId = provider.name;
    const providerRoot = path.join(candidatesRoot, providerId);
    for (const reviewDirectory of await listReviewDirectories(providerRoot)) {
      for (const candidatePath of await listJsonFiles(reviewDirectory)) {
        const result = await pruneReviewCandidate({ repoRoot, candidatePath, reviewDirectory, providerRoot, providerId });
        if (result.removed) removed += 1;
        for (const snapshot of result.protectedSnapshots) protectedSnapshots.add(snapshot);
      }
    }
  }
  return { removed, protectedSnapshots };
}

async function pruneSnapshots(repoRoot: string, now: number, protectedSnapshots: ReadonlySet<string>): Promise<{
  removed: number;
  bytesRemoved: number;
}> {
  const snapshotsRoot = path.join(repoRoot, 'data/upstream/snapshots');
  let sources;
  try {
    sources = await readdir(snapshotsRoot, { withFileTypes: true });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return { removed: 0, bytesRemoved: 0 };
    throw error;
  }

  let removed = 0;
  let bytesRemoved = 0;
  for (const source of sources.filter((entry) => entry.isDirectory() && ID_PATTERN.test(entry.name))) {
    const sourceRoot = path.join(snapshotsRoot, source.name);
    for (const metadataPath of await listJsonFiles(sourceRoot)) {
      const result = await pruneSnapshot({ metadataPath, sourceRoot, sourceId: source.name, now, protectedSnapshots });
      if (result.removed) removed += 1;
      bytesRemoved += result.bytesRemoved;
    }
  }
  return { removed, bytesRemoved };
}

async function pruneSnapshot(options: {
  readonly metadataPath: string;
  readonly sourceRoot: string;
  readonly sourceId: string;
  readonly now: number;
  readonly protectedSnapshots: ReadonlySet<string>;
}): Promise<{ removed: boolean; bytesRemoved: number }> {
  const metadata = await readJson<SnapshotMetadata>(options.metadataPath);
  const retrievedAt = parsedTime(metadata?.retrieved_at);
  const bodyFile = metadata?.body_file;
  if (retrievedAt === null || options.now - retrievedAt < SNAPSHOT_RETENTION_MS ||
    !bodyFile || path.basename(bodyFile) !== bodyFile || !bodyFile.endsWith('.body') ||
    options.protectedSnapshots.has(`${options.sourceId}/${bodyFile}`)) {
    return { removed: false, bytesRemoved: 0 };
  }

  const bodyPath = path.join(options.sourceRoot, bodyFile);
  let bytesRemoved = 0;
  try {
    bytesRemoved = (await stat(bodyPath)).size;
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }
  await rm(bodyPath, { force: true });
  await rm(options.metadataPath, { force: true });
  return { removed: true, bytesRemoved };
}

/** 保留仍待 PR 评审的候选及其来源快照；清理已决/已关闭候选和未被引用的快照。 */
export async function pruneIngestArtifacts(options: {
  readonly repoRoot: string;
  readonly now?: Date;
}): Promise<IngestPruneResult> {
  const now = options.now?.getTime() ?? Date.now();
  const reviews = await pruneReviews(options.repoRoot);
  const snapshots = await pruneSnapshots(options.repoRoot, now, reviews.protectedSnapshots);
  return {
    reviews_removed: reviews.removed,
    snapshots_removed: snapshots.removed,
    snapshot_bytes_removed: snapshots.bytesRemoved,
  };
}
