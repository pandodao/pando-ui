import { defineComponent } from "vue";
import { FLoading } from "./FLoading";
import { VOverlay } from "vuetify/components";

export const FFullScreenLoading = defineComponent({
  name: "FFullScreenLoading",

  setup(props, { attrs }) {
    return () => (
      <VOverlay persistent class="f-fullscreen-loading">
        <FLoading {...attrs} />
      </VOverlay>
    );
  },
});
