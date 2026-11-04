# ProviderList Official Feed Specification

> Version: Draft `0.1.0` (a ProviderList proposal, not an IETF standard)
> Status: The Feed runtime is not implemented. Currently, only offline Feed discovery candidates can be generated.

This document describes the Feed format and onboarding process for Providers submitting official data. A Feed URL or its contents alone do not prove domain ownership or submission authorization.

## 1. Discovery and onboarding

`pnpm ingest:feed-discovery` reads first-party HTTPS websites from market Services and generates candidate Feed URLs and ID lists for existing Services, Offerings, Capabilities, and Plans. It only generates candidates: it does not request the candidate URLs or verify domains or authorization.

Candidate URLs use the website's exact origin. For example, `https://www.example.com/docs/` produces `https://www.example.com/.well-known/providerlist.json`. The process does not remove `www`, guess a root domain, or expand market coverage.

| Method | Description | Status |
|---|---|---|
| Scheduled Pull | Read a Feed from a reviewed HTTPS URL | Proposed |
| Refresh | A Provider requests a new pull of its registered Feed | Proposed |
| Push | A Provider submits a Feed using a scoped credential | Optional proposal |
| Community GitHub PR | Contributors submit Provider or Model data and source links | In use; see the [contributing guide](../guides/contributing.md) |

Providers can onboard Feed support one Service at a time. A candidate URL does not mean that a Feed exists, a domain is verified, or authorization has been granted. ProviderList's onboarding record determines which Services and fields a Feed may update; the Feed body cannot grant itself permission.

## 2. Feed data

Feeds organize data by Provider, Service, Offering, and Plan, using the same IDs as the canonical data. ProviderList's onboarding record controls which Services and fields may be submitted, so the Feed body does not need `publisher`, `scope`, or `mode`. Omitted records do not delete or retire existing data. The following is a fictional example.

```json
{
  "feed_schema_version": "0.1.0",
  "provider": {
    "id": "example-ai",
    "name": "Example AI",
    "aliases": [],
    "kind": "first_party"
  },
  "services": [
    {
      "id": "cn",
      "provider_id": "example-ai",
      "website": "https://cn.example.com",
      "docs": {
        "api": "https://cn.example.com/docs/api"
      },
      "endpoints": [
        {
          "id": "cn-openai-compatible",
          "base_url": "https://api.example.com/v1",
          "api_region": "Mainland China",
          "routes": [
            {
              "protocol": "chat-completions",
              "method": "POST",
              "path": "/chat/completions"
            }
          ]
        }
      ],
      "offerings": [
        {
          "id": "example-chat",
          "model_ref": "example-ai/example-chat",
          "status": "active",
          "pricing": [
            {
              "currency": "CNY",
              "rates": [
                { "metric": "input", "unit": "per_1m_tokens", "value": "1.00" },
                { "metric": "input", "context": ">=500000", "unit": "per_1m_tokens", "value": "2.00" },
                { "metric": "output", "unit": "per_1m_tokens", "value": "4.00" },
                { "metric": "cache_write", "ttl": "5min", "unit": "per_1m_tokens", "value": "3.75" }
              ],
              "deployment": "International",
              "region": "Singapore"
            }
          ]
        }
      ],
      "capabilities": [
        {
          "id": "cn-web-search",
          "kind": "web_search"
        }
      ]
    }
  ],
  "plans": [
    {
      "id": "cn-pro-plan",
      "service_ref": "cn",
      "name": "Pro",
      "currency": "CNY",
      "billing_options": [
        {
          "billing_period": "month",
          "price": "200.00"
        }
      ]
    }
  ],
  "source_links": ["https://registry.example.com/pricing"]
}
```

Offering and independent Capability prices use the public API's entity-level `pricing` structure. A price group may use `deployment` for a deployment scope, `region` for a specific deployment location, and `conditions` for other applicability rules. Plan prices are stored separately under `plans`, not mixed with model usage prices. The converter preserves pricing on its owning entity and does not create separate rate cards or pricing references. Domain entities use stable `id` values; pricing groups and rates are value objects and need no extra IDs.

The Feed combines data that is stored in separate repository files. Its fields still map to the same domain objects:

| Feed content | Repository file |
|---|---|
| `provider` | `data/providers/<provider_id>/provider.toml` |
| `services[]` | `data/providers/<provider_id>/<market_id>/service.toml` |
| `services[].offerings[]` | `offerings/<escaped id>.toml`, one Offering per file; `/` in the filename is written as `·` |
| `plans[]` | `plans.toml` in the corresponding market directory |
| `services[].offerings[].pricing[]` | Kept as `pricing` on the corresponding Offering |

### Field conventions

#### Data content

- **Version:** Feed uses its own `feed_schema_version`, separate from the public `/v1` Schema version. A converter handles each Feed format version.
- **Provider identity and permissions:** `provider.id` identifies a Provider; it is not a login credential or proof of authorization. ProviderList's permission records determine which Services and fields a Provider can update.
- **Partial updates:** A Feed updates only the objects and fields it explicitly includes. If a record or field is omitted, its existing value is kept; omission does not mean deletion or retirement.
- **Market:** Service IDs are `cn`, `global`, `other`, or `unknown`; ProviderList maps them to market codes. The Feed does not repeat `account_market`.
- **Object ownership:** Provider, Service, Endpoint, Offering, Capability, and Plan use stable IDs. Routes have no separate ID and are recorded where they are used.
- **Service display names:** The Feed does not submit `services[].name`. ProviderList generates the name from its market dictionary, and source files do not store the field.
- **Capabilities and plans:** Endpoints keep the market API URL and route inventory. Standalone Capabilities keep any action-specific routes and details. Independent capabilities live in the Service; plans live in the top-level `plans` array.
- **Status changes:** Offerings use `status`. A Feed can change an Offering's status only when it is authorized to update that record and provides a source. A missing record must never be treated as retired.
- **Trust fields:** A Feed cannot establish trust by submitting fields such as `official: true`, `verified: true`, `quality_score`, or `domain_status`.

#### Collection time and change detection

The Feed body does not need `revision` or `generated_at`. After a successful fetch, ProviderList records the retrieval time and computes a fingerprint of the normalized Feed:

- If the content is unchanged, no update candidate is created.
- If the content changes, a diff is generated for validation and review.

The collector may use the `ETag` or `Last-Modified` response headers for conditional requests. On `304`, it reuses the existing content and updates the check time. These headers are optional fetch optimizations, not part of the Feed body. Provider-reported timestamps are not used to determine ordering or generate site update times.

## 3. Refresh

The following endpoint is proposed and has not been implemented:

```http
POST /api/v1/providers/{provider_id}/refresh
```

The request accepts only a registered Provider ID; it does not accept a URL, hostname, or callback address. The server reads the Feed URL from the reviewed subscription record.

`202 Accepted` means the job has been reliably queued. It does not mean the Feed has been fetched or published. Enqueue failures must return an error. The proposed status endpoint is:

```http
GET /api/v1/refresh-jobs/{job_id}
```

Possible states include `queued`, `fetching`, `validating`, `review_required`, `published`, `rejected`, and `failed`. Public status responses must not include internal review notes. Job IDs must be unguessable, or the endpoint must return only aggregate information.

### Fetch protections

Refresh must enforce per-Provider rate limits and global quotas, deduplication, cooldowns, and failure circuit breaking. Fetches are limited to HTTPS and the exact authorized host. Validate every redirect and DNS resolution; block private, loopback, and link-local addresses, as well as DNS rebinding. Set limits for response size, compression ratio, timeouts, and retries. Cross-host redirects should be disabled.

## 4. Direct Push

Push is optional and has not been implemented:

```http
PUT /api/v1/providers/{provider_id}/feed
Authorization: Bearer <PROVIDERLIST_PUSH_TOKEN>
Content-Type: application/vnd.providerlist.feed+json
Idempotency-Key: <unique-key>
```

Push credentials are scoped to a Provider, its permitted Services and fields, and an expiration time. Credentials are issued after domain and business-entity review. They are shown only once; the server stores a verifiable hash and supports rotation, revocation, and auditing. Domain verification does not replace request authentication.

The same idempotency key and content return the original result. Reusing a key with different content returns `409 Conflict`. Content identical to an already received Feed does not create another candidate. New submissions enter an isolated candidate area and can be merged only after validation and review; they cannot directly overwrite canonical data or static files. Reject oversized payloads and suspected secrets, user data, or inference credentials. `202` means accepted, not published.

## 5. Errors and publishing

Use a consistent error format:

```json
{ "error": { "code": "permission_denied", "message": "...", "request_id": "..." } }
```

| Operation | Success | Common errors |
|---|---|---|
| Claim | `202` | `400`, `409`, `429` |
| Verify challenge | `200` | `403`, `404`, `410`, `429` |
| Refresh | `202` | `404`, `409`, `429`, `503` |
| Push | `202` | `401`, `403`, `409`, `413`, `422`, `429` |
| Check status | `200` | `404`, `429` |

Errors should distinguish an unverified domain, insufficient permissions, an invalid or expired Feed, and a field conflict. Never expose credentials, tokens, or internal review notes. Do not use `pushed_successfully` to mean published.

Official Feeds and community PRs pass through the same gates: validate the Schema, permissions, field ownership, and conflicts. High-risk or conflicting changes require human review. Zero prices, bulk retirements, currency changes, and cross-domain endpoint changes also require review; an official source does not bypass these checks.

```text
Submit → Identity and permission checks → Schema and conflict checks → Human review (if needed)
       → Merge → Build and publish
```

## 6. Future extensions

Signatures, Webhooks, incremental notifications, SDK metadata, and automatic registration are outside the current Feed format. Design them separately if there is a concrete need. Feeds must not upload or execute code.

## 7. References

- [RFC 8615: Well-Known URIs](https://www.rfc-editor.org/rfc/rfc8615.html)
- [IANA Well-Known URI Registry](https://www.iana.org/assignments/well-known-uris)
- [Trust policy](../data/trust-policy.md)
- [Data policy](../data/data-policy.md)
