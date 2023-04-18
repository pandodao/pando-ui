import { computed } from "vue";
import { useLocale } from "vuetify";
import { useModal } from "@foxone/uikit/lib/plugins/modal";
import { AirdropType } from "../types";
import AirdropForm from "../components/airdrop/AirdropForm.vue";

export function useAirdropModal(type: AirdropType, opponentId?: number) {
  const { t } = useLocale();
  const msgModal = useModal();

  const title = computed(() =>
    type === AirdropType.Slug
      ? t("$vuetify.talkee.send_tips")
      : t("$vuetify.talkee.send_airdrop")
  );

  function showAirdropModal() {
    msgModal.show({
      title: title.value,
      text: <AirdropForm type={type} opponentId={opponentId} />,
      hideActions: true,
    });
  }

  return { showAirdropModal };
}
