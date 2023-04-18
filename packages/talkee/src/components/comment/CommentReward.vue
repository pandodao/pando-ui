<template>
  <div v-if="rewards" class="talkee-comment-reward">
    <span class="talkee-reward-text">{{ rewardText }}</span>

    <VIcon size="12">
      <IconGift />
    </VIcon>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentReward",
};
</script>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { format as formatNumber } from "@foxone/utils/number";
import { IconGift } from "../icons";
import { VIcon } from "vuetify/components";
import { useGlobals } from "../../composables";
import { RewardsItem } from "../../types";

const props = defineProps({
  rewards: { type: Array as PropType<RewardsItem[]>, default: () => [] },
});

const globals = useGlobals();

const rewardText = computed(() => {
  if (props.rewards?.length === 1) {
    const assetId = props.rewards[0]?.asset_id;

    const asset = globals.assets.value.find((x) => x.asset_id === assetId);

    if (asset) {
      return `${props.rewards[0]?.amount} ${asset.symbol}`;
    }

    return "";
  }

  if (props.rewards?.length > 1) {
    const value = props.rewards?.reduce((total: number, item: RewardsItem) => {
      const asset = globals.assets.value.find(
        (x) => x.asset_id === item.asset_id
      );

      if (asset) {
        const value = total + +item.amount * +asset?.price_usd;

        return value;
      }

      return 0;
    }, 0);

    return `≈ ${formatNumber({n: value, dp: 8 })} pUSD`;
  }

  return "";
});
</script>

<style lang="scss" scoped>
.talkee-comment-reward {
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
  height: 18px;
  color: #c5a70b;
  background-color: #faf6e1;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .talkee-reward-text {
    font-weight: 500;
    margin-right: 4px;
  }
}
</style>
