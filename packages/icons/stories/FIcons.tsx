import "./FIcons.scss";
import { defineComponent, PropType } from "vue";
import { VTooltip } from "vuetify/components";
import * as components from "@foxone/icons";

export const FIcons = defineComponent({
  name: "FIcons",

  props: {
    icons: {
      type: Array as PropType<Array<string>>,
      default: () => [],
    },
  },

  setup(props) {
    return () => (
      <div class="f-icons">
        {props.icons.map((icon) => {
          // @ts-ignore
          const wrapper = components[icon];

          return (
            <VTooltip>
              {{
                activator: ({ props }) => (
                  <div class="f-icons-wrap">
                    <wrapper {...props} />
                  </div>
                ),
                default: () => <span>{icon}</span>,
              }}
            </VTooltip>
          );
        })}
      </div>
    );
  },
});
