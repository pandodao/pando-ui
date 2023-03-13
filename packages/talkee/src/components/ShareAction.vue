<template>
  <FButton
    variant="plain"
    size="x-small"
    color="greyscale_3"
    class="talkee-share-action"
    @click="handleShare"
  >
    <VIcon size="16">
      <IconShare />
    </VIcon>
  </FButton>
</template>

<script lang="ts">
export default {
  name: "ShareAction",
};
</script>

<script lang="ts" setup>
import { defineProps } from "vue";
import { IconShare } from "./icons";
import { VIcon } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";
import { isDesktop } from "@foxone/utils/helper";

const props = defineProps({
  comment: { type: Object },
});

async function handleShare() {
  const hashTags = "#Talkee #PandoProto";
  const text = `${props.comment?.content} ${hashTags}`;
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
  if (isDesktop()) {
    window.open(url, "_blank");
  } else {
    location.href = url;
  }
}
</script>

<style lang="scss" scoped>
.talkee-share-action {
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
