<template>
  <div class="comment-reward">
    <VIcon
      v-if="showLink && href"
      class="icon-hash"
      size="14"
      @click="handleToHash"
    >
      <IconHash />
    </VIcon>

    <div v-if="reward" class="reward-info">
      <VIcon class="icon-gift" size="14">
        <IconGift />
      </VIcon>

      <span class="reward-text">{{ rewardText }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentReward",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { IconHash, IconGift } from "./icons";
import { VIcon } from "vuetify/components";
import { useGlobals } from "../composables";

const props = defineProps({
  href: { type: String, default: "" },
  showLink: { type: Boolean, default: false },
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

function handleToHash() {
  const link = " https://viewblock.io/arweave/tx/" + props.href;

  window.open(link, "_blank");
}
</script>

<style lang="scss" scoped>
.comment-reward {
  .reward-info {
    display: inline;

    .reward-text {
      font-size: 12px;
      color: rgb(var(--v-theme-greyscale_3));
      vertical-align: middle;
      margin-left: 4px;
    }
  }

  .icon-hash,
  .icon-gift {
    vertical-align: middle;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    margin-left: 0.4rem;
    color: white;
    background: rgb(var(--v-theme-greyscale_4));

    &:hover {
      background: rgb(var(--v-theme-info));
    }
  }
}
</style>
