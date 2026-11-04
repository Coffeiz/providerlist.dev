import type { Model } from '@providerlist/schema/types';

export type ModelRefMatchRule = 'exact_id' | 'model_id_after_slash' | 'exact_name';

export interface ModelRefResolution {
  readonly model_ref: string | null;
  readonly rule: ModelRefMatchRule | 'unmatched' | 'ambiguous';
  readonly candidates: readonly string[];
  readonly matched_name?: string;
}

export interface PreservedModelRefResolution {
  readonly model_ref: string | null;
  readonly rule: ModelRefResolution['rule'] | 'preserved_existing';
  readonly candidates: readonly string[];
  readonly preserved: boolean;
  readonly assertion: string;
}

function normalizedName(value: string): string {
  return value.normalize('NFKC').trim().replace(/\s+/gu, ' ').toLowerCase();
}

/** Resolve Provider identifiers against the canonical Model registry without fuzzy matching. */
export function resolveModelRef(
  providerModelId: string,
  registry: readonly Model[],
  displayName?: string,
): ModelRefResolution {
  const exact = registry.filter((model) => model.id === providerModelId);
  if (exact.length === 1) return { model_ref: exact[0]!.id, rule: 'exact_id', candidates: [exact[0]!.id] };
  if (exact.length > 1) return { model_ref: null, rule: 'ambiguous', candidates: exact.map(({ id }) => id).sort() };

  const providerModelSlug = providerModelId.split('/').at(-1) ?? providerModelId;
  const suffixMatches = registry.filter((model) => (model.id.split('/').at(-1) ?? model.id) === providerModelSlug);
  if (suffixMatches.length === 1) {
    return { model_ref: suffixMatches[0]!.id, rule: 'model_id_after_slash', candidates: [suffixMatches[0]!.id] };
  }
  if (suffixMatches.length > 1) {
    return { model_ref: null, rule: 'ambiguous', candidates: suffixMatches.map(({ id }) => id).sort() };
  }

  // Provider display names and model names are evidence-backed facts. Match only
  // normalized exact strings; never use substring or similarity matching.
  const providerNames = [displayName, providerModelId, providerModelSlug]
    .filter((value): value is string => Boolean(value?.trim()))
    .map((value) => ({ value, normalized: normalizedName(value) }));
  const nameMatches = registry.filter((model) => providerNames.some(({ normalized }) => normalized === normalizedName(model.name)));
  if (nameMatches.length === 1) {
    const matchedModelName = normalizedName(nameMatches[0]!.name);
    const matchedName = providerNames.find(({ normalized }) => normalized === matchedModelName)?.value;
    return { model_ref: nameMatches[0]!.id, rule: 'exact_name', candidates: [nameMatches[0]!.id], matched_name: matchedName };
  }
  if (nameMatches.length > 1) {
    return { model_ref: null, rule: 'ambiguous', candidates: nameMatches.map(({ id }) => id).sort() };
  }
  return { model_ref: null, rule: 'unmatched', candidates: [] };
}

export function modelRefMatchDescription(providerModelId: string, resolution: ModelRefResolution, displayName?: string): string {
  if (resolution.rule === 'exact_id') {
    return `自动关联：Provider 调用 ID「${providerModelId}」与规范 Model ID「${resolution.model_ref}」完全一致；请在 review 中核对该 ID 身份。`;
  }
  if (resolution.rule === 'model_id_after_slash') {
    return `自动关联：Provider 调用 ID「${providerModelId}」斜杠后的型号段与规范 Model ID「${resolution.model_ref}」斜杠后的型号段完全一致；按唯一后缀命中关联，请在 review 中核对开发商及型号身份。`;
  }
  if (resolution.rule === 'exact_name') {
    return `自动关联：Provider 名称线索「${resolution.matched_name ?? displayName ?? providerModelId}」与唯一规范 Model「${resolution.model_ref}」名称精确匹配（仅统一 Unicode 兼容形式、大小写和空白）；请在 review 中核对名称证据。`;
  }
  if (resolution.rule === 'ambiguous') {
    const displayLabel = displayName ? `（展示名「${displayName}」）` : '';
    return `未自动关联：Provider 调用 ID「${providerModelId}」${displayLabel}存在多个规范 Model 候选（${resolution.candidates.join('、')}），无法唯一确定开发商与型号，需在 PR review 中人工判定。`;
  }
  return `未自动关联：Provider 调用 ID「${providerModelId}」没有匹配的规范 Model，保持 model_ref 为 null。`;
}

/** Keep an existing, still-valid association ahead of newly inferred ID matches. */
export function resolveModelRefPreservingExisting(
  providerModelId: string,
  registry: readonly Model[],
  previousModelRef?: string | null,
  displayName?: string,
): PreservedModelRefResolution {
  if (previousModelRef && registry.some(({ id }) => id === previousModelRef)) {
    return {
      model_ref: previousModelRef,
      rule: 'preserved_existing',
      candidates: [previousModelRef],
      preserved: true,
      assertion: `沿用上一版 Provider 数据中已登记的规范 Model 关联「${previousModelRef}」；该 Model 仍存在于当前注册表，因此本次未覆盖既有关联。`,
    };
  }

  const resolution = resolveModelRef(providerModelId, registry, displayName);
  return {
    ...resolution,
    preserved: false,
    assertion: modelRefMatchDescription(providerModelId, resolution, displayName),
  };
}
