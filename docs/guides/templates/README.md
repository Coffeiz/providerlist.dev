# TOML Templates

Copy the files you need and replace the example values with facts supported by your sources. Omit optional fields that are unknown or do not apply. These templates are starting points; validate the completed data with `pnpm validate:data`.

## Provider

- [provider.toml](provider.toml) — Provider-wide identity and integration.
- [service.toml](service.toml) — one market's links, API endpoints, routes, and capabilities.
- [offering.toml](offering.toml) — one Provider model ID and its pricing.
- [plans.toml](plans.toml) — plans for one market.

## Model

- [developer.toml](developer.toml) — shared developer identity.
- [model.toml](model.toml) — one canonical Model specification.
