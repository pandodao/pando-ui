import { FAssetSelect } from "./FAssetSelect";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  title: "Components/FAssetSelect",
  component: FAssetSelect,
} as Meta<typeof FAssetSelect>;

const Template: StoryFn<typeof FAssetSelect> = (args) => ({
  components: { FAssetSelect },
  setup() {
    const dialog = ref(false);
    const asset = ref(null);

    return {
      args,
      dialog,
      asset,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: `
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  `,
});

export const Default = Template.bind({});

Default.args = {
  showName: false,
  desktop: "menu",
  maxWidth: 400,
};

const Template2: StoryFn<typeof FAssetSelect> = (args) => ({
  components: { FAssetSelect },
  setup() {
    const dialog = ref(false);
    const asset = ref(null);

    return {
      args,
      dialog,
      asset,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: `
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args">
      <template #activator="{ props }">
        <FButton v-bind="props" color="primary">Select</FButton>
      </template>
    </FAssetSelect>
  `,
});

export const Slots = Template2.bind({});
