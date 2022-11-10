import { FDivider } from "./FDivider";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FDivider",
  component: FDivider,
} as Meta<typeof FDivider>;

const Template: StoryFn<typeof FDivider> = (args) => ({
  components: { FDivider },

  setup() {
    return { args };
  },

  template: `
    <div class='pa-5'>
      <FDivider v-bind="args"></FDivider>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = { size: 8, color: "greyscale_6" };
