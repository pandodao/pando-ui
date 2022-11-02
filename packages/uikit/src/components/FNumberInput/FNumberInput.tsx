import { toPrecision } from "@foxone/utils/number";
import { defineComponent, ref } from "vue";
import { FInput } from "../FInput";
import BigNumber from "bignumber.js";

export const FNumberInput = defineComponent({
  name: "FNumberInput",

  props: {
    modelValue: { type: [Number, String], default: "" },
    precision: { type: [Number, String], default: 8 },
    precisionDisabled: { type: Boolean, default: false },
  },

  emits: {
    "update:modelValue": (value: string | number) => true,
  },

  setup(props, { emit }) {
    const inputRef = ref();

    const handleChange = (value) => {
      console.log("handleChange", value);

      let _value = value;

      if (!props.precisionDisabled) {
        const dp = new BigNumber(_value).decimalPlaces();

        if (dp && dp > +props.precision) {
          _value = toPrecision({ n: _value, dp: +props.precision });
        }
      }

      emit("update:modelValue", _value);
    };

    return () => (
      <FInput
        ref={inputRef}
        modelValue={props.modelValue}
        type="number"
        {...{ "onUpdate:modelValue": handleChange }}
      />
    );
  },
});
