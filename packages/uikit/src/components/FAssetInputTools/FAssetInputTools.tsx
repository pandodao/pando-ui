import { defineComponent, PropType, withModifiers } from "vue";
import { useLocale } from "vuetify";
import { VIcon, VSpacer, VMessages } from "vuetify/components";
import { FButton } from "../FButton";

import "./FAssetInputTools.scss";

export const FAssetInputTools = defineComponent({
  name: "FAssetInputTools",

  props: {
    balance: {
      type: [String, Number],
      default: "",
    },
    balanceLabel: {
      type: String,
      default: "",
    },
    fiatAmount: {
      type: String,
      default: "",
    },
    fillable: {
      type: Boolean,
      default: true,
    },
    messages: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    connected: Boolean,
    disabled: Boolean,
  },

  emits: {
    connect: () => true,
    fill: () => true,
  },

  setup(props, { slots, emit }) {
    const { t } = useLocale();

    const handleConnect = () => emit("connect");

    const handleFill = () => props.fillable && emit("fill");

    return () => (
      <div class="f-asset-input-tools">
        {slots.left?.() || (
          <div class="f-asset-input-tools__left">
            {!props.connected ? (
              <FButton
                variant="text"
                size="x-small"
                onClick={handleConnect}
                class="f-asset-input-tools__connect-btn"
              >
                <span>{t("$vuetify.uikit.connect_wallet")}</span>
                <VIcon size="12" class="f-asset-input-tools__connect-icon">
                  $connect
                </VIcon>
              </FButton>
            ) : (
              <>
                <div class="f-asset-input-tools__balance">
                  <span class="f-asset-input-tools__balance-label">
                    {props.balanceLabel || t("$vuetify.uikit.balance_short")}
                  </span>
                  <span
                    class="f-asset-input-tools__balance-value"
                    onClick={withModifiers(handleFill, ["stop"]) as any}
                  >
                    {props.balance}
                  </span>
                  {props.fillable && (
                    <VIcon
                      size="12"
                      onClick={withModifiers(handleFill, ["stop"])}
                    >
                      $fill
                    </VIcon>
                  )}
                </div>

                <span>{slots["append-left"]?.()}</span>
              </>
            )}
          </div>
        )}

        <VSpacer />

        {slots.right?.() || props.messages.length > 0 ? (
          <VMessages messages={props.messages} active={true} color="error" />
        ) : (
          <span class="fiat-amount">{props.fiatAmount}</span>
        )}
      </div>
    );
  },
});
