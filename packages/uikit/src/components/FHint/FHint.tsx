import { defineComponent } from "vue";

import { FTooltip } from "../FTooltip";
import { FHintActivator } from "./FHintActivator";
import { FHintLink } from "./FHintLink";

import { useDisplay } from "vuetify";

import "./FHint.scss"

export const FHint = defineComponent({
  name: "FHint",

  props: {
    hint: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
  },

  setup(props, { slots }) {
    const { smAndUp } = useDisplay();
    console.log('smAndUp:', smAndUp.value)

    if (smAndUp.value) {
      return () => (
        <FTooltip text={props.hint}>
        {/* <FTooltip text={<FHintLink href={props.href} />}> */}
          {{
            activator: ({ props: _props }) => <FHintActivator {..._props}  />,
            default: () =>
              <div class="f-hint__tip">
                {props.hint}
                { props.href && <FHintLink href={props.href} /> }
              </div>
          }}
        </FTooltip>
      );
    }

    return () => (
      <div></div>
      // <FTooltip text={props.hint}>
      //   {{
      //     activator: ({ props: _props }) => <FHintActivator {..._props}  />,
      //   }}
      // </FTooltip>

      // <FBottomSheet>

      // </FBottomSheet>
    );
  },
});
