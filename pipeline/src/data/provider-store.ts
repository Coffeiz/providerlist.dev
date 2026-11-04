import { readdir, readFile, mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { serviceNameForId, type Offering, type Plan, type Provider, type ProviderDocument, type Service, type ServiceSource } from '@providerlist/schema/types';
import { parseToml, stringifyToml } from './toml.ts';

const SOURCE_SCHEMA_VERSION = '1.0.0';
const SOURCE_GENERATED_AT = '1970-01-01T00:00:00.000Z';

/** Load TOML source records and legacy JSON fixtures used by pipeline tests. */
export async function loadProviderDocumentsFromDirectory(dataDir: string): Promise<ProviderDocument[]> {
  const providersDir = path.join(dataDir, 'providers');
  if (!existsSync(providersDir)) return [];
  const entries = (await readdir(providersDir, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name));
  const documents: ProviderDocument[] = [];
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.json')) {
      documents.push(JSON.parse(await readFile(path.join(providersDir, entry.name), 'utf8')) as ProviderDocument);
    } else if (entry.isDirectory() && (existsSync(path.join(providersDir, entry.name, 'provider.toml')) || existsSync(path.join(providersDir, entry.name, 'provider.json')))) {
      documents.push(await readProviderSource(dataDir, entry.name));
    }
  }
  return documents;
}

export async function readProviderSource(dataDir: string, providerId: string): Promise<ProviderDocument> {
  const providerDir = path.join(dataDir, 'providers', providerId);
  const legacyPath = path.join(providersDir(dataDir), `${providerId}.json`);
  const providerTomlPath = path.join(providerDir, 'provider.toml');

  if (!existsSync(providerTomlPath) && !existsSync(path.join(providerDir, 'provider.json')) && existsSync(legacyPath)) {
    return JSON.parse(await readFile(legacyPath, 'utf8')) as ProviderDocument;
  }

  const provider = existsSync(providerTomlPath)
    ? parseToml<Provider>(await readFile(providerTomlPath, 'utf8'), providerTomlPath)
    : (JSON.parse(await readFile(path.join(providerDir, 'provider.json'), 'utf8')) as { provider: Provider }).provider;
  if (provider.id !== providerId) throw new Error(`Provider id must match its directory: ${providerTomlPath}`);

  const serviceDirs = (await readdir(providerDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && (existsSync(path.join(providerDir, entry.name, 'service.toml')) || existsSync(path.join(providerDir, entry.name, 'service.json'))))
    .sort((a, b) => a.name.localeCompare(b.name));
  const services: Service[] = [];
  const plans: Plan[] = [];

  for (const entry of serviceDirs) {
    const serviceDir = path.join(providerDir, entry.name);
    const serviceTomlPath = path.join(serviceDir, 'service.toml');
    const serviceJsonPath = path.join(serviceDir, 'service.json');
    const isTomlSource = existsSync(serviceTomlPath);
    const storedService = isTomlSource
      ? parseToml<Record<string, unknown>>(await readFile(serviceTomlPath, 'utf8'), serviceTomlPath)
      : (JSON.parse(await readFile(serviceJsonPath, 'utf8')) as Record<string, unknown>);

    for (const identityField of ['id', 'provider_id', 'name']) {
      if (Object.hasOwn(storedService, identityField)) {
        throw new Error(`Service ${identityField} is derived from its path/market dictionary and must not be stored: ${existsSync(serviceTomlPath) ? serviceTomlPath : serviceJsonPath}`);
      }
    }
    const name = serviceNameForId(entry.name);
    if (!name) throw new Error(`Unknown market directory ${entry.name}: ${serviceDir}`);

    const offeringsDir = path.join(serviceDir, 'offerings');
    const storedOfferings = existsSync(offeringsDir)
      ? await readOfferingDirectory(offeringsDir, entry.name)
      : [];
    const servicePlans = await readPlans(serviceDir, entry.name);
    const { plan_ids: _storedPlanIds, ...serviceData } = storedService;
    const serviceFields = isTomlSource ? serviceSourceToContract(serviceData, serviceTomlPath) : serviceData;
    services.push({
      ...serviceFields,
      id: entry.name,
      provider_id: providerId,
      name,
      ...(servicePlans.length ? { plan_ids: servicePlans.map((plan) => plan.id) } : {}),
      offerings: storedOfferings,
    } as Service);
    plans.push(...servicePlans);
  }

  return {
    schema_version: SOURCE_SCHEMA_VERSION,
    data_version: 'source',
    generated_at: SOURCE_GENERATED_AT,
    provider,
    services,
    ...(plans.length ? { plans } : {}),
  };
}

/** Persist one validated Provider document as provider / market / offering / plan TOML files. */
export async function writeProviderSource(dataDir: string, document: ProviderDocument): Promise<string[]> {
  const providersDir = providersDirPath(dataDir);
  const providerDir = path.join(providersDir, document.provider.id);
  await mkdir(providerDir, { recursive: true });
  const written: string[] = [];
  const serviceIds = new Set(document.services.map((service) => service.id));
  const assignedPlans = (document.plans ?? []).filter((plan) => !serviceIds.has(plan.service_ref));
  if (assignedPlans.length) throw new Error(`Provider ${document.provider.id} has Plans referencing unknown Services: ${assignedPlans.map((plan) => plan.id).join(', ')}`);

  await writeToml(path.join(providerDir, 'provider.toml'), document.provider as unknown as Record<string, unknown>, written);
  for (const service of document.services) {
    const serviceDir = path.join(providerDir, service.id);
    await mkdir(serviceDir, { recursive: true });
    const { id: _id, provider_id: _providerId, name: _name, offerings = [], sources: _sources, plan_ids: _planIds, ...serviceFields } = service;
    const storedService: ServiceSource = serviceFields;
    await writeToml(path.join(serviceDir, 'service.toml'), serviceContractToSource(storedService as unknown as Record<string, unknown>), written);
    await writeOfferingDirectory(path.join(serviceDir, 'offerings'), offerings, written);

    const servicePlans = (document.plans ?? []).filter((plan) => plan.service_ref === service.id);
    const plansPath = path.join(serviceDir, 'plans.toml');
    if (servicePlans.length) {
      const storedPlans = servicePlans.map(({ service_ref: _serviceRef, ...plan }) => plan);
      await writeToml(plansPath, { plans: storedPlans }, written);
    } else {
      await rm(plansPath, { force: true });
    }

    await removeJsonSources(serviceDir);
  }

  for (const entry of await readdir(providerDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === 'provider.json') await rm(path.join(providerDir, entry.name), { force: true });
    if (!entry.isDirectory() || serviceIds.has(entry.name)) continue;
    const staleDir = path.join(providerDir, entry.name);
    const contents = await readdir(staleDir);
    if (contents.every((name) => ['service.toml', 'service.json', 'offerings.toml', 'offerings.json', 'offerings', 'plans.toml', 'plans.json'].includes(name))) {
      await rm(staleDir, { recursive: true, force: true });
    }
  }
  await rm(path.join(providersDir, `${document.provider.id}.json`), { force: true });
  return written;
}

async function readPlans(serviceDir: string, serviceId: string): Promise<Plan[]> {
  const tomlPath = path.join(serviceDir, 'plans.toml');
  const jsonPath = path.join(serviceDir, 'plans.json');
  if (existsSync(tomlPath) && existsSync(jsonPath)) throw new Error(`Duplicate TOML and JSON Plan sources: ${serviceDir}`);
  if (existsSync(tomlPath)) {
    const parsed = parseToml<{ plans?: unknown }>(await readFile(tomlPath, 'utf8'), tomlPath);
    if (!Array.isArray(parsed.plans)) throw new Error(`Expected [[plans]] entries in ${tomlPath}`);
    return parsed.plans.map((item) => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) throw new Error(`Expected a Plan table in ${tomlPath}`);
      const plan = item as Record<string, unknown>;
      if (Object.hasOwn(plan, 'service_ref')) throw new Error(`Plan service_ref is derived from its market directory: ${tomlPath}`);
      if (typeof plan.id !== 'string' || !plan.id) throw new Error(`Plan id is required in ${tomlPath}`);
      return { ...plan, service_ref: serviceId } as unknown as Plan;
    });
  }
  if (!existsSync(jsonPath)) return [];
  const value = JSON.parse(await readFile(jsonPath, 'utf8')) as unknown;
  if (!Array.isArray(value)) throw new Error(`Expected a JSON array: ${jsonPath}`);
  return (value as Plan[]).map((plan) => {
    if (plan.service_ref !== serviceId) throw new Error(`Plan service_ref must match its market directory: ${jsonPath}`);
    return plan;
  });
}

async function readOfferingDirectory(directory: string, serviceId: string): Promise<Offering[]> {
  const files = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && /\.(?:toml|json)$/.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));
  const names = new Set(files.map((entry) => entry.name.replace(/\.(?:toml|json)$/, '')));
  if (names.size !== files.length) throw new Error(`Duplicate TOML and JSON Offering sources: ${directory}`);
  const offerings: Offering[] = [];
  for (const entry of files) {
    const filePath = path.join(directory, entry.name);
    const source = await readFile(filePath, 'utf8');
    const value = entry.name.endsWith('.toml')
      ? parseToml<unknown>(source, filePath)
      : JSON.parse(source) as unknown;
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      throw new Error(`Expected a single Offering object: ${filePath}`);
    }
    const record = value as Omit<Offering, 'service_id'> & { service_id?: string };
    if (typeof record.id !== 'string' || record.id.length === 0) {
      throw new Error(`Offering must have a non-empty id: ${filePath}`);
    }
    if (Object.hasOwn(record, 'service_id')) {
      throw new Error(`Offering files inherit service_id from their directory and must not store it: ${filePath}`);
    }
    if (entry.name !== `${offeringFileStem(record.id)}.${entry.name.endsWith('.toml') ? 'toml' : 'json'}`) {
      throw new Error(`Offering filename must match its escaped id: ${filePath}`);
    }
    const modelRef = (record as { model_ref?: unknown }).model_ref;
    offerings.push({
      ...record,
      model_ref: modelRef === 'unknown' ? null : record.model_ref,
      service_id: serviceId,
    } as Offering);
  }
  return offerings;
}

async function writeOfferingDirectory(directory: string, offerings: readonly Offering[], written: string[]): Promise<void> {
  await mkdir(directory, { recursive: true });
  const expected = new Set<string>();
  for (const offering of offerings) {
    const fileName = `${offeringFileStem(offering.id)}.toml`;
    if (expected.has(fileName)) throw new Error(`Offering IDs collide on source filename ${fileName}: ${directory}`);
    expected.add(fileName);
    const { service_id: _serviceId, ...sourceOffering } = offering;
    const normalized = sourceOffering.model_ref === null
      ? { ...sourceOffering, model_ref: 'unknown' }
      : sourceOffering;
    await writeToml(path.join(directory, fileName), normalized as unknown as Record<string, unknown>, written);
  }
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isFile() && /\.(?:toml|json)$/.test(entry.name) && !expected.has(entry.name)) {
      await rm(path.join(directory, entry.name), { force: true });
    }
  }
}

function offeringFileStem(id: string): string {
  return encodeURIComponent(id).replace(/%2F/giu, '·');
}

function serviceSourceToContract(value: Record<string, unknown>, filePath: string): Record<string, unknown> {
  if (!Array.isArray(value.capabilities)) return value;
  for (const [index, item] of value.capabilities.entries()) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
    const capability = item as Record<string, unknown>;
    if (Object.hasOwn(capability, 'input_slots') || Object.hasOwn(capability, 'output_specs')) {
      throw new Error(`Capability source must use input/output, not input_slots/output_specs: ${filePath} (#${index + 1})`);
    }
  }
  return value;
}

function serviceContractToSource(value: Record<string, unknown>): Record<string, unknown> {
  return value;
}

async function writeToml(filePath: string, value: Record<string, unknown>, written: string[]): Promise<void> {
  const contents = stringifyToml(value);
  try {
    if (await readFile(filePath, 'utf8') === contents) return;
  } catch (error) {
    if (!(error instanceof Error && 'code' in error && error.code === 'ENOENT')) throw error;
  }
  await writeFile(filePath, contents, 'utf8');
  written.push(filePath);
}

async function removeJsonSources(serviceDir: string): Promise<void> {
  await rm(path.join(serviceDir, 'service.json'), { force: true });
  await rm(path.join(serviceDir, 'plans.json'), { force: true });
  const offeringsDir = path.join(serviceDir, 'offerings');
  if (!existsSync(offeringsDir)) return;
  for (const entry of await readdir(offeringsDir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.endsWith('.json')) await rm(path.join(offeringsDir, entry.name), { force: true });
  }
}

function providersDir(dataDir: string): string {
  return path.join(dataDir, 'providers');
}

function providersDirPath(dataDir: string): string {
  return providersDir(dataDir);
}
