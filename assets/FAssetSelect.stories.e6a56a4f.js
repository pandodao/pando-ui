var i=Object.defineProperty;var s=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as r}from"./FAssetSelect.c02569e5.js";import{d as o}from"./vue.esm-bundler.0d7c29ee.js";import{a as p}from"./assets.1d8eb205.js";import{c as a}from"./FInput.cc1e9cf7.js";import"./FModal.1ffcee23.js";import"./FButton.c94e3704.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./createSimpleFunctional.e0d25bf4.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./forwardRefs.c5465513.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";import"./FListItem.ffbaa156.js";import"./FAssetLogo.abcf4585.js";import"./VLazy.299616ae.js";import"./index.e4eb9e0e.js";import"./VDivider.23958762.js";import"./FAssetSelectField.0a3080f2.js";import"./FSearchInput.51b8ce83.js";import"./VCounter.af1b4b68.js";import"./VInput.76852b74.js";import"./VMessages.5340d354.js";const et={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
  `}),"Template"),c=l.bind({});c.args={};const st=["Default"];export{c as Default,st as __namedExportsOrder,et as default};
//# sourceMappingURL=FAssetSelect.stories.e6a56a4f.js.map
