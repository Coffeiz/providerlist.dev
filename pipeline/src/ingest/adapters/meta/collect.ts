import { collectOfficialProviderDocs, type OfficialDocsCandidateFacts } from '../official-provider-docs.ts';
import type { CapturedDocument } from '../document-set.ts';
import { extractDocumentObservation, upsertCoverageRecord } from '../document-observation.ts';
import type { CapabilityFact, EvidenceRef, Observed, OfferingFact, OperationFact, PriceFact, PriceRuleFact, ProviderCollectionIR, RouteFact } from '../../ir/provider-collection.ts';
import { META_INGEST_SOURCES } from './sources.ts';

function mapMetaApi(documents: readonly CapturedDocument[], ir: ProviderCollectionIR): ProviderCollectionIR {
  const reference = documents.find(({ source }) => source.id === 'meta-api-reference');
  if (!reference) return ir;

  const observation = extractDocumentObservation(reference);
  const baseUrlMention = observation.api_mentions.find((mention) => /\bBase URL\s+https:\/\//i.test(mention));
  const baseUrl = baseUrlMention?.match(/\bBase URL\s+(https:\/\/[^\s`"'<>]+)/i)?.[1]?.replace(/[.,;]+$/, '');
  if (!baseUrl) {
    return {
      ...ir,
      review_items: [...ir.review_items, {
        id: 'meta-api-base-url-unparsed',
        kind: 'unparsed_fact',
        message: 'Meta API Reference 页面没有可解析的官方 Base URL；不从协议示例推断 Host。',
        evidence: [{ source_ref: reference.source.id, locator: 'Base URL', assertion: '需检查当前 API Reference 的结构变化。' }],
      }],
    };
  }

  const evidence: EvidenceRef[] = [{
    source_ref: reference.source.id,
    locator: 'Base URL',
    assertion: `Meta Model API 官方 API Reference 将 Base URL 列为 ${baseUrl}。`,
  }];
  const endpoint = {
    id: { value: 'meta-model-api', evidence },
    base_url: { value: baseUrl, evidence },
    api_region: {
      value: '未标注',
      evidence: [{ source_ref: reference.source.id, locator: 'Base URL / API reference', assertion: '官方文档没有声明该 API Host 的物理部署 Region；global 是账号市场标签，不用来推断 API Region。' }],
    },
    documentation: { value: reference.source.url, evidence },
  };
  const serviceEvidence: EvidenceRef[] = [{
    source_ref: reference.source.id,
    locator: 'Meta Model API API reference',
    assertion: '官方 API Reference 将产品命名为 Meta Model API；该采集来源登记在 global 市场。',
  }];
  const catalog = documents.find(({ source }) => source.id === 'meta-models');
  const pricing = documents.find(({ source }) => source.id === 'meta-pricing');
  const modelObservation = catalog ? extractDocumentObservation(catalog) : undefined;
  const pricingObservation = pricing ? extractDocumentObservation(pricing) : undefined;
  const protocols = documents.find(({ source }) => source.id === 'meta-protocols');
  const protocolObservation = protocols ? extractDocumentObservation(protocols) : undefined;
  const imageCreate = documents.find(({ source }) => source.id === 'meta-image-create-api');
  const imageEdit = documents.find(({ source }) => source.id === 'meta-image-edit-api');
  const imageSchemas = documents.find(({ source }) => source.id === 'meta-image-schemas');
  const voiceRealtime = documents.find(({ source }) => source.id === 'meta-voice-realtime-api');
  const voiceTranscribe = documents.find(({ source }) => source.id === 'meta-voice-transcribe-api');
  const search = documents.find(({ source }) => source.id === 'meta-search-grounding');
  const modelEntries = new Map<string, { displayName: string; mode?: 'Standard mode' | 'Contributor mode'; evidence: EvidenceRef[] }>();
  if (catalog && modelObservation) {
    for (const table of modelObservation.tables) {
      const availabilityIndex = table.headers.indexOf('Model API (pay-as-you-go)');
      const idOnlyTable = table.headers[0] === 'Model ID';
      if (availabilityIndex < 0 && !idOnlyTable) continue;
      for (const row of table.rows) {
        const sourceText = row[0] ?? '';
        const id = /\b([a-z][a-z0-9]*(?:[-.][a-z0-9]+)+)\b/i.exec(sourceText)?.[1];
        if (!id || (availabilityIndex >= 0 && /^not available$/i.test(row[availabilityIndex] ?? ''))) continue;
        const displayName = idOnlyTable ? table.heading : sourceText.replace(/\s*\([^)]*\)\s*/g, ' ').trim();
        modelEntries.set(id, {
          displayName: displayName || id,
          ...(availabilityIndex >= 0 && /Contributor mode/i.test(row[availabilityIndex] ?? '') ? { mode: 'Contributor mode' as const } : {}),
          ...(availabilityIndex >= 0 && /Standard mode/i.test(row[availabilityIndex] ?? '') ? { mode: 'Standard mode' as const } : {}),
          evidence: [{
            source_ref: catalog.source.id,
            locator: `${table.heading}/${id}`,
            assertion: availabilityIndex >= 0
              ? `官方型号表将 ${id} 标记为可用于 Model API 按量服务。`
              : `官方 Model API 目录以精确 ID ${id} 列出该型号。`,
          }],
        });
      }
    }
  }
  const pricesByModelId = new Map<string, PriceFact[]>();
  if (pricing && pricingObservation) {
    const familyPattern = (heading: string) => {
      if (/^Muse Wonder$/i.test(heading)) return /^muse-wonder-/i;
      if (/^Muse Spark$/i.test(heading)) return /^muse-spark-/i;
      if (/^Muse Image$/i.test(heading)) return /^muse-image-/i;
      if (/^Muse Voice Transcribe$/i.test(heading)) return /^muse-voice-transcribe-/i;
      if (/^Segment Anything Model/i.test(heading)) return /^sam-/i;
      return undefined;
    };
    for (const table of pricingObservation.tables) {
      const modelPattern = familyPattern(table.heading);
      if (!modelPattern) continue;
      const ids = [...modelEntries.keys()].filter((id) => modelPattern.test(id));
      if (!ids.length) continue;
      const standardIndex = table.headers.findIndex((header) => /^Standard mode/i.test(header));
      const contributorIndex = table.headers.findIndex((header) => /^Contributor mode/i.test(header));
      if (standardIndex >= 0) {
        for (const id of ids) {
          const evidence: EvidenceRef[] = [];
          const rules: PriceRuleFact[] = [];
          for (const [index, mode] of [[standardIndex, 'Standard mode'], [contributorIndex, 'Contributor mode']] as const) {
            if (index < 0) continue;
            if (modelEntries.get(id)?.mode && modelEntries.get(id)?.mode !== mode) continue;
            const modeRates = table.rows.flatMap((row) => {
              const metric = ({ 'Cached input': 'cache_read', Input: 'input', Output: 'output' } as Record<string, string>)[row[0] ?? ''];
              const amount = /^\$(\d+(?:\.\d+)?)$/.exec((row[index] ?? '').trim())?.[1];
              if (!metric || !amount) return [];
              return [{ metric, unit: 'per_1m_tokens', quantity: 1, amount_decimal: amount }];
            });
            if (!modeRates.length) continue;
            const rowEvidence = {
              source_ref: pricing.source.id,
              locator: `${table.heading}/${mode}/per-1m-tokens`,
              assertion: `官方 ${table.heading} 价格表列出 ${mode} 的每百万 Token 费率。`,
            };
            rules.push({
              rate_items: modeRates,
              conditions: [{ field: 'usage.mode', operator: 'eq', value: mode }],
              evidence: [rowEvidence],
            });
            evidence.push(rowEvidence);
          }
          if (rules.length) {
            const modelEvidence = modelEntries.get(id)!.evidence;
            const observed = <T>(value: T, refs: readonly EvidenceRef[]): Observed<T> => ({ value, evidence: refs });
            pricesByModelId.set(id, [{
              provider_model_id: observed(id, modelEvidence),
              currency: observed('USD', [{ source_ref: pricing.source.id, locator: 'pricing/price-currency', assertion: '定价表以美元符号标注金额。' }]),
              unit: observed('per_1m_tokens', evidence),
              rules: observed(rules, evidence),
            }]);
          }
        }
        continue;
      }
      const priceIndex = table.headers.indexOf('Price');
      if (priceIndex < 0) continue;
      for (const row of table.rows) {
        const label = row[0] ?? '';
        const match = /^\$(\d+(?:\.\d+)?)\s+per\s+(image|hour|1,000 images|1,000 frames)$/i.exec((row[priceIndex] ?? '').trim());
        if (!match?.[1] || !match[2]) continue;
        const unitByLabel: Record<string, { metric: string; unit: string }> = {
          'Generated image': { metric: 'generated_image', unit: 'per_image' },
          'Audio processed': { metric: 'audio_processed', unit: 'per_hour' },
          'Image segmentation': { metric: 'image_segmentation', unit: 'per_1k_images' },
          'Video segmentation': { metric: 'video_segmentation', unit: 'per_1k_frames' },
        };
        const rate = unitByLabel[label];
        if (!rate) continue;
        const locator = `${table.heading}/${label}`;
        const evidence = [{ source_ref: pricing.source.id, locator, assertion: `官方价格表列出 ${label} 的计量价格 ${row[priceIndex]}.` }];
        for (const id of ids) {
          const modelEvidence = modelEntries.get(id)!.evidence;
          const observed = <T>(value: T, refs: readonly EvidenceRef[]): Observed<T> => ({ value, evidence: refs });
          const fact: PriceFact = {
            provider_model_id: observed(id, modelEvidence),
            currency: observed('USD', evidence),
            unit: observed(rate.unit, evidence),
            rules: observed([{ rate_items: [{ metric: rate.metric, unit: rate.unit, quantity: 1, amount_decimal: match[1] }], evidence }], evidence),
          };
          pricesByModelId.set(id, [...(pricesByModelId.get(id) ?? []), fact]);
        }
      }
    }
  }
  const routesByModelId = new Map<string, OperationFact[]>();
  if (catalog && modelObservation && reference && protocols && protocolObservation) {
    const useCaseTable = modelObservation.tables.find(({ headers }) => headers.includes('Use case') && headers.includes('API endpoints'));
    const protocolTable = protocolObservation.tables.find(({ headers }) => headers.includes('Format') && headers.includes('Endpoint'));
    const apiRoutes = new Map(extractDocumentObservation(reference).api_mentions.flatMap((mention) => {
      const match = /\b(GET|POST|PUT|PATCH|DELETE)\s+(\/v\d+(?:\/[\w{}:./?-]+)*)/i.exec(mention);
      return match ? [[match[2]!, match[1]!.toUpperCase()] as const] : [];
    }));
    const protocolName = (name: string) => ({
      Responses: 'responses',
      'Chat Completions': 'openai_chat_completions',
      Messages: 'anthropic_messages',
    } as Record<string, string>)[name.trim()];
    const pathByFormat = new Map<string, { method: string; path: string; evidence: EvidenceRef }>();
    for (const row of protocolTable?.rows ?? []) {
      const format = row[0]?.trim();
      const route = /^(GET|POST|PUT|PATCH|DELETE)\s+(\/v\d+(?:\/[\w{}:./?-]+)*)$/i.exec(row[1]?.trim() ?? '');
      if (!format || !route || apiRoutes.get(route[2]!) !== route[1]!.toUpperCase()) continue;
      pathByFormat.set(format, {
        method: route[1]!.toUpperCase(),
        path: route[2]!,
        evidence: { source_ref: protocols.source.id, locator: `Format/${format}`, assertion: `官方协议目录将 ${format} 格式关联到 ${route[1]!.toUpperCase()} ${route[2]}。` },
      });
    }
    const normalizedFormat = (format: string) => format === 'Chat Completions' ? 'Chat Completions' : format;
    for (const row of useCaseTable?.rows ?? []) {
      const modelFamilies = (row[1] ?? '').split(',').map((name) => name.trim()).filter(Boolean);
      const formats = (row[4] ?? '').split(',').map(normalizedFormat).map((name) => name.trim()).filter(Boolean);
      for (const modelFamily of modelFamilies) {
        const modelIds = [...modelEntries].filter(([, model]) => model.displayName.startsWith(modelFamily)).map(([id]) => id);
        for (const modelId of modelIds) {
          for (const format of formats) {
            const mappedProtocol = protocolName(format);
            const route = pathByFormat.get(format);
            if (!mappedProtocol || !route) continue;
            const modelEvidence = modelEntries.get(modelId)!.evidence;
            const routeEvidence: EvidenceRef[] = [
              ...modelEvidence,
              route.evidence,
              { source_ref: reference.source.id, locator: route.path, assertion: `Meta API Reference 明确列出 ${route.method} ${route.path} 路由。` },
            ];
            const observed = <T>(value: T, evidence: readonly EvidenceRef[]): Observed<T> => ({ value, evidence });
            const routeFact: RouteFact = {
              id: observed(`${modelId}-${mappedProtocol}`, routeEvidence),
              endpoint_ref: observed('meta-model-api', [evidence[0]!]),
              protocol: observed(mappedProtocol, [route.evidence]),
              method: observed(route.method, [route.evidence]),
              path_template: observed(route.path, [route.evidence]),
              operation_kind: observed('text_generation', routeEvidence),
              provider_model_ids: observed([modelId], modelEvidence),
              documentation: observed(protocols.source.url, [route.evidence]),
            };
            const operation: OperationFact = {
              id: observed(`${modelId}-text-generation-${mappedProtocol}`, routeEvidence),
              kind: observed('text_generation', routeEvidence),
              routes: [routeFact],
            };
            routesByModelId.set(modelId, [...(routesByModelId.get(modelId) ?? []), operation]);
          }
        }
      }
    }
    for (const mention of modelObservation.api_mentions.filter((value) => /Muse Voice Transcribe/i.test(value))) {
      const route = /\b(POST)\s+(\/v\d+(?:\/[\w{}:./?-]+)*)/i.exec(mention);
      if (!route) continue;
      const modelId = [...modelEntries].find(([, model]) => model.displayName.startsWith('Muse Voice Transcribe'))?.[0];
      if (!modelId) continue;
      const modelEvidence = modelEntries.get(modelId)!.evidence;
      const routeEvidence: EvidenceRef[] = [
        ...modelEvidence,
        { source_ref: catalog.source.id, locator: 'Muse Voice Transcribe/Transcribe', assertion: mention },
      ];
      const observed = <T>(value: T, refs: readonly EvidenceRef[]): Observed<T> => ({ value, evidence: refs });
      const protocol = 'meta-speech-transcription';
      const routeFact: RouteFact = {
        id: observed(`${modelId}-${protocol}`, routeEvidence),
        endpoint_ref: observed('meta-model-api', evidence),
        protocol: observed(protocol, routeEvidence),
        method: observed(route[1]!.toUpperCase(), routeEvidence),
        path_template: observed(route[2]!, routeEvidence),
        operation_kind: observed('speech_recognition', routeEvidence),
        provider_model_ids: observed([modelId], modelEvidence),
        documentation: observed(catalog.source.url, routeEvidence),
      };
      const operation: OperationFact = {
        id: observed(`${modelId}-speech-recognition`, routeEvidence),
        kind: observed('speech_recognition', routeEvidence),
        routes: [routeFact],
      };
      routesByModelId.set(modelId, [...(routesByModelId.get(modelId) ?? []), operation]);
    }
  }
  const imageModel = [...modelEntries].find(([id]) => /^muse-image-/i.test(id));
  const imageRoutes: RouteFact[] = [];
  const imageDocs = [imageCreate, imageEdit].filter((item): item is CapturedDocument => Boolean(item));
  if (imageModel) {
    for (const [document, path, description] of [
      [imageCreate, '/v1/images/generations', '生成图像'],
      [imageEdit, '/v1/images/edits', '编辑/合成图像'],
    ] as const) {
      if (!document || !document.body.includes(path.replace('/v1', '')) && !document.body.includes(path)) continue;
      const refs: EvidenceRef[] = [
        ...imageModel[1].evidence,
        { source_ref: document.source.id, locator: `POST ${path}`, assertion: `Meta 图片 API 文档明确列出 POST ${path}，用于${description}。` },
      ];
      imageRoutes.push({
        id: { value: path.endsWith('/edits') ? 'image-edit' : 'image-generate', evidence: refs },
        endpoint_ref: { value: 'meta-model-api', evidence },
        protocol: { value: 'openai_images', evidence: refs.slice(-1) },
        method: { value: 'POST', evidence: refs.slice(-1) },
        path_template: { value: path, evidence: refs.slice(-1) },
        operation_kind: { value: 'image_generation', evidence: refs },
        provider_model_ids: { value: [imageModel[0]], evidence: imageModel[1].evidence },
        documentation: { value: document.source.url, evidence: refs.slice(-1) },
      });
    }
    if (imageRoutes.length) {
      const refs = imageRoutes.flatMap(({ id }) => id.evidence);
      const operation: OperationFact = {
        id: { value: 'image_generation', evidence: refs },
        kind: { value: 'image_generation', evidence: refs },
        routes: imageRoutes,
        input: {
          value: [{ name: 'images[]', kind: 'image', required: false }],
          evidence: imageDocs.map(({ source }) => ({ source_ref: source.id, locator: 'Request body/images', assertion: '图片编辑文档说明可提供一个或多个参考图像。' })),
        },
        parameters: {
          value: [
            { name: 'model', type: 'string', required: true, enum: [imageModel[0]], route_mappings: ['/model'] },
            { name: 'prompt', type: 'string', required: true, route_mappings: ['/prompt'] },
            { name: 'n', type: 'integer', required: false, min: 1, max: 10, default: 1, route_mappings: ['/n'] },
            { name: 'size', type: 'string', required: false,  route_mappings: ['/size'] },
            { name: 'response_format', type: 'string', required: false, enum: ['url', 'b64_json'], default: 'b64_json', route_mappings: ['/response_format'] },
            { name: 'output_format', type: 'string', required: false, enum: ['webp', 'png', 'jpeg'], default: 'webp', route_mappings: ['/output_format'] },
            { name: 'images', type: 'array', required: true, min: 1, route_mappings: ['/images'] },
            { name: 'image', type: 'string', required: false,  route_mappings: ['form:image'] },
          ],
          evidence: [
            ...imageDocs.map(({ source }) => ({ source_ref: source.id, locator: 'Request body', assertion: '图像请求字段来自 Meta 图片 API 官方请求 Schema。' })),
            ...(imageSchemas ? [{ source_ref: imageSchemas.source.id, locator: 'Create Image Request / Create Image Edit Request', assertion: '图片生成与编辑参数、取值范围和必填性来自官方 Schema。' }] : []),
          ],
        },
        output: {
          value: [{ kind: 'image', streaming: true, artifact: { kind: 'url', expires_in_seconds: null }, fields: ['data[].b64_json', 'data[].url', 'output_format'] }],
          evidence: imageDocs.map(({ source }) => ({ source_ref: source.id, locator: 'Response / ImagesResponse', assertion: '图片 API 返回图像数据或临时签名 URL。' })),
        },
      };
      routesByModelId.set(imageModel[0], [...(routesByModelId.get(imageModel[0]) ?? []), operation]);
    }
  }
  const voiceModel = [...modelEntries].find(([id]) => /^muse-voice-transcribe-/i.test(id));
  const realtimePath = '/v1/asr/realtime';
  // The API name and Route identify this WebSocket endpoint.
  const realtimeUrl = 'https://api.meta.ai';
  const realtimeMention = voiceRealtime?.body.includes(realtimePath) || voiceRealtime?.body.includes('WS /asr/realtime');
  const websocketEndpoint = voiceModel && realtimeMention ? {
    id: { value: 'meta-model-api-realtime', evidence: [{ source_ref: voiceRealtime!.source.id, locator: 'WS /asr/realtime', assertion: '官方语音 API 参考将实时转录定义为 WebSocket。' }] },
    base_url: { value: realtimeUrl, evidence: [{ source_ref: voiceRealtime!.source.id, locator: 'wss://api.meta.ai/v1/asr/realtime', assertion: '官方实时转录文档列出的 WebSocket Host。' }] },
    api_region: { value: '未标注', evidence: [{ source_ref: voiceRealtime!.source.id, locator: 'wss://api.meta.ai/v1/asr/realtime', assertion: '来源没有声明该 Host 的物理部署 Region。' }] },
    documentation: { value: voiceRealtime!.source.url, evidence: [{ source_ref: voiceRealtime!.source.id, locator: 'WS /asr/realtime', assertion: '官方实时转录 API 参考。' }] },
  } : undefined;
  if (voiceModel && websocketEndpoint) {
    const refs: EvidenceRef[] = [
      ...voiceModel[1].evidence,
      { source_ref: voiceRealtime!.source.id, locator: 'WS /asr/realtime', assertion: 'Muse Voice Transcribe 通过 WebSocket 实时转录音频。' },
    ];
    const route: RouteFact = {
      id: { value: 'speech-realtime', evidence: refs },
      endpoint_ref: { value: 'meta-model-api-realtime', evidence: refs.slice(-1) },
      protocol: { value: 'websocket', evidence: refs.slice(-1) },
      method: { value: 'WS', evidence: refs.slice(-1) },
      path_template: { value: '/v1/asr/realtime', evidence: refs.slice(-1) },
      operation_kind: { value: 'speech_recognition', evidence: refs },
      provider_model_ids: { value: [voiceModel[0]], evidence: voiceModel[1].evidence },
      documentation: { value: voiceRealtime!.source.url, evidence: refs.slice(-1) },
    };
    const previous = routesByModelId.get(voiceModel[0]) ?? [];
    const transcription = previous.find(({ kind }) => kind.value === 'speech_recognition');
    const operation: OperationFact = transcription
      ? { ...transcription, routes: [...transcription.routes, route] }
      : { id: { value: 'speech_recognition', evidence: refs }, kind: { value: 'speech_recognition', evidence: refs }, routes: [route] };
    routesByModelId.set(voiceModel[0], [...previous.filter(({ kind }) => kind.value !== 'speech_recognition'), operation]);
  }
  const transcriptionMention = voiceTranscribe?.body.match(/\bPOST\s+(https:\/\/[^\s`"'<>]+|\/v\d+\/[^\s`"'<>]+|\/asr\/transcribe)\b/i)?.[1]?.replace(/[.,;]+$/, '');
  if (voiceModel && voiceTranscribe && transcriptionMention) {
    let transcriptionPath = transcriptionMention;
    if (/^https:\/\//i.test(transcriptionMention)) {
      try { transcriptionPath = new URL(transcriptionMention).pathname; }
      catch { transcriptionPath = ''; }
    } else if (/^\/asr\//.test(transcriptionMention)) {
      transcriptionPath = `/v1${transcriptionMention}`;
    }
    if (transcriptionPath) {
      const refs: EvidenceRef[] = [
        ...voiceModel[1].evidence,
        { source_ref: voiceTranscribe.source.id, locator: `POST ${transcriptionPath}`, assertion: '官方语音转写文档的请求示例列出该文件转写 API 路由。' },
      ];
      const observed = <T>(value: T, evidence: readonly EvidenceRef[]): Observed<T> => ({ value, evidence });
      const route: RouteFact = {
        id: observed(`${voiceModel[0]}-speech-transcription`, refs),
        endpoint_ref: observed('meta-model-api', evidence),
        protocol: observed('meta-speech-transcription', refs),
        method: observed('POST', refs),
        path_template: observed(transcriptionPath, refs),
        operation_kind: observed('speech_recognition', refs),
        provider_model_ids: observed([voiceModel[0]], voiceModel[1].evidence),
        documentation: observed(voiceTranscribe.source.url, refs),
      };
      const previous = routesByModelId.get(voiceModel[0]) ?? [];
      const transcription = previous.find(({ kind }) => kind.value === 'speech_recognition');
      const operation: OperationFact = transcription
        ? { ...transcription, routes: [...transcription.routes, route] }
        : { id: observed('speech_recognition', refs), kind: observed('speech_recognition', refs), routes: [route] };
      routesByModelId.set(voiceModel[0], [...previous.filter(({ kind }) => kind.value !== 'speech_recognition'), operation]);
    }
  }
  // The search example establishes support only for the exact model it names.
  if (search && /web_search/i.test(search.body) && /\/v1\/responses/i.test(search.body)) {
    const exampleText = search.body.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, ' ')
      .replace(/<[^>]+>/g, ' ').replace(/&quot;/gi, '"').replace(/&#(?:x27|39);/gi, "'");
    const mentionedIds = new Set([...exampleText.matchAll(/["']?model["']?\s*[:=]\s*["'](muse-[a-z0-9]+(?:[-.][a-z0-9]+)+)["']/gi)].map((match) => match[1]!));
    for (const [modelId, model] of modelEntries) {
      if (!mentionedIds.has(modelId)) continue;
      const refs: EvidenceRef[] = [
        { source_ref: search.source.id, locator: 'Basic usage', assertion: `官方网页搜索示例以 ${modelId} 调用 Responses API 的 web_search 工具。` },
        ...model.evidence,
      ];
      const observed = <T>(value: T): Observed<T> => ({ value, evidence: refs });
      const route: RouteFact = {
        id: observed(`${modelId}-web-search-responses`), endpoint_ref: observed('meta-model-api'),
        protocol: observed('responses'), method: observed('POST'), path_template: observed('/v1/responses'),
        operation_kind: observed('web_search'), provider_model_ids: observed([modelId]),
        documentation: observed(search.source.url),
      };
      const operation: OperationFact = {
        id: observed('web-search'), kind: observed('web_search'), routes: [route],
        input: observed([{ name: 'input', kind: 'text' as const, required: true }]),
        parameters: observed([{ name: 'tools[].type', type: 'string' as const, required: true, enum: ['web_search'], route_mappings: ['/tools/*/type'] }]),
        output: observed([{ kind: 'text' as const }, { kind: 'structured' as const, fields: ['output[].type=web_search_call', 'output[].content[].annotations[].type=url_citation'] }]),
      };
      routesByModelId.set(modelId, [...(routesByModelId.get(modelId) ?? []), operation]);
    }
  }

  const capabilities: CapabilityFact[] = [];
  const fileReference = observation.api_mentions.join('\n');
  if (/\/v1\/files\b/i.test(fileReference)) {
    const refs: EvidenceRef[] = [{ source_ref: reference.source.id, locator: 'Resources / Files', assertion: '官方 API 参考列出 Files 的上传、列表、读取和删除接口。' }];
    const observed = <T>(value: T): Observed<T> => ({ value, evidence: refs });
    const operations: OperationFact[] = [];
    const filePaths = [...fileReference.matchAll(/\b(POST|GET|DELETE)\s+(\/v1\/files(?:\/\{file_id\})?)/gi)];
    const routePairs = new Map(filePaths.map((match) => [`${match[1]!.toUpperCase()} ${match[2]!}`, [match[1]!.toUpperCase(), match[2]!] as const]));
    if (/GET\s*\/\s*DELETE\s+\/v1\/files\/\{file_id\}/i.test(fileReference)) {
      routePairs.set('GET /v1/files/{file_id}', ['GET', '/v1/files/{file_id}']);
      routePairs.set('DELETE /v1/files/{file_id}', ['DELETE', '/v1/files/{file_id}']);
    }
    routePairs.set('GET /v1/files/{file_id}/content', ['GET', '/v1/files/{file_id}/content']);
    const documentById = new Map(documents.map((document) => [document.source.id, document]));
    const tableRows = (sourceId: string, heading: string) => {
      const document = documentById.get(sourceId);
      return document
        ? extractDocumentObservation(document).tables.find((table) => table.heading.toLowerCase() === heading.toLowerCase())?.rows ?? []
        : [];
    };
    const parameterSpecs = (sourceId: string, heading: string, mappingPrefix: string, assertion: string) => {
      const document = documentById.get(sourceId);
      if (!document) return undefined;
      const rows = tableRows(sourceId, heading);
      if (!rows.length) return undefined;
      const facts = rows.map(([rawName, rawType, rawRequired, rawDescription]) => {
        const name = rawName?.replaceAll('`', '').trim();
        const typeName = rawType?.toLowerCase() ?? '';
        if (!name || !rawType) return undefined;
        const type: 'string' | 'integer' | 'boolean' | 'object' | 'array' = /integer|int64/.test(typeName) ? 'integer' : /boolean/.test(typeName) ? 'boolean'
          : /object|fileexpiresafter/.test(typeName) ? 'object' : /array/.test(typeName) ? 'array' : 'string';
        const enumValues = rawType.match(/enum\s*\(([^)]+)\)/i)?.[1]
          ?.split(',').map((value) => value.trim().replace(/^['"`]|['"`]$/g, '')).filter(Boolean);
        const numericLimits = rawDescription?.match(/minimum:\s*(\d+),\s*maximum:\s*(\d+)/i);
        const maxMatch = rawDescription?.match(/from\s+1\s+to\s+([\d,]+)/i);
        return {
          name,
          type,
          required: /^yes$/i.test(rawRequired ?? ''),
          route_mappings: [`${mappingPrefix}.${name}`],
          ...(enumValues?.length ? { enum: enumValues } : {}),
          ...(numericLimits ? { min: Number(numericLimits[1]), max: Number(numericLimits[2]) } : maxMatch ? { min: 1, max: Number(maxMatch[1]!.replaceAll(',', '')) } : {}),
        };
      }).filter((fact): fact is NonNullable<typeof fact> => Boolean(fact));
      return facts.length ? { value: facts, evidence: [{ source_ref: sourceId, locator: heading, assertion }] } : undefined;
    };
    const outputFields = (heading: string) => tableRows('meta-files-schemas', heading)
      .map(([name]) => name?.replaceAll('`', '').trim())
      .filter((name): name is string => Boolean(name));
    for (const [method, path] of routePairs.values()) {
      const kind = method === 'POST' ? 'file_upload' : 'file_storage';
      const operationId = `${method.toLowerCase()}-${path.includes('{file_id}') ? 'file' : 'files'}${path.endsWith('/content') ? '-content' : ''}`;
      const sourceId = method === 'POST' ? 'meta-files-upload-api'
        : method === 'DELETE' ? 'meta-files-delete-api'
          : path.endsWith('/content') ? 'meta-files-content-api'
            : path.includes('{file_id}') ? 'meta-files-retrieve-api' : 'meta-files-list-api';
      const source = documentById.get(sourceId);
      const sourceUrl = source?.source.url ?? reference.source.url;
      const operationEvidence: EvidenceRef[] = source ? [{ source_ref: sourceId, locator: path, assertion: `官方 Files API 文档列出 ${method} ${path} Route。` }] : refs;
      const outputHeading = method === 'DELETE' ? 'Delete File Response'
        : method === 'GET' && path === '/v1/files' ? 'List Files Response' : 'File Object';
      const fields = path.endsWith('/content') ? undefined : outputFields(outputHeading);
      const requestHeading = method === 'POST' ? 'Create File Request' : undefined;
      const parameters = method === 'POST'
        ? parameterSpecs('meta-files-schemas', requestHeading!, 'multipart/form-data', '请求参数来自官方 CreateFileRequest Schema。')
        : parameterSpecs(sourceId, method === 'GET' && path === '/v1/files' ? 'Query parameters' : 'Path parameters', method === 'GET' && path === '/v1/files' ? 'query' : 'path', '参数来自官方 Files API Route 文档。');
      const operation: OperationFact = {
        id: { value: operationId, evidence: operationEvidence }, kind: { value: kind, evidence: operationEvidence },
        routes: [{ id: { value: operationId, evidence: operationEvidence }, endpoint_ref: { value: 'meta-model-api', evidence }, protocol: { value: 'openai_files', evidence: operationEvidence }, method: { value: method, evidence: operationEvidence }, path_template: { value: path, evidence: operationEvidence }, operation_kind: { value: kind, evidence: operationEvidence }, documentation: { value: sourceUrl, evidence: operationEvidence } }],
        ...(method === 'POST' ? { input: { value: [{ name: 'file', kind: 'file' as const, required: true }], evidence: [{ source_ref: 'meta-files-schemas', locator: 'Create File Request', assertion: '官方上传 Schema 将必填 file 字段声明为 binary。' }] } } : {}),
        ...(parameters ? { parameters } : {}),
        ...(fields?.length ? { output: { value: [{ kind: 'structured' as const, fields }], evidence: [{ source_ref: 'meta-files-schemas', locator: outputHeading, assertion: '响应字段来自官方 Files API Schema。' }] } } : path.endsWith('/content') ? { output: { value: [{ kind: 'file' as const }], evidence: operationEvidence } } : {}),
      };
      operations.push(operation);
    }
    if (operations.length) capabilities.push({ id: observed('files'), kind: observed('file_storage'), operations, links: observed({ documentation: reference.source.url }) });
  }

  const offerings: OfferingFact[] = [...modelEntries].map(([modelId, model]) => ({
    provider_model_id: { value: modelId, evidence: model.evidence },
    display_name: { value: model.displayName, evidence: model.evidence },
    service_id: { value: 'global', evidence: serviceEvidence },
    supply_observations: [{ kind: 'listed_current', evidence: model.evidence }],
    operations: routesByModelId.get(modelId) ?? [],
    prices: pricesByModelId.get(modelId) ?? [],
  }));
  const service = {
    id: { value: 'global', evidence: serviceEvidence },
    name: { value: 'Meta Model API', evidence: serviceEvidence },
    endpoints: [endpoint, ...(websocketEndpoint ? [websocketEndpoint] : [])],
    offerings,
    capabilities,
    plans: [],
  };
  const existing = ir.services.find(({ id }) => id.value === 'global');
  const mappedService = existing
    ? { ...existing, endpoints: [...existing.endpoints.filter(({ id }) => id.value !== endpoint.id.value && id.value !== websocketEndpoint?.id.value), endpoint, ...(websocketEndpoint ? [websocketEndpoint] : [])], offerings, capabilities: [...existing.capabilities.filter(({ id }) => id.value !== 'files'), ...capabilities] }
    : service;
  const coverage = upsertCoverageRecord(ir, {
    source_ref: reference.source.id,
    scope: 'api',
    market: 'global',
    status: 'partial',
    record_count: [...[...routesByModelId.values()].flat(), ...capabilities.flatMap(({ operations }) => operations)].flatMap(({ routes }) => routes)
      .filter((route) => ['id', 'protocol', 'method', 'path_template', 'operation_kind', 'provider_model_ids']
        .some((field) => route[field as keyof RouteFact]?.evidence.some(({ source_ref }) => source_ref === reference.source.id))).length,
    record_unit: 'Route records',
    note: '已映射官方 Base URL、通用文本协议、文件管理、图片生成/编辑端点及语音文件/实时端点；SAM 分割、状态 API、Responses 图像工具模式和通用请求 Schema 仍待核对。',
  });
  const catalogCoverage = catalog
    ? upsertCoverageRecord(coverage, {
      source_ref: catalog.source.id,
      scope: 'model_catalog',
      market: 'global',
      status: 'partial',
      record_count: offerings.length,
      record_unit: 'current Offering records',
      note: '已将公开目录中明确标记可用于 Model API 的型号和单独列出的 Model ID 记录为当前供应；账号级 models.list 目录不在本次匿名采集范围内。',
    })
    : coverage;
  const pricingCoverage = pricing
    ? upsertCoverageRecord(catalogCoverage, {
      source_ref: pricing.source.id,
      scope: 'pricing',
      market: 'global',
      status: 'partial',
      record_count: offerings.reduce((count, offering) => count + offering.prices.length, 0),
      record_unit: 'Offering PriceFact records',
      note: '已映射公开页面可按章节唯一关联到当前 Model API 型号的价格；Muse Code 订阅计划和未解析费率仍未投影。',
    })
    : catalogCoverage;
  const apiCoverage = [...imageDocs.map(({ source }) => source), ...(imageSchemas ? [imageSchemas.source] : []), ...(voiceTranscribe ? [voiceTranscribe.source] : []), ...(voiceRealtime ? [voiceRealtime.source] : [])]
    .reduce((current, source) => {
      const routeCount = source.id === 'meta-image-create-api' || source.id === 'meta-image-edit-api'
        ? imageRoutes.filter(({ documentation }) => documentation?.value === source.url).length
        : source.id === 'meta-voice-realtime-api' ? (websocketEndpoint ? 1 : 0)
        : source.id === 'meta-voice-transcribe-api' ? [...routesByModelId.values()].flatMap((operations) => operations.flatMap(({ routes }) => routes))
          .filter((route) => route.path_template.evidence.some(({ source_ref }) => source_ref === source.id)).length
        : source.id === 'meta-image-schemas' ? Number(imageRoutes.length > 0) : 0;
      return upsertCoverageRecord(current, {
        source_ref: source.id,
        scope: 'api',
        market: 'global',
        status: routeCount > 0 ? 'partial' : 'not_parsed',
        record_count: routeCount,
        record_unit: source.id === 'meta-image-schemas' ? 'image schema groups' : 'Route records',
        note: routeCount > 0 ? source.id === 'meta-image-schemas'
          ? '已采纳来源说明的图片请求字段、范围与响应形式；官方 Schema 更新仍需持续复核。'
          : '已映射官方端点；请求/响应字段和约束按已收录 Schema 继续核对。'
          : '已收录官方来源但尚未解析出可关联的 Route。',
      });
    }, pricingCoverage);
  const searchCoverage = search ? upsertCoverageRecord(apiCoverage, {
    source_ref: search.source.id, scope: 'capability', market: 'global', status: 'partial',
    record_count: offerings.filter(({ operations }) => operations.some(({ kind }) => kind.value === 'web_search')).length,
    record_unit: 'recognized search-enabled example models',
    note: '只映射官方示例明确指定的型号及 Responses 路由；其他型号、Messages 变体及搜索费用待进一步映射。',
  }) : apiCoverage;
  const explicitCoverage = documents.filter(({ source }) => source.id === 'meta-models-list' || source.id === 'meta-subscriptions')
    .reduce((current, document) => upsertCoverageRecord(current, {
      source_ref: document.source.id,
      scope: document.source.scope ?? 'documentation',
      market: 'global',
      status: 'not_parsed',
      record_count: 0,
      record_unit: document.source.id === 'meta-models-list' ? 'account-scoped model catalog records' : 'PlanFact records',
      note: document.source.id === 'meta-models-list'
        ? 'models.list 只返回认证账号可见型号；本采集不使用 API Key，因此不把匿名文档观察当作完整账号目录。'
        : '已收录 Muse Code 订阅说明，但未发现可核实的公开固定价格；不从权益描述推导 PlanFact。',
    }), searchCoverage);
  return {
    ...explicitCoverage,
    profile: {
      ...ir.profile,
      name: {
        value: 'Meta',
        evidence: [{ source_ref: catalog?.source.id ?? reference.source.id, locator: 'head > meta[name="description"]', assertion: 'Meta 官方模型目录以 Meta 名称描述其自有模型系列。' }],
      },
      ...(catalog ? {
        aliases: {
          value: ['Meta Model API'],
          evidence: [{ source_ref: reference.source.id, locator: 'head > title', assertion: '官方 API Reference 页面标题标识产品为 Meta Model API。' }],
        },
        kind: {
          value: 'first_party' as const,
          evidence: [{ source_ref: catalog.source.id, locator: 'script[type="application/ld+json"] / description', assertion: '官方目录描述 Meta 自有模型系列，且 Model API 文档由 Meta 官方开发者站点发布。' }],
        },
      } : {}),
      docs: {
        value: {
          overview: documents.find(({ source }) => source.id === 'meta-models')?.source.url ?? reference.source.url,
          api: reference.source.url,
          ...(imageCreate ? { image: imageCreate.source.url } : {}),
          ...(voiceRealtime ? { speech: voiceRealtime.source.url } : {}),
        },
        evidence: [
          { source_ref: documents.find(({ source }) => source.id === 'meta-models')?.source.id ?? reference.source.id, locator: 'registered source URL', assertion: 'Meta Model API 官方模型目录文档入口。' },
          { source_ref: reference.source.id, locator: 'registered source URL', assertion: 'Meta Model API 官方 API Reference 文档入口。' },
        ],
      },
    },
    services: [...explicitCoverage.services.filter(({ id }) => id.value !== 'global'), mappedService],
    coverage: explicitCoverage.coverage,
    review_items: [
      ...ir.review_items.filter(({ message }) => !message.startsWith('API Host、Route 与 Method：')),
      {
        id: 'meta-api-model-route-mapping-incomplete',
        kind: 'incomplete_coverage',
        message: '已映射通用文本、Files、Muse Image 图片生成/编辑及 Muse Voice Transcribe 文件/实时 Route；SAM 视频/图像分割、状态 API、Muse Image 的 Responses 工具模式及仍未收录的请求/响应约束继续 Review。',
        evidence: [
          { source_ref: reference.source.id, locator: 'Base URL / Models', assertion: 'API Reference 描述通用 API Host 与需凭证访问的 models.list。' },
          ...(documents.some(({ source }) => source.id === 'meta-protocols')
            ? [{ source_ref: 'meta-protocols', locator: 'Format / Endpoint', assertion: '官方协议页列出通用请求协议，但没有证明它们对每个当前模型均可调用。' }]
            : []),
        ],
      },
    ],
  };
}

const CONFIG = {
  providerId: 'meta',
  displayName: 'Meta Model API',
  sources: META_INGEST_SOURCES,
  modelIdPattern: /\b(?:muse|sam|llama|llama-guard|prompt-guard)[a-z0-9._-]*\b/gi,
  knownLimitations: [
    '官方通用 Models 页面区分 Model API、Muse Code 与开放权重范围；团队实时授权目录由需 Key 的 models.list 返回，本采集器不请求该接口。',
    'Muse Code 订阅与 Model API 按量计费是不同计划；订阅页的权益不等于公开 API 按量价格，计划价格/地区资格需独立核验。',
    'Llama/Muse Spark Open 开放权重模型不是 Meta 托管推理 API；第三方托管商的 API、路线与价格不归入 Meta Model API。',
    '对消费数据的使用选项可能造成同一系列不同 Offering/费率，需要保留差异，不能按名称去重合并。',
    '公开通用页面未逐项披露全部 API 路由、能力参数和逐模型限制；需从通用参考逐字段补充，不能用专属页面补洞。',
  ],
  excludedModelNotes: ['Llama、Muse Spark Open、Muse Glimmer 等自托管开放权重及第三方托管服务不作为 Meta Model API 当前供应。'],
  mapToIR: (documents: readonly CapturedDocument[], _facts: OfficialDocsCandidateFacts, observationIR: ProviderCollectionIR) =>
    mapMetaApi(documents, observationIR),
} as const;

export function collectMeta(options: { readonly repoRoot: string }) {
  return collectOfficialProviderDocs(CONFIG, options);
}

export const metaCollectorConfig = CONFIG;
export const metaParser = { mapMetaApi };
