import { defineComponent, PropType, ref, watch, computed } from "vue";
import { useLocale, useDisplay } from "vuetify";

import type { VNode } from "vue";

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
      type: [String, Object] as PropType<String | VNode>,
      default: "",
    },
    text: {
      type: [String, Object] as PropType<String | VNode>,
      default: "",
    },
    cancel: {
      type: Object as PropType<ModalAction>,
      default: () => ({}),
    },
    confirm: {
      type: Object as PropType<ModalAction>,
      default: () => ({}),
    },
    actions: {
      type: Object as PropType<VNode>,
    },
    hideActions: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 420,
    }
  },

  emits: {
    destroy: () => true,
  },

  setup(props, { emit, expose }) {
    const { t } = useLocale();
    const { smAndDown } = useDisplay();
    const dialog = ref(false);

    const width = computed(() => smAndDown.value ? '100%' : props.width);

    const show = () => (dialog.value = true);

    const close = () => (dialog.value = false);

    const handleDialogChange = (value) => {
      if (!value) {
        emit("destroy");
      }
    };

    watch(() => dialog.value, handleDialogChange);

    expose({ show, close });

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
        v-model={dialog.value}
        title={
          <div class="f-msg-modal__title">
            <FRender content={props.title} />
          </div>
        }
        width={width.value}
        class="f-msg-modal"
      >
        <div class="f-msg-modal__body">
          <FRender content={props.text} />
          {!props.hideActions && (
            <div class="f-msg-modal__actions">
              {props.actions || [
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
          )}
        </div>
      </FModal>
    );
  },
});
