<template>
  <div class="comment-content">
    <span class="content" v-html="content" />
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

const props = defineProps({
  content: { type: String, default: "" },
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
</script>

<style lang="scss" scoped>
.comment-content {
  font-size: 14px;
  margin-top: 8px;
  display: inline-block;
  line-height: 1.6;

  .content {
    vertical-align: middle;
  }
}
</style>
