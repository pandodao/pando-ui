<template>
  <div class="talkee-avatar-wrapper">
    <VAvatar v-if="url" :size="size">
      <VImg :src="url" />
    </VAvatar>

    <VIcon v-else :size="size" :color="color">
      <IconFace />
    </VIcon>
  </div>
</template>

<script lang="ts">
export default {
  name: "Avatar",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { VImg, VAvatar, VIcon } from "vuetify/components";
import { IconFace } from "./icons";
import { colorize } from "../utils/helper";

const props = defineProps({
  url: { type: String, default: "" },
  size: { type: [String, Number], default: 40 },
  userId: { type: Number, default: 0 },
});

const color = computed(() => {
  return colorize(props.userId);
});
</script>

<style lang="scss" scoped></style>
