import test from 'node:test';
import assert from 'node:assert/strict';
import { validateProviderCollectionIR } from '../../ir/collector-validation.test-utils.ts';
import type { CapturedDocument } from '../document-set.ts';
import { officialDocsParser } from '../official-provider-docs.ts';
import { xaiCollectorConfig, xaiParser } from './collect.ts';
import { assertOfficialProviderObservationAdapter } from '../official-provider-entrypoint-test.ts';

function fixtures(): CapturedDocument[] {
  const bodies: Record<string, string> = {
    'xai-models': '# Models\nOfficial model guide.',
    'xai-pricing': [
      '# Pricing\nAll prices are in USD.',
      '### Text API Pricing',
      '| Model | Context | Input / 1M tokens | Cached input / 1M tokens | Output / 1M tokens |',
      '|---|---:|---:|---:|---:|',
      '| grok-4.7 (< 200k prompt tokens) | 500k | $2.00 | $0.50 | $6.00 |',
      '| grok-4.7 (≥ 200k prompt tokens) | 500k | $4.00 | $1.00 | $12.00 |',
      '| grok-4.6 (< 200k prompt tokens) | 500k | $2.00 | $0.50 | $6.00 |',
      '| grok-4.6 (≥ 200k prompt tokens) | 500k | $4.00 | $1.00 | $12.00 |',
      '| grok-4.5 (< 200k prompt tokens) | 500k | $2.00 | $0.30 | $6.00 |',
      '| grok-4.20-0309-reasoning (< 200k prompt tokens) | 1M | $1.25 | $0.20 | $2.50 |',
      '*Prices shown per million tokens. Requests whose prompt reaches the threshold are billed at the higher rate for all tokens.*',
      '### Imagine Pricing',
      '| Model | Cost |', '|---|---:|', '| grok-imagine-image-2.0 | $0.04 / image |', '| grok-imagine-video-1.5 | $0.080 / sec |',
      '### Voice Pricing', '| Mode | Cost |', '|---|---|', '| Speech to Speech (grok-voice-2.0) — Deprecated | $0.08 / min ($4.80 / hr)<br />$0.004 / text input |', '| Speech to Speech (grok-voice-3.0) | $0.08 / min ($4.80 / hr)<br />$0.004 / text input |', '| Speech to Text | $0.10 / hr (REST), $0.20 / hr (Streaming) |', '| Text to Speech | $15.00 / 1M chars |',
      '## Batch API Pricing', '**20% off standard rates**', '- grok-4.20-0309-reasoning',
      '## Priority Processing Pricing', 'Priority requests are billed at a **2x** premium over standard rates.',
      '## Files and Collections Pricing', '| Resource | Rate |', '|---|---:|', '| File storage | $0.025 / GiB / day |', '| Collection storage | $0.10 / GiB / day |', '| File downloads | $0.20 / GiB downloaded |', '| Collection downloads | $0.20 / GiB downloaded |',
      '## US Regional Endpoint Pricing', '| | Global endpoint | US regional endpoint |', '|---|---|---|', '| Base URL | `https://api.x.ai/v1` | `https://us.api.x.ai/v1` |', '| Token pricing | Standard rates | 1.1x standard rates |', '| Models | All models available to your team | Currently `grok-4.7` and `grok-4.6` only |',
    ].join('\n'),
    'xai-chat-completions': 'POST\n/v1/chat/completions',
    'xai-responses': 'POST\n/v1/responses',
    'xai-images-api': 'POST\n/v1/images/generations\n/v1/images/edits\nGET /v1/images/{request_id}',
    'xai-videos-api': 'POST\n/v1/videos/generations',
    'xai-batch-api': [
      'POST /v1/batches', 'POST /v1/batches/{batch_id}/requests', 'GET /v1/batches/{batch_id}/results',
      'Each JSONL line uses content type application/jsonl. Maximum file size is **200 MB**.',
      '## Step 1: Create a batch',
      '```bash', `curl -X POST https://api.x.ai/v1/batches -d '{"name":"feedback"}'`, '```',
      '```json', '{"name":"customer_feedback_analysis"}', '```',
      'The batch response includes batch.batch_id and batch.state.num_requests.',
      '## Step 2: Add requests',
      '```json', '{"batch_requests":[{"batch_request_id":"feedback_001","batch_request":{"responses":{"input":[{"role":"user","content":"hello"}],"model":"grok-4.3"}}}]}', '```',
      '```json', '{"name":"sentiment_analysis","input_file_id":"file-abc123"}', '```',
      '## Step 3: Monitor batch progress', '### Understanding batch states', '| Counter | Description |', '|---|---|', '| `num_requests` | Total requests |', '| `num_pending` | Pending requests |',
      'The batch.state object includes num_success and num_error.',
      '## Step 4: Retrieve results',
      'Each result is linked by result.batch_request_id. Results are in page.results; use page.pagination_token for the next page.',
    ].join('\n'),
    'xai-batches-api-reference': [
      '## Create a new batch', '## Request Body', 'name', 'string', 'required',
      '## Response Body', '```json', '{"batch_id":"batch_123","name":"My New Batch","create_time":"2025-11-11","expire_time":"2025-11-12","create_api_key_id":"key","state":{"num_requests":0,"num_pending":0,"num_success":0,"num_error":0,"num_cancelled":0}}', '```',
      '## List batch requests', '```json', '{"batch_request_metadata":[{"batch_request_id":"req_1","endpoint":"xai_api.Chat/GetCompletion","model":"grok-4","state":"succeeded"}],"pagination_token":null}', '```',
      '## Get processing results', '```json', '{"results":[{"batch_request_id":"req_1","batch_result":{"response":{"chat_get_completion":{"id":"response_1","model":"grok-4","choices":[]}}}}],"pagination_token":null}', '```',
    ].join('\n'),
    'xai-files-api': [
      '# Managing Files', '## Uploading Files',
      '```pythonRequests', 'files = {"file": f}', 'data = {"purpose": "assistants"}', '```',
      '## Upload with Expiration (TTL)',
      '`expires_after` is set in seconds, measured from upload time. It must be between `3600` (1 hour) and `2592000` (30 days), inclusive. Omit the field to keep the file permanently.',
      '## Listing Files', '### Available Options',
      '* **`limit`**: Maximum number of files to return. If not specified, uses the server default of 100. Maximum is 100.',
      '* **`order`**: Sort order. Either "asc" or "desc". Defaults to "desc".',
      '* **`sort_by`**: Field to sort by. Options: "created_at", "filename", or "size". Defaults to "filename".',
      '* **`pagination_token`**: Pass the `pagination_token` returned by the previous response to fetch the next page. Omit it for the first page.',
      'When more files remain, the response includes a `pagination_token`. On the last page it is `null` or empty.',
      'for file in files.get("data", []):', 'all_files.extend(response.get("data", []))', 'page.pagination_token',
      'file_id = "file-abc123"',
      '## Deleting Files', 'print("Deleted: " + deleteResponse.deleted)', 'print("File ID: " + deleteResponse.id)',
      '## Getting File Content', 'Download the raw bytes of an uploaded file. The endpoint streams the response.',
      '## The File Object',
      '| Field | Type | Description |', '| --- | --- | --- |',
      '| `id` | string | Unique file identifier. |', '| `filename` | string | Original filename. |',
      '| `bytes` | integer | File size in bytes. |', '| `created_at` | integer | Upload time as a Unix timestamp. |',
      '| `expires_at` | integer or null | Unix timestamp at which the file will be deleted. |',
      '| `object` | string | Always `file`. |', '| `purpose` | string | Echoes the purpose value. |',
    ].join('\n'),
    'xai-collections-api': 'Management API: https://management-api.x.ai/v1/\nPOST /v1/collections\nGET /v1/collections',
    'xai-speech-to-text': 'The Speech to Text API transcribes audio files into text. The default model is grok-voice-transcribe-2.0.',
    'xai-speech-to-text-guide': [
      '# Speech to Text',
      'Transcribe audio files into text with a single API call, or stream audio in real time over WebSocket.',
      '## Quick Start', 'POST https://api.x.ai/v1/stt',
      '## Request Body',
      '| Parameter | Type | Default | Required | Description |', '|---|---|---|---|---|',
      '| `file` | file | | ✓† | Audio file to transcribe. Max 500 MB. Must be the last field. |',
      '| `url` | string | | ✓† | URL of an audio file to download and transcribe (server-side). |',
      '| `model` | string | `grok-voice-transcribe-2.0` | | Model to use. |',
      '| `audio_format` | string | | | Raw audio format: `pcm`, `mulaw`, `alaw`. |',
      '| `sample_rate` | integer | | | Sample rate in Hz. Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`. |',
      '| `language` | string | | | Language code. |',
      '| `format` | boolean | `false` | | Enable inverse text normalization. |',
      '| `multichannel` | boolean | `false` | | Transcribe channels independently. |',
      '| `channels` | integer | | | Number of channels from 2 to 8. |',
      '| `diarize` | boolean | `false` | | Enable speaker labels. |',
      '| `keyterm` | string | | | Bias transcription to this term. |',
      '| `filler_words` | boolean | `false` | | Include filler words. |',
      '| `vad_threshold` | number | `0.5` | | Range 0.0–1.0. |',
      '## Response',
      '| Field | Type | Description |', '|---|---|---|',
      '| `text` | string | Full transcript. |', '| `language` | string | Detected language. |',
      '| `duration` | number | Audio duration in seconds. |', '| `words` | array | Word-level segments. |',
      '| `channels` | array | Per-channel transcripts. |',
      '## Streaming Speech-to-Text (WebSocket)', 'The client streams raw audio as binary WebSocket frames.',
      '### Query Parameters',
      '| Parameter | Type | Default | Description |', '|---|---|---|---|',
      '| `sample_rate` | integer | `16000` | Audio sample rate in Hz. Supported: `8000`, `16000`, `22050`, `24000`, `44100`, `48000`. |',
      '| `encoding` | string | `pcm` | Encoding: `pcm`, `mulaw`, `alaw`, or `opus`. |',
      '| `interim_results` | boolean | `false` | Emit partial transcripts. |',
      '| `endpointing` | integer | `400` | Silence duration in milliseconds. Range 0–5000. |',
      '| `language` | string | | Language code. |', '| `format` | boolean | `false` | Normalize numbers and units. |',
      '| `model` | string | `grok-voice-transcribe-2.0` | Model to use. |',
      '| `diarize` | boolean | | Include speaker labels. |', '| `filler_words` | boolean | `false` | Include filler words. |',
      '| `multichannel` | boolean | `false` | Per-channel transcription. |', '| `channels` | integer | `1` | Number of channels, max 8. |',
      '| `keyterm` | string | | Bias transcription to this term. |',
      '| `smart_turn` | number | | End-of-turn threshold, range 0.0–1.0. |',
      '| `smart_turn_timeout` | integer | | Maximum silence duration. Range 1–5000. |',
      'event.type == "transcript.created"', 'event.type == "transcript.partial"', 'event.type == "transcript.done"',
      'event["text"]', 'event["is_final"]', 'event["duration"]', 'event["speech_final"]',
      'event["chunk_final"]', 'event["channel_index"]', 'event["end_of_turn_confidence"]',
    ].join('\n'),
    'xai-regions': 'US regional base URL https://us.api.x.ai/v1. Models: grok-4.7 and grok-4.6 only.',
    'xai-voice': 'wss://api.x.ai/v1/realtime?model=grok-voice-latest\nPOST https://api.x.ai/v1/tts\nPOST https://api.x.ai/v1/stt',
    'xai-imagine': '# Imagine',
    'xai-web-search': [
      '# Web Search', '## Basic Usage', 'OpenAI Responses API',
      'response = client.responses.create(',
      '"input": [{"role":"user","content":"What is SpaceXSI?"}]',
      '"type": "web_search"', 'print(response)', 'print(response.citations)',
      '## Web Search Parameters', '`allowed_domains` (max 5)', '`excluded_domains` (max 5)',
      'allowed_domains cannot be set together with excluded_domains.',
      '`enable_image_understanding`', '`enable_image_search`',
    ].join('\n'),
    'xai-x-search': [
      '# X Search', '## Basic Usage', 'Responses API',
      '"input": [{"role":"user","content":"What are people saying about SpaceX on X?"}]',
      '"type": "x_search"',
      '## X Search Parameters',
      '`allowed_x_handles`', '`excluded_x_handles`', '`from_date`', '`to_date`',
      '`enable_image_understanding`', '`enable_video_understanding`',
      'Defaults to `false`.',
      'Each call appears in the response output as a `custom_tool_call` item named after the function.',
      '`usage.server_side_tool_usage_details`', '`x_search_calls`', '`x_posts_fetched`', '`x_users_fetched`',
      'The model answers with citations.',
    ].join('\n'),
    'xai-code-execution': [
      '# Code Execution Tool',
      '"type": "code_interpreter"',
      'input: [{"role":"user","content":"Calculate 2 + 2"}]',
    ].join('\n'),
    'xai-collections-search': [
      '# Collections Search Tool', 'OpenAI Responses API | `file_search`',
      '"type": "file_search"', '"vector_store_ids": ["collection_123"]', '"max_num_results": 10',
      '"role": "user"', '"content": "Search these documents"',
    ].join('\n'),
    'xai-tool-streaming-sync': '## Accessing Tool Outputs\n"collections_search" | "file_search" | "file_search_call.results"\n"web_search" | "web_search_call.action.sources"\n`code_interpreter_call.outputs`\nFinal Response text',
  };
  const now = '2026-10-26T00:00:00.000Z';
  return xaiCollectorConfig.sources.map((source, index) => {
    const body = bodies[source.id] ?? `Official ${source.id} reference.`;
    return {
      source,
      body,
      metadata: {
        source_id: source.id, source_name: source.name, request_url: source.url, retrieved_at: now,
        http_status: 200, content_type: 'text/markdown', etag: null, last_modified: null,
        content_hash: `sha256:${String(index + 1).padStart(64, '0')}`, byte_length: body.length,
        collector_version: 'test', body_file: `${source.id}.body`,
      },
    } as CapturedDocument;
  });
}

function mappedFixture() {
  const documents = fixtures();
  const facts = officialDocsParser.sourceGapFacts(documents, xaiCollectorConfig);
  const baseIR = officialDocsParser.toCollectionIR('xai', documents, facts);
  return { documents, ir: xaiParser.mapXaiProviderFacts(documents, baseIR) };
}

test('xAI API catalog parser never calls the credential-scoped Models API', () => {
  assertOfficialProviderObservationAdapter(xaiCollectorConfig, 'grok-4.7');
  assert.equal(xaiCollectorConfig.sources.find(({ id }) => id === 'xai-models-api')?.access_scope, 'account_scoped');
});

test('xAI parser collects exact priced model IDs, native USD units, threshold pricing and regional endpoint prices', () => {
  const { documents, ir } = mappedFixture();
  const service = ir.services[0]!;
  const codeExecution = service.capabilities.find(({ kind }) => kind.value === 'code_execution')?.operations[0];
  const webSearch = service.capabilities.find(({ kind }) => kind.value === 'web_search')?.operations[0];
  const fileSearch = service.capabilities.find(({ kind }) => kind.value === 'file_search')?.operations[0];
  const xSearch = service.capabilities.find(({ kind }) => kind.value === 'x_search')?.operations[0];
  assert.deepEqual(codeExecution?.input?.value.map(({ name, kind }) => [name, kind]), [['input[].content', 'text']]);
  assert.deepEqual(codeExecution?.parameters?.value.map(({ name, enum: values }) => [name, values]), [['tools[].type', ['code_interpreter']]]);
  assert.ok(codeExecution?.output?.value[0]?.fields?.includes('code_interpreter_call.outputs'));
  assert.deepEqual(webSearch?.input?.value.map(({ name, kind, required }) => [name, kind, required]), [['input[].content', 'text', true]]);
  const webSearchParameters = new Map(webSearch?.parameters?.value.map((parameter) => [parameter.name, parameter]));
  assert.deepEqual(webSearchParameters.get('tools[].type')?.enum, ['web_search']);
  for (const [name, type, mapping] of [
    ['tools[].filters.allowed_domains[]', 'array', 'body.tools[].filters.allowed_domains[]'],
    ['tools[].filters.excluded_domains[]', 'array', 'body.tools[].filters.excluded_domains[]'],
    ['tools[].enable_image_understanding', 'boolean', 'body.tools[].enable_image_understanding'],
    ['tools[].enable_image_search', 'boolean', 'body.tools[].enable_image_search'],
  ] as const) {
    assert.equal(webSearchParameters.get(name)?.type, type);
    assert.deepEqual(webSearchParameters.get(name)?.route_mappings, [mapping]);
  }
  assert.equal(webSearchParameters.get('tools[].filters.allowed_domains[]')?.description, undefined);
  assert.equal(webSearchParameters.get('tools[].filters.excluded_domains[]')?.description, undefined);
  assert.ok(webSearchParameters.get('include[]')?.enum?.includes('web_search_call.action.sources'));
  assert.ok(webSearch?.output?.value[0]?.fields?.includes('response.output[].type=web_search_call'));
  assert.ok(webSearch?.output?.value[0]?.fields?.includes('response.output_text'));
  assert.ok(webSearch?.output?.value[0]?.fields?.includes('response.citations[]'));
  assert.ok(webSearch?.output?.value[0]?.fields?.includes('response.output[].action.sources[]'));
  assert.ok(webSearch?.parameters?.value.every((parameter) => !/[\u3400-\u9fff]/u.test(parameter.description ?? '')));
  assert.ok(webSearch?.input?.value.every(({ description }) => !/[\u3400-\u9fff]/u.test(description ?? '')));
  assert.deepEqual(fileSearch?.input?.value.map(({ name, kind }) => [name, kind]), [['input[].content', 'text']]);
  assert.ok(fileSearch?.parameters?.value.some(({ name, required }) => name === 'tools[].vector_store_ids[]' && required));
  assert.ok(fileSearch?.parameters?.value.some(({ name, type }) => name === 'tools[].max_num_results' && type === 'integer'));
  assert.ok(fileSearch?.parameters?.value.some(({ name, enum: values }) => name === 'include[]' && values?.includes('file_search_call.results')));
  assert.ok(fileSearch?.output?.value[0]?.fields?.includes('file_search_call.results[]'));
  assert.deepEqual(xSearch?.input?.value.map(({ name, kind, required }) => [name, kind, required]), [['input[].content', 'text', true]]);
  const xSearchParameters = new Map(xSearch?.parameters?.value.map((parameter) => [parameter.name, parameter]));
  assert.deepEqual(xSearchParameters.get('tools[].type')?.enum, ['x_search']);
  for (const [name, type] of [
    ['tools[].allowed_x_handles', 'array'], ['tools[].excluded_x_handles', 'array'],
    ['tools[].from_date', 'string'], ['tools[].to_date', 'string'],
    ['tools[].enable_image_understanding', 'boolean'], ['tools[].enable_video_understanding', 'boolean'],
  ] as const) assert.equal(xSearchParameters.get(name)?.type, type);
  assert.equal(xSearchParameters.get('tools[].enable_image_understanding')?.default, false);
  assert.ok(xSearch?.parameters?.value.every((parameter) => !/[\u3400-\u9fff]/u.test(parameter.description ?? '')));
  assert.ok(xSearch?.output?.value[0]?.fields?.includes('response.output[].type=custom_tool_call'));
  assert.ok(xSearch?.output?.value[0]?.fields?.includes('response.output_text'));
  assert.ok(xSearch?.output?.value[0]?.fields?.includes('usage.server_side_tool_usage_details.x_posts_fetched'));
  assert.ok(xSearch?.output?.value[0]?.fields?.includes('usage.server_side_tool_usage_details.x_users_fetched'));
  assert.ok(xSearch?.output?.value[0]?.fields?.includes('citations[]'));
  const offerings = new Map(service.offerings.map((offering) => [offering.provider_model_id.value, offering]));
  assert.ok(offerings.has('grok-4.7'));
  assert.ok(offerings.has('grok-4.20-0309-reasoning'));
  assert.ok(offerings.has('grok-imagine-image-2.0'));
  assert.ok(offerings.has('grok-imagine-video-1.5'));
  assert.ok(offerings.has('grok-voice-3.0'));
  const grok47Rules = offerings.get('grok-4.7')?.prices[0]?.rules.value ?? [];
  assert.equal(grok47Rules[0]?.rate_items.find(({ metric }) => metric === 'input')?.amount_decimal, '2.00');
  assert.equal(grok47Rules[1]?.rate_items.find(({ metric }) => metric === 'input')?.amount_decimal, '4.00');
  assert.ok(grok47Rules.some(({ conditions, rate_items }) => JSON.stringify(conditions).includes('United States') && rate_items.find(({ metric }) => metric === 'input')?.amount_decimal === '2.2'));
  assert.ok(grok47Rules.some(({ conditions, rate_items }) => JSON.stringify(conditions).includes('priority') && rate_items.find(({ metric }) => metric === 'input')?.amount_decimal === '4'));
  const discounted = offerings.get('grok-4.20-0309-reasoning')?.prices[0]?.rules.value ?? [];
  assert.ok(discounted.some(({ conditions, rate_items }) => JSON.stringify(conditions).includes('batch') && rate_items.find(({ metric }) => metric === 'input')?.amount_decimal === '1'));
  assert.deepEqual(service.endpoints.map(({ id, base_url }) => [id.value, base_url.value]), [
    ['global', 'https://api.x.ai/v1'], ['global-wss', 'https://api.x.ai/v1'], ['us-regional', 'https://us.api.x.ai/v1'], ['management', 'https://management-api.x.ai/v1'],
  ]);
  assert.ok(ir.source_refs.includes('xai-collections-search'));
  assert.deepEqual(validateProviderCollectionIR(ir, documents.map(({ metadata }) => metadata)), []);
});

test('xAI records batch, file and voice API capabilities while leaving non-public API plans undisclosed', () => {
  const { ir } = mappedFixture();
  const service = ir.services[0]!;
  const capabilities = new Map(service.capabilities.map((capability) => [capability.id.value, capability]));
  assert.deepEqual([...capabilities.keys()].sort(), ['batch-processing', 'code-execution', 'collection-management', 'collections-file-search', 'file-storage', 'speech-to-text', 'text-to-speech', 'web-search', 'x-search']);
  const batch = capabilities.get('batch-processing')?.operations[0];
  assert.ok(batch?.routes.some(({ path_template }) => path_template.value === '/batches/{batch_id}/requests'));
  assert.ok(capabilities.get('batch-processing')?.operations[0]?.routes.some(({ method, path_template }) => method.value === 'GET' && path_template.value === '/batches'));
  assert.ok(batch?.input?.value.some(({ name, kind, required }) => name === 'batch_requests' && kind === 'structured' && required));
  assert.ok(batch?.input?.value.some(({ name, kind }) => name === 'input_file_id' && kind === 'file'));
  assert.equal(batch?.input?.value.find(({ name }) => name === 'input_file_id')?.media?.max_bytes, 200 * 1024 * 1024);
  assert.deepEqual(batch?.input?.value.find(({ name }) => name === 'input_file_id')?.media?.mime_types, ['application/jsonl']);
  assert.ok(batch?.parameters?.value.some(({ name, type }) => name === 'name' && type === 'string'));
  assert.ok(batch?.parameters?.value.some(({ name, type }) => name === 'batch_requests' && type === 'array'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('batch_id'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('results'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('pagination_token'));
  const files = capabilities.get('file-storage')?.operations[0];
  assert.ok(files?.input?.value.some(({ name, kind, required }) => name === 'file' && kind === 'file' && required));
  assert.ok(files?.output?.value.some(({ kind, fields }) => kind === 'structured' && ['id', 'filename', 'bytes', 'created_at', 'expires_at', 'object', 'purpose', 'data[]', 'pagination_token', 'deleted'].every((field) => fields?.includes(field))), 'File metadata, list, and delete response fields must be extracted.');
  assert.ok(files?.output?.value.some(({ kind, artifact }) => kind === 'file' && artifact?.kind === 'binary'));
  const fileParameters = new Map(files?.parameters?.value.map((parameter) => [parameter.name, parameter]));
  assert.deepEqual(fileParameters.get('limit')?.max, 100);
  assert.deepEqual(fileParameters.get('limit')?.default, 100);
  assert.deepEqual(fileParameters.get('order')?.enum, ['asc', 'desc']);
  assert.deepEqual(fileParameters.get('order')?.default, 'desc');
  assert.deepEqual(fileParameters.get('sort_by')?.enum, ['created_at', 'filename', 'size']);
  assert.deepEqual(fileParameters.get('sort_by')?.default, 'filename');
  assert.deepEqual([fileParameters.get('expires_after')?.min, fileParameters.get('expires_after')?.max], [3600, 2592000]);
  assert.ok(fileParameters.get('purpose')?.route_mappings?.includes('/files:form.purpose'));
  assert.ok(fileParameters.get('file_id')?.route_mappings?.includes('/files/{file_id}:path.file_id'));
  assert.ok(capabilities.get('file-storage')?.operations[0]?.routes.some(({ path_template }) => path_template.value === '/files/{file_id}/content'));
  assert.ok(capabilities.get('collection-management')?.operations[0]?.routes.every(({ endpoint_ref }) => endpoint_ref.value === 'management'));
  assert.ok(capabilities.get('file-storage')?.prices?.[0]?.rules.value.some(({ rate_items }) => rate_items[0]?.amount_decimal === '0.025'));
  assert.ok(service.offerings.some(({ provider_model_id, prices }) => provider_model_id.value === 'grok-voice-transcribe-2.0' && prices[0]?.rules.value.some(({ rate_items }) => rate_items[0]?.amount_decimal === '0.20')));
  assert.equal(service.plans.length, 0);
  assert.match(ir.collection_notes?.join('\n') ?? '', /未检出/);
  assert.ok(ir.review_items.some(({ id }) => id === 'xai-model-bound-tools-unmapped'));
});

test('xAI Speech-to-Text collects REST and WebSocket inputs, parameters, defaults, and response fields from the official guide', () => {
  const { ir } = mappedFixture();
  const capability = ir.services[0]?.capabilities.find(({ kind }) => kind.value === 'transcription');
  const transcription = capability?.operations[0];
  assert.ok(transcription?.input?.value.some(({ name, kind, required }) => name === 'audio' && kind === 'audio' && required));
  const parameters = new Map(transcription?.parameters?.value.map((parameter) => [parameter.name, parameter]));
  assert.deepEqual([...parameters.keys()].sort(), [
    'audio_format', 'channels', 'diarize', 'encoding', 'endpointing', 'filler_words', 'format', 'interim_results', 'keyterm',
    'language', 'model', 'multichannel', 'sample_rate', 'smart_turn', 'smart_turn_timeout', 'url', 'vad_threshold',
  ]);
  assert.equal(parameters.get('model')?.default, 'grok-voice-transcribe-2.0');
  assert.equal(parameters.get('format')?.default, false);
  assert.equal(parameters.get('encoding')?.default, 'pcm');
  assert.deepEqual(parameters.get('encoding')?.enum, ['pcm', 'mulaw', 'alaw', 'opus']);
  assert.deepEqual(parameters.get('audio_format')?.enum, ['pcm', 'mulaw', 'alaw']);
  assert.deepEqual(parameters.get('endpointing') && [parameters.get('endpointing')?.min, parameters.get('endpointing')?.max], [0, 5000]);
  assert.deepEqual(parameters.get('sample_rate')?.enum, [8000, 16000, 22050, 24000, 44100, 48000]);
  assert.equal(parameters.get('sample_rate')?.default, undefined, 'REST has no default while WebSocket defaults to 16000 Hz.');
  assert.equal(parameters.get('url')?.required, false, 'The official marker indicates file or URL is required, but the two inputs are alternatives.');
  assert.ok(parameters.get('language')?.route_mappings?.includes('/stt:body.language'));
  assert.ok(parameters.get('language')?.route_mappings?.includes('/stt:query.language'));
  assert.ok(transcription?.output?.value.some(({ fields }) => ['text', 'language', 'duration', 'words', 'channels'].every((field) => fields?.includes(field))));
  assert.ok(transcription?.output?.value.some(({ streaming, fields }) => streaming === true && fields?.includes('event.type=transcript.partial') && fields.includes('event.type=transcript.done')));
});

test('xAI batch input, output and parameters are extracted from the official guide when the REST schema snapshot is unavailable', () => {
  const documents = fixtures().filter(({ source }) => source.id !== 'xai-batches-api-reference');
  const facts = officialDocsParser.sourceGapFacts(documents, xaiCollectorConfig);
  const baseIR = officialDocsParser.toCollectionIR('xai', documents, facts);
  const ir = xaiParser.mapXaiProviderFacts(documents, baseIR);
  const batch = ir.services[0]?.capabilities.find(({ id }) => id.value === 'batch-processing')?.operations[0];
  assert.ok(batch?.input?.value.some(({ name }) => name === 'batch_requests'));
  assert.ok(batch?.input?.value.some(({ name, media }) => name === 'input_file_id' && media?.max_bytes === 200 * 1024 * 1024 && media.mime_types?.includes('application/jsonl')));
  assert.ok(batch?.parameters?.value.some(({ name }) => name === 'name'));
  assert.ok(batch?.parameters?.value.some(({ name }) => name === 'input_file_id'));
  assert.ok(batch?.parameters?.value.some(({ name }) => name === 'batch_requests'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('batch_id'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('state.num_requests'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('num_pending'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('results'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('pagination_token'));
  assert.ok(batch?.output?.value[0]?.fields?.includes('batch_request_id'));
});

test('xAI pricing rows without an exact model ID cannot produce an Offering', () => {
  const source = xaiCollectorConfig.sources.find(({ id }) => id === 'xai-pricing')!;
  assert.deepEqual([...xaiParser.parseTokenPricing('| Model | Input / 1M tokens | Cached input / 1M tokens | Output / 1M tokens |\n|---|---|---|---|\n| Choose Grok | $1.00 | $0.10 | $2.00 |', source.id).keys()], []);
});
