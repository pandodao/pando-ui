<template>
  <div class="talkee-link">
    <a href="https://pando.im/talkee/" target="_blank">powered by Talkee</a>
  </div>
</template>

<script lang="ts">
export default {
  name: "SiteLink",
};
</script>

<style lang="scss" scoped>
.talkee-link {
  text-align: center;
  margin-top: 8px;

  > a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    color: rgb(var(--v-theme-greyscale_4));

    &:hover {
      color: rgb(var(--v-theme-greyscale_3));
    }
  }
}
</style>
