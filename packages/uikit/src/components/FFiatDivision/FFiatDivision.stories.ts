import { FFiatDivision } from "./FFiatDivision";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FFiatDivision",
  component: FFiatDivision,
} as Meta<typeof FFiatDivision>;

const Template: StoryFn<typeof FFiatDivision> = (args) => ({
  components: { FFiatDivision },
  setup() {
    const parts = new Intl.NumberFormat("en", {
      currency: "USD",
      style: "currency",
    }).formatToParts(121212);

    return { args, parts };
  },
  template: `<FFiatDivision :parts="parts" v-bind="args"></FFiatDivision>`,
});

export const Default = Template.bind({});
Default.args = {};
