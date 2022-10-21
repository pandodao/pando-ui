import { FButton } from "./FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "FButton",
  component: FButton,
} as Meta<typeof FButton>;

const Template: any = (args) => ({
  components: { FButton },
  setup() {
    return { args };
  },
  template: '<FButton v-bind="args">It is a Button</FButton>',
});

// color
export const Color = Template.bind({});
Color.args = { color: "primary" };

//disabled
export const Disabled = Template.bind({});
Disabled.args = { disabled: true, color: "primary" };

// loading
export const Loading = Template.bind({});
Loading.args = { loading: true, color: "primary" };

// style
export const Text: StoryFn<typeof FButton> = () => ({
  components: { FButton },
  template: `
    <div style="display: flex; gap: 16px;">
      <FButton text>Button</FButton>
      <FButton text color="primary">Button</FButton>
    </div>
  `,
});

// size
export const Sizes: StoryFn<typeof FButton> = () => ({
  components: { FButton },
  template: `
    <div style="display: flex; gap: 16px;">
      <FButton color="primary" size="x-small">x-small</FButton>
      <FButton color="primary" size="small">small</FButton>
      <FButton color="primary" size="default">default</FButton>
      <FButton color="primary" size="large">large</FButton>
      <FButton color="primary" size="x-large">x-large</FButton>
    </div>
  `,
});
