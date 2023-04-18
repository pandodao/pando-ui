<template>
  <div v-if="amountText" class="talkee-comment-airdrop">
    <VIcon size="12">
      <IconGift />
    </VIcon>

    <span class="talkee-comment-airdrop-text">{{ amountText }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentReward",
};
</script>

<script lang="ts" setup>
import { IconGift } from "../icons";
import { VIcon } from "vuetify/components";

defineProps({
  amountText: { type: String, default: "" },
});

</script>

<style lang="scss" scoped>
.talkee-comment-airdrop {
  cursor: pointer;
  padding: 0 4px;
  font-size: 12px;
  height: 18px;
  color: #c5a70b;
  background-color: #faf6e1;
  border-radius: 4px;
  display: flex;
  align-items: center;

  .talkee-comment-airdrop-text {
    font-weight: 500;
    margin-left: 4px;
  }
}
</style>
