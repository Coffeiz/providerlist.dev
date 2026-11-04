<script setup lang="ts">
/**
 * 独立能力详情。
 * 与模型 Offering 详情分开展示——两者是不同对象。
 */
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppIcon from '../../components/AppIcon.vue';
import CopyButton from '../../components/CopyButton.vue';
import DataUnavailable from '../../components/DataUnavailable.vue';
import DataLoading from '../../components/DataLoading.vue';
import ProviderLogo from '../../components/ProviderLogo.vue';
import SortableParameterTable from './components/SortableParameterTable.vue';
import { getProviderDocument, getState } from '../../composables/catalog';
import {
  describeMediaLimit,
  providerDisplayName,
  serviceCapabilityLabel,
} from '../../composables/format';
import type { Route, ServiceCapability } from '../../types';
import { t } from '../../i18n';

const route = useRoute();
const router = useRouter();
const state = getState();
const providerId = computed(() => String(route.params.providerId ?? ''));
const capabilityKind = computed(() => String(route.params.kind ?? ''));
const fromCapabilityIndex = computed(() => route.name === 'capability' && route.query.from === 'capabilities');
const backTarget = computed(() => fromCapabilityIndex.value
  ? '/capabilities'
  : `/providers/${providerId.value}?service=${service.value?.id ?? ''}`);
const backLabel = computed(() => fromCapabilityIndex.value ? t('服务能力') : displayProviderName.value);

function navigateBack() {
  const previousPath = router.options.history.state.back;
  if (fromCapabilityIndex.value && previousPath === '/capabilities') {
    router.back();
    return;
  }
  void router.push(backTarget.value);
}

const doc = computed(() => getProviderDocument(providerId.value));
const displayProviderName = computed(() => doc.value ? providerDisplayName(doc.value.provider) : 'Provider');
const serviceId = computed(() => typeof route.query.service === 'string' ? route.query.service : '');

const capability = computed<ServiceCapability | undefined>(() => {
  const services = doc.value?.services ?? [];
  const selectedService = services.find((item) => item.id === serviceId.value);
  return selectedService?.capabilities?.find((item) => item.kind === capabilityKind.value)
    ?? services.flatMap((item) => item.capabilities ?? []).find((item) => item.kind === capabilityKind.value);
});

const service = computed(() => {
  const services = doc.value?.services ?? [];
  const selectedService = services.find((item) => item.id === serviceId.value);
  if (selectedService?.capabilities?.some((item) => item.kind === capabilityKind.value)) {
    return selectedService;
  }
  const capabilityService = services.find((item) => item.capabilities?.some((capability) => capability.kind === capabilityKind.value));
  if (route.name === 'capability') return capabilityService ?? selectedService;
  return services.find((item) => item.id === serviceId.value) ?? services[0];
});

const detailOperations = computed<readonly ServiceCapability[]>(() => capability.value ? [capability.value] : []);
const detailKindLabel = computed(() => serviceCapabilityLabel(capability.value?.kind ?? ''));

const planNames = computed(() => (doc.value?.plans ?? [])
  .filter((plan) => capability.value?.required_plan_ids?.includes(plan.id))
  .map((plan) => plan.name ?? plan.id));
function routesFor(capability: ServiceCapability) {
  return capability.routes ?? [];
}

function routeInputParameters(operation: ServiceCapability) {
  return (operation.parameters ?? []).flatMap((parameter) => {
    const locations = [...new Set((parameter.route_mappings ?? []).flatMap((mapping) => {
      const match = /^(query|path)\./.exec(mapping);
      return match ? [match[1]!] : [];
    }))];
    return locations.map((location) => ({ ...parameter, location }));
  });
}

function endpointForRoute(target: Route) {
  return service.value?.endpoints?.find((endpoint) => endpoint.routes?.some((route) =>
    route.protocol === target.protocol && route.method === target.method && route.path === target.path,
  ));
}
</script>

<template>
  <div class="pl-container pl-page cap-detail">
    <nav class="pl-text-sm cap-back">
      <button class="cap-back-action" type="button" @click="navigateBack">
        ← {{ backLabel }}
      </button>
    </nav>

    <DataUnavailable v-if="state.loadError || state.pageLoadError" />

    <DataLoading v-else-if="!state.loaded" />

    <div v-else-if="!capability" class="pl-card">
      <h1>{{ t('未找到该能力') }}</h1>
      <p class="pl-text-secondary">{{ t('它可能不在当前目录中。') }}</p>
    </div>

    <template v-else>
      <div class="pl-content-head">
        <div class="pl-content-title">
          <h1>{{ detailKindLabel }}</h1>
          <span class="pl-result-count cap-provider-meta">
            <ProviderLogo
              v-if="doc?.provider"
              :name="displayProviderName"
              :src="doc.provider.logo"
              size="inline"
            />
            {{ displayProviderName }} · {{ service?.name }}
          </span>
        </div>
      </div>

      <p v-if="planNames.length" class="pl-text-sm">
        <span class="pl-badge pl-badge-warning">{{ t('需要套餐') }}</span>
        {{ planNames.join(' / ') }}
      </p>

      <section
        v-for="operation in detailOperations"
        :key="operation.kind"
        class="pl-stack"
      >
        <div class="pl-grid pl-grid-wide op-io-grid">
          <div class="pl-card op-card">
            <h3 class="pl-text-md op-card-title">{{ t('输入') }}</h3>
            <div v-if="(operation.input ?? []).length === 0 && routeInputParameters(operation).length === 0" class="pl-text-sm pl-text-tertiary">
              {{ t('未声明输入') }}
            </div>
            <div
              v-for="input in operation.input ?? []"
              :key="input.name"
              class="op-slot"
            >
              <div class="pl-row pl-wrap op-slot-head">
                <span class="pl-badge pl-badge-neutral">{{ input.name }}</span>
                <span class="pl-badge pl-badge-neutral">{{ input.kind }}</span>
                <span v-if="input.required" class="pl-badge pl-badge-warning">{{ t('必填') }}</span>
                <span
                  v-if="input.cardinality?.max"
                  class="pl-text-xs pl-text-tertiary"
                >
                  {{ t('最多 {max} 个', { max: input.cardinality.max }) }}
                </span>
              </div>
              <div v-if="input.media" class="pl-text-xs pl-text-tertiary op-slot-limit">
                {{ describeMediaLimit(input.media).join(' · ') }}
              </div>
              <div v-if="input.description" class="pl-text-xs pl-text-tertiary op-slot-limit">
                {{ input.description }}
              </div>
            </div>
            <div
              v-for="parameter in routeInputParameters(operation)"
              :key="`${parameter.name}:${parameter.location}`"
              class="op-slot"
            >
              <div class="pl-row pl-wrap op-slot-head">
                <span class="pl-badge pl-badge-neutral">{{ parameter.name }}</span>
                <span class="pl-badge pl-badge-neutral">{{ parameter.type }}</span>
                <span v-if="parameter.required" class="pl-badge pl-badge-warning">{{ t('必填') }}</span>
              </div>
              <div class="pl-text-xs pl-text-tertiary op-slot-limit">
                {{ t('输入位置：{location}', { location: parameter.location === 'query' ? 'Query' : 'Path' }) }}
              </div>
              <div v-if="parameter.description" class="pl-text-xs pl-text-tertiary op-slot-limit">
                {{ parameter.description }}
              </div>
            </div>
          </div>

          <div class="pl-card op-card">
            <h3 class="pl-text-md op-card-title">{{ t('输出') }}</h3>
            <div v-if="(operation.output ?? []).length === 0" class="pl-text-sm pl-text-tertiary">
              {{ t('未声明输出') }}
            </div>
            <div
              v-for="(output, index) in operation.output ?? []"
              :key="index"
              class="op-slot"
            >
              <div class="pl-row pl-wrap op-slot-head">
                <span class="pl-badge pl-badge-neutral">{{ output.kind }}</span>
                <span v-if="output.streaming === true" class="pl-badge pl-badge-success">{{ t('流式') }}</span>
                <span
                  v-if="output.streaming === null"
                  class="pl-text-xs pl-text-tertiary"
                >
                  {{ t('流式未知') }}
                </span>
              </div>
              <div v-if="output.media" class="pl-text-xs pl-text-tertiary op-slot-limit">
                {{ describeMediaLimit(output.media).join(' · ') }}
              </div>
              <div
                v-if="output.artifact"
                class="pl-text-xs pl-text-tertiary op-slot-limit"
              >
                {{ t('产物形式：{kind} · 有效期：{expires}', {
                  kind: output.artifact.kind,
                  expires: output.artifact.expires_in_seconds ?? t('未知'),
                }) }}
              </div>
              <div v-if="output.fields?.length" class="op-output-fields">
                <span class="op-output-fields-label">{{ t('响应字段') }}</span>
                <div class="op-output-field-list">
                  <code v-for="field in output.fields" :key="field" class="pl-mono op-output-field">{{ field }}</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="(operation.parameters ?? []).length > 0" class="pl-panel">
          <div class="pl-panel-header pl-text-sm pl-text-secondary">{{ t('参数') }}</div>
          <SortableParameterTable :parameters="operation.parameters ?? []" />
        </div>

        <div v-if="(operation.constraints ?? []).length > 0" class="pl-panel">
          <div class="pl-panel-header pl-text-sm pl-text-secondary">
            {{ t('参数组合约束') }}
          </div>
          <div class="pl-panel-body pl-stack-sm">
            <div
              v-for="constraint in operation.constraints ?? []"
              :key="constraint.id"
              class="pl-row pl-wrap constraint-row"
            >
              <code class="pl-mono">{{ constraint.id }}</code>
              <span class="pl-text-sm">
                {{ constraint.description ?? t('参数组合存在限制') }}
              </span>
            </div>
            <p class="pl-text-xs pl-text-tertiary">
              {{ t('非法组合（如 1080p + 5 秒）会被 GUI 与只读 SDK 同时阻止。') }}
            </p>
          </div>
        </div>

        <div v-if="routesFor(operation).length > 0" class="pl-panel">
          <div class="pl-panel-header pl-text-sm pl-text-secondary">Route</div>
          <div class="pl-panel-body pl-stack">
            <div
              v-for="r in routesFor(operation)"
              :key="`${r.protocol}-${r.method}-${r.path}`"
              class="route-row"
            >
              <div class="route-row-main">
                <code class="pl-endpoint-value">{{ r.method }} {{ r.path }}</code>
                <span class="pl-badge pl-badge-neutral">{{ r.protocol }}</span>
                <span v-if="endpointForRoute(r)" class="pl-text-xs pl-text-tertiary">
                  {{ endpointForRoute(r)?.base_url }}
                </span>
                <span v-if="r.task_id_pointer" class="pl-text-xs pl-text-tertiary">
                  {{ t('任务 ID 字段：') }}<code class="pl-mono">{{ r.task_id_pointer }}</code>
                </span>
                <span v-if="r.status_path_template" class="pl-text-xs pl-text-tertiary">
                  {{ t('状态查询：') }}<code class="pl-mono">{{ r.status_path_template }}</code>
                </span>
                <span v-if="r.result_path_template" class="pl-text-xs pl-text-tertiary">
                  {{ t('结果获取：') }}<code class="pl-mono">{{ r.result_path_template }}</code>
                </span>
              </div>
              <div class="pl-row route-row-actions">
                <a
                  v-if="r.documentation"
                  :href="r.documentation"
                  class="pl-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppIcon name="doc" />
                  {{ t('协议文档') }}
                  <AppIcon name="external" />
                </a>
                <CopyButton
                  :value="`${r.method} ${r.path}`"
                  :label="t('复制调用签名')"
                  :title="t('复制 HTTP 方法与路径模板')"
                  icon="copy"
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </template>
  </div>
</template>

<style scoped>
.cap-back-action {
  display: inline-flex;
  align-items: center;
  gap: var(--pl-space-xs);
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--pl-text-link);
  font: inherit;
  cursor: pointer;
}
.cap-back-action:hover { color: var(--pl-text-primary); }
.cap-provider-meta { display: inline-flex; align-items: center; gap: var(--pl-space-xs); }
.cap-detail { display: flex; flex-direction: column; gap: var(--pl-space-lg); }

.cap-detail > .pl-content-head { align-items: center; margin-bottom: 0; }
.cap-detail .pl-content-title { align-items: center; }

.cap-back { margin-bottom: calc(var(--pl-space-lg) * -1); }

.op-card { display: flex; flex-direction: column; gap: var(--pl-space-md); }

.op-card-title { color: var(--pl-text-secondary); }

.op-slot {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-xs);
  padding: var(--pl-space-md);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
  background: var(--pl-bg-muted);
}

.op-slot-head { gap: var(--pl-space-sm); }

.op-slot-limit { line-height: 1.6; }

.op-output-fields {
  display: flex;
  flex-direction: column;
  gap: var(--pl-space-xs);
}

.op-output-fields-label {
  color: var(--pl-text-secondary);
  font-size: var(--pl-text-xs);
  font-weight: var(--pl-weight-medium);
}

.op-output-field-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pl-space-xs);
}

.op-output-field {
  max-width: 100%;
  padding: 1px var(--pl-space-xs);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-xs);
  background: var(--pl-bg-surface);
  color: var(--pl-text-secondary);
}

.constraint-row { gap: var(--pl-space-sm); }

.route-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--pl-space-sm);
  padding: var(--pl-space-md);
  border: 1px solid var(--pl-border-subtle);
  border-radius: var(--pl-radius-md);
}

.route-row-main {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--pl-space-xs) var(--pl-space-md);
  flex: 1 1 auto;
  min-width: 0;
}

.route-row-actions { flex: 0 0 auto; }

@media (max-width: 768px) {
  .route-row { align-items: flex-start; flex-direction: column; }
  .route-row-actions {
    align-self: stretch;
    align-items: stretch;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }
  .route-row-actions > * {
    width: 100%;
    justify-content: center;
  }
}
</style>
