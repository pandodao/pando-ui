import { defineComponent } from "vue";
import { VIcon } from "vuetify/components";

export const FHintLink = defineComponent({
  name: "FHintLink",

  props: {
    href: {
      type: String,
      default: ""
    }
  },

  setup(props) {
    return () => (
      <span class="f-hint__link">
        Learn more
        <VIcon
          size="16"
          color="blue"
          onClick={() => window.open(props.href)}
        >
          $link
        </VIcon>
      </span>
    );
  },
});
