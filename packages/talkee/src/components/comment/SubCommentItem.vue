<template>
  <div class="talkee-subcomment-item">
    <Username :name="comment?.creator.full_name">
      <span>:</span>
    </Username>

    <span class="talkee-subcomment-content">{{ comment?.content }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SubCommentItem",
};
</script>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { TextParser } from "@foxone/utils/text-parser";
import Username from "../common/Username.vue";

import type { Comment } from "../../types";

const props = defineProps({
  comment: { type: Object as PropType<Comment> },
});

const content = computed(() => {
  let text = content;
  try {
    text = new TextParser().parse(props.comment?.content ?? "");
  } catch (error) {
    // ignore
  }

  return text;
});
</script>

<style lang="scss" scoped>
.talkee-subcomment-item {
  font-size: 12px;
  word-break: break-all;
  line-height: 2;
}
</style>
