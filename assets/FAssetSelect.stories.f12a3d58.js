var n=Object.defineProperty;var o=(t,e)=>n(t,"name",{value:e,configurable:!0});import{F as r,a as p}from"./assets.5d23134f.js";import{r as s}from"./vue.esm-bundler.3b29098a.js";import{c as a}from"./helpers.96e9126c.js";import"./FModal.4db458cf.js";import"./FButton.72dd92af.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./VIcon.c254d683.js";import"./color.fef4ce02.js";import"./variant.be65e42d.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./VDialog.8fdf9bea.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.e2cb60a6.js";import"./easing.36b781ab.js";import"./transition.94342caf.js";import"./display.f5b0b65d.js";import"./createSimpleFunctional.b1ebbe28.js";import"./VAvatar.ab09abd9.js";import"./VImg.78cc729b.js";import"./index.1414bb4a.js";import"./FListItem.b41d1377.js";import"./VListItem.aa6733a2.js";import"./FAssetLogo.9456d591.js";import"./VLazy.ef579524.js";import"./VList.ce24c533.js";import"./index.f8ee2712.js";import"./VDivider.cb2315f4.js";import"./FAssetSelectField.15777a49.js";import"./FSearchInput.0d05f75d.js";import"./FInput.3756ea4b.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./VInput.f50d7073.js";import"./VMessages.ff964b60.js";const lt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
};
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:28},startBody:{col:47,line:12},endBody:{col:2,line:28}}}}},title:"Components/FAssetSelect",component:r},l=o(t=>({components:{FAssetSelect:r},setup(){const e=s(!1),m=s(null);return{args:t,dialog:e,asset:m,assets:p.map(i=>a(i))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  `}),"Template"),c=l.bind({});c.args={showName:!1};const ct=["Default"];export{c as Default,ct as __namedExportsOrder,lt as default};
//# sourceMappingURL=FAssetSelect.stories.f12a3d58.js.map
