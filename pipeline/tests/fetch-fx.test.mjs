/**
 * 参考汇率取数脚本的测试。
 *
 * 这些用例保护的是**取数口径**与**URL 白名单**：
 * - 每个币种必须取各自最新的发布日；混用不同日期的定盘值会得到
 *   一组互相矛盾的交叉汇率。
 * - 脚本只允许请求预登记的 ECB 端点——它不能被当成通用抓取器。
 */
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  assertAllowedUrl,
  buildRequestUrl,
  parseEcbCsv,
} from '../src/ingest/fetch-fx.mjs';

const CSV = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.CNY.EUR.SP00.A,D,CNY,EUR,SP00,A,2026-10-21,7.4999,A
EXR.D.CNY.EUR.SP00.A,D,CNY,EUR,SP00,A,2026-10-22,7.4786,A
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2026-10-21,1.1234,A
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2026-10-22,1.1205,A`;

describe('parseEcbCsv', () => {
  it('每个币种取最新发布日的定盘值', () => {
    const parsed = parseEcbCsv(CSV);
    assert.equal(parsed.base, 'EUR');
    assert.equal(parsed.asOfDate, '2026-10-22');
    assert.deepEqual(parsed.quotes, [
      { currency: 'USD', rate_decimal: '1.1205' },
      { currency: 'CNY', rate_decimal: '7.4786' },
    ]);
  });

  it('各币种发布日不一致时报错，不混用不同日期的定盘值', () => {
    const mixed = `KEY,CURRENCY,TIME_PERIOD,OBS_VALUE
EXR.D.CNY.EUR.SP00.A,CNY,2026-10-22,7.4786
EXR.D.USD.EUR.SP00.A,USD,2026-10-21,1.1234`;
    assert.throws(() => parseEcbCsv(mixed), /发布日不一致/);
  });

  it('缺少某个币种时报错', () => {
    const partial = `KEY,CURRENCY,TIME_PERIOD,OBS_VALUE
EXR.D.CNY.EUR.SP00.A,CNY,2026-10-22,7.4786`;
    assert.throws(() => parseEcbCsv(partial), /没有 USD/);
  });

  it('缺列时报错，不静默取到空值', () => {
    assert.throws(() => parseEcbCsv('KEY,CURRENCY\nA,B'), /缺少列/);
  });
});

describe('buildRequestUrl', () => {
  it('只拼出预登记端点与合法日期', () => {
    const url = buildRequestUrl('2026-10-13');
    assert.match(url, /^https:\/\/data-api\.ecb\.europa\.eu\/service\/data\/EXR\/D\.USD\+CNY\.EUR\.SP00\.A\?/);
    assert.match(url, /startPeriod=2026-10-13/);
  });

  it('日期格式非法时拒绝构造 URL', () => {
    assert.throws(() => buildRequestUrl('2026-10'), /YYYY-MM-DD/);
    assert.throws(() => buildRequestUrl('../../etc/passwd'), /YYYY-MM-DD/);
  });
});

describe('assertAllowedUrl', () => {
  it('拒绝未登记的 host', () => {
    assert.throws(
      () => assertAllowedUrl('https://evil.example.com/service/data/EXR/D.USD.EUR.SP00.A'),
      /未登记的 host/,
    );
  });

  it('拒绝非 https', () => {
    assert.throws(
      () => assertAllowedUrl('http://data-api.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A'),
      /只允许 https/,
    );
  });

  it('拒绝同一 host 上的其他路径', () => {
    assert.throws(
      () => assertAllowedUrl('https://data-api.ecb.europa.eu/admin'),
      /未登记的路径/,
    );
  });

  it('放行登记端点', () => {
    const url = assertAllowedUrl(buildRequestUrl('2026-10-13'));
    assert.equal(url.hostname, 'data-api.ecb.europa.eu');
  });
});
