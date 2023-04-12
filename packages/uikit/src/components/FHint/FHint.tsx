import { defineComponent, computed, ref } from "vue";

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

  setup(props, { slots }) {
    const { smAndUp } = useDisplay();
    const { t } = useLocale();
    const dialog = ref(false);

    const meta = computed(() => {
      const isTooltip = smAndUp.value;
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
          <span innerHTML={props.hint}></span>
          {props.href && <FHintLink href={props.href} />}
        </div>
      );

    return () => (
      <meta.value.wrapper v-model={dialog.value} {...meta.value.presets}>
        {{
          activator: slots.activator
            ? slots.activator
            : (params) => <FHintActivator {...params.props} />,
          default: () => content(),
        }}
      </meta.value.wrapper>
    );
  },
});
