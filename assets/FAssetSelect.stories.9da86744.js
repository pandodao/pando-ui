var p=Object.defineProperty;var o=(t,e)=>p(t,"name",{value:e,configurable:!0});import{F as r,a as n,c as a}from"./assets.0fcaa6dc.js";import{r as s}from"./vue.esm-bundler.06cbf4f3.js";import"./FModal.af77241e.js";import"./FButton.042bb067.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.99ed030c.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./display.f0408c25.js";import"./createSimpleFunctional.917a427b.js";import"./VAvatar.d0341de2.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./FListItem.f16980b8.js";import"./VListItem.52553c7c.js";import"./FAssetLogo.2cb09797.js";import"./VLazy.617c76cf.js";import"./VList.ed5b86d0.js";import"./index.b7dbf2f4.js";import"./VDivider.9ab6906e.js";import"./FAssetSelectField.56da3f1f.js";import"./FSearchInput.b5b40896.js";import"./FInput.15987765.js";import"./number.ea2b3954.js";import"./VTextField.d88de585.js";import"./VCounter.19239368.js";import"./VInput.747c82dc.js";import"./VMessages.4767cc10.js";const nt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.9da86744.js.map
