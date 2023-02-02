var p=Object.defineProperty;var o=(t,e)=>p(t,"name",{value:e,configurable:!0});import{F as r,a as n,c as a}from"./assets.e4531b9f.js";import{r as s}from"./vue.esm-bundler.1ba604f9.js";import"./FModal.3e0c2496.js";import"./FButton.da03e124.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./VIcon.518cdeb6.js";import"./color.b891a321.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./VDialog.0f487f73.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.16609424.js";import"./easing.36b781ab.js";import"./transition.ef0cc300.js";import"./display.de7ed398.js";import"./createSimpleFunctional.b271bf7a.js";import"./VAvatar.d7e1c088.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./FListItem.bc4f8297.js";import"./VListItem.d10786fb.js";import"./FAssetLogo.f27a6fba.js";import"./VLazy.87923590.js";import"./VList.7218b974.js";import"./index.a7472254.js";import"./VDivider.7223c023.js";import"./FAssetSelectField.b9914cfa.js";import"./FSearchInput.66fa1d18.js";import"./FInput.9dd39b60.js";import"./number.ea2b3954.js";import"./VTextField.44316fe6.js";import"./VCounter.5f12ac31.js";import"./VInput.857b8225.js";import"./VMessages.11ef5b61.js";const nt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.e0faa438.js.map
