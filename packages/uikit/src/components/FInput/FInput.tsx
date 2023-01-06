import { defineComponent, ref } from "vue";
import { VTextField } from "vuetify/components";
import { numberInput } from "../../utils/number";

import "./FInput.scss";

export const FInput = defineComponent({
  name: "FInput",

  props: {
    modelValue: { type: String, default: "" },
    precision: { type: [Number, String] },
    hideDefaultMessages: Boolean,
  },

  emits: {
    "update:modelValue": (value) => true,
  },

  setup(props, { attrs, emit, slots }) {
    const inputRef = ref<typeof VTextField>();

    const handleChange = (value) => {
      if (attrs.type === "number" && props.precision) {
        emit("update:modelValue", numberInput(value, props.precision));
        inputRef?.value?.$forceUpdate();

        return;
      }

      emit("update:modelValue", value);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (attrs.type === "number") {
        if (["e", "+", "-"].includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    return () => (
      <VTextField
        ref={inputRef}
        class={[
          "f-input",
          { "f-input--hide-default-messages": props.hideDefaultMessages },
          { "f-input--focused": inputRef?.value?.focused },
        ]}
        modelValue={props.modelValue}
        onUpdate:modelValue={handleChange}
        onKeydown={handleKeydown}
      >
        {{
          ...slots,
          details: slots.tools
            ? (slotProps) => {
                return (
                  <div class="f-input__tools">{slots.tools?.(slotProps)}</div>
                );
              }
            : slots.details,
        }}
      </VTextField>
    );
  },
});
