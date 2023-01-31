<template>
  <div class="message-action">
    <VIcon size="16">
      <IconMessageDot />
    </VIcon>

    <span class="action-text">{{ comment?.reply_count }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "MessageAction",
};
</script>

<script lang="ts" setup>
import { IconMessageDot } from "./icons";

defineProps({
  comment: { type: Object },
});
</script>

<style lang="scss" scoped>
.action-text {
  margin-left: 2px;
}
</style>
