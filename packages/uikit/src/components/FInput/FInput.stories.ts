import { FInput } from "./FInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "FInput",
  component: FInput,
} as Meta<typeof FInput>;

// Variant
export const Variant: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  template: `
    <div style="display: grid; gap: 16px;">
      <FInput label="Default" placeholder="Placeholder" :rules="rules" bg-color="greyscale_6" />
      <FInput label="Outlined" placeholder="Placeholder" :rules="rules" variant="outlined" />
    </div>
  `,
  setup() {
    const rules = [(v) => !v || "Field is required"];

    return { rules };
  },
});

// Single Line
export const SingleLine: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  template: `
    <div style="display: grid; gap: 16px;">
      <FInput label="Default" placeholder="Placeholder" :rules="rules" single-line bg-color="greyscale_6" />
      <FInput label="Outlined" placeholder="Placeholder" :rules="rules" variant="outlined" single-line />
    </div>
  `,
  setup() {
    const rules = [(v) => !v || "Field is required"];

    return { rules };
  },
});

export const NumberInput: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  setup() {
    const num = ref("");
    const rules = [(v) => !v || "Field is required"];

    return { num, rules };
  },
  template: `
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" bg-color="greyscale_6" />
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
