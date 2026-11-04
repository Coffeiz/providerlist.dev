# Operations

This guide covers the CI, Sync, and Publish workflows, production checks, and recovery. For the system overview, see [Architecture](../architecture.md); for collection details, see [Automated Ingestion](ingestion.md).

The [Chinese version](operations_cn.md) is also available.

The repository has three separate workflows:

| Workflow | Trigger | Purpose |
|---|---|---|
| CI | PRs, `main` updates, or manual run | Validate and build |
| Sync | Daily or manual run | Collect data and create candidate PRs |
| Publish | `main` updates or manual run | Build and deploy |

## Run Sync

1. Open **Actions → Provider Data Collection → Run workflow**.
2. Choose all A-class Providers or one Provider. For a single Provider, enter its ID.
3. Check the Provider jobs and aggregate summary. Review generated PRs before merging.

Sync reports each Provider separately and collects the ECB reference-rate snapshot. Provider and rate changes are included in the review PR; a failed rate fetch preserves the previous snapshot. See the [ingestion guide](ingestion.md) for candidate review.
Only Providers listed as Class A are available to Sync. Anthropic is paused and is excluded from scheduled and manual collection until its official documentation sources are reachable.

## Publish

Merging to `main` starts CI and Publish. Publish builds the project and deploys after approval from the `production` environment. It can also be run manually.

After deployment, the workflow checks the Manifest, Provider JSON, Offerings, site data, homepage, JSON content type, and the `www` redirect. The build also publishes static Provider, Model, and model-type pages, plus `sitemap.xml` and `robots.txt`.
The publish build promotes the generated draft Manifest to `published`; local catalog builds remain `draft`.

The `www.providerlist.dev/*` redirect route is defined in `wrangler.www-redirect.jsonc`. Cloudflare must have the `providerlist.dev` zone and a proxied DNS record for `www` before Publish can install the route.

## Recovery

- **Sync failed:** Check the failed job and summary. Fix the cause and rerun; failure does not mean supply ended.
- **Publish build failed:** Fix the error and merge the correction. Deployment will not start.
- **Deployment check failed:** Inspect the run. To restore production, revert the faulty change and let Publish deploy again.

## Repository settings

Configure `verify` as a required check on `main`, set required reviewers for the `production` environment, and store `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub Actions secrets.

For contribution steps and local validation commands, see the [contributing guide](contributing.md).
