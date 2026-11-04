/**
 * 参考汇率换算（派生层）。
 *
 * 核心规则（见设计文档 §5.5、docs/data/pricing.md）：
 * - **权威存储是原币种与原值**。这里算出来的只是派生视图，
 *   任何时候都不能写回实体的 `pricing`，也不能用它生成「官方人民币价」。
 * - 换算结果必须带上**来源、日期与公式**三要素，否则第三方无法复算，
 *   页面上的数字也就无法被质疑。
 * - 汇率缺失时**不猜**：返回明确的失败原因，调用方据此只展示原币价。
 * - 参考汇率**不是结算汇率**，不得用于结算、税务或财务承诺。
 *
 * 精度：全程用十进制字符串 + BigInt 有理数运算，不碰 JS `Number`。
 */

import type { FxReference } from '@providerlist/schema/types';

import { divDecimal, isDecimalString, mulDecimal, normalizeDecimal } from './decimal.ts';
import type { DecimalString } from './decimal.ts';

export type { FxReference };

/** 换算索引：基准币种 + 相对它的报价。 */
export interface FxIndex {
  /** 基准币种，如 `EUR`。 */
  readonly base: string;
  /** 1 基准 = rates[报价币]。基准自身隐含为 1。 */
  readonly rates: ReadonlyMap<string, DecimalString>;
  /** 来源公布日——休市日取最近一个有效参考汇率日期。 */
  readonly asOfDate: string;
}

export type FxFailureReason =
  /** 起止币种相同，无需换算。 */
  | 'same_currency'
  /** 币种不在快照里，无法换算。 */
  | 'unknown_currency'
  /** 金额不是合法的十进制字符串。 */
  | 'invalid_amount';

export interface FxConversion {
  readonly from: string;
  readonly to: string;
  /** 换算后的金额（十进制字符串）。 */
  readonly amount: DecimalString;
  /** 生效汇率：1 from = rate to。 */
  readonly rate: DecimalString;
  /** 中转基准，通常是 `EUR`。 */
  readonly via: string;
  /** 人类可读公式，方向显式。 */
  readonly formula: string;
}

export type FxResult =
  | { readonly ok: true; readonly conversion: FxConversion }
  | { readonly ok: false; readonly reason: FxFailureReason; readonly message: string };

export interface FxConvertOptions {
  /** 换算结果保留的小数位。默认 10——展示层再按需取舍。 */
  readonly scale?: number;
  /** 生效汇率保留的小数位。默认 10。 */
  readonly rateScale?: number;
}

/** 建立换算索引。快照里的 base 自身隐含为 1，不要求显式列出。 */
export function buildFxIndex(reference: FxReference): FxIndex {
  const rates = new Map<string, DecimalString>();
  rates.set(reference.base, '1');
  for (const quote of reference.quotes) {
    rates.set(quote.currency, normalizeDecimal(quote.rate_decimal));
  }
  return { base: reference.base, rates, asOfDate: reference.as_of_date };
}

/**
 * 推导公式。
 *
 * 方向必须显式——「USD/CNY」既可以读成 1 美元换多少人民币，也可以反过来，
 * 所以这里写成具名的 `TO_per_FROM = …`。
 */
export function fxFormula(base: string, from: string, to: string): string {
  if (from === base && to === base) return `${to}_per_${from} = 1`;
  if (from === base) return `${to}_per_${base} = (${base}/${to})`;
  if (to === base) return `${base}_per_${from} = 1 / (${base}/${from})`;
  return `${to}_per_${from} = (${base}/${to}) / (${base}/${from})`;
}

/**
 * 按参考汇率换算金额。
 *
 * 计算顺序是「先乘后除」：乘法精确无误差，只在最后一步除法舍入一次。
 * 反过来做会引入两次舍入误差。
 */
export function convertWithFx(
  amount: DecimalString,
  from: string,
  to: string,
  index: FxIndex,
  options: FxConvertOptions = {},
): FxResult {
  if (!isDecimalString(amount)) {
    return {
      ok: false,
      reason: 'invalid_amount',
      message: `金额不是十进制字符串：${amount}`,
    };
  }
  if (from === to) {
    return {
      ok: false,
      reason: 'same_currency',
      message: '起止币种相同，无需换算',
    };
  }

  const rateFrom = index.rates.get(from);
  const rateTo = index.rates.get(to);
  if (rateFrom === undefined || rateTo === undefined) {
    const missing = rateFrom === undefined ? from : to;
    return {
      ok: false,
      reason: 'unknown_currency',
      message: `参考汇率快照不含币种 ${missing}（基准 ${index.base}，日期 ${index.asOfDate}）`,
    };
  }

  const scale = options.scale ?? 10;
  const rateScale = options.rateScale ?? 10;

  const converted = divDecimal(mulDecimal(amount, rateTo), rateFrom, scale);
  const rate = divDecimal(rateTo, rateFrom, rateScale);

  return {
    ok: true,
    conversion: {
      from,
      to,
      amount: converted,
      rate,
      via: index.base,
      formula: fxFormula(index.base, from, to),
    },
  };
}
