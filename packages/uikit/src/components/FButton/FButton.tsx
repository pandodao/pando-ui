import { defineComponent } from "vue";
import { VBtn } from "vuetify/components";

export const FButton = defineComponent({
  name: "FButton",

  setup(props, { attrs, slots }) {
    const presets = { elevation: 0, rounded: true, ripple: false };

    return () => (
      <VBtn class="f-button" {...presets} {...attrs}>
        {slots.default?.()}
      </VBtn>
    );
  },
});
