<template>
  <div class="talkee-comments">
    <CommentItem
      v-for="(item, index) in commentsList"
      :key="index"
      :comment="item"
      :profile="profile"
      @update="handleUpdate"
      @login="$emit('login')"
    />

    <InfiniteLoad @infinite="(state) => loadComments(false, state)" />

    <div v-if="error" class="talkee-comment-error">
      {{ t("$vuetify.talkee.error_hint") }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Comments",
};
</script>

<script lang="ts" setup>
import { ref, watch, computed, PropType } from "vue";
import { useLocale } from "vuetify";
import CommentItem from "./CommentItem.vue";
import InfiniteLoad from "./InfiniteLoad.vue";
import { useGlobals } from "../composables";
import { getComments } from "../services";

import type { User } from "../types";

defineProps({
  profile: { type: Object as PropType<User> },
});

defineEmits({
  login: () => true,
});

const { t } = useLocale();
const globals = useGlobals();
const hasNext = ref(false);
const error = ref(false);
const comments = ref<any[]>([]);

watch(
  () => [globals.sort.value],
  () => loadComments(true)
);

const commentsList = computed(() => [
  ...globals.topComments.value,
  ...comments.value,
]);

async function loadComments(reload = false, state: any = null) {
  if (globals.loading.value) return;

  if (reload) {
    comments.value = [];
    globals.topComments.value = [];
    hasNext.value = true;
  }

  globals.loading.value = true;

  try {
    const resp = await getComments({
      order_by: globals.sort.value,
      limit: globals.limit,
      offset: comments.value.length,
    });

    hasNext.value = resp.comments.length >= globals.limit;
    globals.total.value = resp.total;

    state?.loaded();

    if (!hasNext.value) {
      state?.complete();
    }

    comments.value = [
      ...comments.value,
      ...resp.comments.filter(
        (x) => !globals.topComments.value.find((y) => y.id === x.id)
      ),
    ];
  } catch (e) {
    error.value = true;
    state?.error();
  }

  globals.loading.value = false;
}

async function handleUpdate(comment) {
  const index1 = comments.value.findIndex((x) => x.id === comment.id);

  if (index1 > -1) {
    comments.value.splice(index1, 1, comment);
  }

  const index2 = globals.topComments.value.findIndex(
    (x) => x.id === comment.id
  );

  if (index2 > -1) {
    globals.topComments.value.splice(index2, 1, comment);
  }
}
</script>

<style lang="scss" scoped>
.talkee-comments {
  padding: 16px 0;

  .talkee-comment-error {
    color: rgb(var(--v-theme-error));
    font-size: 14px;
    text-align: center;
    padding: 16px;
  }
}
</style>
