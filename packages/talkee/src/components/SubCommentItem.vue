<template>
  <div class="subcomment-item">
    <span class="name">{{ comment?.creator.full_name }}:</span>

    <span class="content">{{ comment?.content }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SubCommentItem",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { TextParser } from "@foxone/utils/text-parser";

const props = defineProps({
  comment: { type: Object },
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
.subcomment-item {
  font-size: 12px;
  word-break: break-all;

  .name {
    font-weight: 500;
    margin-right: 4px;
    color: rgb(var(--v-theme-greyscale_3));
  }
}
</style>
