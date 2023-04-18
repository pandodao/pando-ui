<template>
  <div class="talkee-tips-panel">
    <FButton color="primary" @click="showAirdrop">
      {{ t("$vuetify.talkee.send_tips") }}
    </FButton>

    <PayerList v-if="hasTips" :tips-list="tipsList" />
  </div>
</template>

<script lang="ts">
export default {
  name: "SiteTipsPanel",
};
</script>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { useLocale } from "vuetify";
import PayerList from "./PayerList.vue";
import { FButton } from "@foxone/uikit/components";
import { useGlobals } from "../../composables";
import { useAirdropModal } from "../../composables/useAirdropModal";
import { AirdropType, Tip } from "../../types";

const props = defineProps({
  tipsList: { type: Array as PropType<Tip[][]>, default: () => [[]] },
});

const emits = defineEmits({
  login: () => true,
});

const { t } = useLocale();
const airdropModal = useAirdropModal(AirdropType.Slug);
const globals = useGlobals();

const hasTips = computed(() => props.tipsList[0].length > 0);

const showAirdrop = () => {
  if (!globals.logged.value) {
    emits("login")
  } else {
    airdropModal.showAirdropModal();
  }
};
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
