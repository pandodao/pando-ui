import "./FIcons.scss";
import { defineComponent, PropType } from "vue";
import { VIcon, VTooltip, VBtn } from "vuetify/components";

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
          return (
            <VTooltip>
              {{
                activator: ({ props }) => <VIcon {...props}>{icon}</VIcon>,
                default: () => <span>{icon}</span>,
              }}
            </VTooltip>
          );
        })}
      </div>
    );
  },
});
