import { defineComponent, toRef } from "vue";
import { VBtnGroup } from "vuetify/components";
import {
  makePositionProps,
  usePosition,
} from "vuetify/lib/composables/position.mjs";
import { useBackgroundColor } from "vuetify/lib/composables/color.mjs";

import "./FActionBar.scss";

export const FActionBar = defineComponent({
  name: "FActionBar",

  props: {
    color: String,
    ...makePositionProps(),
  },

  setup(props, { slots }) {
    const { positionClasses } = usePosition(props);
    const { backgroundColorClasses, backgroundColorStyles } =
      useBackgroundColor(toRef(props, "color"));

    return () => (
      <VBtnGroup
        class={[
          "f-action-bar",
          positionClasses.value,
          backgroundColorClasses.value,
        ]}
        style={[backgroundColorStyles.value]}
        v-slots={slots}
      />
    );
  },
});
