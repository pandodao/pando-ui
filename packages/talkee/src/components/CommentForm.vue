<template>
  <VForm class="comment-form">
    <VAvatar class="avatar">
      <VImg :src="profile?.avatar_url" />
    </VAvatar>

    <div class="form-right">
      <VTextarea
        persistent-counter
        auto-grow
        variant="outlined"
        rows="4"
        counter="512"
        placeholder="Leave your comment"
      />

      <div class="submit-action">
        <FButton color="primary">Submit</FButton>
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
import { VForm, VTextarea } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";

defineProps({
  profile: { type: Object },
});
</script>

<style lang="scss" scoped>
.comment-form {
  display: flex;

  .form-right {
    flex: 1;
  }

  .avatar {
    margin-right: 16px;
  }
}
</style>
