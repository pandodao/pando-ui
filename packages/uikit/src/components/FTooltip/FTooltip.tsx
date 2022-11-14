import { defineComponent } from "vue";
import { VTooltip } from "vuetify/components";

// import { makeDimensionProps } from "vuetify/lib/composables/dimensions.mjs";
// import type { Anchor } from "vuetify/lib/util/anchor.mjs"
// import type { FunctionalComponent, PropType } from "vue";

import "./FTooltip.scss";

export const FTooltip = defineComponent({
  name: "FTooltip",

  props: {
    text: {
      type: String,
      default: "",
    },
    location: {}, // type is Anchor
  },

  setup(props, { slots }) {
    const content = () => {
      return (
        <div class="f-tooltip__tip">
          <span class={[ "f-tooltip__arrow", `f-tooltip__arrow--${props.location}` ]}>
            <svg
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1984 1.11564C10.9474 0.47366 12.0526 0.47366 12.8016 1.11564L21.3951 8.4815C22.8049 9.6899 21.9503 12 20.0935 12H2.90652C1.0497 12 0.195138 9.6899 1.60493 8.4815L10.1984 1.11564Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <span>{props.text}</span>
          <span>{slots.default?.()}</span>
        </div>
      )
    };

    return () => (
      <VTooltip class="f-tooltip" location={props.location}>
        {{
          default: () => content(),
          ...slots,
        }}
      </VTooltip>
    );
  },
});