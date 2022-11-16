import { computed, defineComponent, PropType, ref, watch } from "vue";
import { VSnackbar, VIcon, VDivider } from "vuetify/components";

import "./FToast.scss";

export interface ToastAction {
  text: string;
  callback?: () => void;
}

export const types = ["success", "warning", "error"] as const;

export const FToast = defineComponent({
  name: "FToast",

  props: {
    action: {
      type: Object as PropType<ToastAction | null>,
      default: null,
    },
    type: String as PropType<typeof types[number]>,
    message: String,
  },

  emits: {
    destroy: () => true,
  },

  setup(props, { slots, expose, emit }) {
    const visible = ref(false);

    const presets = {
      variant: "flat",
      location: "center center",
    } as const;

    const icon = computed(() => {
      const icons = { success: "$check", error: "$alert", warning: "$alert" };

      return icons[props?.type ?? ""];
    });

    const classes = computed(() => {
      return [
        "f-toast",
        { "f-toast--action": props.action },
        props.type && `f-toast--${props.type}`,
      ];
    });

    const renderMessage = () => (
      <div class="f-toast__message">
        {icon.value && (
          <VIcon size="16" color={props.type} class="mr-4">
            {icon.value}
          </VIcon>
        )}
        <span>{slots.default?.() || props.message}</span>
      </div>
    );

    const renderActions = () =>
      props.action && (
        <div class="f-toast__action" onClick={() => props.action?.callback?.()}>
          <VDivider vertical class="mr-2" />
          <span>{props.action.text}</span>
          <VIcon size="14">$arrow_right</VIcon>
        </div>
      );

    const show = () => (visible.value = true);

    const close = () => {
      visible.value = false;
      emit("destroy");
    };

    const update = (v) => (v ? show() : close());

    expose({ show, close });

    watch(
      () => props.message,
      () => {
        console.log(props);
      }
    );

    return () => (
      <VSnackbar
        modelValue={visible.value}
        class={classes.value}
        {...presets}
        onUpdate:modelValue={update}
      >
        {{
          default: renderMessage,
          actions: renderActions,
        }}
      </VSnackbar>
    );
  },
});
