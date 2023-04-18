<template>
  <div class="talkee-payer-list">
    <div v-for="(tips, index) in tipsList" :key="index">
      <TipDetails :tips="tips" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PayerList",
};
</script>

<script setup lang="ts">
import { PropType } from "vue";
import TipDetails from "./TipDetails.vue";
import { Tip } from "../../types";

defineProps({
    tipsList: { type: Array as PropType<Tip[][]>, default: () => [[]] },
});
</script>

<style lang="scss" scoped>
.talkee-payer-list {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 4px;
}
</style>
