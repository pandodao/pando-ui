<template>
  <span class="talkee-username">
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

<style lang="scss" scoped>
.talkee-username {
  font-size: 14px;
  font-weight: 500;
  flex: 1;
  margin-right: 4px;
  color: rgb(var(--v-theme-greyscale_3));
}
</style>
