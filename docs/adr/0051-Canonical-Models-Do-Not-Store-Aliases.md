# ADR 0051: Canonical Models Do Not Store Aliases

- Status: Accepted
- Date: 2026-11-02
- Decision maker: User
- Supersedes: the Model `aliases` portion of [ADR 0030](0030-规范Model-ID归一化与供应商调用ID分离.md)

## Context

Model records carried an `aliases` list alongside the canonical `id` and the developer-published `name`. Most entries repeated the name or ID. Provider API call IDs already belong to Provider Offerings, so the Model alias list duplicated data and made the Model contract harder to maintain.

## Decision

- Remove `Model.aliases` from source data, schemas, types, and public Model JSON.
- Keep `Model.id` as ProviderList's canonical identity and `Model.name` as the developer-published name.
- Keep the exact Provider API call ID in `Offering.id`; use `Offering.model_ref` to link it to a canonical Model.
- Collector identity matching may use an exact canonical ID, a unique ID suffix, or an exact developer-published name. Ambiguous or unmatched records remain unlinked for review.
- Provider-level `aliases` remain available for Provider brand-name search and are not affected.

## Alternatives

- **Keep aliases only for API call IDs:** Rejected because API call IDs are Provider Offering facts and differ across Providers.
- **Use `Model.id` as the Provider call ID:** Rejected because a Provider's API may require a different exact identifier.
- **Infer Model identity from similar names:** Rejected because similarity can merge distinct models incorrectly.

## Consequences

The Model contract and public Model JSON are smaller. Model search no longer indexes Model aliases. Newly discovered Provider IDs that do not match a canonical ID or exact name may remain unlinked until reviewed; existing explicit `model_ref` values remain unchanged.
