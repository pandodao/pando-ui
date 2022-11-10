import { VForm, VIcon, VProgressLinear } from "vuetify/components";
import { defineComponent } from "vue";
import { FButton } from "../FButton";

import "./FAssetSwapForm.scss";

export const FAssetSwapForm = defineComponent({
  name: "FAssetSwapForm",

  props: {
    loading: Boolean,
  },

  setup(props, { slots }) {
    return () => (
      <VForm class="f-asset-swap-form">
        {slots.input?.()}

        <div class="f-asset-swap-form__divider">
          <FButton
            icon
            size="32"
            color="greyscale_5"
            class="f-asset-swap-form__swap"
          >
            <VIcon>$swap</VIcon>
          </FButton>
        </div>

        {slots.output?.()}

        {props.loading && (
          <VProgressLinear color="primary" height={2} indeterminate={true} />
        )}
      </VForm>
    );
  },
});
