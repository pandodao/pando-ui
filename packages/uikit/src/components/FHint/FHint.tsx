import { defineComponent } from "vue";

import { FTooltip } from "../FTooltip";
import { FModal } from "../FModal";
import { FHintActivator } from "./FHintActivator";
import { FHintLink } from "./FHintLink";

import { useDisplay } from "vuetify";

import "./FHint.scss";

export const FHint = defineComponent({
  name: "FHint",

  props: {
    hint: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const { smAndUp } = useDisplay();
    console.log("smAndUp:", smAndUp.value);

    if (smAndUp.value) {
      return () => (
        <FTooltip contentClass="f-hint__tip" text={props.hint} >
          {{
            activator: ({ props: _props }) => <FHintActivator {..._props} />,
            default: () => props.href && <FHintLink href={props.href} />,
          }}
        </FTooltip>
      );
    }

    return () => (
      <FModal title="Details">
        {{
          activator: ({ props: _props }) => <FHintActivator {..._props} />,
          default: () => (
            <div class="f-hint__modal-content">
              {props.hint}
              {props.href && <FHintLink href={props.href} />}
            </div>
          ),
        }}
      </FModal>
    );
  },
});
