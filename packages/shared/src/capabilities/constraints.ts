/**
 * 参数组合约束判定。
 *
 * 这是设计文档 §4.17 / §4.19 的落地：多模态参数不是独立枚举的笛卡尔积。
 * 例如「1080p 只能选 10 秒」，那么 `1080p + 5s` 是**非法组合**，
 * 必须同时被 GUI 与只读 SDK 阻止。
 *
 * 规则 DSL 是有限 AST，**不接受**字符串脚本、任意正则执行器或外部可执行表达式。
 */

import type {
  ConditionExpression,
  ConstraintRule,
  CapabilityInput,
  ParameterSpec,
} from '@providerlist/schema/types';

export type ParameterValues = Readonly<Record<string, unknown>>;

export interface CapabilityContract {
  readonly parameters?: readonly ParameterSpec[];
  readonly input?: readonly CapabilityInput[];
  readonly constraints?: readonly ConstraintRule[];
}

export interface ConstraintViolation {
  readonly rule_id: string;
  readonly message: string;
  /** 触发冲突的字段。 */
  readonly fields: readonly string[];
}

export interface ConstraintEvaluation {
  readonly valid: boolean;
  readonly violations: readonly ConstraintViolation[];
}

/** 评估条件 AST。引用字段缺省时返回 false（缺省不等于满足）。 */
export function evaluateCondition(
  condition: ConditionExpression,
  values: ParameterValues,
): boolean {
  if ('all' in condition) {
    return condition.all.every((c) => evaluateCondition(c, values));
  }
  if ('any' in condition) {
    return condition.any.some((c) => evaluateCondition(c, values));
  }
  if ('not' in condition) {
    return !evaluateCondition(condition.not, values);
  }
  if ('eq' in condition) {
    const [field, expected] = condition.eq;
    return values[field] === expected;
  }
  if ('in' in condition) {
    const [field, allowed] = condition.in;
    return allowed.includes(values[field]);
  }
  if ('lt' in condition) {
    const [field, bound] = condition.lt;
    return typeof values[field] === 'number' && values[field] < bound;
  }
  if ('lte' in condition) {
    const [field, bound] = condition.lte;
    return typeof values[field] === 'number' && values[field] <= bound;
  }
  if ('gt' in condition) {
    const [field, bound] = condition.gt;
    return typeof values[field] === 'number' && values[field] > bound;
  }
  if ('gte' in condition) {
    const [field, bound] = condition.gte;
    return typeof values[field] === 'number' && values[field] >= bound;
  }
  if ('requires' in condition) {
    const [field] = condition.requires;
    const value = values[field];
    return value !== undefined && value !== null;
  }
  if ('excludes' in condition) {
    const [field] = condition.excludes;
    const value = values[field];
    return value === undefined || value === null;
  }
  return false;
}

/** 评估一个 Capability 的全部约束。 */
export function evaluateConstraints(
  constraints: readonly ConstraintRule[],
  values: ParameterValues,
): ConstraintEvaluation {
  const violations: ConstraintViolation[] = [];

  for (const rule of constraints) {
    if (!evaluateCondition(rule.if, values)) continue;
    if (evaluateCondition(rule.then, values)) continue;
    violations.push({
      rule_id: rule.id,
      message: rule.description ?? `参数组合违反约束 ${rule.id}`,
      fields: constraintFields(rule),
    });
  }

  return { valid: violations.length === 0, violations };
}

function constraintFields(rule: ConstraintRule): string[] {
  return [...collectFields(rule.if), ...collectFields(rule.then)];
}

export function collectFields(condition: ConditionExpression): string[] {
  if ('all' in condition) return condition.all.flatMap(collectFields);
  if ('any' in condition) return condition.any.flatMap(collectFields);
  if ('not' in condition) return collectFields(condition.not);
  if ('eq' in condition) return [condition.eq[0]];
  if ('in' in condition) return [condition.in[0]];
  if ('lt' in condition) return [condition.lt[0]];
  if ('lte' in condition) return [condition.lte[0]];
  if ('gt' in condition) return [condition.gt[0]];
  if ('gte' in condition) return [condition.gte[0]];
  if ('requires' in condition) return [condition.requires[0]];
  if ('excludes' in condition) return [condition.excludes[0]];
  return [];
}

// ---------------------------------------------------------------------------
// 参数校验
// ---------------------------------------------------------------------------

export interface ParameterIssue {
  readonly parameter: string;
  readonly code:
    | 'required'
    | 'type'
    | 'enum'
    | 'range'
    | 'step'
    | 'constraint'
    | 'input_required';
  readonly message: string;
}

/**
 * 校验一组参数值是否符合 Capability 声明。
 * 未知不等于允许：缺省值不填时，required 参数视为缺失。
 */
export function validateParameters(
  operation: CapabilityContract,
  values: ParameterValues,
): ParameterIssue[] {
  const issues: ParameterIssue[] = [];
  const parameters = operation.parameters ?? [];
  const inputs = operation.input ?? [];

  for (const parameter of parameters) {
    const value = values[parameter.name];
    const missing = value === undefined || value === null;

    if (parameter.required && missing) {
      issues.push({
        parameter: parameter.name,
        code: 'required',
        message: `缺少必填参数 ${parameter.name}`,
      });
      continue;
    }
    if (missing) continue;

    if (!matchesType(value, parameter)) {
      issues.push({
        parameter: parameter.name,
        code: 'type',
        message: `参数 ${parameter.name} 类型应为 ${parameter.type}`,
      });
      continue;
    }
    if (parameter.enum && !parameter.enum.includes(value as never)) {
      issues.push({
        parameter: parameter.name,
        code: 'enum',
        message: `参数 ${parameter.name} 不在允许取值 ${JSON.stringify(parameter.enum)} 内`,
      });
      continue;
    }
    if (typeof value === 'number') {
      if (parameter.min !== undefined && value < parameter.min) {
        issues.push({
          parameter: parameter.name,
          code: 'range',
          message: `参数 ${parameter.name} 小于最小值 ${parameter.min}`,
        });
      }
      if (parameter.max !== undefined && value > parameter.max) {
        issues.push({
          parameter: parameter.name,
          code: 'range',
          message: `参数 ${parameter.name} 大于最大值 ${parameter.max}`,
        });
      }
      if (parameter.step !== undefined && parameter.step > 0) {
        const offset = value - (parameter.min ?? 0);
        if (Math.abs(offset % parameter.step) > 1e-9) {
          issues.push({
            parameter: parameter.name,
            code: 'step',
            message: `参数 ${parameter.name} 不是 ${parameter.step} 的整数倍`,
          });
        }
      }
    }
  }

  for (const input of inputs) {
    if (!input.required) continue;
    const value = values[input.name];
    if (value === undefined || value === null) {
      issues.push({
        parameter: input.name,
        code: 'input_required',
        message: `缺少必填输入 ${input.name}`,
      });
    }
  }

  const evaluation = evaluateConstraints(operation.constraints ?? [], values);
  for (const violation of evaluation.violations) {
    issues.push({
      parameter: violation.fields.join(', '),
      code: 'constraint',
      message: violation.message,
    });
  }

  return issues;
}

function matchesType(value: unknown, parameter: ParameterSpec): boolean {
  switch (parameter.type) {
    case 'string':
      return typeof value === 'string';
    case 'number':
      return typeof value === 'number' && Number.isFinite(value);
    case 'integer':
      return typeof value === 'number' && Number.isInteger(value);
    case 'boolean':
      return typeof value === 'boolean';
    case 'object':
      return typeof value === 'object' && value !== null && !Array.isArray(value);
    case 'array':
      return Array.isArray(value);
    default:
      return true;
  }
}

// ---------------------------------------------------------------------------
// 合法组合枚举（GUI 用）
// ---------------------------------------------------------------------------

export interface CombinationOption {
  readonly parameter: string;
  readonly value: string | number | boolean;
  /** 与当前其他参数组合是否合法。 */
  readonly allowed: boolean;
  /** 被哪些约束阻止。 */
  readonly blocked_by?: readonly string[];
}

/**
 * 为单个参数计算在当前上下文下的可选值。
 * 用于 GUI 动态禁用非法组合（例如选了 1080p 后 5 秒变灰）。
 */
export function allowedValues(
  operation: CapabilityContract,
  parameterName: string,
  context: ParameterValues,
): CombinationOption[] {
  const parameter = (operation.parameters ?? []).find((p) => p.name === parameterName);
  if (!parameter) return [];

  const candidates: (string | number | boolean)[] = parameter.enum
    ? [...parameter.enum]
    : buildRangeCandidates(parameter);

  return candidates.map((value) => {
    const trial = { ...context, [parameterName]: value };
    const evaluation = evaluateConstraints(operation.constraints ?? [], trial);
    const blocking = evaluation.violations.filter((v) =>
      v.fields.includes(parameterName),
    );
    return {
      parameter: parameterName,
      value,
      allowed: evaluation.valid,
      ...(blocking.length > 0
        ? { blocked_by: blocking.map((v) => v.rule_id) }
        : {}),
    };
  });
}

function buildRangeCandidates(parameter: ParameterSpec): (string | number | boolean)[] {
  const values: number[] = [];
  if (parameter.min !== undefined && parameter.max !== undefined) {
    const step = parameter.step && parameter.step > 0 ? parameter.step : 1;
    for (let v = parameter.min; v <= parameter.max; v += step) values.push(v);
    if (values.length === 0) values.push(parameter.min);
  }
  return values;
}

/** 汇总一个 Capability 的全部可选参数组合（用于展示「支持范围」）。 */
export function enumerateCombinations(
  operation: CapabilityContract,
): Record<string, CombinationOption[]> {
  const result: Record<string, CombinationOption[]> = {};
  for (const parameter of operation.parameters ?? []) {
    result[parameter.name] = allowedValues(operation, parameter.name, {});
  }
  return result;
}

/** Return the declared inputs for a Capability. */
export function describeInputs(operation: CapabilityContract): CapabilityInput[] {
  return [...(operation.input ?? [])];
}
