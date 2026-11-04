# iOS Safari 底部原生栏被涂上「底色」

**日期**：2026-10-25
**影响范围**：站点前端 / 表格页（模型列表、能力详情、Provider 详情）/ iOS Safari

## 现象

iPhone Safari 打开模型列表页时，页面底部（Safari 原生地址栏所在的那一行）
出现一块与站点底色不一致的浅灰色块。向左滚动到列表最底部时该色块消失，
页面恢复正常。

Provider 列表页没有这个问题。

## 假设与排除

| 假设 | 如何验证 | 结果 |
|---|---|---|
| 站点自身的底部背景没铺满 | 截图逐行取像素，页面外侧边距区 (20,19,24) 一直延伸到视口底部 | 排除。底色只出现在 Safari 原生栏那一行 |
| 表格内容延伸到了视口外 | 量截图中色带的横向范围 | 排除。色带横跨 x=51–1155（CSS 17–385），正是表格容器宽度，不是全屏 |
| `env(safe-area-inset-*)` 缺失导致 | 检查 `frontend/index.html` 的 viewport meta | **部分成立**。meta 缺 `viewport-fit=cover`，已有的 `env(safe-area-inset-*)` 全部退化为 0，安全区留白形同虚设 |
| 视口下缘的 fixed 元素被 Safari 做实色延伸 | 量色带高度与颜色，并与 DOM 几何比对 | **成立**。见下 |

### 像素与 DOM 的交叉验证

截图原始尺寸 1206×2622（iPhone 16 Pro @3x，CSS 402×874）：

- 色带纵向范围 y=2407→2448 = **42 设备px = 14 CSS px**
- 色带横向范围 x=51→1154 = CSS 17→385，宽度 **368 CSS px**
- 色带颜色 `(31,32,36)`，与暗色令牌 `--pl-glass-bg-strong: rgb(31 32 35 / 87%)` 一致

运行时 DOM 中唯一同时满足这三个特征的元素是 `.pl-table-floating-scroll`：
`position: fixed`、`bottom: 0`、`height: 14px`、`background: var(--pl-glass-bg-strong)`，
宽度由 `wrapper.clientWidth` 驱动——与量到的 368px 完全吻合。

它只在「表格底部超出视口」时才 `display: block`，
所以滚到列表最底部时消失——与用户观察到的现象一致。

## 根因

两件事叠加，都由 Safari 的渲染机制决定：

1. **iOS Safari 不再渲染 `::-webkit-scrollbar` 定制样式**（iOS 14 起移除）。
   浮条的滑块根本不画，只剩一条 14px 高的纯背景色带横在内容底部。
2. **浮条紧贴视口下缘，属于 Safari 地址栏的遮挡边缘。**
   视口边缘附近存在 fixed / sticky 视口约束元素时，Safari 会放弃
   blur scroll-edge effect，改用**实色 color extension**——
   底部原生栏被涂成浮条的颜色，于是出现与站点底色不一致的「底色」。
   这层颜色不是网页能直接画出来的，只能靠让出遮挡边缘来避免。

Provider 列表页没有这个问题，是因为它用卡片网格而非表格，
`.pl-table-wrap` 不存在，浮条始终 `display: none`。

`viewport-fit=cover` 缺失是第三个独立问题：`frontend/index.html` 没声明它，
导致 `App.vue` 里已有的 `env(safe-area-inset-*)` 安全区留白全部退化为 0。

## 修复

- 新增 `frontend/src/composables/viewport.ts`：把「指针能力 → 是否挂浮条」
  收敛成纯函数 `supportsFloatingScrollbar`，判定依据是
  `(hover: hover)` 且 `(any-pointer: fine)`。
  用 `any-pointer` 而非 `pointer`——iPad 外接触控板时主指针仍是触摸，
  但用户确实有精确指针可用。
- `TableViewportControls.vue`：纯触摸设备不再把浮条置为 `display: block`；
  浮条创建时先置 `display: none`，避免挂载到首次 `update()` 之间
  有一帧以默认 `display: block` 压在视口下缘。
- 订阅指针能力变化：混合设备接入鼠标后浮条立刻可用，不必刷新页面。
- `frontend/index.html` 的 viewport meta 补上 `viewport-fit=cover`，
  让已有的安全区留白真正生效。

## 回归防护

`frontend/src/composables/viewport.test.ts` 断言产品规则「纯触摸设备不挂浮条」：

- 纯触摸设备（`hover: false, anyFine: false`）→ 不挂
- 精确指针设备 → 挂
- 只有悬停能力没有精确指针 → 不挂（防止判定退化成只查 `hover`）

验证结果：

- `pnpm --filter @providerlist/frontend test`：10 项通过
- `pnpm --filter @providerlist/frontend typecheck`：通过
- 移动端触摸模拟（402×874 @3x，`hover`/`anyFine` 均为 false）：
  浮条 `display: none`，视口下缘不再有 fixed 元素
- 桌面精细指针模拟（700×900）：浮条 `display: block`，
  `top: 886 / bottom: 900` 贴底、宽度 651 对齐表格容器，功能未受影响

## 未解决事项与风险

- **Safari 原生栏的绘制本身不受网页控制。** 本次修复是「不触发实色延伸」，
  而不是「指定原生栏颜色」；底栏的 Liquid Glass 与滚动边缘动画仍由 Safari 决定。
- **真机已复测通过（2026-10-25）。** 用户在 iPhone Safari 上确认
  模型列表页底部不再出现「底色」块，滚动到底部也保持正常。
  此前的验证均为模拟环境（Chromium + CDP 设备模拟），Safari 原生栏的渲染
  只能在真机确认——这一环是本问题唯一有效的验收依据。
- `viewport-fit=cover` 开启后，页面内容会延伸到刘海/圆角区域，
  底部 home indicator 区域的留白依赖 `env(safe-area-inset-bottom)`。
  `App.vue` 的页脚已使用该变量，但表格页主体未单独处理，
  真机确认末尾内容不被 home indicator 遮挡。

## 参考资料与链接

- [WebKit Bug 301756：Safari 顶栏 tint 与视口约束元素](https://bugs.webkit.org/show_bug.cgi?id=301756)
  —— 视口边缘附近的 fixed/sticky 元素会触发实色 color extension；项目证据（无公开链接）。
- [Apple Developer：Design for Safari 15（WWDC21）](https://developer.apple.com/videos/play/wwdc2021/10029/)
  —— `viewport-fit=cover` 与 `safe-area-inset-*` 的关系。
- iPhone Safari 真机截图与像素测量 —— 项目证据（无公开链接）。
