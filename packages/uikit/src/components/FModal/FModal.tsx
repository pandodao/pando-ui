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
    title: {
      type: [String],
      default: "",
    },
    desktop: {
      type: String as PropType<"dialog" | "menu">,
      default: "dialog",
    },
  },

  emits: {
    "update:modelValue": (value: boolean) => true,
  },

  setup(props, { slots, emit, attrs }) {
    const { smAndDown } = useDisplay();

    const meta = computed(() => {
      const isMenu = !smAndDown.value && props.desktop === "menu";

      return {
        isMenu,
        elevation: isMenu ? 2 : 0,
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
        <VCard elevation={meta.value.elevation} class="f-modal__content">
          {!meta.value.isMenu && (
            <FButton
              icon
              size="24"
              class="f-modal__close"
              onClick={() => emit("update:modelValue", false)}
            >
              <VIcon>$close</VIcon>
            </FButton>
          )}
          <VCardTitle class="f-modal__title">{props.title}</VCardTitle>
          <VCardText class="f-modal__text">{slots.default?.()}</VCardText>
        </VCard>
      );
    };

    return () => (
      <meta.value.wrapper
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
