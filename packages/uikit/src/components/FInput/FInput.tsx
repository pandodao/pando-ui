import { defineComponent, ref, onMounted } from "vue";
import { VTextField } from "vuetify/components/VTextField";
import { numberInput } from "../../util";

import "./FInput.scss";

export const FInput = defineComponent({
  name: "FInput",

  props: {
    modelValue: { type: [Number, String], default: "" },
    precision: { type: [Number, String] },
    hideDefaultMessages: Boolean,
  },

  emits: {
    "update:modelValue": (value: string | number) => true,
  },

  setup(props, { attrs, emit, slots }) {
    const inputRef = ref<typeof VTextField>();

    const handleChange = (value) => {
      console.log(inputRef?.value);

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

    onMounted(() => {
      console.log(inputRef.value, inputRef?.value?.$refs.value);
    });

    return () => (
      <VTextField
        ref={inputRef}
        class={[
          "f-input",
          { "f-input--hide-default-messages": props.hideDefaultMessages },
        ]}
        modelValue={props.modelValue}
        onUpdate:modelValue={handleChange}
        onKeydown={handleKeydown}
      >
        {{
          details: (slotProps) => {
            return (
              slots.tools && (
                <div class="f-input__tools">{slots.tools?.(slotProps)}</div>
              )
            );
          },
        }}
      </VTextField>
    );
  },
});
