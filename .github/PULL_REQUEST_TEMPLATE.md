## PR type

Use `type: short summary` for the title, for example `perf: reduce font payload`. Choose the type that best describes the PR's main purpose, and check every type included below. Describe mixed changes under **Changes**.

- [ ] `feat`: add user-facing functionality
- [ ] `fix`: correct a bug or unexpected behavior
- [ ] `perf`: improve performance
- [ ] `refactor`: restructure implementation without changing behavior
- [ ] `data`: add or update Provider, Model, pricing, or source data
- [ ] `security`: strengthen a security boundary
- [ ] `docs`: update documentation or development conventions
- [ ] `test`: add or change tests
- [ ] `build` / `ci`: change dependencies, build, CI, or developer tooling
- [ ] `release`: change release artifacts, deployment, or rollback

## Purpose

What problem or need does this PR address? Link a related issue, PRD, ADR, or design document, or write `None`.

## Changes

- User-visible changes:
- Data, schema, validation, or source changes:
- Internal, test, or infrastructure changes:
- Related work intentionally excluded:

## Data and contract impact

Describe whether this PR affects the following; write `None` where not applicable.

- ProviderList schema, TypeScript types, semantic validation, or `docs/data/schema.md`:
- `data/` source records, source links, collection/observation times, or market boundaries:
- `dist/` or public `/v1/*.json` output:
- Original pricing currency, billing units, unknown values, or lifecycle semantics:

## Validation

- [ ] Data validation: command and result, or why it was not run
- [ ] Tests: command and result, or why they were not run
- [ ] Type check / build: command and result, or why they were not run
- [ ] Manual check, when applicable: steps and result

Report only checks actually performed. Do not describe planned checks as passing.

## Risks and compatibility

Describe the effects on the UI, data, schema, public API, CI, permissions, deployment, and rollback. Write `No known impact` where applicable; do not leave this blank.

## Deployment and data release

List any required environment variables, manual steps, data compilation, protected release, or rollback actions. Write `None` if no extra action is needed. CI must not write production data; public data follows the repository release workflow.

## Screenshots or examples

Optional. Add screenshots for UI changes or sanitized data examples with their sources when useful. Do not include credentials or personal information.

## Before merge

- [ ] The title type matches the PR's main purpose, and all included types are checked above
- [ ] The purpose, scope, and excluded work are clear
- [ ] Validation results are reproducible; skipped checks include a reason
- [ ] Schema, types, validation, and related docs are synchronized where applicable
- [ ] Data changes have reviewable sources; market, currency, unknown values, and time semantics are not guessed or mixed
- [ ] Risks, compatibility, release, and rollback are addressed
- [ ] No credentials, raw snapshots, temporary diagnostics, or manually edited generated output were added

Keep every section. Write `None` or explain why a section does not apply. Automated ingestion PRs use their generated template.
