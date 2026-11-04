# Media, Constraints, Parameters, and Async Tasks

This guide describes inputs, outputs, parameters, and execution for independent market-level Service Capabilities. Model Offerings do not store Operations, API parameters, or call Routes; market API access is recorded in Endpoints. See the [source data schema](schema.md) and [pricing guide](pricing.md).

Implementation: `packages/shared/src/capabilities/media.ts` and `packages/shared/src/capabilities/constraints.ts`.

## Capability fields

| Field | Purpose |
|---|---|
| `input` | Inputs, required state, quantity, and media limits |
| `output` | Output type, media limits, and artifact format |
| `parameters` | Parameter types, choices, ranges, defaults, and Route mappings |
| `constraints` | Rules that limit combinations of parameters or inputs |
| `execution` | Synchronous, streaming, asynchronous, or bidirectional real-time behavior |
| `routes` | Protocol-specific calls and their Endpoints |

Some limits depend on other values. For example, 1080p may be available only for a 10-second video. Record that relationship in `constraints`; otherwise a UI or SDK could generate an invalid request.

## Inputs and outputs

### Inputs

An input may include:

| Field | Meaning |
|---|---|
| `name` | Input name, such as `prompt`, `first_frame`, or `audio_file` |
| `kind` | Type such as `text`, `image`, `video`, `audio`, `file`, `structured`, `3d`, or `embedding`; preserve unknown values |
| `required` | Whether the input is required; conditional requirements belong in a constraint |
| `cardinality` | Allowed number of resources, such as reference images |
| `media` | MIME type, size, duration, dimensions, or transport limits |

Quantity limits and per-resource media limits are separate. For example, “up to 8 images” and “each image up to 10 MB” require separate values.

### Media limits

`MediaSpec` may contain `mime_types`, `max_bytes`, `duration_seconds`, `dimensions` (width, height, pixels, and aspect ratio), `fps`, `sample_rate_hz`, `channels`, `codec`, `container`, and `transports`.

- Keep input and output media limits separate. An input limit does not imply the same output limit.
- Missing `mime_types` means the formats were not disclosed; it does not mean every format is accepted.
- Omit unknown limits or use `null` where allowed. `max_bytes: 0` means an explicit zero limit.
- Use `sample_rate_hz` and `channels` for audio, and `fps` for video.
- Input and output may support different `transports`.
- Unknown does not mean unlimited; show “unknown” or “not disclosed,” not “unlimited.”

### Outputs

An output records its `kind`, output `media`, artifact form in `artifact`, whether it is `streaming`, and any structured `fields`. Output kinds are an open set; preserve unknown values. If `artifact.expires_in_seconds` or `streaming` is unknown, use `null` where allowed rather than guessing a default or expiry.

## Parameters and constraints

### Parameters

Parameters may define a name, type, required state, `nullable`, `enum` or `min` / `max` / `step`, `default`, and `route_mappings`.

- Set `default` only when a source explicitly documents it.
- `route_mappings` records where the value appears in a request, such as a JSON Pointer, form field, query parameter, or header.

### Constraints

`ConstraintRule` uses a finite expression tree to describe valid combinations, for example: “when resolution is 1080p, duration must be 10 seconds.” Supported operators are:

```text
all / any / not
eq / in / lt / lte / gt / gte / requires / excludes
```

References must point to a parameter or input declared by the same Capability. Otherwise validation fails. Constraint IDs must be unique within that Capability.

Do not use scripts, arbitrary executable regular expressions, circular dependencies, or rules that can never be satisfied. A missing field does not satisfy a condition. The UI and read-only SDK should use the same rules to reject invalid combinations and disable unavailable choices.

Constraints determine whether a request is valid. `PriceRule.conditions` determine which price applies. Keep their fields and purposes separate so a pricing change cannot change request validity.

## Execution and async tasks

| `execution.mode` | Common uses | Record |
|---|---|---|
| `sync` | Embeddings, short text, some image tasks | Request and response mappings |
| `stream` | LLMs, ASR, streaming TTS | Stream protocol, events, and completion signal |
| `async_job` | Video, Batch, some image tasks | Routes to create, query, fetch results, and optionally cancel a task |
| `bidirectional_realtime` | Live conversation or audio | Connection, frame encoding, flow control, and session limits |

For async tasks, record the task ID in the creation response, status and result paths, and a cancellation path or status mapping when documented. Use `null` for unknown cancellation support or polling intervals. Record temporary artifact URL expiry and download limits only when published. Never store real user-generated artifact URLs in static data.

## Data and validation

These are common field examples, not a required checklist. Record only facts supported by the Provider's sources.

| Capability | Common inputs and limits |
|---|---|
| `web_search` | Query, region, language, citations, and result count |
| `web_fetch`, `file_storage`, `batch` | URL, file limits, retention, concurrency, and task polling |

`packages/schema/src/validation.ts` checks that constraint references exist. `packages/shared` evaluates parameter values, required inputs, combinations, and valid choices. Unknown values must not be treated as allowed, and invalid combinations must not be offered as selectable options.
