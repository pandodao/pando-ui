<template>
  <FModal v-model="modal" :title="t('$vuetify.talkee.details')" :width="smAndDown ? '100%' : 400">
    <template #activator="{ props: { onClick } }">
      <Avatar
        :url="meta.avatarUrl"
        :user-id="meta.userId"
        size="32"
        @click="onClick"
      />
    </template>

    <VRow dense class="talkee-tip-details">
      <VCol cols="6"
        v-for="(tip, index) in tips"
        :key="index"
        class="talkee-tip-details-item"
      >
        <img
          class="talkee-tip-details-item-logo"
          :src="getAsset(tip.asset_id)?.icon_url"
          width="24"
        >
        <div class="talkee-tip-details-item-text">
          <div class="talkee-tip-details-item-amount">
            {{ `${tip?.amount} ${getAsset(tip.asset_id)?.symbol}` }}
          </div>
          <div class="talkee-tip-details-item-value">
            {{ `$${getValue(tip)}` }}
          </div>
        </div>
      </VCol>
    </VRow>
  </FModal>
</template>

<script lang="ts">
export default {
  name: "TipDetails",
};
</script>

<script setup lang="ts">
import { ref, PropType, computed } from "vue";
import { useLocale, useDisplay } from "vuetify";
import { useGlobals } from "../../composables";
import { FModal } from "@foxone/uikit/components";
import Avatar from "../common/Avatar.vue";
import { format as formatNumber } from "@foxone/utils/number";
import { Tip } from "../../types";

const props = defineProps({
  tips: { type: Array as PropType<Tip[]>, default: () => [] },
});

const { t } = useLocale();
const { smAndDown } = useDisplay();
const modal = ref(false);
const globals = useGlobals();

const meta = computed(() => {
  const avatarUrl = props.tips[0].user.avatar_url;
  const userId = props.tips[0].user.id;

  return { avatarUrl, userId };
});

const getAsset = (val: string) => {
  const asset = globals.assets.value.find((x) => x.asset_id === val);
  return asset;
};

const getValue = (val: Tip) => {
  const asset = getAsset(val.asset_id);
  return formatNumber({
    n: +val.amount * (!asset?.price_usd ? 0 : +asset?.price_usd),
    dp: 8,
  });
};
</script>

<style lang="scss" scoped>
.talkee-tip-details {
  padding: 0 16px 16px;
  margin-bottom: 0.5rem;

  &-label {
    color: rgb(var(--v-theme-greyscale_3));
    font-size: 0.7rem;
    margin-bottom: 4px;
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px 4px 8px;

    &-logo {
      flex: 0;
      text-align: right;
      width: 24px;
    }

    &-text {
      flex: 3;
      padding-left: 6px;
    }

    &-amount {
      font-size: 10px;
      color: rgb(var(--v-theme-greyscale_1));
    }

    &-value {
      font-size: 10px;
      color: rgb(var(--v-theme-greyscale_3));
    }
  }
}
</style>
