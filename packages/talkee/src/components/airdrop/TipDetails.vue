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

    <div class="talkee-tip-details">
      <div
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
      </div>
    </div>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 0 16px 16px;

  &-label {
    color: rgb(var(--v-theme-greyscale_3));
    font-size: 0.7rem;
    margin-bottom: 4px;
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 8px 16px 8px 12px;
    background: rgba(0, 0, 0, 0.03);
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.08);

    &-logo {
      flex: 0;
      text-align: right;
      width: 28px;
    }

    &-text {
      flex: 3;
      padding-left: 8px;
    }

    &-amount {
      font-size: 12px;
      font-weight: 700;
      color: rgb(var(--v-theme-greyscale_2));
    }

    &-value {
      font-size: 10px;
      font-weight: 400;
      color: rgb(var(--v-theme-greyscale_3));
    }
  }
}
</style>
