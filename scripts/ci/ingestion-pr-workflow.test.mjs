/**
 * 采集 PR 工作流的端到端验收。
 *
 * 这些用例保护的是 PRD-INGEST-1 §5 的工作流不变量，用**真实脚本**跑：
 * `resolve-ingestion-providers.mjs`（范围过滤）、
 * `merge-ingestion-provider-artifacts.mjs`（聚合 + PR 正文）、
 * `check-ingestion-review-gate.mjs`（评审门禁）。
 *
 * 全部在临时 git 仓库里进行——不碰工作区的真实数据，不创建分支，不开 PR，
 * 不写任何生产位置。行为错误时必须失败；纯排版调整不应造成无关失败。
 */
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile, cp, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const scriptsDir = path.join(repoRoot, 'scripts/ci');

const PROVIDERS = ['anthropic', 'openai', 'xai'];

/** 造一个带 origin 的临时 git 仓库，返回它的工作区路径。 */
async function makeWorkspace() {
  const base = await mkdtemp(path.join(tmpdir(), 'providerlist-ingest-'));
  const origin = path.join(base, 'origin.git');
  const workspace = path.join(base, 'workspace');
  execFileSync('git', ['init', '--bare', '-b', 'main', origin], { stdio: 'ignore' });
  await mkdir(workspace, { recursive: true });
  const git = (args, cwd = workspace) => execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  git(['init', '-b', 'main']);
  git(['config', 'user.email', 'acceptance@example.invalid']);
  git(['config', 'user.name', 'acceptance']);
  git(['remote', 'add', 'origin', origin]);
  git(['commit', '--allow-empty', '-m', '初始状态']);
  git(['push', 'origin', 'main']);
  return { base, origin, workspace, git };
}

/** 造一个 Provider 的采集 Artifact。 */
async function writeArtifact(root, provider, manifest, files = {}) {
  const dir = path.join(root, `provider-ingest-1-1-${provider}`);
  await mkdir(path.join(dir, 'data/candidates', provider), { recursive: true });
  await writeFile(path.join(dir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  for (const [relative, content] of Object.entries(files)) {
    const target = path.join(dir, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content);
  }
  return dir;
}

/** 跑 merge 脚本，返回 PR 正文、Workflow Summary 和 GITHUB_OUTPUT。 */
function runMerge(workspace, options) {
  const runId = '1';
  const runAttempt = '1';
  const summaryPath = path.join(workspace, 'summary.md');
  const outputPath = path.join(workspace, 'output.txt');
  const bodyPath = path.join(workspace, 'pr-body.md');
  writeFileSync0(summaryPath, '');
  writeFileSync0(outputPath, '');
  execFileSync('node', [path.join(scriptsDir, 'merge-ingestion-provider-artifacts.mjs')], {
    cwd: workspace,
    encoding: 'utf8',
    env: {
      ...process.env,
      INGESTION_PROVIDERS_JSON: JSON.stringify(options.providers),
      INGESTION_ARTIFACTS_DIR: options.artifactsRoot,
      INGEST_STATE_DIR: options.stateDirectory,
      GITHUB_RUN_ID: runId,
      GITHUB_RUN_ATTEMPT: runAttempt,
      GITHUB_REPOSITORY: 'owner/repository',
      INGEST_PR_BODY_PATH: bodyPath,
      GITHUB_STEP_SUMMARY: summaryPath,
      GITHUB_OUTPUT: outputPath,
    },
  });
  return {
    body: readFileSync0(bodyPath),
    summary: readFileSync0(summaryPath),
    output: readFileSync0(outputPath),
  };
}

function writeFileSync0(target, content) {
  execFileSync('node', ['-e', `require('fs').writeFileSync(${JSON.stringify(target)}, ${JSON.stringify(content)})`]);
}
function readFileSync0(target) {
  return execFileSync('node', ['-e', `process.stdout.write(require('fs').readFileSync(${JSON.stringify(target)}, 'utf8'))`], { encoding: 'utf8' });
}

test('范围过滤：定时、批量和单 Provider 手动运行都只允许 A 类', async () => {
  const { base, workspace, git } = await makeWorkspace();
  try {
    await mkdir(path.join(workspace, 'docs/data'), { recursive: true });
    await cp(path.join(repoRoot, 'docs/data/provider-classes.md'), path.join(workspace, 'docs/data/provider-classes.md'));
    await mkdir(path.join(workspace, 'data/providers'), { recursive: true });
    // A 类名单必须全部「已登记」，否则 resolver 会正确地拒绝——这是它的既定行为。
    const aClass = [...(await readFile(path.join(repoRoot, 'docs/data/provider-classes.md'), 'utf8'))
      .split('## Class A')[1].split('## Class B')[0]
      .matchAll(/\|[^|]+\|\s*`([a-z0-9-]+)`\s*\|/g)].map((match) => match[1]);
    for (const provider of [...aClass, 'longcat', 'modelscope']) {
      await writeFile(path.join(workspace, 'data/providers', `${provider}.json`), '{}\n');
    }
    await cp(path.join(repoRoot, 'scripts/ci/resolve-ingestion-providers.mjs'), path.join(workspace, 'resolve.mjs'));

    const resolve = async (event) => {
      const eventPath = path.join(workspace, 'event.json');
      const outputPath = path.join(workspace, 'out.txt');
      await writeFile(eventPath, JSON.stringify(event));
      writeFileSync0(outputPath, '');
      execFileSync('node', ['resolve.mjs'], {
        cwd: workspace,
        encoding: 'utf8',
        env: { ...process.env, GITHUB_EVENT_PATH: eventPath, GITHUB_EVENT_NAME: event.name, GITHUB_OUTPUT: outputPath, GITHUB_STEP_SUMMARY: path.join(workspace, 'sum.md') },
      });
      const line = readFileSync0(outputPath).split('\n').find((item) => item.startsWith('providers='));
      return JSON.parse(line.slice('providers='.length));
    };

    const scheduled = await resolve({ name: 'schedule' });
    const all = await resolve({ name: 'workflow_dispatch', inputs: { scope: 'all' } });

    // A 类名单来自 docs/data/provider-classes.md，不含任何 B 类或暂停的 Provider。
    assert.ok(!scheduled.includes('anthropic'), '暂停的 Provider 不得被 CI 调度');
    assert.ok(!scheduled.includes('longcat'), 'B 类 Provider 不得进入定时调度');
    assert.ok(!scheduled.includes('modelscope'), 'B 类 Provider 不得进入批量采集');
    assert.deepEqual(scheduled, all, '定时与手动「全部 A 类」应产出同一份清单');

    // B 类即使有正式 Provider JSON，也不能通过工作流触发采集。
    const eventPath = path.join(workspace, 'event.json');
    await writeFile(eventPath, JSON.stringify({ name: 'workflow_dispatch', inputs: { scope: 'provider', provider: 'longcat' } }));
    assert.throws(() => execFileSync('node', ['resolve.mjs'], {
      cwd: workspace,
      encoding: 'utf8',
      env: { ...process.env, GITHUB_EVENT_PATH: eventPath, GITHUB_EVENT_NAME: 'workflow_dispatch', GITHUB_OUTPUT: path.join(workspace, 'out.txt'), GITHUB_STEP_SUMMARY: path.join(workspace, 'sum.md') },
    }), /只能选择全部 A 类或一个 A 类 Provider/);

    await writeFile(eventPath, JSON.stringify({ name: 'workflow_dispatch', inputs: { scope: 'provider', provider: 'anthropic' } }));
    assert.throws(() => execFileSync('node', ['resolve.mjs'], {
      cwd: workspace,
      encoding: 'utf8',
      env: { ...process.env, GITHUB_EVENT_PATH: eventPath, GITHUB_EVENT_NAME: 'workflow_dispatch', GITHUB_OUTPUT: path.join(workspace, 'out.txt'), GITHUB_STEP_SUMMARY: path.join(workspace, 'sum.md') },
    }), /只能选择全部 A 类或一个 A 类 Provider/);

    // 清单里的 Provider 必须都已登记
    git(['add', '-A']);
    git(['commit', '-m', '夹具']);
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});

test('采集实现、来源登记与旧转换配置均限制在 A 类范围', async () => {
  const document = await readFile(path.join(repoRoot, 'docs/data/provider-classes.md'), 'utf8');
  const section = document.split('## Class A')[1]?.split('## Class B')[0] ?? '';
  const aClass = [...section.matchAll(/\|[^|]+\|\s*`([a-z0-9-]+)`\s*\|/g)]
    .map((match) => match[1]).sort();
  const adapterRoot = path.join(repoRoot, 'pipeline/src/ingest/adapters');
  const adapterDirectories = await readdir(adapterRoot, { withFileTypes: true });
  const collectorProviderIds = [];
  for (const entry of adapterDirectories) {
    if (!entry.isDirectory()) continue;
    try {
      await readFile(path.join(adapterRoot, entry.name, 'collect.ts'));
      collectorProviderIds.push(entry.name === 'tencent' ? 'tencent-tokenhub' : entry.name);
    } catch (error) {
      if (!(error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT')) throw error;
    }
  }

  const registeredSourceProviderIds = JSON.parse(execFileSync('node', [
    '--experimental-strip-types', '--input-type=module', '-e',
    'import { INGEST_SOURCES } from "./pipeline/src/ingest/registry.ts"; console.log(JSON.stringify([...new Set(INGEST_SOURCES.map(({ provider_id }) => provider_id))].sort()))',
  ], { cwd: repoRoot, encoding: 'utf8' }));
  const legacyConverterProviderIds = JSON.parse(execFileSync('node', [
    '--experimental-strip-types', '--input-type=module', '-e',
    'import { GLOBAL_MERGE_PROVIDER_IDS } from "./pipeline/src/ingest/migration/legacy-merges.ts"; console.log(JSON.stringify([...GLOBAL_MERGE_PROVIDER_IDS].sort()))',
  ], { cwd: repoRoot, encoding: 'utf8' }));

  assert.deepEqual(
    collectorProviderIds.filter((id) => registeredSourceProviderIds.includes(id)).sort(),
    aClass,
    '已登记来源的采集器必须与 A 类 Provider 名单一致；未登记目录可保留为暂停适配器',
  );
  assert.deepEqual(registeredSourceProviderIds.filter((id) => !aClass.includes(id)), [], '固定来源不得登记到 A 类以外 Provider');
  assert.deepEqual(legacyConverterProviderIds.filter((id) => !aClass.includes(id)), [], '旧转换配置不得保留 A 类以外 Provider');
});

test('聚合 PR：两个 Provider 变化合成一个 PR，各自 viewer 互不混淆', async () => {
  const { base, workspace, git } = await makeWorkspace();
  try {
    await cp(path.join(repoRoot, '.github/templates/ingestion-pr.md'), path.join(workspace, '.github/templates/ingestion-pr.md'));
    const artifactsRoot = path.join(base, 'artifacts');
    const stateDirectory = path.join(base, 'state');
    await mkdir(stateDirectory, { recursive: true });
    execFileSync('git', ['init', '-b', 'main'], { cwd: stateDirectory, stdio: 'ignore' });

    const viewerFor = (provider, marker) => `# ${provider} 采集评审\n\n## 变更摘要\n\n| 变化 | 字段路径 | 旧值 | 新值 |\n|---|---|---|---|\n| 新增 | \`/${marker}/price\` | — | \`1.00\` |\n`;

    await writeArtifact(artifactsRoot, 'anthropic', {
      provider_id: 'anthropic', status: 'changed_ready', message: '价格页输入价调整', fingerprint: 'sha256:' + 'a'.repeat(64),
      viewer_blob: 'blob-a', base_state_tree: null, base_lifecycle_tree: null, base_main_state_tree: null, base_main_lifecycle_tree: null, base_viewer_blob: null,
    }, { 'data/candidates/anthropic/state.json': '{}\n', 'data/candidates/anthropic/viewer.md': viewerFor('anthropic', 'anthropic') });

    await writeArtifact(artifactsRoot, 'openai', {
      provider_id: 'openai', status: 'changed_ready', message: '模型目录新增 1 个型号', fingerprint: 'sha256:' + 'b'.repeat(64),
      viewer_blob: 'blob-b', base_state_tree: null, base_lifecycle_tree: null, base_main_state_tree: null, base_main_lifecycle_tree: null, base_viewer_blob: null,
    }, { 'data/candidates/openai/state.json': '{}\n', 'data/candidates/openai/viewer.md': viewerFor('openai', 'openai') });

    const { body, summary, output } = runMerge(workspace, { providers: ['anthropic', 'openai'], artifactsRoot, stateDirectory });

    // 只生成一个聚合 PR，链接指向各自 viewer
    assert.match(body, /data\/candidates\/anthropic\/viewer\.md/);
    assert.match(body, /data\/candidates\/openai\/viewer\.md/);
    assert.ok(!body.includes('https://github.com/owner/repository/blob/'), 'viewer 链接应使用仓库内相对路径，不硬编码仓库与分支');

    // 两份 viewer 各自独立，只含自己的字段
    const anthropicViewer = await readFile(path.join(workspace, 'data/candidates/anthropic/viewer.md'), 'utf8');
    const openaiViewer = await readFile(path.join(workspace, 'data/candidates/openai/viewer.md'), 'utf8');
    assert.match(anthropicViewer, /\/anthropic\/price/);
    assert.ok(!anthropicViewer.includes('/openai/'), 'anthropic viewer 不得混入 openai 的字段');
    assert.match(openaiViewer, /\/openai\/price/);
    assert.ok(!openaiViewer.includes('/anthropic/'), 'openai viewer 不得混入 anthropic 的字段');

    // 状态出现在 PR 正文里，审阅者一眼能看出谁要重点看
    assert.match(body, /`anthropic` \| `changed_ready`/);
    assert.match(body, /`openai` \| `changed_ready`/);

    // 只更新候选目录，不动正式数据
    const changed = await readdir(path.join(workspace, 'data')).catch(() => []);
    assert.ok(!changed.includes('providers'), '采集工作流不得写正式 Provider 数据');

    // Workflow Summary 里有完整运行状态
    assert.match(summary, /\| Provider \| 状态 \| 候选指纹 \| 说明 \|/);
    assert.match(output, /changed_providers=\["anthropic","openai"\]/);

    git(['add', '-A']);
    git(['commit', '-m', '聚合结果']);
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});

test('IR Artifact 打包与聚合：状态、评审和生命周期保留在 IR 范围', async () => {
  const { base, workspace } = await makeWorkspace();
  try {
    await cp(path.join(repoRoot, '.github/templates/ingestion-pr.md'), path.join(workspace, '.github/templates/ingestion-pr.md'));
    const hash = 'e'.repeat(64);
    const fingerprint = `sha256:${hash}`;
    const globalHash = 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd';
    const runnerTemp = path.join(base, 'runner-temp');
    const summaryPath = path.join(base, 'collector-summary.md');
    const baselinePath = path.join(runnerTemp, 'provider-ingestion-baseline.json');
    const stateDirectory = path.join(base, 'state');
    await mkdir(path.join(stateDirectory, 'data/candidates/openai'), { recursive: true });
    execFileSync('git', ['init', '-b', 'main'], { cwd: stateDirectory, stdio: 'ignore' });
    execFileSync('git', ['config', 'user.email', 'acceptance@example.invalid'], { cwd: stateDirectory });
    execFileSync('git', ['config', 'user.name', 'acceptance'], { cwd: stateDirectory });
    await writeFile(path.join(stateDirectory, 'data/candidates/openai/state.json'), '{"legacy":true}\n');
    execFileSync('git', ['add', '-A'], { cwd: stateDirectory });
    execFileSync('git', ['commit', '-m', '已有 legacy 状态'], { cwd: stateDirectory, stdio: 'ignore' });
    const baseStateTree = execFileSync('git', ['rev-parse', 'HEAD:data/candidates/openai'], { cwd: stateDirectory, encoding: 'utf8' }).trim();
    await mkdir(path.join(workspace, 'data/candidates/openai/ir/reviews'), { recursive: true });
    await mkdir(path.join(workspace, 'data/candidates/openai/global/reviews'), { recursive: true });
    await mkdir(path.join(workspace, 'data/candidates/openai/ir-global/reviews'), { recursive: true });
    await mkdir(path.join(workspace, 'data/candidates/openai/reviews'), { recursive: true });
    await mkdir(path.join(workspace, 'data/candidates/openai/ir/decisions'), { recursive: true });
    await mkdir(path.join(workspace, 'data/candidates/openai/global/decisions'), { recursive: true });
    await mkdir(path.join(workspace, 'data/candidates/openai'), { recursive: true });
    await mkdir(path.join(workspace, 'data/ingestion-lifecycle/openai/ir'), { recursive: true });
    await mkdir(path.join(workspace, 'data/ingestion-lifecycle/openai/ir-global'), { recursive: true });
    await mkdir(runnerTemp, { recursive: true });
    await writeFile(path.join(workspace, 'data/candidates/openai/state.json'), '{"legacy":true}\n');
    const irCandidate = JSON.stringify({ provider_id: 'openai', facts: { provider_id: 'openai', services: [] } });
    await writeFile(path.join(workspace, 'data/candidates/openai/ir/state.json'), `${irCandidate}\n`);
    await writeFile(path.join(workspace, 'data/candidates/openai/global/state.json'), JSON.stringify({ candidate_hash: `sha256:${globalHash}` }) + '\n');
    await writeFile(path.join(workspace, 'data/candidates/openai/ir-global/state.json'), JSON.stringify({
      provider_id: 'openai', candidate_hash: fingerprint, facts: { provider_id: 'openai', services: [] },
    }) + '\n');
    await writeFile(path.join(workspace, `data/candidates/openai/ir/reviews/${hash}.json`), '{"candidate_hash":"sha256:' + hash + '"}\n');
    await writeFile(path.join(workspace, `data/candidates/openai/ir/reviews/${hash}.md`), '# IR 评审\n');
    await writeFile(path.join(workspace, `data/candidates/openai/ir-global/reviews/${hash}.json`), '{"candidate_hash":"sha256:' + hash + '"}\n');
    await writeFile(path.join(workspace, `data/candidates/openai/ir-global/reviews/${hash}.md`), '# 国际 IR 评审\n');
    const legacyHash = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
    await writeFile(path.join(workspace, `data/candidates/openai/reviews/${legacyHash}.json`), '{"candidate_hash":"sha256:' + legacyHash + '"}\n');
    await writeFile(path.join(workspace, `data/candidates/openai/reviews/${legacyHash}.md`), '# Legacy 评审\n');
    await writeFile(path.join(workspace, `data/candidates/openai/global/reviews/${globalHash}.json`), '{"candidate_hash":"sha256:' + globalHash + '"}\n');
    await writeFile(path.join(workspace, `data/candidates/openai/global/reviews/${globalHash}.md`), '# Global 评审\n');
    await writeFile(path.join(workspace, `data/candidates/openai/ir/decisions/${hash}.json`), '{"decision":"accepted"}\n');
    await writeFile(path.join(workspace, `data/ingestion-lifecycle/openai/ir/${hash}.jsonl`), '{"event":"opened"}\n');
    await writeFile(path.join(workspace, `data/ingestion-lifecycle/openai/ir-global/${hash}.jsonl`), '{"event":"opened-global-ir"}\n');
    await writeFile(path.join(workspace, 'data/candidates/openai/viewer.md'), '# OpenAI IR 评审\n');
    await writeFile(baselinePath, JSON.stringify({
      provider_id: 'openai', base_state_tree: baseStateTree, base_lifecycle_tree: null,
      base_viewer_blob: null, base_main_state_tree: null, base_main_lifecycle_tree: null,
    }));
    await writeFile(summaryPath, [
      '## Provider 采集运行结果', '',
      '| Provider | 状态 | 候选指纹 | 事实数 | 快照数 | 说明 | 候选范围 |',
      '|---|---|---|---:|---:|---|---|',
      `| \`openai\` | \`changed_ready\` | \`sha256:${legacyHash}\` | 1 | 1 | 双候选 | \`legacy+global+ir+ir-global\` | \`${fingerprint}\` |`,
    ].join('\n'));

    execFileSync('node', [path.join(scriptsDir, 'package-ingestion-provider-artifact.mjs')], {
      cwd: workspace,
      env: {
        ...process.env,
        INGEST_PROVIDER: 'openai', RUNNER_TEMP: runnerTemp,
        GITHUB_STEP_SUMMARY: path.join(base, 'package-step-summary.md'),
        INGEST_HANDOFF_SUMMARY_PATH: summaryPath,
        INGEST_COLLECT_STEP_OUTCOME: 'success',
      },
    });

    const packagedDirectory = path.join(runnerTemp, 'provider-ingest-output/openai');
    const manifest = JSON.parse(await readFile(path.join(packagedDirectory, 'manifest.json'), 'utf8'));
    assert.equal(manifest.candidate_scope, 'multi');
    assert.deepEqual(manifest.candidate_scopes, ['legacy', 'global', 'ir', 'ir-global']);
    for (const relative of [
      `data/candidates/openai/state.json`,
      `data/candidates/openai/reviews/${legacyHash}.json`,
      `data/candidates/openai/reviews/${legacyHash}.md`,
      `data/candidates/openai/ir/state.json`,
      `data/candidates/openai/ir/reviews/${hash}.json`,
      `data/candidates/openai/ir/reviews/${hash}.md`,
      `data/candidates/openai/ir/decisions/${hash}.json`,
      'data/candidates/openai/global/state.json',
      `data/candidates/openai/global/reviews/${globalHash}.json`,
      `data/candidates/openai/ir-global/state.json`,
      `data/candidates/openai/ir-global/reviews/${hash}.json`,
      `data/ingestion-lifecycle/openai/ir-global/${hash}.jsonl`,
      `data/ingestion-lifecycle/openai/ir/${hash}.jsonl`,
      'data/candidates/openai/viewer.md',
    ]) {
      await readFile(path.join(packagedDirectory, relative));
    }
    await mkdir(path.join(base, 'artifacts'), { recursive: true });
    await cp(packagedDirectory, path.join(base, 'artifacts/provider-ingest-1-1-openai'), { recursive: true });
    execFileSync('node', [path.join(scriptsDir, 'merge-ingestion-provider-artifacts.mjs')], {
      cwd: workspace,
      env: {
        ...process.env,
        INGESTION_PROVIDERS_JSON: JSON.stringify(['openai']),
        INGESTION_ARTIFACTS_DIR: path.join(base, 'artifacts'),
        INGEST_STATE_DIR: stateDirectory,
        GITHUB_RUN_ID: '1', GITHUB_RUN_ATTEMPT: '1', GITHUB_REPOSITORY: 'owner/repository',
        INGEST_PR_BODY_PATH: path.join(base, 'pr.md'),
        GITHUB_STEP_SUMMARY: path.join(base, 'merge-summary.md'),
        GITHUB_OUTPUT: path.join(base, 'output.txt'),
      },
    });

    assert.equal(await readFile(path.join(stateDirectory, 'data/candidates/openai/state.json'), 'utf8'), '{"legacy":true}\n');
    assert.deepEqual(JSON.parse(await readFile(path.join(stateDirectory, 'data/candidates/openai/ir/state.json'), 'utf8')).facts.services, []);
    assert.equal(JSON.parse(await readFile(path.join(stateDirectory, 'data/candidates/openai/global/state.json'), 'utf8')).candidate_hash, `sha256:${globalHash}`);
    assert.equal(JSON.parse(await readFile(path.join(stateDirectory, 'data/candidates/openai/ir-global/state.json'), 'utf8')).candidate_hash, fingerprint);
    await readFile(path.join(stateDirectory, `data/candidates/openai/reviews/${legacyHash}.json`));
    await readFile(path.join(stateDirectory, `data/candidates/openai/ir/reviews/${hash}.json`));
    await readFile(path.join(stateDirectory, `data/ingestion-lifecycle/openai/ir/${hash}.jsonl`));
    await readFile(path.join(stateDirectory, `data/ingestion-lifecycle/openai/ir-global/${hash}.jsonl`));
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});

test('needs_review 与 invalid_data 在 PR 正文显著标注并被门禁拦下', async () => {
  const { base, workspace, git } = await makeWorkspace();
  try {
    await cp(path.join(repoRoot, '.github/templates/ingestion-pr.md'), path.join(workspace, '.github/templates/ingestion-pr.md'));
    const artifactsRoot = path.join(base, 'artifacts');
    const stateDirectory = path.join(base, 'state');
    await mkdir(stateDirectory, { recursive: true });
    execFileSync('git', ['init', '-b', 'main'], { cwd: stateDirectory, stdio: 'ignore' });

    const viewer = (provider, status) => `# ${provider} 采集评审\n\n**采集状态：${status}** — 需要人工判断。\n\n## 变更摘要\n\n| 变化 | 字段路径 | 旧值 | 新值 |\n|---|---|---|---|\n| 新增 | \`/${provider}/price\` | — | \`1.00\` |\n`;

    await writeArtifact(artifactsRoot, 'xai', {
      provider_id: 'xai', status: 'needs_review', message: '两处来源互相矛盾', fingerprint: 'sha256:' + 'c'.repeat(64),
      viewer_blob: 'blob-c', base_state_tree: null, base_lifecycle_tree: null, base_main_state_tree: null, base_main_lifecycle_tree: null, base_viewer_blob: null,
    }, { 'data/candidates/xai/state.json': '{}\n', 'data/candidates/xai/viewer.md': viewer('xai', 'needs_review') });

    const { body } = runMerge(workspace, { providers: ['xai'], artifactsRoot, stateDirectory });
    assert.match(body, /`xai` \| `needs_review` ⚠️ 需人工判断/, '待判断状态必须在 PR 正文显著标注');
    assert.match(body, /需人工判断后才能合并/);

    // 评审门禁：有 needs_review viewer 时必须失败
    git(['add', '-A']);
    git(['commit', '-m', '候选']);
    let gateFailed = false;
    try {
      execFileSync('node', [path.join(scriptsDir, 'check-ingestion-review-gate.mjs')], {
        cwd: workspace,
        encoding: 'utf8',
        env: { ...process.env, GITHUB_BASE_REF: 'main' },
        stdio: ['ignore', 'pipe', 'pipe'],
      });
    } catch (error) {
      gateFailed = true;
      assert.match(String(error.stderr ?? ''), /不可合并/, '门禁失败应说明 PR 不可合并');
    }
    assert.ok(gateFailed, 'needs_review 候选必须让 CI 评审门禁失败');
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});

test('collection_failed 不会被伪装成无变化', async () => {
  const { base, workspace } = await makeWorkspace();
  try {
    await cp(path.join(repoRoot, '.github/templates/ingestion-pr.md'), path.join(workspace, '.github/templates/ingestion-pr.md'));
    const artifactsRoot = path.join(base, 'artifacts');
    const stateDirectory = path.join(base, 'state');
    await mkdir(stateDirectory, { recursive: true });
    execFileSync('git', ['init', '-b', 'main'], { cwd: stateDirectory, stdio: 'ignore' });

    await writeArtifact(artifactsRoot, 'deepseek', {
      provider_id: 'deepseek', status: 'collection_failed', message: 'HTTP 503 Service Unavailable', fingerprint: null,
      viewer_blob: null, base_state_tree: null, base_lifecycle_tree: null, base_main_state_tree: null, base_main_lifecycle_tree: null, base_viewer_blob: null,
    });

    const { body, summary } = runMerge(workspace, { providers: ['deepseek'], artifactsRoot, stateDirectory });

    assert.match(body, /本次有 Provider 采集失败/);
    assert.match(body, /`deepseek` — HTTP 503/);
    assert.ok(!/\| `deepseek` \| `unchanged`/.test(body), '采集失败不得显示为 unchanged');
    assert.match(summary, /`collection_failed`/);
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});

test('PR 生命周期：打开与更新按 Provider 与候选哈希分别记录', async () => {
  const { base, workspace, git } = await makeWorkspace();
  try {
    const hash = 'a'.repeat(64);
    await mkdir(path.join(workspace, 'data/candidates/anthropic'), { recursive: true });
    await writeFile(
      path.join(workspace, 'data/candidates/anthropic/viewer.md'),
      `# anthropic 采集评审\n\n| 项目 | 内容 |\n|---|---|\n| 本次候选指纹 | \`sha256:${hash}\` |\n`,
    );
    git(['add', '-A']);
    git(['commit', '-m', '候选']);

    const stateDirectory = path.join(base, 'state');
    await mkdir(stateDirectory, { recursive: true });

    const record = (action) => {
      execFileSync('node', [path.join(scriptsDir, 'record-ingestion-pr-open-update.mjs')], {
        cwd: workspace,
        encoding: 'utf8',
        env: {
          ...process.env,
          GITHUB_REPOSITORY: 'owner/repository',
          INGEST_PR_LIFECYCLE_ACTION: action,
          INGEST_PR_NUMBER: '42',
          GITHUB_RUN_ID: '7',
          GITHUB_RUN_ATTEMPT: '1',
          INGEST_STATE_DIR: path.join(stateDirectory, 'data/ingestion-lifecycle'),
        },
      });
    };

    record('opened');
    record('updated');

    const lifecyclePath = path.join(stateDirectory, 'data/ingestion-lifecycle/anthropic', `${hash}.jsonl`);
    const events = (await readFile(lifecyclePath, 'utf8')).split('\n').filter(Boolean).map((line) => JSON.parse(line));
    assert.equal(events.length, 2, '打开与更新各记一条');
    assert.deepEqual(events.map((event) => event.event), ['opened', 'updated']);
    // 生命周期按 Provider 与候选哈希分别记录，不因聚合 PR 丢失 Provider 维度
    assert.equal(events[0].provider_id, 'anthropic');
    assert.equal(events[0].candidate_hash, `sha256:${hash}`);
    assert.equal(events[0].pull_request, 'https://github.com/owner/repository/pull/42');
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});

test('基线被另一轮推进时跳过该 Provider，不覆盖较新状态', async () => {
  const { base, workspace } = await makeWorkspace();
  try {
    await cp(path.join(repoRoot, '.github/templates/ingestion-pr.md'), path.join(workspace, '.github/templates/ingestion-pr.md'));
    const artifactsRoot = path.join(base, 'artifacts');
    const stateDirectory = path.join(base, 'state');
    await mkdir(stateDirectory, { recursive: true });
    execFileSync('git', ['init', '-b', 'main'], { cwd: stateDirectory, stdio: 'ignore' });

    // 状态分支里已有一份候选，基线哈希与 artifact 里记录的不一致
    await mkdir(path.join(stateDirectory, 'data/candidates/anthropic'), { recursive: true });
    await writeFile(path.join(stateDirectory, 'data/candidates/anthropic/state.json'), '{"newer":true}\n');
    execFileSync('git', ['add', '-A'], { cwd: stateDirectory });
    execFileSync('git', ['commit', '-m', '新基线'], { cwd: stateDirectory, env: { ...process.env, GIT_AUTHOR_NAME: 'a', GIT_AUTHOR_EMAIL: 'a@a', GIT_COMMITTER_NAME: 'a', GIT_COMMITTER_EMAIL: 'a@a' } });

    await writeArtifact(artifactsRoot, 'anthropic', {
      provider_id: 'anthropic', status: 'changed_ready', message: '价格调整', fingerprint: 'sha256:' + 'd'.repeat(64),
      viewer_blob: 'blob-d', base_state_tree: 'stale-tree', base_lifecycle_tree: null, base_main_state_tree: null, base_main_lifecycle_tree: null, base_viewer_blob: null,
    }, { 'data/candidates/anthropic/state.json': '{"older":true}\n', 'data/candidates/anthropic/viewer.md': '# anthropic 采集评审\n' });

    const { body, summary } = runMerge(workspace, { providers: ['anthropic'], artifactsRoot, stateDirectory });

    assert.match(body, /基线被其他轮次推进而跳过/, '基线冲突必须在 PR 正文点名');
    assert.match(body, /`anthropic` — .*基线/, '基线冲突的 Provider 必须被点名');
    assert.match(summary, /stale_needs_rerun/);
    // 旧基线不得覆盖状态分支里的新基线
    const state = await readFile(path.join(stateDirectory, 'data/candidates/anthropic/state.json'), 'utf8');
    assert.match(state, /"newer":true/, '基线冲突时不得用旧采集结果覆盖较新状态');
  } finally {
    await rm(base, { recursive: true, force: true });
  }
});
