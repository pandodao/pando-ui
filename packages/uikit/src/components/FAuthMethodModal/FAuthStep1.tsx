import { defineComponent, computed, PropType } from "vue";
import { VImg, VIcon } from "vuetify/components";
import { useLocale, useTheme, useDisplay } from "vuetify";

import type { AuthData, AuthMethod, AuthMethodState } from "../../types";

export const FAuthStep1 = defineComponent({
  name: "FAuthStep1",

  inheritAttrs: false,

  props: {
    step: {
      type: Number,
      default: 1,
    },
    method: {
      type: String as PropType<AuthMethod>,
      default: "",
    },
    authMethods: {
      type: Array as PropType<AuthMethod[]>,
      default: () => ["mixin"],
    },
    authMethodState: {
      type: Object as PropType<AuthMethodState>,
      default: () => ({}),
    },
  },

  emits: {
    close: () => true,
    auth: (v: AuthData) => true,
    "update:method": (v: AuthMethod) => true,
    "update:step": (v: number) => true,
  },

  setup(props, { emit }) {
    const { t } = useLocale();
    const { mdAndUp } = useDisplay();
    const theme = useTheme();
    const grey = theme.current.value.colors.greyscale_3;

    const isDark = computed(() => {
      return theme.name.value === "dark";
    });

    const authMethodsMeta = [
      {
        needNextStep: !props.authMethodState["metamask"],
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
        needNextStep: !props.authMethodState["fennec"],
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
      {
        needNextStep: !props.authMethodState["onekey"],
        value: "onekey",
        title: "OneKey",
        bg: isDark.value ? grey : "#E9FEE6",
        logo: "https://static.fox.one/image/logo_onekey@40x40.png",
      },
    ];

    const getAuthMethodsMeta = () =>
      props.authMethods
        .map((name: string) => authMethodsMeta.find((x) => x.value === name))
        .filter((v) => !!v);

    const handleAuth = (item) => {
      if (!item.needNextStep) {
        emit("close");
        emit("auth", { type: item.value });
      } else {
        emit("update:method", item.value);
        emit("update:step", 2);
      }
    };

    return () => (
      <div class="f-auth-step1">
        <div class="pa-6 pt-2">
          <div
            class={[
              "f-auth-methods",
              { "f-auth-methods--mobile": !mdAndUp.value },
            ]}
          >
            {getAuthMethodsMeta().map((item) => (
              <div
                key={item!.value}
                style={{ backgroundColor: item!.bg }}
                class="f-auth-method"
                onClick={() => handleAuth(item)}
              >
                <span class="mb-3">
                  <VImg width="40" height="40" src={item!.logo} />
                </span>

                <span class="f-auth-method__label">{item!.title}</span>
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
