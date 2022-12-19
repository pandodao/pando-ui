import { defineComponent } from "vue";
import { useDisplay, useLocale } from "vuetify";
// import { getBrowser } from "../../utils";

import { FButton } from "../FButton";

export const FAuthFennecInstall = defineComponent({
  name: "FAuthFennecInstall",

  inheritAttrs: false,

  setup() {
    const { smAndDown } = useDisplay();
    const { t } = useLocale();

    const handleInstall = () => {
      const url = "";
      // const url =
      //   getBrowser() === "firefox"
      //     ? "https://addons.mozilla.org/firefox/addon/fox_fennec"
      //     : "https://chrome.google.com/webstore/detail/fennec/eincngenkhohbbfpkohipekcmnkfamjp";

      window.open(url);
    };

    return () => (
      <div
        class={[
          "f-auth-fennec",
          "f-auth-step2",
          { "f-auth-step2--small": smAndDown.value },
        ]}
      >
        <div class="f-auth-step2__left"></div>

        <div class="f-auth-step2__right">
          <div class="f-auth-step2__title">
            {t("$vuetify.uikit.fennec_not_installed")}
          </div>
          <div class="f-auth-step2__subtitle">
            {t("$vuetify.uikit.fennec_introduction")}
          </div>
          <FButton color="greyscale_1" onClick={handleInstall}>
            {t("$vuetify.uikit.install")}
          </FButton>
        </div>
      </div>
    );
  },
});
