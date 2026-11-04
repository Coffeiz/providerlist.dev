# ADR 0052：Offering 统一使用单一状态字段

- 状态：已接受
- 日期：2026-11-02
- 取代：[ADR 0047](0047-模型可用性归Offering且价格源随Offering保存.md) 中关于 Offering 分开记录 `supply_status` 与 `availability` 的决定

## 背景

Offering 同时使用 `supply_status` 和 `availability`，两者组合增加了维护成本，也出现重复表达。例如，已退役记录还会同时标记为不可用。公开数据和页面也需要把两个字段合并解释。

## 决策

- Offering 只保留一个 `status`：`active`、`restricted`、`deprecated`、`retired` 或 `unknown`。
- `restricted` 表示仍在供应，但有账号资格或区域限制。一般账号要求仍记录在 Service 的 `account_requirements`。
- `active` 表示有依据确认当前供应，且没有记录明确的访问限制；它不保证每个账号都能调用。
- `deprecated` 和 `retired` 表示厂商声明的生命周期状态；`unknown` 表示现有资料不足以确认状态。
- Service 继续使用 `supply_status`，本决策不重命名 Service 字段。
- 迁移时保留已确认的 `retired` / `deprecated`；明确受限的 Offering 转为 `restricted`；已确认当前供应或明确可用的转为 `active`。无法确认供应状态的旧 `unavailable` 记录转为 `unknown`，不自动推断为退役。

## 备选方案

- **继续分别记录两个字段：** 拒绝，因为字段组合容易产生冗余或冲突，展示端也必须重复合并状态。
- **把 `availability` 改名为 `status`，保留供应生命周期字段：** 拒绝，因为仍需维护两套状态信息。

## 后果

Provider 源数据、公开 API、站点数据集和 Builder 统一使用 Offering `status`。Schema、IR 投影、页面筛选与数据政策同步更新。旧 Offering 的 `supply_status` 与 `availability` 不再属于有效字段。
