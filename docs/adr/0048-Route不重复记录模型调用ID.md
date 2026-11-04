# ADR 0048：Route 不重复记录模型调用 ID

- 状态：已接受
- 日期：2026-11-02
- 取代：ADR 0030 中关于 Route `request_model_id` 的约定

## 背景

模型 Route 隶属于 Offering。Route 再保存一份模型调用 ID，会重复表达 Offering 已有的 `provider_model_id`，并让维护者需要同步两处值。独立服务能力的 Route 也不一定固定对应某个模型。

## 决策

1. 删除 Route 的 `request_model_id` 字段，不在 API、源数据或 IR 中保留别名。
2. 模型请求使用所属 Offering 的 `provider_model_id`。独立能力 Route 不预设模型 ID。
3. 本 ADR 仅取代 ADR 0030 对 `request_model_id` 的约定；规范 Model 与 Provider 调用 ID 分离的其余决策保持不变。

## 后果

同步更新 Schema、类型、采集投影、公开 API、现有 Provider 数据与相关文档。Route 的方法、路径、协议和 Endpoint 关联保持不变。
