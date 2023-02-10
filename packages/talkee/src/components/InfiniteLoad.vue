<template>
  <InfiniteLoading>
    <template #spinner>
      <FLoading size="18" />
    </template>
    <template #complete>
      <div class="no-more-text">
        {{ t("$vuetify.talkee.no_more_comments") }}
      </div>
    </template>
  </InfiniteLoading>
</template>

<script lang="ts">
export default {
  name: "InfiniteLoad",
};
</script>

<script lang="ts" setup>
import { useLocale } from "vuetify";
import InfiniteLoading from "v3-infinite-loading";
import { FLoading } from "@foxone/uikit/components";

const { t } = useLocale();
</script>

<style lang="scss" scoped>
.no-more-text {
  text-align: center;
  color: rgb(var(--v-theme-greyscale_4));
  font-size: 12px;
}
</style>
