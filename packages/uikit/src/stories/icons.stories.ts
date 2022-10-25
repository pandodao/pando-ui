import meta from "@foxone/icons/src/meta.json";
import { StoryFn } from "@storybook/vue3";
import { FIcons } from "./FIcons";

export default {
  title: "Icons",
  component: FIcons,
};

const Template: StoryFn<any> = (args) => ({
  name: "Icons",
  components: { FIcons },
  setup() {
    return { args };
  },
  template: `
   <FIcons v-bind="args"></FIcons>
  `,
});

const outlines = meta.outline.map((icon) => "$" + icon.componentName);

export const Fill = Template.bind({});
Fill.args = { icons: meta.fill.map((icon) => "$" + icon.componentName) };

export const Outline = Template.bind({});
Outline.args = { icons: outlines };

export const Colorful = Template.bind({});
Colorful.args = {
  icons: meta.colorful.map((icon) => "$" + icon.componentName),
};
