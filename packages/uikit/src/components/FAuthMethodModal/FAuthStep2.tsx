import { defineComponent, computed, PropType } from "vue";
import { VIcon } from "vuetify/components";
import { FButton } from "../FButton";

import { FAuthFennecInstall } from "./FAuthFennecInstall";
import { FAuthMetamaskInstall } from "./FAuthMetamaskInstall";
import { FAuthMixinMessenger } from "./FAuthMixinMessenger";
import { FAuthOnekeyInstall } from "./FAuthOnekeyInstall";

import type { AuthMethod, AuthData } from "../../types";

export const FAuthStep2 = defineComponent({
  name: "FAuthStep2",

  inheritAttrs: false,

  props: {
    method: {
      type: String as PropType<AuthMethod>,
      default: "",
    },
    clientId: {
      type: String,
      default: "",
    },
    scope: {
      type: String,
      default: "",
    },
    pkce: {
      type: Boolean,
      default: false,
    },
    isFiresbox: {
      type: Boolean,
      default: false,
    },
    hosts: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },

  emits: {
    "update:step": (v: number) => true,
    auth: (v: AuthData) => true,
    error: (v) => true,
    close: () => true,
  },

  setup(props, { emit, attrs }) {
    const getComponent = () => {
      switch (props.method) {
        case "fennec":
          return FAuthFennecInstall;
        case "metamask":
          return FAuthMetamaskInstall;
        case "onekey":
          return FAuthOnekeyInstall;
        default:
          return FAuthMixinMessenger;
      }
    };

    const meta = computed(() => {
      return {
        wrapper: getComponent(),
      };
    });

    return () => (
      <div class="f-auth-step2">
        <meta.value.wrapper
          {...props}
          onAuth={(v) => emit("auth", v)}
          onError={(v) => emit("error", v)}
          onClose={() => emit("close")}
        />

        <FButton
          icon
          size="32"
          class="f-auth-step2__back"
          onClick={() => emit("update:step", 1)}
        >
          <VIcon color="black">$back</VIcon>
        </FButton>
      </div>
    );
  },
});
