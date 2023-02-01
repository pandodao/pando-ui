<template>
  <VForm class="reply-form">
    <FInput
      v-model="content"
      hide-details
      variant="outlined"
      placeholder="Leave your comment"
    >
      <template #append-inner>
        <FButton
          icon
          size="24"
          :loading="loading"
          :disabled="!valid"
          @click="handleReply"
        >
          <VIcon :size="24">
            <IconSend />
          </VIcon>
        </FButton>
      </template>
    </FInput>
  </VForm>
</template>

<script lang="ts">
export default {
  name: "ReplyForm",
};
</script>

<script lang="ts" setup>
import { ref, defineProps, computed } from "vue";
import { VForm, VIcon } from "vuetify/components";
import { FButton, FInput } from "@foxone/uikit/components";
import { IconSend } from "./icons";
import { postSubComment } from "../services";
import { useGlobals } from "../composables";

const props = defineProps({
  comment: { type: Object },
  profile: { type: Object },
});

const emits = defineEmits({
  replied: () => true,
});

const content = ref("");
const loading = ref(false);
const globals = useGlobals();

const valid = computed(
  () => content.value.length <= 512 && content.value.length > 0
);

async function handleReply() {
  loading.value = true;

  try {
    const resp = await postSubComment(props.comment?.id, content.value.trim());

    globals.topSubComments.value.unshift({
      ...resp,
      creator: props.profile,
    });

    content.value = "";

    emits("replied");
  } catch (error: any) {
    if (error?.message) {
      alert(error.message);
    }

    console.log("Handle Reply Error", error);
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.reply-form {
  margin-top: 16px;
}
</style>
