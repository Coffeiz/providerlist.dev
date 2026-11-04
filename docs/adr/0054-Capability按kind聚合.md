# 0054 Capability 按 kind 聚合

- 状态：已接受
- 日期：2026-11-03
- 取代：ADR 0050 中 Capability 按动作拆分并设置独立 ID 的约定

## 背景

Capability 记录曾按模型支持范围或单个动作拆成多条，并要求维护独立 ID。相同能力因此重复出现，贡献者还需要维护模型清单和人工生成的标识；站点也没有使用这些信息展示模型支持关系。

## 决策

- 同一市场的每种 Capability `kind` 只保留一条记录，`kind` 即类型标识，不再设置 Capability ID。
- 相同能力的多条 Route、输入、输出和参数汇总到该记录中，不维护逐模型支持清单。
- API 地址由所属 Service 的 Endpoint 提供；Capability 不重复保存 `base_url`。
- 采集器内部可继续使用来源引用组织解析和定价，但这些内部标识不进入正式 Provider 数据或公开 API。

## 后果

- Provider 数据、网站和公开 API 使用相同的按 `kind` 聚合结构。
- 页面不再展示某项能力支持哪些模型；Service Capability 只描述市场级 Provider 能力及其接入信息。
- `kind` 是 Service 内唯一键；同一能力不同档位或动作通过 Routes 和参数等字段表达。
