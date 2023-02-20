<template>
  <span class="name">
    {{ displayName }}
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  name: "Username",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  name: { type: String, default: "" },
});

const displayName = computed(() => {
  return props.name.length >= 16
    ? props.name.slice(0, 5) + "..." + props.name.slice(-4)
    : props.name;
});
</script>

<style lang="scss" scoped></style>
