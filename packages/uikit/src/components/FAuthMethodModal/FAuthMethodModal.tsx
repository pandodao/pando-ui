import "./FAuthMethodModal.scss";

import { defineComponent, ref, PropType, watch } from "vue";
import { useLocale } from "vuetify";
import { isMixin } from "@foxone/utils/mixin";

import { FModal } from "../FModal";
import { FAuthStep1 } from "./FAuthStep1";
import { FAuthStep2 } from "./FAuthStep2";

import authorize from "../../utils/authorize";

import { AuthData, AuthMethod, AuthMethodState } from "../../types";

export const FAuthMethodModal = defineComponent({
  name: "FAuthMethodModal",

  inheritAttrs: false,

  props: {
    authMethods: {
      type: Array as PropType<AuthMethod[]>,
      default: () => ["mixin"],
    },
    authMethodState: {
      type: Object as PropType<AuthMethodState>,
      default: () => ({}),
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
    auth: (v: AuthData) => true,
    error: (v) => true,
    destroy: () => true,
  },

  setup(props, { emit, expose }) {
    const { t } = useLocale();
    const dialog = ref(false);
    const step = ref(1);
    const client = ref<any>(null);
    const method = ref<AuthMethod | "">("");

    const content = () => (
      <div class="f-auth-methods__wrapper">
        {step.value === 1 ? (
          <FAuthStep1
            {...props}
            v-model:step={step.value}
            v-model:method={method.value}
            onClose={close}
            onAuth={(v: AuthData) => emit("auth", v)}
            onError={(e) => emit("error", e)}
          />
        ) : (
          <FAuthStep2
            {...props}
            v-model:step={step.value}
            v-model:method={method.value}
            onClose={close}
            onAuth={(v: AuthData) => emit("auth", v)}
            onError={(e) => emit("error", e)}
          />
        )}
      </div>
    );

    const close = () => {
      dialog.value = false;
    };

    const handleDialogChange = (value) => {
      if (!value) {
        step.value = 1;
        method.value = "";
        dialog.value = false;
        close();
        emit("destroy");
        client.value?.disconnect();
      }
    };

    const handleModalValueChange = (value) => {
      dialog.value = value;
      emit("error", new Error("Cancelled"));
    };

    watch(() => dialog.value, handleDialogChange);

    const show = () => {
      if (isMixin() && props.authMethods.includes("mixin")) {
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
        modelValue={dialog.value}
        title={step.value === 1 ? t("$vuetify.uikit.connect_wallet") : ""}
        max-width="628"
        onUpdate:modelValue={handleModalValueChange}
      >
        {{
          default: () => content(),
        }}
      </FModal>
    );
  },
});
