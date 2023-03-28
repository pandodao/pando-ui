import { defineComponent } from "vue";
import { VTooltip } from "vuetify/components";

import "./FTooltip.scss";

export const FTooltip = defineComponent({
  name: "FTooltip",

  props: {
    text: {
      type: String,
      default: "",
    },
  },

  emits: {
    "update:modelValue": (v: boolean) => true,
  },

  setup(props, { slots, attrs, emit }) {
    const content = () => {
      return (
        <div class="f-tooltip__tip">
          <span innerHTML={props.text} />
          <span>{slots.default?.()}</span>
        </div>
      );
    };

    return () => (
      <VTooltip
        location="top center"
        class="f-tooltip"
        onClick:outside={() => emit("update:modelValue", false)}
        onUpdate:modelValue={(v) => emit("update:modelValue", v)}
      >
        {{
          ...slots,
          default: () => content(),
        }}
      </VTooltip>
    );
  },
});
