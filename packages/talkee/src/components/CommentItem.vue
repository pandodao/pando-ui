<template>
  <div class="comment-item">
    <VAvatar size="24" class="avatar">
      <VImg :src="comment?.creator?.avatar_url" />
    </VAvatar>

    <div class="comment-details">
      <div class="name">
        {{ comment?.creator?.full_name }}
      </div>

      <div class="comment-content" v-html="content" />

      <div class="info">
        <div class="time">{{ formatTime(comment?.created_at) }}</div>
        <span>reply</span>

        <VSpacer />

        <MessageAction :comment="comment" />

        <FavAction :comment="comment" @refresh="handleRefresh" />
      </div>

      <sub-comments v-if="comment?.reply_count > 0" :id="comment?.id" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentItem",
};
</script>

<script lang="ts" setup>
import { defineEmits, defineProps, computed } from "vue";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { formatTime, urlify } from "../utils/helper";
import { VAvatar, VImg, VSpacer } from "vuetify/components";
import SubComments from "./SubComments.vue";
import FavAction from "./FavAction.vue";
import MessageAction from "./MessageAction.vue";
import { getComment } from "../services";

const props = defineProps({
  comment: { type: Object },
});

const emits = defineEmits({
  update: (v: any) => true,
});

const content = computed(() => {
  const md = marked(DOMPurify.sanitize(props.comment?.content ?? ""));

  return urlify(md.substring(0, md.length - 2));
});

async function handleRefresh() {
  const comment = await getComment(props.comment?.id);

  emits("update", comment);
}
</script>

<style lang="scss" scoped>
.comment-item {
  margin: 16px 0;
  display: flex;

  .avatar {
    margin-right: 8px;
  }

  .name {
    font-size: 14px;
    font-weight: 500;
    color: rgb(var(--v-theme-greyscale_3));
  }

  .comment-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .comment-content {
    margin-top: 8px;
  }

  .info {
    margin-top: 8px;
    display: flex;
    gap: 8px;
    color: rgb(var(--v-theme-greyscale_3));
    align-items: center;
    font-size: 12px;
  }
}
</style>

<style lang="scss">
.talkee .comment-content {
  font-size: 14px;
  margin-top: 8px;

  p {
    margin: 0;
  }
}
</style>
