---
name: release
description: Release governance for CI gates, risk levels, data versions, atomic publishing, rollback, and cloud deployment. Read before changing CI or release workflows.
---

# Release governance

See `docs/guides/operations.md` for the complete process.

## Keep the three pipelines separate

| Pipeline | Trigger | Permissions | Implementation |
|---|---|---|---|
| **CI** | Pull requests, updates to `main`, and manual runs | Read-only validation and build | `.github/workflows/ci.yml` |
| **Sync** | Daily schedule and manual runs | Collects candidates and updates the review PR; does not modify production | `.github/workflows/sync.yml` |
| **Publish** | Updates to `main` and manual runs | The only workflow that deploys published static artifacts, after production approval | `.github/workflows/publish.yml` |

**Mandatory isolation:** CDN static access to public `/v1/*.json` files has no write permission; `/api/v1/` web requests have no Git deployment credentials; only a trusted CI publish Job can affect production.

- `ci.yml` permissions must be limited to `contents: read`; it must have **no deployment credentials**.
- `publish.yml` uses `environment: production`. Configure Required Reviewers in GitHub repository settings; without them, any push could modify production directly.
- Use different `concurrency` groups so only one publish runs at a time and deployments cannot overwrite one another.

## Risk levels

| Level | Examples | Handling |
|---|---|---|
| **P0: Never auto-publish** | All prices become zero, many models retire at once, currency mismatch, source invalidation | Fail CI and handle manually |
| **P1: Review required** | Native price changes, API URL/auth changes, model retirement, regional availability changes, reasoning parameter mapping changes | Human approval; official status does not bypass authorization or security gates |
| **P2: Conditional automation** | New models in an official Feed under a verified domain and approved scope; additional official documentation | Candidate/review view or policy-based auto-merge |
| **P3: Usually automated** | Logo copy, source retrieval timestamp updates, non-semantic field ordering | Auto-merge after validation |

- **A verified domain does not lower a high-risk level.** Zero prices, bulk removal, billing-currency changes, and cross-domain endpoint changes still require human review.
- Price movement thresholds (such as a change greater than 30%) are **policy defaults**, not factual rules.
- Check currencies before comparing prices. **Never compare CNY and USD as raw numbers.**

## Data versions and atomicity

- Every release has `data_build_id`, `schema_version`, `source_revisions`, `published_at`, and a quality summary.
- Each Git release Commit SHA maps one-to-one to a `data_version`.
- Build artifacts under `dist/v1/snapshots/{version}/...`; **never overwrite a fixed version**.
- Deploy HTML, JSON, indexes, and Manifest together. **Do not deploy code first and JSON minutes later.**
- **Do not update the manifest at the start of a build.** Generate it last so it describes completed artifacts.
- Generate and validate the Manifest and all JSON files in the **same build artifact**, including hash checks.

## Post-release checks

Run smoke checks after deployment (built into `publish.yml`):

- `/v1/manifest.json` is accessible and has `catalog_status=published`.
- Fetch a randomly selected Provider JSON.
- Check `/v1/catalog-current.json`.
- Check the home route and 404 behavior.
- Confirm the **JSON MIME type is correct** and `/v1/*.json` does not fall through to `index.html`.

**SPA fallback trap:** With static hosting configured as `not_found_handling: single-page-application`, every unknown path—including contract files—may return `index.html` with HTTP 200. `apps/worker/src/index.ts` uses `run_worker_first: ["/v1/*", "/api/*"]` to close this gap: existing `/v1` files pass through unchanged, while missing files return a standard JSON 404.

**Official integration is not implemented yet.** All `/api/*` requests return 501; do not present them as available.

## Rollback

- Roll back to the last successful Cloudflare version or redeploy the last successful build.
- **Do not treat a data rollback as a business retirement-restoration event.** They are different things.
- Immutable published history snapshots are not rewritten by rollback.
- Retain correction Events and the impact window; do not silently rewrite published history.

## Schema compatibility

- Adding an optional field is a compatible extension.
- Removing or renaming a field, changing its semantics, or changing its numeric unit requires a new major version such as `/v2/`.
- Model status changes are **data changes**, not major Schema changes.

## Secrets

- Store `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in CI Secrets, with minimum token permissions.
- Enable approvals and branch restrictions on the `production` Environment.
- Never put Provider Tokens, GitHub App private keys, or API credentials in `wrangler.jsonc` or frontend assets.
- Do not execute untrusted external PR code with production secrets. Do not check out and run unreviewed code in `pull_request_target` workflows.

## Commits and pushes

- **Commit only; wait for user confirmation before pushing.**
- Never use `--force` or `--force-with-lease` to overwrite remote history.
- Do not run `git fetch` without user confirmation.
- Before checking remote state, explain whether the operation could rewrite history.
