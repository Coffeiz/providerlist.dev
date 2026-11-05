import { appendFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { collectMiniMax } from './adapters/minimax/collect.ts';
import { collectZhipu } from './adapters/zhipu/collect.ts';
import { collectAlibaba } from './adapters/alibaba/collect.ts';
import { collectVolcengine } from './adapters/volcengine/collect.ts';
import { collectBailing } from './adapters/bailing/collect.ts';
import { collectStepfun } from './adapters/stepfun/collect.ts';
import { collectDeepseek } from './adapters/deepseek/collect.ts';
import { collectTencent } from './adapters/tencent/collect.ts';
import { collectXiaomi } from './adapters/xiaomi/collect.ts';
import { collectMoonshotai } from './adapters/moonshotai/collect.ts';
import { collectOpenAI } from './adapters/openai/collect.ts';
import { collectGoogle } from './adapters/google/collect.ts';
import { collectXAI } from './adapters/xai/collect.ts';
import { collectMeta } from './adapters/meta/collect.ts';
import type { CandidateScope, IRCandidateScope } from './adapters/document-set.ts';
import { renderCatalogAbsenceReview, updateCatalogAbsenceState } from './catalog-absence.ts';
import type { ProviderCollectionIR } from './ir/provider-collection.ts';

export const A_CLASS_PROVIDER_IDS = [
  'alibaba', 'volcengine', 'bailing', 'stepfun', 'deepseek', 'tencent-tokenhub',
  'xiaomi', 'moonshotai', 'zhipu', 'minimax', 'openai', 'google', 'xai', 'meta',
] as const;
export const MANUAL_PROVIDER_IDS = A_CLASS_PROVIDER_IDS;

export type SyncStatus = 'unchanged' | 'changed_ready' | 'needs_review' | 'invalid_data' | 'collection_failed';

export interface ProviderSyncResult {
  readonly providerId: string;
  readonly status: SyncStatus;
  readonly fingerprint: string | null;
  readonly irFingerprint?: string | null;
  readonly irCandidateScope?: CandidateScope;
  readonly modelCount: number | null;
  readonly snapshotCount: number | null;
  readonly candidateScope?: CandidateScope;
  readonly viewerPath: string | null;
  readonly sources?: readonly { readonly sourceId: string; readonly requestUrl: string; readonly contentHash: string }[];
  readonly message: string;
}

export interface CollectorOutput {
  readonly changed: boolean;
  readonly fingerprint: string;
  readonly modelCount?: number;
  readonly marketCounts?: Readonly<Record<string, number>>;
  readonly snapshotCount: number;
  readonly candidateScope?: CandidateScope;
  readonly reviewPath: string | null;
  readonly reviewMarkdownPath: string | null;
  readonly status?: SyncStatus;
  readonly message?: string;
  readonly irCandidate?: {
    readonly changed: boolean;
    readonly fingerprint: string;
    readonly modelCount?: number;
    readonly snapshotCount: number;
    readonly candidateScope: IRCandidateScope;
    readonly reviewPath: string | null;
    readonly reviewMarkdownPath: string | null;
    readonly status?: SyncStatus;
    readonly message?: string;
  };
}

type Collector = (options: { readonly repoRoot: string }) => Promise<CollectorOutput>;

const collectors: Readonly<Record<(typeof MANUAL_PROVIDER_IDS)[number], Collector>> = {
  alibaba: collectAlibaba,
  volcengine: collectVolcengine,
  bailing: collectBailing,
  stepfun: collectStepfun,
  deepseek: collectDeepseek,
  'tencent-tokenhub': collectTencent,
  xiaomi: collectXiaomi,
  moonshotai: collectMoonshotai,
  zhipu: collectZhipu,
  minimax: collectMiniMax,
  openai: collectOpenAI,
  google: collectGoogle,
  xai: collectXAI,
  meta: collectMeta,
};

async function verifyAClassRoster(repoRoot: string): Promise<void> {
  const document = await readFile(path.join(repoRoot, 'docs/data/provider-classes.md'), 'utf8');
  const aClassSection = document.split('## Class A')[1]?.split('## Class B')[0] ?? '';
  const listed = [...aClassSection.matchAll(/\|[^|]+\|\s*`([a-z0-9-]+)`\s*\|/g)].map((match) => match[1]).filter((id): id is string => Boolean(id)).sort();
  const configured = [...A_CLASS_PROVIDER_IDS].sort();
  if (listed.length !== configured.length || listed.some((id, index) => id !== configured[index])) {
    throw new Error('Sync 的 A 类清单与 docs/data/provider-classes.md 不一致；请同步维护清单后重试。');
  }
}

/** 供离线一致性回放直接运行一个登记采集器，不触发网络之外的同步编排副作用。 */
export async function runRegisteredCollector(repoRoot: string, providerId: string): Promise<CollectorOutput> {
  if (!MANUAL_PROVIDER_IDS.includes(providerId as (typeof MANUAL_PROVIDER_IDS)[number])) {
    throw new Error(`没有可用的专属采集器：${providerId}`);
  }
  return collectors[providerId as (typeof MANUAL_PROVIDER_IDS)[number]]({ repoRoot });
}

function isEnvelope(value: unknown, providerId: string): boolean {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  const candidate = value as Record<string, unknown>;
  return candidate.provider_id === providerId &&
    typeof candidate.candidate_kind === 'string' && candidate.candidate_kind.length > 0 &&
    typeof candidate.candidate_hash === 'string' && /^sha256:[a-f0-9]{64}$/.test(candidate.candidate_hash) &&
    typeof candidate.observed_at === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(candidate.observed_at) && !Number.isNaN(Date.parse(candidate.observed_at)) &&
    (candidate.previous_candidate_hash === null || (typeof candidate.previous_candidate_hash === 'string' && /^sha256:[a-f0-9]{64}$/.test(candidate.previous_candidate_hash))) &&
    Array.isArray(candidate.sources) && candidate.sources.length > 0 && candidate.sources.every((source) =>
      source !== null && typeof source === 'object' && !Array.isArray(source) &&
      typeof (source as Record<string, unknown>).source_id === 'string' && (source as Record<string, unknown>).source_id !== '' &&
      typeof (source as Record<string, unknown>).request_url === 'string' && /^https:\/\//.test((source as Record<string, unknown>).request_url as string) &&
      typeof (source as Record<string, unknown>).content_hash === 'string' && /^sha256:[a-f0-9]{64}$/.test((source as Record<string, unknown>).content_hash as string)) &&
    candidate.current !== undefined && candidate.previous !== undefined;
}

function isOwnedCandidatePath(providerId: string, candidatePath: string | null, candidateScope?: CandidateScope): candidatePath is string {
  if (candidatePath === null) return false;
  const scope = candidateScope ? `${candidateScope}/` : '';
  return new RegExp(`^data/candidates/${providerId}/${scope}reviews/[a-f0-9]{64}\\.json$`).test(candidatePath);
}

function isOwnedReviewMarkdownPath(providerId: string, markdownPath: string | null, candidateScope?: CandidateScope): markdownPath is string {
  if (markdownPath === null) return false;
  const scope = candidateScope ? `${candidateScope}/` : '';
  return new RegExp(`^data/candidates/${providerId}/${scope}reviews/(?:[a-f0-9]{64}|\\d{4}-\\d{2}-\\d{2}(?:-\\d+)?)\\.md$`).test(markdownPath);
}

function candidateStatePath(repoRoot: string, providerId: string, candidateScope?: CandidateScope): string {
  const file = candidateScope === 'ir' || providerId !== 'minimax' ? 'state.json' : 'current-supply-state.json';
  return path.join(repoRoot, 'data/candidates', providerId, ...(candidateScope ? [candidateScope] : []), file);
}

function catalogAbsenceStatePath(repoRoot: string, providerId: string, candidateScope?: CandidateScope): string {
  return path.join(repoRoot, 'data/candidates', providerId, ...(candidateScope ? [candidateScope] : []), 'catalog-absence.json');
}

interface CandidateBaselines {
  readonly states: Readonly<Record<string, Buffer | null>>;
}

const candidateScopes: readonly (CandidateScope | undefined)[] = [undefined, 'ir', 'global', 'ir-global'];
const candidateScopeKey = (scope?: CandidateScope) => scope ?? 'legacy';

async function readOptionalFile(filePath: string): Promise<Buffer | null> {
  try { return await readFile(filePath); }
  catch (error) { if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return null; throw error; }
}

async function saveCandidateBaselines(repoRoot: string, providerId: string): Promise<CandidateBaselines> {
  const states: Record<string, Buffer | null> = {};
  for (const scope of candidateScopes) {
    states[candidateScopeKey(scope)] = await readOptionalFile(candidateStatePath(repoRoot, providerId, scope));
    states[`${candidateScopeKey(scope)}:catalog-absence`] = await readOptionalFile(catalogAbsenceStatePath(repoRoot, providerId, scope));
  }
  return { states };
}

async function restoreCandidateBaselines(repoRoot: string, providerId: string, previous: CandidateBaselines): Promise<void> {
  for (const scope of candidateScopes) {
    const baseline = previous.states[candidateScopeKey(scope)] ?? null;
    const statePath = candidateStatePath(repoRoot, providerId, scope);
    if (baseline === null) await rm(statePath, { force: true });
    else {
      await mkdir(path.dirname(statePath), { recursive: true });
      await writeFile(statePath, baseline);
    }
    const absenceKey = `${candidateScopeKey(scope)}:catalog-absence`;
    const absenceBaseline = previous.states[absenceKey] ?? null;
    const absencePath = catalogAbsenceStatePath(repoRoot, providerId, scope);
    if (absenceBaseline === null) await rm(absencePath, { force: true });
    else {
      await mkdir(path.dirname(absencePath), { recursive: true });
      await writeFile(absencePath, absenceBaseline);
    }
  }
}

function sourceReferences(value: unknown): ProviderSyncResult['sources'] {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const sources = (value as Record<string, unknown>).sources;
  if (!Array.isArray(sources)) return undefined;
  return sources.flatMap((source) => {
    if (source === null || typeof source !== 'object' || Array.isArray(source)) return [];
    const item = source as Record<string, unknown>;
    if (typeof item.source_id !== 'string' || typeof item.request_url !== 'string' || typeof item.content_hash !== 'string') return [];
    return [{ sourceId: item.source_id, requestUrl: item.request_url, contentHash: item.content_hash }];
  });
}

async function validateCandidate(repoRoot: string, providerId: string, reviewPath: string | null, expectedFingerprint: string, candidateScope?: CandidateScope): Promise<string | null> {
  if (!reviewPath) return null;
  if (!isOwnedCandidatePath(providerId, reviewPath, candidateScope)) return '候选路径必须位于该 Provider 自有的候选 reviews 目录中';
  if (!/^sha256:[a-f0-9]{64}$/.test(expectedFingerprint) || reviewPath.split('/').at(-1) !== `${expectedFingerprint.slice(7)}.json`) {
    return '候选文件名、候选指纹或适配器返回的指纹不一致';
  }
  try {
    const value: unknown = JSON.parse(await readFile(path.join(repoRoot, reviewPath), 'utf8'));
    return isEnvelope(value, providerId) && (value as Record<string, unknown>).candidate_hash === expectedFingerprint
      ? null
      : '候选结构缺少必要的来源或事实字段，或 Provider/指纹/时间与契约不符';
  } catch (error) {
    return `候选 JSON 无法读取：${error instanceof Error ? error.message : String(error)}`;
  }
}

interface CandidateScopeOutput {
  readonly changed: boolean;
  readonly fingerprint: string;
  readonly modelCount?: number;
  readonly snapshotCount: number;
  readonly reviewPath: string | null;
  readonly reviewMarkdownPath: string | null;
  readonly status?: SyncStatus;
}

interface CandidateScopeValidation {
  readonly reviewPath: string | null;
  readonly validMarkdownPath: boolean;
  readonly invalidReason: string | null;
}

async function validateCandidateScope(
  repoRoot: string,
  providerId: string,
  candidate: CandidateScopeOutput,
  candidateScope: CandidateScope | undefined,
  reportRequired: boolean,
): Promise<CandidateScopeValidation> {
  const scope = candidateScope ? `${candidateScope}/` : '';
  const fingerprintHex = candidate.fingerprint.match(/^sha256:([a-f0-9]{64})$/)?.[1];
  const reviewPath = candidate.reviewPath ?? (fingerprintHex ? `data/candidates/${providerId}/${scope}reviews/${fingerprintHex}.json` : null);
  const validMarkdownPath = isOwnedReviewMarkdownPath(providerId, candidate.reviewMarkdownPath, candidateScope);
  const pathsMatch = Boolean(reviewPath && validMarkdownPath && path.dirname(reviewPath) === path.dirname(candidate.reviewMarkdownPath!) && path.basename(reviewPath) === `${fingerprintHex}.json`);
  const missingReview = reportRequired && (!reviewPath || !validMarkdownPath || (candidate.reviewPath !== null && !pathsMatch))
    ? `${candidateScope === 'ir' ? 'IR ' : ''}候选报告存在变化，但没有生成完整的候选 JSON 和评审 Markdown`
    : null;
  const contradictoryStatus = (candidate.changed && candidate.status === 'unchanged') || (!candidate.changed && candidate.status === 'changed_ready');
  const invalidReason = !/^sha256:[a-f0-9]{64}$/.test(candidate.fingerprint) ? `${candidateScope === 'ir' ? 'IR ' : ''}适配器返回的候选指纹格式无效`
    : !Number.isInteger(candidate.snapshotCount) || candidate.snapshotCount < 0 ||
      (candidate.modelCount !== undefined && (!Number.isInteger(candidate.modelCount) || candidate.modelCount < 0))
      ? `${candidateScope === 'ir' ? 'IR ' : ''}适配器返回的快照数或事实数不是非负整数`
      : contradictoryStatus ? `${candidateScope === 'ir' ? 'IR ' : ''}适配器状态与 changed 标记矛盾`
        : missingReview ?? await validateCandidate(repoRoot, providerId, reviewPath, candidate.fingerprint, candidateScope);
  return { reviewPath, validMarkdownPath, invalidReason };
}

async function recordSupersededCandidate(repoRoot: string, providerId: string, previousHash: string, currentHash: string, candidateScope?: CandidateScope): Promise<void> {
  const previous = previousHash.match(/^sha256:([a-f0-9]{64})$/)?.[1];
  if (!previous || !/^sha256:[a-f0-9]{64}$/.test(currentHash) || previousHash === currentHash) return;
  const scopedRoot = path.join(repoRoot, 'data/candidates', providerId, ...(candidateScope ? [candidateScope] : []));
  const decisionPath = path.join(scopedRoot, 'decisions', `${previous}.json`);
  try { await readFile(decisionPath, 'utf8'); return; }
  catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }

  const eventPath = path.join(repoRoot, 'data/ingestion-lifecycle', providerId, ...(candidateScope ? [candidateScope] : []), `${previous}.jsonl`);
  await mkdir(path.dirname(eventPath), { recursive: true });
  const event = {
    event_id: `superseded-${previous}-${currentHash.slice(7)}`,
    provider_id: providerId,
    candidate_hash: previousHash,
    event: 'superseded',
    superseded_by: currentHash,
    occurred_at: new Date().toISOString(),
  };
  let existing = '';
  try { existing = await readFile(eventPath, 'utf8'); }
  catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
  if (existing.split(/\r?\n/).some((line) => line && JSON.parse(line).event_id === event.event_id)) return;
  await appendFile(eventPath, `${JSON.stringify(event)}\n`);
}

async function captureOne(repoRoot: string, providerId: (typeof MANUAL_PROVIDER_IDS)[number]): Promise<ProviderSyncResult> {
  let previousBaselines: CandidateBaselines | null = null;
  let baselineCaptured = false;
  try {
    previousBaselines = await saveCandidateBaselines(repoRoot, providerId);
    baselineCaptured = true;
    const output = await collectors[providerId]({ repoRoot });
    const irCandidate = output.irCandidate;
    const requestedStatus = output.status;
    const irReportRequired = Boolean(irCandidate && (irCandidate.changed || irCandidate.status === 'needs_review' || irCandidate.status === 'invalid_data'));
    const reportRequired = output.changed || requestedStatus === 'needs_review' || requestedStatus === 'invalid_data' || irReportRequired;
    const primaryValidation = await validateCandidateScope(repoRoot, providerId, output, output.candidateScope, reportRequired);
    const irValidation = irCandidate ? await validateCandidateScope(repoRoot, providerId, irCandidate, 'ir', irReportRequired) : null;
    const reviewPath = primaryValidation.reviewPath;
    const validMarkdownPath = primaryValidation.validMarkdownPath;
    const irMarkdownPathValid = irValidation?.validMarkdownPath ?? false;
    const invalidReason = requestedStatus === 'collection_failed' ? null : primaryValidation.invalidReason ?? irValidation?.invalidReason ?? null;
    const status = requestedStatus === 'collection_failed' ? 'collection_failed'
      : invalidReason ? 'invalid_data'
        : requestedStatus ?? (irCandidate?.status === 'needs_review' ? 'needs_review' : (output.changed || Boolean(irCandidate?.changed) ? 'changed_ready' : 'unchanged'));
    let catalogAbsenceMarkdown = '';
    let catalogAbsenceMessage = '';
    if (irCandidate && status !== 'invalid_data' && status !== 'collection_failed') {
      const scope = irCandidate.candidateScope;
      const irStatePath = candidateStatePath(repoRoot, providerId, scope);
      const absencePath = catalogAbsenceStatePath(repoRoot, providerId, scope);
      const currentState = JSON.parse(await readFile(irStatePath, 'utf8')) as { facts?: unknown };
      const currentIR = currentState.facts as ProviderCollectionIR | undefined;
      const previousBytes = previousBaselines.states[candidateScopeKey(scope)];
      const previousIR = previousBytes
        ? (JSON.parse(previousBytes.toString('utf8')) as { facts?: ProviderCollectionIR }).facts ?? null
        : null;
      if (currentIR?.provider_id === providerId && Array.isArray(currentIR.coverage) && Array.isArray(currentIR.services)) {
        let absenceState: unknown;
        try { absenceState = JSON.parse(await readFile(absencePath, 'utf8')); }
        catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
        const candidateFile = path.join(repoRoot, 'data/candidates', providerId, scope, 'reviews', `${irCandidate.fingerprint.slice(7)}.json`);
        let observedAt = currentIR.observed_at;
        try {
          const envelope = JSON.parse(await readFile(candidateFile, 'utf8')) as { observed_at?: unknown };
          if (typeof envelope.observed_at === 'string') observedAt = envelope.observed_at;
        } catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
        const result = updateCatalogAbsenceState({ providerId, previous: previousIR, current: currentIR, observedAt, state: absenceState });
        await mkdir(path.dirname(absencePath), { recursive: true });
        await writeFile(absencePath, `${JSON.stringify(result.state, null, 2)}\n`);
        catalogAbsenceMarkdown = renderCatalogAbsenceReview(result.review);
        catalogAbsenceMessage = result.review.messages.length
          ? `完整模型目录连续缺席达到退役提案阈值（${result.review.entries.length} 个 Offering），PR 将包含 status=retired 变更并附来源证据，仍需人工审核合并。`
          : '';
      }
    }
    const finalStatus = catalogAbsenceMessage && status !== 'invalid_data' && status !== 'collection_failed' ? 'needs_review' : status;
    const finalReportRequired = reportRequired || Boolean(catalogAbsenceMessage);
    if (finalStatus === 'invalid_data' || finalStatus === 'collection_failed') {
      await restoreCandidateBaselines(repoRoot, providerId, previousBaselines);
    }
    let viewerPath: string | null = null;
    let sources: ProviderSyncResult['sources'];
    if (finalReportRequired && finalStatus !== 'collection_failed') {
      // Keep one provider-level viewer for the existing aggregation PR workflow;
      // candidate state and review JSON remain isolated by candidateScope.
      viewerPath = `data/candidates/${providerId}/viewer.md`;
      const target = path.join(repoRoot, viewerPath);
      try {
        const previousViewer = await readFile(target, 'utf8');
        const previousHash = previousViewer.match(/^\| 本次候选指纹 \| `(sha256:[a-f0-9]{64})` \|$/m)?.[1];
        if (previousHash && previousHash !== output.fingerprint && finalStatus !== 'invalid_data') {
          let alreadyMerged = false;
          if (process.env.INGEST_TRACK_PR_LIFECYCLE === '1') {
            try {
              execFileSync('git', ['diff', '--quiet', 'origin/main', '--', viewerPath], { cwd: repoRoot, stdio: 'ignore' });
              alreadyMerged = true;
            } catch { /* 旧报告不在 main，可能仍属于未决候选。 */ }
          }
          if (!alreadyMerged) await recordSupersededCandidate(repoRoot, providerId, previousHash, output.fingerprint, output.candidateScope);
        }
      } catch (error) { if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error; }
      if (irCandidate && finalStatus !== 'invalid_data') {
        const previousBytes = previousBaselines.states[candidateScopeKey(irCandidate.candidateScope)];
        if (previousBytes) {
          const previousIRState = JSON.parse(previousBytes.toString('utf8')) as { candidate_hash?: unknown };
          if (typeof previousIRState.candidate_hash === 'string' && previousIRState.candidate_hash !== irCandidate.fingerprint) {
            await recordSupersededCandidate(repoRoot, providerId, previousIRState.candidate_hash, irCandidate.fingerprint, irCandidate.candidateScope);
          }
        }
      }
      await mkdir(path.dirname(target), { recursive: true });
      if (validMarkdownPath || (irCandidate && irMarkdownPathValid)) {
        const primaryReport = validMarkdownPath
          ? await readFile(path.join(repoRoot, output.reviewMarkdownPath!), 'utf8')
          : `# ${providerId} 自动采集结果`;
        const irReport = irCandidate && irMarkdownPathValid
          ? await readFile(path.join(repoRoot, irCandidate.reviewMarkdownPath!), 'utf8')
          : null;
        const reports = [primaryReport.trim(), ...(irReport ? [irReport.trim()] : []), ...(catalogAbsenceMarkdown ? [catalogAbsenceMarkdown.trim()] : [])];
        await writeFile(target, `${reports.join('\n\n---\n\n')}\n`);
      }
      else await writeFile(target, `# ${providerId} 自动采集结果\n\n`);
      if (reviewPath && isOwnedCandidatePath(providerId, reviewPath, output.candidateScope)) {
        try { sources = sourceReferences(JSON.parse(await readFile(path.join(repoRoot, reviewPath), 'utf8'))); }
        catch { /* validateCandidate 已将损坏候选归类为 invalid_data。 */ }
      }
      if (finalStatus === 'needs_review' || finalStatus === 'invalid_data') {
        const report = await readFile(target, 'utf8');
        const statusLine = `\n**采集状态：${finalStatus}** — ${invalidReason ?? (catalogAbsenceMessage || output.message || '需要人工判断。')}\n`;
        await writeFile(target, report.replace(/^(# .*\n)/, `$1${statusLine}`));
      }
    }
    return {
      providerId,
      fingerprint: output.fingerprint,
      ...(irCandidate ? { irFingerprint: irCandidate.fingerprint, irCandidateScope: irCandidate.candidateScope } : {}),
      ...(output.candidateScope ? { candidateScope: output.candidateScope } : {}),
      modelCount: output.modelCount ?? (output.marketCounts ? Object.values(output.marketCounts).reduce((sum, count) => sum + count, 0) : null),
      snapshotCount: output.snapshotCount,
      viewerPath,
      ...(sources ? { sources } : {}),
      status: finalStatus,
      message: invalidReason ?? (catalogAbsenceMessage || output.message || (finalStatus === 'unchanged' ? '来源完整，语义事实未变化' : '候选可评审')),
    };
  } catch (error) {
    let message = error instanceof Error ? error.message : String(error);
    if (baselineCaptured && previousBaselines) {
      try { await restoreCandidateBaselines(repoRoot, providerId, previousBaselines); }
      catch (restoreError) { message += `；恢复来源基线失败：${restoreError instanceof Error ? restoreError.message : String(restoreError)}`; }
    }
    return {
      providerId,
      status: 'collection_failed',
      fingerprint: null,
      modelCount: null,
      snapshotCount: null,
      viewerPath: null,
      message,
    };
  }
}

export async function runIngestionSync(options: {
  readonly repoRoot: string;
  readonly providerId?: string;
}): Promise<ProviderSyncResult[]> {
  await verifyAClassRoster(options.repoRoot);
  const providers = options.providerId === undefined
    ? A_CLASS_PROVIDER_IDS
    : MANUAL_PROVIDER_IDS.includes(options.providerId as (typeof MANUAL_PROVIDER_IDS)[number])
      ? [options.providerId as (typeof MANUAL_PROVIDER_IDS)[number]]
      : null;
  if (!providers) throw new Error(`没有可用的专属采集器：${options.providerId}`);
  const results: ProviderSyncResult[] = [];
  for (const providerId of providers) results.push(await captureOne(options.repoRoot, providerId));
  return results;
}

export function renderRunSummary(results: readonly ProviderSyncResult[]): string {
  const lines = [
    '## Provider 采集运行结果',
    '',
    '| Provider | 状态 | 候选指纹 | 事实数 | 快照数 | 说明 | 候选范围 | IR 候选指纹 |',
    '|---|---|---|---:|---:|---|---|---|',
    ...results.map((result) => {
      const irFingerprint = result.irFingerprint ?? (result.candidateScope?.startsWith('ir') ? result.fingerprint : null);
      const irScope = result.irCandidateScope ?? (result.candidateScope?.startsWith('ir') ? undefined : null);
      const scopes = `${result.candidateScope ?? 'legacy'}${irScope ? `+${irScope}` : result.irFingerprint ? '+ir' : ''}`;
      return `| \`${result.providerId}\` | \`${result.status}\` | ${result.fingerprint ? `\`${result.fingerprint}\`` : '—'} | ${result.modelCount ?? '—'} | ${result.snapshotCount ?? '—'} | ${result.message.replace(/[|\r\n]/g, ' ')} | \`${scopes}\` | ${irFingerprint ? `\`${irFingerprint}\`` : '—'} |`;
    }),
    ...(results.some(({ sources }) => sources?.length) ? [
      '',
      '### 候选来源快照',
      '',
      ...results.flatMap((result) => (result.sources ?? []).map((source) => `- \`${result.providerId}\` / \`${source.sourceId}\`：${source.requestUrl}（\`${source.contentHash}\`）`)),
    ] : []),
    '',
    `汇总：${results.filter(({ status }) => status === 'changed_ready').length} 项变化，${results.filter(({ status }) => status === 'unchanged').length} 项无变化，${results.filter(({ status }) => status === 'needs_review').length} 项待判断，${results.filter(({ status }) => status === 'invalid_data').length} 项无效，${results.filter(({ status }) => status === 'collection_failed').length} 项采集失败。`,
    '',
    '采集候选不写入正式 Provider、Model 或生命周期数据。',
  ];
  return lines.join('\n');
}

export async function writeSyncOutputs(input: {
  readonly repoRoot: string;
  readonly results: readonly ProviderSyncResult[];
}): Promise<void> {
  const summary = renderRunSummary(input.results);
  if (process.env.GITHUB_STEP_SUMMARY) {
    await writeFile(process.env.GITHUB_STEP_SUMMARY, `${summary}\n`, { flag: 'a' });
  } else {
    console.log(summary);
  }
  const handoffSummaryPath = process.env.INGEST_HANDOFF_SUMMARY_PATH;
  if (handoffSummaryPath) {
    await mkdir(path.dirname(handoffSummaryPath), { recursive: true });
    await writeFile(handoffSummaryPath, `${summary}\n`, { flag: 'a' });
  }
  // PR 正文由**聚合步骤**统一生成（scripts/ci/render-ingestion-pr-body.mjs）——
  // 采集步骤不产出 PR 正文，也不该拼第二份模板。两边各拼一次必然漂移。
}
