# ADR 0047：模型可用性归 Offering，模型价格源随 Offering 保存

- 状态：已接受
- 日期：2026-11-02

## 背景

Service 按市场和账号产品线拆分，Service 级 `availability` 与市场/API 接入记录重复，当前页面也不展示该字段。Route 的 `availability` 没有独立展示或合并用途；Route 适配状态由 `callability` 表达。模型 Offering 才需要描述某个具体供应项的账号资格和区域限制。

模型价格应跟随其所属 Offering 维护。源数据目录已提供 `offerings.json` 的 `pricing.rate_cards`；个别旧数据仍把带 `offering_ref` 的价格卡放在 `service.json`。

## 决策

1. `availability` 仅保留在 Offering 上，使用状态字符串，不再包裹对象。Service 和 Route Schema 不接受该字段；Service Capability 继续不设状态字段。
2. 模型价格卡在源数据中放进对应 Offering 的 `pricing.rate_cards`。确属 Service 或独立能力的价格仍可放在 `service.json`，并使用 `service_ref` / `capability_ref` 等目标引用。
3. 规范化的公开 `ProviderDocument` 继续在顶层 `rate_cards` 发布，并通过 `offering_ref` 关联 Offering；本 ADR 不改变公开 Provider JSON 结构。
4. 迁移现有 Service 可用性记录及指向 Offering 的 Service 价格卡，不丢弃 Service/Capability 级价格。

## 后果

同步 TypeScript 类型、Provider JSON Schema、语义数据、采集合并路径、源数据布局和数据文档。旧 Service / Route `availability` 由 `additionalProperties: false` 拒绝；来源侧模型价格归属在对应 Offering 中明确可见，公开产物结构保持稳定。
