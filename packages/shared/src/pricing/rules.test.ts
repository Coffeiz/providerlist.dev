/**
 * 条件价匹配与规则重叠检测的测试。
 *
 * 保护的核心不变量：
 * - 唯一命中才报价；
 * - 多条价格组同时命中时报告冲突，不依赖顺序挑价；
 * - 条件不足是「前提不齐」，**不是**「价格未知」；
 * - 条件价格不参与请求合法性判断。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import type { PricingGroup } from '@providerlist/schema/types';

import {
  collectPriceConditionFields,
  detectPricingOverlap,
  evaluatePriceCondition,
  resolvePrice,
  toPricingRates,
} from './rules.ts';

function rule(partial: Partial<PricingGroup> & { test_key: string }): PricingGroup & { test_key: string } {
  return {
    currency: 'USD',
    rates: [],
    ...partial,
  };
}

describe('evaluatePriceCondition', () => {
  it('空条件视为满足', () => {
    assert.equal(evaluatePriceCondition(undefined, {}), true);
  });

  it('all 需要全部满足', () => {
    const condition = {
      all: [
        { field: 'usage.input_tokens', operator: 'lt' as const, value: 32000 },
        { field: 'usage.output_tokens', operator: 'gte' as const, value: 200 },
      ],
    };
    assert.equal(evaluatePriceCondition(condition, { 'usage.input_tokens': 1000, 'usage.output_tokens': 500 }), true);
    assert.equal(evaluatePriceCondition(condition, { 'usage.input_tokens': 40000, 'usage.output_tokens': 500 }), false);
  });

  it('any 只需一个满足', () => {
    const condition = {
      any: [
        { field: 'usage.input_tokens', operator: 'lt' as const, value: 32000 },
        { field: 'usage.output_tokens', operator: 'gte' as const, value: 200 },
      ],
    };
    assert.equal(evaluatePriceCondition(condition, { 'usage.input_tokens': 40000, 'usage.output_tokens': 500 }), true);
  });

  it('字段缺省时返回 false——缺省不等于满足', () => {
    const condition = { field: 'usage.input_tokens', operator: 'lt' as const, value: 32000 };
    assert.equal(evaluatePriceCondition(condition, {}), false);
    assert.equal(evaluatePriceCondition(condition, { 'usage.input_tokens': null }), false);
  });

  it('between 包含边界', () => {
    const condition = { field: 'n', operator: 'between' as const, value: [1, 10] };
    assert.equal(evaluatePriceCondition(condition, { n: 1 }), true);
    assert.equal(evaluatePriceCondition(condition, { n: 10 }), true);
    assert.equal(evaluatePriceCondition(condition, { n: 11 }), false);
  });
});

describe('collectPriceConditionFields', () => {
  it('收集全部被引用字段', () => {
    const condition = {
      all: [
        { field: 'a', operator: 'lt' as const, value: 1 },
        { field: 'b', operator: 'gte' as const, value: 2 },
      ],
    };
    assert.deepEqual(collectPriceConditionFields(condition).sort(), ['a', 'b']);
  });
});

describe('resolvePrice', () => {
  it('无规则时返回 no_match', () => {
    assert.deepEqual(resolvePrice([], {}), { kind: 'no_match' });
  });

  it('唯一命中时返回该规则', () => {
    const rules = [rule({ test_key: 'default', conditions: [] })];
    const result = resolvePrice(rules, {});
    assert.equal(result.kind, 'resolved');
    if (result.kind === 'resolved') assert.strictEqual(result.rule, rules[0]);
  });

  it('条件字段缺失时返回 requires_usage_context，而不是 no_match', () => {
    const rules = [
      rule({
        test_key: 'short',
        conditions: [{ field: 'usage.input_tokens', operator: 'lt', value: 32000 }],
      }),
    ];
    const result = resolvePrice(rules, {});
    assert.equal(result.kind, 'requires_usage_context');
    if (result.kind === 'requires_usage_context') {
      assert.deepEqual(result.missing, ['usage.input_tokens']);
    }
  });

  it('多条规则命中时返回 ambiguous——不依赖顺序挑一条', () => {
    const rules = [
      rule({ test_key: 'a', conditions: [] }),
      rule({ test_key: 'b', conditions: [] }),
    ];
    const result = resolvePrice(rules, {});
    assert.equal(result.kind, 'ambiguous');
    if (result.kind === 'ambiguous') {
      assert.equal(result.conflicts.length, 2);
    }
  });

  it('互斥条件只命中对应价格组，不需要优先级', () => {
    const rules = [
      rule({ test_key: 'long', conditions: [{ field: 'usage.input_tokens', operator: 'gte', value: 32000 }] }),
      rule({
        test_key: 'short',
        conditions: [{ field: 'usage.input_tokens', operator: 'lt', value: 32000 }],
      }),
    ];
    const result = resolvePrice(rules, { 'usage.input_tokens': 1000 });
    assert.equal(result.kind, 'resolved');
    if (result.kind === 'resolved') assert.strictEqual(result.rule, rules[1]);
  });
});

describe('detectPricingOverlap', () => {
  it('检测出边界重叠的规则', () => {
    const rules = [
      rule({
        test_key: 'a',
        conditions: [{ field: 'n', operator: 'lt', value: 100 }],
      }),
      rule({
        test_key: 'b',
        conditions: [{ field: 'n', operator: 'gte', value: 50 }],
      }),
    ];
    const overlaps = detectPricingOverlap(rules);
    assert.equal(overlaps.length, 1);
    assert.deepEqual(overlaps[0], { a: '1', b: '2' });
  });

  it('边界分离的规则不重叠', () => {
    const rules = [
      rule({ test_key: 'a', conditions: [{ field: 'n', operator: 'lt', value: 50 }] }),
      rule({ test_key: 'b', conditions: [{ field: 'n', operator: 'gte', value: 100 }] }),
    ];
    assert.deepEqual(detectPricingOverlap(rules), []);
  });

  it('无法证明互斥时保守报重叠', () => {
    const rules = [
      rule({ test_key: 'a', conditions: [{ field: 'x', operator: 'lt', value: 10 }] }),
      rule({ test_key: 'b', conditions: [{ field: 'y', operator: 'lt', value: 10 }] }),
    ];
    assert.equal(detectPricingOverlap(rules).length, 1);
  });
});

describe('toPricingRates', () => {
  it('直接返回价格组中的费率', () => {
    const result = toPricingRates(rule({
      test_key: 'a',
      rates: [{ metric: 'generated_second', unit: 'per_generated_second', value: '0.80' }],
    }));
    assert.equal(result.length, 1);
    assert.equal(result[0]?.metric, 'generated_second');
  });
});
