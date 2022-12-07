import { FPhoneInput } from "./FPhoneInput";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/FPhoneInput",
  component: FPhoneInput,
} as Meta<typeof FPhoneInput>;

const Template: StoryFn<typeof FPhoneInput> = (args) => ({
  components: { FPhoneInput },
  setup() {
    const code = ref("86");
    const number = ref("");

    return { args, code, number };
  },
  template: `<FPhoneInput v-model:code="code" v-model="number" />`,
});

export const Default = Template.bind({});
Default.args = {};
