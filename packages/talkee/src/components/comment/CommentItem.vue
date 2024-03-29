<template>
  <div class="talkee-comment-item">
    <ProfileModal
      :user="comment?.creator"
      :profile="profile"
      @login="$emit('login')"
    >
      <template #activator="{ props: { onClick } }">
        <Avatar
          :url="comment?.creator?.avatar_url"
          size="24"
          :user-id="comment?.creator?.id"
          class="talkee-avatar"
          @click="onClick"
        />
      </template>
    </ProfileModal>

    <div class="talkee-comment-details">
      <div class="talkee-comment-top">
        <Username :name="comment?.creator?.full_name" />
        <RewardDetails
          :id="comment?.id!"
          :rewards="comment?.rewards"
          @login="$emit('login')"
        />
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

      <div class="talkee-comment-info">
        <div class="talkee-comment-actions">
          <MessageAction :comment="comment" @toggle="handleToggleReply" />
          <FavAction
            :comment="comment"
            @login="$emit('login')"
            @refresh="handleRefresh"
          />
          <ShareAction :comment="comment" />
        </div>
        <div class="talkee-comment-time">
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
import { formatTime } from "../../utils/helper";
import { useGlobals } from "../../composables";
import SubComments from "./SubComments.vue";
import FavAction from "./FavAction.vue";
import ShareAction from "./ShareAction.vue";
import MessageAction from "./MessageAction.vue";
import ReplyForm from "./ReplyForm.vue";
import CommentContent from "./CommentContent.vue";
import RewardDetails from "./RewardDetails.vue";
import Avatar from "../common/Avatar.vue";
import Username from "../common/Username.vue";
import ProfileModal from "./ProfileModal.vue";

import type { Comment } from "../../types";

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
.talkee-comment-item {
  margin: 16px 0;
  display: flex;

  .talkee-comment-top {
    display: flex;
    align-items: center;
  }

  .talkee-avatar {
    margin-right: 8px;
    cursor: pointer;
  }

  .talkee-comment-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .talkee-comment-info {
    display: flex;
    align-items: center;
    color: rgb(var(--v-theme-greyscale_3));
    font-size: 12px;
    line-height: 1;
    margin-top: 8px;
  }

  .talkee-comment-actions {
    flex-grow: 1;
  }

  .talkee-comment-time {
    line-height: 1;
    font-size: 12px;
    color: rgb(var(--v-theme-greyscale_3));
  }
}
</style>
