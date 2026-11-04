import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { displayCurrencyForLocale } from './prefs.ts';

describe('按浏览器 locale 的地区推断展示币种', () => {
  it('使用地区子标签，而不是语言或脚本子标签', () => {
    assert.equal(displayCurrencyForLocale('zh-CN'), 'CNY');
    assert.equal(displayCurrencyForLocale('zh-Hans-CN'), 'CNY');
    assert.equal(displayCurrencyForLocale('en-US'), 'USD');
    assert.equal(displayCurrencyForLocale('de-DE'), 'EUR');
    assert.equal(displayCurrencyForLocale('en-DE'), 'EUR');
  });

  it('读取扩展标签前的地区，缺少有效地区时回退 USD', () => {
    assert.equal(displayCurrencyForLocale('de-DE-u-ca-gregory'), 'EUR');
    assert.equal(displayCurrencyForLocale('zh-Hans-CN-u-nu-hanidec'), 'CNY');
    assert.equal(displayCurrencyForLocale('zh-Hans'), 'USD');
    assert.equal(displayCurrencyForLocale('invalid_locale'), 'USD');
  });
});
