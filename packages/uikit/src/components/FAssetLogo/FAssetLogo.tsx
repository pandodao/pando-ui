import { defineComponent, PropType } from "vue";
import { VImg } from "vuetify/components";

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
    color: {
      type: [String],
      default: "greyscale_7",
    },
  },

  setup(props) {
    return () => (
      <div
        class="f-asset-logo"
        style={`color: rgb(var(--v-theme-${props.color}))`}
      >
        <VImg width={props.size} src={props.asset?.logo}></VImg>
        {props.asset?.chainLogo && (
          <VImg
            class="f-asset-logo__chain"
            width={props.chainSize}
            src={props.asset?.chainLogo}
          />
        )}
      </div>
    );
  },
});
