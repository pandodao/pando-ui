<template>
  <div class="login-action">
    <FButton color="primary" @click="handleLoggin">
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
import { ref } from "vue";
import { useLocale } from "vuetify";
import { FButton } from "@foxone/uikit/components";
import { usePassport } from "@foxone/mixin-passport/lib/helper";
import { useToast } from "@foxone/uikit/plugins/toast";
import { useGlobals } from "../composables";
import { auth } from "../services";

const passport = usePassport();
const globals = useGlobals();
const toast = useToast();
const { t } = useLocale();

const loading = ref(false);

async function handleLoggin() {
  loading.value = true;

  try {
    const data = await passport.auth({
      authMethods: ["mixin", "fennec", "metamask"],
      clientId: globals.clientId.value,
      scope: "PROFILE:READ PHONE:READ",
      getTokenByCode: async (code) => (await auth({ code })).token,
      origin: "Talkee",
    });

    let token = data.token;

    if (data.channel !== "mixin") {
      token = (await auth({ token })).token;
    }

    globals.loggin(token);
  } catch (error: any) {
    toast.error({ message: error?.message ?? "" });
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.login-action {
  text-align: center;
}
</style>
