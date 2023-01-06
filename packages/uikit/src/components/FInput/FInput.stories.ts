import { FInput } from "./FInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/FInput",
  component: FInput,
} as Meta<typeof FInput>;

const Template: StoryFn<typeof FInput> = (args) => ({
  components: { FInput },
  template: `
    <div style="display: grid; gap: 16px;">
      <FInput v-model="text" placeholder="Placeholder" :rules="rules" v-bind="args" />
    </div>
  `,
  setup() {
    const text = ref("Default");
    const rules = [(v) => !!v || "Field is required"];

    return { rules, args, text };
  },
});

export const Default = Template.bind({});
Default.args = {
  loading: false,
  singleLine: true,
  disabled: false,
  label: "Label",
};

export const NumberInput: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  setup() {
    const num = ref("");
    const rules = [(v) => !v || "Field is required"];

    return { num, rules };
  },
  template: `
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  `,
});

export const WithTools: StoryFn<typeof FInput> = () => ({
  components: { FInput, FAssetInputTools },
  setup() {
    const num = ref("");

    return { num };
  },
  template: `
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `,
});

export const Slots: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  setup() {},
  template: `
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  `,
});
