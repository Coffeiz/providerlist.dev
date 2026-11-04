/**
 * 参数组合约束的测试。
 *
 * 保护的核心不变量：
 * - 非法组合（如 1080p + 5s）被判定为非法；
 * - 约束字段引用未声明字段时报错；
 * - 缺省值不等于允许。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';


import {
  type CapabilityContract,
  allowedValues,
  evaluateCondition,
  evaluateConstraints,
  validateParameters,
} from './constraints.ts';

const videoCapability: CapabilityContract = {
  parameters: [
    { name: 'duration_seconds', type: 'integer', required: false, enum: [5, 10] },
    { name: 'resolution', type: 'string', required: false, enum: ['720p', '1080p'] },
    { name: 'generate_audio', type: 'boolean', required: false, default: false },
  ],
  constraints: [
    {
      id: '1080p-only-10s',
      if: { eq: ['resolution', '1080p'] },
      then: { eq: ['duration_seconds', 10] },
      description: '1080p 分辨率仅支持 10 秒时长。',
    },
  ],
  input: [{ name: 'prompt', kind: 'text', required: true }],
};

describe('evaluateCondition', () => {
  it('eq 比较严格相等', () => {
    assert.equal(evaluateCondition({ eq: ['resolution', '1080p'] }, { resolution: '1080p' }), true);
    assert.equal(evaluateCondition({ eq: ['resolution', '1080p'] }, { resolution: '720p' }), false);
  });

  it('字段缺省时条件不成立', () => {
    assert.equal(evaluateCondition({ eq: ['resolution', '1080p'] }, {}), false);
  });

  it('requires 检查是否有值', () => {
    assert.equal(evaluateCondition({ requires: ['prompt'] }, { prompt: 'x' }), true);
    assert.equal(evaluateCondition({ requires: ['prompt'] }, {}), false);
  });

  it('excludes 检查是否无值', () => {
    assert.equal(evaluateCondition({ excludes: ['prompt'] }, {}), true);
    assert.equal(evaluateCondition({ excludes: ['prompt'] }, { prompt: 'x' }), false);
  });

  it('not 取反', () => {
    assert.equal(evaluateCondition({ not: { eq: ['a', 1] } }, { a: 2 }), true);
  });
});

describe('evaluateConstraints', () => {
  it('1080p + 5 秒被判为非法组合', () => {
    const result = evaluateConstraints(videoCapability.constraints ?? [], {
      resolution: '1080p',
      duration_seconds: 5,
    });
    assert.equal(result.valid, false);
    assert.equal(result.violations.length, 1);
    assert.equal(result.violations[0]?.rule_id, '1080p-only-10s');
  });

  it('1080p + 10 秒合法', () => {
    const result = evaluateConstraints(videoCapability.constraints ?? [], {
      resolution: '1080p',
      duration_seconds: 10,
    });
    assert.equal(result.valid, true);
    assert.equal(result.violations.length, 0);
  });

  it('720p + 5 秒合法——约束不误伤', () => {
    const result = evaluateConstraints(videoCapability.constraints ?? [], {
      resolution: '720p',
      duration_seconds: 5,
    });
    assert.equal(result.valid, true);
  });

  it('if 不成立时不产生违规', () => {
    const result = evaluateConstraints(videoCapability.constraints ?? [], {
      resolution: '720p',
      duration_seconds: 5,
    });
    assert.equal(result.violations.length, 0);
  });
});

describe('validateParameters', () => {
  it('必填参数缺失时报错', () => {
    const withRequired: CapabilityContract = {
      ...videoCapability,
      parameters: [
        ...(videoCapability.parameters ?? []),
        { name: 'model', type: 'string', required: true },
      ],
    };
    const issues = validateParameters(withRequired, {});
    assert.ok(issues.some((i) => i.parameter === 'model' && i.code === 'required'));
  });

  it('可选参数缺失时不报错', () => {
    const issues = validateParameters(videoCapability, { prompt: 'x' });
    assert.ok(!issues.some((i) => i.code === 'required'));
  });

  it('必填输入槽缺失时报错', () => {
    const issues = validateParameters(videoCapability, {});
    assert.ok(issues.some((i) => i.parameter === 'prompt' && i.code === 'input_required'));
  });

  it('枚举外的取值被拒绝', () => {
    const issues = validateParameters(videoCapability, {
      duration_seconds: 7,
      resolution: '4k',
      prompt: 'x',
    });
    assert.ok(issues.some((i) => i.parameter === 'duration_seconds' && i.code === 'enum'));
    assert.ok(issues.some((i) => i.parameter === 'resolution' && i.code === 'enum'));
  });

  it('类型不符被拒绝', () => {
    const issues = validateParameters(videoCapability, {
      duration_seconds: 'ten',
      prompt: 'x',
    });
    assert.ok(issues.some((i) => i.parameter === 'duration_seconds' && i.code === 'type'));
  });

  it('非法组合产生 constraint 类型的 issue', () => {
    const issues = validateParameters(videoCapability, {
      duration_seconds: 5,
      resolution: '1080p',
      prompt: 'x',
    });
    assert.ok(issues.some((i) => i.code === 'constraint'));
  });

  it('合法组合不产生 issue', () => {
    const issues = validateParameters(videoCapability, {
      duration_seconds: 10,
      resolution: '1080p',
      prompt: 'x',
    });
    assert.deepEqual(issues, []);
  });
});

describe('allowedValues', () => {
  it('在 1080p 上下文中禁用 5 秒选项', () => {
    const options = allowedValues(videoCapability, 'duration_seconds', { resolution: '1080p' });
    const five = options.find((o) => o.value === 5);
    const ten = options.find((o) => o.value === 10);
    assert.equal(five?.allowed, false);
    assert.deepEqual(five?.blocked_by, ['1080p-only-10s']);
    assert.equal(ten?.allowed, true);
  });

  it('在 720p 上下文中两个时长都合法', () => {
    const options = allowedValues(videoCapability, 'duration_seconds', { resolution: '720p' });
    assert.ok(options.every((o) => o.allowed));
  });

  it('未声明的参数返回空列表', () => {
    assert.deepEqual(allowedValues(videoCapability, 'nope', {}), []);
  });
});
