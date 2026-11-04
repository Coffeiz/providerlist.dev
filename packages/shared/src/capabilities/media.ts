/**
 * 媒体约束描述与校验。
 *
 * 核心规则（见 docs/data/media-operations.md）：
 * - **不可把输入和输出 MediaSpec 合并**。图片输入 10 MB 不代表生成图片也限制 10 MB。
 * - `max_bytes = 0` 不是未知；未知字段显式 `null` 或省略。
 * - MIME 而非笼统扩展名；缺失表示「未披露」而非「允许所有」。
 * - 未知限制 ≠ 无限制：客户端不得把未知自动当成允许。
 */

import type { CapabilityInput, MediaSpec, CapabilityOutput } from '@providerlist/schema/types';

export interface MediaIssue {
  readonly input_or_output: string;
  readonly code: 'mime' | 'max_bytes' | 'duration' | 'dimensions' | 'transport' | 'unknown_limit';
  readonly message: string;
  /** `unknown_limit` 表示该维度未披露——提示而非错误。 */
  readonly severity: 'error' | 'warning';
}

export interface MediaValidationInput {
  readonly mime_type?: string;
  readonly bytes?: number;
  readonly duration_seconds?: number;
  readonly width?: number;
  readonly height?: number;
  readonly transport?: string;
}

export function validateCapabilityInput(
  capabilityInput: CapabilityInput,
  input: MediaValidationInput,
): MediaIssue[] {
  const issues: MediaIssue[] = [];
  const media = capabilityInput.media;
  if (!media) {
    issues.push({
      input_or_output: capabilityInput.name,
      code: 'unknown_limit',
      message: `输入 ${capabilityInput.name} 未披露媒体限制，按保守处理`,
      severity: 'warning',
    });
    return issues;
  }

  if (media.mime_types && input.mime_type) {
    if (!media.mime_types.includes(input.mime_type)) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'mime',
        message: `输入 ${capabilityInput.name} 的 MIME ${input.mime_type} 不在允许列表 ${media.mime_types.join(', ')} 内`,
        severity: 'error',
      });
    }
  } else if (!media.mime_types) {
    issues.push({
      input_or_output: capabilityInput.name,
      code: 'unknown_limit',
      message: `输入 ${capabilityInput.name} 未披露允许的 MIME 类型`,
      severity: 'warning',
    });
  }

  if (media.max_bytes !== undefined && input.bytes !== undefined) {
    if (input.bytes > media.max_bytes) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'max_bytes',
        message: `输入 ${capabilityInput.name} 大小 ${input.bytes} 字节超过上限 ${media.max_bytes}`,
        severity: 'error',
      });
    }
  } else if (media.max_bytes === undefined) {
    issues.push({
      input_or_output: capabilityInput.name,
      code: 'unknown_limit',
      message: `输入 ${capabilityInput.name} 未披露大小上限`,
      severity: 'warning',
    });
  }

  if (media.duration_seconds && input.duration_seconds !== undefined) {
    const { min, max } = media.duration_seconds;
    if (min !== undefined && input.duration_seconds < min) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'duration',
        message: `输入 ${capabilityInput.name} 时长 ${input.duration_seconds}s 低于下限 ${min}s`,
        severity: 'error',
      });
    }
    if (max !== undefined && input.duration_seconds > max) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'duration',
        message: `输入 ${capabilityInput.name} 时长 ${input.duration_seconds}s 超过上限 ${max}s`,
        severity: 'error',
      });
    }
  }

  if (media.dimensions && input.width !== undefined && input.height !== undefined) {
    const { width, height } = media.dimensions;
    if (width?.max !== undefined && input.width > width.max) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'dimensions',
        message: `输入 ${capabilityInput.name} 宽度 ${input.width} 超过上限 ${width.max}`,
        severity: 'error',
      });
    }
    if (height?.max !== undefined && input.height > height.max) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'dimensions',
        message: `输入 ${capabilityInput.name} 高度 ${input.height} 超过上限 ${height.max}`,
        severity: 'error',
      });
    }
  }

  if (media.transports && input.transport) {
    if (!media.transports.includes(input.transport)) {
      issues.push({
        input_or_output: capabilityInput.name,
        code: 'transport',
        message: `输入 ${capabilityInput.name} 的传输方式 ${input.transport} 不支持，允许：${media.transports.join(', ')}`,
        severity: 'error',
      });
    }
  }

  return issues;
}

export function validateCapabilityOutput(
  output: CapabilityOutput,
  input: MediaValidationInput,
): MediaIssue[] {
  const issues: MediaIssue[] = [];
  const media = output.media;
  if (!media) return issues;

  if (media.mime_types && input.mime_type && !media.mime_types.includes(input.mime_type)) {
    issues.push({
      input_or_output: output.kind,
      code: 'mime',
      message: `输出的 MIME ${input.mime_type} 不在允许列表 ${media.mime_types.join(', ')} 内`,
      severity: 'error',
    });
  }

  if (media.duration_seconds && input.duration_seconds !== undefined) {
    const { min, max } = media.duration_seconds;
    if (min !== undefined && input.duration_seconds < min) {
      issues.push({
        input_or_output: output.kind,
        code: 'duration',
        message: `输出时长 ${input.duration_seconds}s 低于下限 ${min}s`,
        severity: 'error',
      });
    }
    if (max !== undefined && input.duration_seconds > max) {
      issues.push({
        input_or_output: output.kind,
        code: 'duration',
        message: `输出时长 ${input.duration_seconds}s 超过上限 ${max}s`,
        severity: 'error',
      });
    }
  }

  return issues;
}

/**
 * 格式化媒体限制的展示文本。
 * 未披露显示「未披露」，**不显示**「无限制」。
 */
export function describeMediaLimit(media: MediaSpec | undefined): string[] {
  if (!media) return ['未披露'];
  const parts: string[] = [];

  parts.push(
    media.mime_types
      ? `格式 ${media.mime_types.join(' / ')}`
      : '格式未披露',
  );
  parts.push(
    media.max_bytes !== undefined
      ? `≤ ${formatBytes(media.max_bytes)}`
      : '大小上限未披露',
  );
  if (media.duration_seconds) {
    const { min, max } = media.duration_seconds;
    const lo = min !== undefined ? `${min}s` : '不限';
    const hi = max !== undefined ? `${max}s` : '不限';
    parts.push(`时长 ${lo} ~ ${hi}`);
  }
  if (media.transports) {
    parts.push(`传输 ${media.transports.join(' / ')}`);
  }
  return parts;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}
