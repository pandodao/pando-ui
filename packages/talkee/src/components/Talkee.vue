<template>
  <div class="talkee">
    <div class="talkee-topbar">
      <CommentCount />
      <SortMethods />
    </div>

    <CommentForm v-if="globals.logged.value" :profile="profile" />
    <LoginAction v-else @login="handleLoggin" />

    <Comments :profile="profile" @login="handleLoggin" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Talkee",
};
</script>

<script lang="ts" setup>
import { watch, ref, defineProps, onBeforeMount, onMounted } from "vue";
import { usePassport } from "@foxone/mixin-passport/lib/helper";
import { useToast } from "@foxone/uikit/plugins/toast";
import SortMethods from "./SortMethods.vue";
import CommentCount from "./CommentCount.vue";
import CommentForm from "./CommentForm.vue";
import Comments from "./Comments.vue";
import LoginAction from "./LoginAction.vue";
import { useGlobals } from "../composables";
import { getMe, auth, getAssets } from "../services";
import { AuthMethod } from "../types";

const props = defineProps({
  siteId: { type: String, default: "" },
  slug: { type: String, default: "" },
  apiBase: { type: String, default: "" },
  clientId: { type: String, default: "" },
  showLink: { type: Boolean, default: true },
  authMethods: { type: Array, default: () => ["mixin"] },
});

const passport = usePassport();
const toast = useToast();
const globals = useGlobals();

const profile = ref<any>(null);

onBeforeMount(() => {
  globals.siteId.value = props.siteId || "";
  globals.slug.value = props.slug || "";
  globals.apiBase.value = props.apiBase || "";
  globals.clientId.value = props.clientId || "";
  globals.showLink.value = props.showLink;
});

onMounted(async () => {
  globals.assets.value = await getAssets();
});

watch(
  () => [globals.token.value],
  async () => {
    if (globals.logged.value) {
      profile.value = await getMe();
    }
  },
  { immediate: true }
);

async function handleLoggin() {
  globals.logging.value = true;

  try {
    const data = await passport.auth({
      clientId: globals.clientId.value,
      authMethods: props.authMethods as any[],
      scope: "PROFILE:READ PHONE:READ",
      origin: "Talkee",
      pkce: true,
      mvmAuthType: "SignedMessage",
      hooks: {
        beforeSignMessage: async () => {
          return {
            statement: "You'll login to Talkee by the signature",
            expirationTime: new Date(
              new Date().getTime() + 1000 * 60 * 3
            ).toISOString(),
          };
        },
        afterSignMessage: async ({ message, signature }) => {
          return (
            await auth({
              method: AuthMethod.MVM,
              signed_message: message,
              signature,
            })
          ).access_token;
        },
      },
    });

    const channel = data.channel;

    let token = data.token;

    if (data.channel === "fennec" || data.channel === "mixin") {
      token = (
        await auth({ method: AuthMethod.MixinToken, mixin_token: token })
      ).access_token;
    }

    globals.loggin({ token, channel });
  } catch (error: any) {
    toast.error({ message: error?.message ?? "" });
  }

  globals.logging.value = false;
}
</script>

<style lang="scss" scoped>
.talkee {
  --v-theme-overlay-multiplier: 1;
  padding: 16px;

  .talkee-topbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }
}
</style>

<style lang="scss">
.talkee-app {
  .v-application__wrap {
    min-height: auto;
  }
}
</style>
