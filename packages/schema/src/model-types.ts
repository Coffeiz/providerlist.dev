/**
 * 标准模型类型基线以 Models.dev V2 为起点，并扩展音乐生成、三维生成、世界模型与电脑操控类别。
 *
 * 关键约定（见 docs/data/model-types.md）：
 * - `model_type` 只表示模型主类别；输入与输出模态单独记录，Provider 服务能力放在市场数据中。
 * - Type 是开放枚举：上游出现未知值时保留原值，由发布校验器报 `unknown_model_type`，
 *   网站归入「其他」，绝不静默归并到 `chat`。
 */

export const KNOWN_MODEL_TYPES = [
  'chat',
  'image',
  'video',
  '3d',
  'embedding',
  'reranking',
  'decision',
  'transcription',
  'speech',
  'realtime',
  'music',
  'world_model',
  'computer_use',
] as const;

export type KnownModelType = (typeof KNOWN_MODEL_TYPES)[number];

/** 开放字符串：允许上游新类型进入，但必须通过词法校验。 */
export type ModelType = KnownModelType | (string & {});

export interface ModelTypeDescriptor {
  /** 模型 type 原文 ID。 */
  readonly id: KnownModelType;
  /** 中文展示名。 */
  readonly label: string;
  /** 英文展示名。词典归领域包所有，展示层按语言取用，不另抄一份。 */
  readonly label_en: string;
  /** 展示层注意事项。 */
  readonly note: string;
}

export const MODEL_TYPE_DESCRIPTORS: readonly ModelTypeDescriptor[] = [
  {
    id: 'chat',
    label: '对话',
    label_en: 'Chat',
    note: '输入和输出模态以 Model 记录。',
  },
  {
    id: 'image',
    label: '图像生成',
    label_en: 'Image generation',
    note: '图像输入和输出规格按 Model 资料记录。',
  },
  {
    id: 'video',
    label: '视频生成',
    label_en: 'Video generation',
    note: '输入和输出模态按 Model 资料记录。',
  },
  {
    id: '3d',
    label: '3D 生成',
    label_en: '3D generation',
    note: '表示三维资产或场景相关模型。',
  },
  {
    id: 'embedding',
    label: '向量',
    label_en: 'Embedding',
    note: '向量维度和输入限制按 Model 资料记录。',
  },
  {
    id: 'reranking',
    label: '重排序',
    label_en: 'Reranking',
    note: '表示重排序模型。',
  },
  {
    id: 'decision',
    label: '决策 / 评估',
    label_en: 'Decision / evaluation',
    note: '保留上游定义，不代表所有决策类 API 都是 LLM。',
  },
  {
    id: 'transcription',
    label: '语音识别',
    label_en: 'Speech recognition',
    note: '表示语音转写或识别模型。',
  },
  {
    id: 'speech',
    label: '语音生成',
    label_en: 'Speech synthesis',
    note: '表示语音生成模型。',
  },
  {
    id: 'realtime',
    label: '实时交互',
    label_en: 'Realtime',
    note: '交互形态；可能同时输入音频/视频并输出音频/文本。',
  },
  {
    id: 'music',
    label: '音乐生成',
    label_en: 'Music generation',
    note: '音乐生成模型。',
  },
  {
    id: 'world_model',
    label: '世界模型',
    label_en: 'World model',
    note: '生成并支持实时交互的数字世界模型。',
  },
  {
    id: 'computer_use',
    label: '电脑操控',
    label_en: 'Computer use',
    note: '通过模型操作电脑界面或执行桌面交互。',
  },
] as const;

const DESCRIPTOR_BY_ID = new Map<string, ModelTypeDescriptor>(
  MODEL_TYPE_DESCRIPTORS.map((d) => [d.id, d]),
);

export function isKnownModelType(value: string): value is KnownModelType {
  return DESCRIPTOR_BY_ID.has(value);
}

export function describeModelType(value: string): ModelTypeDescriptor | undefined {
  return DESCRIPTOR_BY_ID.get(value);
}

/** 未知类型在 UI 下的降级展示名。 */
export function modelTypeLabel(value: string, lang: 'zh' | 'en' = 'zh'): string {
  const descriptor = DESCRIPTOR_BY_ID.get(value);
  if (!descriptor) return lang === 'en' ? 'Other' : '其他';
  return lang === 'en' ? descriptor.label_en : descriptor.label;
}

/**
 * 模型 type 的 ID 词法约束。
 * 允许 `chat` 这类短横线 slug，也允许上游可能带点的命名空间形式（`vendor.chat`）。
 */
export const MODEL_TYPE_PATTERN = /^[a-z0-9][a-z0-9]*(?:[._-][a-z0-9]+)*$/;

export function isValidModelTypeId(value: string): boolean {
  return MODEL_TYPE_PATTERN.test(value);
}

/**
 * 模型类型的统计口径与 `model_type` 归一化保持一致：
 * 已知类型按 descriptor 统计，未知类型单独归入 `unknown` 桶。
 */
export function bucketModelTypes(values: readonly string[]): Record<string, number> {
  const buckets: Record<string, number> = { unknown: 0 };
  for (const value of values) {
    if (isKnownModelType(value)) {
      buckets[value] = (buckets[value] ?? 0) + 1;
    } else {
      buckets.unknown = (buckets.unknown ?? 0) + 1;
    }
  }
  return buckets;
}
