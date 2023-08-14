import { defineComponent } from "vue";
import { VTextarea } from "vuetify/components";

import "./FTextarea.scss";

export const FTextarea = defineComponent({
  name: "FTextarea",

  setup(props, { slots }) {
    const presets = { color: "primary" };

    return () => (
      <VTextarea class="rounded f-textarea" {...presets} v-slots={slots} />
    );
  },
});
