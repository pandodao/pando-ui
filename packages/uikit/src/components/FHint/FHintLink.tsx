import { defineComponent } from "vue";
import { VIcon } from "vuetify/components";

export const FHintLink = defineComponent({
  name: "FHintLink",

  props: {
    href: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    return () => (
      <a class="f-hint__link" href={props.href} target="_blank">
        Learn more
        <VIcon
          size="16"
          color="blue"
        >
          $link
        </VIcon>
      </a>
    );
  },
});
