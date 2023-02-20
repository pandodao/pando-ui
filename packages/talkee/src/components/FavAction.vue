<template>
  <FButton
    variant="plain"
    size="x-small"
    color="greyscale_3"
    class="fav-action"
    :loading="loading"
    :class="{ 'fav-action--active': isFavor }"
    @click="handleToggleFav"
  >
    <VIcon size="16">
      <IconHeart />
    </VIcon>
    <span class="action-text">{{ comment?.favor_count }}</span>
  </FButton>
</template>

<script lang="ts">
export default {
  name: "FavAction",
};
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, computed } from "vue";
import { useGlobals } from "../composables";
import { putFavor, putUnfavor, getComment } from "../services";
import { IconHeart } from "./icons";
import { VIcon } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";

const props = defineProps({
  comment: { type: Object },
});

const emits = defineEmits({
  refresh: (v: any) => true,
  login: () => true,
});

const globals = useGlobals();

const loading = ref(false);

const isFavor = computed(() => !!props.comment?.fav_id);

async function handleToggleFav() {
  if (loading.value) return;

  loading.value = true;

  try {
    if (globals.logged.value) {
      if (!isFavor.value) {
        await putFavor(props.comment?.id);
      } else {
        await putUnfavor(props.comment?.id);
      }

      const comment = await getComment(props.comment?.id ?? "");
      emits("refresh", comment);
    } else {
      emits("login");
    }
  } catch (error) {
    console.error("Toggle Fav Error", error);
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.fav-action {
  margin-right: 4px;
  line-height: 1;
  font-size: 12px;

  :deep(.v-progress-circular) {
    width: 16px !important;
    height: 16px !important;
  }
}

.v-btn--variant-plain {
  opacity: 1;
}

.fav-action--active {
  color: rgb(var(--v-theme-greyscale_1)) !important;
}

.action-text {
  margin-left: 2px;
}
</style>
