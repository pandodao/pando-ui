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

  setup(props, { emit }) {
    return () => (
      <span class="f-hint__link" onClick={() => console.log("clicked")}>
        Learn more
        <VIcon
          size="16"
          // color="blue"
        >
          $link
        </VIcon>
      </span>
    );
  },
});
