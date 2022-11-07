import { defineComponent } from "vue";
import { useLocale } from "vuetify";
import { FInput } from "../FInput";

import "./FSearchInput.scss";

export const FSearchInput = defineComponent({
  name: "FSearchInput",

  setup() {
    const { t } = useLocale();

    return () => (
      <FInput
        hide-details
        class="f-search-input"
        prepend-inner-icon="$search"
        placeholder={t("$vuetify.uikit.search")}
      />
    );
  },
});
