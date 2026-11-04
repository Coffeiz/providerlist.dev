---
name: testing
description: Testing conventions for domain rules, monetary precision, schema fixtures, supply-status invariants, and assertion quality. Read before writing or modifying tests.
---

# Testing conventions

## Test goals

Protect **product contracts, domain rules, and important boundaries** rather than restating the current implementation.
Unit tests for specific functions are allowed. The key is to assert the inputs, outputs, invariants, and failure behavior promised to callers—not private variables, call order, or source snippets.

## Choose the test layer

| Layer | Use for | Example |
|---|---|---|
| Unit test | Pure rules | Decimal arithmetic, constraint AST evaluation, supply-status rules, field merging |
| Fixture test | Data contracts | Provider sources under `data/providers/<provider_id>/` must load and pass `validateProviderDocument` |
| Build test | Compiled artifacts | `dist/v1/manifest.json` matches the file list and hashes |
| E2E | User journeys | Provider detail can switch Services; invalid parameter combinations are blocked |

Use unit tests for pure rules. Do not promote everything to E2E merely for perceived completeness.

## Required domain invariants

These are core project contracts; missing coverage risks regressions:

1. **A single absence does not retire an item** — one miss produces only `suspected_missing`.
2. **Three consecutive misses over 48 hours still reach only `review_required`**, never `retired` directly.
3. An item can become `retired` only after an official shutdown notice takes effect; a future date reaches only `deprecated`.
4. **Conditional price matching is unique** — multiple matches at the same priority are `ambiguous`; do not pick arbitrarily.
5. **Price conditions do not affect request validity** — changing price rules must not change the `1080p+5s` validity result.
6. A constraint referencing an undeclared field must fail validation.
7. **Decimal precision** — `0.1 + 0.2` must equal `0.3` exactly using string arithmetic, not floating point.
8. An unknown model type retains its original value and emits a warning; it is not mapped to `chat`.
9. **Routes are value objects without IDs** — Endpoint and independent Capability routes are validated at their declaration site and do not depend on cross-object references.
10. `retired` requires evidence references.

## Assertions

- Assert **results and observable side effects**: return values, state changes, error codes, or persisted values after reload.
- Avoid asserting that a particular option or class name appears in source code.
- Use string literals for monetary assertions; do not use floating-point comparisons such as `toBe(0.3)`.
- Every test should answer: which concrete regression does it catch, and should it still pass after a semantically equivalent refactor?

## Schema tests

- `data/providers/<provider_id>/` contains the canonical TOML market/service-split source; update it with every schema change. `pipeline/src/fixtures/data/providers/*.json` are complete ProviderDocument test fixtures, not maintained source data.
- Keep at least one Provider fixture covering standard `model_type`, asynchronous tasks, media input constraints, conditional pricing, official integration badges, independent Capabilities, and forward compatibility with unknown types.
- Validation tests must assert an **error code** (for example, `reference.endpoint`), not merely that an error occurred.

## Prohibited practices

- Do not weaken production validation to make tests pass.
- Do not change assertions to match the current implementation; changing assertion rules can amount to deleting the test.
- Avoid information-free assertions such as `expect(x).toBeTruthy()`.
- Do not fetch vendor pages over the live network in tests.
- Do not snapshot entire JSON artifacts; a field change would make the test noisy without protecting behavior.

## Running tests

```bash
pnpm test              # Entire repository
pnpm --filter @providerlist/shared/pricing test
```

Tests use Node's native test runner with `--experimental-strip-types`; do not add another test framework. Place test files at `src/**/*.test.ts` and use `node:test`'s `describe` and `it`.
