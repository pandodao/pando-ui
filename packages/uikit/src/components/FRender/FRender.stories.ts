import { h } from "vue";
import { FRender } from "./FRender";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FRender",
  component: FRender,
} as Meta<typeof FRender>;

const Template: StoryFn<typeof FRender> = (args) => ({
  components: { FRender },
  setup() {
    return { args };
  },
  template: `
    <FRender v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = { content: h("span", "123223") };

export const String = Template.bind({});
String.args = { content: "121212" };
