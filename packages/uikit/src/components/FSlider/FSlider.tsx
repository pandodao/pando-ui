import { defineComponent } from "vue";
import { VSlider } from "vuetify/components";

import "./FSlider.scss";

export const FSlider = defineComponent({
  name: "FSlider",

  setup(props) {
    const presets = {
      trackSize: 4,
      thumbSize: 16,
      elevation: 0,
      tickSize: 10,
      min: 0,
      max: 1,
      showTicks: "always" as const,
      ticks: { 0.33: "", 0.66: "" },
      color: "greyscale_1",
      trackColor: "greyscale_5",
    };

    return () => <VSlider class={["f-slider"]} {...presets} />;
  },
});
