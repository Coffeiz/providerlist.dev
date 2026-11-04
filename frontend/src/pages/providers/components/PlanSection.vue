<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import AppIcon from '../../../components/AppIcon.vue';
import type { Plan, PlanBillingOption } from '../../../types';
import { formatCurrencyReference } from '../../../composables/format';
import { t } from '../../../i18n';

const props = defineProps<{ plans: readonly Plan[] }>();

type BillingPeriod = PlanBillingOption['billing_period'];
const billingPeriodOrder: readonly BillingPeriod[] = ['month', 'quarter', 'year', 'custom', 'one_time'];
const selectedBillingPeriod = ref<BillingPeriod>('month');
const billingPeriods = computed(() => {
  const available = new Set(props.plans.flatMap((plan) => plan.billing_options.map((option) => option.billing_period)));
  return billingPeriodOrder.filter((period) => available.has(period));
});
const visiblePlans = computed(() => props.plans.filter((plan) =>
  plan.billing_options.some((option) => option.billing_period === selectedBillingPeriod.value),
));

watch(billingPeriods, (periods) => {
  if (!periods.includes(selectedBillingPeriod.value) && periods[0]) {
    selectedBillingPeriod.value = periods[0];
  }
}, { immediate: true });

function billingOption(plan: Plan): PlanBillingOption | undefined {
  return plan.billing_options.find((option) => option.billing_period === selectedBillingPeriod.value);
}

function periodLabel(period: BillingPeriod): string {
  if (period === 'month') return t('每月');
  if (period === 'quarter') return t('每季度');
  if (period === 'year') return t('每年');
  if (period === 'one_time') return t('一次性');
  return t('自定义周期');
}

function periodButtonLabel(period: BillingPeriod): string {
  if (period === 'month') return t('月付');
  if (period === 'quarter') return t('季付');
  if (period === 'year') return t('年付');
  return periodLabel(period);
}

function feeDisplay(amount: string | undefined, currency: string | undefined) {
  return amount && currency ? formatCurrencyReference(amount, currency) : undefined;
}

function selectedFee(option: PlanBillingOption | undefined) {
  return option?.sale_price ?? option?.price;
}

function selectedPricePeriodLabel(option: PlanBillingOption | undefined): string {
  if (option?.sale_type === 'first_month') return t('首月');
  return periodLabel(selectedBillingPeriod.value);
}

function officialPlanUrl(plan: Plan): string | undefined {
  return plan.links?.official ?? plan.links?.details ?? plan.links?.pricing;
}

function planBadgeLabel(plan: Plan): string {
  if (plan.credits !== undefined) {
    const credits = String(plan.credits);
    const isEstimate = credits.startsWith('~');
    const value = isEstimate ? credits.slice(1) : credits;
    return isEstimate
      ? t('约 {value} Credits/月', { value })
      : t('{value} Credits/月', { value });
  }
  return t('额度比例 {value}', { value: `${plan.ratio ?? '—'}×` });
}
</script>

<template>
  <section class="pl-stack detail-section" aria-labelledby="detail-plans">
    <div class="pl-row-between pl-wrap plan-section-header">
      <h2 id="detail-plans" class="pl-text-lg detail-section-heading">{{ t('套餐计划') }}</h2>
      <div v-if="billingPeriods.length > 1" class="pl-row plan-billing-switch" role="group" :aria-label="t('计费周期')">
        <button
          v-for="period in billingPeriods"
          :key="period"
          type="button"
          class="pl-button"
          :class="selectedBillingPeriod === period ? 'pl-button-primary' : ''"
          :aria-pressed="selectedBillingPeriod === period"
          @click="selectedBillingPeriod = period"
        >{{ periodButtonLabel(period) }}</button>
      </div>
    </div>
    <div class="pl-grid pl-grid-wide plan-grid">
      <article v-for="plan in visiblePlans" :key="plan.id" class="pl-card plan-card">
        <div class="pl-row-between pl-wrap">
          <h3 class="pl-text-md">{{ plan.name ?? plan.id }}</h3>
          <span v-if="plan.credits !== undefined || plan.ratio !== undefined" class="pl-badge pl-badge-neutral">{{ planBadgeLabel(plan) }}</span>
        </div>
        <p class="pl-text-sm pl-text-secondary plan-price">
          <del v-if="billingOption(plan)?.sale_price && billingOption(plan)?.price" class="detail-price-original">
            {{ feeDisplay(billingOption(plan)?.price, plan.currency)?.primary }}
          </del>
          <span v-if="selectedFee(billingOption(plan))" class="plan-price-main">
            {{ feeDisplay(selectedFee(billingOption(plan)), plan.currency)?.primary }}
            <span class="pl-text-tertiary">/ {{ selectedPricePeriodLabel(billingOption(plan)) }}</span>
          </span>
          <span v-else class="pl-text-tertiary">{{ t('价格未知') }}</span>
          <span
            v-if="feeDisplay(billingOption(plan)?.price, plan.currency)?.native || feeDisplay(billingOption(plan)?.sale_price, plan.currency)?.native"
            class="pl-price-native plan-price-native"
          >
            <del v-if="billingOption(plan)?.sale_price && feeDisplay(billingOption(plan)?.price, plan.currency)?.native">
              {{ feeDisplay(billingOption(plan)?.price, plan.currency)?.native }}
            </del>
            <span v-if="feeDisplay(selectedFee(billingOption(plan)), plan.currency)?.native">
              {{ feeDisplay(selectedFee(billingOption(plan)), plan.currency)?.native }}
            </span>
          </span>
        </p>
        <p v-if="plan.description" class="pl-text-xs pl-text-tertiary">{{ plan.description }}</p>
        <a v-if="officialPlanUrl(plan)" :href="officialPlanUrl(plan)" target="_blank" rel="noopener noreferrer" class="pl-text-xs plan-link">
          {{ t('套餐详情') }}
          <AppIcon name="external" />
        </a>
      </article>
    </div>
    <p class="pl-text-xs pl-text-tertiary">{{ t('套餐价格与权益以官方页面当前信息为准；credits 与倍率按官方口径展示。') }}</p>
  </section>
</template>

<style scoped>
.plan-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); }
.plan-section-header { align-items: center; }
.plan-section-header h2 { margin: 0; }
.plan-billing-switch { gap: var(--pl-space-xs); }
.plan-card { display: flex; min-width: 0; flex-direction: column; gap: var(--pl-space-sm); }
.plan-card h3, .plan-card p { margin: 0; }
.plan-card h3, .plan-price, .plan-price-main { min-width: 0; max-width: 100%; overflow-wrap: anywhere; }
.plan-price { display: flex; min-width: 0; flex-wrap: wrap; align-items: baseline; column-gap: var(--pl-space-xs); row-gap: 0; font-size: var(--pl-text-lg); font-weight: 600; }
.plan-price .detail-price-original { margin-inline-end: 0; }
.plan-price-main { white-space: normal; }
.plan-price-native { display: inline-flex; flex: 0 0 100%; flex-direction: row; align-items: baseline; gap: var(--pl-space-xs); white-space: nowrap; font-weight: 400; }
.plan-link { display: inline-flex; align-items: center; gap: var(--pl-space-xs); align-self: flex-start; margin-top: auto; }

@media (max-width: 768px) {
  .detail-section > .plan-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--pl-space-sm); }
  .plan-card { padding: var(--pl-space-md); }
  .plan-card h3 { font-size: var(--pl-text-sm); }
  .plan-price { font-size: var(--pl-text-md); }
  .plan-price-main { white-space: normal; }
}

@media (max-width: 360px) {
  .detail-section > .plan-grid { grid-template-columns: 1fr; }
}
</style>
