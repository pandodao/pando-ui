import { computed, defineComponent, PropType, ref } from "vue";
import { useLocale } from "vuetify";
import { FModal } from "../FModal";
import { FAssetList } from "./FAssetList";
import { FAssetSelectField } from "./FAssetSelectField";
import { FSearchInput } from "../FSearchInput";
import { filterAssets } from "../../utils";

import type { Asset } from "../../types";

import "./FAssetSelect.scss";

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

  setup(props, { emit, attrs }) {
    const { t } = useLocale();
    const filter = ref("");

    const filteredAssets = computed(() =>
      filterAssets(props.assets, filter.value)
    );

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
            <FAssetSelectField asset={props.asset} {..._props} {...attrs} />
          ),
          default: () => (
            <div class="f-asset-select">
              <div class="px-4 mb-2">
                <FSearchInput v-model={filter.value} />
              </div>
              <FAssetList
                class="f-asset-select__list"
                assets={filteredAssets.value}
                onSelect={handleSelect}
              />
            </div>
          ),
        }}
      </FModal>
    );
  },
});
