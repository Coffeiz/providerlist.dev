#!/usr/bin/env node
/**
 * 参考汇率快照取数（ECB 欧元参考汇率）。
 *
 * 依据设计文档 §5.5：汇率首选 ECB 公开参考汇率，按 USD 基准推导人民币参考汇率；
 * 必须标注来源、原始日期与换算公式，且**不是结算汇率**。
 *
 * 为什么单独一个脚本、而不是放进 build：
 * - 构建必须**离线可复现**：同一份源数据产出同样的字节。
 *   把网络请求塞进 build 会让「构建两次产物一致」这条门禁失效。
 * - 取数失败**不得**清空已有快照——参考汇率缺失时，站点应退化成
 *   「只显示原币价」，而不是显示一个编出来的汇率。
 *
 * 安全约束（见 AGENTS.md「安全规范」）：
 * - 只请求**预登记的精确 HTTPS URL**，不接受任意 URL 参数。
 * - 禁止跨主机重定向（`redirect: 'error'`）。
 * - 响应内容哈希入库，便于事后核对「这批数字来自哪次抓取」。
 *
 * 用法：node scripts/fetch-fx.mjs [--out PATH] [--lookback DAYS]
 * 退出码 0 = 成功，1 = 失败（保留既有快照不动）。
 */

import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const repoRoot = path.resolve(import.meta.dirname, '../../..');

/**
 * 预登记的取数端点。
 *
 * ECB SDW Data API：EXR（Euro foreign exchange reference rates），
 * 频率 D，货币 USD+CNY，基准 EUR，类型 SP00（spot / 下午 2:15 CET 定盘）。
 * ECB 原始值以 EUR 为基准，公开快照换算为 USD 基准；币种与方向在这里写死。
 */
const ECB_ENDPOINT = {
  host: 'data-api.ecb.europa.eu',
  path: '/service/data/EXR/D.USD+CNY.EUR.SP00.A',
  base: 'EUR',
  currencies: ['USD', 'CNY'],
};

const DEFAULT_LOOKBACK_DAYS = 10;
const REQUEST_TIMEOUT_MS = 20_000;

const SOURCE_META = {
  publisher: 'European Central Bank',
  dataset: 'Euro foreign exchange reference rates (USD, CNY against EUR)',
  reference_refs: ['R6', 'R7', 'R8'],
};

const DERIVATION = {
  formula: 'EUR_per_USD = 1 / (EUR/USD); CNY_per_USD = (EUR/CNY) / (EUR/USD)',
  pairs: ['EUR/CNY', 'EUR/USD'],
};

function divideDecimalStrings(numeratorDecimal, denominatorDecimal, scale = 8) {
  const [numeratorWhole, numeratorFraction = ''] = numeratorDecimal.split('.');
  const [denominatorWhole, denominatorFraction = ''] = denominatorDecimal.split('.');
  const numerator = BigInt(`${numeratorWhole}${numeratorFraction}`) * 10n ** BigInt(denominatorFraction.length);
  const denominator = BigInt(`${denominatorWhole}${denominatorFraction}`) * 10n ** BigInt(numeratorFraction.length);
  const scaled = numerator * 10n ** BigInt(scale);
  let rounded = scaled / denominator;
  if ((scaled % denominator) * 2n >= denominator) rounded += 1n;
  return `${rounded / 10n ** BigInt(scale)}.${String(rounded % 10n ** BigInt(scale)).padStart(scale, '0')}`;
}

function toUsdBase(parsed) {
  const usdPerEur = parsed.quotes.find((quote) => quote.currency === 'USD')?.rate_decimal;
  const cnyPerEur = parsed.quotes.find((quote) => quote.currency === 'CNY')?.rate_decimal;
  if (!usdPerEur || !cnyPerEur) throw new Error('ECB 响应缺少 USD 或 CNY 报价');
  return {
    base: 'USD',
    quotes: [
      { currency: 'EUR', rate_decimal: divideDecimalStrings('1', usdPerEur) },
      { currency: 'CNY', rate_decimal: divideDecimalStrings(cnyPerEur, usdPerEur) },
    ],
  };
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token?.startsWith('--')) continue;
    const key = token.slice(2);
    const value = argv[i + 1];
    if (value && !value.startsWith('--')) {
      out[key] = value;
      i += 1;
    }
  }
  return out;
}

/** 构造取数 URL。日期参数是唯一可变部分，且必须是 YYYY-MM-DD。 */
export function buildRequestUrl(startPeriod) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(startPeriod)) {
    throw new Error(`startPeriod 必须是 YYYY-MM-DD：${startPeriod}`);
  }
  const url = new URL(`https://${ECB_ENDPOINT.host}${ECB_ENDPOINT.path}`);
  url.searchParams.set('startPeriod', startPeriod);
  url.searchParams.set('format', 'csvdata');
  return url.toString();
}

/**
 * 校验待请求的 URL。
 *
 * 只允许预登记的 host 与路径前缀——防止有人把 URL 参数接到脚本上，
 * 把站点变成任意 URL 的抓取器。
 */
export function assertAllowedUrl(rawUrl) {
  const url = new URL(rawUrl);
  if (url.protocol !== 'https:') {
    throw new Error(`只允许 https：${rawUrl}`);
  }
  if (url.hostname !== ECB_ENDPOINT.host) {
    throw new Error(`未登记的 host：${url.hostname}`);
  }
  if (!url.pathname.startsWith(ECB_ENDPOINT.path)) {
    throw new Error(`未登记的路径：${url.pathname}`);
  }
  return url;
}

/**
 * 解析 ECB 的 CSV 响应。
 *
 * 每个币种取**最新一个发布日**的定盘值。休市日没有新数据时，
 * 自然落到最近一个有效参考汇率日期——这正是文档要求的口径。
 */
export function parseEcbCsv(csv, currencies = ECB_ENDPOINT.currencies) {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  if (lines.length < 2) {
    throw new Error('ECB 响应没有数据行');
  }

  const header = lines[0].split(',');
  const index = (name) => {
    const at = header.indexOf(name);
    if (at === -1) throw new Error(`ECB 响应缺少列 ${name}`);
    return at;
  };
  const iCurrency = index('CURRENCY');
  const iPeriod = index('TIME_PERIOD');
  const iValue = index('OBS_VALUE');

  const latest = new Map();
  for (const line of lines.slice(1)) {
    const cells = line.split(',');
    const currency = cells[iCurrency];
    if (!currency || !currencies.includes(currency)) continue;
    const period = cells[iPeriod];
    const value = cells[iValue];
    if (!/^\d{4}-\d{2}-\d{2}$/.test(period ?? '')) continue;
    if (!/^\d+(\.\d+)?$/.test(value ?? '')) continue;

    const current = latest.get(currency);
    if (!current || period > current.asOfDate) {
      latest.set(currency, { asOfDate: period, rate: value });
    }
  }

  const quotes = [];
  for (const currency of currencies) {
    const found = latest.get(currency);
    if (!found) {
      throw new Error(`ECB 响应里没有 ${currency} 的有效报价`);
    }
    quotes.push({ currency, rate_decimal: found.rate, asOfDate: found.asOfDate });
  }

  // 各币种的最新发布日必须一致——不一致说明取到的不是同一批定盘值。
  const dates = new Set(quotes.map((q) => q.asOfDate));
  if (dates.size !== 1) {
    throw new Error(
      `各币种发布日不一致：${[...dates].join(', ')}——不能混用不同日期的定盘值`,
    );
  }

  return {
    base: ECB_ENDPOINT.base,
    asOfDate: quotes[0].asOfDate,
    quotes: quotes.map(({ currency: c, rate_decimal }) => ({
      currency: c,
      rate_decimal,
    })),
  };
}

/** ISO 日期（UTC），用于 startPeriod 计算。 */
function isoDateDaysAgo(days) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().slice(0, 10);
}

export async function fetchFxSnapshot({ lookbackDays = DEFAULT_LOOKBACK_DAYS } = {}) {
  const url = buildRequestUrl(isoDateDaysAgo(lookbackDays));
  assertAllowedUrl(url);

  const response = await fetch(url, {
    redirect: 'error',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    headers: { accept: 'text/csv' },
  });
  if (!response.ok) {
    throw new Error(`ECB 取数失败：HTTP ${response.status}`);
  }

  const body = await response.text();
  const parsed = parseEcbCsv(body);
  const publicRates = toUsdBase(parsed);
  const contentHash = `sha256:${createHash('sha256').update(body).digest('hex')}`;

  return {
    id: 'fx-ecb-usd-reference',
    ...publicRates,
    as_of_date: parsed.asOfDate,
    retrieved_at: new Date().toISOString(),
    source: {
      ...SOURCE_META,
      url,
      content_hash: contentHash,
    },
    derivation: DERIVATION,
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const outPath = path.resolve(
    repoRoot,
    args.out ?? path.join('data', 'upstream', 'fx', 'eur-reference.json'),
  );

  try {
    const snapshot = await fetchFxSnapshot({
      lookbackDays: args.lookback ? Number(args.lookback) : DEFAULT_LOOKBACK_DAYS,
    });
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
    console.log(`已写入参考汇率快照：${outPath}`);
    console.log(
      `  基准 ${snapshot.base} · 发布日 ${snapshot.as_of_date} · ` +
        snapshot.quotes.map((q) => `${q.currency}=${q.rate_decimal}`).join(' · '),
    );
  } catch (error) {
    console.error(`参考汇率取数失败（保留既有快照不动）：${error.message}`);
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
