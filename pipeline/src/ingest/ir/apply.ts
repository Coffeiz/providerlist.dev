import path from 'node:path';
import type { ProviderDocument } from '@providerlist/schema/types';
import { validateProviderDocument } from '@providerlist/schema/validation';
import { readProviderSource, writeProviderSource } from '../../data/provider-store.ts';
import { mergeCollectedSources } from '../collector-registry.ts';
import { semanticallyEqual } from '../semantic-diff.ts';
import { previewLatestProviderIRCandidate } from './preview.ts';

export interface ApplyProviderIRResult {
  readonly providerId: string;
  readonly candidateScope: 'ir' | 'ir-global';
  readonly status: 'written' | 'unchanged' | 'needs_review';
  readonly providerPath?: string;
  readonly reason?: string;
}

/** Write the deterministic IR projection for PR review; unchanged source files are not rewritten. */
export async function applyLatestProviderIRCandidate(options: {
  readonly repoRoot: string;
  readonly providerId: string;
  readonly candidateScope?: 'ir' | 'ir-global';
}): Promise<ApplyProviderIRResult | null> {
  const candidateScope = options.candidateScope ?? 'ir';
  const preview = await previewLatestProviderIRCandidate({ ...options, candidateScope });
  if (!preview) return null;
  if (!preview.document) {
    return {
      providerId: options.providerId,
      candidateScope,
      status: 'needs_review',
      reason: [...preview.projectionIssues, ...preview.reviewNotes].join('；') || 'IR 投影未生成有效 Provider 文档',
    };
  }

  const document = stripInternalEvidence(preview.document);
  const validation = validateProviderDocument(document);
  const errors = validation.issues.filter(({ severity }) => severity === 'error');
  if (errors.length) {
    return {
      providerId: options.providerId,
      candidateScope,
      status: 'needs_review',
      reason: errors.map(({ code, path: issuePath }) => `${code} ${issuePath}`).join('；'),
    };
  }

  const dataDir = path.join(options.repoRoot, 'data');
  const previousFacts = await readOptionalProvider(dataDir, options.providerId);
  const factsChanged = !semanticallyEqual(previousFacts, document);
  const sourcesChanged = await mergeCollectedSources(options.repoRoot, options.providerId, preview.collectedSources);

  const writtenPaths = factsChanged ? await writeProviderSource(dataDir, document) : [];
  return {
    providerId: options.providerId,
    candidateScope,
    status: writtenPaths.length > 0 || sourcesChanged ? 'written' : 'unchanged',
    ...(writtenPaths.length ? { providerPath: writtenPaths.map((file) => path.relative(options.repoRoot, file)).join(', ') } : {}),
  };
}

function stripInternalEvidence<T>(value: T): T {
  if (Array.isArray(value)) return value.map(stripInternalEvidence) as T;
  if (!value || typeof value !== 'object') return value;
  const out: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (['sources', 'evidence', 'evidence_refs', 'field_origin_refs', 'source_refs', 'data_source_kinds', 'source_bindings'].includes(key)) continue;
    out[key] = stripInternalEvidence(child);
  }
  return out as T;
}

async function readOptionalProvider(dataDir: string, providerId: string): Promise<ProviderDocument | undefined> {
  try { return await readProviderSource(dataDir, providerId); }
  catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return undefined;
    throw error;
  }
}
