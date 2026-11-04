/**
 * 固定来源定义与抓取结果的最小契约。
 * 来源 URL 必须由仓库代码登记；CLI 只接收 source_id，不接收 URL。
 */

export interface IngestSource {
  readonly id: string;
  readonly provider_id: string;
  /** 服务市场，禁止将地区定价或可用性跨市场合并。 */
  readonly market?: 'cn' | 'global';
  readonly name: string;
  readonly url: string;
  readonly enabled: boolean;
  readonly accept: string;
  readonly max_bytes: number;
  /** 个别官方静态目录响应较慢时可单独延长，最大 60 秒。 */
  readonly timeout_ms?: number;
  readonly adapter_id?: string;
  /** 采集覆盖域；只用于候选审阅，不推断字段可信状态。 */
  readonly scope?: 'model_catalog' | 'pricing' | 'api' | 'capability' | 'plan' | 'documentation';
  /** public 表示无需凭证；account_scoped 表示只证明单个账号/Key 可见范围。 */
  readonly access_scope?: 'public' | 'account_scoped' | 'unknown';
  /** 目录页可能动态渲染；解析器无法结构化时保留页面证据供人工审阅。 */
  readonly extraction?: 'markdown' | 'json' | 'html' | 'docs';
}

export interface SnapshotMetadata {
  readonly source_id: string;
  readonly market?: 'cn' | 'global';
  readonly source_name: string;
  readonly request_url: string;
  readonly retrieved_at: string;
  readonly http_status: number;
  readonly content_type: string | null;
  readonly etag: string | null;
  readonly last_modified: string | null;
  readonly content_hash: string;
  readonly byte_length: number;
  readonly collector_version: string;
  readonly body_file: string;
}

export interface SnapshotCaptureResult {
  readonly metadata: SnapshotMetadata;
  readonly created: boolean;
}

/** 各 Provider 适配器共用来源与指纹元信息，facts 保留适配器自己的领域结构。 */
export interface CandidateEnvelope<TFacts> {
  readonly provider_id: string;
  readonly candidate_kind: string;
  readonly observed_at: string;
  readonly previous_candidate_hash: string | null;
  readonly candidate_hash: string;
  /** Date-named Markdown report paired with this hash-named JSON candidate. */
  readonly review_markdown_file?: string;
  readonly sources: readonly SnapshotMetadata[];
  readonly previous: TFacts | null;
  readonly current: TFacts;
}
