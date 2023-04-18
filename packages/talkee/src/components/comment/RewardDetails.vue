<template>
  <FModal
    v-model="modal"
    :title="t('$vuetify.talkee.reward_details')"
    :width="smAndDown ? '100%' : 380"
  >
    <template #activator="{ props }">
      <CommentReward v-bind="props" :rewards="rewards" />
    </template>

    <div class="talkee-reward-details">
      <div
        v-for="(item, index) in rewards"
        :key="index"
        class="talkee-reward-details-item"
      >
        <div class="talkee-reward-details-item-logo">
          <FAssetLogo
            :asset="getAsset(item.asset_id)"
            size="24"
            chain-size="0"
          />
        </div>
        <span class="talkee-reward-details-item-text">
          {{ `${item.amount} ${getAsset(item.asset_id).symbol}` }}
        </span>
      </div>
    </div>
  </FModal>
</template>

<script lang="ts">
export default {
  name: "RewardDetails",
};
</script>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { useDisplay, useLocale } from "vuetify";
import { FModal, FAssetLogo } from "@foxone/uikit/components";
import CommentReward from "./CommentReward.vue";
import { RewardsItem } from "../../types";
import { useGlobals } from "../../composables";
import { convertMixinAsset } from "../../utils/helper";

defineProps({
  rewards: { type: Array as PropType<RewardsItem[]> },
});

const { t } = useLocale();
const { smAndDown } = useDisplay();
const globals = useGlobals();
const modal = ref(false);

const getAsset = (val: string) => {
  const asset = globals.assets.value.find((item) => item.asset_id === val)!;
  return convertMixinAsset(asset);
};
</script>

<style lang="scss" scoped>
.talkee-reward-details {
  padding: 16px;

  &-item {
    display: flex;
    align-items: center;

    &-logo {
      flex: 2;
      text-align: right;
    }

    &-text {
      flex: 3;
      font-size: 14px;
      padding-left: 24px;
      color: rgb(var(--v-theme-greyscale_2));
    }
  }
}
</style>
