import { defineComponent } from "vue";
import { useDisplay, useLocale } from "vuetify";
import { isDesktop } from "@foxone/utils/helper";

import { FButton } from "../FButton";

export const FAuthOnekeyInstall = defineComponent({
  name: "FAuthOnekeyInstall",

  inheritAttrs: false,

  setup() {
    const { smAndDown } = useDisplay();
    const { t } = useLocale();

    const handleInstall = () => {
      const url = "https://onekey.so/download?client=browserExtension";

      window.open(url);
    };

    return () => (
      <div
        class={[
          "f-auth-onekey",
          "f-auth-step2",
          {
            "f-auth-step2--small": smAndDown.value,
            "f-auth-onekey--mobile": !isDesktop,
          },
        ]}
      >
        <div class="f-auth-step2__left"></div>
        <div class="f-auth-step2__right">
          <div
            class="f-auth-step2__title"
            innerHTML={
              isDesktop()
                ? t("$vuetify.uikit.onekey_not_installed")
                : t("$vuetify.uikit.onekey_not_installed_2")
            }
          />
          <div
            class="f-auth-step2__subtitle"
            innerHTML={
              isDesktop()
                ? t("$vuetify.uikit.onekey_introduction")
                : t("$vuetify.uikit.onekey_introduction_2")
            }
          />

          <FButton color="greyscale_1" onClick={handleInstall}>
            {t("$vuetify.uikit.install")}
          </FButton>
        </div>
      </div>
    );
  },
});
