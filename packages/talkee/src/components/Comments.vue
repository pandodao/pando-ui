<template>
  <div class="comments">
    <CommentItem
      v-for="(item, index) in comments"
      :key="index"
      :comment="item"
      @update="handleUpdate"
    />

    <load-more :loading="globals.loading" :has-next="hasNext" />

    <div v-if="error" class="comment-error">Something Error Happend</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Comments",
};
</script>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import CommentItem from "./CommentItem.vue";
import LoadMore from "./LoadMore.vue";
import { useGlobals } from "../composables";
import { getComments } from "../services";

const globals = useGlobals();
const page = ref(1);
const hasNext = ref(false);
const comments = ref<any[]>([]);
const error = ref(false);

watch(() => [globals.sort.value], loadComments);

onMounted(() => {
  loadComments();
});

async function loadComments() {
  globals.loading = true;

  try {
    const resp = await getComments(globals.sort.value, page.value);

    globals.total.value = resp.total;
    comments.value = resp.comments;
    hasNext.value = resp.ipp <= resp.comments?.length;
  } catch (e) {
    error.value = true;

    console.error("Get Comments Error", e);
  }

  globals.loading = false;
}

async function handleUpdate(comment) {
  const index = comments.value.findIndex((x) => x.id === comment.id);

  if (index > -1) {
    comments.value.splice(index, 1, comment);
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
