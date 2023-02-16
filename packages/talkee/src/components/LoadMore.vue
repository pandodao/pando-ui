<template>
  <FLoading v-if="loading" size="18" class="comments-loading" />
  <div v-else-if="hasNext" class="load-more">
    <FButton size="x-small" variant="text" @click="emits('more')">
      {{ t("$vuetify.talkee.load_more") }}
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
import { useLocale } from "vuetify";
import { FLoading, FButton } from "@foxone/uikit/components";

const { t } = useLocale();

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
  text-align: center !important;
}
</style>
