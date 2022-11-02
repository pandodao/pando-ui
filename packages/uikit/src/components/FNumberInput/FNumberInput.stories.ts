import { FNumberInput } from "./FNumberInput";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "FNumberInput",
  component: FNumberInput,
} as Meta<typeof FNumberInput>;

const Template: StoryFn<typeof FNumberInput> = (args) => ({
  components: { FNumberInput },
  setup() {
    const num = ref("");

    return { args, num };
  },
  template: `
    <FNumberInput v-model="num" v-bind="args" placeholder="Input Number" />
    {{num}}
  `,
});

export const Default = Template.bind({});
Default.args = {};
