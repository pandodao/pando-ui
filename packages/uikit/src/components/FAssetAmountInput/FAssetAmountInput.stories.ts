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

const Template4: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput },
  setup() {
    const asset = ref({
      asset_id: "02a39171-dfc1-36d1-94c3-9e9725d59bbb",
      provider: "mixin",
      chain_id: "43d61dcd-e413-450d-80b8-101d5e903357",
      symbol: "ZIL",
      name: "Zilliqa",
      logo: "https://mixin-images.zeromesh.net/prUxZ_5EC6UYufpA3lYn7Sjiq8HeTCiZ7VsIFtso0sjZrck7T8oCHyaSKNwsrKAE82h1oxqAJM_hZsnRm-ZAIMc=s128",
      confirmations: 16,
      price_usd: "0.02306898",
      change_usd: "0.047327018826841996",
      balance: "0.00000001",
      destination: "0x4cC777dFb649b9Ebc524E78e7DA89f0916Dd0f24",
      tag: "",
    });
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

export const NotSelectable = Template4.bind({});
NotSelectable.args = {
  selectable: false,
};
