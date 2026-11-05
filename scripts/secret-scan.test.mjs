/**
 * 敏感信息扫描器测试。
 *
 * 重点保护两件事：
 * 1. 真密钥必须被抓到（漏报 = 门禁失效）
 * 2. 仓库里的正常内容**不得**误报（误报多了，扫描器会被忽略，就等于没有）
 */

import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import path from 'node:path';
import test from 'node:test';
import { promisify } from 'node:util';

import { isPlaceholder, scanText } from './secret-scan.mjs';

const execFileAsync = promisify(execFile);
const repoRoot = path.resolve(import.meta.dirname, '..');

test('识别出私钥块', () => {
  // 示例密钥用拼接构造，让完整字面量**永不连续出现在源码里**——
  // 否则扫描器会扫到自己，把自己的测试文件报成泄露。
  const block = `-----BEGIN RSA ${'PRIVATE KEY-----'}`;
  const findings = scanText(`${block}\nMIIEow==\n`);
  assert.ok(findings.some((f) => f.id === 'private-key'));
});

test('识别出 GitHub Token', () => {
  const findings = scanText(`const token = "ghp_${'a'.repeat(36)}";`);
  assert.ok(findings.some((f) => f.id === 'github-token'));
});

test('识别出 AWS Access Key', () => {
  const key = `AKIA${'IOSFODNN7EXAMPLE'}`;
  const findings = scanText(key);
  assert.ok(findings.some((f) => f.id === 'aws-access-key'));
});

test('识别出 Anthropic API Key', () => {
  const findings = scanText(`sk-ant-api03-${'x'.repeat(40)}`);
  assert.ok(findings.some((f) => f.id === 'anthropic-key'));
});

test('识别出硬编码的 api_key 赋值', () => {
  const secret = `9f8a7b6c5d4e3f2a${'1b0c'}`;
  const findings = scanText(`api_key: "${secret}"`);
  assert.ok(findings.some((f) => f.id === 'assigned-secret'));
});

test('占位符不算密钥', () => {
  assert.equal(isPlaceholder('EXAMPLE_API_KEY'), true);
  assert.equal(isPlaceholder('your-api-key-here'), true);
  assert.equal(isPlaceholder('<your-token>'), true);
  assert.equal(isPlaceholder('&lt;API_KEY_FROM_PROVIDER_CONSOLE&gt;'), true);
  assert.equal(isPlaceholder(`9f8a7b6c5d4e3f2a${'1b0c'}`), false);
});

test('HTML 转义的配置占位符不会被误报为密钥', () => {
  const findings = scanText(
    '"apiKey": "&lt;API_KEY_FROM_PROVIDER_CONSOLE&gt;"\n' +
      '"secretKey": "&lt;YOUR_ACCESS_KEY&gt;"',
  );
  assert.deepEqual(findings, []);
});

test('提示环境变量名不算密钥', () => {
  const findings = scanText(
    'environment_variable_hint: "EXAMPLE_API_KEY"\nauth_header: "x-api-key"\n',
  );
  assert.deepEqual(
    findings.filter((f) => f.id === 'assigned-secret'),
    [],
    '环境变量提示名与请求头名不是密钥',
  );
});

test('普通标识符与短值不误报', () => {
  const findings = scanText(
    'const token = "abc";\nconst secret_type = "oauth2";\nconst password_reset = "enabled";\n',
  );
  assert.deepEqual(findings, []);
});

test('扫描结果不把密钥原文抄进报告', () => {
  const secret = `ghp_${'b'.repeat(36)}`;
  const findings = scanText(`token = "${secret}"`);
  assert.ok(findings.length > 0);
  for (const finding of findings) {
    assert.ok(
      !finding.excerpt.includes(secret),
      '报告里不应出现密钥原文——否则扫描日志本身就成了泄露点',
    );
  }
});

test('真实仓库内容零误报', async () => {
  const { stdout, stderr } = await execFileAsync(
    process.execPath,
    [path.join(repoRoot, 'scripts', 'secret-scan.mjs'), repoRoot],
    { cwd: repoRoot },
  ).catch((error) => {
    // 扫描器以非 0 退出表示发现问题；这本身就是失败
    assert.fail(
      `敏感信息扫描在真实仓库上报错：\n${error.stdout ?? ''}\n${error.stderr ?? ''}`,
    );
  });
  assert.match(stdout, /敏感信息扫描通过/);
});
