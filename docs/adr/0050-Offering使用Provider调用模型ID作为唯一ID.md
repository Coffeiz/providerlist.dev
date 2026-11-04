# ADR-0050：Offering 使用 Provider 调用模型 ID 作为唯一 ID

- 状态：已采纳
- 日期：2026-11-02
- 取代：ADR-0030 中关于 Offering ID 与 `provider_model_id` 分离的约定；ADR-0048 中引用 `provider_model_id` 的说明

## 背景

Offering 同时保存内部生成的 ID 和 Provider API 调用模型 ID。维护数据时需要同步两个值，采集器、套餐引用和审阅逻辑也要在两种 ID 之间转换。内部 ID 不提供独立业务含义，增加了数据维护成本。

## 决策

1. `Offering.id` 保存 Provider API 实际接受的原始模型 ID，也是 Offering 唯一的模型 ID 字段。
2. 删除 Provider 源数据和公开 API 中重复的 `provider_model_id`、内部 Offering ID 与 `offering_key`。`model_ref` 继续关联规范 Model。
3. Offering 的身份由 `provider_id`、`service_id` 和 `id` 组合确定。套餐引用使用同一 Service 内的原始 Offering `id`。
4. 仓库将每条 Offering 单独保存在 `data/providers/<provider_id>/<service_id>/offerings/<转义后的 id>.toml`。文件名中的 `/` 写作 `·`；文件中只写 Offering 对象，读取时由目录补齐 `service_id`。
5. IR 中的 `provider_model_id` 可继续作为采集观察字段，因为它表达来源中的字段；转换为正式 Provider 数据时写入 `Offering.id`，不原样保留第二份字段。
6. 项目尚未上线，数据和公开 Schema 直接迁移，Schema 版本仍保持 `1.0.0`，不提供旧字段兼容。

## 影响

- 新增和修改 Offering 时只需维护一个原始调用 ID。
- 转义后的文件名只用于定位文件，Offering 内容仍保留原始 ID。
- 需要跨 Provider 唯一身份的客户端使用 `provider_id`、`service_id` 和 `id` 组合。
- 价格证据、候选审阅和目录编译按同一原始 ID 关联 Offering。
