/**
 * 字段级合并引擎。
 *
 * 合并优先级（见 docs/data/data-policy.md §5）：
 * 1. 字段归属 / 授权 Scope 先行判定——不在授权范围内的官方 Feed 字段不参与自动合并。
 * 2. 明确的人工审核锁定值（有证据且未过期）——与后续官方声明冲突时进入 review，
 *    而非永久压制。
 * 3. 已授权官方 Feed/Push 的**本方声明字段**——记录声明身份，但不自动视为已实测。
 * 4. 官方 API 实测或官方文档支持的值（同一市场与服务线）——与 Feed 交叉校验。
 * 5. 社区补充候选——可填补官方未知字段，但不能覆盖官方依据。
 * 6. 第三方标准元数据（含旧 upstream 来源）——最后补值，不能覆盖社区或官方依据。
 * 未核实的候选必须保留其来源与验证状态，来源优先级不代表事实已核实。
 *
 * 不是无条件的「人工永远最高」：冲突时生成冲突并触发复核，
 * 优先标 `unknown` 或保留上一个可靠值（并标 stale），不能靠 last-write-wins 覆盖。
 */

import type { FieldOrigin } from '@providerlist/schema/types';

export type MergeLayer =
  | 'manual_locked'
  | 'official_declared'
  | 'official_verified'
  | 'third_party'
  | 'upstream'
  | 'community_candidate';

export interface MergeCandidate {
  readonly layer: MergeLayer;
  readonly value: unknown;
  readonly origin?: FieldOrigin;
  readonly evidence_refs?: readonly string[];
  /** 人工锁定值的复核截止时间；过期后不再压制上游。 */
  readonly expires_at?: string;
  /** 该候选是否已通过验证。 */
  readonly verified?: boolean;
}

export interface MergeOutcome {
  readonly value: unknown;
  readonly winner_layer?: MergeLayer;
  readonly origin?: FieldOrigin;
  readonly evidence_refs: readonly string[];
  /** 是否存在需要人工复核的冲突。 */
  readonly conflict: boolean;
  readonly conflict_detail?: string;
  /** 是否因冲突而回退到上一个可靠值。 */
  readonly stale?: boolean;
}

const LAYER_PRIORITY: Readonly<Record<MergeLayer, number>> = {
  official_verified: 110,
  official_declared: 100,
  // 临时人工锁定是冲突复核状态，不是来源等级；不得高于官方证据。
  manual_locked: 95,
  community_candidate: 50,
  third_party: 20,
  upstream: 20,
};

/**
 * 合并同一字段的多个候选。
 *
 * @param previousValue 上一次已发布的可靠值，用于冲突时回退。
 */
export function mergeField(
  candidates: readonly MergeCandidate[],
  previousValue?: unknown,
): MergeOutcome {
  const effective = candidates.filter((c) => !isExpired(c.expires_at));
  if (effective.length === 0) {
    return {
      value: previousValue ?? null,
      evidence_refs: [],
      conflict: false,
      ...(previousValue !== undefined ? { stale: true } : {}),
    };
  }

  const sorted = [...effective].sort(
    (a, b) => LAYER_PRIORITY[b.layer] - LAYER_PRIORITY[a.layer],
  );
  const top = sorted[0];
  if (!top) {
    return { value: previousValue ?? null, evidence_refs: [], conflict: false };
  }

  // 检测与次高层级的值冲突
  const conflicting = sorted.filter((c) => !isSameValue(c.value, top.value));
  const isOfficialLayer = (c: MergeCandidate) => LAYER_PRIORITY[c.layer] >= LAYER_PRIORITY.official_declared;
  // 两种高风险冲突，都不能靠 last-write-wins 覆盖：
  // 1. 官方层之间分歧——两个官方来源互相矛盾，谁都不能自动胜出；
  // 2. 人工锁定值与官方层分歧——人工锁定是复核用锁（见 docs/data/data-policy.md §5），
  //    与官方声明冲突时要冻结并进 review，保留上一个可靠值等人工裁决。
  const manualVsOfficial =
    (top.layer === 'manual_locked' && conflicting.some(isOfficialLayer)) ||
    (conflicting.some((c) => c.layer === 'manual_locked') && isOfficialLayer(top));
  const officialVsOfficial = isOfficialLayer(top) && conflicting.some(isOfficialLayer);
  const highRiskConflict = conflicting.length > 0 && (manualVsOfficial || officialVsOfficial);

  const conflictDetail =
    conflicting.length > 0
      ? `字段存在 ${conflicting.length + 1} 个不同候选值（最高优先级 ${top.layer}）`
      : undefined;

  if (highRiskConflict) {
    // 高风险冲突：不静默取其一。保留上一个可靠值并标 stale，交人工复核。
    return {
      value: previousValue ?? null,
      winner_layer: top.layer,
      origin: top.origin,
      evidence_refs: top.evidence_refs ?? [],
      conflict: true,
      conflict_detail: conflictDetail,
      stale: previousValue !== undefined,
    };
  }

  return {
    value: top.value,
    winner_layer: top.layer,
    origin: top.origin,
    evidence_refs: top.evidence_refs ?? [],
    conflict: conflicting.length > 0,
    conflict_detail: conflictDetail,
  };
}

function isExpired(expiresAt: string | undefined): boolean {
  if (!expiresAt) return false;
  const time = Date.parse(expiresAt);
  return Number.isFinite(time) && time < Date.now();
}

function isSameValue(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (a === null || b === null || a === undefined || b === undefined) return false;
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return false;
}

/**
 * 判断官方 Feed 提交是否越权。
 * 授权 Scope 决定该提交能改哪些 Service / Offering / 字段。
 */
export interface Scope {
  readonly service_ids?: readonly string[];
  readonly offering_ids?: readonly string[];
  readonly capability_kinds?: readonly string[];
  /** 允许提交的字段路径（JSON Pointer 片段）。 */
  readonly field_paths?: readonly string[];
}

export interface ScopeCheck {
  readonly allowed: boolean;
  readonly reason?: string;
}

export function checkScope(
  scope: Scope | undefined,
  target: {
    readonly service_id?: string;
    readonly offering_id?: string;
    readonly capability_kind?: string;
    readonly field_path?: string;
  },
): ScopeCheck {
  if (!scope) {
    return { allowed: false, reason: '缺少授权 Scope 记录' };
  }

  if (target.service_id && scope.service_ids && !scope.service_ids.includes(target.service_id)) {
    return { allowed: false, reason: `Service ${target.service_id} 不在授权范围内` };
  }
  if (target.offering_id && scope.offering_ids && !scope.offering_ids.includes(target.offering_id)) {
    return { allowed: false, reason: `Offering ${target.offering_id} 不在授权范围内` };
  }
  if (target.capability_kind && scope.capability_kinds && !scope.capability_kinds.includes(target.capability_kind)) {
    return { allowed: false, reason: `Capability kind ${target.capability_kind} 不在授权范围内` };
  }
  if (target.field_path && scope.field_paths) {
    const allowed = scope.field_paths.some(
      (p) => target.field_path === p || target.field_path?.startsWith(`${p}/`),
    );
    if (!allowed) {
      return { allowed: false, reason: `字段路径 ${target.field_path} 不在授权范围内` };
    }
  }

  return { allowed: true };
}

/**
 * 对数据变更进行风险分类。
 */
export type RiskLevel = 'P0' | 'P1' | 'P2' | 'P3';

export interface ChangeRiskInput {
  readonly kind: 'price' | 'url' | 'auth' | 'retirement' | 'status' | 'reasoning_mapping' | 'text' | 'timestamp';
  readonly previous?: unknown;
  readonly next?: unknown;
  readonly currency?: string;
  readonly currencyChanged?: boolean;
}

export function classifyChangeRisk(input: ChangeRiskInput): RiskLevel {
  // P0：禁止自动发布
  if (input.kind === 'price' && input.previous !== undefined && input.next === '0' && input.previous !== '0') {
    return 'P0';
  }
  if (input.kind === 'price' && input.currencyChanged) {
    return 'P0';
  }
  if (input.kind === 'retirement' && input.next === 'retired' && input.previous !== 'retired') {
    return 'P1';
  }

  // P1：必须审核
  switch (input.kind) {
    case 'price':
      return 'P1';
    case 'url':
    case 'auth':
    case 'status':
    case 'reasoning_mapping':
      return 'P1';
    default:
      break;
  }

  // P3：通常自动
  if (input.kind === 'text' || input.kind === 'timestamp') {
    return 'P3';
  }

  // P2：可条件自动
  return 'P2';
}
