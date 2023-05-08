<template>
  <FButton @click="handleAuth">Auth</FButton>

  <Talkee v-bind="args" />
</template>

<script setup>
import { usePassport } from "@foxone/mixin-passport/lib/helper";

const passport = usePassport();

const args = {
  apiBase: "https://talkee-api.aspens.rocks/api",
  enableChat: false,
  enableSlugTip: true,
  wsBase: "wss://talkee-ws.pando.im/ws",
  wsApiBase: "https://talkee-ws.pando.im/ws",
  slug: "talkee-chat",
  siteId: "3",
  clientId: "829283f7-c82d-4931-bad6-a04da459d83b",
  authMethods: ["mixin", "fennec", "metamask"],
};

function handleAuth() {
  passport.auth({
    origin: "FoxONE UIKit",
    authMethods: ["mixin", "fennec", "metamask"],
    clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
    scope: "PROFILE:READ ASSETS:READ SNAPSHOTS:READ",
    pkce: true,
    customizeToken: true,
    hooks: {
      beforeSignMessage: () => Promise.resolve({ statement: "" }),
      onDistributeToken: () => {
        return Promise.resolve({ token: "dasfas" });
      },
    },
  });
}
</script>

<style scoped></style>
