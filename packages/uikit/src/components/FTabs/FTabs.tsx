import { computed, defineComponent } from "vue";
import { VTabs } from "vuetify/components";
import { provideDefaults } from "vuetify/lib/composables/defaults.mjs";

import "./FTabs.scss";

export const FTabs = defineComponent({
  name: "FTabs",

  props: {
    narrow: Boolean,
  },

  setup(props, { slots }) {
    provideDefaults({
      VTab: {
        ripple: false,
      },
    });

    const presets = { height: 52 };
    const classes = computed(() => {
      return ["f-tabs", { "f-tabs--narrow": props.narrow }];
    });

    return () => <VTabs {...presets} class={classes.value} v-slots={slots} />;
  },
});
