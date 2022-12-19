import meta from "@foxone/icons/src/meta.json";
import { StoryFn } from "@storybook/vue3";
import { FIcons } from "./FIcons";

export default {
  title: "Icons/FIcons",
  component: FIcons,
};

const Template: StoryFn<typeof FIcons> = (args) => ({
  name: "Icons",
  components: { FIcons },
  setup() {
    return { args };
  },
  template: `
   <FIcons v-bind="args"></FIcons>
  `,
});

export const Fill = Template.bind({});
Fill.args = { icons: meta.fill.map((icon) => icon.componentName) };

export const Outline = Template.bind({});
Outline.args = { icons: meta.outline.map((icon) => icon.componentName) };

export const Colorful = Template.bind({});
Colorful.args = {
  icons: meta.colorful.map((icon) => icon.componentName),
};
