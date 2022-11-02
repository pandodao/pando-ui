import { defineComponent, PropType } from "vue";
import { VBottomNavigation, VIcon } from "vuetify/components";
import { FButton } from "../FButton";

import "./FBottomNav.scss";

export interface NavItem {
  text: string;
  icon: string;
  value: string;
}

export const FBottomNav = defineComponent({
  name: "FBottomNav",

  props: {
    items: {
      type: Array as PropType<NavItem[]>,
      default: () => [],
    },
  },

  setup(props) {
    const presets = { height: 66, elevation: 0, mandatory: true };

    const content = () => (
      <>
        {props.items.map((item) => (
          <FButton value={item.value} class="f-bottom-nav__item">
            <VIcon class="f-bottom-nav__icon">{item.icon}</VIcon>
            <span class="f-bottom-nav__text">{item.text}</span>
          </FButton>
        ))}
      </>
    );

    return () => (
      <VBottomNavigation class="f-bottom-nav" {...presets}>
        {{ default: () => content() }}
      </VBottomNavigation>
    );
  },
});
