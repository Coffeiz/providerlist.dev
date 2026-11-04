## PR type

Use `type: short summary` for the title. Choose the type that best describes the main purpose; check every type included in the PR below. For mixed changes, describe each part under **Changes**.

- [ ] `feat`: add user-facing functionality
- [ ] `fix`: correct a bug or unexpected behavior
- [ ] `perf`: improve performance
- [ ] `refactor`: restructure implementation without changing behavior
- [ ] `data`: add or update Provider, Model, pricing, or source data
- [ ] `security`: strengthen a security boundary
- [ ] `docs`: update documentation or conventions
- [ ] `test`: add or change tests or test infrastructure
- [ ] `build` / `ci`: change dependencies, build, CI, or developer tooling
- [ ] `release`: change release artifacts, deployment, or rollback

## Purpose

What problem or need does this PR address? Link a related issue, PRD, or ADR, or write `None`.

## Changes

- User-visible changes:
- Data, schema, validation, or source changes:
- Internal, test, or infrastructure changes:
- Related work intentionally excluded:

## Validation

- [ ] Data validation: command and result, or why it was not run
- [ ] Tests: command and result, or why they were not run
- [ ] Type check / build: command and result, or why it was not run
- [ ] Manual check, when applicable: steps and result

Report only checks actually performed. Do not describe planned checks as passing.

## Risks and compatibility

Describe effects on the UI, data, schemas, public API, CI, permissions, deployment, and rollback. Write `No known impact` where applicable; do not leave this section blank.

## Deployment

List required secrets, migrations, manual steps, data compilation, deployment, or rollback actions. Write `None` if no extra action is needed.

## Screenshots or examples

Optional. Add screenshots for UI changes or source-backed data examples when useful. Do not include secrets or personal information.

## Before merge

- [ ] The title type matches the main purpose and is checked above
- [ ] The purpose, scope, and excluded work are clear
- [ ] Validation results are reproducible; skipped checks include a reason
- [ ] Related schemas, types, validators, and docs are synchronized
- [ ] Data changes have reviewable sources and preserve unknown values
- [ ] Risks, compatibility, deployment, and rollback are addressed
- [ ] No credentials, raw snapshots, temporary diagnostics, or generated output were added

Keep every section. Write `None` or explain why a section does not apply. Automated ingestion PRs use their generated template.
