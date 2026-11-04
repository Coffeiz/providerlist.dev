# Data Policy

This policy defines how ProviderList records supply status, reviews collection results, and publishes data. See the [ingestion guide](../guides/ingestion.md) for the workflow and the [source data schema](schema.md) for field definitions.

## Supply status

A Service's `supply_status` describes supply across a market. An Offering's `status` describes one model in that market.

| Status | Meaning | Default display |
|---|---|---|
| `active` | Currently supplied | Shown |
| `restricted` | Supplied with account, eligibility, or region limits (Offerings only) | Shown |
| `deprecated` | The Provider has deprecated it, but it may still work | Shown for Services; hidden for Offerings |
| `retired` | Official evidence confirms supply has ended, or the reviewed absence rule below is met | Hidden; available through filters |
| `unknown` | Supply cannot be confirmed | Not counted as confirmed supply |

Service-level `account_requirements` describe requirements for the whole market. Do not duplicate a Service and Offering status. Route callability uses `callability`; an independent Service Capability has no status field because its presence in the Service is the current catalog record. Plans are scoped to a market, and `required_plan_ids` must refer to Plans in that Service.

When a current official price list contains a valid price for a specific model, the Offering defaults to `active`, unless reliable evidence says it is historical or retired. A price does not prove account eligibility or a successful API call. Without current price or catalog evidence, keep status `unknown`.

## Absence and retirement

> A missing catalog entry does not by itself mean that supply has ended.

A failed fetch, rate limit, incomplete pagination, or a single missing entry is not evidence of retirement. The collector may propose `retired` only after the same market's official model catalog is confirmed complete twice, at least 24 hours apart, and the Offering is absent from both observations. This creates a PR proposal only; it is not merged or published automatically.

Reviewers must check the market, service line, pagination, catalog coverage, and cited official sources. Reject or correct a proposal if the source is incomplete or the model remains available. A reappearing model clears its absence count. The rule does not apply when the collector does not cover that catalog.

Retiring an Offering affects only that Provider's supply record; it does not retire the canonical Model or change another Provider's Offering. Model facts are maintained separately from Provider supply.

## Updates and sources

Provider and Model source files do not contain a manually maintained `updated_at`. The compiler derives a website-only update time from the latest Git commit for the file, and uses build time when Git history is unavailable. This timestamp is not part of the public API.

| Data | Purpose |
|---|---|
| Provider and Model TOML files | Maintain the formal catalog |
| `data/collector/providers.json` | Record registered official sources and collection times |
| Snapshots, IR candidates, and review materials | Compare source changes; not published as catalog data |

Manual changes must include a reviewable source link in the PR. Model specifications are entered by maintainers. Collectors may discover Provider model IDs and propose them as candidates, but do not create or edit canonical Model records.

## Collection, review, and release

```text
Official source → snapshot and observation → IR → validation and diff
                → Sync review PR → maintainer review and merge → build and release
```

Collectors do not publish data. A Sync PR proposes changes to formal source files; merged changes enter the normal build and release process.

- A failed or incomplete observation must not be treated as “no change,” clear fields, or imply retirement. The two-observation rule creates a reviewed proposal only.
- Compare each source with its own last successful observation, not with the formal catalog.
- Formatting, whitespace, or retrieval-time changes alone are not business changes; changes to source facts are.
- Manual edits to formal data do not advance or reset a source's observation baseline.

See [ADR 0026](../adr/0026-采集快照与人工最终数据分离.md) for the decision. The official Feed runtime is not implemented: domain verification, authorization, scheduled pulls, Push, and the release workflow are not active. Feed scopes and conflict rules are therefore not Sync permission gates.

## Sources and conflicts

This order helps reviewers compare evidence; it is **not** an automatic overwrite policy.

| Priority | Source | Use |
|---|---|---|
| 1 | Official API test or official documentation | Primary evidence |
| 2 | Declaration from an authorized official Feed | Applies after Feed integration; does not mean ProviderList tested the API |
| 3 | Community information with a source and review state | May supplement fields not disclosed officially |
| 4 | Third-party data, including historical upstream data | Supporting evidence |

Keep conflicting sources and differences in review materials. Maintainers decide the formal value; do not overwrite by retrieval time alone. Community or third-party data must not silently replace conflicting official data. A source badge does not mean ProviderList independently tested the API.

The functions `mergeField()`, `checkScope()`, and `classifyChangeRisk()` in `pipeline/src/normalize/merge.ts` are not connected to collection, Sync, or release. `mergeField()` excludes expired `manual_locked` candidates; ordinary conflicts return the highest-priority value with a conflict marker, while high-risk conflicts retain the previous value. These functions do not create reviews, block merges, or change formal Provider files.

## Catalog statistics

Statistics are generated by `pipeline/src/normalize/stats.ts`; the type is `CatalogStats`.

| Field | Meaning |
|---|---|
| `provider_count` | Loaded Providers |
| `service_count` | Services |
| `canonical_model_count` | Distinct canonical Models referenced by at least one Offering |
| `active_offering_count` | Offerings with `active` or `restricted` status |
| `active_offering_count_by_type` | Active Offerings grouped by canonical Model type; unlinked or unknown types count as `unknown` |
| `service_capability_count` | Current independent Service Capabilities, excluded from Offering counts |
| `first_party_direct_offering_count` | Active Offerings from Providers with `kind=first_party` |
| `official_feed_coverage` | Providers with an official integration and their declared Offering count |

These are catalog counts, not quality scores. They do not measure price reliability, Route verification, stale records, or source conflicts.

## Current display and review

The site shows `active` and `restricted` Offerings by default. It hides `deprecated`, `retired`, and `unknown` unless the user selects other statuses. Independent Service Capabilities are shown separately and are not counted as model Offerings.

There is no automated field freshness threshold, daily alert, 48-hour release gate, or automatic rollback under this policy. To correct a published error, fix and merge the source data, then use the normal release process.
