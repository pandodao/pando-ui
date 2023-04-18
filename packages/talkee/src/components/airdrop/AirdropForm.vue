<template>
  <VForm v-model="valid">
    <div class="pa-4">
      <VRow>
        <VCol cols="12">
          <FAssetAmountInput
            v-model:asset="asset"
            v-model:amount="amount"
            :placeholder="t('$vuetify.talkee.input_amount')"
            :assets="assets"
            :rules="rules.inputAsset"
            hide-details
          />
        </VCol>
        <VCol cols="12">
          <FInput v-model="memo" :label="t('$vuetify.talkee.memo')" />
        </VCol>
      </VRow>

      <div v-if="isAirdrop">
        <VRow dense class="mb-6">
          <VCol cols="12">
            <VBtnToggle
              v-model="strategyName"
              mandatory
              density="compact"
              class="talkee-strategy-toggle"
              block
            >
              <VBtn value="topn">
                {{ t("$vuetify.talkee.top_n") }}
              </VBtn>
              <VBtn value="avg">
                {{ t("$vuetify.talkee.avg") }}
              </VBtn>
            </VBtnToggle>
          </VCol>

          <VCol>
            <div class="talkee-airdrop-modal-hint-strategy">
              {{
                strategyName === "topn"
                  ? t("$vuetify.talkee.top_n_hint")
                  : t("$vuetify.talkee.avg_hint")
              }}
            </div>
          </VCol>

          <VCol v-if="strategyName === 'topn'" cols="12">
            <FInput
              v-model="airdropNumber"
              :label="t('$vuetify.talkee.input_integer')"
              :rules="rules.inputN"
              hide-details
            />
          </VCol>
        </VRow>
      </div>

      <FButton
        :disabled="!valid"
        color="primary"
        block
        :loading="loading"
        @click="handleSubmit"
      >
        {{ t("$vuetify.talkee.submit") }}
      </FButton>
    </div>
  </VForm>
</template>

<script lang="ts">
export default {
  name: "AirdropForm",
};
</script>

<script setup lang="ts">
import { ref, computed, PropType, onMounted } from "vue";
import { useLocale } from "vuetify";
import { FButton, FAssetAmountInput, FInput } from "@foxone/uikit/components";
import { VBtnToggle, VBtn, VForm } from "vuetify/components";
import { useGlobals } from "../../composables";
import { createAirdrop } from "../../services";
import { convertMixinAsset } from "../../utils/helper";
import {
  MixinAsset,
  AirdropParams,
  AirdropType,
  AirdropStrategy,
} from "../../types";

const props = defineProps({
  type: { type: String as PropType<AirdropType>, required: true },
  opponentId: { type: Number },
});

const { t } = useLocale();
const globals = useGlobals();

const isAirdrop = computed(() => props.type === AirdropType.Comments);

const assets = computed(() => {
  const assetsCopy = globals.assets.value;
  assetsCopy.sort((a, b) => +b.price_usd - +a.price_usd);
  return assetsCopy.map((asset) => convertMixinAsset(asset));
});

const valid = ref(false);
const asset = ref<MixinAsset>();
const amount = ref("");
const memo = ref("");
const strategyName = ref(AirdropStrategy.TopN);
const airdropNumber = ref();
const loading = ref(false);

const rules = computed(() => {
  return {
    inputAsset: [
      () => !!asset.value || t("$vuetify.talkee.asset_required"),
      (v: string) => +v > 0 || t("$vuetify.talkee.amount_invalid"),
    ],
    inputN: [
      () => !!airdropNumber.value || t("$vuetify.talkee.n_required"),
      (v: string) => +v > 0 || t("$vuetify.talkee.amount_invalid"),
      (v: string) =>
        !!Number.isInteger(+v) || t("$vuetify.talkee.amount_need_integer"),
    ],
  };
});

const handleSubmit = async () => {
  loading.value = true;

  let params: AirdropParams = {
    site_id: Number(globals.siteId.value),
    slug: globals.slug.value,
    airdrop_type: props.type,
    asset_id: asset.value?.id!,
    amount: amount.value,
    memo: memo.value,
    redirect_url: window.location.href,
  };

  if (isAirdrop.value) {
    params.strategy_name = strategyName.value;
    params.strategy_params = { n: Number(airdropNumber.value) };
  } else if (props.type !== AirdropType.Slug) {
    params.opponent_id = props.opponentId;
  }

  const resp = await createAirdrop(params);
  loading.value = false;

  if (resp?.mixpay_code) {
    const mixPayUrl = `https://mixpay.me/code/${resp?.mixpay_code}`;
    console.log("to mixpay");
    window.location.assign(mixPayUrl);
  }
};

onMounted(() => (asset.value = assets.value[0]));
</script>

<style lang="scss" scoped>
.talkee-strategy-toggle {
  :deep(.v-btn) {
    font-size: 14px;
    font-weight: 500;
    color: rgb(var(--v-theme-greyscale_3));
  }

  :deep(.v-btn--active) {
    color: rgb(var(--v-theme-greyscale_1));
  }
}

.talkee-airdrop-modal-hint-strategy {
  font-size: 0.7rem;
  opacity: 0.5;
}
</style>
