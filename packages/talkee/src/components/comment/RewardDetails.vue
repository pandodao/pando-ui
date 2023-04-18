<template>
  <FModal
    v-model="modal"
    :title="t('$vuetify.talkee.reward_details')"
    :width="smAndDown ? '100%' : 400"
  >
    <template #activator="{ props: modalProps }">
      <CommentReward v-bind="modalProps" :amount-text="rewardText" />
    </template>

    <div class="talkee-airdrop-details">
      <div class="talkee-airdrop-details-total">
        <div class="talkee-airdrop-details-total-label">
          {{ t("$vuetify.talkee.total_received") }}
        </div>
        <div class="talkee-airdrop-details-total-amount">
          {{ rewardText }}
        </div>
      </div>

      <div class="talkee-airdrop-details-items-label">
        {{ t("$vuetify.talkee.details") }}
      </div>
      <div class="talkee-airdrop-details-items">
        <div
          v-for="(item, index) in rewardGroups"
          :key="`reward-item-${index}`"
          class="talkee-airdrop-details-item"
        >
          <img
            class="talkee-airdrop-details-item-logo"
            :src="item.asset.icon_url"
            width="24"
          >
          <div class="talkee-airdrop-details-item-text">
            <div class="talkee-airdrop-details-item-amount">
              {{ `${item.amount} ${item.asset.symbol}` }}
            </div>
            <div class="talkee-airdrop-details-item-value">
              {{ `$${item.value_usd}` }}
            </div>
          </div>
        </div>
      </div>

      <FButton color="primary" @click="handleTip">
        <VIcon size="16">
          <IconGift />
        </VIcon>
        <span class="talkee-airdrop-details-send-btn">
          {{ t("$vuetify.talkee.send_airdrop") }}
        </span>
      </FButton>
    </div>
  </FModal>
</template>

<script lang="ts">
export default {
  name: "RewardDetails",
};
</script>

<script setup lang="ts">
import { computed, PropType, ref } from "vue";
import { useDisplay, useLocale } from "vuetify";
import { FModal } from "@foxone/uikit/components";
import CommentReward from "./CommentReward.vue";
import { RewardsItem, AirdropType } from "../../types";
import { useGlobals } from "../../composables";
import { IconGift } from "../icons";
import { format as formatNumber } from "@foxone/utils/number";
import { useAirdropModal } from "../../composables/useAirdropModal";

const props = defineProps({
  id: { type: Number, required: true },
  rewards: { type: Array as PropType<RewardsItem[]> },
});

const { t } = useLocale();
const { smAndDown } = useDisplay();
const airdropModal = useAirdropModal(AirdropType.Comment, props.id);
const globals = useGlobals();
const modal = ref(false);

const getAsset = (val: string) => {
  const asset: any = globals.assets.value.find(
    (item) => item.asset_id === val
  )!;
  asset.logo = asset.icon_url;
  return asset;
};

const rewardGroups = computed(() => {
  const groups: Record<string, any> = {};
  if (!props.rewards) return groups;
  for (let ix = 0; ix < props.rewards.length; ix++) {
    const item = props.rewards[ix];
    if (!groups[item.asset_id]) {
      const asset = getAsset(item.asset_id);
      groups[item.asset_id] = {
        asset,
        amount: 0,
        value_usd: 0,
      };
    }
    groups[item.asset_id].amount += parseFloat(item.amount);
  }

  for (const key in groups) {
    groups[key].amount = formatNumber({ n: groups[key].amount, dp: 8 });
    groups[key].value_usd = formatNumber({
      n: parseFloat(groups[key].amount) * groups[key].asset.price_usd,
      dp: 8,
    });
  }
  return Object.values(groups);
});

const rewardText = computed(() => {
  let totalUsd = 0.0;
  if (!rewardGroups.value) return `$0.00`;
  for (let ix = 0; ix < rewardGroups.value.length; ix++) {
    const item = rewardGroups.value[ix];
    totalUsd += parseFloat(item.amount) * item.asset?.price_usd;
  }
  return `$${formatNumber({ n: totalUsd, dp: 8 })}`;
});

const handleTip = () => {
  modal.value = false;
  airdropModal.showAirdropModal();
};
</script>

<style lang="scss" scoped>
.talkee-airdrop-details {
  padding: 0 16px 16px;
  display: flex;
  flex-direction: column;

  &-total {
    margin-bottom: 24px;
    text-align: center;

    &-label {
      color: rgb(var(--v-theme-greyscale_3));
      font-size: 0.7rem;
      margin-bottom: 4px;
    }

    &-amount {
      display: inline-block;
      padding: 2px 10px;
      color: #c5a70b;
      background-color: #faf6e1;
      border-radius: 4px;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  &-items-label {
    text-align: center;
    color: rgb(var(--v-theme-greyscale_3));
    font-size: 0.7rem;
  }

  &-items {
    margin-bottom: 1rem;
    padding: 0.4rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 8px 16px 8px 12px;
    margin: 0 8px 8px 0;
    background: rgba(0, 0, 0, 0.03);
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08);

    &-logo {
      flex: 0;
      text-align: right;
      width: 28px;
    }

    &-text {
      flex: 3;
      padding-left: 8px;
    }

    &-amount {
      font-size: 12px;
      font-weight: 700;
      color: rgb(var(--v-theme-greyscale_2));
    }

    &-value {
      font-size: 10px;
      font-weight: 400;
      color: rgb(var(--v-theme-greyscale_3));
    }
  }

  &-send-btn {
    margin-left: 8px;
  }
}
</style>
