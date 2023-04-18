<template>
  <div class="talkee-tips-panel">
    <FButton color="primary" @click="showAirdrop">
      {{ t("$vuetify.talkee.send_tips") }}
    </FButton>

    <PayerList :tips-list="tipsList" />
  </div>
</template>

<script lang="ts">
export default {
  name: "SiteTipsPanel",
};
</script>

<script setup lang="ts">
import { PropType } from "vue";
import { useLocale } from "vuetify";
import PayerList from "./PayerList.vue";
import { FButton } from "@foxone/uikit/components";
import { useAirdropModal } from "../../composables/useAirdropModal";
import { AirdropType, Tip } from "../../types";

defineProps({
  tipsList: { type: Array as PropType<Tip[][]>, default: () => [[]] },
});

const { t } = useLocale();
const airdropModal = useAirdropModal(AirdropType.Slug);

const showAirdrop = () => airdropModal.showAirdropModal();
</script>

<style lang="scss" scoped>
.talkee-tips-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 16px 0;
}
</style>
