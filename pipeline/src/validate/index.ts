/**
 * 数据级校验。
 *
 * 校验的是**源数据**（`data/**`）是否符合契约，分三类：
 * 1. Schema 与语义校验——`@providerlist/schema/validation` 的文档校验器；
 * 2. 交叉引用——供应事件的 `subject_ref` 必须指向真实存在的 Offering；
 * 3. 统计口径核对——Provider 数、事件文件数。
 *
 * 与 `compile` 的区别：校验**只读不写**，
 * 产出的是问题清单；编译在校验通过后才写 `dist/v1/**`。
 */
import { validateProviderDocument, validateModelRegistryDocument } from '@providerlist/schema/validation';
import type { ProviderDocument } from '@providerlist/schema/types';

import { loadModelRegistrySource, loadProviderDocuments } from '../compile/build.ts';
import { validateCollectorRegistry } from '../ingest/collector-registry.ts';

export interface ValidationReport {
  readonly providerCount: number;
  readonly modelCount: number;
  readonly errorCount: number;
  readonly warningCount: number;
  readonly issues: readonly {
    readonly severity: 'error' | 'warning';
    readonly code: string;
    readonly path: string;
    readonly message: string;
  }[];
}

/**
 * 校验 `data/` 下的源数据。
 *
 * Model 的类型来自全局注册表；Provider Offering 只保存可空身份引用。
 */
export async function validateData(dataDir: string): Promise<ValidationReport> {
  const documents: ProviderDocument[] = await loadProviderDocuments(dataDir);
  const modelSource = await loadModelRegistrySource(dataDir);
  const collectorIssues = await validateCollectorRegistry(dataDir);

  const issues: {
    severity: 'error' | 'warning';
    code: string;
    path: string;
    message: string;
  }[] = [];
  issues.push(...collectorIssues);

  for (const document of documents) {
    const result = validateProviderDocument(document);
    for (const issue of result.issues) {
      issues.push({
        severity: issue.severity,
        code: issue.code,
        path: issue.path,
        message: issue.message,
      });
    }
  }

  const registryResult = validateModelRegistryDocument({
    schema_version: '1.0.0',
    data_version: 'source',
    generated_at: new Date(0).toISOString(),
    ...modelSource,
  }, documents);
  for (const issue of registryResult.issues) issues.push(issue);

  return {
    providerCount: documents.length,
    modelCount: modelSource.models.length,
    errorCount: issues.filter((issue) => issue.severity === 'error').length,
    warningCount: issues.filter((issue) => issue.severity === 'warning').length,
    issues,
  };
}
