# Documentation

ProviderList keeps current system documentation separate from decision history and archived project records. The project overview is in the root [`README.md`](../README.md); its Chinese edition is [`README_cn.md`](../README_cn.md).

## System overview

- [Architecture](architecture.md) — system boundaries, data flow, build stages, and deployment.
- [Public API](api/api.md) — static resources, the ProviderList subscription endpoint, and JSON Builder.

## Data contracts and policies

- [API Schema](api/schema.md) — public JSON response structures.
- [Source data structure](data/schema.md) — repository TOML layout and compilation rules.
- [Model types](data/model-types.md) — primary model categories.
- [Media Operations](data/media-operations.md) — independent service capability parameters and asynchronous tasks.
- [Pricing](data/pricing.md) — billing metrics, units, conditions, and decimal precision.
- [Data policy](data/data-policy.md) — supply status, retirement policy, and catalog statistics.
- [Trust policy and Provider logos](data/trust-policy.md) — source identity, authorization, public trust labels, and logo use.
- [Provider classes](data/provider-classes.md) — collector eligibility and Provider grouping.

## Feeds

- [Official Provider Feed](feeds/provider-feed-spec.md) — discovery and submission boundaries. Runtime Feed integration is still a draft.

## Guides

- [Contributing](guides/contributing.md) — repository contribution workflow.
- [Ingestion](guides/ingestion.md) — collector scope, candidate review, and source handling.
- [Operations](guides/operations.md) — CI, Sync, publishing, and rollback.
- [Licenses](development/licenses.md) — code and third-party data licensing.

## Decision history

[Architecture Decision Records](adr/README.md) explain why major design choices were made. ADRs are historical records; a changed decision should be captured in a new ADR.

## Archived project records

Historical product requirements and investigation logs are kept under [`_archived/`](_archived/README.md). They describe past goals and work; current behavior is defined by the documentation above and the implementation.

## Language editions

English is the default for current documentation. Chinese editions use the `_cn` suffix where available. Archived Chinese PRDs and investigation logs also use `_cn`.
