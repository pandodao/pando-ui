import { FTextarea } from "./FTextarea";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FTextarea",
  component: FTextarea,
} as Meta<typeof FTextarea>;

const Template: StoryFn<typeof FTextarea> = (args) => ({
  components: { FTextarea },
  setup() {
    return { args };
  },
  template: '<FTextarea v-bind="args" placeholder="Text..."></FTextarea>',
});

export const Default = Template.bind({});
Default.args = {};

const Template2: StoryFn<typeof FTextarea> = (args) => ({
  components: { FTextarea },
  setup() {
    return { args };
  },
  template: `
    <FTextarea v-bind="args"  auto-grow placeholder="Text...">
      <template #prepend>
        <VIcon>$expand</VIcon>
      </template>
      <template #prepend-inner>
        <VIcon>$expand</VIcon>
      </template>
      <template #append>
        <VIcon>$expand</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$expand</VIcon>
      </template>
    </FTextarea>
  `,
});

export const Slots = Template2.bind({});
