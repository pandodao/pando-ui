import { defineComponent, PropType, ref, watch } from "vue";
import { useLocale } from "vuetify";

import type { VNode } from "vue";

import { VIcon } from "vuetify/components";
import { FModal } from "../FModal";
import { FButton } from "../FButton";
import { FRender } from "../FRender";

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
      default: () => {},
    },
    confirm: {
      type: Object as PropType<ModalAction>,
      default: () => {},
    },
    actions: {
      type: Object as PropType<ModalAction[]>,
      default: () => {},
    },
    type: {
      type: String,
      default: "",
    },
  },

  emits: {
    destroy: () => true,
  },

  setup(props, { emit, expose }) {
    const { t } = useLocale();
    const dialog = ref(false);

    const show = () => (dialog.value = true);

    const close = () => (dialog.value = false);

    const handleDialogChange = (value) => {
      if (!value) {
        emit("destroy");
      }
    };

    watch(() => dialog.value, handleDialogChange);

    expose({ show, close });

    const title = (
      <div class="f-msg-modal__title">
        {props.type === "warning" && (
          <VIcon class="mr-2" color="error">
            $warning
          </VIcon>
        )}
        <FRender content={props.title} />
      </div>
    );

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

    return () => (
      <FModal
        title={title}
        modelValue={dialog.value}
        hideClose
        maxWidth="420"
        class="f-msg-modal"
      >
        <div class="f-msg-modal__body">
          <FRender content={props.text}></FRender>
          <div class="f-msg-modal__actions">
            {props.actions?.length
              ? props.actions.map((action) => genAction(action))
              : [
                  genAction({
                    show: true,
                    text: t("$vuetify.uikit.cancel"),
                    props: { variant: "plain" },
                    ...(props?.cancel || {}),
                  }),
                  genAction({
                    show: true,
                    text: t("$vuetify.uikit.continue"),
                    props: { color: "greyscale_1" },
                    ...(props?.confirm || {}),
                  }),
                ]}
          </div>
        </div>
      </FModal>
    );
  },
});
