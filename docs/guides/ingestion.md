# Automated Ingestion

Automated ingestion collects candidate data from pre-registered official sources and opens pull requests for review. Collectors do not publish data directly; changes enter the normal build and release process after they are merged.

Provider-specific sources, parsers, and coverage are documented in each adapter's `README.md`. See the [data schema](../data/schema.md) for field definitions and the [data policy](../data/data-policy.md) for supply-status rules.

The [Chinese version](ingestion_cn.md) is also available.

## Where Data Lives

| Path | Contents |
|---|---|
| `data/providers/` | Provider supply data |
| `data/models/` | Canonical Model facts |
| `data/candidates/` | Ingestion candidates and review records |
| `data/collector/providers.json` | Collector sources and last collection times |
| `data/ingestion-lifecycle/` | Candidate pull request processing records |
| `data/upstream/snapshots/` | Temporary raw snapshots; not committed to Git |
| `dist/v1/` | Generated public JSON |

Provider data describes supply and access. Model data describes specifications published by model developers. Newly discovered model IDs go to a candidate list; maintainers confirm them before adding canonical Model records.

Provider and Model source records are TOML. The catalog build reads these files and produces the same public JSON API under `/v1/`; collector candidates and metadata keep their existing JSON formats.

## Ingestion Flow

```text
Registered official sources
             │
             ▼
Fetch snapshots and create candidates
             │
             ▼
Sync groups changes into a pull request
             │
             ▼
CI validation and maintainer review
             │
             ▼
Build and publish after merge
```

Sync runs daily at 00:00 UTC. It can also be started manually for all active A-class Providers or one selected Provider. Paused collectors are absent from both scheduled and manual collection. Anthropic is currently paused because its official documentation endpoints are unavailable from the domestic network. A failure for one Provider does not affect others or change formal data. See the [Provider collection classes](../data/provider-classes.md) for the current list.

Collection results enter a pull request as candidates and diffs. Data is published only after maintainer review and merge. A catalog listing or price does not confirm account eligibility or API callability.

## Collection Rules

- Collect only from HTTPS sources registered in code, with request timeouts and response size limits.
- Record facts from their sources. Do not guess unknown values or infer currencies, units, or conditions.
- **Collect lists from the page, not from code-maintained name lists.** Model, price, and plan parsers must iterate the rows/cards returned by the registered official list and read each record's fields. Do not whitelist model names, plan names, or expected entries to decide what gets collected. Provider-specific selectors, column mappings, and field normalization are fine; they describe page structure, not catalog contents.
- Use an official ID when the page provides one. Otherwise derive a stable ID from the listed name with a shared normalizer, and report collisions or names that cannot be converted. Do not silently skip unfamiliar rows. Derive coverage from parsed source rows and report unmatched/invalid rows; do not compare against a hardcoded expected-name set.
- Provider collectors fetch model lists and pricing only. Do not register or request individual model detail pages, or extract per-model specifications from general pages. Maintain canonical Model details manually in `data/models/`; keep independent Service API and Capability collection separate.
- Reuse shared parsing and normalization helpers where page formats match. There is no assumption that every Provider site has the same HTML or table structure; adapters map their own page fields into shared collection contracts.
- A single fetch failure, incomplete catalog, or missing record does not mean supply has ended. After two complete official model-catalog observations in the same market, at least 24 hours apart, a still-missing existing Offering gets a `status: retired` proposal in the ingestion PR. The PR includes the source observations and requires maintainer review; it is not merged or published automatically. A reappearing model clears its absence streak.
- The collection workflow writes source URLs and last collection times to `data/collector/providers.json`. Manual changes only need source URLs in the pull request. Do not store credentials.

## Candidate Review

Review the changes and their sources. Correct or remove facts that are wrong, unsupported, or cannot be mapped reliably before merging.

Newly discovered model IDs are stored in `data/candidates/<provider-id>/model-ids.json` as a review list. After confirming the developer's documentation, maintainers can add Model specifications to `data/models/`.

`supply_status` is the formal supply state. `data/ingestion-lifecycle/` records candidate pull request outcomes; it does not change supply state or publish data.

## Retention

| Content | Retention |
|---|---|
| Candidates for an open PR | Retained until the PR closes |
| Decided, superseded, or closed-PR candidate content | Removed by the next aggregation or PR lifecycle cleanup; GitHub PR history keeps the review record |
| Raw response snapshots | Retained only while referenced by an open candidate; unreferenced snapshots are deleted at each cleanup |
| Sync workflow artifacts | Retained for 1 day; each Provider Artifact contains one compressed bundle of only the source versions referenced by its candidate |
| Processing records and latest collection state | Retained long term |

Candidate content is kept on the automation state branch only while a PR is open. Once its PR closes, cleanup removes the candidate from the current state tree; GitHub's PR history preserves the review diff. Raw snapshots are excluded from Git and kept only while needed by an open candidate. Compact lifecycle records and the latest collection state remain available for future comparisons.

Snapshot bundling happens after candidate generation and comparison. Semantic candidate fingerprints still determine changes; raw snapshot hashes remain provenance references, and archive format or compressed size does not affect comparison.

On the same filesystem, the reusable HTTP cache hard-links each body to its immutable snapshot instead of storing a second physical copy; it falls back to a regular copy when hard links are unavailable. Machine-readable candidate and state JSON use compact serialization, while Markdown remains the human review surface.

## Common Commands

```bash
pnpm ingest:sources                         # List registered sources
pnpm ingest:source -- <source_id>            # Fetch one registered source
pnpm ingest:sync -- all                      # Run all A-class Providers
pnpm ingest:sync -- provider <provider_id>   # Run one A-class Provider
pnpm ingest:cleanup                          # Remove expired candidates and snapshots
```

See the relevant adapter `README.md` for Provider-specific details. The [ingestion implementation guide](../../pipeline/src/ingest/README.md) describes shared behavior and commands.
