# PRD-WEB-1 · Provider-first 站点与设计系统

> 状态：✅ 已实施（原型） · 对应设计文档 v1.2 §3
> 实施范围：`frontend/`

## 1. 背景

网站是这个项目**唯一**的用户入口。它的任务只有一个：

> 让用户在 30 秒内找到目标 Provider 的**中国大陆** API 地址、协议、
> 认证方式和模型 ID。

这决定了几个和「内容型网站」相反的选择：

- **入口是 Provider，不是模型。** 模型本体信息可继承上游，但默认目录
  回答的是「这个 Provider 现在提供什么」。
- **默认只显示当前供应。** 退役记录保留在历史中，可按需查询——
  不让退役记录污染默认搜索。
- **服务线切换是显式的。** 默认服务线由 URL 参数保存，
  **不**根据 IP 或浏览器语言静默推断账号资格——
  静默推断会让海外用户看到中国区价格。

## 2. 目标

1. Provider-first：Provider 目录 + 搜索，Provider 详情页承载完整信息；根路径重定向到 Provider 目录。
2. 完整的信息架构：Provider 目录、Provider 详情、模型索引、能力索引与独立能力详情。
3. 独立服务能力与模型 Offering **分开展示**，不混为「模型 N」。
4. 有一套**可运行的令牌体系**和一个把令牌**可视化**的 `/design` 页。
5. 数据展示遵守产品规则：单位完整、条件可见、未知不伪装。

## 3. 非目标

- 不做模型排行榜 / benchmark 页。
- 不做对比页（P2）。
- 不做用户登录、收藏、评论。
- 不做服务端渲染（首版是纯 SPA，SEO 需求出现时再评估 Astro）。

## 4. 页面清单

| 路由 | 页面 | 状态 |
|---|---|---|
| `/` | 重定向到 Provider 目录 | ✅ |
| `/providers` | Provider 目录（品牌/市场/类型筛选） | ✅ |
| `/providers/:id` | Provider 详情（服务线/接入/供应/能力/Route） | ✅ |
| `/providers/:id/capabilities/:cid` | 独立能力详情 | ✅ |
| `/models/:type` | 模型索引（结果跳到 Offering） | ✅ |
| `/types/:type` | 兼容重定向到模型索引 | ✅ |
| `/capabilities` | 能力索引 | ✅ |
| `/design` | 设计系统（令牌可视化） | ✅ |
| `/updates` | 近期变更 | ⬜ |
| `/docs/api` | API 文档 | ⬜ |
| `/for-providers` | 官方接入说明 | ⬜ |
| `/history/:key` | 按需历史 | ⬜ |

## 5. 验收标准

### 5.1 功能

- [x] Provider 目录显示 Provider 卡片，支持市场、类型与来源筛选。
- [x] Provider 详情按 Service 切换，**切换状态由 URL 保存**。
- [x] 供应列表按 `model_type` 与 Operation 筛选。
- [x] `deprecated` **继续显示**并标注停服日期。
- [x] `retired` 默认隐藏，可勾选显示。
- [x] 独立能力区与模型供应区**分开**，并注明「不计入模型总数」。
- [x] Route 表展示每个协议的思考参数映射与 `callability`。
- [x] 搜索支持 Provider 名、别名、模型 ID。

### 5.2 数据展示规则

- [x] 价格显示完整单位：`¥1.00 / 每百万 Token 输入`。
- [x] 条件价格显示条件文本；无条件规则**不**显示「条件：无条件」。
- [x] 未披露的限制显示「未披露」。
- [x] 状态徽章**带文案**，不只靠颜色。
- [x] 模型数与独立能力数分开统计与展示。
- [x] 金额不经过浮点运算。

### 5.3 设计系统

- [x] 令牌三层结构：原始 → 语义 → 组件。
- [x] 亮/暗两套语义值，暗色通过 `html[data-theme='dark']` 切换。
- [x] 组件**不硬编码颜色**。
- [x] `/design` 页**读取真实 CSS 变量**渲染（用 `getComputedStyle`），
      令牌改动立即反映，不会与实现脱节。
- [x] `/design` 页含设计原则、色板、间距、圆角、字号、组件、动效与可访问性基线。

### 5.4 可访问性

- [x] 焦点可见（`:focus-visible` 2px + 2px 偏移）。
- [x] 跳到主内容的 skip link。
- [x] 图标按钮有 `aria-label`；装饰元素 `aria-hidden`。
- [x] 表格 `<th scope="col">`。
- [x] 尊重 `prefers-reduced-motion`。
- [x] 外链 `rel="noopener noreferrer"` + Remix `external` 图标标注。
- [x] 移动端单列，表格横向滚动。

## 6. 影响的契约

无——这是**消费方**，不改变公开 JSON 契约。

站点消费 `/v1/*.json`，不直接读 `data/`。

## 7. 风险

| 风险 | 缓解 |
|---|---|
| 纯 SPA 的 SEO 表现 | 首版可接受；需要时转 Astro 静态预渲染 Provider 详情页 |
| 一次加载全量 JSON 导致卡顿 | 分层 JSON + 按 Provider 拆分 + 索引懒加载（数据量大时） |
| 令牌与实现脱节 | `/design` 页读取真实 CSS 变量，改令牌即改页面 |
| 展示层自行发明数据规则 | 展示规则集中在 `frontend/src/composables/format.ts`；规则进 `docs/data/pricing.md` |

## 8. 验证

```bash
pnpm --filter @providerlist/frontend build     # vue-tsc + vite build
pnpm dev:frontend                              # 浏览器人工验证
```

已验证：Provider 目录与详情、模型索引、能力索引、`/design`（亮/暗）均正常渲染，
数据来自实际编译产物。根路径重定向到 `/providers`。
