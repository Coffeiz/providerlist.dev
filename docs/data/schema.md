# Source Data Structure

Provider and Model source files use TOML. This document describes their layout and compilation rules. Public JSON structures are documented in the [API Schema](../api/schema.md); pricing details are in the [pricing guide](pricing.md).

## File layout

```text
data/
├── providers/<provider_id>/
│   ├── provider.toml
│   └── <market_id>/
│       ├── service.toml
│       ├── offerings/<encoded_id>.toml
│       └── plans.toml
└── models/<developer_id>/
    ├── developer.toml
    └── <model_slug>.toml
```

- `provider.toml` stores Provider-wide facts; `service.toml` stores a market's APIs, links, and capabilities.
- Each file in `offerings/` describes one Offering. The filename uses `·` for `/`; the `id` value keeps the Provider's original model ID.
- `plans.toml` contains plans for that market.
- Model files contain developer-published specifications; `developer.toml` stores the shared developer identity.

## Compilation

- Market and Model identity comes from directory and filename. The loader fills derived relationship fields and the market display name.
- TOML has no `null`. Omit unknown optional values. `model_ref = "unknown"` becomes an internal `null` for model linking and is omitted from public Provider and Offering JSON.
- Public Provider JSON retains the `provider` / `services` / `plans` hierarchy and TOML field names. Path-derived relationship fields for Services, Offerings, and Plans are omitted; only publication metadata is added at the document root. Provenance and generated integration state are omitted.

## Data boundaries

- Provider files describe supply, access, and pricing by market. Model files describe developer-published specifications. Offering `id` is the exact model ID accepted by the Provider API.
- Service Capability request/response declarations use `input` and `output`, matching TOML and public JSON. Each is an array of `CapabilityInput` or `CapabilityOutput` entries; use `kind` for the entry type.
- Public Model registry entries retain intrinsic Model capabilities; Offering list pricing is an array of pricing groups.
- Preserve unknown Model types as written. Provider capabilities belong to the market Service; intrinsic reasoning, tool-calling, and structured-output capabilities belong to the Model.
- Unknown values are not `false` or `0`. Amounts are decimal strings; `"0"` means confirmed free.
- Service `supply_status` describes market supply; Offering `status` describes an Offering's supply or access status. A failed fetch or missing listing alone does not prove retirement.
- Contributors provide source links in PRs. The collection process maintains automatic source URLs and retrieval times in `data/collector/providers.json`.

Field-level contracts are defined by the JSON Schemas in [`packages/schema/schema/`](../../packages/schema/schema/), TypeScript types, and semantic validation.
