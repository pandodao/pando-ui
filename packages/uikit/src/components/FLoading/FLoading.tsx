import { defineComponent } from "vue";
import { VProgressCircular, VOverlay } from "vuetify/components";

import "./FLoading.scss";

export const FLoading = defineComponent({
  name: "FLoading",

  props: {
    fullscreen: Boolean,
    text: String,
  },

  setup(props, { slots, attrs }) {
    const presets = { persistent: true };

    return () => (
      <VOverlay class="f-loading" {...presets}>
        <div class="f-loading__content">
          <VProgressCircular width={3} indeterminate={true} {...attrs} />
          <span class="f-loading__text">{slots.text?.() ?? props.text}</span>
        </div>
      </VOverlay>
    );
  },
});
