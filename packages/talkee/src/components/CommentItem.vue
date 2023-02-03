<template>
  <div class="comment-item">
    <VAvatar size="24" class="avatar">
      <VImg :src="comment?.creator?.avatar_url" />
    </VAvatar>

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

        <VSpacer />

        <MessageAction :comment="comment" @toggle="handleToggleReply" />

        <FavAction :comment="comment" @refresh="handleRefresh" />
      </div>

      <ReplyForm
        v-if="globals.logged.value && showReply"
        :comment="comment"
        :profile="profile"
        @replied="handleToggleReply"
      />

      <SubComments v-if="comment?.reply_count > 0" :id="comment?.id" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommentItem",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { formatTime } from "../utils/helper";
import { VAvatar, VImg, VSpacer } from "vuetify/components";
import { useLocale } from "vuetify";
import { FButton } from "@foxone/uikit/components";
import { getComment } from "../services";
import { useGlobals } from "../composables";
import SubComments from "./SubComments.vue";
import FavAction from "./FavAction.vue";
import MessageAction from "./MessageAction.vue";
import ReplyForm from "./ReplyForm.vue";
import CommentContent from "./CommentContent.vue";

const props = defineProps({
  comment: { type: Object },
  profile: { type: Object },
});

const emits = defineEmits({
  update: (v: any) => true,
  login: () => true,
});

const globals = useGlobals();
const showReply = ref(false);
const { t } = useLocale();

async function handleRefresh() {
  const comment = await getComment(props.comment?.id);

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
