import { defineComponent, ref } from "vue";
import { FInput } from "../FInput";
import { FCountryCodeSelect } from "./FCountryCodeSelect";

export const FPhoneInput = defineComponent({
  name: "FPhoneInput",

  props: {
    code: { type: String, default: "" },
  },

  emits: {
    "update:code": (value: string) => true,
  },

  setup(props, { slots, emit }) {
    const dialog = ref(false);
    const presets = { type: "number" };

    const handleKeydown = (e: KeyboardEvent) => {
      if (["e", "+", "-", "."].includes(e.key)) {
        e.preventDefault();
      }
    };

    return () => (
      <FInput {...presets} onKeydown={handleKeydown}>
        {{
          ...slots,
          "prepend-inner": () => (
            <FCountryCodeSelect
              v-model:dialog={dialog.value}
              code={props.code}
              onUpdate:code={(v) => emit("update:code", v)}
            />
          ),
        }}
      </FInput>
    );
  },
});
