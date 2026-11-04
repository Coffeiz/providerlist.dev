/**
 * 视口能力规则测试。
 *
 * 这些断言保护的是**产品规则**，不是实现细节：
 * 「纯触摸设备不挂横向滚动浮条」。
 *
 * 它防的具体回归：
 * - 有人为了「桌面窄屏也能拖横向滚动条」把浮条无条件挂上
 *   → iOS 上底部重新出现那条 14px 纯色带，且 Safari 原生底栏被
 *   实色 color extension 污染（WebKit Bug 301756）。
 * - 有人把判定从 `any-pointer: fine` 改回 `pointer: fine`
 *   → iPad 外接触控板的用户拿不到浮条，只能刷新页面。
 *
 * 语义等价的重构（改函数名、调整字段顺序、换 watch 实现）不应失败。
 */

import assert from 'node:assert/strict';
import test from 'node:test';
import { supportsFloatingScrollbar } from './viewport.ts';

test('纯触摸设备不挂横向滚动浮条', () => {
  // iPhone / iPad 纯触摸：hover 不成立，也没有精确指针。
  assert.equal(
    supportsFloatingScrollbar({ hover: false, anyFine: false }),
    false,
    '纯触摸设备不应挂固定在视口下缘的浮条',
  );
});

test('精确指针设备保留浮条', () => {
  // 桌面鼠标：浮条是表格横向滚动唯一的常驻抓手。
  assert.equal(supportsFloatingScrollbar({ hover: true, anyFine: true }), true);
});

test('iPad 外接触控板仍视为精确指针设备', () => {
  // 主指针是触摸，但存在精确指针——浮条对这类用户有价值。
  assert.equal(
    supportsFloatingScrollbar({ hover: true, anyFine: true }),
    true,
    '存在 any-pointer: fine 时应保留浮条',
  );
});

test('只有悬停能力、没有精确指针时不挂浮条', () => {
  // 防御组合：hover 成立但没有精确指针，仍不应挂——
  // 判定必须同时要求两者，不能只查 hover。
  assert.equal(supportsFloatingScrollbar({ hover: true, anyFine: false }), false);
  assert.equal(supportsFloatingScrollbar({ hover: false, anyFine: true }), false);
});
