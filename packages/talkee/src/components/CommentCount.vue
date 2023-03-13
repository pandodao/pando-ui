<template>
  <div class="talkee-comment-count">
    <VIcon size="16">
      <IconMessage />
    </VIcon>
    <span class="talkee-comment-count-text">{{ globals.total }}</span>
    <a href="https://pando.im/talkee/" target="_blank" class="talkee-link"> Talkee</a>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentCount",
};
</script>

<script lang="ts" setup>
import { VIcon } from "vuetify/components";
import { IconMessage } from "./icons";
import { useGlobals } from "../composables";

const globals = useGlobals();
</script>

<style lang="scss" scoped>
.talkee-link {
  text-decoration: none;
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  color: rgb(var(--v-theme-greyscale_3));

  &:hover {
    color: rgb(var(--v-theme-greyscale_2));
  }
}

.talkee-comment-count {
  font-size: 14px;

  .talkee-comment-count-text {
    margin-left: 4px;
  }
}
</style>
