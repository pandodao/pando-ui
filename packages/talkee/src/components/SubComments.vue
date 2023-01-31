<template>
  <div v-if="comments.length" class="subcomments">
    <SubCommentItem
      v-for="(item, index) in comments"
      :key="index"
      :comment="item"
    />

    <load-more :loading="loading" :has-next="hasNext" />
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
  id: { type: String, default: "" },
});

const globals = useGlobals();

const comments = ref<any[]>([]);
const page = ref(1);
const hasNext = ref(true);
const loading = ref(false);

onMounted(() => {
  loadSubComments();
});

watch(() => [globals.sort], loadSubComments);

async function loadSubComments() {
  loading.value = true;

  try {
    const resp = await getSubComments(
      props.id,
      globals.sort.value,
      page.value,
      15
    );

    hasNext.value = resp.replies.length >= resp.ipp;
    comments.value = [...comments.value, ...resp.replies];
  } catch (error) {
    console.error("Get Sub Comments Error", error);
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.subcomments {
  background: rgb(var(--v-theme-greyscale_6));
  padding: 8px;
  border-radius: 8px;
  margin-top: 16px;
}
</style>
