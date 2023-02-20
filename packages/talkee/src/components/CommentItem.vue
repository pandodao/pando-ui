<template>
  <div class="comment-item">
    <Avatar :url="comment?.creator?.avatar_url" size="24" class="avatar" />

    <div class="comment-details">
      <div class="comment-top">
        <Username :name="comment?.creator?.full_name" />
        <CommentReward :reward="comment?.reward" />
      </div>

      <CommentContent
        :content="comment?.content"
        :show-link="globals.showLink.value"
        :href="comment?.arweave_tx_hash"
      />

      <ReplyForm
        v-if="globals.logged.value && showReply"
        :comment="comment"
        :profile="profile"
        @refresh="handleRefresh"
        @replied="handleReplied"
      />

      <SubComments
        v-if="(comment?.reply_count ?? 0) > 0"
        :id="comment?.id"
        ref="subComments"
      />

      <div class="info">
        <div class="comment-actions">
          <MessageAction :comment="comment" @toggle="handleToggleReply" />
          <FavAction
            :comment="comment"
            @login="$emit('login')"
            @refresh="handleRefresh"
          />
        </div>
        <div class="time">
          {{ formatTime(comment?.created_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentItem",
};
</script>

<script lang="ts" setup>
import { ref, PropType } from "vue";
import { formatTime } from "../utils/helper";
import { useGlobals } from "../composables";
import SubComments from "./SubComments.vue";
import FavAction from "./FavAction.vue";
import MessageAction from "./MessageAction.vue";
import ReplyForm from "./ReplyForm.vue";
import CommentContent from "./CommentContent.vue";
import CommentReward from "./CommentReward.vue";
import Avatar from "./Avatar.vue";
import Username from "./Username.vue";

import type { Comment } from "../types";

defineProps({
  comment: { type: Object as PropType<Comment> },
  profile: { type: Object },
});

const emits = defineEmits({
  update: (v: any) => true,
  login: () => true,
});

const globals = useGlobals();
const showReply = ref(false);
const subComments = ref<InstanceType<typeof SubComments> | null>(null);

async function handleRefresh(comment: Comment) {
  emits("update", comment);
}

function handleReplied() {
  handleToggleReply();
  subComments.value?.loadSubComments(true);
}

function handleToggleReply() {
  if (globals.logged.value) {
    showReply.value = !showReply.value;
  } else {
    emits("login");
  }
}
</script>

<style lang="scss" scoped>
.comment-item {
  margin: 16px 0;
  display: flex;

  .comment-top {
    display: flex;
    align-items: center;
  }

  .avatar {
    margin-right: 8px;
  }

  .name {
    font-size: 14px;
    font-weight: 500;
    flex: 1;
    color: rgb(var(--v-theme-greyscale_3));
  }

  .comment-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .info {
    display: flex;
    align-items: center;
    color: rgb(var(--v-theme-greyscale_3));
    font-size: 12px;
    line-height: 1;
    margin-top: 8px;
  }

  .comment-actions {
    flex-grow: 1;
  }

  .time {
    line-height: 1;
    font-size: 12px;
    color: rgb(var(--v-theme-greyscale_3));
  }
}
</style>
