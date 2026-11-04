/**
 * 十进制金额运算的精度边界测试。
 *
 * 这些用例保护的是「在钱的计算上不出错」——
 * 浮点误差在阶梯价判断上会直接算错钱。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  addDecimal,
  compareDecimal,
  divDecimal,
  isZeroDecimal,
  mulDecimal,
  normalizeDecimal,
  percentChange,
  roundDecimal,
  subDecimal,
} from './decimal.ts';

describe('normalizeDecimal', () => {
  it('去掉多余的小数尾零但保留数值', () => {
    assert.equal(normalizeDecimal('3.00'), '3');
    assert.equal(normalizeDecimal('3.10'), '3.1');
    assert.equal(normalizeDecimal('0.500'), '0.5');
  });

  it('保留整数部分的前导零语义', () => {
    assert.equal(normalizeDecimal('007'), '7');
    assert.equal(normalizeDecimal('0.5'), '0.5');
  });

  it('负零归一为正零', () => {
    assert.equal(normalizeDecimal('-0.00'), '0');
  });

  it('拒绝非十进制字符串', () => {
    assert.throws(() => normalizeDecimal('abc'));
    assert.throws(() => normalizeDecimal('1.2.3'));
    assert.throws(() => normalizeDecimal(''));
  });
});

describe('addDecimal', () => {
  it('不产生浮点误差', () => {
    // 0.1 + 0.2 在 JS 浮点下是 0.30000000000000004
    assert.equal(addDecimal('0.1', '0.2'), '0.3');
  });

  it('跨不同小数位对齐', () => {
    assert.equal(addDecimal('1.5', '2.25'), '3.75');
    assert.equal(addDecimal('1', '0.005'), '1.005');
  });

  it('处理负数', () => {
    assert.equal(addDecimal('1.5', '-0.5'), '1');
    assert.equal(addDecimal('-1.5', '-0.5'), '-2');
  });

  it('零值不改变结果', () => {
    assert.equal(addDecimal('3.00', '0'), '3');
  });
});

describe('subDecimal', () => {
  it('精确相减', () => {
    assert.equal(subDecimal('0.3', '0.1'), '0.2');
    assert.equal(subDecimal('3.00', '1.50'), '1.5');
  });

  it('结果为负时保留符号', () => {
    assert.equal(subDecimal('1.00', '3.00'), '-2');
  });
});

describe('mulDecimal', () => {
  it('乘法精确', () => {
    assert.equal(mulDecimal('0.1', '0.2'), '0.02');
    assert.equal(mulDecimal('1.5', '2'), '3');
  });
});

describe('divDecimal', () => {
  it('除法按指定小数位四舍五入', () => {
    assert.equal(divDecimal('10', '2'), '5');
    assert.equal(divDecimal('1', '3', 8), '0.33333333');
    assert.equal(divDecimal('1', '8', 3), '0.125');
  });

  it('恰好一半时向上进位', () => {
    assert.equal(divDecimal('1', '8', 2), '0.13');
    assert.equal(divDecimal('-1', '8', 2), '-0.13');
    assert.equal(roundDecimal('1.005', 2), '1.01');
  });

  it('0.1 这类十进制小数不产生二进制误差', () => {
    assert.equal(divDecimal('0.1', '0.2', 4), '0.5');
    assert.equal(divDecimal('1', '3', 16), '0.3333333333333333');
    assert.equal(divDecimal('0.1', '3', 8), '0.03333333');
  });

  it('超出 Number 安全范围仍然精确', () => {
    assert.equal(
      divDecimal('123456789012345678901234567890', '7', 0),
      '17636684144620811271604938270',
    );
  });

  it('除以零直接报错，不返回 Infinity 或 NaN', () => {
    assert.throws(() => divDecimal('1', '0'));
  });
});

describe('roundDecimal', () => {
  it('只改小数位，不改量级', () => {
    assert.equal(roundDecimal('3.14159', 2), '3.14');
    assert.equal(roundDecimal('10', 2), '10');
    assert.equal(roundDecimal('9.999', 2), '10');
  });
});

describe('compareDecimal', () => {
  it('数值相等的不同写法判定为相等', () => {
    assert.equal(compareDecimal('3.00', '3.0'), 0);
    assert.equal(compareDecimal('3', '3.000'), 0);
  });

  it('正确区分大小', () => {
    assert.equal(compareDecimal('2.99', '3.00'), -1);
    assert.equal(compareDecimal('3.01', '3.00'), 1);
  });

  it('阶梯价边界判断不因精度翻转', () => {
    // 32000 边界：浮点下某些写法可能与 31999.999 比较出错
    assert.equal(compareDecimal('32000', '32000'), 0);
    assert.equal(compareDecimal('31999.999', '32000'), -1);
    assert.equal(compareDecimal('32000.000001', '32000'), 1);
  });

  it('处理负数', () => {
    assert.equal(compareDecimal('-1', '0'), -1);
    assert.equal(compareDecimal('-2', '-1'), -1);
  });
});

describe('isZeroDecimal', () => {
  it('区分零与非零', () => {
    assert.equal(isZeroDecimal('0'), true);
    assert.equal(isZeroDecimal('0.00'), true);
    assert.equal(isZeroDecimal('0.01'), false);
  });
});

describe('percentChange', () => {
  it('计算相对变化率', () => {
    assert.equal(percentChange('100', '110'), 10);
    assert.equal(percentChange('100', '90'), -10);
  });

  it('从零起算返回无穷大', () => {
    assert.equal(percentChange('0', '10'), Number.POSITIVE_INFINITY);
    assert.equal(percentChange('0', '0'), 0);
  });
});
