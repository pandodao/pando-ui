import { computed, defineComponent } from "vue";
import { VSlider } from "vuetify/components";

import "./FSlider.scss";

export const FSlider = defineComponent({
  name: "FSlider",

  props: {
    isProcess: Boolean,
  },

  setup(props) {
    const classes = computed(() => {
      return { "f-slider--hide-thumb": props.isProcess };
    });

    const presets = !props.isProcess
      ? {
          trackSize: 8,
          thumbSize: 24,
          elevation: 0,
          color: "greyscale_1",
          trackColor: "greyscale_5",
        }
      : {
          trackSize: 4,
          tickSize: 4,
          color: "success",
          trackColor: "greyscale_6",
          rounded: 0,
          showTicks: "always" as const,
          readonly: true,
        };

    return () => <VSlider class={["f-slider", classes.value]} {...presets} />;
  },
});
