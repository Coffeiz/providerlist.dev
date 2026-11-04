---
name: data-schema
description: Data contracts and domain rules for schema fields, model types and capabilities, supply status, pricing, evidence, and validation. Read before changing `packages/` or `data/`.
---

# Data contracts and domain rules

The authoritative contract is in `packages/schema/`, with documentation in `docs/data/schema.md`, `docs/data/model-types.md`, `docs/data/data-policy.md`, `docs/data/media-operations.md`, and `docs/data/pricing.md`.

## Separation of concerns

| Layer | Location | Responsibility |
|---|---|---|
| Public contract | `packages/schema/schema/*.json` | Fields, types, and constraints for public JSON; shipped with artifacts |
| Types and semantics | `packages/schema/src/types.ts` + `validation.ts` | TypeScript projection and cross-file semantic validation |
| Domain rules | `pipeline/src/normalize/`, `packages/shared/src/pricing/`, `packages/shared/src/capabilities/` | State machines, merging, pricing, and constraint evaluation |
| Source data | `data/` | Small, reviewable files maintained by people |

**Compiled artifacts in `dist/` are not sources. Source-data changes must be made in `data/`.**

## Contract change workflow

When changing a field or type, update all **five** locations; tests will catch omissions:

1. Types in `packages/schema/src/types.ts`.
2. Public JSON Schema in `packages/schema/schema/*.json`.
3. Semantic validation in `packages/schema/src/validation.ts` when cross-references or evidence are involved.
4. Provider source files under `data/providers/<provider_id>/` and ProviderDocument fixtures under `pipeline/src/fixtures/data/providers/`, with at least one Provider covering the new field.
5. The field table in `docs/data/schema.md`.

`packages/schema/src/schema-parity.test.ts` enforces consistency between items 1 and 2: every TypeScript interface field must correspond to a Schema `properties` entry. Changing only TypeScript or only Schema must fail; **this is intentional**.

Public Schemas ship at `/v1/schema/*.json` so third parties can validate downloaded files. Copy source files **byte for byte** during publication so published bytes match the source.

## Identity system

- `provider_id`: Stable kebab-case slug. Preserve the ID after a brand rename and add `aliases`.
- `service_id`: Account market or product line (for example, `cn-usage`, `global-usage`). Split a Service only when authentication and access surfaces are independent; represent pricing-only differences as Plans.
- `endpoint_id`: Unique within a Service.
- `Offering.id`: The exact model ID accepted by that Provider API; unique within its Service. Do not create a second stored Offering key.
- `ServiceCapability.kind`: Identifies a Provider capability within one market; each kind appears once per Service and has no separate ID.
- Route definitions have no separate ID. `Endpoint.routes` lists the protocols and paths supported by the market API. Independent Service Capabilities keep their own routes. Routes use `path` relative to their `base_url`.

Model records do not have an alias field. Use an Offering's explicit `model_ref` to link it to a canonical Model. Automatic ID or exact-name matches are review candidates, not proof; **never infer identity from names alone.**

## Standard model types

`chat` `image` `video` `3d` `embedding` `reranking` `decision` `transcription` `speech` `realtime` `music` `world_model`

- `type` is a **single-valued primary category** and an open enum. New upstream values may be accepted if they pass ID lexical validation.
- **Never** silently map an unknown type to `chat`.
- Preserve upstream semantics for `decision` and `realtime`; do not generalize them.
- `music` is a distinct music-generation type, not TTS.

### Single source of truth for Model fields

- The global `Model` is the sole source of truth for `type`, `modalities.input`, and `modalities.output`; a Provider Offering reads them only through `model_ref`.
- Offerings must not contain `type`, `model_type`, `input`, `output`, `input_modalities`, `output_modalities`, `modalities`, `api_modalities`, `limits`, `capabilities`, or `release_date`. Provider API-specific limits may use `api_limits` and must not be confused with Model limits.
- Historical Provider modality observations may be used as review context only when identity can be matched precisely and a direction is missing. Keep the observation in candidate/review material; do not present it as a developer-verified Model specification.
- CI `pnpm validate:data` rejects the listed Offering fields. Contract changes must update the public Schema, TypeScript types, semantic validation, and `docs/data/schema.md` together.

## Service Capability boundaries

- Provider API addresses and Routes belong to the market Service's `endpoints[]`. Do not attach them to a model Offering.
- Independent services such as Web Search, File Management, and Batch belong in the market Service's `capabilities[]`; they are not Models or Offerings.
- Do not create model-level Operations or attach Provider routes to Models. Model-level `capabilities` holds intrinsic reasoning controls, tool calling, structured output, and sampling-parameter support. Market Routes describe API protocol, method, path, and asynchronous access. Record a Service Capability only when it is a distinct provider service that the site or API exposes.
- A Service Capability has no `account_market`, `supply_status`, `status`, or `availability`; its market comes from the Service, and plan restrictions use `required_plan_ids` referencing Plans on that Service.

## Supply status

- Provider Services use `supply_status`: `active`, `deprecated`, `retired`, or `unknown`.
- Offerings use one `status`: `active`, `restricted`, `deprecated`, `retired`, or `unknown`. Do not add a separate Offering `supply_status` or `availability`.
- `restricted` means the Offering is supplied with account or regional limits; general account requirements belong to `Service.account_requirements`. Route integration status uses `callability`.
- An independent Service Capability in `capabilities[]` is a current catalog entry and has no status field.
- `deprecated` and `retired` require official source links in the review PR.
- Maintain the status directly in `data/providers/`. Do not add lifecycle event files or infer retirement from catalog absence.
- Provider and Model `updated_at` values are generated from Git history and embedded in site-only datasets; source files do not carry timestamps. Automatic source URLs and collection times live in `data/collector/providers.json`. Manual changes cite sources in their PR.

## Evidence

- `source.id` identifies a referenceable source; `content_hash` detects silent document changes; `locator` points to a location in the document.
- `evidence.field` is a JSON Pointer, such as `/rate_cards/0/rules/0/rates/input`.
- Field-source `origin.kind` is one of `official_feed`, `official_push`, `official_doc`, `upstream`, or `community`.
- Do not conflate `retrieved_at`, `observed_at`, and `published_at`. GitHub PR review history is the audit record for human review; it is not a data field.
- A source URL supports review but does not prove live API callability. LLM extraction results remain review candidates.
- Preserve conflicts in `conflicts[]`; do not silently overwrite them.

## Pricing

- Amounts are **decimal strings** such as `"3.00"`; use Decimal arithmetic. **Never** accumulate or compare prices with JavaScript `Number`.
- `currency` is the official original settlement currency (ISO 4217), not inferred from the display region.
- `null` means no trusted value was obtained; `"0"` means confirmed free. These are not interchangeable.
- Billing units belong to each **individual metric** (`rate_items[].metric` and `unit`); do not assume every RateCard uses `per_1m_tokens`.
- Keep each price group scoped to its documented conditions. If multiple groups appear to apply to the same charge and the source does not clarify which one applies, preserve the ambiguity for review; do not select by array order.
- **Never** compare numeric values across currencies.
- Promotions require `valid_until`; use `null` when unknown. Do not infer an expiry.

## Parameters and constraints

- `ParameterSpec` must include at least `name`, `type`, and `required`, plus `enum` or `min`/`max`/`step`.
- Omit an unknown `default`; do not infer the vendor's default.
- `ConstraintRule` uses a finite AST. Field references may point only to declared parameters or inputs. An undeclared reference **blocks publication**.
- Both the GUI and read-only SDK must reject invalid combinations (for example, `1080p + 5s`).
- `PriceRule.when` and `ConstraintRule` have **different semantics**. They may share a parser, but their result domains are distinct.

## Media

- Store input and output MediaSpecs separately.
- Use MIME types, not filename extensions. An omitted value means undisclosed, not “all allowed.”
- `max_bytes = 0` is not unknown. Use `null` or omit the field when unknown.
- Use `sample_rate_hz` and `channels` for audio, and `fps` for video. **Do not reuse fields.**
- Asynchronous tasks use `execution.mode=async_job` and record the task ID Pointer, status-query path, and artifact `expires_in_seconds` (use `null` if unknown). Do not store real artifact URLs.

## Validation gates

`packages/schema/src/validation.ts` covers structure, required fields, enums, URLs, currencies, amount precision, cross-file references, ID uniqueness, constraint field references, and supply-status evidence. Route values are validated where they are declared; they are not joined through route IDs.

When adding fields, extend all five locations in the contract-change workflow above.

## Prohibited practices

- Do not make canonical Model information the main website entry point.
- Do not fill domestic prices with defaults or international prices.
- Do not remove a model after a single source absence.
- Do not write a public `active` view back into the full data repository.
- Do not put scripts or executable content in Feed data (other than references to executable modules where explicitly allowed).
- Do not treat `unknown` as `false` or an omitted value as `0`.
