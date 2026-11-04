# ProviderList Architecture

This document describes ProviderList’s system components, data flow, and deployment boundaries. See the [source data structure](data/schema.md), [public API schema](api/schema.md), [ingestion guide](guides/ingestion.md), and [operations guide](guides/operations.md).

## System overview

ProviderList stores manually maintained data and automatically collected candidates in Git. An offline pipeline validates and compiles them into website data and public JSON, which a protected release process deploys to Cloudflare.

```text
   Official public docs          Maintainer input / community contributions
            │                                       │
            ▼                                       ▼
 Fixed-source collectors ──▶ Candidate data/IR ──▶ Pull request review
                                                    │
                                                    ▼
                                     Formal source data on PR branch
                                                    │
                                                    ▼
                                         CI validation and build
                                                    │ passed and merged
                                                    ▼
                                      Publish revalidates and compiles offline
                                                    │
                             ┌──────────────────────┴─────────────────────┐
                             ▼                                            ▼
                 Public static JSON: dist/v1/             Site data: dist/assets/datasets/
                             │                                            │
                             └──────────────────────┬─────────────────────┘
                                                    ▼
                                            Vue site build + JSON
                                                    │
                                                    ▼
                                           Unified release dist/
                                                    │
                                                    ▼
                                  Static SEO pages + sitemap/robots
                                                    │
                                                    ▼
                                         Protected Publish deployment
                                                    │
                                                    ▼
                                            Cloudflare static assets
                                       │            │            │
                                       ▼            ▼            ▼
                                       Website    Standard API  Worker query route
                                                          /v1/providerlist.json
                                                            reads site dataset
```

Provider, Model, and model-type routes receive static HTML pages with page-specific metadata and initial content during the frontend build. The same build creates `sitemap.xml` and `robots.txt`; Cloudflare serves these files with the site. A small dedicated Worker permanently redirects `www.providerlist.dev` to `providerlist.dev`.

## Repository structure and components

### Directory tree

```text
providerlist/
├── apps/
│   └── worker/src/             # Read-only query route and JSON 404 protection
├── data/
│   ├── providers/              # TOML Provider / Service / Offering source data
│   ├── models/<developer_id>/ # TOML canonical Model facts, one file per Model
│   ├── collector/
│   │   └── providers.json      # Automatically collected URLs and last collection times
│   ├── candidates/             # Collection candidates and PR review materials
│   ├── ingestion-lifecycle/    # Collection PR process records
│   └── upstream/
│       └── snapshots/          # Raw upstream responses and snapshot metadata
├── frontend/src/
│   ├── pages/                  # Provider, Model, Capability, API, and other pages
│   ├── components/             # Shared presentation components
│   ├── composables/            # Data loading and presentation logic
│   ├── data/                   # Static configuration for the site
│   ├── i18n/                   # Interface translations
│   ├── router/                 # Page routes
│   └── styles/                 # Design tokens and page styles
├── packages/
│   ├── schema/
│   │   ├── schema/             # JSON Schemas published for API consumers
│   │   └── src/                # TypeScript types and validation
│   └── shared/src/             # Domain logic shared by the frontend and pipeline
├── pipeline/src/
│   ├── ingest/
│   │   ├── adapters/           # Provider-specific sources and parsing adapters
│   │   ├── ir/                 # Ingestion IR and projections
│   │   └── migration/          # One-time data migration tools
│   ├── normalize/              # Normalization and statistics
│   ├── validate/               # Data and reference validation
│   ├── compile/                # Public API, Manifest, and site datasets
│   └── fixtures/               # Test data samples
├── .github/workflows/
│   ├── ci.yml                  # Read-only validation for PRs and main
│   ├── sync.yml                # Scheduled or manual collection and candidate PRs
│   └── publish.yml             # Protected production build and deployment
├── agentskills/                # Development domain guidance and conventions
├── docs/                       # Current architecture, contracts, policies, and guides
│   ├── api/                    # Public API documentation
│   ├── data/                   # Data contracts, classifications, and policies
│   ├── feeds/                  # Official and community Feed specifications
│   ├── guides/                 # Contribution, ingestion, and release workflows
│   ├── development/            # Development references
│   ├── adr/                    # Architecture Decision Records
│   └── _archived/              # Historical PRDs and investigation logs
├── scripts/                    # Build, CI, and data maintenance scripts
├── dist/                       # Generated local release directory; do not edit manually
├── package.json                # Repository command entry point
└── wrangler.jsonc              # Cloudflare Worker and static asset configuration
```

## Directory responsibilities

| Path | Responsibility |
|---|---|
| `data/providers/` | Provider supply data |
| `data/models/<developer_id>/` | Canonical Model data |
| `data/collector/providers.json` | Automatically collected Provider URLs and collection times |
| `data/upstream/` | Upstream data and captured snapshots |
| `data/candidates/` | Collection candidates and review materials |
| `data/ingestion-lifecycle/` | Collection PR process records |
| `pipeline/src/ingest/` | Source collection and candidate generation |
| `pipeline/src/normalize/` | Data normalization and statistics |
| `pipeline/src/validate/` | Data validation |
| `pipeline/src/compile/` | API, site datasets, and Git-derived update times |
| `packages/schema/` | Schemas, types, and semantic validation |
| `packages/shared/` | Logic shared by the frontend and pipeline |
| `frontend/` | Vue website |
| `apps/worker/` | JSON query routes and 404 protection |
| `dist/` | Final release artifacts |

## Data layers

Providers describe the services offered in each market; Models describe specifications defined by their developers:

```text
Model (what the developer publishes)
  data/models/<developer_id>/developer.toml
  data/models/<developer_id>/<model>.toml

Offering (how a Provider supplies it in a market)
  data/providers/<provider_id>/provider.toml
  data/providers/<provider_id>/<market>/service.toml
  data/providers/<provider_id>/<market>/offerings/<escaped-model-id>.toml  # one Offering per file
  data/providers/<provider_id>/<market>/plans.toml

Automatic collection record
  data/collector/providers.json
```

Provider and Model source facts use TOML for community review. The offline build validates them and compiles the existing public JSON resources under `/v1/`; API paths and JSON schemas are unchanged.

Offering filenames use the Provider model ID; `/` is written as `·` so IDs such as `vendor/model-name` remain readable in paths. This filename encoding does not change the `id` stored in TOML or the published JSON.

- An Offering uses `id` for the exact model ID accepted by the Provider API. It links to a canonical Model with `model_ref`; no separate internal Offering ID or `provider_model_id` is stored.
- Provider files are grouped by market and Offering for review. The market directory name supplies the `service_id` used by the current contract.
- A Model records developer-published type, context, modalities, limits, and release date. When a collector discovers a new call ID, it submits only an ID candidate; maintainers add Model specifications from source material.
- Automatic collection records contain only registered source URLs and their latest collection times. Source snapshots and review evidence stay with candidates; manual changes cite sources in their PR.

## How automated collection becomes formal data

Automated collection produces changes for review:

1. **Collect:** Adapters access only HTTPS sources registered in code and create candidates with source records.
2. **Aggregate:** Sync runs daily at 00:00 UTC or can be started manually for all or one Class A Provider. Jobs run in parallel; a failure for one Provider does not affect others.
3. **Open a PR:** The system groups changes into one collection PR and attaches review views for changed Providers. Active candidates and their source snapshots remain available while the PR is open. Cleanup removes them after the PR closes; GitHub PR history preserves the review diff. Transfer artifacts expire after one day, while compact lifecycle records and the latest observation state remain for future comparisons.
4. **Review:** The PR contains proposed TOML source changes and review views. Maintainers check sources and differences, then merge approved changes into formal data. New models contribute only Provider model ID candidates; maintainers enter Model specifications.
5. **Validate and publish:** CI checks candidate review state, Schema, data references, types, tests, and the build. Only reviewed and merged formal data enters the release build.

Collectors create candidates; they do not write to production or deploy. A single fetch failure or catalog omission does not trigger retirement. See the [ingestion guide](guides/ingestion.md) for sources, candidates, and retention rules.

## From source files to the website and public API

`pnpm build` runs three stages in order:

1. **Catalog build (`build:catalog`):** Validates `data/` and generates public JSON, Schemas, the Manifest, and site datasets.
2. **Frontend build (`build:frontend`):** Builds the Vue website and copies the data it needs at runtime.
3. **Release merge (`build:release`):** Combines the website and public data in the final `dist/` directory.

The final deployment directory is `dist/`:

- `/v1/` contains versioned public JSON resources. See the [API documentation](api/api.md) and `/v1/manifest.json` for the resource list.
- `/assets/datasets/` contains build-generated data used by the website; it is not part of the public API.

Standard `/v1/*.json` resources are static files. The Worker generates `/v1/providerlist.json` by filtering the dataset from the same deployment with allowed parameters. It does not access a database or Provider upstreams, and it does not store user configuration. The JSON Builder generates previews and subscription URLs locally in the browser.

The Worker also ensures missing API JSON paths return JSON 404 responses instead of the SPA `index.html`. `POST /api/events` accepts a fixed set of anonymous usage events and writes them to Cloudflare Analytics Engine; it does not affect public data reads. The official Feed control plane is not implemented, and other `/api/*` paths return 501.

## CI, Sync, and Publish

- **CI:** Runs checks and builds for PRs, `main` updates, or manual triggers. It is read-only and does not write data or deploy.
- **Sync:** Collects Class A Providers daily at 00:00 UTC or on manual trigger, writes proposed TOML changes to a review PR, and updates collection state. It does not change `main` or deploy to production; approved changes become formal data when the PR is merged.
- **Publish:** Revalidates, builds, deploys, and runs online checks after a `main` update or manual trigger. Deployment requires approval through GitHub’s `production` environment.

Only Publish has production deployment permissions. Sync has only the permissions needed to create collection PRs and update collection state.

## Dependencies

```text
frontend ───────▶ packages/shared ───────▶ packages/schema
pipeline ───────▶ packages/shared
pipeline ───────▶ packages/schema
```

- `packages/schema` defines the data contracts shared across layers.
- `packages/shared` provides rules shared by the frontend and pipeline.
- `pipeline` validates and compiles data offline.
- `frontend` renders the build artifacts.
- The Worker handles read-only queries and API route protection.

## Related documents

- [Documentation index](README.md)
- [Public API and JSON Builder](api/api.md)
- [Data contracts](data/schema.md)
- [Automated ingestion](guides/ingestion.md)
- [CI and release operations](guides/operations.md)
- [Contributing](guides/contributing.md)
- [Architecture Decision Records](adr/README.md)
