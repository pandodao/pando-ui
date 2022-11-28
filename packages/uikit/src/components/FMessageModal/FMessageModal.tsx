import { defineComponent, PropType, ref } from "vue";
import { useLocale } from "vuetify";

import type { VNode } from "vue";

import { VCard, VCardText, VCardTitle, VIcon } from "vuetify/components";
import { FModal } from "../FModal";
import { FButton } from "../FButton";

import "./FMessageModal.scss";

export interface ModalAction {
  show?: boolean;
  text?: string;
  props?: Record<string, any>;
  classes?: Record<string, any>;
  callback?: (...args: any) => void;
}

export const FMessageModal = defineComponent({
  name: "FMessageModal",

  props: {
    title: {
      type: String as PropType<String | VNode>,
      default: "",
    },
    text: {
      type: String as PropType<String | VNode>,
      default: "",
    },
    cancel: {
      type: Object as PropType<ModalAction>,
      default: {},
    },
    confirm: {
      type: Object as PropType<ModalAction>,
      default: {},
    },
    actions: {
      type: Object as PropType<ModalAction[]>,
      default: {},
    },
    type: {
      type: String,
      default: "",
    },
  },

  emits: {
    destroy: () => true,
  },

  setup(props, { slots, emit, expose }) {
    const { t } = useLocale();
    const dialog = ref(false);

    const genAction = (action: ModalAction) => {
      if (!action.show) {
        return null;
      }

      return (
        <FButton
          {...(action.props || {})}
          class={action.classes || ""}
          onClick={() => {
            dialog.value = false;
            action.callback && action.callback();
          }}
        >
          {action.text}
        </FButton>
      );
    };

    const genActions = () => {
      if (props?.actions.length > 0) {
        return props.actions.map((action) => genAction(action));
      }

      const cancel = {
        show: true,
        text: t("$vuetify.uikit.cancel"),
        props: { text: true },
        ...(props?.cancel || {}),
      };

      const confirm = {
        show: true,
        text: t("$vuetify.uikit.continue"),
        props: { color: "greyscale_1" },
        ...(props?.confirm || {}),
      };

      const btns = () => (
        <>
          {genAction(cancel)}
          {genAction(confirm)}
        </>
      );

      return btns();
    };

    const show = () => {
      dialog.value = true;
    };

    const close = () => {
      dialog.value = false;
      emit("destroy");
    };

    expose({ show, close });

    const content = () => (
      <VCard class="f-msg-modal__body" variant="flat">
        {props.title && (
          <VCardTitle class="pt-0 pb-6">
            {props.type === "warning" && (
              <VIcon class="mr-2" color="error">
                $warning
              </VIcon>
            )}
            {props.title}
          </VCardTitle>
        )}
        {props.text && <VCardText color="greyscale_3">{props.text}</VCardText>}
        <div class="d-flex justify-space-around pb-3">{genActions()}</div>
      </VCard>
    );

    return () => (
      <FModal class="f-msg-modal" closable={false} modelValue={dialog.value}>
        {{
          default: () => content(),
        }}
      </FModal>
    );
  },
});
