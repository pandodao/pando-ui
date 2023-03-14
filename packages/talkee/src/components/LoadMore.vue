<template>
  <div class="talkee-load-more-wrapper">
    <FButton
      v-if="hasNext"
      size="x-small"
      variant="text"
      class="talkee-load-more"
      :loading="loading"
      @click="emits('more')"
    >
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
import { FButton } from "@foxone/uikit/components";

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
.talkee-load-more-wrapper {
  text-align: center;
}

.talkee-load-more {
  font-size: 12px;
  color: rgb(var(--v-theme-info));

  :deep(.v-progress-circular) {
    width: 16px !important;
    height: 16px !important;
  }
}
</style>
