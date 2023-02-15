<template>
  <FButton size="x-small" class="message-action" @click="emits('toggle')">
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
}

.action-text {
  margin-left: 2px;
}
</style>
