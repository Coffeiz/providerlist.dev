---
name: docs
description: Documentation conventions, document hierarchy, PRDs, ADRs, doc-as-code synchronization, and writing language. Read before writing or editing documentation.
---

# Documentation conventions

## Document hierarchy

| Directory | Content | Readers |
|---|---|---|
| `docs/` root and category folders | Current standards and facts (architecture, contracts, policies, API, and guides) | Everyone |
| `docs/_archived/prds/` | Historical requirements and acceptance criteria | Product and engineering |
| `docs/adr/` | Decision rationale | Everyone |
| `docs/_archived/devlogs/` | Historical investigation records | Maintainers |
| `agentskills/*/references/` | Detailed skill references | Agents |

**Current documents under `docs/` describe what is true now; ADRs explain why it is so.**
Do not put history in architecture documents or current-state details in ADRs.

## Docs as code

Keep documentation in sync with changes. Synchronization triggers:

| Change | Required documentation update |
|---|---|
| `packages/schema` fields or types | `docs/data/schema.md` |
| Model types or Model/Offering fields | `docs/data/model-types.md` and `docs/data/schema.md` |
| Media constraints, parameter DSL, asynchronous tasks | `docs/data/media-operations.md` |
| Supply status, retirement policy, statistics | `docs/data/data-policy.md` |
| Badge semantics, domain and brand binding | `docs/data/trust-policy.md` |
| Official Feed format | `docs/feeds/provider-feed-spec.md` |
| Architecture layers or deployment boundaries | `docs/architecture.md` |
| Billing units and precision rules | `docs/data/pricing.md` |
| CI gates or release process | `docs/guides/operations.md` |
| Repository layout or commands | `README.md` |

**An outdated document is misleading even if it was not directly edited by the change.**

## PRDs

Keep historical PRDs in `docs/_archived/prds/`. Name Chinese archive files with the `_cn.md` suffix. Current product behavior belongs in the current documentation under `docs/`; create a new PRD only when a new planned change needs explicit goals and acceptance criteria.

Every PRD must include:
1. **Background** — who has which problem.
2. **Goals and non-goals** — state what is explicitly out of scope.
3. **Acceptance criteria** — verifiable requirements that can map to tests.
4. **Contract impact** — whether schemas, published JSON, or existing data change.
5. **Risks** — data trustworthiness, migration, and rollback.

A PRD describes what is required and how acceptance is measured. It does not prescribe implementation details; those belong in architecture documents.

## ADRs

Store ADRs in `docs/adr/`, name them `NNNN-<short-title>.md`, and use monotonically increasing numbers.

Every ADR must include:
1. **Context** — the constraints and pressures at the time.
2. **Decision** — what was chosen.
3. **Alternatives** — what was considered and why it was rejected.
4. **Consequences** — benefits, costs, and new constraints.
5. **Status** — proposed, accepted, deprecated, or superseded by another ADR.

Do not rewrite ADR history. Record a changed decision in a new ADR and state what it supersedes.

## Writing conventions

- Prefer English for new technical documentation, including PRDs and ADRs. Keep existing Chinese content and migrate it incrementally when editing the relevant document; do not translate unrelated sections in bulk.
- Keep code identifiers, paths, and field names unchanged.
- Define concepts by stating what they are and are not; this project relies on explicit boundaries.
- Use concrete examples. A real JSON structure is clearer than an abstract description.
- Use tables for comparisons, Mermaid for flows, and prose to explain rationale.
- Mark example data as **fictional** so it cannot be mistaken for real pricing.
- Include units and currency for amounts, and time zones for times.
- Use relative links to specific sections for cross-references.

## Anti-patterns

- Do not copy entire design documents into multiple files; updates would need to be duplicated.
- Do not write “to be completed later” without completing the work.
- Do not use vague catch-alls such as “etc.” or “several” to hide an incomplete enumeration.
- Do not document behavior that conflicts with the implementation; bring the implementation into line with its contract.
- Do not put internal implementation details (temporary variable names or private functions) in public contracts.
