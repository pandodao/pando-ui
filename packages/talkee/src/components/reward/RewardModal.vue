<template>
  <FModal
    v-model="modal"
    :title="isAirdrop ? t('airdrop') : t('reward')"
    :width="smAndDown ? '100%' : 380"
    @update:model-value="handleOpen"
  >
    <template #activator="{ props: modalProps }">
      <slot :props="modalProps" name="activator" />
    </template>

    <VForm v-model="valid">
      <div class="talkee-reward-modal pa-4">
        <div>
          <p class="talkee-reward-modal-label">
            {{ t("$vuetify.talkee.select_asset") }}
          </p>
          <FAssetAmountInput
            v-model:asset="asset"
            v-model:amount="amount"
            :placeholder="t('$vuetify.talkee.input_amount')"
            :assets="assets"
            :rules="rules.inputAsset"
          />
        </div>

        <div>
          <span class="talkee-reward-modal-label">
            {{ t("$vuetify.talkee.memo") }}
          </span>
          <FInput v-model="memo" :placeholder="t('$vuetify.talkee.memo')" />
        </div>

        <div v-if="isAirdrop">
          <div class="mb-6">
            <p class="talkee-reward-modal-label">
              {{ t("$vuetify.talkee.select_strategy") }}
            </p>
            <VBtnToggle
              v-model="strategyName"
              mandatory
              density="compact"
              class="talkee-strategy-toggle"
            >
              <VBtn value="topn">top N</VBtn>
              <VBtn value="avg">avg</VBtn>
            </VBtnToggle>
          </div>

          <div v-if="strategyName === 'topn'">
            <p class="talkee-reward-modal-label">
              {{ t("$vuetify.talkee.input_topn") }}
            </p>
            <FInput
              v-model="airdropNumber"
              :placeholder="t('$vuetify.talkee.input_integer')"
              :rules="rules.inputN"
            />
          </div>
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
  </FModal>
</template>

<script lang="ts">
export default {
  name: "RewardModal",
};
</script>

<script setup lang="ts">
import { ref, computed, PropType } from "vue";
import { useLocale, useDisplay } from "vuetify";
import {
  FButton,
  FModal,
  FAssetAmountInput,
  FInput,
} from "@foxone/uikit/components";
import { useToast } from "@foxone/uikit/plugins/toast";
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
const { smAndDown } = useDisplay();
const toast = useToast();
const globals = useGlobals();
const isAirdrop = computed(() => props.type === AirdropType.Comments);

const modal = ref(false);
const valid = ref(false);
const asset = ref<MixinAsset>();
const amount = ref("");
const memo = ref("");
const strategyName = ref(AirdropStrategy.TopN);
const airdropNumber = ref();
const loading = ref(false);

const assets = computed(() =>
  globals.assets.value.map((asset) => convertMixinAsset(asset))
);

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

const handleOpen = () => {
  if (!globals.logged.value) {
    toast.warning({ message: t("$vuetify.talkee.please_login") })
    modal.value = false;
  }
};

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
</script>

<style lang="scss" scoped>
.talkee-reward-modal-label {
  font-size: 14px;
  color: rgb(var(--v-theme-greyscale_2));
  margin-bottom: 8px;
}

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
</style>
