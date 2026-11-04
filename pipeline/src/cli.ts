/**
 * 目录构建 CLI。
 *
 * 用法：
 *   node --experimental-strip-types src/cli.ts build    [--data-dir DIR] [--out-dir DIR]
 *   node --experimental-strip-types src/cli.ts validate [--data-dir DIR]
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { BuildError, buildCatalog } from './compile/build.ts';
import { validateData } from './validate/index.ts';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../..');

function parseArgs(argv: readonly string[]): Record<string, string> {
  const args: Record<string, string> = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token?.startsWith('--')) continue;
    const key = token.slice(2);
    const value = argv[i + 1];
    if (value && !value.startsWith('--')) {
      args[key] = value;
      i += 1;
    } else {
      args[key] = 'true';
    }
  }
  return args;
}

async function main(): Promise<number> {
  const [command = 'build', ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);

  const dataDir = path.resolve(args['data-dir'] ?? path.join(repoRoot, 'data'));
  const outDir = path.resolve(args['out-dir'] ?? path.join(repoRoot, 'dist'));

  if (command === 'validate') {
    const report = await validateData(dataDir);
    for (const issue of report.issues) {
      if (issue.severity === 'error') {
        console.error(`  ✗ [${issue.code}] ${issue.path}: ${issue.message}`);
      } else {
        console.warn(`  ! [${issue.code}] ${issue.path}: ${issue.message}`);
      }
    }
    console.log(
      `\n校验完成：${report.providerCount} 个 Provider，${report.modelCount} 个 Model，${report.errorCount} 个错误，${report.warningCount} 个警告。`,
    );
    return report.errorCount > 0 ? 1 : 0;
  }

  if (command === 'build') {
    try {
      const result = await buildCatalog({ dataDir, outDir });
      console.log(`✓ 构建完成 data_version=${result.dataVersion}`);
      console.log(`  Provider ${result.stats.provider_count} 个 · Service ${result.stats.service_count} 个`);
      console.log(
        `  有效供应 ${result.stats.active_offering_count} 个 · 独立能力 ${result.stats.service_capability_count} 项`,
      );
      console.log(`  产出文件 ${result.files.length} 个 → ${outDir}`);
      for (const issue of result.issues) {
        console.warn(`  ! [${issue.code}] ${issue.path}: ${issue.message}`);
      }
      return 0;
    } catch (error) {
      if (error instanceof BuildError) {
        console.error(`✗ ${error.message}`);
        for (const issue of error.issues) {
          console.error(`  ✗ [${issue.code}] ${issue.path}: ${issue.message}`);
        }
        return 1;
      }
      throw error;
    }
  }

  console.error(`未知命令：${command}（支持 build / validate）`);
  return 2;
}

main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
