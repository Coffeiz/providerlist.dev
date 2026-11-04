/**
 * 金额处理。
 *
 * 硬规则（见 docs/data/pricing.md）：
 * - 价格权威表示是**十进制字符串**。禁止用 JS `Number` 做计费累计或比较，
 *   因为二进制浮点会让 `0.1 + 0.2 !== 0.3`，在阶梯价判断上会直接算错钱。
 * - `null` 表示未取得可信值；`"0"` 表示经确认免费。二者不可混淆。
 * - 币种不同的价格**严禁**直接比较数值（CNY 与 USD 不可比）。
 */

export type DecimalString = string;

const DECIMAL_PATTERN = /^-?\d+(\.\d+)?$/;

export function isDecimalString(value: unknown): value is DecimalString {
  return typeof value === 'string' && DECIMAL_PATTERN.test(value);
}

/** 把十进制字符串规范化为「至少一位小数」的等价字符串，不改变数值。 */
export function normalizeDecimal(value: DecimalString): DecimalString {
  if (!isDecimalString(value)) {
    throw new Error(`非法十进制字符串：${value}`);
  }
  const negative = value.startsWith('-');
  const unsigned = negative ? value.slice(1) : value;
  const [intPart = '0', fracPart = ''] = unsigned.split('.');
  const trimmedInt = intPart.replace(/^0+(?=\d)/, '');
  const trimmedFrac = fracPart.replace(/0+$/, '');
  const body = trimmedFrac.length > 0 ? `${trimmedInt}.${trimmedFrac}` : trimmedInt;
  return negative && body !== '0' ? `-${body}` : body;
}

/** 十进制字符串相加，精确到小数位。 */
export function addDecimal(a: DecimalString, b: DecimalString): DecimalString {
  const scale = Math.max(decimalPlaces(a), decimalPlaces(b));
  const sum = toScaledInt(a, scale) + toScaledInt(b, scale);
  return fromScaledInt(sum, scale);
}

/** 十进制字符串相减。 */
export function subDecimal(a: DecimalString, b: DecimalString): DecimalString {
  const scale = Math.max(decimalPlaces(a), decimalPlaces(b));
  const diff = toScaledInt(a, scale) - toScaledInt(b, scale);
  return fromScaledInt(diff, scale);
}

/** 十进制字符串相乘。 */
export function mulDecimal(a: DecimalString, b: DecimalString): DecimalString {
  const scale = decimalPlaces(a) + decimalPlaces(b);
  const product = toScaledInt(a, decimalPlaces(a)) * toScaledInt(b, decimalPlaces(b));
  return fromScaledInt(product, scale);
}

/**
 * 十进制字符串相除，保留 `scale` 位小数（四舍五入）。
 *
 * 用 BigInt 做**精确有理数**运算：先化成分数再按 scale 舍入，
 * 只在最后一步舍入一次。
 * 不能用 JS `Number`：`0.1 / 3` 在二进制浮点下得到 `0.03333333333333333`，
 * 而十进制期望是 `0.03333333`（8 位）；汇率换算会反复做除法，误差会累积。
 */
export function divDecimal(
  a: DecimalString,
  b: DecimalString,
  scale = 8,
): DecimalString {
  if (isZeroDecimal(b)) {
    throw new Error('除数不能为零');
  }
  const left = toRational(a);
  const right = toRational(b);

  // (ln/ld) ÷ (rn/rd) = (ln·rd) / (ld·rn)
  const numerator = left.num * right.den;
  const denominator = left.den * right.num;

  const negative = numerator < 0n !== denominator < 0n;
  const absNumerator = numerator < 0n ? -numerator : numerator;
  const absDenominator = denominator < 0n ? -denominator : denominator;

  const scaled = absNumerator * 10n ** BigInt(scale);
  let quotient = scaled / absDenominator;
  const remainder = scaled % absDenominator;
  // 四舍五入：余数*2 ≥ 除数 则进一
  if (remainder * 2n >= absDenominator) quotient += 1n;

  const body = fromScaledBigInt(quotient, scale);
  return negative && body !== '0' ? `-${body}` : body;
}

/** 把十进制字符串舍入到 `scale` 位小数（四舍五入，不改变量级）。 */
export function roundDecimal(value: DecimalString, scale = 2): DecimalString {
  return divDecimal(value, '1', scale);
}

/**
 * 十进制字符串比较。
 * 返回 -1 / 0 / 1。用于阶梯价边界判断（如 32K / 200 输出长度档位）。
 */
export function compareDecimal(a: DecimalString, b: DecimalString): -1 | 0 | 1 {
  const scale = Math.max(decimalPlaces(a), decimalPlaces(b));
  const left = toScaledInt(a, scale);
  const right = toScaledInt(b, scale);
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

export function isZeroDecimal(value: DecimalString): boolean {
  return compareDecimal(value, '0') === 0;
}

/** 计算相对变化率（百分比），用于价格波动风险分级。 */
export function percentChange(from: DecimalString, to: DecimalString): number {
  const fromValue = Number(normalizeDecimal(from));
  const toValue = Number(normalizeDecimal(to));
  if (fromValue === 0) return toValue === 0 ? 0 : Number.POSITIVE_INFINITY;
  return ((toValue - fromValue) / fromValue) * 100;
}

// ---------------------------------------------------------------------------
// internals
// ---------------------------------------------------------------------------

function decimalPlaces(value: DecimalString): number {
  if (!isDecimalString(value)) {
    throw new Error(`非法十进制字符串：${value}`);
  }
  const index = value.indexOf('.');
  return index === -1 ? 0 : value.length - index - 1;
}

/** 把十进制字符串放大到指定小数位，转为整数（安全范围内）。 */
function toScaledInt(value: DecimalString, scale: number): number {
  const normalized = normalizeDecimal(value);
  const negative = normalized.startsWith('-');
  const unsigned = negative ? normalized.slice(1) : normalized;
  const [intPart = '0', fracPart = ''] = unsigned.split('.');
  const padded = (fracPart + '0'.repeat(scale)).slice(0, scale);
  const result = Number(`${intPart}${padded}` || '0');
  return negative ? -result : result;
}

function fromScaledInt(value: number, scale: number): DecimalString {
  const negative = value < 0;
  const abs = Math.abs(value);
  if (scale === 0) return String(negative ? -abs : abs);
  const str = String(abs).padStart(scale + 1, '0');
  const intPart = str.slice(0, str.length - scale);
  const fracPart = str.slice(str.length - scale);
  const body = `${intPart}.${fracPart}`;
  return negative ? `-${normalizeDecimal(body)}` : normalizeDecimal(body);
}

/** 把十进制字符串化为精确分数 `num / den`（BigInt）。 */
function toRational(value: DecimalString): { num: bigint; den: bigint } {
  const normalized = normalizeDecimal(value);
  const negative = normalized.startsWith('-');
  const unsigned = negative ? normalized.slice(1) : normalized;
  const [intPart = '0', fracPart = ''] = unsigned.split('.');
  const digits = `${intPart}${fracPart}`.replace(/^0+(?=\d)/, '');
  const num = BigInt(digits || '0');
  const den = 10n ** BigInt(fracPart.length);
  return { num: negative ? -num : num, den };
}

/** 把「放大了 scale 位」的整数还原为十进制字符串。 */
function fromScaledBigInt(value: bigint, scale: number): DecimalString {
  if (scale === 0) return value.toString();
  const negative = value < 0n;
  const abs = negative ? -value : value;
  const digits = abs.toString().padStart(scale + 1, '0');
  const intPart = digits.slice(0, digits.length - scale);
  const fracPart = digits.slice(digits.length - scale);
  const body = `${intPart}.${fracPart}`;
  return negative ? `-${normalizeDecimal(body)}` : normalizeDecimal(body);
}
