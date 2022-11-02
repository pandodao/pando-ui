import { defineComponent, PropType } from "vue";
import { VLazy } from "vuetify/components";
import { FListItem } from "../FListItem";
import { FAssetLogo } from "../FAssetLogo";

import type { Asset } from "../../types";

export const FAssetItem = defineComponent({
  name: "FAssetItem",

  props: {
    asset: {
      type: Object as PropType<Asset>,
      default: null,
    },
  },

  setup(props) {
    return () => (
      <VLazy min-height={52}>
        <FListItem
          title={props.asset.symbol}
          subtitle={props.asset.name}
          value={props.asset.id}
          class="px-0"
        >
          {{
            prepend: () => (
              <FAssetLogo asset={props.asset} size="28" class="mr-2" />
            ),
          }}
        </FListItem>
      </VLazy>
    );
  },
});
