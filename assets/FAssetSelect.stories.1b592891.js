var i=Object.defineProperty;var s=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as r}from"./FAssetSelect.a364511f.js";import{d as o}from"./vue.esm-bundler.03d0f9c2.js";import{a as p}from"./assets.1d8eb205.js";import{e as a}from"./FInput.0625b872.js";import"./FModal.2828546c.js";import"./FButton.2e1405fc.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./helpers.11996f79.js";import"./useRender.4b8f74ab.js";import"./variant.89df963d.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./VIcon.48347d4a.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./createSimpleFunctional.80c809ed.js";import"./VAvatar.bb0c21d9.js";import"./VImg.40b0c651.js";import"./index.7705c375.js";import"./transition.37736cb0.js";import"./forwardRefs.c5465513.js";import"./scopeId.adb6c097.js";import"./VOverlay.07008e41.js";import"./easing.d7926d43.js";import"./display.8ad1f519.js";import"./FListItem.689549fe.js";import"./FAssetLogo.cc338389.js";import"./VLazy.17fb2cc6.js";import"./index.98b5e059.js";import"./VDivider.19c63c46.js";import"./FAssetSelectField.ea09c97f.js";import"./FSearchInput.6dd3f7b5.js";import"./VLabel.f4f94bb7.js";import"./VMessages.cbf0f59f.js";const tt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  name: "FAssetSelect",
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
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets"></FAssetSelect>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:28},startBody:{col:47,line:12},endBody:{col:2,line:28}}}}},name:"FAssetSelect",component:r},l=s(t=>({components:{FAssetSelect:r},setup(){const e=o(!1),m=o(null);return{args:t,dialog:e,asset:m,assets:p.map(n=>a(n))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets"></FAssetSelect>
  `}),"Template"),c=l.bind({});c.args={};const et=["Default"];export{c as Default,et as __namedExportsOrder,tt as default};
//# sourceMappingURL=FAssetSelect.stories.1b592891.js.map
