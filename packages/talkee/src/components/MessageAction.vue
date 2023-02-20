<template>
  <FButton
    variant="plain"
    size="x-small"
    color="greyscale_3"
    class="message-action"
    @click="emits('toggle')"
  >
    <VIcon size="16">
      <IconMessageDot />
    </VIcon>

    <span class="action-text">
      {{ comment?.reply_count }}
    </span>
  </FButton>
</template>

<script lang="ts">
export default {
  name: "MessageAction",
};
</script>

<script lang="ts" setup>
import { PropType } from "vue";
import { IconMessageDot } from "./icons";
import { VIcon } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";

import type { Comment } from "../types";

defineProps({
  comment: { type: Object as PropType<Comment> },
});

const emits = defineEmits({
  toggle: () => true,
});
</script>

<style lang="scss" scoped>
.message-action {
  margin-right: 8px;
  padding: 0;
  min-width: auto;
  line-height: 1;
  font-size: 12px;

  :deep(.v-progress-circular) {
    width: 16px !important;
    height: 16px !important;
  }
}

.v-btn--variant-plain {
  opacity: 1;
}

.action-text {
  margin-left: 2px;
}
</style>
