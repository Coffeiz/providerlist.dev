# Model Types

Implementation: `packages/schema/src/model-types.ts`.

`model_type` is a Model's single primary category. It does not describe an API protocol, Provider service, or call method. Modalities and specifications are separate: modalities can have multiple input and output values, while context limits, output limits, and release dates come from the model developer.

Canonical Models use `id` as their directory identity and `name` as the developer-published name. They do not have a separate alias field. A Provider's actual call ID is stored on its Offering, which refers to the canonical Model through `model_ref`. Model reasoning support is `true` or `false`; documented reasoning levels may be an array. That array does not guarantee that every Route supports every level.

## Standard types

The standard types begin with Models.dev V2 and add `music`, `3d`, `world_model`, and `computer_use` when supported by official sources.

| `model_type` | Category | Description |
|---|---|---|
| `chat` | Chat | May accept text, image, or audio; record exact modalities from developer sources |
| `image` | Image generation | Generates or edits images |
| `video` | Video generation | Generates or processes video |
| `3d` | 3D generation | Generates 3D assets or scenes |
| `embedding` | Embeddings | Generates vector representations |
| `reranking` | Reranking | Reorders candidate content |
| `decision` | Decision / evaluation | Retains the category defined by the developer |
| `transcription` | Speech recognition | Converts speech or audio to text |
| `speech` | Speech generation | Generates speech or spoken responses |
| `realtime` | Real-time interaction | Describes continuous, real-time sessions |
| `music` | Music generation | Generates music |
| `world_model` | World model | Generates or simulates explorable, interactive digital worlds |
| `computer_use` | Computer use | Understands screens and operates computer interfaces through tools |

### Type and modality

- `model.type` is a single primary category; `modalities.input` and `modalities.output` may contain multiple values.
- Record modalities from developer sources. Prefer published MIME types; use categories such as `text`, `image`, `audio`, or `video` only when the source gives categories rather than MIME types.
- Omit unsupported-by-evidence values. Do not infer modalities from the primary type.
- Modalities are global Model facts. They belong in the Model registry, not on Provider Offerings. Provider API protocols and paths belong to the market's Endpoints.
- Model files contain developer specifications and intrinsic capabilities such as reasoning, reasoning levels, tool use, structured output, and sampling parameters. Provider data contains API addresses, Routes, and request-field mappings.

**A type classifies a Model; it does not determine its specifications or Provider access.**

### Open values and forward compatibility

Model types are open values. The Schema accepts an unrecognized string that meets the ID syntax rules. The release validator reports `unknown_model_type` as a warning; the site groups it under “Other” and preserves the original value. Never silently map an unknown type to `chat`.

IDs must match `^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)*$`. This permits values such as `chat` and upstream categories such as `vendor.chat`.

### Special categories

- **`decision`** retains the upstream decision/evaluation meaning. It does not imply that every decision API is an LLM.
- **`realtime`** describes an interaction pattern, not a single modality. A real-time model may take audio or video and return audio or text. `speech` means speech generation; `realtime` means a continuous session.
- **`music`** is separate from text-to-speech. MiniMax's [music generation API](https://platform.minimax.cn/docs/api-reference/music-generation) documents the model interface, and its [pricing overview](https://platform.minimax.cn/docs/pricing/overview#-5) lists per-track pricing. Retired models may remain in historical pricing but are not current supply.
- **`3d`** applies to developer-published models for 3D assets or scenes. Record input and output modalities separately. Post-processing such as rigging, animation retargeting, mesh editing, and format conversion does not make a model `3d` by itself.
- **`world_model`** applies to models that generate explorable or interactive digital worlds. Alibaba Cloud describes HappyOyster as a world model and identifies Adventure, Directing, and Acting modes; these models are therefore not classified as ordinary video generation just because they output video. World creation, real-time video streaming, and client interaction are Provider access capabilities. See the [HappyOyster overview](https://www.alibabacloud.com/help/en/model-studio/happyoyster-overview) and [guide](https://www.alibabacloud.com/help/en/model-studio/happyoyster-guide).
- **`computer_use`** applies to models whose primary purpose is to understand a screen and operate a desktop through computer interaction tools. Record modalities and API call details separately in Model and Provider data.

See the [source data structure](schema.md) and [media rules](media-operations.md) for related fields.
