import { defineComponent } from "vue";
import { VTextField } from "vuetify/components/VTextField";

import "./FInput.scss";

export const FInput = defineComponent({
  setup(props, { attrs }) {
    const presets: any = {};

    if (!attrs.variant || attrs.variant === "filled") {
      presets.bgColor = "greyscale_6";
    }

    return () => <VTextField class={"f-input"} {...presets} />;
  },
});
