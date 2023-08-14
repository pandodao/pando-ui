import { defineComponent } from "vue";
import { VProgressCircular } from "vuetify/components";

import "./FLoading.scss";

export const FLoading = defineComponent({
  name: "FLoading",

  props: {
    text: String,
    processProps: { type: Object, default: () => ({}) },
  },

  setup(props, { slots }) {
    return () => (
      <div class="f-loading__content">
        <VProgressCircular
          width={3}
          indeterminate={true}
          {...props.processProps}
        />
        {(slots.text || props.text) && (
          <span class="f-loading__text">{slots.text?.() ?? props.text}</span>
        )}
      </div>
    );
  },
});
