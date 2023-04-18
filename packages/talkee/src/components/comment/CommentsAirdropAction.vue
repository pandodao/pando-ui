<template>
  <FButton
    class="talkee-send-comments-airdrop-btn"
    variant="plain"
    size="small"
    @click="() => airdropModal.showAirdropModal()"
  >
    <VIcon
      size="12"
      class="talkee-send-comments-airdrop-icon"
    >
      <IconGift />
    </VIcon>
    <span class="talkee-send-comments-airdrop-btn-label">
      {{ t("$vuetify.talkee.airdrop") }}
    </span>
  </FButton>
</template>

<script lang="ts">
export default {
  name: "CommentsAirdropAction",
};
</script>

<script setup lang="ts">
import { useLocale } from "vuetify";
import { IconGift } from "../icons";
import { VIcon } from "vuetify/components";
import { FButton } from "@foxone/uikit/components";
import { useAirdropModal } from "../../composables/useAirdropModal";
import { AirdropType } from "../../types";

const { t } = useLocale();
const airdropModal = useAirdropModal(AirdropType.Comments);
</script>

<style lang="scss" scoped>
.talkee-send-comments-airdrop-btn {
  padding-left: 8px;
  padding-right: 8px;

  .talkee-send-comments-airdrop-icon {
    margin-right: 4px;
  }

  .talkee-send-comments-airdrop-btn-label {
    font-weight: 500;
    font-size: 0.8rem;
  }
}
</style>
