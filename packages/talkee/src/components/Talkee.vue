<template>
  <div class="talkee">
    <div class="topbar">
      <CommentCount />
      <SortMethods />
    </div>

    <CommentForm v-if="globals.logged.value" :profile="profile" />
    <LoginAction v-else />

    <Comments :profile="profile" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Talkee",
};
</script>

<script lang="ts" setup>
import { watch, ref, defineProps, onBeforeMount } from "vue";
import SortMethods from "./SortMethods.vue";
import CommentCount from "./CommentCount.vue";
import CommentForm from "./CommentForm.vue";
import Comments from "./Comments.vue";
import LoginAction from "./LoginAction.vue";
import { useGlobals } from "../composables";
import { getMe } from "../services";

const props = defineProps({
  siteId: { type: String, default: "" },
  slug: { type: String, default: "" },
  apiBase: { type: String, default: "" },
  clientId: { type: String, default: "" },
});

const globals = useGlobals();

const profile = ref<any>(null);

onBeforeMount(() => {
  globals.siteId.value = props.siteId || "";
  globals.slug.value = props.slug || "";
  globals.apiBase.value = props.apiBase || "";
  globals.clientId.value = props.clientId || "";
});

watch(
  () => [globals.token.value],
  async () => {
    if (globals.logged.value) {
      profile.value = await getMe();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.talkee {
  padding: 16px;

  .topbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
}
</style>
