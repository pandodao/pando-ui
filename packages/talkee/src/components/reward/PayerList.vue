<template>
  <div class="talkee-payer-list">
    <VAvatar size="32">
      <VImg
        src="https://mixin-images.zeromesh.net/2Jl-le3z8LW-_V0iBnzhgUHWQdoq7KqOySYdejsAlrobu1_50q_u1_4dSjAPUmyknlu6D2-TRPAobVXXguNLB6UtAhq1UNdIG9n6=s256"
      />
    </VAvatar>
    <VAvatar size="32">
      <VImg
        src="https://mixin-images.zeromesh.net/2Jl-le3z8LW-_V0iBnzhgUHWQdoq7KqOySYdejsAlrobu1_50q_u1_4dSjAPUmyknlu6D2-TRPAobVXXguNLB6UtAhq1UNdIG9n6=s256"
      />
    </VAvatar>
    <VAvatar size="32">
      <VImg
        src="https://mixin-images.zeromesh.net/2Jl-le3z8LW-_V0iBnzhgUHWQdoq7KqOySYdejsAlrobu1_50q_u1_4dSjAPUmyknlu6D2-TRPAobVXXguNLB6UtAhq1UNdIG9n6=s256"
      />
    </VAvatar>
  </div>
</template>

<script lang="ts">
export default {
  name: "PayerList",
};
</script>

<script setup lang="ts">
import { VAvatar, VImg } from "vuetify/components";
</script>

<style lang="scss" scoped>
.talkee-payer-list {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 4px;
}
</style>
