<template>
  <div class="reply-form">
    <FInput
      v-model="content"
      hide-details
      variant="outlined"
      :placeholder="t('$vuetify.talkee.comment_placeholder')"
      @keyup.enter="handleReply"
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
  </div>
</template>

<script lang="ts">
export default {
  name: "ReplyForm",
};
</script>

<script lang="ts" setup>
import { ref, defineProps, computed } from "vue";
import { useLocale } from "vuetify";
import { VIcon } from "vuetify/components";
import { FButton, FInput } from "@foxone/uikit/components";
import { useToast } from "@foxone/uikit/plugins/toast";
import { IconSend } from "./icons";
import { postSubComment, getComment } from "../services";

const props = defineProps({
  comment: { type: Object },
  profile: { type: Object },
});

const emits = defineEmits({
  replied: () => true,
  refresh: (v: any) => true,
});

const { t } = useLocale();
const content = ref("");
const toast = useToast();
const loading = ref(false);

const valid = computed(
  () => content.value.length <= 512 && content.value.length > 0
);

async function handleReply() {
  loading.value = true;

  try {
    await postSubComment(props.comment?.id, content.value.trim());

    content.value = "";

    const comment = await getComment(props.comment?.id ?? "");

    emits("refresh", comment);
    emits("replied");
  } catch (error: any) {
    toast.error({ message: error?.message ?? "Submit Reply Error" });
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.reply-form {
  margin-top: 16px;
}
</style>
