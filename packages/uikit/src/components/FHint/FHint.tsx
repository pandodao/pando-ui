import { defineComponent, computed } from "vue";

import { FTooltip } from "../FTooltip";
import { FModal } from "../FModal";
import { FHintActivator } from "./FHintActivator";
import { FHintLink } from "./FHintLink";

import { useDisplay, useLocale } from "vuetify";

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
    const { mdAndUp } = useDisplay();
    const { t } = useLocale();

    const meta = computed(() => {
      const isTooltip = mdAndUp.value;
      return {
        isTooltip,
        wrapper: isTooltip ? FTooltip : FModal,
        presets: isTooltip
          ? { contentClass: "f-hint__content", text: props.hint }
          : { title: t("$vuetify.uikit.details") },
      };
    });

    const content = () =>
      meta.value.isTooltip ? (
        props.href && <FHintLink href={props.href} />
      ) : (
        <div class="f-hint__modal-content">
          {props.hint}
          {props.href && <FHintLink href={props.href} />}
        </div>
      );

    return () => (
      <meta.value.wrapper {...meta.value.presets}>
        {{
          activator: ({ props: _props }) => <FHintActivator {..._props} />,
          default: () => content(),
        }}
      </meta.value.wrapper>
    );
  },
});
