<template>
  <div class="talkee-msg-panel">
    <div class="talkee-msg-panel-header">
      {{ t("$vuetify.talkee.chat_room") }}
    </div>

    <div
      ref="chatBox"
      :class="[
        'talkee-scroll-chat',
        { 'talkee-scroll-chat-mobile': smAndDown },
      ]"
    >
      <div
        v-for="(item, index) in msgHistory"
        :key="index"
        :class="[
          'talkee-scroll-chat-bubble',
          { 'talkee-scroll-chat-bubble-active': isMe(item.user.mixin_user_id) },
        ]"
      >
        <p class="talkee-scroll-chat-bubble-name">
          {{ displayName(item.user) }}
        </p>
        <p class="talkee-scroll-chat-bubble-text">
          {{ Base64.decode(item.data) }}
        </p>
        <p class="talkee-scroll-chat-bubble-time">
          {{ formatTime(item.created_at) }}
        </p>
      </div>
    </div>

    <div class="talkee-msg-field">
      <FInput
        v-model="msg"
        :placeholder="t('$vuetify.talkee.start_chat')"
        :disbaled="sending"
      >
        <template #append>
          <VProgressCircular v-if="sending" indeterminate size="24" width="2" />
          <VIcon v-else @click="handleSend">
            <IconSend />
          </VIcon>
        </template>
      </FInput>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MessagePanel",
};
</script>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useLocale, useDisplay } from "vuetify";
import { VProgressCircular } from "vuetify/components";
import { Base64 } from "@foxone/utils";
import { v4 as uuid } from "uuid";
import { FInput } from "@foxone/uikit/components";
import { IconSend } from "../icons";
import { useGlobals } from "../../composables";
import { sendMessage, getLatestMessages } from "../../services";
import { Message, User } from "../../types";
import { format as formatTime } from "@foxone/utils/time";

const globals = useGlobals();
const { smAndDown } = useDisplay();
const { t } = useLocale();

const msg = ref("");
const msgHistory = ref<Message[]>([]);
const sending = ref(false);
const chatBox = ref();

const scrollUp = () => {
  chatBox.value.scroll({
    top: 1000000,
    behavior: "smooth",
  });
};

const displayName = (val: User) => {
  if (!val.mvm_public_key) {
    return val.full_name;
  } else {
    const str = `${val.full_name.slice(0, 4)}...${val.full_name.slice(-4)}`;
    return str;
  }
};

const isMe = (val: string) => {
  return globals.profile.value.mixin_user_id === val;
};

const handleSend = async () => {
  sending.value = true;
  try {
    const resp = await sendMessage(globals.siteId.value, globals.slug.value, {
      category: "text",
      data: Base64.encode(msg.value),
      message_id: uuid(),
    });

    msg.value = "";
    msgHistory.value.push(resp);
    sending.value = false;
    await nextTick(() => scrollUp());
  } catch (error) {
    console.log("err", error);
  }
  sending.value = false;
};

onMounted(() => {
  const ws = new WebSocket(
    `${globals.wsBase.value}?site_id=${globals.siteId.value}&slug=${globals.slug.value}`
  );

  ws.addEventListener("open", async () => {
    ws.send(JSON.stringify({ type: "auth", token: globals.token.value }));

    const resp = await getLatestMessages(
      globals.siteId.value,
      globals.slug.value
    );

    msgHistory.value = resp;
    await nextTick(() => scrollUp());
  });

  ws.addEventListener("message", (e) => {
    console.log("message", e);
  });
});
</script>

<style lang="scss" scoped>
.talkee-msg-panel {
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}

.talkee-msg-panel-header {
  font-size: 21px;
  font-weight: 500;
}

.talkee-scroll-chat {
  height: 500px;
  width: 360px;
  margin: 16px 0;
  padding: 0 16px;
  border-radius: 8px;
  font-size: 14px;
  overflow-y: scroll;
  background-color: rgb(var(--v-theme-greyscale_6));
}

.talkee-scroll-chat-mobile {
  width: 100%;
}

.talkee-scroll-chat-bubble {
  margin: 16px 0;
  background-color: rgb(var(--v-theme-greyscale_7));
  color: rgb(var(--v-theme-greyscale_2));
  border-radius: 8px;
  padding: 4px 12px;
  border-left: 4px solid rgb(var(--v-theme-greyscale_5));

  &-active {
    border-left: 4px solid rgb(var(--v-theme-greyscale_3));
  }

  &-name {
    font-size: 10px;
    color: rgb(var(--v-theme-greyscale_3));
  }

  &-text {
    font-size: 14px;
    margin: 4px 0;
  }

  &-time {
    font-size: 10px;
    color: rgb(var(--v-theme-greyscale_3));
    text-align: right;
  }
}
</style>
