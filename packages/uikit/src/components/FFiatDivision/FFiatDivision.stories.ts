import { FFiatDivision } from "./FFiatDivision";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FFiatDivision",
  component: FFiatDivision,
} as Meta<typeof FFiatDivision>;

const Template: StoryFn<typeof FFiatDivision> = (args) => ({
  components: { FFiatDivision },
  setup() {
    return { args };
  },
  template: `<FFiatDivision v-bind="args"></FFiatDivision>`,
});

const parts = new Intl.NumberFormat("en", {
  currency: "USD",
  style: "currency",
}).formatToParts(121212);

export const Default = Template.bind({});
Default.args = { parts };

export const String = Template.bind({});
String.args = { parts: "0" };
