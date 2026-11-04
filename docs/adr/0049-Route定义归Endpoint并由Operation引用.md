# 0049 Route 定义归 Endpoint 并由 Operation 引用

- 状态：已被 ADR 0050 取代
- 日期：2026-11-02
- 取代：ADR 0050

## 背景

Route 描述 API 的协议、HTTP 方法和路径，属于 Endpoint 提供的接入信息。此前 Route 分别嵌套在 Offering 或独立 Capability 的 Operation 下，并通过 `endpoint_ref` 指回 Endpoint，导致同一 API 定义分散在多个业务对象中。

## 决策

- Route 定义统一存放在 `Service.endpoints[].routes`。
- Offering 与 Capability 的 Operation 通过 `route_refs` 引用同一 Service 内的 Route。
- `route_id` 在所属 Service 内唯一；Route 不再保存 `endpoint_ref`。
- Route 不保存 Provider 调用模型 ID。调用 ID 仍由 Offering 的 `provider_model_id` 提供。
- 采集 IR 可在转换前保留来源关联信息；正式 Provider 数据与公开 API 使用上述归属。

## 后果

- 一个 API 地址下的 Route 定义集中维护，多个模型或能力可以引用同一 Route。
- API 可直接完整呈现自身接入路径；Operation 保留任务与 Route 的对应关系。
- 公开 Provider API 在 API 项下输出 Route，在模型和能力 Operation 中输出 `route_refs`。
- 数据 Schema、语义引用校验、采集投影、网站读取和 Feed 示例必须遵循此结构。
