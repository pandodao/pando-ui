<template>
  <FButton
    variant="plain"
    size="x-small"
    color="greyscale_3"
    class="talkee-message-action"
    @click="emits('toggle')"
  >
    <VIcon size="16">
      <IconMessageDot />
    </VIcon>

    <span class="talkee-message-count">
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
import { IconMessageDot } from "../icons";
import { VIcon } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";

import type { Comment } from "../../types";

defineProps({
  comment: { type: Object as PropType<Comment> },
});

const emits = defineEmits({
  toggle: () => true,
});
</script>

<style lang="scss" scoped>
.talkee-message-action {
  margin-right: 8px;
  padding: 0;
  min-width: auto;
  line-height: 1;
  font-size: 12px;
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

.talkee-message-count {
  margin-left: 2px;
}
</style>
