import { defineComponent } from "vue";
import InfiniteLoading from "v3-infinite-loading";
import { useLocale } from "vuetify";
import { FLoading } from "../FLoading";

import "./FInfiniteLoad.scss";

export const FInfiniteLoad = defineComponent({
  name: "FInfiniteLoad",

  props: {
    completeText: { type: String, default: "" },
    errorText: { type: String, default: "" },
  },

  setup(props, { slots }) {
    const { t } = useLocale();

    return () => (
      <InfiniteLoading>
        {{
          spinner: () => <FLoading size="16" />,
          complete: () => (
            <div class="f-infinited-load__hint">
              <span>
                {props.completeText || t("$vuetify.uikit.infinite_complete")}
              </span>
            </div>
          ),
          error: ({ retry }) => (
            <div class="f-infinited-load__hint">
              <span>
                {props.errorText || t("$vuetify.uikit.infinite_error")}
              </span>
              <span onClick={retry} class="f-infinited-load__retry">
                {t("$vuetify.uikit.retry")}
              </span>
            </div>
          ),
          ...slots,
        }}
      </InfiniteLoading>
    );
  },
});
