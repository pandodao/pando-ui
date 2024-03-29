import { defineComponent, ref } from "vue";
import { VTextField } from "vuetify/components";
import { numberInput } from "../../utils/number";

import "./FInput.scss";

export const FInput = defineComponent({
  name: "FInput",

  props: {
    modelValue: { type: String, default: "" },
    precision: { type: [Number, String] },
    isNumber: { type: Boolean, default: false },
    hideDefaultMessages: Boolean,
  },

  emits: {
    "update:modelValue": (value) => true,
  },

  setup(props, { attrs, emit, slots }) {
    const inputRef = ref<typeof VTextField>();
    const focused = ref(false);
    const preset = { density: "comfortable" as const };

    const handleChange = (value) => {
      if (props.isNumber && props.precision !== undefined) {
        let formated = numberInput(value, props.precision);

        if (props.precision === 0 && formated.endsWith(".")) {
          formated = formated.slice(0, -1);
        }

        emit("update:modelValue", formated);
        inputRef?.value?.$forceUpdate();

        return;
      }

      emit("update:modelValue", value);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (props.isNumber) {
        if (["e", "+", "-"].includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    return () => (
      <VTextField
        ref={inputRef}
        v-model:focused={focused.value}
        class={[
          "f-input",
          { "f-input--hide-default-messages": props.hideDefaultMessages },
          { "f-input--focused": focused.value },
        ]}
        modelValue={props.modelValue}
        onUpdate:modelValue={handleChange}
        onKeydown={handleKeydown}
        {...preset}
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
