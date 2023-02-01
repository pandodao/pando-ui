<template>
  <FButton icon size="16" class="message-action" @click="emits('toggle')">
    <VIcon size="16">
      <IconMessageDot />
    </VIcon>

    <span class="action-text">{{ comment?.reply_count }}</span>
  </FButton>
</template>

<script lang="ts">
export default {
  name: "MessageAction",
};
</script>

<script lang="ts" setup>
import { IconMessageDot } from "./icons";
import { VIcon } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";

defineProps({
  comment: { type: Object },
});

const emits = defineEmits({
  toggle: () => true,
});
</script>

<style lang="scss" scoped>
.message-action {
  margin-right: 8px;
}

.action-text {
  margin-left: 2px;
}
</style>
