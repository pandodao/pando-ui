import { defineComponent, computed } from "vue";
import { VIcon } from "vuetify/components";

import { FAuthFennecInstall } from "./FAuthFennecInstall";
import { FAuthMetamaskInstall } from "./FAuthMetamaskInstall";
import { FAuthMixinMessenger } from "./FAuthMixinMessenger";

import "./FAuthMethodModal.scss";

export const FAuthStep2 = defineComponent({
  name: "FAuthStep2",

  setup(_, { attrs, emit }) {
    const getComponent = () => {
      switch (attrs.select) {
        case "fennec":
          return FAuthFennecInstall;
        case "metamask":
          return FAuthMetamaskInstall;
        default:
          return FAuthMixinMessenger;
      }
    }

    const meta = computed(() => {
      return {
        wrapper: getComponent()
      }
    })

    return () => (
      <div class="f-auth-step2">
        <meta.value.wrapper {...attrs} />

        <span class="f-auth-step2__back" onClick={() => emit("update:step", 1)}>
          <VIcon color="black">$back</VIcon>
        </span>
      </div>
    );
  },
});
