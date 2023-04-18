<template>
  <div class="talkee-sort-methods">
    <VIcon size="12" class="talkee-icon-sort">
      <IconFilter />
    </VIcon>
    <VSelect
      class="talkee-sort-methods-select"
      :model-value="current"
      variant="plain"
      :items="selectItems"
      @update:model-value="(v) => current = v"
      hide-details
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "SortMethods",
};
</script>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { IconFilter } from "../icons";
import { VIcon, VSelect } from "vuetify/components";
import { useLocale } from "vuetify";
import { useGlobals } from "../../composables";
import { SortMethod } from "../../types";

const { t } = useLocale();

const globals = useGlobals();
const current = ref(SortMethod.FavorCount);

const selectItems = computed(() => [
  {
    title: t("$vuetify.talkee.sort_score"),
    value: SortMethod.FavorCount,
  },
  {
    title: t("$vuetify.talkee.sort_newest"),
    value: SortMethod.CreateAt,
  },
  {
    title: t("$vuetify.talkee.sort_oldest"),
    value: SortMethod.CreateAsc,
  },
]);

watch(
  () => current.value,
  () => {
    globals.sort.value = current.value;
  }
);
</script>

<style lang="scss" scoped>
.talkee-sort-methods {
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
}

.talkee-sort-methods-select {
  &:deep(.v-field__append-inner) {
    display: none;
  }
  &:deep(.v-field__field) {
    padding: 0;
    .v-field__input {
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 500;
      color: rgb(var(--v-theme-greyscale_1));
    }
  }
}
</style>
