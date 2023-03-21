import { defineComponent } from "vue";
import { useLocale } from "vuetify";
import { VIcon } from "vuetify/components";
import { FInput } from "../FInput";

import "./FSearchInput.scss";

export const FSearchInput = defineComponent({
  name: "FSearchInput",

  setup(props, { slots }) {
    const { t } = useLocale();

    return () => (
      <FInput
        hide-details
        class="f-search-input"
        placeholder={t("$vuetify.uikit.search")}
      >
        {{
          ...slots,
          "prepend-inner": () => (
            <span class="f-search-input-prepend">
              <VIcon size={16} color="greyscale_3">
                $search
              </VIcon>
            </span>
          ),
        }}
      </FInput>
    );
  },
});
