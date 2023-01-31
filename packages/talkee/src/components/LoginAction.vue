<template>
  <div class="login-action">
    <FButton color="primary" @click="handleLoggin">Login</FButton>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoginAction",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { FButton } from "@foxone/uikit/components";
import { usePassport } from "@foxone/mixin-passport/lib/helper";
import { useGlobals } from "../composables";
import { auth } from "../services";

const passport = usePassport();
const globals = useGlobals();

const loading = ref(false);

async function handleLoggin() {
  loading.value = true;

  console.log("handle login", passport);

  try {
    const data = await passport.auth({
      authMethods: ["mixin", "fennec", "metamask"],
      clientId: globals.clientId.value,
      scope: "PROFILE:READ PHONE:READ",
      getTokenByCode: async (code) => (await auth(code)).token,
      origin: "Talkee",
    });

    globals.loggin(data.token);
  } catch (error) {
    console.log(error);
    alert("Login Error");
  }

  loading.value = false;
}
</script>

<style lang="scss" scoped>
.login-action {
  text-align: center;
}
</style>
