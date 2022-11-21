import { defineComponent, ref, PropType } from "vue";
import { useLocale } from "vuetify";

import { FModal } from "../FModal";

import { FAuthStep1 } from "./FAuthStep1";
import { FAuthStep2 } from "./FAuthStep2";

import "./FAuthMethodModal.scss";

export const FAuthMethodModal = defineComponent({
  name: "FAuthMethodModal",

  props: {
    fennec: {
      type: Boolean,
      default: false,
    },
    metamask: {
      type: Boolean,
      default: false,
    },
    wallets: {
      type: Array as PropType<Array<string>>,
      default: () => ["fennec", "mixin"],
    },
    clientId: {
      type: String,
      default: "",
    },
    scope: {
      type: String,
      default: "",
    },
    isFiresbox: {
      type: Boolean,
      default: false,
    },
    hosts: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
    pkce: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    "update:step": (v) => v,
    "update:client": (v) => v,
    "update:select": (v) => v,
  },

  setup(props, { slots, attrs }) {
    const { t } = useLocale();
    const step = ref(1);
    const client = ref(null);
    const select = ref("");

    const content = () => (
      <div class="f-auth-methods__wrapper">
        {step.value === 1 ? (
          <FAuthStep1
            {...props}
            v-model:step={step.value}
            v-model:select={select.value}
          />
        ) : (
          <FAuthStep2
            {...props}
            v-model:step={step.value}
            v-model:select={select.value}
            v-model:client={client.value}
          />
        )}
      </div>
    );

    return () => (
      <FModal title={t("$vuetify.uikit.connect_wallet")}>
        {{
          ...slots,
          default: () => content(),
        }}
      </FModal>
    );
  },
});
