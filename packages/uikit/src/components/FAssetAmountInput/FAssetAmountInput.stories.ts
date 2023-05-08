import { ref } from "vue";
import { FAssetAmountInput } from "./FAssetAmountInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  title: "Components/FAssetAmountInput",
  component: FAssetAmountInput,
} as Meta<typeof FAssetAmountInput>;

const Template1: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput },
  setup() {
    const asset = ref(null);
    const amount = ref("");

    return {
      args,
      asset,
      amount,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: `<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>`,
});

const Template2: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput, FAssetInputTools },
  setup() {
    const asset = ref(null);
    const amount = ref("");

    return {
      args,
      asset,
      amount,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: `
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `,
});

export const Default = Template1.bind({});
Default.args = { fullfilled: false };

export const ThemeColor = Template1.bind({});
ThemeColor.args = { themeColor: "error" };

export const WithRules = Template1.bind({});
WithRules.args = {
  fullfilled: false,
  rules: [(v) => !!v || "Amount is require"],
};

export const WithTools = Template2.bind({});
WithTools.args = {
  fullfilled: false,
  connected: false,
};

export const WithError = Template2.bind({});
WithError.args = {
  fullfilled: false,
  hideDefaultMessages: true,
  errorMessages: ["Amount is require"],
};

const Template3: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput, FAssetInputTools },
  setup() {
    const asset = ref(null);
    const amount = ref("");
    const records = ref<string[]>([]);

    function handleUpdateRecords(value: string) {
      records.value.push(value);
    }

    function handleClearRecords() {
      records.value = [];
    }

    return {
      args,
      asset,
      amount,
      records,
      handleUpdateRecords,
      handleClearRecords,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: `
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" :records="records" placeholder="Amount" @update:records="handleUpdateRecords" @clear:records="handleClearRecords">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `,
});

export const WithRecords = Template3.bind({});
WithRecords.args = {
  showRecords: true,
};
