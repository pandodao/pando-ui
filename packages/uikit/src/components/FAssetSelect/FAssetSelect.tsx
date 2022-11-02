import { defineComponent, PropType } from "vue";
import { useLocale } from "vuetify";
import { FModal } from "../FModal";
import { FAssetList } from "./FAssetList";
import { FAssetSelectField } from "./FAssetSelectField";

import type { Asset } from "../../types";

export const FAssetSelect = defineComponent({
  name: "FAssetSelect",

  props: {
    dialog: {
      type: Boolean,
      default: false,
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
    "update:dialog": (value: Boolean) => true,
  },

  setup(props, { emit }) {
    const { t } = useLocale();
    const handleSelect = (v) => {
      emit("update:asset", v);
      emit("update:dialog", false);
    };

    return () => (
      <FModal
        title={t("$vuetify.uikit.select_asset")}
        modelValue={props.dialog}
        onUpdate:modelValue={(v) => emit("update:dialog", v)}
      >
        {{
          activator: ({ props: _props }) => (
            <FAssetSelectField asset={props.asset} {..._props} />
          ),
          default: () => (
            <FAssetList assets={props.assets} onSelect={handleSelect} />
          ),
        }}
      </FModal>
    );
  },
});
