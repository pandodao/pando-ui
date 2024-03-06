import { defineComponent } from "vue";
import { VDivider } from "vuetify/components";

import "./FDivider.scss";

export const FDivider = defineComponent({
  name: "FDivider",

  setup() {
    const preset = { color: "greyscale_6", thickness: 1 };

    return () => <VDivider {...preset} class={"f-divider"} />;
  },
});
