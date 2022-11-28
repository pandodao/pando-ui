import { defineComponent, ref, PropType, watch, ReactiveEffect } from "vue";
import { useLocale } from "vuetify";
import { isMixin } from "@foxone/utils/mixin";

import { FModal } from "../FModal";

import { FAuthStep1 } from "./FAuthStep1";
import { FAuthStep2 } from "./FAuthStep2";

import "./FAuthMethodModal.scss";
import authorize from "../../utils/authorize";

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
    auth: (v) => v,
    error: (v) => v,
    destroy: () => true,
  },

  setup(props, { slots, emit, expose }) {
    const { t } = useLocale();
    const dialog = ref(false);
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
            onClose={close}
            onAuth={(e) => emit("auth", e)}
            onError={(e) => emit("error", e)}
          />
        ) : (
          <FAuthStep2
            {...props}
            v-model:step={step.value}
            v-model:select={select.value}
            v-model:client={client.value}
            onClose={close}
            onAuth={(e) => emit("auth", e)}
            onError={(e) => emit("error", e)}
          />
        )}
      </div>
    );

    const close = () => {
      dialog.value = false;
    };

    const handleDialogChange = (val) => {
      if (!val) {
        step.value = 1;
        select.value = "";
        dialog.value = false;
      }
    };

    watch(() => dialog.value, handleDialogChange);

    const show = () => {
      if (isMixin()) {
        client.value = authorize(
          { clientId: props.clientId, scope: props.scope, pkce: props.pkce },
          props.isFiresbox,
          props.hosts,
          {
            onError: (error) => emit("error", error),
            onSuccess: (data) => {
              if (props.pkce) {
                emit("auth", { type: "mixin", token: data });
              } else {
                emit("auth", { type: "mixin", code: data });
              }
            },
          }
        );
      } else {
        dialog.value = true;
      }
    };

    expose({ show, close });

    return () => (
      <FModal
        title={t("$vuetify.uikit.connect_wallet")}
        modelValue={dialog.value}
        onClose={close}
      >
        {{
          default: () => content(),
        }}
      </FModal>
    );
  },
});
