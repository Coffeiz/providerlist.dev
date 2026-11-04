# 公开静态 API v1

`/v1/` 提供稳定的公开 JSON API。`/assets/datasets/` 是网站内部数据，不属于公开 API。

网站从 `/assets/datasets/` 读取内部数据。JSON Builder 根据这些数据生成 `GET /v1/providerlist.json` 订阅地址；该端点按当前发布数据生成响应，不列入静态 Manifest。

## 资源

| 资源 | 说明 |
|---|---|
| `GET /v1/manifest.json` | 当前 Schema 和数据版本、发布状态，以及公开资源和 Schema 的哈希。Manifest 本身不列入哈希清单。 |
| `GET /v1/providers/{provider_id}.json` | 单个 Provider 文档，保留 TOML 中的字段名和层级，并附带发布元数据。 |
| `GET /v1/models.json` | 完整规范 Model 注册表，不表示当前供应状态。 |
| `GET /v1/models/type/{type}.json` | 指定类型中，被至少一个已审核供应项引用的规范 Model。 |
| `GET /v1/models/type/all.json` | 一次返回所有类型中被已审核供应项引用的规范 Model。 |
| `GET /v1/offerings.json` | 跨 Provider 和市场的已审核供应项列表。 |
| `GET /v1/fx.json` | 可选参考汇率；只有构建包含有效数据时才列入 Manifest。 |
| `GET /v1/schema/*.schema.json` | Provider、Model、供应项、汇率和 Manifest 的 JSON Schema。 |

Provider 详情保留源 `provider`、`services` 和 `plans` 结构，不输出生成的展示字段和来源溯源信息。

价格统一放在 `pricing[]` 中，按币种分组。费率包含 `metric`、`unit` 和十进制字符串 `value`；可用 `deployment`、`region`、`conditions`、`context` 和 `ttl` 表示适用范围。原币种和计费单位按来源保留。

## ProviderList 订阅端点

`GET /v1/providerlist.json` 按 `providers`、`markets`、`statuses` 和 `fields` 过滤数据。可用 `currency` 指定已发布的汇率币种，或设为 `original`。省略 `fields` 时返回 `input`、`limits`、`pricing` 和 `apis`。

响应包含版本信息和按市场分组的 Provider 数据。市场 API 与模型列表分开提供；模型按类型分组。订阅结果面向 Chat 模型，模型完整规格见 Model 注册表。价格费率保留币种、条件、上下文档位和缓存 TTL；不同档位不会合并。汇率换算仅供参考，无法换算时保留原币种。

`apis[].id` 在所属市场内标识 Endpoint 和接口协议，格式为 `{endpoint_id}/{protocol}`。市场已由外层键标识，因此 ID 不重复包含市场 ID。

Builder 可生成与当前选项对应的订阅 URL。完整字段和响应结构见[公开 API Schema](schema_cn.md)。

列表响应还包含 `total` 和 `items`；资源类型由端点路径确定。`/v1/models/type/all.json` 只返回被当前供应项引用的 Model；`/v1/models.json` 返回完整注册表。

## 发布状态与未知值

网站按 Service 的 `supply_status` 和 Offering 的 `status` 展示供应情况。公开数据不包含内部来源和审核记录。未知价格不会被当作免费；网站的 `updated_at` 不属于公开 API。

## HTTP 行为

- 静态资源不依赖运行时服务；`/v1/providerlist.json` 是唯一动态投影，只读取本次发布的静态数据。
- 查询端点仅接受 GET 和 CORS 预检请求，不使用凭证，也不保存查询。
- 查询最多返回 5,000 条供应项或 5 MiB；共享缓存时间为 300 秒。超长 URL 或超限结果返回 JSON 错误。
- 未知 Provider 和不存在的 JSON 资源返回 JSON 404，不得回退到 SPA 的 `index.html`。
- 需要稳定契约的客户端只应使用 `/v1/`，不要依赖网站内部的 `/assets/datasets/`。

英文版见 [API reference](api.md)。
