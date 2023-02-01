<template>
  <FLoading v-if="loading" size="18" class="comments-loading" />
  <div v-else-if="hasNext" class="load-more">
    <FButton size="xs" variant="text" @click="emits('more')">
      Load More
    </FButton>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoadMore",
};
</script>

<script lang="ts" setup>
import { defineEmits } from "vue";
import { FLoading, FButton } from "@foxone/uikit/components";

defineProps({
  hasNext: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});

const emits = defineEmits({
  more: () => true,
});
</script>

<style lang="scss" scoped>
.load-more {
  font-size: 12px;
  color: rgb(var(--v-theme-info));
  text-align: center;
}
</style>
