import type { ModelType } from '../types.ts';

/** Shared display order for model type navigation, filters, and Provider tags. */
export const MODEL_TYPE_DISPLAY_ORDER: readonly ModelType[] = [
  'chat',
  'image',
  'video',
  'transcription',
  'speech',
  'decision',
  'embedding',
  'reranking',
  'realtime',
  'music',
  '3d',
  'world_model',
  'computer_use',
];

const MODEL_TYPE_ORDER = new Map(MODEL_TYPE_DISPLAY_ORDER.map((type, index) => [type, index]));

/** Sort known types by the shared display order, then unknown types by their localized label. */
export function sortModelTypes<T extends string>(
  types: Iterable<T>,
  label: (type: T) => string,
): T[] {
  return [...types].sort((left, right) => {
    if (left === 'unknown') return right === 'unknown' ? 0 : 1;
    if (right === 'unknown') return -1;

    const leftOrder = MODEL_TYPE_ORDER.get(left as ModelType) ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = MODEL_TYPE_ORDER.get(right as ModelType) ?? Number.MAX_SAFE_INTEGER;
    return leftOrder - rightOrder || label(left).localeCompare(label(right));
  });
}
