/**
 * 条件价格规则匹配。
 *
 * 关键隔离（见 docs/data/media-operations.md）：
 * - `PriceCondition` 与 `ConstraintRule` 的 `ConditionExpression` **不共用语义**。
 *   两者可以共享表达式解析器，但执行结果与允许字段域不同——
 *   价格变更不得隐式改变请求合法性，反之亦然。
 * - 多个互斥价格组同时命中时视为冲突；数组顺序只用于展示，不用于选价。
 */

import type { PriceCondition, PricingGroup } from '@providerlist/schema/types';

export type UsageContext = Readonly<Record<string, number | string | boolean | null>>;

export interface PriceMatchResult {
  /** 命中的基础价规则。冲突时为 null。 */
  readonly matched: PricingGroup | null;
  /** 按源数据中的顺序保存全部命中规则。 */
  readonly hits: readonly PricingGroup[];
  /** 冲突说明；非空表示必须人工审核。 */
  readonly conflicts: readonly string[];
  /** 计算前提不齐的字段列表（区别于「价格完全未知」）。 */
  readonly missing_context: readonly string[];
}

export type PriceResolution =
  | { readonly kind: 'resolved'; readonly rule: PricingGroup }
  | { readonly kind: 'ambiguous'; readonly conflicts: readonly string[] }
  | { readonly kind: 'requires_usage_context'; readonly missing: readonly string[] }
  | { readonly kind: 'no_match' };

/** Return the rates stored directly on a pricing group. */
export function toPricingRates(group: PricingGroup): PricingGroup['rates'][number][] {
  return [...group.rates];
}

/** 评估一个价格条件。字段缺省时返回 false（不视为满足）。 */
export function evaluatePriceCondition(
  condition: PriceCondition | undefined,
  context: UsageContext,
): boolean {
  if (!condition) return true;
  if ('all' in condition) {
    return condition.all.every((c) => evaluatePriceCondition(c, context));
  }
  if ('any' in condition) {
    return condition.any.some((c) => evaluatePriceCondition(c, context));
  }
  if ('not' in condition) {
    return !evaluatePriceCondition(condition.not, context);
  }
  const raw = context[condition.field];
  if (raw === undefined || raw === null) return false;
  switch (condition.operator ?? 'eq') {
    case 'eq':
      return raw === condition.value;
    case 'lt':
      return typeof raw === 'number' && raw < Number(condition.value);
    case 'lte':
      return typeof raw === 'number' && raw <= Number(condition.value);
    case 'gt':
      return typeof raw === 'number' && raw > Number(condition.value);
    case 'gte':
      return typeof raw === 'number' && raw >= Number(condition.value);
    case 'between': {
      if (!Array.isArray(condition.value)) return false;
      const [lo, hi] = condition.value;
      if (typeof raw !== 'number') return false;
      return raw >= Number(lo) && raw <= Number(hi);
    }
    default:
      return false;
  }
}

/** 收集条件引用到的全部字段名。 */
export function collectPriceConditionFields(condition: PriceCondition | undefined): string[] {
  if (!condition) return [];
  if ('all' in condition) {
    return condition.all.flatMap(collectPriceConditionFields);
  }
  if ('any' in condition) {
    return condition.any.flatMap(collectPriceConditionFields);
  }
  if ('not' in condition) {
    return collectPriceConditionFields(condition.not);
  }
  return [condition.field];
}

function evaluatePriceConditions(conditions: readonly PriceCondition[] | undefined, context: UsageContext): boolean {
  return !conditions || conditions.every((condition) => evaluatePriceCondition(condition, context));
}

function collectPriceConditionsFields(conditions: readonly PriceCondition[] | undefined): string[] {
  return conditions?.flatMap(collectPriceConditionFields) ?? [];
}

function matchDeploymentContext(
  rule: PricingGroup,
  context: UsageContext,
  missing: Set<string>,
): boolean {
  if (rule.deployment) {
    const deployment = context.deployment;
    if (deployment === undefined || deployment === null) {
      missing.add('deployment');
      return false;
    }
    if (deployment !== rule.deployment) return false;
  }
  if (rule.region) {
    const region = context['deployment.region'];
    if (region === undefined || region === null) {
      missing.add('deployment.region');
      return false;
    }
    if (region !== rule.region) return false;
  }
  return true;
}

/**
 * 从定价组中选出生效的基础价。
 *
 * 规则：
 * - 唯一命中时返回价格组；多个价格组同时命中 → 冲突。
 * - 条件字段在上下文中缺失 → `requires_usage_context`，列出缺失字段。
 */
export function resolvePrice(
  rules: readonly PricingGroup[],
  context: UsageContext,
): PriceResolution {
  if (rules.length === 0) return { kind: 'no_match' };

  const missing = new Set<string>();
  const hits: PricingGroup[] = [];

  for (const rule of rules) {
    if (!matchDeploymentContext(rule, context, missing)) continue;
    const fields = collectPriceConditionsFields(rule.conditions);
    const absent = fields.filter((f) => context[f] === undefined || context[f] === null);
    if (absent.length > 0) {
      // 只有当该规则本身不含「无条件兜底」时才计为上下文缺失。
      absent.forEach((f) => missing.add(f));
      continue;
    }
    if (evaluatePriceConditions(rule.conditions, context)) {
      hits.push(rule);
    }
  }

  if (hits.length === 0) {
    if (missing.size > 0) {
      return { kind: 'requires_usage_context', missing: [...missing] };
    }
    return { kind: 'no_match' };
  }

  if (hits.length === 1) {
    const only = hits[0];
    if (only) {
      return { kind: 'resolved', rule: only };
    }
    return { kind: 'no_match' };
  }

  // 多条命中时保持冲突；数组顺序只用于展示，不用于猜测适用价格。
  if (hits.length > 1) {
    return {
      kind: 'ambiguous',
      conflicts: hits.map((_, index) => `多个定价组同时命中：${index + 1}`),
    };
  }
  const only = hits[0];
  if (only) {
    return { kind: 'resolved', rule: only };
  }
  return { kind: 'no_match' };
}

/**
 * 检测同币种内的价格冲突：两个价格组的适用条件可能重叠。
 * 用于发布门禁——重叠的阶梯必须先合并成互斥区间。
 */
export function detectPricingOverlap(
  rules: readonly PricingGroup[],
): { readonly a: string; readonly b: string }[] {
  const overlaps: { a: string; b: string }[] = [];
  for (let i = 0; i < rules.length; i += 1) {
    for (let j = i + 1; j < rules.length; j += 1) {
      const a = rules[i];
      const b = rules[j];
      if (!a || !b) continue;
      if ((!a.deployment || !b.deployment || a.deployment === b.deployment)
        && (!a.region || !b.region || a.region === b.region)
        && conditionsOverlap(a.conditions, b.conditions)) {
        overlaps.push({ a: String(i + 1), b: String(j + 1) });
      }
    }
  }
  return overlaps;
}

/** 保守判定两个条件是否可能同时成立。宁可误报重叠，不可漏报。 */
function conditionsOverlap(
  a: readonly PriceCondition[] | undefined,
  b: readonly PriceCondition[] | undefined,
): boolean {
  if (!a?.length || !b?.length) return true;
  for (const left of a) for (const right of b) {
    if (!conditionPairMayOverlap(left, right)) return false;
  }
  return true;
}

function conditionPairMayOverlap(a: PriceCondition, b: PriceCondition): boolean {
  if ('all' in a) {
    return a.all.every((c) => conditionPairMayOverlap(c, b));
  }
  if ('all' in b) {
    return b.all.every((c) => conditionPairMayOverlap(a, c));
  }
  if ('any' in a) {
    return a.any.some((c) => conditionPairMayOverlap(c, b));
  }
  if ('any' in b) {
    return b.any.some((c) => conditionPairMayOverlap(a, c));
  }
  if ('not' in a || 'not' in b) {
    // 含有否定时无法静态证明互斥，按可能重叠处理。
    return true;
  }

  const fieldsA = new Set(collectPriceConditionFields(a));
  const fieldsB = new Set(collectPriceConditionFields(b));
  const shared = [...fieldsA].filter((f) => fieldsB.has(f));
  if (shared.length === 0) {
    // 约束不同字段：无法证明互斥，保守认为重叠。
    return true;
  }

  // 同一字段上的不等式边界若完全分离，则互斥。
  const boundsA = numericBounds(a);
  const boundsB = numericBounds(b);
  for (const field of shared) {
    const ra = boundsA.get(field);
    const rb = boundsB.get(field);
    if (!ra || !rb) continue;
    if (ra.max !== undefined && rb.min !== undefined && ra.max < rb.min) return false;
    if (rb.max !== undefined && ra.min !== undefined && rb.max < ra.min) return false;
  }
  return true;
}

interface Bounds {
  min?: number;
  max?: number;
}

/**
 * 提取条件在数值轴上的区间。
 *
 * 注意：`PriceCondition` 的叶子节点是**对象形态** `{ field, operator?, value }`，
 * 不是数组形态 `[field, value]`——后者是 `ConstraintRule` 的形态。
 */
function numericBounds(condition: PriceCondition): Map<string, Bounds> {
  const result = new Map<string, Bounds>();
  const apply = (field: string, min?: number, max?: number) => {
    const existing = result.get(field) ?? {};
    result.set(field, {
      min: min !== undefined ? Math.min(existing.min ?? min, min) : existing.min,
      max: max !== undefined ? Math.max(existing.max ?? max, max) : existing.max,
    });
  };

  if (!('field' in condition)) return result;
  if (typeof condition.field !== 'string') return result;

  const field = condition.field;
  const op = condition.operator ?? 'eq';
  const value = condition.value;

  switch (op) {
    case 'lt':
      apply(field, undefined, Number(value) - 1);
      break;
    case 'lte':
      apply(field, undefined, Number(value));
      break;
    case 'gt':
      apply(field, Number(value) + 1, undefined);
      break;
    case 'gte':
      apply(field, Number(value), undefined);
      break;
    case 'between':
      if (Array.isArray(value)) {
        apply(field, Number(value[0]), Number(value[1]));
      }
      break;
    case 'eq':
      if (typeof value === 'number') {
        apply(field, value, value);
      }
      break;
    default:
      break;
  }
  return result;
}
