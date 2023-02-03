<template>
  <div class="comments">
    <CommentItem
      v-for="(item, index) in commentsList"
      :key="index"
      :comment="item"
      :profile="profile"
      @update="handleUpdate"
      @login="$emit('login')"
    />

    <LoadMore
      :loading="globals.loading.value"
      :has-next="hasNext"
      @more="loadComments"
    />

    <div v-if="error" class="comment-error">
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
import { ref, watch, onMounted, computed } from "vue";
import { useLocale } from "vuetify";
import CommentItem from "./CommentItem.vue";
import LoadMore from "./LoadMore.vue";
import { useGlobals } from "../composables";
import { getComments } from "../services";

defineProps({
  profile: { type: Object },
});

defineEmits({
  login: () => true,
});

const { t } = useLocale();
const globals = useGlobals();
const page = ref(1);
const hasNext = ref(false);
const error = ref(false);
const comments = ref<any[]>([]);

watch(
  () => [globals.sort.value],
  () => loadComments(true)
);

onMounted(() => {
  loadComments(true);
});

const commentsList = computed(() => [
  ...globals.topComments.value,
  ...comments.value,
]);

async function loadComments(reload = false) {
  if (globals.loading.value) return;

  if (reload) {
    comments.value = [];
    globals.topComments.value = [];
    page.value = 1;
    hasNext.value = true;
  }

  globals.loading.value = true;

  try {
    const resp = await getComments(globals.sort.value, page.value);

    globals.total.value = resp.total;
    hasNext.value = resp.ipp <= resp.comments?.length;
    page.value = resp.page + 1;

    comments.value = [
      ...comments.value,
      ...resp.comments.filter(
        (x) => !globals.topComments.value.find((y) => y.id === x.id)
      ),
    ];
  } catch (e) {
    error.value = true;
    console.error("Get Comments Error", e);
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
.comments {
  padding: 16px 0;

  .comment-error {
    color: rgb(var(--v-theme-error));
    font-size: 14px;
    text-align: center;
    padding: 16px;
  }
}
</style>
