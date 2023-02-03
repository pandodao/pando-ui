<template>
  <div class="login-action">
    <FButton
      :loading="globals.logging.value"
      color="primary"
      @click="emits('login')"
    >
      {{ t("$vuetify.talkee.login") }}
    </FButton>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoginAction",
};
</script>

<script lang="ts" setup>
import { useLocale } from "vuetify";
import { FButton } from "@foxone/uikit/components";
import { useGlobals } from "../composables";

const globals = useGlobals();
const { t } = useLocale();

const emits = defineEmits({
  login: () => true,
});
</script>

<style lang="scss" scoped>
.login-action {
  text-align: center;
}
</style>
