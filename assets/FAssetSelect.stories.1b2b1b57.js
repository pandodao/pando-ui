var i=Object.defineProperty;var r=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as a,a as m}from"./assets.52e2b338.js";import{r as s}from"./vue.esm-bundler.80cafc0b.js";import{c as p}from"./helpers.c6c91249.js";import"./FModal.ac7dde43.js";import"./FButton.5e8d1e13.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./easing.da2e9236.js";import"./display.1ed39e23.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./createSimpleFunctional.19425ddc.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./FListItem.b2ca06e9.js";import"./VListItem.da04c970.js";import"./FAssetLogo.b5a60381.js";import"./VLazy.d1caeda2.js";import"./VList.c8ed43d6.js";import"./index.b676db0f.js";import"./ssrBoot.e8acd638.js";import"./VDivider.7c8b3fdb.js";import"./FAssetSelectField.826cea61.js";import"./FSearchInput.d7e59333.js";import"./FInput.ee50ce76.js";import"./bignumber.8dc24abd.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./VInput.44c51e7f.js";import"./VMessages.8e887dfb.js";const ct={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
  template: \`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  \`,
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
  template: \`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args">
      <template #activator="{ props }">
        <FButton v-bind="props" color="primary">Select</FButton>
      </template>
    </FAssetSelect>
  \`,
});

export const Slots = Template2.bind({});
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:28},startBody:{col:47,line:12},endBody:{col:2,line:28}},slots:{startLoc:{col:48,line:38},endLoc:{col:2,line:58},startBody:{col:48,line:38},endBody:{col:2,line:58}}}}},title:"Components/FAssetSelect",component:a},l=r(t=>({components:{FAssetSelect:a},setup(){const e=s(!1),o=s(null);return{args:t,dialog:e,asset:o,assets:m.map(n=>p(n))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  `}),"Template"),c=l.bind({});c.args={showName:!1,desktop:"menu",maxWidth:400};const d=r(t=>({components:{FAssetSelect:a},setup(){const e=s(!1),o=s(null);return{args:t,dialog:e,asset:o,assets:m.map(n=>p(n))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args">
      <template #activator="{ props }">
        <FButton v-bind="props" color="primary">Select</FButton>
      </template>
    </FAssetSelect>
  `}),"Template2"),dt=d.bind({}),ft=["Default","Slots"];export{c as Default,dt as Slots,ft as __namedExportsOrder,ct as default};
//# sourceMappingURL=FAssetSelect.stories.1b2b1b57.js.map
