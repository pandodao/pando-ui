import { computed, defineComponent, PropType } from "vue";
import {
  VDialog,
  VCard,
  VCardTitle,
  VCardText,
  VIcon,
  VMenu,
} from "vuetify/components";
import { FButton } from "../FButton";
import { useDisplay } from "vuetify";

import "./FModal.scss";

export const FModal = defineComponent({
  name: "FModal",

  props: {
    hideClose: Boolean,
    hideBack: {
      type: Boolean,
      default: true,
    },
    title: {
      type: [String, Object],
      default: "",
    },
    desktop: {
      type: String as PropType<"dialog" | "menu">,
      default: "dialog",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  emits: {
    "update:modelValue": (value: boolean) => true,
    back: () => true,
  },

  setup(props, { slots, emit, attrs }) {
    const { smAndDown } = useDisplay();

    const meta = computed(() => {
      const isMenu = !smAndDown.value && props.desktop === "menu";

      return {
        isMenu,
        hasTitle: !isMenu && (props.title || slots.title),
        hasClose: props.hideClose || attrs.persistent || isMenu,
        wrapper: isMenu ? VMenu : VDialog,
        presets: smAndDown.value
          ? { transition: "dialog-bottom-transition" }
          : { maxWidth: 600 },
      };
    });

    const classes = computed(() => {
      return {
        "f-modal": true,
        "f-modal-menu": meta.value.isMenu,
        "f-bottom-sheet": smAndDown.value,
      };
    });

    const content = () => {
      return (
        <VCard class="f-modal__content">
          {!props.hideBack && (
            <FButton
              icon
              size="24"
              class="f-modal__back"
              onClick={(e) => emit("back")}
            >
              <VIcon size="18">$back</VIcon>
            </FButton>
          )}
          {!meta.value.hasClose && (
            <FButton
              icon
              size="24"
              class="f-modal__close"
              onClick={(e) => {
                emit("update:modelValue", false);
              }}
            >
              <VIcon size="18">$close</VIcon>
            </FButton>
          )}
          {meta.value.hasTitle && (
            <VCardTitle class="f-modal__title">
              {props.title || slots.title?.()}
            </VCardTitle>
          )}
          <VCardText class="f-modal__text">{slots.default?.()}</VCardText>
        </VCard>
      );
    };

    return () => (
      <meta.value.wrapper
        modelValue={props.modelValue}
        {...meta.value.presets}
        class={classes.value}
        onUpdate:modelValue={(v) => emit("update:modelValue", v)}
      >
        {{
          ...slots,
          default: () => content(),
        }}
      </meta.value.wrapper>
    );
  },
});
