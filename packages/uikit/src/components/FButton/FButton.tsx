import { defineComponent } from "vue";
import { VBtn } from "vuetify/components";

import "./FButton.scss";

export const FButton = defineComponent({
  name: "FButton",

  props: {
    icon: { type: Boolean, default: false },
  },

  setup(props, { slots }) {
    const presets: Record<string, any> = {
      variant: "flat",
      rounded: true,
      ripple: false,
    };

    if (props.icon) {
      presets.variant = "text";
    }

    return () => (
      <VBtn class="f-button" {...presets} {...props}>
        {slots.default?.()}
      </VBtn>
    );
  },
});
