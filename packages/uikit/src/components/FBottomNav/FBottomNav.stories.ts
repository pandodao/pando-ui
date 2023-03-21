import { ref } from "vue";
import { FBottomNav } from "./FBottomNav";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FBottomNav",
  component: FBottomNav,
} as Meta<typeof FBottomNav>;

const Template: StoryFn<typeof FBottomNav> = (args) => ({
  components: { FBottomNav },
  setup() {
    const model = ref("home");

    return { args, model };
  },
  template: `
    <span>{{ model }}</span>
    <FBottomNav v-model="model" v-bind="args"></FBottomNav>
  `,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: "Home", icon: "$FIconHomeFill", value: "home" },
    {
      text: "Market",
      icon: "$FIconMarketFill",
      value: "market",
      active: "true",
    },
    { text: "Swap", icon: "$FIconSwapFill", value: "swap" },
    { text: "Me", icon: "$FIconPersonAFill", value: "me" },
  ],
};

export const NoText = Template.bind({});
NoText.args = {
  items: [
    { icon: "$FIconHomeFill", value: "home" },
    { icon: "$FIconMarketFill", value: "market" },
    { icon: "$FIconSwapFill", value: "swap" },
    { icon: "$FIconPersonAFill", value: "me" },
  ],
};

export const Href = Template.bind({});
Href.args = {
  items: [
    { icon: "$FIconHomeFill", href: "/" },
    { icon: "$FIconMarketFill", href: "/market" },
    { icon: "$FIconSwapFill", value: "/swap" },
    { icon: "$FIconPersonAFill", value: "/me" },
  ],
};

export const Slots: StoryFn<typeof FBottomNav> = (args) => ({
  components: { FBottomNav },
  setup() {
    return { args };
  },
  template: `
    <span>{{ model }}</span>
    <FBottomNav>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconHomeFill</VIcon>
        <span class="f-bottom-nav__text">Home</span>
      </FButton>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconMarketFill</VIcon>
        <span class="f-bottom-nav__text">Market</span>
      </FButton>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconSwapFill</VIcon>
        <span class="f-bottom-nav__text">Swap</span>
      </FButton>
    </FBottomNav>
  `,
});
