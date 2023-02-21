var i=Object.defineProperty;var s=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as r,a as p,c as a}from"./assets.e02cf137.js";import{r as o}from"./vue.esm-bundler.60beb779.js";import"./FModal.e9ae3117.js";import"./FButton.7fb5afc5.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./VIcon.ccd22ecd.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";import"./VDialog.74ee3f5c.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.6564e1f3.js";import"./easing.36b781ab.js";import"./transition.d5d90e7e.js";import"./display.49866675.js";import"./createSimpleFunctional.057254cd.js";import"./VAvatar.709f16cb.js";import"./VImg.79a3bf78.js";import"./index.41c719a2.js";import"./FListItem.69cc58eb.js";import"./VListItem.e48c8813.js";import"./FAssetLogo.a76723bd.js";import"./VLazy.dfd7813b.js";import"./VList.3d3d7549.js";import"./index.2f1043ab.js";import"./VDivider.7d468152.js";import"./FAssetSelectField.d9190ffa.js";import"./FSearchInput.a6aa5690.js";import"./FInput.47c266c5.js";import"./number.ea2b3954.js";import"./VTextField.8e117680.js";import"./VCounter.602ed76e.js";import"./VInput.9d434e05.js";import"./VMessages.e9237a13.js";const pt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:28},startBody:{col:47,line:12},endBody:{col:2,line:28}}}}},title:"Components/FAssetSelect",component:r},l=s(t=>({components:{FAssetSelect:r},setup(){const e=o(!1),m=o(null);return{args:t,dialog:e,asset:m,assets:p.map(n=>a(n))}},template:`
    <FAssetSelect v-model:dialog="dialog" v-model:asset="asset" :assets="assets" v-bind="args"></FAssetSelect>
  `}),"Template"),c=l.bind({});c.args={showName:!1};const at=["Default"];export{c as Default,at as __namedExportsOrder,pt as default};
//# sourceMappingURL=FAssetSelect.stories.42b2d76d.js.map
