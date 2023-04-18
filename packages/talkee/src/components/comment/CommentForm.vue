<template>
  <VForm class="talkee-comment-form" @submit="handleSubmit">
    <ProfileModal :user="profile" :profile="profile">
      <template #activator="{ props: { onClick } }">
        <Avatar
          :url="profile?.avatar_url"
          class="talkee-user-avatar"
          :user-id="profile?.id"
          @click="onClick"
        />
      </template>
    </ProfileModal>

    <div class="talkee-form-right">
      <VTextarea
        v-model="content"
        persistent-counter
        auto-grow
        variant="outlined"
        rows="4"
        counter="512"
        :placeholder="t('$vuetify.talkee.comment_placeholder')"
      />

      <div class="talkee-submit-action">
        <FButton
          :disabled="!valid"
          :loading="loading"
          color="primary"
          @click="handleSubmit"
        >
          {{ t("$vuetify.talkee.submit") }}
        </FButton>

        <SiteLink />
      </div>
    </div>
  </VForm>
</template>

<script lang="ts">
export default {
  name: "CommentForm",
};
</script>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { VForm, VTextarea } from "vuetify/components";
import { useLocale } from "vuetify";
import { FButton } from "@foxone/uikit/components";
import { useToast } from "@foxone/uikit/plugins/toast";
import { postComment } from "../../services";
import { useGlobals } from "../../composables";
import Avatar from "./Avatar.vue";
import ProfileModal from "./ProfileModal.vue";
import SiteLink from "./SiteLink.vue";

const props = defineProps({
  profile: { type: Object },
});

const toast = useToast();
const content = ref("");
const loading = ref(false);
const valid = computed(
  () => content.value.length <= 512 && content.value.length > 0
);
const globals = useGlobals();
const { t } = useLocale();

async function handleSubmit() {
  loading.value = true;

  try {
    const resp = await postComment(content.value.trim());

    globals.topComments.value.unshift({
      ...resp,
      creator: props.profile,
    });
    globals.total.value++;
    content.value = "";
  } catch (error: any) {
    toast.error({ message: error?.message ?? "Submit Comment Error" });
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.talkee-comment-form {
  display: flex;

  .talkee-form-right {
    flex: 1;
  }

  .talkee-user-avatar {
    margin-right: 16px;
  }
}

.talkee-submit-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
