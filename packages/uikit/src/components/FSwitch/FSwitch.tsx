import { defineComponent, computed } from "vue";
import { VSwitch } from "vuetify/components";

import "./FSwitch.scss";

export const FSwitch = defineComponent({
  name: "FSwitch",

  props: {
    outlined: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const preset = { inset: true, ripple: false, hideDetails: true };
    const classes = computed(() => {
      return ["f-switch", { "f-switch--outlined": props.outlined }];
    });

    return () => <VSwitch {...preset} class={classes.value} />;
  },
});
