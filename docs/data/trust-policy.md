# Trust Policy: Badges, Domains, and Brand Identity

> Source identity does not prove that data is correct.

## Separate trust questions

ProviderList keeps four questions separate:

| Question | Recorded by |
|---|---|
| Who supplied the data? | Source origin (`origin.kind`) |
| Who may change it? | Authorization scope on an `AuthorizedDomain` |
| What supports the claim? | Source and evidence records |
| When was it published? | `published_at` |

An official connection identifies the source only. Each field and its supporting source still require review.

## Public badges

| Badge | Meaning |
|---|---|
| Community maintained | ProviderList or a third party collected the data; the Provider may not be involved. |
| Officially connected | A verified domain has an explicit scope and has published at least one in-scope field through Feed or Push. This does not guarantee that every field is correct. |
| Connection issue / revoked | The source is unavailable or authorization was revoked. Keep historical attribution, but stop presenting the connection as current. |

The official badge requires all of the following: verified domain control, a defined scope, at least one published in-scope field from the official Feed or Push, and authorization that has not been revoked. Domain verification without a published field should display “Domain connected (no data published),” not the official badge.

The Provider-level badge is only a summary. Show the authorized domain, latest successful publication, and covered Services or Offerings. Mark uncovered data as community maintained and show field sources on Offering, pricing, and Route details. Do not imply that one Provider badge covers every Service or field. Coverage counts only published fields or Offerings from an authorized source; it does not certify the whole Provider.

## Domains and authorization

Keep these IDs distinct: `provider_id` (public entity), `authorized_domain_id` (controlled domain), `feed_subscription_id` (data source), and `endpoint_id` (inference API). A website and an inference API may use different domains, but their authorized relationship must be verifiable.

A domain owner does not automatically have permission to publish for every brand, subsidiary, Service, or Provider. Confirm new brands and delegated domains using reliable evidence, such as corporate records, official links, or verified contact channels. Do not let an arbitrary domain claim a known brand. A domain's loss, expiry, DNS takeover, or delegation change requires immediate suspension of authorization. Keep historical source records, but do not continue an official-connection claim. If a brand or domain moves, verify the new authorization; do not erase the old attribution. For CDN or object-storage domains, verify both domain control and delegation.

## Domain verification

Prefer an HTTPS file challenge; DNS TXT is an alternative:

```text
https://<hostname>/.well-known/providerlist-challenge/<claim_id>
```

Use a high-entropy `claim_id` and short-lived, single-use `nonce`. Store only the challenge hash and expiry. ProviderList must fetch and verify the challenge itself, including TLS certificate, hostname, contents or DNS record, and expiry; mark it consumed and bind success to a specific Provider and scope. A webhook callback or client-reported success is not proof.

The review flow is: select or propose a Provider, submit the exact hostname and requested Service/Offering scope, manually verify new brand or delegated-domain relationships, issue the challenge, verify it from the ProviderList service, then register the allowed Feed URL and field scope. Authorization may have an expiry or review interval. Routine Pulls do not require a new domain challenge each time; Push requires a separate write credential.

Rate-limit claims and protect against replay, expiry, look-alike hostnames, brand impersonation, and scopes that are too broad. Record binding periods and credential rotation rules in operations guidance.

Do not use `Origin`, `Referer`, CORS, or a server's egress IP as proof of ownership. These can be absent, forged, or unstable; TLS usually proves the server's identity to the client, not the requester's domain ownership. The supported patterns are ProviderList pulling a public JSON feed from a verified domain, or authenticated Push using a credential or registered signing key issued after domain verification.

## Feed permissions

An official Feed may update only its authorized Provider, Services, Offerings, and fields. It cannot set badges, verification decisions, review results, source identity, or Git publication metadata. Reject or ignore self-asserted fields such as `official`, `verified`, `quality_score`, or `domain_status`.

A Provider may publish its own service Offerings, but not another Provider's Offerings or canonical Model facts. Model facts may be submitted as evidence for review; they cannot change another Provider's prices or trust status.

Omitting a Service Capability or Offering does not delete or retire it. Removal requires an explicit event within the authorized scope. Partial coverage never means that missing entries should be deleted. Field-level updates change only submitted fields; preserve trusted values and their source attribution for omitted fields.

## Conflicts, failures, and revocation

Officially claimed data may still be corrected by third-party or human evidence. If official data conflicts with reliable documentation, expose the conflict or fall back to the last trusted value. Do not let an official badge override evidence. For overlapping official sources, define explicit primary/backup or regional precedence; never use last-write-wins.

| Event | Response |
|---|---|
| Feed returns 404 or a network error | Keep last trusted data, mark the connection stale, and retry or notify. |
| Domain challenge fails or ownership is disputed | Pause write access; community review may continue. |
| Domain control is lost or delegation ends | Revoke domain authorization, Push credentials, and queued unpublished submissions; retain history. |
| Push credential leaks | Revoke or rotate it and freeze affected submissions for review. |
| Same revision is submitted with different content | Reject with `409`, audit it, and require a new revision. |
| A full Feed contains fewer Offerings | Record a scoped missing event; do not automatically retire Offerings. |
| Suspicious zero-price or bulk-retirement change | Quarantine for review, preserve the live version, and allow rollback. |
| Source has not updated for a long time | Show that it is stale and how old it is; do not call it recently updated. |

When authorization expires or is revoked, stop accepting Feed or Refresh submissions and remove or mark the official badge as expired. Revoked authorization must not continue to display current endorsement.

## Public claims and source identity

Official data means “declared by an official source.” Describe a field as independently verified only after it has been checked independently. Domain verification does not verify prices, and accepting a Push does not mean its data is live.

Field origins may use `official_feed`, `official_push`, `official_doc`, `upstream`, or `community`, with separate references to the authorized domain and submission. Origin, authorization scope, verification, and publication time are distinct facts.

## Provider logos

Reviewed Provider SVGs are stored in `frontend/public/logos/providers/` and shipped with the static frontend. `frontend/public/logos/manifest.json` records each asset's SHA-256, source, and layout. The `providerlist-logos-v1` set contains 232 Provider marks from models.dev, official sites, LobeHub Icons, alias mappings, and a few custom drawings. Five SVGs embed raster images; the rest are vector. Imported artwork is preserved while paths and URLs are adjusted.

Logos remain the property of their owners. The MIT license on the models.dev repository does not grant rights to its trademarks or artwork. Use logos only to identify Providers; do not imply endorsement or partnership, distort proportions, or reuse them as a separate brand. Monochrome logos may use a registered identity color; preserve official multicolor artwork. Brand colors apply to logos only, not controls or status indicators.

`frontend/src/data/provider-logo-brand-colors.json` records sourced display references for monochrome marks. Prefer an official brand guide; if no official color is published, use the current logo's main color as an approximate reference and do not call it an official value. Tencent Cloud and Volcano Engine use their current full-color official marks without small wordmarks. Sources: [Tencent Cloud](https://www.tencentcloud.com/) via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tencent_Cloud_Logo.svg), and Volcano Engine's [current logo asset](https://lf3-static.bytednsdoc.com/obj/eden-cn/shayvw_lmjsvc/ljhwZthlaukjlkulzlp/logo-theme-light.svg).

| Provider | Display treatment | Basis |
|---|---|---|
| Google | Official multicolor G; preserve original colors | [Brand guidance](https://partnermarketinghub.withgoogle.com/brands/google/branding-guidelines/how-to-show-googles-brand/) and [G logo update](https://blog.google/company-news/inside-google/company-announcements/gradient-g-logo-design/) |
| DeepSeek | Blue `#4D6BFE` | User-selected brand blue and [official site](https://www.deepseek.com/) |
| MiniMax | Red `#FF6452` | One of the colors in the [official brand guide](https://www.minimax.cn/brand-vi) |
| Alibaba Cloud Model Studio | Orange `#FF6A00` | User-selected Alibaba orange and [Alibaba logo resources](https://www.alibabagroup.com/en-US/resource-logos) |
| Ant Ling | Blue reference | [Ant Group site](https://www.antgroup.com/) |
| Volcano Engine | Official blue-and-teal symbol; omit wordmark | [Official logo asset](https://lf3-static.bytednsdoc.com/obj/eden-cn/shayvw_lmjsvc/ljhwZthlaukjlkulzlp/logo-theme-light.svg) |
| Xiaomi MiMo | Orange reference | [Xiaomi site](https://www.mi.com/) |
| StepFun, Moonshot AI, and Zhipu AI / Z.AI | Keep monochrome; do not recolor | Existing marks are monochrome |
| Tencent Cloud TokenHub | Official multicolor symbol; omit wordmark | [Tencent Cloud logo source](https://commons.wikimedia.org/wiki/File:Tencent_Cloud_Logo.svg) |

“Reference” colors are for identification only, not claims about official brand-guide values. Recheck the assets and color map if a Provider updates its logo or brand guide. `provider.logo` must point to a local `/logos/providers/{provider_id}.svg` asset. The frontend rejects other paths and loads logos through `<img>`, not inline SVG or HTML; without a valid logo it shows an initial. Example IDs such as `example-ai` and `demo-cloud` have no logo and use that placeholder.
