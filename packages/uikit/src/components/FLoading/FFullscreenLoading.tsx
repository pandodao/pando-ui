import { defineComponent } from "vue";
import { FLoading } from "./FLoading";
import { VOverlay } from "vuetify/components";

export const FFullscreenLoading = defineComponent({
  name: "FFullscreenLoading",

  setup(props, { attrs }) {
    console.log(attrs);
    return () => (
      <VOverlay persistent class="f-fullscreen-loading">
        <FLoading {...attrs} />
      </VOverlay>
    );
  },
});
