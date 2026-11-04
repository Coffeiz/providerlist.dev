# Pricing Data

This guide explains how to record and display prices. Field definitions are in the [source data schema](schema.md); billing units come from `@providerlist/shared/pricing/units`.

## Recording prices

- Record amounts, currency, units, and conditions only when supported by a source. Use `null` for an unknown price; use `"0"` only when the source confirms it is free. Amounts are decimal strings.
- Preserve the source currency and amount. Exchange conversions are for reference only and must not be used to infer or replace the original price.

## Price fields

Offerings and independent Service Capabilities store prices in `pricing`. Each group contains a currency and its rates:

```json
{
  "pricing": [
    {
      "currency": "USD",
      "rates": [
        { "metric": "input", "unit": "per_1m_tokens", "value": "3" },
        { "metric": "output", "unit": "per_1m_tokens", "value": "12" },
        { "metric": "cache_read", "ttl": "5min", "unit": "per_1m_tokens", "value": "0.5" }
      ]
    }
  ]
}
```

- `metric` is the charge, such as input, output, or cache read.
- `unit` is the billing unit for that rate. Use image, audio, or video units where applicable; do not record those prices as Token prices.
- `value` is the current price as a decimal string.

### Scope and tiers

- `deployment` is the deployment scope; `region` is the specific location. Omit either when the source does not say.
- Put other conditions, such as service level, in `conditions`. These apply to the whole price group and must be stated by the source.
- `context` is an input-Token price tier for an individual rate, for example `">0 & <=256000"`. If the source gives no exact boundaries, retain its wording rather than calculating a range.
- `ttl` distinguishes cache duration, such as `5min` or `1h`. Omit it if the source does not specify a duration.
- Add a metric to `unsupported_metrics` only when the source explicitly says it is unsupported. A missing price does not mean unsupported.
- Price-group order is for display only. Do not use it to determine which price applies. Leave overlapping conditions for review when the source does not explain how to resolve them.

`conditions` apply to a price group; `context` applies only to its rate. They are not interchangeable.

### Promotions and plans

`value` stores the current price. Add `list_value` only when the source gives an original price. Record a promotion period only when the source states it. Plan prices belong in `billing_options`; do not derive a Token price from a plan fee.

## Display

- Show at most three decimal places and remove trailing zeros. Show positive values below `0.0005` as `<0.001`; show confirmed free prices as “Free.”
- Display the billing unit with each price, and show its conditions when present. Do not add a condition label when none applies.
- Display formatting does not change source, public JSON, or calculation precision.
- Original-currency prices, reference conversions, and plan prices use `displayPriceAmount()` and `formatRule()` in `frontend/src/composables/format.ts`.
