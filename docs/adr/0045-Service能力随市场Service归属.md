# ADR 0045：独立能力归属市场 Service

- 状态：已接受
- 日期：2026-11-02
- 更新：[ADR 0019](0019-Provider按市场划分Service并将套餐作为Plan.md) 的能力归属规则及 [ADR 0044](0044-独立能力作为当前目录记录不设状态字段.md) 的市场范围字段规则。Service 的市场字段后由 [ADR 0046](0046-Service市场与Endpoint归属由层级确定.md) 取代。

## 背景

Provider 已按账号市场拆分为 Service。把独立能力放在 Provider 层，再用 Capability 自己的 `account_market` 找回所属 Service，会重复保存市场并增加目录、验证和 UI 的分支。

## 决策

1. 独立服务能力只记录在提供该能力的 Service 的 `capabilities[]` 中。
2. Capability 不再包含 `account_market`；其市场由所属 Service 决定，具体通过 Service ID 映射（见 ADR 0046）。
3. `required_plan_ids` 只能引用同一 Service 的 Plan；Capability Route 只能引用同一 Service 的 Endpoint。
4. Provider 只保存全局身份和链接等信息，不再提供顶层 `capabilities`。
5. 公开 API 继续按市场输出 `market.capabilities[]`，字段结构和路径不变。

## 备选方案

- **保留 Provider 级能力并按市场过滤：** 仍需在每项能力上重复保存市场，并让各消费端自行选择 Service。
- **允许 Provider 和 Service 两处保存：** 同一事实可重复或产生冲突，校验和采集也需要处理两种归属。

## 后果

源数据和 IR 只保留 Service 归属；Schema、类型、校验器、采集映射、统计、网站分组和数据文档同步更新。公开 API 的市场能力输出保持兼容。
