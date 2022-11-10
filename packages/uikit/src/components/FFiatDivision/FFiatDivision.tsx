import { defineComponent, PropType } from "vue";
import "./FFiatDivision.scss";

export const FFiatDivision = defineComponent({
  name: "FFiatDivision",

  props: {
    parts: {
      type: Array as PropType<{ type: string; value: string }[]>,
      default: () => [],
    },
  },

  setup(props) {
    const html = props.parts?.reduce((str, part) => {
      if (part.type === "currency") {
        return `${str}<span class="f-fiat-division__symbol">${part.value}</span>`;
      }

      return `${str}${part.value}`;
    }, "");

    return () => <div innerHTML={html} class="f-fiat-division"></div>;
  },
});
