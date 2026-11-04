import { MINIMAX_INGEST_SOURCES } from './minimax/sources.ts';
import { ZHIPU_INGEST_SOURCES } from './zhipu/sources.ts';
import { MOONSHOTAI_INGEST_SOURCES } from './moonshotai/sources.ts';
import { STEPFUN_INGEST_SOURCES } from './stepfun/sources.ts';
import { DEEPSEEK_INGEST_SOURCES } from './deepseek/sources.ts';
import { ALIBABA_INGEST_SOURCES } from './alibaba/sources.ts';
import { VOLCENGINE_INGEST_SOURCES } from './volcengine/sources.ts';
import { VOLCENGINE_GLOBAL_INGEST_SOURCES } from './volcengine/global-sources.ts';
import { TENCENT_INGEST_SOURCES } from './tencent/sources.ts';
import { XIAOMI_INGEST_SOURCES } from './xiaomi/sources.ts';
import { BAILING_INGEST_SOURCES } from './bailing/sources.ts';
import { OPENAI_INGEST_SOURCES } from './openai/sources.ts';
import { GOOGLE_INGEST_SOURCES } from './google/sources.ts';
import { XAI_INGEST_SOURCES } from './xai/sources.ts';
import { META_INGEST_SOURCES } from './meta/sources.ts';
import type { IngestSource } from '../types.ts';

/** Provider 专属来源登记表的汇总入口。新增 Provider 时只在此汇总各自目录。 */
export const PROVIDER_INGEST_SOURCES: readonly IngestSource[] = [
  ...MINIMAX_INGEST_SOURCES,
  ...ZHIPU_INGEST_SOURCES,
  ...MOONSHOTAI_INGEST_SOURCES,
  ...STEPFUN_INGEST_SOURCES,
  ...DEEPSEEK_INGEST_SOURCES,
  ...ALIBABA_INGEST_SOURCES,
  ...VOLCENGINE_INGEST_SOURCES,
  ...VOLCENGINE_GLOBAL_INGEST_SOURCES,
  ...TENCENT_INGEST_SOURCES,
  ...XIAOMI_INGEST_SOURCES,
  ...BAILING_INGEST_SOURCES,
  ...OPENAI_INGEST_SOURCES,
  ...GOOGLE_INGEST_SOURCES,
  ...XAI_INGEST_SOURCES,
  ...META_INGEST_SOURCES,
];
