var p=Object.defineProperty;var o=(t,e)=>p(t,"name",{value:e,configurable:!0});import{F as r,a as n,c as a}from"./assets.56d1f40c.js";import{r as s}from"./vue.esm-bundler.330b8bcd.js";import"./FModal.6bf61d27.js";import"./FButton.d034f6f2.js";import"./VBtn.e55e9e37.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./VIcon.c758310f.js";import"./color.66c7a00f.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./dimensions.6590eaa4.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./VDialog.a4bfe643.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.d681ab18.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./display.b3319b10.js";import"./createSimpleFunctional.05bfccd4.js";import"./VAvatar.f79052e0.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./FListItem.cff3e166.js";import"./VListItem.4533e071.js";import"./FAssetLogo.fc73f2f7.js";import"./VLazy.fba54de2.js";import"./VList.318061a0.js";import"./index.a5e0d629.js";import"./VDivider.a69cf6f1.js";import"./FAssetSelectField.c9b84b6e.js";import"./FSearchInput.3fae5f4a.js";import"./FInput.3389dce9.js";import"./number.ea2b3954.js";import"./VTextField.d9025984.js";import"./VCounter.a5b91a3f.js";import"./VInput.3a20875e.js";import"./VMessages.206e4d2e.js";const nt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.381919f1.js.map
