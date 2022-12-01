import { computed, defineComponent, PropType } from "vue";
import "./FFiatDivision.scss";

export const FFiatDivision = defineComponent({
  name: "FFiatDivision",

  props: {
    parts: {
      type: [Array, String] as PropType<
        string | { type: string; value: string }[]
      >,
      default: () => [],
    },
  },

  setup(props) {
    const html = computed(() => {
      return typeof props.parts === "string"
        ? props.parts
        : props.parts.reduce((str, part) => {
            if (part.type === "currency") {
              return `${str}<span class="f-fiat-division__symbol">${part.value}</span>`;
            }

            return `${str}${part.value}`;
          }, "");
    });

    return () => <div innerHTML={html.value} class="f-fiat-division"></div>;
  },
});
