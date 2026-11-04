# Public API Schema

Public endpoints return JSON under `/v1/`. Each resource has a JSON Schema that defines its fields, types, and required values. The published schemas are available under `/v1/schema/`.

## Resources

| Resource | Schema |
|---|---|
| Provider details | [`public-provider.schema.json`](../../packages/schema/schema/public-provider.schema.json) |
| Full Model registry | [`model-registry.schema.json`](../../packages/schema/schema/model-registry.schema.json) |
| Models by type | [`model-list.schema.json`](../../packages/schema/schema/model-list.schema.json) |
| Current reviewed Offerings | [`offering-list.schema.json`](../../packages/schema/schema/offering-list.schema.json) |
| Release manifest | [`manifest.schema.json`](../../packages/schema/schema/manifest.schema.json) |
| Reference exchange rates | [`fx-reference.schema.json`](../../packages/schema/schema/fx-reference.schema.json) |

Provider details retain the source TOML field names and the `provider`, `services`, and `plans` hierarchy. Only publication metadata is added at the root. Loader-derived relationship fields (`provider_id`, `service_id`, `service_ref`, `plan_ids`, and Service `id` / `name`), Offering `model_ref`, generated presentation fields, and provenance are omitted. Canonical Model facts are available from the Model registry endpoints; the Offering list provides supply views such as type, limits, and pricing without exposing the internal model reference. Exchange rates are for display only and do not change source prices.

All responses include `schema_version`, `data_version`, and `generated_at`. List responses also include `total` and `items`; the endpoint path identifies the resource type. See the [API reference](api.md) for endpoints and response details.

The schemas are also defined in TypeScript at [`packages/schema/src/types.ts`](../../packages/schema/src/types.ts) and checked by [`validation.ts`](../../packages/schema/src/validation.ts). The current schema version is `1.0.0`.
