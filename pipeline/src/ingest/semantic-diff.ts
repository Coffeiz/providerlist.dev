/** Shared comparison rules for human-readable ingestion reports. */
export type KeyedEntries = ReadonlyMap<string, unknown>;

const ARRAY_IDENTITY_FIELDS = [
  'provider_model_id', 'model_id', 'offering_id', 'id', 'service_id', 'source_ref', 'source_id',
  'market', 'metric', 'heading', 'name', 'area',
] as const;

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function identityValue(item: Record<string, unknown>, field: string): string | number | undefined {
  const value = item[field];
  if (typeof value === 'string' || typeof value === 'number') return value;
  if (isRecord(value) && (typeof value.value === 'string' || typeof value.value === 'number')) return value.value;
  return undefined;
}

/** Return stable keys for records or row arrays when the selected key is unique. */
export function keyedEntries(value: readonly unknown[]): KeyedEntries | null {
  if (value.length > 0) {
    if (value.every((item) => isRecord(item) && typeof item.metric === 'string')) {
      const metricCounts = new Map<string, number>();
      for (const item of value) {
        const metric = (item as Record<string, unknown>).metric as string;
        metricCounts.set(metric, (metricCounts.get(metric) ?? 0) + 1);
      }
      const entries = value.map((item) => {
        const rate = item as Record<string, unknown>;
        const key = metricCounts.get(rate.metric as string) === 1
          ? rate.metric as string
          : JSON.stringify([rate.metric, rate.ttl ?? null, rate.context ?? null]);
        return [key, item] as const;
      });
      if (new Set(entries.map(([key]) => key)).size === entries.length) return new Map(entries);
    }
    for (const field of ARRAY_IDENTITY_FIELDS) {
      if (!value.every((item) => isRecord(item) && identityValue(item, field) !== undefined)) continue;
      const entries = value.map((item) => [String(identityValue(item as Record<string, unknown>, field)), item] as const);
      if (new Set(entries.map(([key]) => key)).size === entries.length) return new Map(entries);
    }
  }

  if (value.length > 0 && value.every((item) => Array.isArray(item) && (typeof item[0] === 'string' || typeof item[0] === 'number'))) {
    const entries = value.map((item) => [String((item as readonly unknown[])[0]), item] as const);
    if (new Set(entries.map(([key]) => key)).size === entries.length) return new Map(entries);
  }
  if (value.length === 1) return new Map([['0', value[0]]]);
  return null;
}

function semanticValue(value: unknown, preserveArrayOrder = false): unknown {
  if (Array.isArray(value)) {
    const entries = keyedEntries(value);
    if (entries) return [...entries].sort(([left], [right]) => left.localeCompare(right)).map(([key, item]) => [key, semanticValue(item, Array.isArray(item))]);
    if (!preserveArrayOrder && value.every((item) => typeof item === 'string')) {
      return [...value].sort((left, right) => left.localeCompare(right));
    }
    return value.map((item) => semanticValue(item));
  }
  if (isRecord(value)) {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, semanticValue(value[key])]));
  }
  return value;
}

/** Compare facts independent of object-key order and unordered string/keyed-row order. */
export function semanticallyEqual(left: unknown, right: unknown): boolean {
  return JSON.stringify(semanticValue(left)) === JSON.stringify(semanticValue(right));
}
