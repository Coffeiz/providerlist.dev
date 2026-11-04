# Public Static API v1

`/v1/` is the stable public JSON API. `/assets/datasets/` contains internal website data and is not part of the public API.

The website reads its data from `/assets/datasets/`. The JSON Builder uses it to create a subscription URL for `GET /v1/providerlist.json`. That endpoint generates a response from the current published data and is not included in the static Manifest.

## Resources

| Resource | Description |
|---|---|
| `GET /v1/manifest.json` | Schema and data versions, publication state, and hashes of public resources and schemas. The Manifest itself is not included in its hash list. |
| `GET /v1/providers/{provider_id}.json` | A Provider document using TOML-owned field names and hierarchy, plus publication metadata. |
| `GET /v1/models.json` | The complete canonical Model registry; it does not indicate current supply. |
| `GET /v1/models/type/{type}.json` | Canonical Models of the requested type referenced by at least one reviewed Offering. |
| `GET /v1/models/type/all.json` | Canonical Models of all types that are referenced by reviewed Offerings. |
| `GET /v1/offerings.json` | Reviewed Offerings across Providers and markets. |
| `GET /v1/fx.json` | Optional reference exchange rates, included in the Manifest only when valid data is available at build time. |
| `GET /v1/schema/*.schema.json` | Schemas for Provider, Model, Offering, exchange-rate, and Manifest resources. |

Provider details preserve the source `provider`, `services`, and `plans` structure. Derived presentation fields and provenance are omitted.

Prices are grouped in `pricing[]` by currency. Each rate contains `metric`, `unit`, and decimal-string `value`. `deployment`, `region`, `conditions`, `context`, and `ttl` describe applicable scope and tiers. Original currencies and billing units are preserved.

## ProviderList subscription endpoint

`GET /v1/providerlist.json` filters data with `providers`, `markets`, `statuses`, and `fields`. `currency` can select a published exchange-rate currency or `original`. If `fields` is omitted, the response includes `input`, `limits`, `pricing`, and `apis`.

The response includes version information and Provider data grouped by market. Market APIs and model lists are separate; models are grouped by type. The projection covers Chat models. Use the Model registry for complete specifications. Prices retain their currencies, conditions, context tiers, and cache TTLs; distinct tiers are not combined. Exchange conversions are for reference, and prices that cannot be converted remain in their original currency.

`apis[].id` identifies an Endpoint and protocol within its market, using `{endpoint_id}/{protocol}`. The outer market key already provides the market scope, so the ID does not repeat the market ID.

The Builder generates a subscription URL for the selected options. See the [Public API Schema](schema.md) for fields and response structure.

List responses also include `total` and `items`; the endpoint path identifies the resource type. `/v1/models/type/all.json` returns Models referenced by current Offerings; `/v1/models.json` returns the full registry.

## Publication and unknown values

The site uses Service `supply_status` and Offering `status` to display supply. Public data omits internal sources and review records. Unknown prices are not treated as free. Website-only `updated_at` values are not part of the public API.

## HTTP behavior

- Static resources do not depend on runtime services. `/v1/providerlist.json` is the only dynamic projection and reads only the static data from the current release.
- The query endpoint accepts GET and CORS preflight only. It uses no credentials and does not store queries.
- Responses are limited to 5,000 Offerings or 5 MiB and use a shared cache for 300 seconds. Overlong URLs or oversized results return JSON errors.
- Unknown Providers and missing JSON resources return JSON 404 responses, never the SPA's `index.html`.
- Clients that need a stable contract should use `/v1/`, not internal website datasets.

See the [Chinese API reference](api_cn.md).
