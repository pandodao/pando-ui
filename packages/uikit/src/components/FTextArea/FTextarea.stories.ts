// import { FTextarea } from "./FTextarea";
import { VTextarea as FTextarea } from "vuetify/components";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "FTextarea",
  component: FTextarea,
} as Meta<typeof FTextarea>;

const Template: StoryFn<typeof FTextarea> = (args) => ({
  components: { FTextarea },
  setup() {
    return { args };
  },
  template: '<FTextarea v-bind="args" label="Label-textarea"></FTextarea>',
});

export const Default = Template.bind({});
Default.args = { color: "", bgColor: "" };
