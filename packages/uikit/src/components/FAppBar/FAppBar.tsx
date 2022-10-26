import { defineComponent, computed } from "vue";
import { VAppBar, VBtn, VIcon } from "vuetify/components";
import { useDisplay } from "vuetify";

import "./FAppBar.scss";

export const FAppBar = defineComponent({
  name: "FAppBar",
  props: {
    back: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    immersive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs, slots }) {
    const { smAndDown } = useDisplay();
    const classes = computed(() => {
      return {
        "f-app-bar": true,
        "f-app-bar--immersive": props.immersive,
        "f-app-bar--center": props.center,
      };
    });
    const presets = computed(() => {
      return {
        height: smAndDown.value ? 48 : 64,
        elevation: 0,
        app: true,
      };
    });

    const back = () => (
      <VBtn icon size="24" ripple={false}>
        <VIcon>$back</VIcon>
      </VBtn>
    );
    const prepend = props.back ? back : slots.prepend;

    return () => (
      <VAppBar
        class={classes.value}
        {...presets.value}
        {...attrs}
        v-slots={{ ...slots, prepend }}
      />
    );
  },
});
