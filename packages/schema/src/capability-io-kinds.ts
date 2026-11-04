/**
 * 输入/输出项的模态类型基线。
 *
 * 关键约定（见 docs/data/schema.md）：
 * - `kind` 只表示输入/输出项的类型，不等于模型主类别（`model_type`）。
 * - 与 `model_type` 一样是**开放枚举**：上游出现未知模态时保留原值，
 *   由发布校验器报 `unknown_capability_io_kind`，绝不静默归并到 `text`。
 */

export const KNOWN_CAPABILITY_IO_KINDS = [
  'text',
  'image',
  'video',
  'audio',
  'file',
  'structured',
  '3d',
  'embedding',
] as const;

export type KnownCapabilityIOKind = (typeof KNOWN_CAPABILITY_IO_KINDS)[number];

/** 开放字符串：允许上游新模态进入，但必须通过词法校验。 */
export type CapabilityIOKind = KnownCapabilityIOKind | (string & {});

/**
 * 输入/输出 kind 的 ID 词法约束。
 * 与模型 type 同规则：短横线 slug，允许数字开头（`3d`），允许点号命名空间（`vendor.hd`）。
 */
export const CAPABILITY_IO_KIND_PATTERN = /^[a-z0-9][a-z0-9]*(?:[._-][a-z0-9]+)*$/;

export function isValidCapabilityIOKindId(value: string): boolean {
  return CAPABILITY_IO_KIND_PATTERN.test(value);
}

export function isKnownCapabilityIOKind(value: string): value is KnownCapabilityIOKind {
  return (KNOWN_CAPABILITY_IO_KINDS as readonly string[]).includes(value);
}
