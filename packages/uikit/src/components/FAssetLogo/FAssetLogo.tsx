import { defineComponent, PropType } from "vue";

import "./FAssetLogo.scss";

import type { Asset } from "../../types";

export const FAssetLogo = defineComponent({
  name: "FAssetLogo",

  props: {
    asset: {
      type: Object as PropType<Asset | null>,
      default: null,
    },
    size: {
      type: [String, Number],
      default: 64,
    },
    chainSize: {
      type: [String, Number],
      default: 18,
    },
  },

  setup(props) {
    return () => (
      <div
        class="f-asset-logo"
        style={{ width: props.size + "px", height: props.size + "px" }}
      >
        <img width={props.size} src={props.asset?.logo}></img>
        {props.asset?.chainLogo && (
          <img
            class="f-asset-logo__chain"
            width={props.chainSize}
            src={props.asset?.chainLogo}
          />
        )}
      </div>
    );
  },
});
