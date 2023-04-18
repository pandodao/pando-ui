<template>
  <div class="talkee-brand">
    Powered by
    <a href="https://pando.im/talkee/" target="_blank">Talkee</a>
  </div>
</template>

<script lang="ts">
export default {
  name: "SiteLink",
};
</script>

<style lang="scss" scoped>
.talkee-brand {
  text-align: center;
  margin-top: 8px;
  color: rgb(var(--v-theme-greyscale_4));
  font-size: 12px;
  > a {
    text-decoration: none;
    color: rgb(var(--v-theme-greyscale_3));
    &:hover {
      color: rgb(var(--v-theme-greyscale_2));
    }
  }
}
</style>
