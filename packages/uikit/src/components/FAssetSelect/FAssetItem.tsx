import { defineComponent, PropType } from "vue";
import { VLazy, VIcon } from "vuetify/components";
import { FListItem } from "../FListItem";
import { FAssetLogo } from "../FAssetLogo";
import "./FAssetItem.scss";

import type { Asset } from "../../types";

export const FAssetItem = defineComponent({
  name: "FAssetItem",

  props: {
    asset: {
      type: Object as PropType<Asset>,
      default: null,
    },
    current: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    return () => (
      <VLazy min-height={52}>
        <FListItem
          title={props.asset.symbol}
          subtitle={props.asset.name}
          value={props.asset.id}
          class="f-asset-item"
        >
          {{
            prepend: () => (
              <FAssetLogo
                asset={props.asset}
                size="28"
                chainSize="12"
                class="f-asset-item__logo"
              />
            ),
            append: () =>
              props.current === props.asset?.id ? (
                <VIcon size={16}>$check</VIcon>
              ) : (
                ""
              ),
          }}
        </FListItem>
      </VLazy>
    );
  },
});
