import { FAssetInputTools } from "./FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FAssetInputTools",
  component: FAssetInputTools,
} as Meta<typeof FAssetInputTools>;

const Template: StoryFn<typeof FAssetInputTools> = (args) => ({
  components: { FAssetInputTools },
  setup() {
    return { args };
  },
  template: `
  <FAssetInputTools v-bind="args">
    <template #append-left>
      <VIcon size="12">$check</VIcon>
    </template>
  </FAssetInputTools>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Connected = Template.bind({});
Connected.args = { connected: true, balance: "1,000" };

export const NotFillable = Template.bind({});
NotFillable.args = { connected: true, balance: "1,000", fillable: false };

export const FiatAmount = Template.bind({});
FiatAmount.args = { connected: true, balance: "1,213", fiatAmount: "$5,000" };

export const Messages = Template.bind({});
Messages.args = {
  connected: true,
  balance: "1,213",
  fiatAmount: "$5,000",
  messages: ["Amount is required"],
};
