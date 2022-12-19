import { defineComponent } from "vue";
import { useLocale } from "vuetify";

export const FHintLink = defineComponent({
  name: "FHintLink",

  props: {
    href: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const { t } = useLocale();

    return () => (
      <a class="f-hint__link" href={props.href} target="_blank">
        {t("$vuetify.uikit.learn_more")}
      </a>
    );
  },
});
