<template>
  <div class="comment-item">
    <Avatar :url="comment?.creator?.avatar_url" size="24" class="avatar" />

    <div class="comment-details">
      <div class="name">
        {{ comment?.creator?.full_name }}
      </div>

      <CommentContent
        :content="comment?.content"
        :show-link="globals.showLink.value"
        :href="comment?.arweave_tx_hash"
      />

      <div class="info">
        <div class="time">{{ formatTime(comment?.created_at) }}</div>

        <FButton size="xs" variant="text" @click="handleToggleReply">
          {{ t("$vuetify.talkee.reply") }}
        </FButton>

        <div class="spacer" />

        <MessageAction :comment="comment" @toggle="handleToggleReply" />

        <FavAction :comment="comment" @refresh="handleRefresh" />
      </div>

      <ReplyForm
        v-if="globals.logged.value && showReply"
        :comment="comment"
        :profile="profile"
        @refresh="handleRefresh"
        @replied="handleToggleReply"
      />

      <SubComments v-if="(comment?.reply_count ?? 0) > 0" :id="comment?.id" />
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
import { useLocale } from "vuetify";
import { FButton } from "@foxone/uikit/components";
import { useGlobals } from "../composables";
import SubComments from "./SubComments.vue";
import FavAction from "./FavAction.vue";
import MessageAction from "./MessageAction.vue";
import ReplyForm from "./ReplyForm.vue";
import CommentContent from "./CommentContent.vue";
import Avatar from "./Avatar.vue";

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
const { t } = useLocale();

async function handleRefresh(comment: Comment) {
  emits("update", comment);
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

  .spacer {
    flex-grow: 1;
  }

  .info {
    margin-top: 8px;
    display: flex;
    gap: 8px;
    color: rgb(var(--v-theme-greyscale_3));
    align-items: center;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
