var p=Object.defineProperty;var o=(t,e)=>p(t,"name",{value:e,configurable:!0});import{F as r,a as n,c as a}from"./assets.b0200c3c.js";import{r as s}from"./vue.esm-bundler.a5c4e1bf.js";import"./FModal.4fd09b84.js";import"./FButton.f3fc7c21.js";import"./VBtn.b5444450.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./VIcon.5ca83e1b.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./locale.76e208ea.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VDialog.8e3a7441.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./easing.36b781ab.js";import"./transition.c93b8895.js";import"./createSimpleFunctional.f00f4b71.js";import"./VAvatar.da185431.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./display.1bd9c9dd.js";import"./FListItem.cae78cf5.js";import"./VListItem.c102cb0b.js";import"./FAssetLogo.5a526eb7.js";import"./VLazy.ecac20e0.js";import"./VList.f6b5b9eb.js";import"./index.628b3df7.js";import"./VDivider.c33525c0.js";import"./FAssetSelectField.2424bebb.js";import"./FSearchInput.81c5249a.js";import"./FInput.4a7d7292.js";import"./number.ea2b3954.js";import"./VTextField.cc6d2074.js";import"./VCounter.536d06c5.js";import"./VInput.34db0c3a.js";import"./VMessages.90062972.js";const nt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets"></FAssetSelect>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:28},startBody:{col:47,line:12},endBody:{col:2,line:28}}}}},title:"Components/FAssetSelect",component:r},l=o(t=>({components:{FAssetSelect:r},setup(){const e=s(!1),m=s(null);return{args:t,dialog:e,asset:m,assets:n.map(i=>a(i))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets"></FAssetSelect>
  `}),"Template"),c=l.bind({});c.args={};const at=["Default"];export{c as Default,at as __namedExportsOrder,nt as default};
//# sourceMappingURL=FAssetSelect.stories.ee43d158.js.map
