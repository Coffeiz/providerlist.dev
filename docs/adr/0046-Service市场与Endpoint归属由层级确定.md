# ADR 0046：Service 市场与 Endpoint 归属由层级确定

- 状态：已接受
- 日期：2026-11-02
- 更新：取代 [ADR 0045](0045-Service能力随市场Service归属.md) 中关于 Service 保存 `account_market` 的部分；能力仍归属 Service。

## 背景

Service 已按市场拆分，`account_market` 可由 Service ID 映射得到。Endpoint 又嵌套在 Service 下，保存 `service_id` 也会重复表达父子关系。重复字段需要人工保持一致，却不增加新的事实。

## 决策

1. Service ID 同时作为市场标识：`cn` → `CN`、`global` → `GLOBAL`、`other` → `OTHER`、`unknown` → `UNKNOWN`。Service 不再保存 `account_market`。
2. Endpoint 通过嵌套位置归属 Service，不再保存 `service_id`。
3. Endpoint 保留自己的 `id` 与 `api_region`。`api_region` 表示 API 所在区域，不由 Service 市场推断。
4. Offering 仍显式保存 `service_id`，因为它通过独立数组文件归属 Service。
5. 编译器按 Service ID 生成公开 API 的市场分组和市场字段，公开 API 结构不变。

## 后果

更新 Provider Schema、TypeScript 类型、语义校验、IR、采集器、加载器、编译器、网站读取和数据文档。未知 Service ID 会被拒绝；Service 目录名必须与其 ID 一致。
