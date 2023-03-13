<template>
  <div v-if="comments.length" class="talkee-subcomments">
    <SubCommentItem
      v-for="(item, index) in comments"
      :key="index"
      :comment="item"
    />

    <LoadMore :loading="loading" :has-next="hasNext" @more="loadSubComments" />
  </div>
</template>

<script lang="ts">
export default {
  name: "SubComments",
};
</script>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { getSubComments } from "../services";
import { useGlobals } from "../composables";
import SubCommentItem from "./SubCommentItem.vue";
import LoadMore from "./LoadMore.vue";

const props = defineProps({
  id: { type: [String, Number], default: "" },
});

const globals = useGlobals();

const comments = ref<any[]>([]);
const hasNext = ref(true);
const loading = ref(false);

onMounted(() => {
  loadSubComments(true);
});

watch(
  () => [globals.sort],
  () => loadSubComments(true)
);

async function loadSubComments(reload = false) {
  if (loading.value) return;

  loading.value = true;

  try {
    const resp = await getSubComments({
      limit: globals.limit,
      comment_id: "" + props.id,
      offset: reload ? 0 : comments.value.length,
    });

    hasNext.value = resp.replies.length >= globals.limit;
    comments.value = reload
      ? resp.replies
      : [...comments.value, ...resp.replies];
  } catch (error) {
    console.error("Get Sub Comments Error", error);
  }

  loading.value = false;
}

defineExpose({ loadSubComments });
</script>

<style lang="scss" scoped>
.talkee-subcomments {
  background: rgb(var(--v-theme-greyscale_6));
  padding: 8px;
  border-radius: 8px;
  margin-top: 16px;
}
</style>
