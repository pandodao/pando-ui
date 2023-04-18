<template>
  <FModal
    v-model="dialog"
    desktop="menu"
    location="top"
    persistent
    :close-on-content-click="false"
  >
    <template #activator="{ props: modalProps }">
      <FButton
        v-bind="modalProps"
        icon
        size="54"
        class="talkee-chat-launcher"
      >
        <VIcon color="greyscale_7" size="24">
          <IconChat />
        </VIcon>
      </FButton>
    </template>

    <MessagePanel />
  </FModal>
</template>

<script lang="ts">
export default {
  name: "Launcher",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import { FModal, FButton } from "@foxone/uikit/components";
import MessagePanel from "./MessagePanel.vue";
import { IconChat } from "../icons";

const dialog = ref(false);
</script>

<style lang="scss" scoped>
.talkee-chat-launcher {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: rgb(var(--v-theme-greyscale_1));
}
</style>
