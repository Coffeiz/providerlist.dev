# 公开 API Schema

`/v1/` 下的公开端点返回 JSON。每种资源都有对应 JSON Schema，用于定义字段、类型和必填项；线上 Schema 位于 `/v1/schema/`。

## 资源与 Schema

| 资源 | Schema |
|---|---|
| Provider 详情 | [`public-provider.schema.json`](../../packages/schema/schema/public-provider.schema.json) |
| 完整 Model 注册表 | [`model-registry.schema.json`](../../packages/schema/schema/model-registry.schema.json) |
| 按类型的 Model 列表 | [`model-list.schema.json`](../../packages/schema/schema/model-list.schema.json) |
| 当前已审核供应项 | [`offering-list.schema.json`](../../packages/schema/schema/offering-list.schema.json) |
| 发布清单 | [`manifest.schema.json`](../../packages/schema/schema/manifest.schema.json) |
| 参考汇率 | [`fx-reference.schema.json`](../../packages/schema/schema/fx-reference.schema.json) |

Provider 详情保留源 TOML 的 `provider`、`services`、`plans` 层级和字段名，根部只增加发布元数据。加载器生成的关联字段（`provider_id`、`service_id`、`service_ref`、`plan_ids`，以及 Service 的 `id` / `name`）、Offering 的 `model_ref`、展示字段和来源溯源信息均不输出。规范 Model 数据由 Model 注册表端点提供；供应项列表保留类型、限制和价格等供应视图，不暴露内部模型引用。汇率仅用于显示换算，不会改变原始价格。

所有响应都包含 `schema_version`、`data_version` 和 `generated_at`。列表响应还包含 `total` 和 `items`；资源类型由端点路径确定。端点说明见 [API 参考](api_cn.md)。

Schema 同步定义在 [`packages/schema/src/types.ts`](../../packages/schema/src/types.ts)，并由 [`validation.ts`](../../packages/schema/src/validation.ts) 执行语义校验。当前 Schema 版本为 `1.0.0`。

英文版见 [Public API Schema](schema.md)。
