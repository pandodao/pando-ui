<template>
  <RewardModal :type="AirdropType.Comment" :opponent-id="id">
    <template #activator="{ props: { onClick } }">
      <FButton
        variant="plain"
        size="x-small"
        color="greyscale_3"
        class="talkee-comment-reward-action"
        @click="onClick"
      >
        <VIcon size="16">
          <IconRewardHand />
        </VIcon>
      </FButton>
    </template>
  </RewardModal>
</template>

<script lang="ts">
export default {
  name: "CommentRewardAction",
};
</script>

<script setup lang="ts">
import { VIcon } from "vuetify/components";
import RewardModal from "../reward/RewardModal.vue";
import { IconRewardHand } from "../icons";
import { AirdropType } from "../../types";

defineProps({
  id: { type: Number, required: true }
})
</script>

<style lang="scss" scoped>
.talkee-comment-reward-action {
  line-height: 1;
  font-size: 12px;
  padding: 0 8px;
  cursor: pointer !important;

  &:hover {
    color: rgb(var(--v-theme-greyscale_1)) !important;
  }

  :deep(.v-progress-circular) {
    width: 16px !important;
    height: 16px !important;
  }
}

.v-btn--variant-plain {
  opacity: 1;
}
</style>
