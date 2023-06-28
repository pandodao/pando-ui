import { computed, defineComponent, PropType } from "vue";
import { VIcon } from "vuetify/components";
import { useLocale } from "vuetify";
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
    logoBackgroundColor: {
      type: String,
      default: "greyscale_7",
    },
  },

  setup(props) {
    const { t } = useLocale();
    const classes = computed(() => {
      return {
        "f-asset-field": true,
        "f-asset-field--no-selectable": !props.selectable,
        "f-asset-field--outlined": props.outlined,
      };
    });

    return () => (
      <div class={classes.value}>
        {props.asset ? (
          <FAssetLogo size="22" chainSize="10" asset={props.asset} />
        ) : (
          <span class="f-asset-field__placeholder">
            {t("$vuetify.uikit.select_asset")}
          </span>
        )}

        {props.asset && (
          <div class="f-asset-field__right">
            <div
              class={[
                "f-asset-field__symbol",
                {
                  "f-asset-field__symbol--sm":
                    (props.asset?.symbol?.length ?? 0) > 8,
                },
              ]}
            >
              {props.asset?.symbol}
            </div>
            {props.showName && (
              <div class="f-asset-field__name text-greyscale_3">
                {props.asset?.name}
              </div>
            )}
          </div>
        )}

        {props.selectable && (
          <VIcon size="16" class="f-asset-field__expend">
            $expand
          </VIcon>
        )}
      </div>
    );
  },
});
