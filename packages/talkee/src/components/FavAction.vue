<template>
  <FButton
    icon
    size="x-small"
    class="fav-action"
    :loading="loading"
    :class="{ 'fav-action--active': isFavor }"
  >
    <VIcon size="16" @click="handleToggleFav">
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
}

.fav-action--active {
  color: rgb(var(--v-theme-greyscale_1));
}

.action-text {
  margin-left: 2px;
}
</style>
