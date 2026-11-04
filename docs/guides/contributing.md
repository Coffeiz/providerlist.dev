# Contributing

ProviderList accepts community contributions through GitHub pull requests. Use the matching [Provider](../../.github/PULL_REQUEST_TEMPLATE/provider-data.md) or [Model](../../.github/PULL_REQUEST_TEMPLATE/model-data.md) PR template and refer to the [TOML data templates](templates/README.md). Include source links that support the changes. An external GitHub repository may be cited as a source, but it is not automatically collected or trusted as an authorized Feed. PR review does not mean the API has been tested. The official Provider Feed is a separate mechanism whose runtime is not implemented yet; see the [Feed specification](../feeds/provider-feed-spec.md). The [Chinese guide](contributing_cn.md) is also available.

## 1. What you can contribute

| Contribution | Where to make the change |
|---|---|
| Add a Provider or Offering | `data/providers/<provider_id>/provider.toml` and the relevant market directory |
| Update pricing, API, or other Provider facts | The corresponding Service file; Offering pricing stays with its Offering |
| Add or correct Model specifications | `data/models/<developer_id>/<model_slug>.toml` |
| Update a supply status | `data/providers/<provider_id>/...` and an official source URL in the PR |
| Correct documentation | The relevant document under `docs/` |
| Report a data or website issue | GitHub Issues |

Price changes without sources, unsupported API test claims, anonymous direct writes, and automatically generated bulk submissions are not accepted.

## 2. Contribution workflow

1. **Fork and create a branch:** Fork this repository on GitHub, then clone your fork:

   ```bash
   git clone <your-fork-url>
   cd providerlist
   git switch -c <change-name>
   ```

2. **Make your changes:** Provider data lives under `data/providers/<provider_id>/`: `provider.toml` stores Provider facts, and each market directory has `service.toml`, one TOML file per Offering, and `plans.toml`. The market directory supplies the market ID; the loader derives Service identity fields. Put the exact Provider API model ID in the Offering's `id` and keep its prices in `pricing`. Model facts live under `data/models/<developer_id>/` in one TOML file per Model; the directory also contains `developer.toml`.
3. **Validate locally:** Install dependencies and run the checks in the next section.
4. **Open a pull request:** Push your branch to your fork and open a PR against this repository. Choose the Provider or Model template, describe the changes, and include source URLs.
5. **Wait for review:** Changes enter the release process after approval and merge.

## 3. Setup and validation

Requirements: Node.js ≥ 20.11 and pnpm ≥ 9. Install dependencies and validate the data:

```bash
pnpm install
pnpm validate:data
pnpm build:catalog
```

To preview the site locally:

```bash
pnpm dev:frontend
```

After changing data, run `pnpm build:catalog` again; otherwise the dev server will continue to use the previous `/v1` data. Use `pnpm build` for a full build.

## 4. Data guidelines

- **Provide sources:** Include links and page locations that support your changes. Collection records are maintained automatically; contributors only provide source URLs in the PR.
- **Preserve unknowns:** Omit unknown values or use `null` as allowed by the contract. Use `"0"` only when free service is confirmed. Unknown limits do not mean unlimited.
- **Keep original prices:** Record the Provider's currency and billing unit. Do not infer currencies or convert prices using guessed exchange rates.
- **Separate Provider and Model facts:** Provider files describe supply and calling details; Model files describe specifications published by the developer. Collectors submit new Model ID candidates only; maintainers enter Model specifications.
- **Use evidence for retirement:** A Model missing from a catalog is not necessarily retired. Include an official source for retirement or deprecation.
- **Keep API access at market level:** Put API addresses and protocol paths in the market `service.toml`; do not copy them into an Offering or Model.

For field definitions and full rules, see the [data contract](../data/schema.md), [pricing rules](../data/pricing.md), [Model types](../data/model-types.md), and [data policy](../data/data-policy.md).

## 5. Pull request review

CI checks the Schema, data references, types, tests, and build. Reviewers use the source links in the PR to verify changes. API testing is not required for ordinary data PRs. If you claim a test was performed, include the method, request and response, and environment.

Source links do not imply Provider authorization or verified API availability. PR merge and production release are separate steps.

### Provider data PR template

Full template: [provider-data.md](../../.github/PULL_REQUEST_TEMPLATE/provider-data.md).

```markdown
## Provider data change

### Provider
- Provider ID:
- Files: `data/providers/<provider_id>/...`

### Scope
- Added or changed objects (Service / Offering / API / Route / pricing / plan / supply status):
- Object ID or JSON Pointer:
- Change summary:

### Sources
- URL:
- Supporting evidence on the page:

### Checklist
- [ ] `pnpm validate:data` passes locally
```

### Model data PR template

Full template: [model-data.md](../../.github/PULL_REQUEST_TEMPLATE/model-data.md).

```markdown
## Canonical Model data change

### Model
- Developer ID:
- Canonical Model ID (`developer_id/model_slug`):
- File: `data/models/<developer_id>/<model_slug>.toml`

### Scope
- Added or changed fields (name / type / modality / limits / capabilities / release date):
- JSON Pointer or field path:
- Change summary (confirm this is a Model fact, not Provider Offering / Route data):

### Sources
- URL:
- Supporting evidence on the page:

### Checklist
- [ ] `pnpm validate:data` passes locally
```
