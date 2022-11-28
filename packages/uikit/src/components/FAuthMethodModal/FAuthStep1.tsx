import { defineComponent, computed } from "vue";
import { VImg, VIcon } from "vuetify/components";
import { useLocale, useTheme, useDisplay } from "vuetify";

import "./FAuthMethodModal.scss";

export const FAuthStep1 = defineComponent({
  name: "FAuthStep1",

  setup(_, { attrs, emit }) {
    const { t } = useLocale();
    const { mdAndUp } = useDisplay();
    const theme = useTheme();
    const grey = theme.current.value.colors.greyscale_3;

    const isDark = computed(() => {
      return theme.name.value === "dark";
    });

    const walletList = [
      {
        needNextStep: !attrs.metamask,
        value: "metamask",
        title: "MetaMask",
        bg: isDark.value ? grey : "#FFEEDD",
        logo: "https://static.fox.one/image/logo_metamask@40x40.png",
      },
      {
        needNextStep: true,
        value: "mixin",
        title: "Mixin",
        bg: isDark.value ? grey : "#EBF8FF",
        logo: "https://static.fox.one/image/logo_mixin@40x40.png",
      },
      {
        needNextStep: !attrs.fennec,
        value: "fennec",
        title: "Fennec",
        bg: isDark.value ? grey : "#E6E7FD",
        logo: "https://static.fox.one/image/logo_fennec@40x40.png",
      },
      {
        needNextStep: false,
        value: "walletconnect",
        title: "WalletConnect",
        bg: isDark.value ? grey : "#f5f5f5",
        logo: isDark.value
          ? "https://static.fox.one/image/logo_walletconnect_dark@40x40.png"
          : "https://static.fox.one/image/logo_walletconnect@40x40.png",
      },
    ];

    const getWallets = () =>
      attrs.wallets
        .map((name: string) => walletList.find((x) => x.value === name))
        .filter((v: string) => !!v);

    const handleAuth = (item) => {
      if (!item.needNextStep) {
        emit("close");
        emit("auth", { type: item.value });
      } else {
        emit("update:select", item.value);
        emit("update:step", 2);
      }
    };

    return () => (
      <div class="f-auth-step1">
        <div class="pa-6 pt-2">
          <div
            class={`f-auth-methods ${
              !mdAndUp.value && "f-auth-methods--mobile"
            }`}
          >
            {getWallets().map((item) => (
              <div
                key={item.value}
                style={{ backgroundColor: item.bg }}
                class="f-auth-method"
                onClick={() => handleAuth(item)}
              >
                <span class="mb-3">
                  <VImg width="40" height="40" src={item.logo} />
                </span>

                <span class="f-auth-method__label">{item.title}</span>
              </div>
            ))}
          </div>

          <div class="f-auth-hint mt-6">
            <VIcon size="16" color="warning" class="mr-2">
              $FIconHorn4P
            </VIcon>
            <span innerHTML={t("$vuetify.uikit.gas_fee_hint")}></span>
          </div>
        </div>
      </div>
    );
  },
});
