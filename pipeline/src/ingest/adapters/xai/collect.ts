import { collectOfficialProviderDocs, type OfficialDocsCandidateFacts } from '../official-provider-docs.ts';
import type { CapturedDocument } from '../document-set.ts';
import { extractDocumentObservation } from '../document-observation.ts';
import type { CapabilityInput, ParameterSpec, PriceCondition } from '@providerlist/schema/types';
import type {
  CapabilityFact,
  OfferingFact,
  OperationFact,
  Observed,
  PlanFact,
  PriceFact,
  PriceRuleFact,
  ProviderCollectionIR,
  RouteFact,
  ServiceFacts,
} from '../../ir/provider-collection.ts';
import { observed } from '../../ir/observed.ts';
import { XAI_INGEST_SOURCES } from './sources.ts';

const DOC = 'https://docs.x.ai/developers';
const URLS = {
  models: `${DOC}/models`, pricing: `${DOC}/pricing`, chat: `${DOC}/rest-api-reference/inference/chat-completions`,
  responses: `${DOC}/rest-api-reference/inference/responses`, images: `${DOC}/rest-api-reference/inference/images`,
  videos: `${DOC}/rest-api-reference/inference/videos`, voice: `${DOC}/model-capabilities/audio/voice`,
  batch: `${DOC}/advanced-api-usage/batch-api`, files: `${DOC}/files/managing-files`,
  webSearch: `${DOC}/tools/web-search`, xSearch: `${DOC}/tools/x-search`, imagine: `${DOC}/model-capabilities/imagine`,
} as const;

function tableRows(body: string, expectedHeaders: readonly string[]): Array<{ headers: string[]; rows: string[][]; heading: string }> {
  const lines = body.split(/\r?\n/);
  const output: Array<{ headers: string[]; rows: string[][]; heading: string }> = [];
  let heading = '';
  for (let index = 0; index < lines.length; index += 1) {
    const title = lines[index]?.match(/^#{2,4}\s+(.+?)\s*$/)?.[1];
    if (title) heading = title;
    const line = lines[index] ?? '';
    if (!line.trim().startsWith('|')) continue;
    const split = (value: string) => value.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim().replaceAll('\\|', '|'));
    const headers = split(line).map((cell) => cell.replace(/\*\*/g, '').toLowerCase());
    if (!expectedHeaders.every((header) => headers.some((value) => value.includes(header)))) continue;
    index += 1;
    if (!/^\s*\|?\s*:?-{2,}/.test(lines[index] ?? '')) continue;
    const rows: string[][] = [];
    while (index + 1 < lines.length && (lines[index + 1] ?? '').trim().startsWith('|')) {
      index += 1;
      const cells = split(lines[index] ?? '');
      if (cells.length === headers.length) rows.push(cells);
    }
    output.push({ headers, rows, heading });
  }
  return output;
}

function documentTableRows(document: CapturedDocument, expectedHeaders: readonly string[]) {
  const expected = expectedHeaders.map((header) => header.toLowerCase());
  return extractDocumentObservation(document).tables
    .map(({ headers, rows, heading }) => ({ headers: [...headers].map((header) => header.toLowerCase()), rows: rows.map((row) => [...row]), heading }))
    .filter(({ headers }) => expected.every((header) => headers.some((value) => value.includes(header))));
}

function modelId(label: string): string | undefined {
  const match = label.trim().match(/^(grok-[a-z0-9]+(?:[.-][a-z0-9]+)*)(?:\s*\(|$)/i);
  return match?.[1];
}

function money(value: string): string | undefined {
  return value.trim().match(/^\$\s*(\d+(?:\.\d+)?)\s*$/)?.[1];
}

function firstDollarAmount(value: string): string | undefined {
  return value.match(/\$\s*(\d+(?:\.\d+)?)/)?.[1];
}

function plainText(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\*\*/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function jsonObjectsFromDocumentation(body: string): Record<string, unknown>[] {
  // Official docs use language tags such as `javascriptWithoutSDK` and `pythonXAI`.
  // Scan every fenced example, including JSON embedded in shell `-d` payloads.
  const blocks = [...body.matchAll(/```[^\r\n]*\r?\n([\s\S]*?)```/gi)].map((match) => match[1] ?? body);
  const objects: Record<string, unknown>[] = [];
  for (const block of blocks.length ? blocks : [body]) {
    for (let start = 0; start < block.length; start += 1) {
      if (block[start] !== '{') continue;
      let depth = 0;
      let quoted = false;
      let escaped = false;
      for (let index = start; index < block.length; index += 1) {
        const char = block[index] ?? '';
        if (quoted) {
          if (escaped) escaped = false;
          else if (char === '\\') escaped = true;
          else if (char === '"') quoted = false;
          continue;
        }
        if (char === '"') quoted = true;
        else if (char === '{') depth += 1;
        else if (char === '}' && --depth === 0) {
          try {
            const parsed: unknown = JSON.parse(block.slice(start, index + 1));
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) objects.push(parsed as Record<string, unknown>);
          } catch { /* Documentation examples may embed partial objects in shell or JavaScript. */ }
          start = index;
          break;
        }
      }
    }
  }
  return objects;
}

function documentedBatchFacts(guide: string, reference: string): {
  inputs: Array<{ name: string; kind: 'text' | 'file' | 'structured'; required: boolean; media?: { mime_types?: string[]; max_bytes?: number } }>;
  parameters: Array<{ name: string; type: 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'; required: boolean; route_mappings: string[] }>;
  outputFields: string[];
} {
  const guideObjects = jsonObjectsFromDocumentation(guide);
  const referenceObjects = jsonObjectsFromDocumentation(reference);
  const batchRequest = guideObjects.find(({ batch_requests }) => Array.isArray(batch_requests));
  const fileRequest = guideObjects.find(({ input_file_id }) => typeof input_file_id === 'string');
  const createRequests = guideObjects.filter(({ name, batch_id }) => typeof name === 'string' && batch_id === undefined);
  const inputs: Array<{ name: string; kind: 'text' | 'file' | 'structured'; required: boolean; media?: { mime_types?: string[]; max_bytes?: number } }> = [];
  const maxFileMegabytes = Number(guide.match(/Maximum file size is\s+\*{0,2}(\d+)\s*MB/i)?.[1]);
  const inputMimeType = guide.match(/application\/jsonl/i)?.[0];
  if (batchRequest) inputs.push({ name: 'batch_requests', kind: 'structured', required: true });
  if (fileRequest) inputs.push({ name: 'input_file_id', kind: 'file', required: true, media: {
    ...(inputMimeType ? { mime_types: [inputMimeType] } : {}),
    ...(Number.isFinite(maxFileMegabytes) && maxFileMegabytes > 0 ? { max_bytes: maxFileMegabytes * 1024 * 1024 } : {}),
  } });
  const referenceText = plainText(reference);
  const isRequired = (name: string) => new RegExp(`\\b${name}\\s+(?:string|number|integer|boolean|object|array)\\s+required\\b`, 'i').test(referenceText);
  const parameters: Array<{ name: string; type: 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'; required: boolean; route_mappings: string[] }> = [];
  const addParameter = (name: string, value: unknown, route: string) => {
    const type = Array.isArray(value) ? 'array' : value === null ? undefined : typeof value === 'object' ? 'object' : typeof value === 'number' ? 'number' : typeof value === 'boolean' ? 'boolean' : typeof value === 'string' ? 'string' : undefined;
    if (type && !parameters.some((parameter) => parameter.name === name)) parameters.push({ name, type, required: isRequired(name), route_mappings: [`${route}.${name}`] });
  };
  for (const createRequest of createRequests) for (const [name, value] of Object.entries(createRequest)) addParameter(name, value, '/batches:body');
  if (batchRequest) for (const [name, value] of Object.entries(batchRequest)) addParameter(name, value, '/batches/{batch_id}/requests:body');
  const firstItem = Array.isArray(batchRequest?.batch_requests) ? batchRequest.batch_requests[0] : undefined;
  if (firstItem && typeof firstItem === 'object' && !Array.isArray(firstItem)) {
    for (const [name, value] of Object.entries(firstItem as Record<string, unknown>)) addParameter(name, value, '/batches/{batch_id}/requests:body.batch_requests[]');
  }
  if (fileRequest) for (const [name, value] of Object.entries(fileRequest)) addParameter(name, value, '/batches:body');
  const responseObjects = referenceObjects.filter((object) => 'batch_id' in object || 'results' in object || 'batches' in object || 'batch_request_metadata' in object);
  const explicitResponseFields = referenceObjects.filter((object) => 'state' in object).concat(responseObjects).flatMap((object) => {
    const fields = Object.keys(object);
    const state = object.state;
    if (state && typeof state === 'object' && !Array.isArray(state)) fields.push(...Object.keys(state).map((name) => `state.${name}`));
    const list = object.results ?? object.batch_request_metadata ?? object.batches;
    if (Array.isArray(list) && list[0] && typeof list[0] === 'object' && !Array.isArray(list[0])) {
      fields.push(...Object.keys(list[0] as Record<string, unknown>));
      const nested = (list[0] as Record<string, unknown>).batch_result;
      if (nested && typeof nested === 'object' && !Array.isArray(nested)) fields.push(...Object.keys(nested as Record<string, unknown>).map((name) => `batch_result.${name}`));
    }
    return fields;
  });
  const stateTable = tableRows(guide, ['counter', 'description']).find(({ heading }) => /understanding batch states/i.test(heading));
  const stateFields = stateTable?.rows.map(([field]) => (field ?? '').replaceAll('`', '').trim()).filter(Boolean) ?? [];
  const outputSections = [
    guide.split(/## Step 1: Create a batch/i)[1]?.split(/## Step 2:/i)[0] ?? '',
    guide.split(/## Step 3: Monitor batch progress/i)[1]?.split(/## Step 4:/i)[0] ?? '',
    guide.split(/## Step 4: Retrieve results/i)[1]?.split(/^## /m)[0] ?? '',
  ].join('\n');
  const nonFieldAccessors = new Set(['create', 'add', 'get', 'list', 'list_batch_requests', 'list_batch_results', 'cancel', 'strip']);
  const documentedAccessors = [...outputSections.matchAll(/\b(?:batch|cancelledBatch|page|result|data)\.([A-Za-z_][\w]*(?:\.[A-Za-z_][\w]*)*)/g)]
    .map((match) => match[1]!)
    .filter((field) => !nonFieldAccessors.has(field.split('.')[0]!));
  const outputFields = [...new Set([...explicitResponseFields, ...stateFields, ...documentedAccessors])];
  return { inputs, parameters, outputFields };
}

function parameterConstraints(type: string, description: string): { enum?: (string | number | boolean)[]; min?: number; max?: number } {
  const result: { enum?: (string | number | boolean)[]; min?: number; max?: number } = {};
  const hasChoices = /(?:format|encoding|supported(?:\s+values?)?)\s*:/i.test(description);
  if (type === 'string' && hasChoices) {
    const values = [...description.matchAll(/`([^`]+)`/g)].map((match) => match[1]!).filter((value) => /^[a-z0-9_-]+$/i.test(value));
    if (values.length > 0) result.enum = [...new Set(values)];
  } else if ((type === 'integer' || type === 'number') && hasChoices) {
    const values = [...description.matchAll(/`(-?\d+(?:\.\d+)?)`/g)].map((match) => Number(match[1])).filter(Number.isFinite);
    if (values.length > 0) result.enum = [...new Set(values)];
  }
  const range = description.match(/\brange\s*:?\s*(-?\d+(?:\.\d+)?)\s*[–-]\s*(-?\d+(?:\.\d+)?)/i);
  if (range) {
    result.min = Number(range[1]);
    result.max = Number(range[2]);
  }
  return result;
}

function requestParameters(body: string, routePrefix: string, excluded: readonly string[] = [], document?: CapturedDocument): Array<{ name: string; type: 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'; required: boolean; default?: unknown; enum?: (string | number | boolean)[]; min?: number; max?: number; description?: string; route_mappings: string[] }> {
  const table = (document ? documentTableRows(document, ['parameter', 'type', 'required', 'description']) : tableRows(body, ['parameter', 'type', 'required', 'description']))
    .find(({ heading }) => /request body/i.test(heading));
  if (!table) return [];
  const index = {
    name: table.headers.findIndex((value) => value.includes('parameter')),
    type: table.headers.findIndex((value) => value === 'type'),
    default: table.headers.findIndex((value) => value === 'default'),
    required: table.headers.findIndex((value) => value.includes('required')),
    description: table.headers.findIndex((value) => value.includes('description')),
  };
  const kinds = new Set(['string', 'number', 'integer', 'boolean', 'object', 'array']);
  return table.rows.flatMap((row) => {
    const name = (row[index.name] ?? '').replaceAll('`', '').trim();
    const type = (row[index.type] ?? '').trim().toLowerCase();
    if (!name || excluded.includes(name) || !kinds.has(type)) return [];
    const description = plainText(row[index.description] ?? '');
    const rawDefault = index.default >= 0 ? (row[index.default] ?? '').replaceAll('`', '').trim() : '';
    const defaultValue = rawDefault
      ? type === 'boolean' ? rawDefault.toLowerCase() === 'true'
        : type === 'integer' || type === 'number' ? Number(rawDefault)
          : rawDefault
      : undefined;
    const requiredMarker = (row[index.required] ?? '').trim();
    const required = /^(?:✓|yes|required)/i.test(requiredMarker) && !requiredMarker.includes('†');
    return [{ name, type: type as 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array', required, ...(defaultValue !== undefined && (typeof defaultValue !== 'number' || Number.isFinite(defaultValue)) ? { default: defaultValue } : {}), ...parameterConstraints(type, description), ...(description ? { description } : {}), route_mappings: [`${routePrefix}:body.${name}`] }];
  });
}

function queryParameters(document: CapturedDocument): Array<{ name: string; type: 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'; required: boolean; default?: unknown; enum?: (string | number | boolean)[]; min?: number; max?: number; description?: string; route_mappings: string[] }> {
  const table = documentTableRows(document, ['parameter', 'type', 'default', 'description'])
    .find(({ heading }) => /query parameters/i.test(heading));
  if (!table) return [];
  const column = (name: string) => table.headers.findIndex((value) => value === name);
  const supportedTypes = new Set(['string', 'number', 'integer', 'boolean', 'object', 'array']);
  return table.rows.flatMap((row) => {
    const name = plainText(row[column('parameter')] ?? '').replaceAll('`', '').trim();
    const type = plainText(row[column('type')] ?? '').trim().toLowerCase();
    const description = plainText(row[column('description')] ?? '');
    if (!name || !supportedTypes.has(type)) return [];
    const rawDefault = plainText(row[column('default')] ?? '').replaceAll('`', '').trim();
    const defaultValue = rawDefault
      ? type === 'boolean' ? rawDefault.toLowerCase() === 'true'
        : type === 'integer' || type === 'number' ? Number(rawDefault)
          : rawDefault
      : undefined;
    return [{ name, type: type as 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array', required: false, ...(defaultValue !== undefined && (typeof defaultValue !== 'number' || Number.isFinite(defaultValue)) ? { default: defaultValue } : {}), ...parameterConstraints(type, description), ...(description ? { description } : {}), route_mappings: [`/stt:query.${name}`] }];
  });
}

function mappedParameters<T extends { name: string; type: 'string' | 'number' | 'integer' | 'boolean' | 'object' | 'array'; required: boolean; description?: string; route_mappings: string[] }>(
  fields: readonly T[],
  sourceRef: string,
  locator: string,
  assertion: string,
): Observed<T[]> {
  return observed([...fields], sourceRef, locator, assertion);
}

function filesOperationSchema(document: CapturedDocument, routePaths: readonly string[]): Pick<OperationFact, 'input' | 'output' | 'parameters'> {
  const body = document.body;
  const sourceRef = document.source.id;
  const objectTable = tableRows(body, ['field', 'type', 'description'])
    .find(({ heading }) => /the file object/i.test(heading));
  const fields = objectTable?.rows.map(([field]) => plainText(field ?? '').replaceAll('`', '').trim()).filter(Boolean) ?? [];
  const hasFileUploadExample = /files\s*=\s*\{\s*["']file["']\s*:/i.test(body) ||
    /formData\.append\(\s*["']file["']/i.test(body) || /-F\s+file=@/i.test(body);
  const inputs = hasFileUploadExample ? [{ name: 'file', kind: 'file' as const, required: true }] : [];
  const outputFields = new Set(fields);
  if (/files\.get\(["']data["']\s*,\s*\[\]/i.test(body) || /all_files\.extend\(response\.get\(["']data["']/i.test(body)) outputFields.add('data[]');
  if (/pagination_token.{0,120}(?:next page|fetch the next page)|(?:response|page)\.pagination_token/i.test(body)) outputFields.add('pagination_token');
  for (const field of ['deleted', 'id']) {
    if (new RegExp(`(?:result|delete_response|deleteResponse)(?:\\[['\"]${field}['\"]\\]|\\.${field})`, 'i').test(body)) outputFields.add(field);
  }
  const outputs = [
    ...(outputFields.size ? [{ kind: 'structured' as const, fields: [...outputFields] }] : []),
    ...(/(?:raw bytes|content as bytes|streams the response)/i.test(plainText(body)) ? [{ kind: 'file' as const, artifact: { kind: 'binary' as const } }] : []),
  ];

  const parameters: ParameterSpec[] = [];
  const addParameter = (
    name: string,
    type: ParameterSpec['type'],
    description: string,
    route: string,
    options: { required?: boolean; min?: number; max?: number; enum?: (string | number | boolean)[]; default?: unknown } = {},
  ) => {
    const existing = parameters.findIndex((parameter) => parameter.name === name);
    if (existing >= 0) {
      const parameter = parameters[existing]!;
      parameters[existing] = { ...parameter, route_mappings: [...new Set([...(parameter.route_mappings ?? []), `${route}.${name}`])] };
      return;
    }
    parameters.push({ name, type, required: options.required ?? false, ...(description ? { description } : {}), ...(options.min !== undefined ? { min: options.min } : {}), ...(options.max !== undefined ? { max: options.max } : {}), ...(options.enum ? { enum: options.enum } : {}), ...(options.default !== undefined ? { default: options.default } : {}), route_mappings: [`${route}.${name}`] });
  };
  const optionsStart = body.search(/###\s+Available Options/i);
  const optionsEnd = optionsStart < 0 ? -1 : body.indexOf('\n## ', optionsStart + 1);
  const optionsText = optionsStart < 0 ? '' : body.slice(optionsStart, optionsEnd < 0 ? body.length : optionsEnd);
  for (const match of optionsText.matchAll(/^\s*\*\s+\*\*`([^`]+)`\*\*:\s*(.+)$/gm)) {
    const [, name, description] = match;
    if (!name || !description) continue;
    const type: ParameterSpec['type'] = /maximum|limit|number|integer|\d+\s*(?:files|items)/i.test(description) ? 'integer' : 'string';
    const enumValues = [...new Set([...description.matchAll(/["']([^"']+)["']/g)].map((item) => item[1]).filter((value): value is string => Boolean(value)))];
    const max = name === 'limit' ? Number(description.match(/maximum is\s+(\d+)/i)?.[1]) : undefined;
    const defaultNumber = description.match(/server default of\s+(\d+)/i)?.[1];
    const defaultString = description.match(/defaults to\s+["']([^"']+)["']/i)?.[1];
    addParameter(name, type, plainText(description), '/files:query', { required: /required/i.test(description), ...(max ? { max } : {}), ...(enumValues.length ? { enum: enumValues } : {}), ...(defaultNumber ? { default: Number(defaultNumber) } : defaultString ? { default: defaultString } : {}) });
  }

  const expirationDescription = body.match(/`expires_after` is set in seconds[^\n]+/i)?.[0];
  if (expirationDescription) {
    const range = expirationDescription.match(/between\s+`?(\d+)`?\s+.*?and\s+`?(\d+)`?/i);
    addParameter('expires_after', 'integer', plainText(expirationDescription), '/files:form', { ...(range ? { min: Number(range[1]), max: Number(range[2]) } : {}) });
  }
  const purposeRow = objectTable?.rows.find(([field]) => plainText(field ?? '').replaceAll('`', '').trim() === 'purpose');
  const purposeColumn = objectTable?.headers.findIndex((header) => header.includes('description')) ?? -1;
  const purposeDescription = purposeRow?.[purposeColumn] ? plainText(purposeRow[purposeColumn]!) : undefined;
  if (purposeDescription) addParameter('purpose', 'string', plainText(purposeDescription), '/files:form');
  if (routePaths.some((path) => path.includes('{file_id}'))) addParameter('file_id', 'string', '', '/files/{file_id}:path');

  return {
    ...(inputs.length ? { input: observed(inputs, sourceRef, '#uploading-files', 'Input field names are extracted from official multipart upload examples.') } : {}),
    ...(outputs.length ? { output: observed(outputs, sourceRef, '#the-file-object', 'Response fields and binary content are extracted from the official File Object table and content documentation.') } : {}),
    ...(parameters.length ? { parameters: observed(parameters, sourceRef, '#available-options', 'Parameters and descriptions are extracted from official upload and list documentation.') } : {}),
  };
}

function parseSubscriptionPlans(documents: readonly CapturedDocument[]): { plans: PlanFact[]; reviewItems: ProviderCollectionIR['review_items'] } {
  const pricing = documents.find(({ source }) => source.id === 'xai-subscription-pricing');
  const reviewItems: ProviderCollectionIR['review_items'][number][] = [];
  if (!pricing) {
    return {
      plans: [],
      reviewItems: [{ id: 'xai-subscription-pricing-missing', kind: 'incomplete_coverage', message: 'xAI 官方 X Subscription 价格页缺失，无法核对套餐价格、周期和权益倍率。', evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: '本轮来源检查记录。' })) }],
    };
  }

  const table = tableRows(pricing.body, ['plan', 'monthly', 'annual', 'included usage'])
    .find(({ heading }) => /x subscription prices/i.test(heading));
  const plans: PlanFact[] = [];
  const planIds = new Set<string>();
  let parsedRows = 0;
  if (table) {
    const columns = {
      plan: table.headers.findIndex((header) => header === 'plan'),
      monthly: table.headers.findIndex((header) => header === 'monthly'),
      annual: table.headers.findIndex((header) => header === 'annual'),
      usage: table.headers.findIndex((header) => header === 'included usage'),
    };
    for (const [rowIndex, row] of table.rows.entries()) {
      const name = row[columns.plan]?.trim() ?? '';
      if (!name) continue;
      const slug = name.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!slug) {
        reviewItems.push({ id: `xai-subscription-row-unparsed-${rowIndex + 1}`, kind: 'unparsed_fact', message: '官方套餐表中有名称无法转换为稳定标识的行；该行未生成套餐记录。', evidence: [{ source_ref: pricing.source.id, locator: `#x-subscription-prices/row:${rowIndex + 1}`, assertion: '需检查原始套餐名称。' }] });
        continue;
      }
      const id = `xai-global-subscription-${slug}`;
      if (planIds.has(id)) {
        reviewItems.push({ id: `xai-subscription-duplicate-${slug}-${rowIndex + 1}`, kind: 'source_conflict', subject_ref: `global/${id}`, message: `官方套餐表中出现重复或规范化后冲突的套餐名称 ${name}；冲突行未重复录入。`, evidence: [{ source_ref: pricing.source.id, locator: `#x-subscription-prices/row:${rowIndex + 1}`, assertion: '需核对套餐标识是否重复。' }] });
        continue;
      }
      const monthly = firstDollarAmount(row[columns.monthly] ?? '');
      const annual = firstDollarAmount(row[columns.annual] ?? '');
      const usage = row[columns.usage]?.trim() ?? '';
      if (monthly === undefined || annual === undefined || !usage) {
        reviewItems.push({ id: `xai-subscription-row-unparsed-${slug}`, kind: 'unparsed_fact', subject_ref: `global/${id}`, message: `官方套餐表列出 ${name}，但采集器未能解析月付、年付或用量档位；未解析值保持未知。`, evidence: [{ source_ref: pricing.source.id, locator: `#x-subscription-prices/row:${rowIndex + 1}`, assertion: '套餐表格字段解析不完整。' }] });
        continue;
      }
      planIds.add(id);
      parsedRows += 1;
      const locator = `#x-subscription-prices/row:${rowIndex + 1}`;
      const ratio = /^(\d+(?:\.\d+)?)\s*x$/i.exec(usage)?.[1];
      const billingOptions = [
        { billing_period: 'month' as const, subscription_fee: { currency: 'USD' as const, amount: monthly } },
        { billing_period: 'year' as const, subscription_fee: { currency: 'USD' as const, amount: annual } },
      ];
      plans.push({
        id: observed(id, pricing.source.id, locator, `官方 X Subscription 套餐价格表列出 ${name}。`),
        name: observed(name, pricing.source.id, locator, `官方套餐名称为 ${name}。`),
        billing_options: observed(billingOptions, pricing.source.id, locator, `官方列出 ${name} 月付与年付 USD 标价。`),
        ...(ratio ? { ratio: observed(ratio, pricing.source.id, locator, `官方将 ${name} 用量列为 ${usage}；比例相对 Plus 基础用量。`) } : {}),

        links: observed({ official: pricing.source.url }, pricing.source.id, '#x-subscription-prices', '套餐链接指向官方 X Subscription 价格文档。'),
      });
    }
  }
  if (!table || parsedRows === 0 || reviewItems.length > 0) {
    reviewItems.push({ id: 'xai-subscription-table-incomplete', kind: 'incomplete_coverage', message: `X Subscription 个人套餐表未完整解析：从官方列表解析 ${parsedRows} 行${table ? `（来源共 ${table.rows.length} 行）` : '（未找到目标表格）'}。`, evidence: [{ source_ref: pricing.source.id, locator: '#x-subscription-prices', assertion: '覆盖数按本次官方表格实际行数计算；需核对未解析行。' }] });
  }

  const subscriptionText = plainText(pricing.body);
  const teamPlans = [...subscriptionText.matchAll(/\bTeam plans are available on\s+(.+?)(?:\.|\n)/gi)]
    .flatMap((sentence) => [...(sentence[1] ?? '').matchAll(/([\p{L}\p{N}][\p{L}\p{N} -]*?)\s+at\s+\$([\d,.]+)\s+per seat/giu)]
      .map((match) => ({ name: match[1]!.trim(), amount: match[2]!.replaceAll(',', '') })));
  if (teamPlans.length) {
    const usageByPlan = new Map<string, string>();
    for (const plan of plans) {
      const multiplier = plan.ratio?.value;
      const planName = plan.name?.value;
      if (multiplier && planName) usageByPlan.set(String(planName).toLowerCase(), multiplier);
    }
    for (const { name, amount } of teamPlans) {
      const locator = '#x-subscription-teams';
      const slug = name.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!slug) continue;
      const id = `xai-global-teams-${slug}`;
      const multiplier = usageByPlan.get(name.toLowerCase());
      plans.push({
        id: observed(id, pricing.source.id, locator, `官方团队套餐说明列出 ${name} 每席位月费。`),
        name: observed(`Teams ${name}`, pricing.source.id, locator, `官方团队席位使用 ${name} 档位。`),
        billing_options: observed([{ billing_period: 'month', subscription_fee: { currency: 'USD', amount } }], pricing.source.id, locator, `官方列出 Teams ${name} 每席位每月 $${amount}。`),
        ...(multiplier ? { ratio: observed(multiplier, pricing.source.id, locator, `官方套餐列表将 ${name} 档列为 ${multiplier}x 用量。`) } : {}),

        links: observed({ official: pricing.source.url }, pricing.source.id, '#x-subscription-teams', '套餐链接指向官方 X Subscription 价格文档。'),
      });
    }
  } else if (/Team plans are available on/i.test(subscriptionText)) {
    reviewItems.push({ id: 'xai-subscription-team-prices-unparsed', kind: 'unparsed_fact', message: '官方 X Subscription 来源包含团队席位说明，但采集器未能解析其中的套餐名称或席位价格。', evidence: [{ source_ref: pricing.source.id, locator: '#x-subscription-teams', assertion: '检查官方团队套餐价格段落。' }] });
  }

  return { plans, reviewItems };
}

function multiplyDecimal(value: string, multiplier: bigint, divisor: bigint): string {
  const [whole, fraction = ''] = value.split('.');
  const scale = 10n ** BigInt(fraction.length);
  const result = (BigInt(`${whole}${fraction}`) * multiplier) / divisor;
  const major = result / scale;
  const minor = (result % scale).toString().padStart(fraction.length, '0').replace(/0+$/, '');
  return minor ? `${major}.${minor}` : major.toString();
}

function threshold(label: string): { operator: 'lt' | 'gte'; value: number } | undefined {
  const match = label.match(/\(\s*([<≥])\s*([\d,.]+)\s*([kKmM]?)\s*prompt tokens/i);
  if (!match) return undefined;
  const scalar = match[3]?.toLowerCase() === 'k' ? 1_000 : match[3]?.toLowerCase() === 'm' ? 1_000_000 : 1;
  const raw = (match[2] ?? '').replaceAll(',', '');
  const decimal = raw.split('.');
  const value = Number(decimal[0]) * scalar + (decimal[1] ? Number(`0.${decimal[1]}`) * scalar : 0);
  return Number.isSafeInteger(value) ? { operator: match[1] === '<' ? 'lt' : 'gte', value } : undefined;
}

function parseTokenPricing(body: string, sourceRef: string): Map<string, PriceFact> {
  const table = tableRows(body, ['model', 'input / 1m tokens', 'cached input / 1m tokens', 'output / 1m tokens'])
    .find(({ heading }) => /text api pricing/i.test(heading));
  const groups = new Map<string, Array<{ rates: PriceRuleFact['rate_items']; condition?: PriceCondition; locator: string }>>();
  if (!table) return new Map();
  const columns = {
    label: table.headers.findIndex((value) => value === 'model'),
    input: table.headers.findIndex((value) => value.startsWith('input /')),
    cache: table.headers.findIndex((value) => value.startsWith('cached input /')),
    output: table.headers.findIndex((value) => value.startsWith('output /')),
  };
  for (const [row, cells] of table.rows.entries()) {
    const label = cells[columns.label] ?? '';
    const id = modelId(label);
    if (!id || /deprecated/i.test(label)) continue;
    const rates = [
      ['input', columns.input], ['cache_read', columns.cache], ['output', columns.output],
    ].flatMap(([metric, index]) => {
      const amount = money(cells[index as number] ?? '');
      return amount === undefined ? [] : [{ metric: metric as string, unit: 'per_1m_tokens' as const, quantity: 1, amount_decimal: amount }];
    });
    if (rates.length !== 3) continue;
    const condition = threshold(label);
    const entries = groups.get(id) ?? [];
    entries.push({ rates, ...(condition ? { condition: { field: 'prompt_tokens', operator: condition.operator, value: condition.value } as const } : {}), locator: `#text-api-pricing/table:${table.heading}/row:${row + 1}` });
    groups.set(id, entries);
  }
  const batchSection = body.split(/## Batch API Pricing/i)[1]?.split(/^## /m)[0] ?? '';
  const discountedModels = new Set([...batchSection.matchAll(/^\s*-\s*(grok-[a-z0-9.-]+)\s*$/gim)].map((match) => match[1]!));
  return new Map([...groups].map(([id, entries]) => {
    const rules: PriceRuleFact[] = entries.map(({ rates, condition, locator }) => ({
      rate_items: rates,
      ...(condition ? { conditions: [condition] } : {}),
      evidence: [{ source_ref: sourceRef, locator, assertion: `xAI 当前 API 定价表为精确模型 ${id} 列出 USD 每百万 Token 输入、缓存输入及输出价格。` }],
    }));
    if (discountedModels.has(id)) {
      for (const { rates, condition } of entries) rules.push({
        rate_items: rates.map((item) => ({ ...item, amount_decimal: multiplyDecimal(item.amount_decimal, 4n, 5n) })),
        conditions: [{ field: 'api_mode', operator: 'eq', value: 'batch' }, ...(condition ? [condition] : [])],
        evidence: [{ source_ref: sourceRef, locator: '#batch-api-pricing/discounts-by-model', assertion: `官方按模型列出 ${id} Batch API 折扣为 20%；按明确折扣从对应标准 USD 费率计算。` }],
      });
    }
    for (const { rates, condition } of entries) rules.push({
      rate_items: rates.map((item) => ({ ...item, amount_decimal: multiplyDecimal(item.amount_decimal, 2n, 1n) })),
      conditions: [{ field: 'service_tier', operator: 'eq', value: 'priority' }, ...(condition ? [condition] : [])],
      evidence: [{ source_ref: sourceRef, locator: '#priority-processing-pricing', assertion: `官方说明 Priority Processing 对 Chat Completions 与 Responses 的所有 Token 类型按标准价 2x 计费；按明确倍率计算 ${id} 的优先级费率。` }],
    });
    if (['grok-4.7', 'grok-4.6'].includes(id)) {
      for (const { rates, condition } of entries) rules.push({
        rate_items: rates.map((item) => ({ ...item, amount_decimal: multiplyDecimal(item.amount_decimal, 11n, 10n) })),
        conditions: [
          { field: 'api_region', operator: 'eq', value: 'United States' },
          ...(condition ? [condition] : []),
        ],
        evidence: [{ source_ref: sourceRef, locator: '#us-regional-endpoint-pricing', assertion: `官方说明 US regional Endpoint 对 grok-4.7 / grok-4.6 全部 Token 费率使用 1.1x；按该明确倍率从 USD 原价计算 ${id} 区域价格。` }],
      });
      for (const { rates, condition } of entries) rules.push({
        rate_items: rates.map((item) => ({ ...item, amount_decimal: multiplyDecimal(item.amount_decimal, 22n, 10n) })),
        conditions: [{ field: 'api_region', operator: 'eq', value: 'United States' }, { field: 'service_tier', operator: 'eq', value: 'priority' }, ...(condition ? [condition] : [])],
        evidence: [{ source_ref: sourceRef, locator: '#us-regional-endpoint-pricing#priority-processing-pricing', assertion: `US regional 1.1x 与 Priority 2x 均适用时按明示倍率 2.2x 从全球标准费率计算 ${id}。` }],
      });
    }
    return [id, {
      provider_model_id: observed(id, sourceRef, `#${id}`, '价格表以精确的 Provider 模型 ID 列价。'),
      currency: observed('USD', sourceRef, '#key-information', 'xAI 官方定价页明确所有价格均为 USD。'),
      unit: observed('per_1m_tokens', sourceRef, '#text-api-pricing', '来源表头明确按每百万 Token 计价。'),
      rules: { value: rules, evidence: rules.flatMap(({ evidence }) => evidence) },
    } satisfies PriceFact] as const;
  }));
}

function route(sourceRef: string, locator: string, assertion: string, id: string, endpointId: string, protocol: string, method: string, path: string, operationKind: string, documentation: string, model?: string): RouteFact {
  return {
    id: observed(id, sourceRef, locator, assertion),
    endpoint_ref: observed(endpointId, sourceRef, locator, `该 Route 使用 ${endpointId} Endpoint。`),
    protocol: observed(protocol, sourceRef, locator, `${protocol} API 协议。`),
    method: observed(method, sourceRef, locator, `官方 API 文档列出 ${method} 方法。`),
    path_template: observed(path, sourceRef, locator, `官方 API 文档列出路径 ${path}。`),
    operation_kind: observed(operationKind, sourceRef, locator, `Route 按官方用途 ${operationKind} 分类。`),
    ...(model ? { provider_model_ids: observed([model], sourceRef, locator, `价格表确认模型 ID ${model}；该 Route 文档说明其所属 API。`) } : {}),
    documentation: observed(documentation, sourceRef, locator, 'Route 链接指向对应官方可读 API 文档。'),
    callability: observed('documented_only', sourceRef, locator, '已由官方 API 文档描述，未实测 API 调用。'),
  };
}

function operation(id: string, kind: string, routes: readonly RouteFact[], sourceRef: string, locator: string, assertion: string): OperationFact {
  return { id: observed(id, sourceRef, locator, assertion), kind: observed(kind, sourceRef, locator, assertion), routes };
}

function mapXaiProviderFacts(documents: readonly CapturedDocument[], ir: ProviderCollectionIR): ProviderCollectionIR {
  const byId = new Map(documents.map((document) => [document.source.id, document]));
  const pricing = byId.get('xai-pricing');
  const modelCatalog = byId.get('xai-models');
  if (!pricing || !modelCatalog) return {
    ...ir,
    review_items: [...ir.review_items, { id: 'xai-core-sources-incomplete', kind: 'incomplete_coverage', message: 'xAI 领域映射需要同时取得官方模型目录与定价页；本轮未生成正式领域 IR。', evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: '本轮来源检查记录。' })) }],
  };

  const subscriptionPlans = parseSubscriptionPlans(documents);

  const prices = parseTokenPricing(pricing.body, pricing.source.id);
  const imageTable = tableRows(pricing.body, ['model', 'cost']).find(({ heading }) => /imagine pricing/i.test(heading));
  const voiceTable = tableRows(pricing.body, ['mode', 'cost']).find(({ heading }) => /voice pricing/i.test(heading));
  const modelImages = new Map<string, PriceFact>();
  const modelVideos = new Map<string, PriceFact>();
  const makeUnitPrice = (id: string, amount: string, metric: string, unit: string, operationRef: string, locator: string): PriceFact => ({
    provider_model_id: observed(id, pricing.source.id, locator, '官方定价表以精确模型 ID 列价。'),
    currency: observed('USD', pricing.source.id, '#key-information', '官方定价页明确价格币种为 USD。'),
    unit: observed(unit, pricing.source.id, locator, `来源价格单位为 ${unit}。`),
    operation_ref: observed(operationRef, pricing.source.id, locator, '按定价表所在 API 能力映射。'),
    rules: { value: [{ rate_items: [{ metric, unit, quantity: 1, amount_decimal: amount }], evidence: [{ source_ref: pricing.source.id, locator, assertion: `xAI 定价表列出 ${id} 的 ${amount} USD/${unit} 价格。` }] }], evidence: [{ source_ref: pricing.source.id, locator, assertion: '逐条映射官方定价表。' }] },
  });
  for (const [rowIndex, cells] of (imageTable?.rows ?? []).entries()) {
    const id = modelId(cells[0] ?? ''); const amount = money((cells[1] ?? '').replace(/\s*\/\s*image/i, ''));
    if (!id || !amount) continue;
    modelImages.set(id, makeUnitPrice(id, amount, 'generated_image', 'per_image', 'image_generation', `#imagine-pricing/row:${rowIndex + 1}`));
  }
  for (const [rowIndex, cells] of (imageTable?.rows ?? []).entries()) {
    const id = modelId(cells[0] ?? ''); const amount = money((cells[1] ?? '').replace(/\s*\/\s*sec/i, ''));
    if (!id || !amount || !/video/i.test(id)) continue;
    modelVideos.set(id, makeUnitPrice(id, amount, 'generated_second', 'per_generated_second', 'video_generation', `#imagine-pricing/row:${rowIndex + 1}`));
  }
  const voiceModelPrices: PriceFact[] = [];
  for (const [rowIndex, cells] of (voiceTable?.rows ?? []).entries()) {
    const label = cells[0] ?? '';
    const id = label.match(/\((grok-voice-[a-z0-9.-]+)\)/i)?.[1];
    if (!id || /deprecated/i.test(label)) continue;
    const amount = cells[1]?.match(/\$([\d.]+)\s*\/\s*min/i)?.[1];
    const textAmount = cells[1]?.match(/\$([\d.]+)\s*\/\s*text input/i)?.[1];
    if (!amount || !textAmount) continue;
    voiceModelPrices.push({
      provider_model_id: observed(id, pricing.source.id, `#voice-pricing/row:${rowIndex + 1}`, 'Voice 定价行精确列出模型 ID。'),
      currency: observed('USD', pricing.source.id, '#key-information', '官方定价页明确所有价格均为 USD。'),
      unit: observed('per_input_audio_minute', pricing.source.id, `#voice-pricing/row:${rowIndex + 1}`, '语音分钟价格按输入音频计费。'),
      rules: { value: [{ rate_items: [
        { metric: 'input_audio_minute', unit: 'per_input_audio_minute', quantity: 1, amount_decimal: amount },
        { metric: 'text_input', unit: 'per_request', quantity: 1, amount_decimal: textAmount },
      ], evidence: [{ source_ref: pricing.source.id, locator: `#voice-pricing/row:${rowIndex + 1}`, assertion: 'Voice API 文档列出音频分钟费率和 text input 费率。' }] }], evidence: [{ source_ref: pricing.source.id, locator: `#voice-pricing/row:${rowIndex + 1}`, assertion: '逐字保留官方计价数值和单位。' }] },
    });
  }

  const chatDoc = byId.get('xai-chat-completions'); const responsesDoc = byId.get('xai-responses');
  const imageDoc = byId.get('xai-images-api'); const videoDoc = byId.get('xai-videos-api');
  const voiceDoc = byId.get('xai-voice');
  const regionsDoc = byId.get('xai-regions');
  const makeTextOperations = (model: string): OperationFact[] => {
    const routes = [
      ...(chatDoc ? [route(chatDoc.source.id, '#chat-completions', 'API 参考列出文本与图像 chat prompt 的推理端点。', 'chat-completions', 'global', 'chat-completions', 'POST', '/chat/completions', 'text_generation', URLS.chat, model)] : []),
      ...(responsesDoc ? [route(responsesDoc.source.id, '#responses', 'API 参考列出 Responses 推理端点。', 'responses', 'global', 'responses', 'POST', '/responses', 'text_generation', URLS.responses, model)] : []),
      ...(['grok-4.7', 'grok-4.6'].includes(model) && regionsDoc ? [route(regionsDoc.source.id, '#us-regional-endpoint', '区域端点文档仅列 grok-4.7 与 grok-4.6 可用，并列出 US regional Base URL。', 'chat-completions-us', 'us-regional', 'chat-completions', 'POST', '/chat/completions', 'text_generation', URLS.chat, model), route(regionsDoc.source.id, '#us-regional-endpoint', '区域端点文档仅列 grok-4.7 与 grok-4.6 可用，并列出 US regional Base URL。', 'responses-us', 'us-regional', 'responses', 'POST', '/responses', 'text_generation', URLS.responses, model)] : []),
    ];
    return routes.length ? [operation('text_generation', 'text_generation', routes, pricing.source.id, '#text-api-pricing', `官方价格表列出 ${model}，并有通用文本推理 API 参考。`)] : [];
  };
  const offerings: OfferingFact[] = [];
  for (const [id, price] of prices) {
    const evidence = price.rules.value.flatMap(({ evidence: refs }) => refs);
    const ops = makeTextOperations(id);
    offerings.push({
      provider_model_id: observed(id, pricing.source.id, `#text-api-pricing/${id}`, '当前价格表含精确模型行，作为公开按量供应证据。'),
      display_name: observed(id, pricing.source.id, `#text-api-pricing/${id}`, '来源没有单独展示名称，使用官方精确模型 ID 展示。'),
      service_id: observed('global', pricing.source.id, '#pricing', 'xAI API 定价来源属于 global Service。'),
      supply_observations: [{ kind: 'priced_current', evidence }], operations: ops, prices: [price],
    });
  }
  for (const [id, price] of modelImages) {
    const refs = imageDoc ? [route(imageDoc.source.id, '#image-generation', 'Images API 参考列出图像生成与编辑路径。', 'image-generations', 'global', 'openai-images', 'POST', '/images/generations', 'image_generation', URLS.images, id), route(imageDoc.source.id, '#image-edit', 'Images API 参考列出图像编辑路径。', 'image-edits', 'global', 'openai-images', 'POST', '/images/edits', 'image_generation', URLS.images, id), route(imageDoc.source.id, '#image-results', 'Images API 参考列出异步生成结果查询路径。', 'image-results', 'global', 'openai-images', 'GET', '/images/{request_id}', 'image_generation', URLS.images, id)] : [];
    const ops = refs.length ? [operation('image_generation', 'image_generation', refs, imageDoc!.source.id, '#image-generation', '官方 Images API 文档定义图像生成请求。')] : [];
    offerings.push({ provider_model_id: observed(id, pricing.source.id, `#imagine-pricing/${id}`, '当前 Imagine 价格表含精确模型行，作为公开按量供应证据。'), display_name: observed(id, pricing.source.id, `#imagine-pricing/${id}`, '使用官方精确模型 ID。'), service_id: observed('global', pricing.source.id, '#pricing', 'xAI API 定价来源属于 global Service。'), supply_observations: [{ kind: 'priced_current', evidence: price.rules.evidence }], operations: ops, prices: [price] });
  }
  for (const [id, price] of modelVideos) {
    const refs = videoDoc ? [route(videoDoc.source.id, '#video-generation', 'Videos API 参考列出异步视频生成、编辑、延展与状态查询端点。', 'video-generations', 'global', 'rest-json', 'POST', '/videos/generations', 'video_generation', URLS.videos, id), route(videoDoc.source.id, '#video-edit', 'Videos API 参考列出异步视频编辑端点。', 'video-edits', 'global', 'rest-json', 'POST', '/videos/edits', 'video_generation', URLS.videos, id), route(videoDoc.source.id, '#video-extension', 'Videos API 参考列出异步视频延展端点。', 'video-extensions', 'global', 'rest-json', 'POST', '/videos/extensions', 'video_generation', URLS.videos, id), route(videoDoc.source.id, '#video-results', 'Videos API 参考列出以 request_id 查询异步任务结果的路径。', 'video-results', 'global', 'rest-json', 'GET', '/videos/{request_id}', 'video_generation', URLS.videos, id)] : [];
    const ops = refs.length ? [operation('video_generation', 'video_generation', refs, videoDoc!.source.id, '#video-generation', '官方 Videos API 文档定义异步视频生成请求。')] : [];
    offerings.push({ provider_model_id: observed(id, pricing.source.id, `#imagine-pricing/${id}`, '当前 Imagine 价格表含精确模型行，作为公开按量供应证据。'), display_name: observed(id, pricing.source.id, `#imagine-pricing/${id}`, '使用官方精确模型 ID。'), service_id: observed('global', pricing.source.id, '#pricing', 'xAI API 定价来源属于 global Service。'), supply_observations: [{ kind: 'priced_current', evidence: price.rules.evidence }], operations: ops, prices: [price] });
  }
  for (const price of voiceModelPrices) {
    const id = price.provider_model_id!.value;
    const speechToSpeechDoc = byId.get('xai-speech-to-speech');
    const realtimeDoc = speechToSpeechDoc ?? voiceDoc;
    const refs = realtimeDoc ? [route(realtimeDoc.source.id, '#speech-to-speech', 'Voice 文档给出 WebSocket 实时语音端点及 grok-voice-latest 示例。', 'realtime-voice', 'global-wss', 'websocket', 'GET', '/realtime', 'speech_to_speech', realtimeDoc.source.url)] : [];
    const ops = refs.length ? [{
      ...operation('speech_to_speech', 'speech_to_speech', refs, realtimeDoc!.source.id, '#speech-to-speech', 'Voice 官方文档描述实时语音双向交互。'),
      input: observed([{ name: 'audio', kind: 'audio', required: true, media: { codec: ['audio/pcm', 'audio/pcmu', 'audio/pcma', 'audio/opus'], transports: ['websocket'] } }], realtimeDoc!.source.id, '#audio', 'The official Speech-to-Speech guide documents audio formats and JSON/binary transports.'),
      output: observed([{ kind: 'audio', streaming: true, media: { codec: ['audio/pcm', 'audio/pcmu', 'audio/pcma', 'audio/opus'], transports: ['websocket'] }, fields: ['response.output_audio.delta', 'response.audio.delta'] }], realtimeDoc!.source.id, '#audio-transport', 'Official guide documents streamed assistant audio events and binary audio frames.'),
      parameters: observed([
        { name: 'model', type: 'string' as const, required: true, enum: ['grok-voice-latest'], route_mappings: ['/realtime:query.model'] },
        { name: 'voice', type: 'string' as const, required: false,  route_mappings: ['/realtime:session.voice'] },
        { name: 'instructions', type: 'string' as const, required: false,  route_mappings: ['/realtime:session.instructions'] },
        { name: 'turn_detection', type: 'object' as const, required: false,  route_mappings: ['/realtime:session.turn_detection'] },
        { name: 'audio', type: 'object' as const, required: false,  route_mappings: ['/realtime:session.audio'] },
        { name: 'tools', type: 'array' as const, required: false,  route_mappings: ['/realtime:session.tools'] },
      ], realtimeDoc!.source.id, '#session-parameters', 'Session parameters are collected from official WebSocket setup and parameter docs.'),
    }] : [];
    offerings.push({ provider_model_id: observed(id, pricing.source.id, `#voice-pricing/${id}`, 'Voice 价格表含精确模型 ID，作为公开供应证据。'), display_name: observed(id, pricing.source.id, `#voice-pricing/${id}`, '使用官方精确模型 ID。'), service_id: observed('global', pricing.source.id, '#pricing', 'xAI API 定价来源属于 global Service。'), supply_observations: [{ kind: 'priced_current', evidence: price.rules.evidence }], operations: ops, prices: [price] });
  }

  const capabilities: CapabilityFact[] = [];
  const codeExecutionDoc = byId.get('xai-code-execution');
  const toolOutputDoc = byId.get('xai-tool-streaming-sync');
  const codeToolType = codeExecutionDoc?.body.match(/"type"\s*:\s*"([^"]+)"/i)?.[1];
  if (codeExecutionDoc && toolOutputDoc && codeToolType && /code_interpreter_call\.outputs/.test(toolOutputDoc.body)) {
    const refs = [route(codeExecutionDoc.source.id, '#implementation-example', '官方 Code Execution 示例在 Responses API 中启用 code_interpreter。', 'code-execution', 'global', 'responses', 'POST', '/responses', 'code_execution', codeExecutionDoc.source.url)];
    const codeOperation = operation('code-execution', 'code_execution', refs, codeExecutionDoc.source.id, '#implementation-example', 'Grok 根据用户提示调用服务端 Python 执行工具。');
    capabilities.push({
      id: observed('code-execution', codeExecutionDoc.source.id, '#implementation-example', 'xAI 官方文档提供 Code Execution 服务端工具。'),
      kind: observed('code_execution', codeExecutionDoc.source.id, '#implementation-example', 'xAI Code Execution 是 Responses API 模型内置工具。'),
      links: observed({ documentation: codeExecutionDoc.source.url }, codeExecutionDoc.source.id, '#implementation-example', '链接指向官方 Code Execution 文档。'),
      operations: [{
        ...codeOperation,
        parameters: observed([{ name: 'tools[].type', type: 'string', required: true, enum: [codeToolType], route_mappings: ['body.tools[].type'] }], codeExecutionDoc.source.id, '#implementation-example', 'The tool type is extracted from the official Responses API example.'),
        input: observed([{ name: 'input[].content', kind: 'text', required: true }], codeExecutionDoc.source.id, '#basic-calculations', 'The official example supplies a natural-language prompt through Responses input.'),
        output: observed([{ kind: 'structured', fields: ['response.output[].type=code_interpreter_call', 'code_interpreter_call.outputs', 'response.output_text'] }], toolOutputDoc.source.id, '#accessing-tool-outputs', '官方文档将 code_execution 映射为 Responses API code_interpreter，并列出 outputs 的 include 字段；最终文本由同步调用返回。'),
      }],
    });
  }
  const collectionsSearchDoc = byId.get('xai-collections-search');
  if (collectionsSearchDoc && /"type"\s*:\s*"file_search"/.test(collectionsSearchDoc.body)
    && /vector_store_ids/.test(collectionsSearchDoc.body) && /max_num_results/.test(collectionsSearchDoc.body)) {
    const outputDoc = byId.get('xai-tool-streaming-sync');
    const sourceRef = collectionsSearchDoc.source.id;
    const outputSourceRef = outputDoc?.source.id ?? sourceRef;
    const evidence = 'The official Collections Search guide documents the Responses API file_search request and its collection settings.';
    const parameters: ParameterSpec[] = [
      { name: 'tools[].type', type: 'string' as const, required: true, enum: ['file_search'], route_mappings: ['body.tools[].type'] },
      { name: 'tools[].vector_store_ids[]', type: 'array' as const, required: true, route_mappings: ['body.tools[].vector_store_ids'] },
      { name: 'tools[].max_num_results', type: 'integer' as const, required: false, route_mappings: ['body.tools[].max_num_results'] },
    ];
    if (outputDoc?.body.includes('"file_search"') && outputDoc.body.includes('"file_search_call.results"')) {
      parameters.push({ name: 'include[]', type: 'string', required: false, enum: ['file_search_call.results'], route_mappings: ['body.include[]'] });
    }
    capabilities.push({
      id: observed('collections-file-search', sourceRef, '#implementation-example', 'The official guide exposes Collections Search through the Responses API file_search tool.'),
      kind: observed('file_search', sourceRef, '#sdk-support', 'The Responses API-compatible file_search tool searches uploaded xAI collections.'),
      links: observed({ documentation: collectionsSearchDoc.source.url }, sourceRef, '#implementation-example', 'Official Collections Search tool documentation.'),
      operations: [{
        ...operation('collections-file-search', 'file_search', [route(sourceRef, '#implementation-example', evidence, 'collections-file-search', 'global', 'responses', 'POST', '/responses', 'file_search', collectionsSearchDoc.source.url)], sourceRef, '#implementation-example', evidence),
        input: observed([{ name: 'input[].content', kind: 'text', required: true }], sourceRef, '#implementation-example', 'The official request example provides a user message through Responses input.'),
        parameters: observed(parameters, sourceRef, '#implementation-example', evidence),
        ...(outputDoc ? { output: observed([{ kind: 'structured', fields: [
          ...(outputDoc.body.includes('"file_search_call.results"') ? ['output[].type=file_search_call', 'file_search_call.results[]'] : []),
          'response.output_text', 'citations[]',
        ] }], outputSourceRef, '#accessing-tool-outputs', 'The official guide documents optional file_search results and response citations.') } : {}),
      }],
    });
  }
  const webSearchDoc = byId.get('xai-web-search');
  const webSearchOutputDoc = byId.get('xai-tool-streaming-sync');
  if (webSearchDoc && /"type"\s*:\s*"web_search"/.test(webSearchDoc.body)) {
    const sourceRef = webSearchDoc.source.id;
    const inputDocument = /"input"\s*:[\s\S]*?"content"\s*:/.test(webSearchDoc.body)
      ? webSearchDoc
      : byId.get('xai-tool-streaming-sync');
    const parameters: ParameterSpec[] = [
      { name: 'tools[].type', type: 'string', required: true, enum: ['web_search'], route_mappings: ['body.tools[].type'] },
    ];
    const documentedParameters: Array<{ suffix: string; name: string; type: ParameterSpec['type'] }> = [
      { suffix: 'allowed_domains', name: 'tools[].filters.allowed_domains[]', type: 'array' },
      { suffix: 'excluded_domains', name: 'tools[].filters.excluded_domains[]', type: 'array' },
      { suffix: 'enable_image_understanding', name: 'tools[].enable_image_understanding', type: 'boolean' },
      { suffix: 'enable_image_search', name: 'tools[].enable_image_search', type: 'boolean' },
    ];
    for (const parameter of documentedParameters) {
      if (!new RegExp(`\\b${parameter.suffix}\\b`).test(webSearchDoc.body)) continue;
      parameters.push({
        name: parameter.name,
        type: parameter.type,
        required: false,
        route_mappings: [`body.${parameter.name}`],
      });
    }
    const inputFields: CapabilityInput[] = [];
    if (inputDocument && /"input"\s*:/.test(inputDocument.body) && /"content"\s*:/.test(inputDocument.body)) {
      inputFields.push({ name: 'input[].content', kind: 'text', required: true });
    }
    const outputFields: string[] = [];
    if (/"type"\s*:\s*"web_search"/.test(webSearchDoc.body) && /responses\.create/.test(webSearchDoc.body)) outputFields.push('response.output[].type=web_search_call');
    if (/response\.output_text|console\.log\(text\)/.test(webSearchDoc.body) || /Final Response/.test(webSearchOutputDoc?.body ?? '')) outputFields.push('response.output_text');
    if (/response\.citations|Citations:/.test(webSearchDoc.body) || /response\.citations/.test(webSearchOutputDoc?.body ?? '')) outputFields.push('response.citations[]');
    if (webSearchOutputDoc?.body.includes('web_search_call.action.sources')) {
      parameters.push({ name: 'include[]', type: 'string', required: false, enum: ['web_search_call.action.sources'], route_mappings: ['body.include[]'] });
      outputFields.push('response.output[].action.sources[]');
    }
    const evidence = 'The official Web Search documentation provides the Responses API request example and supported tool options.';
    const webSearchRoute = route(sourceRef, '#basic-usage', evidence, 'web-search', 'global', 'responses', 'POST', '/responses', 'web_search', webSearchDoc.source.url);
    const webSearchOperation = operation('web-search', 'web_search', [webSearchRoute], sourceRef, '#basic-usage', 'Web Search is exposed as a server-side tool in the Responses API.');
    capabilities.push({
      id: observed('web-search', sourceRef, '#web-search', 'The official documentation describes real-time web search and page browsing through Grok.'),
      kind: observed('web_search', sourceRef, '#sdk-support', 'Web Search is documented as a Responses API tool.'),
      links: observed({ documentation: webSearchDoc.source.url }, sourceRef, '#web-search', 'Official Web Search tool documentation.'),
      operations: [{
        ...webSearchOperation,
        ...(inputFields.length ? { input: observed(inputFields, inputDocument?.source.id ?? sourceRef, '#basic-usage', 'The official Responses API example supplies a user prompt through input[].content.') } : {}),
        parameters: observed(parameters, sourceRef, '#web-search-parameters', 'Tool configuration parameters are collected from the official Web Search parameter table and request examples.'),
        ...(outputFields.length ? { output: observed([{ kind: 'structured', fields: [...new Set(outputFields)] }], webSearchOutputDoc?.source.id ?? sourceRef, '#accessing-tool-outputs', 'Response fields and optional search source output are collected from official Web Search and Responses API documentation.') } : {}),
      }],
    });
  }
  const xSearchDoc = byId.get('xai-x-search');
  const xSearchOutputDoc = byId.get('xai-tool-streaming-sync');
  if (xSearchDoc && /"type"\s*:\s*"x_search"/.test(xSearchDoc.body)) {
    const sourceRef = xSearchDoc.source.id;
    const inputDocument = /"content"\s*:/.test(xSearchDoc.body) ? xSearchDoc : byId.get('xai-tool-streaming-sync');
    const parameters: ParameterSpec[] = [
      { name: 'tools[].type', type: 'string', required: true, enum: ['x_search'], route_mappings: ['body.tools[].type'] },
    ];
    const documentedParameters: Array<{ name: string; type: ParameterSpec['type']; default?: string | number | boolean }> = [
      { name: 'allowed_x_handles', type: 'array' },
      { name: 'excluded_x_handles', type: 'array' },
      { name: 'from_date', type: 'string' },
      { name: 'to_date', type: 'string' },
      { name: 'enable_image_understanding', type: 'boolean', default: false },
      { name: 'enable_video_understanding', type: 'boolean' },
    ];
    for (const parameter of documentedParameters) {
      if (!new RegExp(`\\b${parameter.name}\\b`).test(xSearchDoc.body)) continue;
      parameters.push({
        name: `tools[].${parameter.name}`,
        type: parameter.type,
        required: false,
        route_mappings: [`body.tools[].${parameter.name}`],
        ...(parameter.default !== undefined ? { default: parameter.default } : {}),
      });
    }
    const outputFields: string[] = [];
    if (/custom_tool_call/.test(xSearchDoc.body)) outputFields.push('response.output[].type=custom_tool_call', 'response.output[].name');
    if (/server_side_tool_usage_details/.test(xSearchDoc.body)) {
      for (const field of ['x_search_calls', 'x_posts_fetched', 'x_users_fetched']) {
        if (new RegExp(`\\b${field}\\b`).test(xSearchDoc.body)) outputFields.push(`usage.server_side_tool_usage_details.${field}`);
      }
    }
    if (/response\.output_text/.test(xSearchDoc.body) || /Final Response/.test(xSearchOutputDoc?.body ?? '')) outputFields.push('response.output_text');
    if (/citations/.test(xSearchDoc.body) || /response\.citations/.test(xSearchOutputDoc?.body ?? '')) outputFields.push('citations[]');
    const xSearchRoutes = [route(sourceRef, '#basic-usage', 'The official Responses API example enables X Search with the x_search tool.', 'x-search', 'global', 'responses', 'POST', '/responses', 'x_search', xSearchDoc.source.url)];
    const xSearchOperation = operation('x-search', 'x_search', xSearchRoutes, sourceRef, '#basic-usage', 'X Search is exposed as a server-side tool in the Responses API.');
    capabilities.push({
      id: observed('x-search', sourceRef, '#x-search', 'The official documentation describes X Search for keyword, semantic, user, and thread search on X.'),
      kind: observed('x_search', sourceRef, '#sdk-support', 'X Search is documented as a Responses API tool.'),
      links: observed({ documentation: xSearchDoc.source.url }, sourceRef, '#x-search', 'Official X Search tool documentation.'),
      operations: [{
        ...xSearchOperation,
        ...(inputDocument && /"content"\s*:/.test(inputDocument.body) ? {
          input: observed([{ name: 'input[].content', kind: 'text', required: true }], inputDocument.source.id, '#basic-usage', 'The official Responses API example supplies a user prompt through input[].content.'),
        } : {}),
        parameters: observed(parameters, sourceRef, '#x-search-parameters', 'X Search tool parameters are extracted from the official parameter table and examples.'),
        ...(outputFields.length ? { output: observed([{ kind: 'structured', fields: [...new Set(outputFields)] }], sourceRef, '#how-x-search-works', 'Response tool-call, citation, and usage fields are extracted from the official X Search response documentation.') } : {}),
      }],
    });
  }
  const batchDoc = byId.get('xai-batch-api');
  const batchReference = byId.get('xai-batches-api-reference');
  if (batchDoc) {
    const paths: Array<[string, string, string]> = [
      ['create-batch', 'POST', '/batches'], ['list-batches', 'GET', '/batches'], ['add-requests', 'POST', '/batches/{batch_id}/requests'], ['get-requests', 'GET', '/batches/{batch_id}/requests'], ['get-batch', 'GET', '/batches/{batch_id}'],
      ['list-results', 'GET', '/batches/{batch_id}/results'], ['cancel-batch', 'POST', '/batches/{batch_id}:cancel'],
    ];
    const routes = paths.map(([id, method, path]) => route(batchDoc.source.id, '#batch-workflow', `Batch 文档中的批次工作流示例/说明列出 ${method} ${path}。`, id, 'global', 'https', method, path, 'batch_processing', URLS.batch));
    const batchOperation = operation('batch_processing', 'batch_processing', routes, batchDoc.source.id, '#batch-workflow', '批处理端点按官方工作流组织。');
    const batchFacts = documentedBatchFacts(batchDoc.body, batchReference?.body ?? '');
    const inputEvidenceSource = batchFacts.inputs.some(({ name }) => name === 'batch_requests') ? batchDoc.source.id : batchReference?.source.id ?? batchDoc.source.id;
    const outputEvidenceSource = batchReference && batchFacts.outputFields.length ? batchReference.source.id : batchDoc.source.id;
    capabilities.push({ id: observed('batch-processing', batchDoc.source.id, '#what-is-the-batch-api', '官方提供可异步排队处理的 Batch API。'), kind: observed('batch', batchDoc.source.id, '#what-is-the-batch-api', '独立批处理服务，不绑定单一模型。'), operations: [{ ...batchOperation,
      ...(batchFacts.inputs.length ? { input: observed(batchFacts.inputs, inputEvidenceSource, '#batch-request-examples', '输入项由官方批量请求与 JSONL 示例中的字段结构提取。') } : {}),
      ...(batchFacts.outputFields.length ? { output: observed([{ kind: 'structured', fields: batchFacts.outputFields }], outputEvidenceSource, batchReference ? '#batch-response-examples' : '#batch-response-and-result-examples', '输出字段由官方批处理响应示例、状态字段表与结果访问路径提取。') } : {}),
      ...(batchFacts.parameters.length ? { parameters: observed(batchFacts.parameters, batchDoc.source.id, '#batch-request-examples', '参数名称与类型由官方 Batch 请求示例提取。') } : {})
    }], links: observed({ documentation: URLS.batch }, batchDoc.source.id, '#batch-workflow', '官方 Batch API 文档。') });
  }
  const filesDoc = byId.get('xai-files-api');
  let fileStorageCapability: CapabilityFact | undefined;
  if (filesDoc) {
    const paths: Array<[string, string, string]> = [['upload-file', 'POST', '/files'], ['list-files', 'GET', '/files'], ['get-file', 'GET', '/files/{file_id}'], ['delete-file', 'DELETE', '/files/{file_id}'], ['download-file', 'GET', '/files/{file_id}/content']];
    const routes = paths.map(([id, method, path]) => route(filesDoc.source.id, '#file-operations', `Files 文档列出 ${method} ${path} 操作。`, id, 'global', 'https', method, path, 'file_management', URLS.files));
    const fileOperation = operation('file_management', 'file_management', routes, filesDoc.source.id, '#file-operations', '文件操作来自官方 Files API。');
    const filesSchema = filesOperationSchema(filesDoc, paths.map(([, , path]) => path));
    fileStorageCapability = { id: observed('file-storage', filesDoc.source.id, '#managing-files', 'Files API 支持上传、列出、读取、删除和下载文件。'), kind: observed('file_storage', filesDoc.source.id, '#managing-files', '文件存储是独立 API 能力。'), operations: [{ ...fileOperation,
      ...filesSchema
    }], links: observed({ documentation: URLS.files }, filesDoc.source.id, '#managing-files', '官方 Files API 文档。') };
    const fileStorage = pricing.body.match(/\| File storage \| \$([\d.]+) \/ GiB \/ day \|/i)?.[1];
    const fileDownloads = pricing.body.match(/\| File downloads \| \$([\d.]+) \/ GiB downloaded \|/i)?.[1];
    if (fileStorage || fileDownloads) fileStorageCapability = { ...fileStorageCapability, prices: [{ capability_ref: observed('file-storage', pricing.source.id, '#files-and-collections-pricing', '费率关联到 xAI Files 存储服务。'), currency: observed('USD', pricing.source.id, '#key-information', '定价页明确 USD。'), unit: observed(fileStorage ? 'per_gib_day' : 'per_gib_download', pricing.source.id, '#files-and-collections-pricing', '保留官方按 GiB/天或下载 GiB 的计量单位。'), rules: { value: [ ...(fileStorage ? [{ rate_items: [{ metric: 'stored_data', unit: 'per_gib_day', quantity: 1, amount_decimal: fileStorage }], evidence: [{ source_ref: pricing.source.id, locator: '#files-and-collections-pricing/file-storage', assertion: '官方 Files 存储费率为 USD/GiB/day。' }] }] : []), ...(fileDownloads ? [{ rate_items: [{ metric: 'downloaded_data', unit: 'per_gib_download', quantity: 1, amount_decimal: fileDownloads }], evidence: [{ source_ref: pricing.source.id, locator: '#files-and-collections-pricing/file-downloads', assertion: '官方 Files 下载费率为 USD/GiB downloaded。' }] }] : []) ], evidence: [{ source_ref: pricing.source.id, locator: '#files-and-collections-pricing', assertion: '保留 Files 存储与下载的公开官方计量价格。' }] } }] };
    capabilities.push(fileStorageCapability);
  }
  const collectionsDoc = byId.get('xai-collections-api');
  if (collectionsDoc) {
    const paths: Array<[string, string, string]> = [['create-collection', 'POST', '/collections'], ['list-collections', 'GET', '/collections'], ['get-collection', 'GET', '/collections/{collection_id}'], ['update-collection', 'PUT', '/collections/{collection_id}'], ['delete-collection', 'DELETE', '/collections/{collection_id}'], ['add-document', 'POST', '/collections/{collection_id}/documents/{file_id}'], ['remove-document', 'DELETE', '/collections/{collection_id}/documents/{file_id}']];
    const routes = paths.map(([id, method, path]) => route(collectionsDoc.source.id, '#collection-management', `Collections API 参考列出 ${method} ${path}；使用 Management API Key。`, id, 'management', 'rest-json', method, path, 'collection_management', collectionsDoc.source.url));
    const collectionStorage = pricing.body.match(/\| Collection storage \| \$([\d.]+)\s*\/ GiB \/ day \|/i)?.[1];
    const collectionDownloads = pricing.body.match(/\| Collection downloads \| \$([\d.]+) \/ GiB downloaded \|/i)?.[1];
    const priceItems = [ ...(collectionStorage ? [{ metric: 'stored_data', unit: 'per_gib_day', quantity: 1, amount_decimal: collectionStorage }] : []), ...(collectionDownloads ? [{ metric: 'downloaded_data', unit: 'per_gib_download', quantity: 1, amount_decimal: collectionDownloads }] : []) ];
    const collectionOperation = operation('collection_management', 'collection_management', routes, collectionsDoc.source.id, '#collection-management', 'Collections 管理 API 端点。');
    capabilities.push({ id: observed('collection-management', collectionsDoc.source.id, '#collection-management', '官方 Collections API 支持集合与文档管理。'), kind: observed('collections', collectionsDoc.source.id, '#collection-management', '独立集合管理 API，需要 Management API Key。'), operations: [{ ...collectionOperation,
      input: observed([{ name: 'document', kind: 'file', required: false }], collectionsDoc.source.id, '#add-existing-document', 'Collection documents are added by referencing an uploaded file ID.'),
      output: observed([{ kind: 'structured', fields: ['collection_id', 'collection_name', 'created_at', 'index_configuration', 'chunk_configuration', 'documents_count', 'collection_description', 'documents.file_metadata', 'documents.fields', 'documents.status', 'documents.error_message'] }], collectionsDoc.source.id, '#collection-management', 'Fields are collected from official collection and document response schemas.'),
      parameters: mappedParameters([
        { name: 'collection_id', type: 'string', required: true,  route_mappings: ['/collections/{collection_id}'] },
        { name: 'collection_name', type: 'string', required: true,  route_mappings: ['/collections:body.collection_name'] },
        { name: 'index_configuration', type: 'object', required: false,  route_mappings: ['/collections:body.index_configuration'] },
        { name: 'chunk_configuration', type: 'object', required: false,  route_mappings: ['/collections:body.chunk_configuration'] },
        { name: 'collection_description', type: 'string', required: false,  route_mappings: ['/collections:body.collection_description'] },
        { name: 'file_id', type: 'string', required: true,  route_mappings: ['/collections/{collection_id}/documents/{file_id}'] },
        { name: 'fields', type: 'object', required: false,  route_mappings: ['/collections/{collection_id}/documents/{file_id}:body.fields'] },
        { name: 'limit', type: 'integer', required: false,  route_mappings: ['/collections:query.limit'] },
        { name: 'team_id', type: 'string', required: false,  route_mappings: ['/collections:query.team_id'] },
        { name: 'order', type: 'string', required: false,  route_mappings: ['/collections:query.order'] },
        { name: 'sort_by', type: 'string', required: false,  route_mappings: ['/collections:query.sort_by'] },
        { name: 'filter', type: 'string', required: false,  route_mappings: ['/collections:query.filter'] },
        { name: 'pagination_token', type: 'string', required: false,  route_mappings: ['/collections:query.pagination_token'] },
      ], collectionsDoc.source.id, '#collection-management', 'Parameters are collected from official collection request and route schemas.')
    }], links: observed({ documentation: collectionsDoc.source.url }, collectionsDoc.source.id, '#collection-management', '官方 Collections API 参考。'), ...(priceItems.length ? { prices: [{ capability_ref: observed('collection-management', pricing.source.id, '#files-and-collections-pricing', '费率关联到 xAI Collections 管理服务。'), currency: observed('USD', pricing.source.id, '#key-information', '定价页明确 USD。'), unit: observed('per_gib_day', pricing.source.id, '#files-and-collections-pricing', '存储费率按 GiB/day。'), rules: { value: priceItems.map((item) => ({ rate_items: [item], evidence: [{ source_ref: pricing.source.id, locator: '#files-and-collections-pricing/collections', assertion: '官方 Collections 存储与下载按 GiB 计费。' }] })), evidence: [{ source_ref: pricing.source.id, locator: '#files-and-collections-pricing', assertion: '保留 Collections 存储和下载费率。' }] } }] } : {}) });
  }
  if (voiceDoc) {
    const sttDoc = byId.get('xai-speech-to-text');
    const sttGuide = byId.get('xai-speech-to-text-guide');
    const ttsDoc = byId.get('xai-text-to-speech');
    const speechRoute = route(sttGuide?.source.id ?? sttDoc?.source.id ?? voiceDoc.source.id, '#quick-start', 'The official Speech-to-Text guide documents file-based transcription through POST /stt.', 'speech-to-text', 'global', 'rest-json', 'POST', '/stt', 'transcription', sttGuide?.source.url ?? sttDoc?.source.url ?? URLS.voice, sttDoc ? 'grok-voice-transcribe-2.0' : undefined);
    const ttsRoute = route(ttsDoc?.source.id ?? voiceDoc.source.id, '#text-to-speech', 'Text-to-Speech 文档列出 REST 与流式语音生成端点。', 'text-to-speech', 'global', 'https', 'POST', '/tts', 'speech_generation', ttsDoc?.source.url ?? URLS.voice);
    const sttCost = voiceTable?.rows.find(([label]) => label === 'Speech to Text')?.[1] ?? '';
    const ttsCost = voiceTable?.rows.find(([label]) => label === 'Text to Speech')?.[1] ?? '';
    const sttRest = sttCost.match(/\$([\d.]+)\s*\/\s*hr\s*\(REST\)/i)?.[1];
    const sttStreaming = sttCost.match(/\$([\d.]+)\s*\/\s*hr\s*\(Streaming\)/i)?.[1];
    if (sttRest && sttStreaming && sttDoc) offerings.push({ provider_model_id: observed('grok-voice-transcribe-2.0', sttDoc.source.id, '#default-model', '官方 Speech-to-Text 专属页面明确默认模型 ID。'), display_name: observed('grok-voice-transcribe-2.0', sttDoc.source.id, '#default-model', '采用官方模型 ID 展示。'), service_id: observed('global', sttDoc.source.id, '#speech-to-text', 'Speech-to-Text 为全球 API Service。'), supply_observations: [{ kind: 'listed_current', evidence: [{ source_ref: sttDoc.source.id, locator: '#default-model', assertion: '官方 Speech-to-Text 页面说明此为默认模型。' }] }], operations: [operation('transcription', 'transcription', [speechRoute], sttDoc.source.id, '#speech-to-text', '官方列出该默认模型及 /stt REST API。')], prices: [{ provider_model_id: observed('grok-voice-transcribe-2.0', sttDoc.source.id, '#default-model', '价格归属以默认模型说明与该操作价格共同映射。'), operation_ref: observed('transcription', sttDoc.source.id, '#speech-to-text', 'REST/Streaming STT 操作价格。'), currency: observed('USD', pricing.source.id, '#key-information', '定价页明确所有价格为 USD。'), unit: observed('per_input_audio_hour', pricing.source.id, '#voice-pricing', '官方按输入音频小时计价。'), rules: { value: [
      { rate_items: [{ metric: 'input_audio_hour', unit: 'per_input_audio_hour', quantity: 1, amount_decimal: sttRest }], evidence: [{ source_ref: pricing.source.id, locator: '#voice-pricing/speech-to-text', assertion: '官方列出 REST Speech-to-Text 每小时费率。' }] },
      { rate_items: [{ metric: 'input_audio_hour', unit: 'per_input_audio_hour', quantity: 1, amount_decimal: sttStreaming }], conditions: [{ field: 'transport', operator: 'eq', value: 'streaming' }], evidence: [{ source_ref: pricing.source.id, locator: '#voice-pricing/speech-to-text', assertion: '官方列出 Streaming Speech-to-Text 每小时费率。' }] },
    ], evidence: [{ source_ref: pricing.source.id, locator: '#voice-pricing/speech-to-text', assertion: '保留 REST 与 Streaming 两个官方计费档位。' }] } }] });
    const ttsAmount = ttsCost.match(/\$([\d.]+)\s*\/\s*1M chars/i)?.[1];
    const ttsPrices: PriceFact[] = ttsAmount ? [{ operation_ref: observed('speech_generation', voiceDoc.source.id, '#text-to-speech', '官方 TTS 价格按字符计费。'), currency: observed('USD', pricing.source.id, '#key-information', '定价页明确所有价格为 USD。'), unit: observed('per_1m_characters', pricing.source.id, '#voice-pricing', '官方标价为每百万字符。'), rules: { value: [{ rate_items: [{ metric: 'character', unit: 'per_1m_characters', quantity: 1_000_000, amount_decimal: ttsAmount }], evidence: [{ source_ref: pricing.source.id, locator: '#voice-pricing/text-to-speech', assertion: '官方列出 TTS 每百万字符费率。' }] }], evidence: [{ source_ref: pricing.source.id, locator: '#voice-pricing/text-to-speech', assertion: '保留原始 USD/百万字符报价。' }] } }] : [];
    const transcriptionOperation = operation('transcription', 'transcription', [speechRoute], voiceDoc.source.id, '#speech-to-text', '文档给出 REST/Streaming Speech-to-Text 能力。');
    let transcriptionCapabilityInputs: OperationFact['input'];
    let transcriptionCapabilityOutputs: OperationFact['output'];
    let transcriptionParameters: OperationFact['parameters'];
    if (sttGuide) {
      const requestTable = documentTableRows(sttGuide, ['parameter', 'type', 'required', 'description'])
        .find(({ heading }) => /request body/i.test(heading));
      const requestFields = requestTable?.rows ?? [];
      const requestHeaders = requestTable?.headers ?? [];
      const requestColumn = (name: string) => requestHeaders.findIndex((header) => header === name);
      const fileRow = requestFields.find((row) => plainText(row[requestColumn('parameter')] ?? '').replaceAll('`', '').trim().toLowerCase() === 'file');
      const urlRow = requestFields.find((row) => plainText(row[requestColumn('parameter')] ?? '').replaceAll('`', '').trim().toLowerCase() === 'url');
      const maxFileMb = plainText(fileRow?.[requestColumn('description')] ?? '').match(/max\s+(\d+)\s*MB/i)?.[1];
      if (fileRow || urlRow || /raw audio as binary WebSocket frames/i.test(sttGuide.body)) {
        transcriptionCapabilityInputs = observed([{
          name: 'audio', kind: 'audio', required: true,
          ...(maxFileMb ? { media: { max_bytes: Number(maxFileMb) * 1024 * 1024 } } : {}),
        }], sttGuide.source.id, '#request-body', 'The official guide documents REST audio file or URL input and raw binary audio frames for streaming.');
      }
      const responseTable = documentTableRows(sttGuide, ['field', 'type', 'description'])
        .find(({ heading }) => /^response$/i.test(heading));
      const responseFields = responseTable?.rows.map((row) => plainText(row[0] ?? '').replaceAll('`', '').trim()).filter(Boolean) ?? [];
      const wsFields: string[] = [];
      for (const eventType of ['transcript.created', 'transcript.partial', 'transcript.done', 'error']) {
        if (sttGuide.body.includes(eventType)) wsFields.push(`event.type=${eventType}`);
      }
      for (const field of ['text', 'is_final', 'duration', 'language', 'words', 'channels', 'channel_index', 'speech_final', 'chunk_final', 'end_of_turn_confidence']) {
        if (new RegExp(`(?:event\\.|event\\[)[^\\n]{0,120}\\b${field}\\b|\\b${field}\\b`).test(sttGuide.body)) wsFields.push(`event.${field}`);
      }
      const outputs = [
        ...(responseFields.length ? [{ kind: 'structured' as const, fields: responseFields }] : []),
        ...(wsFields.length ? [{ kind: 'structured' as const, streaming: true as const, fields: [...new Set(wsFields)] }] : []),
      ];
      if (outputs.length) transcriptionCapabilityOutputs = observed(outputs, sttGuide.source.id, '#response', 'REST response fields and streaming transcript events are collected from the official guide.');
      const restParameters = requestParameters(sttGuide.body, '/stt', ['file'], sttGuide);
      const streamParameters = queryParameters(sttGuide);
      const parametersByName = new Map<string, typeof restParameters[number]>();
      for (const parameter of [...restParameters, ...streamParameters]) {
        const existing = parametersByName.get(parameter.name);
        if (!existing) parametersByName.set(parameter.name, parameter);
        else {
          const mappings = [...new Set([...existing.route_mappings, ...parameter.route_mappings])];
          const defaultValue = JSON.stringify(existing.default) === JSON.stringify(parameter.default) ? existing.default : undefined;
          parametersByName.set(parameter.name, {
            ...existing,
            ...(defaultValue !== undefined ? { default: defaultValue } : { default: undefined }),
            route_mappings: mappings,
          });
        }
      }
      if (parametersByName.size) transcriptionParameters = observed([...parametersByName.values()].map(({ default: defaultValue, ...parameter }) => ({ ...parameter, ...(defaultValue !== undefined ? { default: defaultValue } : {}) })), sttGuide.source.id, '#request-body/query-parameters', 'REST multipart fields and WebSocket query parameters are extracted from the official Speech-to-Text tables.');
    }
    const speechStreamingRoute = route(sttGuide?.source.id ?? voiceDoc.source.id, '#streaming-speech-to-text', 'The official Speech-to-Text guide documents real-time transcription over WebSocket.', 'speech-to-text-streaming', 'global-wss', 'websocket', 'GET', '/stt', 'transcription', sttGuide?.source.url ?? URLS.voice, 'grok-voice-transcribe-2.0');
    capabilities.push({ id: observed('speech-to-text', voiceDoc.source.id, '#speech-to-text', '官方 Voice 文档提供语音转文字 API。'), kind: observed('transcription', voiceDoc.source.id, '#speech-to-text', '语音识别 API 作为独立操作展示；模型和模型价格保留在对应 Offering。'), operations: [{ ...transcriptionOperation, routes: [...transcriptionOperation.routes, speechStreamingRoute], ...(transcriptionCapabilityInputs ? { input: transcriptionCapabilityInputs } : {}), ...(transcriptionCapabilityOutputs ? { output: transcriptionCapabilityOutputs } : {}), ...(transcriptionParameters ? { parameters: transcriptionParameters } : {}) }], links: observed({ documentation: sttGuide?.source.url ?? sttDoc?.source.url ?? URLS.voice }, sttGuide?.source.id ?? sttDoc?.source.id ?? voiceDoc.source.id, '#speech-to-text', '官方 Speech-to-Text 指南。') });
    if (ttsDoc) {
      const ttsOperation = operation('speech_generation', 'speech_generation', [ttsRoute], ttsDoc.source.id, '#request-body', 'Text-to-Speech request and response are defined in the official API guide.');
      const ttsParameters = requestParameters(ttsDoc.body, '/tts', ['text']);
      const responseHasAudio = /response body contains raw audio bytes|audio output/i.test(ttsDoc.body);
      capabilities.push({ id: observed('text-to-speech', ttsDoc.source.id, '#text-to-speech', '官方 Text-to-Speech 文档提供文本转语音 API。'), kind: observed('speech_generation', ttsDoc.source.id, '#text-to-speech', '文本转语音 API 是独立服务，不在无精确模型 ID 时伪造 Offering。'), operations: [{ ...ttsOperation,
        input: observed([{ name: 'text', kind: 'text', required: true }], ttsDoc.source.id, '#request-body', 'Official TTS request schema requires text input.'),
        ...(responseHasAudio ? { output: observed([{ kind: 'audio', media: { codec: ['mp3', 'wav', 'pcm', 'mulaw', 'alaw'] }, streaming: true, fields: ['audio', 'content_type', 'duration', 'audio_timestamps.graph_chars', 'audio_timestamps.graph_times'] }], ttsDoc.source.id, '#response-shape', 'Official TTS guide documents raw audio bytes, streaming, and optional timed audio response fields.') } : {}),
        ...(ttsParameters.length ? { parameters: observed(ttsParameters, ttsDoc.source.id, '#request-body', 'Text-to-Speech parameters are extracted from the official Request Body table.') } : {})
      }], links: observed({ documentation: ttsDoc.source.url }, ttsDoc.source.id, '#text-to-speech', '官方 Text-to-Speech 文档。'), ...(ttsPrices.length ? { prices: ttsPrices } : {}) });
    }
  }

  const endpointTable = tableRows(pricing.body, ['global endpoint', 'us regional endpoint'])
    .find(({ rows }) => rows.some(([label]) => label?.trim().toLowerCase() === 'base url'));
  const endpointHeader = endpointTable?.headers ?? [];
  const baseUrlRow = endpointTable?.rows.find(([label]) => label?.trim().toLowerCase() === 'base url') ?? [];
  const globalBaseUrl = baseUrlRow[endpointHeader.findIndex((header) => header.includes('global endpoint'))]?.replaceAll('`', '').trim();
  const usBaseUrl = baseUrlRow[endpointHeader.findIndex((header) => header.includes('us regional endpoint'))]?.replaceAll('`', '').trim();
  const realtimeUrl = voiceDoc?.body.match(/wss:\/\/api\.x\.ai\/v1\/realtime/i)?.[0];
  const realtimeBaseUrl = realtimeUrl?.replace(/\/realtime$/i, '');
  const endpointDefinitions = [
    ...(globalBaseUrl && /^https:\/\/api\.x\.ai\/v1$/.test(globalBaseUrl) ? [{ id: 'global', base_url: globalBaseUrl, api_region: 'Global', ref: pricing.source.id }] : []),
    ...(realtimeBaseUrl && /^wss:\/\/api\.x\.ai\/v1$/.test(realtimeBaseUrl) ? [{ id: 'global-wss', base_url: 'https://api.x.ai/v1', api_region: 'Global', ref: voiceDoc!.source.id }] : []),
    ...(usBaseUrl && /^https:\/\/us\.api\.x\.ai\/v1$/.test(usBaseUrl) ? [{ id: 'us-regional', base_url: usBaseUrl, api_region: 'United States', region_code: 'US', ref: pricing.source.id }] : []),
    ...(byId.has('xai-collections-api') && /https:\/\/management-api\.x\.ai\/v1\/?/.test(byId.get('xai-collections-api')!.body) ? [{ id: 'management', base_url: 'https://management-api.x.ai/v1', api_region: 'Global', ref: 'xai-collections-api' }] : []),
  ];
  const endpoints = endpointDefinitions.map(({ id, base_url, api_region, region_code, ref }) => {
    const assertion = `官方文档列出 API Endpoint：${base_url}。`;
    const evidence = [{ source_ref: ref, locator: id === 'us-regional' ? '#us-regional-endpoint-pricing' : '#base-url', assertion }];
    return { id: { value: id, evidence }, base_url: { value: base_url, evidence }, api_region: { value: api_region, evidence }, ...(region_code ? { region_code: { value: region_code, evidence } } : {}), documentation: { value: id === 'global-wss' ? URLS.voice : URLS.pricing, evidence } };
  });

  const sourceNotes: Record<string, string> = {
    'xai-models': `由官方定价精确模型 ID 映射当前价格模型；目前 ${offerings.length} 条。目录中的未计价文案不自动升级为供应。`,
    'xai-pricing': '结构化映射公开按量 API 模型和能力价格；这些费率与 X Subscription 订阅费分开记录。',
    'xai-subscription-pricing': `结构化映射 X Subscription 周期价格与用量倍率；当前解析 ${subscriptionPlans.plans.length} 个个人及团队档位。订阅用量不是 API 调用额度。`,
    'xai-models-api': '账号 API Key 范围接口未调用；此端点的模型列表无法公开采集。',
    'xai-release-notes': '保留官方变更日志观察；不由单条发布说明自动判断当前供应或退役。',
    'xai-tools-overview': '工具为模型请求内置服务端工具，不作为独立无模型服务；按公开说明在模型操作上展示。',
    'xai-web-search': 'Web Search is mapped as an independent Service capability from the official tool guide; this does not infer per-model support.',
    'xai-x-search': '已采集为模型 API 服务端工具，不推导全模型支持矩阵。',
    'xai-code-execution': '已映射 Code Execution 的 Responses input 与代码执行输出；输出字段由 Streaming & Sync 文档补充。',
    'xai-tool-streaming-sync': '映射同步文本结果与服务端工具输出选项。',
    'xai-batch-api': '独立批处理 API 已映射；逐模型批量折扣见价格来源。',
    'xai-files-api': 'Files/Collections 能力与用量计费已映射。',
    'xai-voice': 'Voice STS、STT、TTS 能力已映射；价格来源中 STS 模型 ID 与 STT 默认模型需分开解释。',
    'xai-imagine': 'Imagine 的图像/视频模型、价格与公开 API 路由已映射。',
    'xai-regions': '仅 grok-4.7 与 grok-4.6 映射到 US regional Endpoint；不把该区域可用性扩展到其它 API。',
  };
  const coverage: ProviderCollectionIR['coverage'][number][] = XAI_INGEST_SOURCES.flatMap((source) => {
    if (!byId.has(source.id)) return [];
    const scope = source.scope;
    if (!scope || scope === 'plan') return [];
    const status = 'partial' as const;
    return [{ source_ref: source.id, scope, market: 'global' as const, status, note: sourceNotes[source.id] ?? '对应官方资料已保存；IR 只记录此适配器能由该页面直接证实的字段。' }];
  });
  for (const [sourceId, recordCount] of [
    ['xai-subscription-pricing', subscriptionPlans.plans.length],
  ] as const) {
    if (!byId.has(sourceId)) continue;
    coverage.push({
      source_ref: sourceId,
      scope: 'plan',
      market: 'global',
      status: subscriptionPlans.reviewItems.length === 0 ? 'complete' : 'partial',
      record_count: recordCount,
      record_unit: 'PlanFact records',
      note: '覆盖官方当前 X Subscription 个人月付/年付与 Teams 席位月付；不推断既有 SuperGrok / Cursor / X Premium 旧订阅价格，也不将订阅用量视为 API 调用额度。',
    });
  }
  const profileSource = modelCatalog.source.id;
  return {
    ...ir,
    profile: {
      ...ir.profile,
      name: observed('xAI', profileSource, 'xAI Developers', 'xAI 官方开发者站点。'),
      aliases: observed(['Grok API'], profileSource, '#models', '官方模型目录展示 Grok API 模型。'),
      kind: observed('first_party' as const, profileSource, '#models', '这是 xAI 自营 API。'),
      docs: observed({ overview: URLS.models, pricing: URLS.pricing, api: `${DOC}/rest-api-reference/inference`, voice: URLS.voice, image: URLS.images, video: URLS.videos }, profileSource, 'xAI developer documentation navigation', '记录官方可读开发者文档链接。'),
    },
    coverage,
    services: [{
      id: observed('global', pricing.source.id, '#pricing', 'API 价格以 USD 公示，属于 xAI 全球按量 API Service。'),
      name: observed('xAI API', pricing.source.id, '#pricing', '官方定价页描述 xAI API。'),
      endpoints,
      offerings,
      capabilities,
      plans: subscriptionPlans.plans,
    } satisfies ServiceFacts],
    review_items: [
      ...ir.review_items.filter(({ id }) => !id.startsWith('xai-')),
      ...(byId.has('xai-web-search') && byId.has('xai-x-search') ? [{ id: 'xai-model-bound-tools-unmapped', kind: 'incomplete_coverage' as const, message: '已采集 Web Search 与 X Search 工具文档和价格，但未找到通用来源中可确认支持这些工具的完整模型矩阵；保留为文档观察，不批量绑定每个模型。', evidence: [{ source_ref: 'xai-web-search', locator: '#web-search', assertion: '工具文档说明如何在请求中启用 Web Search。' }, { source_ref: 'xai-x-search', locator: '#x-search', assertion: '工具文档说明如何在请求中启用 X Search。' }] }] : []),
      ...(!byId.has('xai-batch-api') || !byId.has('xai-files-api') || !byId.has('xai-voice') || !byId.has('xai-imagine') ? [{ id: 'xai-capability-docs-missing', kind: 'incomplete_coverage' as const, message: 'Batch、Files、Voice 或 Imagine 官方能力文档缺失，能力字段覆盖不完整。', evidence: documents.map(({ source }) => ({ source_ref: source.id, assertion: '本轮来源检查记录。' })) }] : []),
      ...subscriptionPlans.reviewItems,
    ],
    collection_notes: [...(ir.collection_notes ?? []), 'X Subscription 是账号产品订阅，并非 API 按量费率；不能把订阅用量倍率当成 API 价格倍率。', '本轮未检出固定 Enterprise 价格；官方公开文档只列自助订阅及 Teams 席位价格。', '本候选未请求需 API Key 的 Models API。'],
  };
}

const CONFIG = {
  providerId: 'xai',
  displayName: 'xAI',
  sources: XAI_INGEST_SOURCES,
  modelIdPattern: /\b(?:grok|imagine|voice)-[a-z0-9][a-z0-9.-]*\b/gi,
  knownLimitations: [
    'Inference API `/v1/models` 返回认证 API Key 可见型号；本适配器不携带凭证请求该接口。',
    '当前供应仅由官方当前定价表中的精确模型价格行证明；目录中的别名、旧型号和文案提及不自动等同于可计价供应。',
    'US regional endpoint 仅适用于官方明确列出的 grok-4.7 / grok-4.6；global 和 US 区域不合并费率。',
    'X Subscription 产品订阅与按量 API 费率分开；付费订阅中的 API access 不等于包含 API 调用额度。',
  ],
  mapToIR: (documents: readonly CapturedDocument[], _facts: OfficialDocsCandidateFacts, baseIR: ProviderCollectionIR) => mapXaiProviderFacts(documents, baseIR),
} as const;

export function collectXAI(options: { readonly repoRoot: string }) {
  return collectOfficialProviderDocs(CONFIG, options);
}

export const xaiCollectorConfig = CONFIG;
export const xaiParser = { mapXaiProviderFacts, parseTokenPricing };
