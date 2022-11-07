import { defineComponent, ref, PropType, computed } from "vue";
import { FInput } from "../FInput";
import { FAssetSelect } from "../FAssetSelect";

import type { Asset } from "../../types";

import "./FAssetAmountInput.scss";

export const FAssetAmountInput = defineComponent({
  name: "FAssetAmountInput",

  props: {
    fullfilled: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: String,
      default: "",
    },
    asset: {
      type: Object as PropType<Asset | null>,
      default: null,
    },
    assets: {
      type: Array as PropType<Asset[]>,
      default: () => [],
    },
  },

  emits: {
    "update:asset": (value: Asset | null) => true,
    "update:amount": (value: string) => true,
  },

  setup(props, { emit, slots }) {
    const dialog = ref(false);
    const persets = computed(() => {
      return {
        reverse: true,
        type: "number",
        precision: 8,
      };
    });
    const classes = computed(() => {
      return [
        "f-asset-amount-input",
        { "f-asset-amount-input--filled": props.fullfilled },
      ];
    });

    return () => (
      <FInput
        {...persets.value}
        modelValue={props.amount}
        class={classes.value}
        onUpdate:modelValue={(v) => emit("update:amount", v)}
      >
        {{
          ...slots,
          "prepend-inner": () => (
            <FAssetSelect
              v-model:dialog={dialog.value}
              outlined={false}
              asset={props.asset}
              assets={props.assets}
              onUpdate:asset={(v) => emit("update:asset", v)}
            />
          ),
        }}
      </FInput>
    );
  },
});
