<template>
  <div class="talkee">
    <RewardSLugPanel :tips-list="tipsList" @login="handleLoggin" />

    <CommentForm v-if="globals.logged.value" :profile="profile" />
    <div v-else>
      <LoginAction @login="handleLoggin" />
      <SiteLink />
    </div>

    <div class="talkee-comments-bar">
      <CommentCount />

      <div class="talkee-comments-bar-right">
        <CommentsAirdropAction @login="handleLoggin" />
        <SortMethods />
      </div>
    </div>

    <Comments :profile="profile" @login="handleLoggin" />

    <Launcher v-if="showChat" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Talkee",
};
</script>

<script lang="ts" setup>
import {
  watch,
  ref,
  defineProps,
  onBeforeMount,
  onMounted,
  computed,
} from "vue";
import { usePassport } from "@foxone/mixin-passport/lib/helper";
import { useToast } from "@foxone/uikit/plugins/toast";
import SortMethods from "./comment/SortMethods.vue";
import CommentCount from "./comment/CommentCount.vue";
import CommentForm from "./comment/CommentForm.vue";
import Comments from "./comment/Comments.vue";
import LoginAction from "./comment/LoginAction.vue";
import SiteLink from "./comment/SiteLink.vue";
import Launcher from "./chat/Launcher.vue";
import RewardSLugPanel from "./airdrop/SiteTipsPanel.vue";
import CommentsAirdropAction from "./comment/CommentsAirdropAction.vue";
import { useGlobals } from "../composables";
import { getMe, auth, getAssets, getSlugs } from "../services";
import { AuthMethod, AuthParams, Tip } from "../types";

const props = defineProps({
  siteId: { type: String, default: "" },
  slug: { type: String, default: "" },
  apiBase: { type: String, default: "" },
  showChat: { type: Boolean, default: false },
  wsBase: { type: String, default: "" },
  wsApiBase: { type: String, default: "" },
  clientId: { type: String, default: "" },
  showLink: { type: Boolean, default: true },
  authMethods: { type: Array, default: () => ["mixin"] },
});

const passport = usePassport();
const toast = useToast();
const globals = useGlobals();

const profile = ref<any>(null);
const tipsList = ref<Tip[][]>([[]]);

const showChat = computed(() => globals.showChat.value);

onBeforeMount(() => {
  globals.siteId.value = props.siteId || "";
  globals.slug.value = props.slug || "";
  globals.showChat.value = props.showChat || false;
  globals.apiBase.value = props.apiBase || "";
  globals.wsBase.value = props.wsBase || "";
  globals.wsApiBase.value = props.wsApiBase || "";
  globals.clientId.value = props.clientId || "";
  globals.showLink.value = props.showLink;
});

onMounted(async () => {
  globals.assets.value = await getAssets();

  const resp = await getSlugs();
  const data: Tip[] = resp.tips;

  if (data.length > 0) {
    let obj: Record<number, Tip[]> = {};

    data.map((item) => {
      if (item.user_id in obj) {
        obj[item.user_id].push(item);
      } else {
        obj[item.user_id] = [];
        obj[item.user_id].push(item);
      }
    });

    tipsList.value = Object.values(obj);
  }
});

watch(
  () => [globals.token.value],
  async () => {
    if (globals.logged.value) {
      const resp = await getMe();
      profile.value = resp;
      globals.profile.value = resp;
    }
  },
  { immediate: true }
);

async function handleLoggin() {
  globals.logging.value = true;

  try {
    const data = await passport.auth({
      origin: "Talkee",
      customizeToken: true,
      signMessage: true,
      clientId: globals.clientId.value,
      authMethods: props.authMethods as any[],
      scope: "PROFILE:READ PHONE:READ",
      pkce: true,
      hooks: {
        beforeSignMessage: async () => {
          return {
            statement: "You'll login to Talkee by the signature",
            expirationTime: new Date(
              new Date().getTime() + 1000 * 60 * 3
            ).toISOString(),
          };
        },
        onDistributeToken: async (params) => {
          let data: AuthParams;

          if (params.type === "mixin_token") {
            data = {
              method: AuthMethod.MixinToken,
              mixin_token: params.token,
            };
          } else {
            data = {
              method: AuthMethod.MVM,
              signed_message: params.message,
              signature: params.signature,
            };
          }

          const { access_token } = await auth(data);

          return { token: access_token };
        },
      },
    });

    const channel = data.channel;
    const token = data.token;

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

  .talkee-comments-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    border-bottom: 1px solid rgb(var(--v-theme-greyscale_5));
  }

  .talkee-comments-bar-right {
    display: flex;
    align-items: center;
    gap: 12px;
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
