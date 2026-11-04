import { parse, stringify, type TomlTable } from 'smol-toml';

export function parseToml<T>(source: string, filePath: string): T {
  try {
    return parse(source) as T;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid TOML in ${filePath}: ${message}`, { cause: error });
  }
}

export function stringifyToml(value: Record<string, unknown>): string {
  return stringify(value as TomlTable);
}
