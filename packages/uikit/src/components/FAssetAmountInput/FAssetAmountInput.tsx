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
    themeColor: {
      type: String,
      default: "primary",
    },
    showRecords: {
      type: Boolean,
      default: false,
    },
    records: {
      type: Object as PropType<string[]>,
      default: () => [],
    },
  },

  emits: {
    "update:asset": (value: Asset | null) => true,
    "update:amount": (value: string) => true,
    "update:records": (value: string) => true,
    "clear:records": () => true,
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
              records={props.records}
              themeColor={props.themeColor}
              showRecords={props.showRecords}
              onUpdate:asset={(v) => emit("update:asset", v)}
              onUpdate:records={(v) => emit("update:records", v)}
              onClear:records={() => emit("clear:records")}
            />
          ),
        }}
      </FInput>
    );
  },
});
