<template>
  <div class="comment-content">
    <span class="content" v-html="content" />
    <VIcon
      v-if="showLink && href"
      class="icon-hash"
      size="14"
      color="info"
      @click="handleToHash"
    >
      <IconHash />
    </VIcon>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentContent",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { TextParser } from "@foxone/utils/text-parser";
import { IconHash } from "./icons";
import { VIcon } from "vuetify/components";

const props = defineProps({
  content: { type: String, default: "" },
  href: { type: String, default: "" },
  showLink: { type: Boolean, default: false },
});

const content = computed(() => {
  let text = content;
  try {
    text = new TextParser().parse(props.content ?? "");
  } catch (error) {
    // ignore
  }

  return text;
});

function handleToHash() {
  const link = " https://viewblock.io/arweave/tx/" + props.href;

  window.open(link, "_blank");
}
</script>

<style lang="scss" scoped>
.comment-content {
  font-size: 14px;
  margin-top: 8px;
  display: inline-block;
  line-height: 1;

  .content {
    line-height: 1;
    vertical-align: middle;
  }

  .icon-hash {
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>
