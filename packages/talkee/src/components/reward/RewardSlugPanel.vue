<template>
  <div class="talkee-reward-panel">
    <RewardModal :type="AirdropType.Slug">
      <template #activator="{ props: { onClick } }">
        <FButton color="primary" @click="onClick">
          {{ t("$vuetify.talkee.reward") }}
        </FButton>
      </template>
    </RewardModal>

    <PayerList />
  </div>
</template>

<script lang="ts">
export default {
  name: "RewardSlugPanel",
};
</script>

<script setup lang="ts">
import { useLocale } from "vuetify";
import RewardModal from "./RewardModal.vue";
import PayerList from "./PayerList.vue";
import { AirdropType } from "../../types";

const { t } = useLocale();
</script>

<style lang="scss" scoped>
.talkee-reward-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 16px 0;
  border-bottom: 1px solid rgb(var(--v-theme-greyscale_5));
}
</style>
