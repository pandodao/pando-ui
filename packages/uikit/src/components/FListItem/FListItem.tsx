import { defineComponent } from "vue";
import { VListItem } from "vuetify/components";

import "./FListItem.scss";

export const FListItem = defineComponent({
  name: "FListItem",

  setup(props, { slots }) {
    return () => (
      <VListItem ripple={false} class="f-list-item" v-slots={slots} />
    );
  },
});
