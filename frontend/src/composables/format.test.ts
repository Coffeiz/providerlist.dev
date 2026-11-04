import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { prefs } from './prefs.ts';
import { getState } from './catalog.ts';
import { describeCondition, describeStatus, displayPriceAmount, formatRule, isCurrentSupply, priceMetricGroup } from './format.ts';

describe('价格展示精度', () => {
  it('按输入输出语义分组 OpenAI 上下文价格，缓存价格保留在输入列', () => {
    const token = 'per_1m_tokens';
    assert.equal(priceMetricGroup('chat', { metric: 'input', context: 'short', unit: token }), 'input');
    assert.equal(priceMetricGroup('chat', { metric: 'input', context: 'long', unit: token }), 'input');
    assert.equal(priceMetricGroup('chat', { metric: 'output', context: 'short', unit: token }), 'output');
    assert.equal(priceMetricGroup('chat', { metric: 'output', context: 'long', unit: token }), 'output');
    assert.equal(priceMetricGroup('chat', { metric: 'cache_read', context: 'short', unit: token }), 'input');
    assert.equal(priceMetricGroup('chat', { metric: 'cache_write', context: 'long', unit: token }), 'input');
    assert.equal(priceMetricGroup('chat', { metric: 'audio_duration', unit: 'per_hour' }), 'other');
  });

  it('最多四舍五入到三位并去掉无意义的尾随零', () => {
    assert.equal(displayPriceAmount('0.14683552'), '0.147');
    assert.equal(displayPriceAmount('0.144'), '0.144');
    assert.equal(displayPriceAmount('1.2'), '1.2');
    assert.equal(displayPriceAmount('1.20'), '1.2');
    assert.equal(displayPriceAmount('1.23'), '1.23');
    assert.equal(displayPriceAmount('1.2300'), '1.23');
    assert.equal(displayPriceAmount('1'), '1');
  });

  it('小于半毫单位的正价格显示为小于 0.001，不能误显示为免费', () => {
    assert.equal(displayPriceAmount('0.00049'), '<0.001');
    assert.equal(displayPriceAmount('0'), '0');
  });

  it('格式化小时音频价格时翻译指标且最多显示三位小数', () => {
    const previousLang = prefs.lang;
    prefs.lang = 'zh';
    try {
      const result = formatRule('CNY', 'per_hour', {
        rates: [{
          metric: 'audio_duration',
          unit: 'per_hour',
          quantity: 1,
          value: '0.14683552',
        }],
      });
      assert.equal(result.label, '¥0.147 / 每小时音频时长');
    } finally {
      prefs.lang = previousLang;
    }
  });

  it('展示币种为 CNY 时生成人民币参考价，并保留 OpenAI 原币美元价', () => {
    const previousLang = prefs.lang;
    const previousCurrency = prefs.currency;
    const previousFx = getState().fx;
    prefs.lang = 'zh';
    prefs.currency = 'CNY';
    getState().fx = {
      id: 'fixture-fx',
      base: 'USD',
      quotes: [{ currency: 'CNY', rate_decimal: '6.67434181' }],
      as_of_date: '2026-10-22',
      retrieved_at: '2026-10-23T00:00:00Z',
      source: { publisher: 'ECB', dataset: 'fixture', reference_refs: ['fx'], url: 'https://example.test/fx', content_hash: `sha256:${'a'.repeat(64)}` },
      derivation: { formula: 'CNY_per_USD = (USD/CNY)', pairs: ['EUR/CNY', 'EUR/USD'] },
    };
    try {
      const display = formatRule('USD', 'per_1m_tokens', {
        conditions: [{ field: 'service_tier', value: 'standard' }],
        rates: [{ metric: 'input', context: 'short', unit: 'per_1m_tokens', quantity: 1, value: '10.00' }],
      });
      assert.equal(display.label, '$10 / 每百万 Token 输入（短上下文）');
      assert.equal(display.reference, '¥66.743 / 每百万 Token 输入（短上下文）');
    } finally {
      prefs.lang = previousLang;
      prefs.currency = previousCurrency;
      getState().fx = previousFx;
    }
  });

  it('把 service_tier 条件字段翻译为可读中文', () => {
    const previousLang = prefs.lang;
    prefs.lang = 'zh';
    try {
      assert.equal(describeCondition({ field: 'service_tier', op: 'eq', value: 'standard' }), '服务等级：标准服务');
    } finally {
      prefs.lang = previousLang;
    }
  });
});

describe('当前供应筛选', () => {
  it('active Offering 作为当前供应显示', () => {
    const previousLang = prefs.lang;
    prefs.lang = 'zh';
    const supplyStatus = 'active' as const;

    try {
      assert.equal(isCurrentSupply(supplyStatus), true);
      assert.deepEqual(describeStatus(supplyStatus), {
        label: '供应中',
        tone: 'success',
      });
    } finally {
      prefs.lang = previousLang;
    }
  });

  it('弃用、待核实或退役的供应项不进入默认当前供应列表', () => {
    assert.equal(isCurrentSupply(undefined), false);
    assert.equal(isCurrentSupply('unknown'), false);
    assert.equal(isCurrentSupply('retired'), false);
    assert.equal(isCurrentSupply('deprecated'), false);
  });
});
