import { defineComponent, PropType } from "vue";
import { FAssetItem } from "./FAssetItem";
import { VList } from "vuetify/components";

import type { Asset } from "../../types";

export const FAssetList = defineComponent({
  name: "FAssetList",

  props: {
    assets: {
      type: Array as PropType<Asset[]>,
      default: () => [],
    },
  },

  emits: {
    select: (asset: Asset) => true,
  },

  setup(props, { emit }) {
    return () => (
      <VList>
        {props.assets.map((asset) => (
          <FAssetItem
            asset={asset}
            key={asset.id}
            onClick={() => emit("select", asset)}
          />
        ))}
      </VList>
    );
  },
});
