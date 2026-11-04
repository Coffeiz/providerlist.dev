import assert from 'node:assert/strict';
import test from 'node:test';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const ADAPTERS_DIR = path.resolve(import.meta.dirname);

async function collectorFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectorFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.test.ts')
      ? [entryPath]
      : [];
  }));
  return files.flat();
}

function isAuthoredText(node: ts.Expression): boolean {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateExpression(node)) return true;
  if (ts.isConditionalExpression(node)) return isAuthoredText(node.whenTrue) || isAuthoredText(node.whenFalse);
  if (ts.isCallExpression(node) && node.arguments.length > 0) {
    const callee = ts.isIdentifier(node.expression) ? node.expression.text : '';
    if (['planCopyFromSection', 'teamSeatCopy', 'htmlText'].includes(callee)) return false;
    return isAuthoredText(node.arguments[0]!);
  }
  return false;
}

test('provider collectors do not synthesize supplier descriptions', async () => {
  for (const file of await collectorFiles(ADAPTERS_DIR)) {
    const source = await readFile(file, 'utf8');
    const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const authoredFields: string[] = [];

    const visit = (node: ts.Node): void => {
      if (ts.isPropertyAssignment(node) && node.name.getText(sourceFile).replace(/^['"]|['"]$/g, '') === 'description'
        && isAuthoredText(node.initializer)) {
        const line = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
        authoredFields.push(`${path.relative(ADAPTERS_DIR, file)}:${line}`);
      }
      ts.forEachChild(node, visit);
    };
    visit(sourceFile);

    assert.deepEqual(
      authoredFields,
      [],
      `${path.relative(ADAPTERS_DIR, file)} must map description text from collected source fields; omit it when no source wording is available.`,
    );
  }
});
