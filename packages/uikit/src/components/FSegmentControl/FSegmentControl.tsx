import { computed, defineComponent, PropType, unref } from "vue";
import { VBtnToggle } from "vuetify/components";
import { useColor } from "vuetify/lib/composables/color.mjs";
import { FButton } from "../FButton";

import "./FSegmentControl.scss";

export const FSegmentControl = defineComponent({
  name: "FSegmentControl",

  props: {
    grow: Boolean,
    bgColor: {
      type: String,
      default: "greyscale_6",
    },
    items: {
      type: Array as PropType<{ value: string; text: string }[]>,
      default: () => [],
    },
  },

  setup(props) {
    const { colorClasses, colorStyles } = useColor(
      computed(() => ({ background: unref(props.bgColor) }))
    );
    const presets = { color: "greyscale_1", mandatory: true };

    return () => (
      <VBtnToggle
        class={[
          "f-segment-control",
          colorClasses.value,
          { "f-segment-control--grow": props.grow },
        ]}
        style={[colorStyles.value]}
        {...presets}
      >
        {props.items.map((item) => (
          <FButton {...item}>{item.text}</FButton>
        ))}
      </VBtnToggle>
    );
  },
});
