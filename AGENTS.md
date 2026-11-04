# ProviderList Development Conventions

ProviderList is an **AI Provider current-supply and capability registry for developers**. Its purpose is not to list every model that has ever existed; it records what a Provider currently offers in each market, how it is called, how it is priced, and what evidence supports those facts.

Before changing code, read the Skill for the relevant area:

| Skill | Path | When to use |
|---|---|---|
| data-schema | `agentskills/data-schema/SKILL.md` | Schema, model types, Provider capabilities, data contracts, or validation rules |
| provider-ingestion | `agentskills/provider-ingestion/SKILL.md` | Adding, maintaining, or debugging official Provider collectors |
| frontend | `agentskills/frontend/SKILL.md` | Site frontend (Vue 3 / TypeScript / Vite) |
| design | `agentskills/design/SKILL.md` | UI appearance, interaction, design tokens, or the `/design` page |
| testing | `agentskills/testing/SKILL.md` | Writing or changing tests |
| release | `agentskills/release/SKILL.md` | Releases, CI gates, publishing, or rollback |
| docs | `agentskills/docs/SKILL.md` | Documentation, PRDs, or ADRs |
| local | `agentskills/local/SKILL.md` (local and ignored by Git) | Local proxy, GitHub connectivity, or local runtime conventions |

See `docs/architecture.md` for the design baseline and `docs/data/schema.md` for data contracts.

## Repository layout

```
providerlist/
├── frontend/         # Site frontend (Vue 3 + TypeScript + Vite)
│   └── src/
│       ├── pages/        # Pages
│       ├── components/   # Presentation components
│       ├── composables/  # Data loading, formatting, capability grouping
│       ├── i18n/         # Chinese/English dictionaries and translation entry point
│       ├── styles/       # tokens / base / components / text / pricing / utilities / API / 404 styles
│       └── router/       # Routes
├── pipeline/         # Offline data processing (not used at runtime)
│   └── src/
│       ├── ingest/       # Upstream snapshot collection (ECB rates, etc.)
│       ├── normalize/    # Supply status, field-level merge, coverage statistics
│       ├── validate/     # Data validation
│       └── compile/      # Public dist/v1 JSON, manifest, and search index
├── packages/
│   ├── schema/      # Public JSON Schema, TypeScript types, standard model types
│   └── shared/      # Shared frontend/pipeline pricing, units, capability and media rules
├── apps/worker/     # Cloudflare Worker preventing SPA fallback traps (official API not implemented)
├── data/            # Small, reviewable human-maintained source data
│   ├── models/      # Model release facts, one file per developer/model
│   ├── providers/   # Provider / Service records (current catalog facts)
│   ├── upstream/    # Upstream snapshots (inputs such as exchange rates)
│   └── collector/   # Automatic collector URLs and last collection times
├── scripts/         # Operations scripts (secret scanning, release artifact merge)
├── docs/            # Architecture, contracts, policies, PRDs, ADRs
├── agentskills/     # Repository-specific domain Skills
├── .github/workflows/ # Read-only CI and the sole writable production Publish workflow
├── wrangler.jsonc   # Cloudflare static-asset configuration
└── dist/            # Generated build output; never edit manually
```

## Core invariants

These are **architecture constraints**, not style preferences. If a change needs to alter one, first confirm that the requirement truly calls for it and record the decision in `docs/adr/`.

1. **Public read paths are static.** The website and public JSON do not depend on a runtime database. Reads must not depend on an official API succeeding that day.
2. **Official write paths are controlled and asynchronous.** A write endpoint returns `202` only after persistence; `202` **never means the change is live**.
3. **Source identity is not content correctness.** Domain control, data ownership, and field correctness are separate. An official Feed cannot self-assert `official: true` or `verified: true`.
4. **The current catalog is separate from historical snapshots.** Show current supply by default; keep retired records in history for optional queries.
5. **Unknown means unknown.** `null` means no trusted value was obtained; `"0"` means confirmed free. They are not interchangeable. Unknown limits **do not mean unlimited**.
6. **Preserve original pricing currencies.** Never reverse-calculate original prices using an assumed exchange rate; conversions are derived reference views only.
7. **A single absence does not retire an item.** One upstream failure, rate limit, or pagination omission is only `suspected_missing`.
8. **Data is declarative and never executed.** Data cannot contain scripts; Feeds and Push cannot inject executable modules.
9. **Pipeline permissions are separated.** CI is read-only and never writes production. Only Publish can change production static artifacts and must use a protected environment. `/v1/*.json` must never return `index.html` through SPA fallback: contract files must be JSON or an explicit 404.

## Data practices

- **Source data consists of small, reviewable files**; production directories are compiled. Never edit `dist/` by hand.
- Every published field must trace to a source and its applicable conditions. Keep retrieval time in source metadata; use GitHub PR review history for human review attribution rather than adding verification fields to the data contract.
- Keep `retrieved_at` (retrieved), `observed_at` (state observed), and `published_at` (published) distinct. GitHub PR history records human review; do not duplicate it as a data field.
- **LLMs may extract but not adjudicate.** Extraction results remain review candidates and must not be written directly to the published directory.
- **Automated collection must not overwrite human-verified data.** Human-verified pricing differences belong in `data/pricing/` (not yet implemented; current sample data has no manual override layer). Upstream and manual values must coexist.
- Do not make human data unconditionally highest priority. Human locks must have `expires_at`; conflicts with official declarations go to review rather than last-write-wins.
- **Keep maintained facts simple.** Provider and Model files contain domain data only. Manual changes cite URLs in their PR; automatic collector URLs and collection times live in `data/collector/providers.json`. Do not infer retirement from a single absence or fetch failure. Site-only `updated_at` values are generated from Git history and embedded in the relevant dataset; never hand-edit them.
- Use the observation time of the latest evidence as the evaluation reference time, not the wall clock. Otherwise identical source data could produce different content at different build times while sharing a content-hash-derived version.

## Contract layers

The three contract layers **must stay consistent**: `packages/schema/schema/*.json` (structural contract), `packages/schema/src/types.ts` (TypeScript projection), and `packages/schema/src/validation.ts` (semantic contract).

- A TypeScript type change must also update the public JSON Schema or `schema-parity.test.ts` will fail. A Schema change must also update TypeScript. Update all three and `docs/data/schema.md` together.
- Public JSON Schema ships under `/v1/schema/*.json` for third parties to validate downloaded files.
- Rules that JSON Schema cannot express (cross-file references, contradictory states and evidence) belong in the semantic validator. This split is intentional; do not try to encode cross-file rules in Schema.

## Model types and Provider capabilities

- `model_type` is a **primary category** (standard types are in `docs/data/model-types.md`). It is distinct from input/output modalities and Provider service capabilities.
- Type is an **open enum**. Preserve unknown values and let validation report `unknown_model_type`; the website groups them under “Other.” Never silently map them to `chat`.
- Do not infer Provider capabilities or API support from `model_type`; record documented API access at the market level.
- Independent Service Capabilities (Web Search / File / Batch) are **not bound to a model**. Do not invent a Canonical Model or include them in valid supply counts.
- Different Routes for the same model may map reasoning parameters differently (`reasoning.effort` vs `output_config.effort`); store each mapping per Route.

## Presentation and source of truth

- **The presentation layer must not copy domain dictionaries.** Model types, Provider capability kinds, billing units, currency symbols, and metrics must come from `@providerlist/schema`, `@providerlist/shared/capabilities`, or `@providerlist/shared/pricing`.
- **The presentation layer must not copy contract types.** `frontend/src/types.ts` only forwards types (`export type ... from '@providerlist/schema/types'`); it defines none. Duplicates drift silently. This has happened before: the site shortened “Image generation / editing” to “Image generation.”
- Presentation-only conventions (such as account-market labels) may remain in the frontend, but must not conflict with a contract dictionary of the same name.
- Type-only imports are erased at compile time and create no runtime dependency; forwarding types costs nothing.

## Multimodal and parameter constraints

- Input and output MediaSpecs must remain separate. A 10 MB image-input limit does not imply a 10 MB generated-image limit.
- Parameters are not an unconstrained Cartesian product. Express combinations such as “1080p only allows 10 seconds” with `ConstraintRule`; both the GUI and read-only SDK must reject invalid combinations.
- The constraint DSL is a finite AST accepting only `all` / `any` / `not` / `eq` / `in` / `lt` / `lte` / `gt` / `gte` / `requires` / `excludes`. Do not accept string scripts, arbitrary regex executors, or external executable expressions.
- Billing rules and request validity are separate. Conditions on `PriceRule` must not affect request validation, so a price change cannot silently change whether a request is valid.
- Asynchronous tasks (such as video generation) must record the task ID field, status-query path, and artifact expiry. Preserve unknown values as `null`; do not invent them.

## Debugging principles

- Do not hide real errors with fallbacks; find the root cause first.
- If two or three rounds of static reasoning do not locate the cause, use runtime logs or inspect compiled artifacts.
- Probes are for diagnosis only. Remove them after verification; do not include them in the change.

## Test quality conventions

- Tests should protect **domain rules and invariants** (for example, “one absence does not retire” or “1080p + 5s is invalid”), not restate implementation details.
- Choose the lowest layer that genuinely verifies the behavior: unit tests for pure rules, fixture tests for Schema, and E2E for site behavior.
- Monetary tests must cover decimal precision boundaries such as `0.1 + 0.2`; **never** use JavaScript `Number` to assert money.
- Use source/structure assertions only for architecture and security boundaries (dependency direction, no hardcoded colors, no executing scripts from data).
- When adding a test, state the specific regression it prevents: would a behavior error fail the test, and would a semantically equivalent refactor cause an unrelated failure?

## Security

- Official Feeds / Push, community PRs, and fetched HTML are all **untrusted input**.
- Do not use `Origin`, `Referer`, IP ranges, or self-reported domains as write credentials.
- Fetchers may access only pre-registered exact HTTPS URLs. Prohibit arbitrary URLs, cross-host redirects, internal/loopback addresses, and DNS rebinding.
- Never put Tokens, API Keys, or passwords in the repository, logs, or commit history. Store Push credentials only as hashes.
- Do not write user-generated artifact URLs into static JSON.
- Never inject unsanitized HTML/SVG when rendering official Logos or documentation content.
- Never `eval()` data files. Evaluate conditions only with the finite AST evaluator.

## Language and commits

- English is the default for new code comments, commit messages, and technical documentation.
- Keep existing Chinese comments and documentation; migrate them incrementally when changing the relevant module, and update only content related to that change. Do not translate unrelated content in bulk.
- User-facing copy must follow the product's localization conventions and requested locale.
- Keep code identifiers, paths, and field names unchanged (for example, `model_type`, `ConstraintRule`, and `/v1/manifest.json`).
- Changelogs contain brief user-visible changes. Keep historical investigation records under `docs/_archived/devlogs/`; the directory README documents the Chinese `_cn` naming convention.
- **Do not commit each incremental change.** Commit only when: (1) the feature is complete and confirmed by the user; (2) a bug fix has been confirmed effective by the user; or (3) preparing a push.
- **Never** use `--force` or `--force-with-lease` to overwrite remote branch history.
- **Do not run `git fetch` without user confirmation.**

## Documentation synchronization

**Docs as code:** when behavior changes, keep documentation in sync.

- Changes to fields or types in `packages/schema` → update `docs/data/schema.md`.
- Changes to model types → update `docs/data/model-types.md`.
- Changes to media constraints, parameter DSL, or asynchronous task protocols → update `docs/data/media-operations.md`.
- Changes to supply-status rules, retirement policy, or statistics → update `docs/data/data-policy.md`.
- Changes to badge semantics or domain/brand binding → update `docs/data/trust-policy.md`.
- Changes to official Feed formats → update `docs/feeds/provider-feed-spec.md`.
- Changes to architecture layers or deployment boundaries → update `docs/architecture.md`.
- Changes to CI gates or publishing workflows → update `docs/guides/operations.md`.

**An unchanged document is not necessarily a correct document; it may be misleading.**

## Common commands

```bash
pnpm install                       # Install dependencies
pnpm validate:data                 # Validate data/ against the contract
pnpm build:catalog                 # Compile public JSON under dist/v1
pnpm typecheck                     # Type-check the entire repository
pnpm test                          # Run the full test suite
pnpm scan:secrets                  # Scan for secrets
pnpm dev:frontend                  # Start the site at 127.0.0.1:5178
pnpm build:frontend                # Build the site (requires dist/v1 first)
pnpm build:release                 # Merge release artifacts into dist/
pnpm build                         # Full build: catalog + site + release merge
```

The `frontend/` dev server mounts repository-root `dist/v1/**` at `/v1`. Rebuild the catalog with `pnpm build:catalog` before viewing data changes in the site.

`frontend/dist/` includes its own `v1/` directory (the build copies `dist/v1/**` into it), so the site deployment package is self-contained and does not open with an empty catalog. If `dist/v1` is missing, the build fails with an instruction to build the catalog first; it does not produce a partial site.

`pnpm build` ends with `build:release`, which merges site files and `dist/v1/**` into the root `dist/`. This is the **final release root** (`assets.directory` in `wrangler.jsonc`). The two build stages use separate output directories and do not overwrite each other.

When site data loading fails, show an explicit error empty state; do not invent fallback data. Rendering “not fetched” as “does not exist” is more dangerous than reporting the error (see “Unknown means unknown”).
