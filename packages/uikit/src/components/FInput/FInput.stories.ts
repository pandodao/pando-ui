import { FInput } from "./FInput";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "FInput",
  component: FInput,
} as Meta<typeof FInput>;

// Variant
export const Variant: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  template: `
    <div style="display: grid; gap: 16px;">
      <FInput label="Default" placeholder="Placeholder" :rules="rules" />
      <FInput label="Outlined" placeholder="Placeholder" :rules="rules" variant="outlined" />
      <FInput label="Solo" placeholder="Placeholder" :rules="rules" variant="solo" />
      <FInput label="Underline" placeholder="Placeholder" :rules="rules" variant="underlined" />
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
      <FInput label="Default" placeholder="Placeholder" :rules="rules" single-line />
      <FInput label="Outlined" placeholder="Placeholder" :rules="rules" variant="outlined" single-line />
      <FInput label="Solo" placeholder="Placeholder" :rules="rules" variant="solo" single-line />
      <FInput label="Underline" placeholder="Placeholder" :rules="rules" variant="underlined" single-line />
    </div>
  `,
  setup() {
    const rules = [(v) => !v || "Field is required"];

    return { rules };
  },
});
