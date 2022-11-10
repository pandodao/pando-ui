import { FQRCode } from "./FQRCode";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FQRCode",
  component: FQRCode,
} as Meta<typeof FQRCode>;

const Template: StoryFn<typeof FQRCode> = (args) => ({
  components: { FQRCode },
  setup() {
    return { args };
  },
  template: `<FQRCode v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = { text: "Hello", size: 128 };
