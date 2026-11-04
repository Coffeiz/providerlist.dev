import type { Observed } from './provider-collection.ts';

/** Build a scalar IR fact with a single source location and assertion. */
export function observed<T>(value: T, sourceRef: string, locator: string, assertion: string): Observed<T> {
  return { value, evidence: [{ source_ref: sourceRef, locator, assertion }] };
}
