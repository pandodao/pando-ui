<template>
  <div class="talkee-comment">
    <span class="talkee-comment-content" v-html="content" />

    <VIcon
      v-if="showLink && href"
      class="talkee-comment-icon-hash"
      size="14"
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
.talkee-comment {
  font-size: 14px;
  margin-top: 8px;
  display: inline-block;
  line-height: 1.6;

  .talkee-comment-content {
    vertical-align: middle;
    word-break: break-word;
  }

  .talkee-comment-icon-hash {
    vertical-align: middle;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    margin-left: 0.4rem;
    color: rgb(var(--v-theme-greyscale_7));
    background: rgb(var(--v-theme-greyscale_4));

    &:hover {
      background: rgb(var(--v-theme-info));
    }
  }
}
</style>
