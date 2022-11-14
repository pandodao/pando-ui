import { defineComponent } from "vue";
import { VSwitch } from "vuetify/components";

import "./FSwitch.scss";

export const FSwitch = defineComponent({
  name: "FSwitch",

  setup() {
    return () => <VSwitch class="f-switch" />;
  },
});
