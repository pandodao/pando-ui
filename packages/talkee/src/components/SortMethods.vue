<template>
  <div class="sort-methods">
    <VIcon size="16" class="icon-sort">
      <IconFilter />
    </VIcon>

    <span
      v-for="(item, index) in sortItems"
      :key="index"
      :class="[
        'sort-method',
        { 'sort-method--active': item.value === globals.sort.value },
      ]"
      @click="handleSortChange(item)"
    >
      {{ item.text }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SortMethods",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { IconFilter } from "./icons";
import { VIcon } from "vuetify/components";
import { useLocale } from "vuetify";
import { useGlobals } from "../composables";
import { SortMethod } from "../types";

const { t } = useLocale();

const globals = useGlobals();

const sortItems = computed(() => [
  {
    text: t("$vuetify.talkee.sort_score"),
    value: SortMethod.FavorCount,
  },
  {
    text: t("$vuetify.talkee.sort_newest"),
    value: SortMethod.CreateAt,
  },
  {
    text: t("$vuetify.talkee.sort_oldest"),
    value: SortMethod.CreateAsc,
  },
]);

function handleSortChange(item) {
  globals.sort.value = item.value;
}
</script>

<style lang="scss" scoped>
.sort-methods {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;

  .sort-method {
    cursor: pointer;
    font-weight: 500;

    &:not(.sort-method--active) {
      font-weight: 400;
      color: rgb(var(--v-theme-greyscale_3));
    }
  }
}
</style>
