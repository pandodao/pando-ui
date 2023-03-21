import { defineComponent, PropType } from "vue";
import { VBottomNavigation, VIcon } from "vuetify/components";
import { FButton } from "../FButton";

import "./FBottomNav.scss";

export interface NavItem {
  text?: string;
  icon: string;
  value?: string;
  to?: string;
  exact?: string;
  active?: boolean;
}

export const FBottomNav = defineComponent({
  name: "FBottomNav",

  props: {
    items: {
      type: Array as PropType<NavItem[]>,
      default: () => [],
    },
  },

  setup(props, { slots }) {
    const presets = { height: 66, elevation: 0, mandatory: true };

    const content = () => (
      <>
        {props.items.map((item) => (
          <FButton
            value={item.value}
            to={item.to}
            exact={item.exact}
            active={item.active}
            class="f-bottom-nav__item"
          >
            <VIcon class="f-bottom-nav__icon">{item.icon}</VIcon>
            {item.text && <span class="f-bottom-nav__text">{item.text}</span>}
          </FButton>
        ))}
      </>
    );

    return () => (
      <VBottomNavigation class="f-bottom-nav" {...presets}>
        {{
          default: () => {
            return slots.default?.() || content();
          },
        }}
      </VBottomNavigation>
    );
  },
});
