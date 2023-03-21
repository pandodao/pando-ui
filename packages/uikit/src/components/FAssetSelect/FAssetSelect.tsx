import { computed, defineComponent, PropType, ref, withModifiers } from "vue";
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
    themeColor: {
      type: String,
      default: "primary",
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

    const empty = computed(() => filteredAssets.value.length === 0);

    const handleSelect = (v) => {
      emit("update:asset", v);
      emit("update:dialog", false);
    };

    const handleClear = () => (filter.value = "");

    return () => (
      <FModal
        title={t("$vuetify.uikit.select_asset")}
        modelValue={props.dialog}
        desktop="menu"
        close-on-content-click={false}
        onUpdate:modelValue={(v) => emit("update:dialog", v)}
      >
        {{
          activator: ({ isActive, props: { onClick } }) => (
            <FAssetSelectField
              class={[{ "f-asset-field--active": isActive }]}
              asset={props.asset}
              onClick={withModifiers(onClick, ["stop"])}
              onMousedown={withModifiers(() => {}, ["stop"])}
              {...attrs}
            />
          ),
          default: () => (
            <div class="f-asset-select">
              <div class="f-asset-select__search">
                <FSearchInput
                  v-model={filter.value}
                  variant="outlined"
                  clearable
                  color={props.themeColor}
                  onClick:clear={handleClear}
                />
              </div>
              {!empty.value ? (
                <FAssetList
                  asset={props.asset}
                  assets={filteredAssets.value}
                  onSelect={handleSelect}
                />
              ) : (
                <div class="f-asset-select__search--empty">
                  <img src="https://static.fox.one/image/empty_placeholder.svg" />
                  <p>{t("$vuetify.uikit.no_results")}</p>
                </div>
              )}
            </div>
          ),
        }}
      </FModal>
    );
  },
});
