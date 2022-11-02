import { defineComponent } from "vue";
import { VBtn } from "vuetify/components";

import "./FButton.scss";

export const FButton = defineComponent({
  name: "FButton",

  setup(props, { slots }) {
    const presets = { elevation: 0, rounded: true, ripple: false };

    return () => (
      <VBtn class="f-button" {...presets}>
        {slots.default?.()}
      </VBtn>
    );
  },
});
