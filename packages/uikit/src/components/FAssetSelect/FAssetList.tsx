import { defineComponent, PropType, computed } from "vue";
import { FAssetItem } from "./FAssetItem";
import { VList } from "vuetify/components";
import "./FAssetList.scss";

import type { Asset } from "../../types";

export const FAssetList = defineComponent({
  name: "FAssetList",

  props: {
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
    select: (asset: Asset) => true,
  },

  setup(props, { emit }) {
    const current = computed(() => [props?.asset?.id] ?? undefined);

    return () => (
      <VList selected={current.value} class={["f-asset-select__list"]}>
        {props.assets.map((asset) => (
          <FAssetItem
            asset={asset}
            current={props?.asset?.id}
            key={asset.id}
            onClick={() => emit("select", asset)}
          />
        ))}
      </VList>
    );
  },
});
