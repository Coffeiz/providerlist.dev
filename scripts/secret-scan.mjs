#!/usr/bin/env node
/**
 * 敏感信息扫描。
 *
 * 仓库、日志、提交记录里**不允许**出现 Token、API Key、密码、凭证。
 * 本脚本在 CI 里作为一道门禁：命中即失败。
 *
 * 设计取舍：
 * - **零依赖**。多一个依赖就多一个供应链面，而这是个纯文本匹配任务。
 * - **高精度优先**。宁可漏报也不能误报到没法用——一个天天误报的扫描器
 *   会被加进忽略列表，那就等于没有。
 * - **不扫产物与依赖**：`dist/`、`node_modules/`、锁文件的完整性哈希
 *   不是密钥，扫了只会制造噪音。
 *
 * 用法：
 *   node scripts/secret-scan.mjs [目录...]     # 默认扫仓库根
 *   退出码 0 = 干净，1 = 发现疑似密钥
 */

import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

/** 不扫描的目录与文件。 */
const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  '.vite',
  '.turbo',
  'coverage',
  '.next',
  '.output',
]);

const IGNORED_FILES = new Set([
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',
  'bun.lockb',
]);

/**
 * 高精度密钥模式。
 *
 * 每条都要求足够长的随机串，避免命中普通单词与标识符。
 */
const PATTERNS = [
  {
    id: 'private-key',
    re: /-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/,
    message: '私钥块',
  },
  {
    id: 'aws-access-key',
    re: /\bAKIA[0-9A-Z]{16}\b/,
    message: 'AWS Access Key ID',
  },
  {
    id: 'github-token',
    re: /\bgh[pousr]_[A-Za-z0-9]{36,}\b/,
    message: 'GitHub Token',
  },
  {
    id: 'github-pat',
    re: /\bgithub_pat_[A-Za-z0-9_]{40,}\b/,
    message: 'GitHub Fine-grained PAT',
  },
  {
    id: 'anthropic-key',
    re: /\bsk-ant-[A-Za-z0-9_-]{20,}\b/,
    message: 'Anthropic API Key',
  },
  {
    id: 'openai-key',
    re: /\bsk-(?!ant-)[A-Za-z0-9]{32,}\b/,
    message: 'OpenAI 风格 API Key',
  },
  {
    id: 'google-api-key',
    re: /\bAIza[0-9A-Za-z_-]{35}\b/,
    message: 'Google API Key',
  },
  {
    id: 'slack-token',
    re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/,
    message: 'Slack Token',
  },
  {
    id: 'stripe-secret',
    re: /\b[sr]k_live_[A-Za-z0-9]{20,}\b/,
    message: 'Stripe Live Key',
  },
  {
    id: 'npm-token',
    re: /\bnpm_[A-Za-z0-9]{36}\b/,
    message: 'npm Token',
  },
];

/**
 * 赋值式密钥：`api_key: "真实值"` 这类。
 *
 * 键名必须是**明确指凭证**的。裸 `token` / `secret` 不算——
 * CSS 设计令牌叫 token，密码重置开关叫 password_reset，
 * 两者都跟凭证无关。把它们算进来只会制造噪音。
 */
const CREDENTIAL_KEY_RE =
  /(?<![A-Za-z0-9_])["']?(?<key>[A-Za-z0-9_-]*(?:api[_-]?key|access[_-]?key|secret[_-]?key|client[_-]?secret|auth[_-]?token|access[_-]?token|refresh[_-]?token|id[_-]?token|session[_-]?token|bearer[_-]?token|api[_-]?token|private[_-]?key|passwd|password|credentials?)[A-Za-z0-9_-]*)["']?\s*[:=]\s*["'](?<value>[^"'\n]{6,})["']/gi;

/** 明显是占位符 / 提示名 / 环境变量名的值，不算密钥。 */
const PLACEHOLDER_RE =
  /(example|placeholder|dummy|fake|sample|your[_-]?|xxx+|<[^>]*>|\$\{|\{\{|env|var|hint|redacted|changeme|not[_-]?a[_-]?real|test[_-]?only)/i;

/** CSS / 标识符形态的值：设计令牌、颜色、枚举。 */
const NON_CREDENTIAL_VALUE_RE =
  /^(?:--[a-z0-9-]+|#[0-9a-f]{3,8}|var\(.+\)|[a-z]+(?:[_-][a-z0-9]+)*)$/i;

export function isPlaceholder(value) {
  return PLACEHOLDER_RE.test(value);
}

/**
 * 值看起来像随机凭证吗？
 *
 * 宁可漏报也不误报——但漏报太多门禁就废了。这里取平衡：
 * 长度门槛 + 字符类别多样性，或长十六进制串。
 */
export function looksLikeCredential(value) {
  if (value.length < 16) return false;
  if (isPlaceholder(value)) return false;
  if (NON_CREDENTIAL_VALUE_RE.test(value)) return false;

  const classes = [/[a-z]/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((re) => re.test(value)).length;
  if (classes >= 3) return true;
  // 长十六进制串（API Key 常见形态）
  if (/^[0-9a-f]{20,}$/i.test(value)) return true;
  // 长 base64-ish 串，且含数字与大写
  if (/^[A-Za-z0-9+/=_-]{20,}$/.test(value) && /\d/.test(value) && /[A-Z]/.test(value)) {
    return true;
  }
  return false;
}

/**
 * 扫描一段文本，返回命中的问题。
 *
 * @param {string} text
 * @param {string} [filePath] 用于报告位置
 * @returns {{id: string, message: string, line: number, excerpt: string}[]}
 */
export function scanText(text, filePath = '<text>') {
  const findings = [];
  const lines = text.split('\n');

  for (const pattern of PATTERNS) {
    for (const [index, line] of lines.entries()) {
      const match = pattern.re.exec(line);
      if (!match) continue;
      findings.push({
        id: pattern.id,
        message: pattern.message,
        line: index + 1,
        file: filePath,
        excerpt: redact(line.trim(), match[0]),
      });
    }
  }

  // 赋值式密钥：整段文本扫描（可能跨行），命中后定位行号
  CREDENTIAL_KEY_RE.lastIndex = 0;
  let match;
  while ((match = CREDENTIAL_KEY_RE.exec(text)) !== null) {
    const value = match.groups?.value ?? '';
    if (!looksLikeCredential(value)) continue;
    const before = text.slice(0, match.index);
    const line = before.split('\n').length;
    findings.push({
      id: 'assigned-secret',
      message: `疑似硬编码 ${match.groups?.key}`,
      line,
      file: filePath,
      excerpt: redact(match[0].trim(), value),
    });
  }

  return findings;
}

/**
 * 报告时把密钥原文遮掉。
 *
 * **扫描结果本身不该成为泄露点**——CI 日志会被人看到、被存进构建产物。
 * 所以这里不是截断，是把命中的那段替换成 `***`。
 */
function redact(text, secret) {
  if (secret && text.includes(secret)) {
    return text.split(secret).join('***');
  }
  if (text.length <= 60) return text;
  return `${text.slice(0, 40)}…（已遮蔽）`;
}

async function collectFiles(root) {
  const out = [];
  const walk = async (dir) => {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (IGNORED_DIRS.has(entry.name)) continue;
        await walk(full);
        continue;
      }
      if (!entry.isFile()) continue;
      if (IGNORED_FILES.has(entry.name)) continue;
      // 只扫可能含文本的扩展名
      if (!/\.(ts|tsx|js|jsx|mjs|cjs|vue|json|jsonc|yaml|yml|toml|md|env|sh|sql|txt|css|html)$/i.test(entry.name)) {
        continue;
      }
      out.push(full);
    }
  };
  await walk(root);
  return out;
}

async function main() {
  const roots = process.argv.slice(2);
  const targets = roots.length > 0 ? roots : [process.cwd()];

  const findings = [];
  for (const target of targets) {
    const info = await stat(target).catch(() => null);
    if (!info) {
      console.error(`路径不存在：${target}`);
      process.exitCode = 1;
      return;
    }
    const files = info.isDirectory() ? await collectFiles(target) : [target];
    for (const file of files) {
      const text = await readFile(file, 'utf8').catch(() => null);
      if (text === null) continue;
      findings.push(...scanText(text, file));
    }
  }

  if (findings.length === 0) {
    console.log('✓ 敏感信息扫描通过：未发现疑似密钥。');
    return;
  }

  console.error(`✗ 发现 ${findings.length} 处疑似敏感信息：\n`);
  for (const finding of findings) {
    console.error(`  ${finding.file}:${finding.line}  [${finding.id}] ${finding.message}`);
    console.error(`      ${finding.excerpt}`);
  }
  console.error('\n真实凭证必须立刻吊销并从历史中清除。仅删除当前文件内容不够。');
  process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await main();
}
