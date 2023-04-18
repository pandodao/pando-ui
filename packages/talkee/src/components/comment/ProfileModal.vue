<template>
  <FModal
    v-model="modal"
    desktop="dialog"
    offset="16"
    :title="t('$vuetify.talkee.user_info')"
  >
    <template #activator="{ props: modalProps }">
      <slot name="activator" :props="modalProps" />
    </template>

    <div class="talkee-profile-dialog-inner">
      <div class="talkee-profile-dialog-info">
        <VAvatar v-if="dialogMeta.avatar" :size="48">
          <VImg :src="dialogMeta.avatar" />
        </VAvatar>

        <VIcon v-else :size="48" :color="color">
          <IconFace />
        </VIcon>

        <Username class="talkee-profile-username" :name="dialogMeta.name" />
        <div class="talkee-profile-uid">{{ dialogMeta.uid }}</div>
      </div>

      <div class="talkee-profile-dialog-control">
        <template v-if="isMvm">
          <FButton color="primary" block @click="handleViewInExplorer">
            {{ t("$vuetify.talkee.view_in_explorer") }}
          </FButton>
        </template>

        <template v-if="!isMe">
          <FButton color="greyscale_2" variant="tonal" block @click="showAirdrop">
            <VIcon size="16">
              <IconGift />
            </VIcon>
            <div class="talkee-profile-dialog-airdrop-action">
              {{ t("$vuetify.talkee.send_airdrop") }}
            </div>
          </FButton>
        </template>

        <template v-if="isMe">
          <FButton
            variant="outlined"
            color="error"
            block
            class="talkee-logout-action"
            @click="handleLogout"
          >
            {{ t("$vuetify.talkee.logout") }}
          </FButton>
        </template>
      </div>
    </div>
  </FModal>
</template>

<script lang="ts">
export default {
  name: "ProfileModal",
};
</script>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useLocale } from "vuetify";
import { VImg, VAvatar, VIcon } from "vuetify/components";
import { FModal, FButton } from "@foxone/uikit/components";
import { IconFace } from "../icons";
import { useGlobals } from "../../composables";
import { isDesktop } from "@foxone/utils/helper";
import Username from "../common/Username.vue";
import { colorize } from "../../utils/helper";
import { useAirdropModal } from "../../composables/useAirdropModal";
import { AirdropType } from "../../types";
import { IconGift } from "../icons";

const globals = useGlobals();
const { t } = useLocale();

const props = defineProps({
  user: { type: Object, default: null },
  profile: { type: Object },
});

const modal = ref(false);

const color = computed(() => {
  return colorize(props.user.id);
});

const dialogMeta = computed(() => {
  if (props.user === null) {
    return {
      id: "",
      title: "$NAME",
      name: "$NAME",
      uid: "$UID",
      avatar: "",
    };
  }

  let uid = props.user.mvm_public_key;
  if (
    props.user.mixin_identity_number !== "" &&
    props.user.mixin_identity_number !== "0"
  ) {
    uid = props.user.mixin_identity_number;
  }
  return {
    id: props.user.id,
    title: props.user.full_name,
    name: props.user.full_name,
    uid,
    avatar: props.user.avatar_url,
  };
});

const airdropModal = useAirdropModal(AirdropType.User, dialogMeta.value.id);
const showAirdrop = () => {
  modal.value = false;
  airdropModal.showAirdropModal();
};

const isMe = computed(() => {
  return props.user.id === props.profile?.id;
});

const isMvm = computed(() => {
  return props.user.mvm_public_key !== "" && props.user.mvm_public_key !== "0x0000000000000000000000000000000000000000";
});

function handleLogout() {
  globals.logout();
}

function handleViewInExplorer() {
  const url = `https://scan.mvm.dev/address/${props.user.mvm_public_key}`;
  if (isDesktop()) {
    window.open(url, "_blank");
  } else {
    location.href = url;
  }
}
</script>

<style lang="scss" scoped>
.talkee-profile-dialog-inner {
  padding: 0 20px 20px;
}

.talkee-profile-dialog-info {
  display: flex;
  flex-direction: column;
  align-items: center;

  .talkee-profile-username {
    margin-top: 8px;
    margin-right: 0px;
    font-size: 0.8rem;
  }

  .talkee-profile-uid {
    font-size: 0.7rem;
    opacity: 0.6;
  }
}

.talkee-profile-dialog-control {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  max-width: 200px;
  margin: 20px auto 0 auto;

  .talkee-profile-dialog-airdrop-action {
    margin-left: 8px;
  }
  .talkee-logout-action {
    margin-top: 8px;
  }
}
</style>
