import { computed, defineComponent, PropType } from "vue";
import { VIcon } from "vuetify/components";
import { FAssetLogo } from "../FAssetLogo";

import "./FAssetSelectField.scss";

import type { Asset } from "../../types";

export const FAssetSelectField = defineComponent({
  name: "FAssetField",

  props: {
    showName: Boolean,
    disabled: Boolean,
    outlined: {
      type: Boolean,
      default: true,
    },
    selectable: {
      type: Boolean,
      default: true,
    },
    asset: {
      type: Object as PropType<Asset | null>,
      default: null,
    },
  },

  setup(props) {
    const classes = computed(() => {
      return {
        "f-asset-field": true,
        "f-asset-field--selectable": props.selectable,
        "f-asset-field--outlined": props.outlined,
      };
    });

    return () => (
      <div class={classes.value}>
        {props.asset ? (
          <FAssetLogo size="24" chainSize="8" asset={props.asset} />
        ) : (
          <VIcon>$question</VIcon>
        )}

        <div class="flex-grow-1 ml-2">
          <div class="f-asset-field__symbol text-subtitle-1">
            {props.asset?.symbol}
          </div>
          {props.showName && (
            <div class="f-asset-field__name text-caption text-greyscale_3">
              {props.asset?.name}
            </div>
          )}
        </div>

        {props.selectable && (
          <VIcon size="16" class="ml-1">
            $expand
          </VIcon>
        )}
      </div>
    );
  },
});
