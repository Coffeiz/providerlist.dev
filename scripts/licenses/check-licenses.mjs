import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));

function parseLicenseExpression(expression) {
  const tokens = expression.match(/\(|\)|\bAND\b|\bOR\b|\bWITH\b|[A-Za-z0-9][A-Za-z0-9.+-]*/gi) ?? [];
  let index = 0;

  function primary() {
    if (tokens[index] === '(') {
      index += 1;
      const value = parseOr();
      if (tokens[index] !== ')') throw new Error('unclosed parenthesis');
      index += 1;
      return value;
    }
    const license = tokens[index++];
    if (!license || /^(AND|OR|WITH)$/i.test(license)) throw new Error('missing license identifier');
    if (/^WITH$/i.test(tokens[index] ?? '')) {
      index += 1;
      const exception = tokens[index++];
      if (!exception || /^(AND|OR|WITH)$/i.test(exception)) throw new Error('missing license exception');
      return { type: 'with', license, exception };
    }
    return { type: 'license', license };
  }

  function parseAnd() {
    let value = primary();
    while (/^AND$/i.test(tokens[index] ?? '')) {
      index += 1;
      value = { type: 'and', left: value, right: primary() };
    }
    return value;
  }

  function parseOr() {
    let value = parseAnd();
    while (/^OR$/i.test(tokens[index] ?? '')) {
      index += 1;
      value = { type: 'or', left: value, right: parseAnd() };
    }
    return value;
  }

  const tree = parseOr();
  if (!tokens.length || index !== tokens.length) throw new Error('invalid license expression');
  return tree;
}

function isAllowed(expression, blockedPatterns) {
  const blocked = new RegExp(`\\b(?:${blockedPatterns.join('|')})\\b`, 'i');
  let tree;
  try {
    tree = parseLicenseExpression(expression);
  } catch {
    return expression !== 'Unknown' && !blocked.test(expression);
  }
  const visit = (node) => {
    if (node.type === 'license' || node.type === 'with') return node.license !== 'Unknown' && !blocked.test(node.license);
    if (node.type === 'and') return visit(node.left) && visit(node.right);
    return visit(node.left) || visit(node.right);
  };
  return visit(tree);
}

async function main() {
  const manifest = JSON.parse(await readFile(join(root, 'licenses/manifest.json'), 'utf8'));
  const policy = JSON.parse(await readFile(join(root, 'licenses/policy.json'), 'utf8'));
  for (const exception of policy.exceptions) {
    if (!exception.package || !exception.license || !exception.reason?.trim()) {
      throw new Error('每条例外必须包含 package、license 和非空 reason。');
    }
  }
  const exceptions = new Map(policy.exceptions.map((item) => [`${item.package}|${item.license}`, item.reason]));
  const failures = [];
  const reviews = [];
  for (const dependency of manifest.dependencies) {
    const exception = exceptions.get(`${dependency.name}|${dependency.license}`);
    if (!isAllowed(dependency.license, policy.blockedPatterns) && !exception) {
      failures.push(`${dependency.name}@${dependency.version}: ${dependency.license}`);
    }
    if (policy.reviewLicenses.includes(dependency.license) && !exception) {
      reviews.push(`${dependency.name}@${dependency.version}: ${dependency.license}`);
    }
  }
  for (const project of manifest.projects) {
    const report = JSON.parse(await readFile(join(root, `licenses/${project.project}.json`), 'utf8'));
    for (const name of report.missingDirectDependencies ?? []) {
      failures.push(`${project.project}|${name}: direct dependency missing from generated inventory`);
    }
  }
  if (reviews.length) {
    console.warn('License review items (investigate before release):');
    for (const item of reviews) console.warn(`- ${item}`);
  }
  if (failures.length) {
    console.error('License policy failures:');
    for (const item of failures) console.error(`- ${item}`);
    process.exitCode = 1;
  } else {
    console.log(`License policy passed for ${manifest.dependencies.length} packages; ${reviews.length} item(s) require review.`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`License check failed: ${error.message}`);
    process.exitCode = 1;
  });
}
