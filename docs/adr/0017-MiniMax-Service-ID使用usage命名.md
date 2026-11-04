# ADR 0017：MiniMax Service ID 使用 usage 命名

- 状态：已接受
- 日期：2026-10-24

## 背景

MiniMax 的地区 Service ID 使用 `cn-payg` 与 `global-payg`。PAYG 是面向开发者的计费缩写，页面 URL 直接暴露了该缩写；`usage` 更容易理解，也与按使用量计费的产品线名称相符。

## 决策

- 将 MiniMax Service ID 改为 `cn-usage` 与 `global-usage`。
- 迁移正式目录、生命周期事件的 Service 引用、采集适配器、示例、文档和测试。
- 旧 Service 查询参数 `cn-payg` 与 `global-payg` 继续有效；页面加载后将其规范化为新参数。
- 保留已有 Offering ID、RateCard ID 和证据 ID，避免 Service 重命名改变模型和证据的稳定标识。采集器显式保留原 Offering ID 前缀。

## 备选方案

- 保留 `payg`：拒绝。缩写不够直观，且直接暴露在可分享的 URL 中。
- 仅改页面显示文案：拒绝。Service ID 仍会出现在 URL、源数据和引用中，命名不一致。
- 同时重命名 Offering 与证据 ID：拒绝。它们各自是稳定标识，重命名会扩大迁移范围并破坏历史引用。

## 后果

- MiniMax 新链接使用 `?service=cn-usage` 或 `?service=global-usage`。
- 旧链接会继续打开对应市场，并在地址栏规范化为新 ID。
- 其他 Provider 的 Service ID 与公开 Schema 无需改变。
