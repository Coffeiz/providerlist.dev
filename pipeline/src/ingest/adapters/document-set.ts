import { createHash } from 'node:crypto';
import { mkdir, open, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { captureSnapshot, SnapshotHttpError } from '../snapshot.ts';
import { renderCandidateReview } from '../candidate-review.ts';
import { datedReviewMarkdownPath } from '../review-path.ts';
import type { CandidateEnvelope, IngestSource, SnapshotMetadata } from '../types.ts';
import type { ProviderCollectionIR } from '../ir/provider-collection.ts';
import { normalizeProviderCollectionPricingContexts } from '../ir/pricing-context.ts';
import { assertValidProviderCollectionIR } from '../ir/validation.ts';

export interface CapturedDocument {
  readonly source: IngestSource;
  readonly metadata: SnapshotMetadata;
  readonly body: string;
}

/** Candidate observation time follows the newest retrieved evidence, never wall-clock time. */
export function latestSnapshotRetrievedAt(snapshots: readonly Pick<SnapshotMetadata, 'retrieved_at'>[]): string {
  if (snapshots.length === 0) throw new Error('无法从空快照集确定观察时间');
  const timestamps = snapshots.map(({ retrieved_at }) => retrieved_at);
  if (timestamps.some((value) => typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value) || Number.isNaN(Date.parse(value)))) {
    throw new Error('快照缺少有效 retrieved_at，无法确定观察时间');
  }
  return timestamps.reduce((latest, value) => Date.parse(value) > Date.parse(latest) ? value : latest);
}

export type CandidateScope = 'ir' | 'global' | 'ir-global';
export type IRCandidateScope = 'ir' | 'ir-global';

export interface DocumentSetResult {
  readonly changed: boolean;
  readonly modelCount: number;
  readonly fingerprint: string;
  readonly reviewPath: string | null;
  readonly reviewMarkdownPath: string | null;
  readonly snapshotCount: number;
  readonly candidateScope?: CandidateScope;
  readonly status?: 'needs_review';
  readonly message?: string;
  readonly irCandidate?: {
    readonly changed: boolean;
    readonly modelCount: number;
    readonly fingerprint: string;
    readonly reviewPath: string | null;
    readonly reviewMarkdownPath: string | null;
    readonly snapshotCount: number;
    readonly candidateScope: IRCandidateScope;
  };
}

function keepModelListIdentityOnly(current: ProviderCollectionIR): ProviderCollectionIR {
  const identityFields = new Set(['id', 'model_id', 'provider_model_id', 'name', 'display_name', 'status', 'status_label', 'source_id']);
  return {
    ...current,
    document_observations: current.document_observations.map((observation) => {
      if (observation.scope !== 'model_catalog') return observation;
      const structuredRecords = observation.structured_records.flatMap((record) => {
        if (!record || typeof record !== 'object' || Array.isArray(record)) return [];
        const identity = Object.fromEntries(Object.entries(record).filter(([key]) => identityFields.has(key)));
        return Object.keys(identity).length ? [identity] : [];
      });
      return {
        ...observation,
        tables: [],
        structured_records: structuredRecords,
        api_mentions: [],
        plan_or_price_mentions: [],
        capability_mentions: [],
        excerpt: '',
      };
    }),
  };
}

export async function writeProviderCollectionCandidate(input: {
  readonly repoRoot: string;
  readonly providerId: string;
  readonly candidateScope?: IRCandidateScope;
  readonly documents: readonly CapturedDocument[];
  readonly current: ProviderCollectionIR;
  readonly modelCount?: number;
  readonly renderReview: (candidate: CandidateEnvelope<ProviderCollectionIR>) => string;
}): Promise<DocumentSetResult> {
  if (input.current.provider_id !== input.providerId) {
    throw new Error(`IR Provider ${input.current.provider_id} 与候选 Provider ${input.providerId} 不一致`);
  }
  // Keep model catalog evidence to identity and status fields. Detailed Model
  // specifications are maintained manually in data/models/.
  const collected = keepModelListIdentityOnly(input.current);
  const current = normalizeProviderCollectionPricingContexts(collected);
  assertValidProviderCollectionIR(
    current,
    input.documents.map(({ metadata }) => metadata),
    input.documents.map(({ source }) => source),
  );
  return writeDocumentCandidate({
    repoRoot: input.repoRoot,
    providerId: input.providerId,
    // Keep the new IR candidate state isolated from the legacy root-level
    // state.json consumed by the legacy migration comparator.
    candidateScope: input.candidateScope ?? 'ir',
    candidateKind: 'provider-collection-ir-v1',
    documents: input.documents,
    current,
    modelCount: input.modelCount ?? current.services.reduce((count, service) => count + service.offerings.length, 0),
    renderReview: input.renderReview,
  });
}

export async function captureDocumentSet(
  repoRoot: string,
  sources: readonly IngestSource[],
): Promise<CapturedDocument[]> {
  if (sources.length === 0) throw new Error('适配器没有登记来源');
  const captured: CapturedDocument[] = [];
  const retryDelayMs = (error: unknown, attempt: number): number => {
    if (error instanceof SnapshotHttpError && error.status === 429 && error.retryAfterMs !== null) {
      return error.retryAfterMs;
    }
    return Math.min(120_000, 500 * (2 ** attempt));
  };
  const captureWithRetry = async (source: IngestSource): Promise<CapturedDocument> => {
    let lastError: unknown;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        const snapshot = await captureSnapshot(source, { repoRoot });
        const body = await readFile(path.join(repoRoot, 'data/upstream/snapshots', source.id, snapshot.metadata.body_file), 'utf8');
        return { source, metadata: snapshot.metadata, body };
      } catch (error) {
        lastError = error;
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, retryDelayMs(error, attempt)));
      }
    }
    const message = lastError instanceof Error ? lastError.message : String(lastError);
    throw new Error(`来源 ${source.id} 采集失败（重试 3 次）：${message}`, { cause: lastError });
  };
  for (let index = 0; index < sources.length; index += 2) {
    const batch = await Promise.all(sources.slice(index, index + 2).map(captureWithRetry));
    captured.push(...batch);
  }
  return captured;
}

async function atomicWrite(filePath: string, content: string): Promise<void> {
  const temp = `${filePath}.${process.pid}.tmp`;
  await writeFile(temp, content, { flag: 'wx' });
  try { await rename(temp, filePath); }
  catch (error) { await rm(temp, { force: true }); throw error; }
}

function candidateFingerprint(current: unknown, candidateKind: string): string {
  const semanticCurrent = candidateKind === 'provider-collection-ir-v1' && current !== null && typeof current === 'object' && !Array.isArray(current)
    ? Object.fromEntries(Object.entries(current as Record<string, unknown>).filter(([key]) => key !== 'observed_at'))
    : current;
  return `sha256:${createHash('sha256').update(JSON.stringify(semanticCurrent)).digest('hex')}`;
}

async function createOnce(filePath: string, content: string): Promise<void> {
  let handle: Awaited<ReturnType<typeof open>>;
  try { handle = await open(filePath, 'wx'); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'EEXIST') return;
    throw error;
  }
  try { await handle.writeFile(content); } finally { await handle.close(); }
}

/** 将专属解析事实写成可审阅候选，不触碰正式 Provider 数据。 */
export async function writeDocumentCandidate<TFacts>(input: {
  readonly repoRoot: string;
  readonly providerId: string;
  /** Isolates market-scoped observations while retaining the owning Provider ID. */
  readonly candidateScope?: CandidateScope;
  readonly candidateKind: string;
  readonly documents: readonly CapturedDocument[];
  readonly current: TFacts;
  readonly modelCount: number;
  readonly renderReview: (candidate: CandidateEnvelope<TFacts>) => string;
}): Promise<DocumentSetResult> {
  if (input.documents.length === 0) throw new Error('候选缺少来源快照，无法确定观察时间或来源覆盖');
  if (input.candidateScope !== undefined && !/^[a-z0-9-]+$/.test(input.candidateScope)) {
    throw new Error(`候选范围必须是小写字母、数字或连字符：${input.candidateScope}`);
  }
  const hash = candidateFingerprint(input.current, input.candidateKind);
  const dir = path.join(input.repoRoot, 'data/candidates', input.providerId, ...(input.candidateScope ? [input.candidateScope] : []));
  const statePath = path.join(dir, 'state.json');
  const reviewPath = path.join(dir, 'reviews', `${hash.slice(7)}.json`);
  let previous: { candidate_hash?: string; facts?: TFacts; review_markdown_file?: string } = {};
  try { previous = JSON.parse(await readFile(statePath, 'utf8')) as typeof previous; }
  catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
  const base = {
    modelCount: input.modelCount,
    fingerprint: hash,
    snapshotCount: input.documents.length,
    ...(input.candidateScope ? { candidateScope: input.candidateScope } : {}),
  };
  if (previous.candidate_hash === hash) {
    let markdown: string | null = null;
    try {
      const existing = JSON.parse(await readFile(reviewPath, 'utf8')) as CandidateEnvelope<TFacts>;
      // Refresh retrieval evidence even when semantic facts are unchanged. Consumers
      // that count consecutive complete-catalog observations need the actual time of
      // each successful fetch, not the timestamp of the last semantic change.
      const observedAt = latestSnapshotRetrievedAt(input.documents.map(({ metadata }) => metadata));
      const datedMarkdownPath = await datedReviewMarkdownPath(
        path.dirname(reviewPath),
        observedAt,
        previous.review_markdown_file ?? existing.review_markdown_file,
      );
      const reviewMarkdownFile = path.basename(datedMarkdownPath);
      const candidate: CandidateEnvelope<TFacts> = {
        ...existing,
        observed_at: observedAt,
        review_markdown_file: reviewMarkdownFile,
        sources: input.documents.map(({ metadata }) => metadata),
        current: input.current,
      };
      await atomicWrite(reviewPath, `${JSON.stringify(candidate)}\n`);
      await atomicWrite(datedMarkdownPath, renderCandidateReview(candidate, input.renderReview(candidate)));
      await atomicWrite(statePath, `${JSON.stringify({ provider_id: input.providerId, candidate_hash: hash, facts: input.current, review_markdown_file: reviewMarkdownFile })}\n`);
      const legacyMarkdownPath = reviewPath.replace(/\.json$/u, '.md');
      if (legacyMarkdownPath !== datedMarkdownPath && !existing.review_markdown_file && !previous.review_markdown_file) {
        await rm(legacyMarkdownPath, { force: true });
      }
      markdown = path.relative(input.repoRoot, datedMarkdownPath);
    } catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
    return { changed: false, ...base, reviewPath: null, reviewMarkdownPath: markdown };
  }
  const candidate: CandidateEnvelope<TFacts> = {
    provider_id: input.providerId,
    candidate_kind: input.candidateKind,
    observed_at: latestSnapshotRetrievedAt(input.documents.map(({ metadata }) => metadata)),
    previous_candidate_hash: previous.candidate_hash ?? null,
    candidate_hash: hash,
    review_markdown_file: path.basename(await datedReviewMarkdownPath(
      path.dirname(reviewPath),
      latestSnapshotRetrievedAt(input.documents.map(({ metadata }) => metadata)),
    )),
    sources: input.documents.map(({ metadata }) => metadata),
    previous: previous.facts ?? null,
    current: input.current,
  };
  await mkdir(path.dirname(reviewPath), { recursive: true });
  await createOnce(reviewPath, `${JSON.stringify(candidate)}\n`);
  const datedMarkdownPath = path.join(path.dirname(reviewPath), candidate.review_markdown_file!);
  await atomicWrite(datedMarkdownPath, renderCandidateReview(candidate, input.renderReview(candidate)));
  await atomicWrite(statePath, `${JSON.stringify({ provider_id: input.providerId, candidate_hash: hash, facts: input.current, review_markdown_file: candidate.review_markdown_file })}\n`);
  return {
    changed: true,
    ...base,
    reviewPath: path.relative(input.repoRoot, reviewPath),
    reviewMarkdownPath: path.relative(input.repoRoot, datedMarkdownPath),
  };
}
