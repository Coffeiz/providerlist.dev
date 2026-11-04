# 0050 Route 按使用对象内联且路径不设标识

- 状态：已接受
- 日期：2026-11-02
- 取代：ADR 0049

## 背景

Route 的独立 ID 和 `route_refs` 要求维护者在 Endpoint、模型任务和能力之间来回查找。独立能力还嵌套 `operations`，让能力类型与具体动作出现两层标识。站点没有展示 Route ID，维护数据却要承担这套引用关系。

## 决策

- Route 是一组协议、方法和路径字段，不设置独立 ID；请求路径字段统一命名为 `path`。
- `Endpoint.routes` 保留 API 接入目录；Offering 的 Operation 直接保存其 `routes`。
- 每条独立 `ServiceCapability` 表示一个动作，直接保存 `base_url`、`routes` 及动作所需的输入输出、参数、约束和价格字段，不再嵌套 `operations`。
- 一个原 Capability 包含多个动作时，拆成多条 Capability。单动作保留原 Capability ID；多动作使用 `<capability-id>-<operation-id>`。
- Capability Routes 有自己的 `base_url`。Endpoint、Offering Operation 与 Capability 按各自职责保存路由，不使用 Route ID 交叉引用。
- 采集 IR 可保留来源关联信息用于解析；正式 Provider 数据和公开 API 不输出 Route ID、`route_refs` 或 `path_template`。

## 后果

- Route 的配置和读取不再依赖跨对象 ID 映射；Endpoint 目录和具体任务请求可分别表达。
- Capability 页面、公共 Schema、采集投影、数据文件及 Feed 文档采用同一扁平结构。
- Endpoint 与 Operation / Capability 中可能有重复的路由值，这是两个不同用途的目录和调用定义，不作为需要合并的重复数据。
