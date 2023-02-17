<template>
  <div v-if="reward" class="comment-reward">
    <span class="reward-text">{{ rewardText }}</span>

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
import { computed } from "vue";
import { IconGift } from "./icons";
import { VIcon } from "vuetify/components";
import { useGlobals } from "../composables";

const props = defineProps({
  reward: { type: Object },
});

const globals = useGlobals();

const rewardText = computed(() => {
  const assetId = props.reward?.asset_id;
  const asset = globals.assets.value.find((x) => x.asset_id === assetId);

  if (asset) {
    return `${props.reward?.amount} ${asset.symbol}`;
  }

  return "";
});
</script>

<style lang="scss" scoped>
.comment-reward {
  padding: 0 4px;
  font-size: 12px;
  height: 18px;
  color: #c5a70b;
  background-color: #faf6e1;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .reward-text {
    font-weight: 500;
    margin-right: 4px;
  }
}
</style>
