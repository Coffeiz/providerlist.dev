/**
 * 参考汇率换算的测试。
 *
 * 这些用例保护的是**方向与可复算性**：
 * - 币对方向搞反时，数字仍然是「看起来合理」的价格——只有断言公式与
 *   生效汇率才能拦住它。
 * - 缺汇率时必须明确失败，不能悄悄按 1:1 处理——那会让跨币种比价
 *   变成「严禁拿 CNY 直接和 USD 比较数值」那条规则的静默违反。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { buildFxIndex, convertWithFx, fxFormula } from './fx.ts';
import type { FxReference } from './fx.ts';

/** ECB 参考汇率推导的 USD 基准快照。 */
const ECB_SNAPSHOT: FxReference = {
  id: 'fx-ecb-usd-reference',
  base: 'USD',
  quotes: [{ currency: 'CNY', rate_decimal: '6.67434181' }],
  as_of_date: '2026-10-22',
  retrieved_at: '2026-10-23T09:20:00Z',
  source: {
    publisher: 'European Central Bank',
    dataset: 'Euro foreign exchange reference rates',
    url: 'https://data-api.ecb.europa.eu/service/data/EXR/D.USD+CNY.EUR.SP00.A?format=csvdata',
    reference_refs: ['R6', 'R7', 'R8'],
  },
  derivation: {
    formula: 'CNY_per_USD = (EUR/CNY) / (EUR/USD)',
    pairs: ['EUR/CNY', 'EUR/USD'],
  },
};

describe('buildFxIndex', () => {
  it('基准币种隐含为 1', () => {
    const index = buildFxIndex(ECB_SNAPSHOT);
    assert.equal(index.rates.get('USD'), '1');
    assert.equal(index.rates.get('CNY'), '6.67434181');
    assert.equal(index.base, 'USD');
    assert.equal(index.asOfDate, '2026-10-22');
  });
});

describe('fxFormula', () => {
  it('交叉汇率写出可复算的除式', () => {
    assert.equal(
      fxFormula('USD', 'USD', 'CNY'),
      'CNY_per_USD = (USD/CNY)',
    );
  });

  it('涉及基准币种时只写单边', () => {
    assert.equal(fxFormula('USD', 'USD', 'CNY'), 'CNY_per_USD = (USD/CNY)');
    assert.equal(fxFormula('USD', 'CNY', 'USD'), 'USD_per_CNY = 1 / (USD/CNY)');
  });
});

describe('convertWithFx', () => {
  const index = buildFxIndex(ECB_SNAPSHOT);

  it('USD → CNY 使用公开的 USD 基准报价换算', () => {
    const result = convertWithFx('10', 'USD', 'CNY', index, { scale: 6 });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    // 10 × 6.67434181 = 66.743418...
    assert.equal(result.conversion.amount, '66.743418');
    assert.equal(result.conversion.via, 'USD');
    assert.equal(result.conversion.formula, 'CNY_per_USD = (USD/CNY)');
    assert.equal(result.conversion.rate, ECB_SNAPSHOT.quotes[0]!.rate_decimal);
  });

  it('CNY → USD 是上面那条的逆运算', () => {
    const result = convertWithFx('66.743418', 'CNY', 'USD', index, { scale: 6 });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.conversion.amount, '10');
  });

  it('基准币种参与换算', () => {
    const result = convertWithFx('10', 'USD', 'CNY', index, { scale: 4 });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.conversion.amount, '66.7434');
  });

  it('小数金额不丢精度（0.1 的经典边界）', () => {
    const result = convertWithFx('0.1', 'CNY', 'USD', index, { scale: 10 });
    assert.equal(result.ok, true);
    if (!result.ok) return;
    assert.equal(result.conversion.amount, '0.0149827508');
  });

  it('快照里没有的币种明确失败，不按 1:1 蒙混', () => {
    const result = convertWithFx('10', 'CNY', 'JPY', index);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.reason, 'unknown_currency');
    assert.match(result.message, /JPY/);
  });

  it('同币种不换算', () => {
    const result = convertWithFx('10', 'CNY', 'CNY', index);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.reason, 'same_currency');
  });

  it('非法金额被拒绝', () => {
    const result = convertWithFx('abc', 'CNY', 'USD', index);
    assert.equal(result.ok, false);
    if (result.ok) return;
    assert.equal(result.reason, 'invalid_amount');
  });
});
