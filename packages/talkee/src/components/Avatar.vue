<template>
  <VAvatar v-if="url" :size="size">
    <VImg :src="url" />
  </VAvatar>
  <VIcon v-else :size="size" :color="color">
    <IconFace />
  </VIcon>
</template>

<script lang="ts">
export default {
  name: "Avatar",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { VImg, VAvatar } from "vuetify/components";
import { IconFace } from "./icons";

const props = defineProps({
  url: { type: String, default: "" },
  size: { type: [String, Number], default: 40 },
});

const color = computed(() => {
  if (props.url) return "";

  const colors = [
    "#3683FB", // light blue
    "#5252FF", // blue
    "#FFA500", // orange
    "#009A50", // green
    "#38A3A5", // light blue
    "#22577A", // dark blue
    "#812DD3", // purple
    "#FF7455", // red
    "#1B1B1B", // black
    "#2F5D62", // dark teal
    "#222831", // dark gray
    "#FA7D35", // light orange
    "#D63D3D", // red
    "#F23CA9", // pink
  ];

  return colors[Math.floor(Math.random() * colors.length)];
});
</script>

<style lang="scss" scoped></style>
