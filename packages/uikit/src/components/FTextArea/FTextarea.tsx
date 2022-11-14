import { defineComponent } from "vue";
import { VTextarea } from "vuetify/components";

export const FTextarea = defineComponent({
  name: "FTextArea",

  setup() {
    const presets = { color: "black" };

    return () => <VTextarea {...presets}></VTextarea>;
  },
});
