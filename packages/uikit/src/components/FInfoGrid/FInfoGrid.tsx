import { computed, defineComponent } from "vue";

import "./FInfoGrid.scss";

export const FInfoGrid = defineComponent({
  name: "FInfoGrid",

  props: {
    reverse: Boolean,
    list: Boolean,
  },

  setup(props, { slots }) {
    const classes = computed(() => {
      return [
        "f-info-grid",
        {
          "f-info-grid--reverse": props.reverse,
          "f-info-grid--list": props.list,
        },
      ];
    });

    return () => <div class={classes.value}>{slots.default?.()}</div>;
  },
});
