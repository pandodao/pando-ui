var p=Object.defineProperty;var o=(t,e)=>p(t,"name",{value:e,configurable:!0});import{F as r,a as n,c as a}from"./assets.a2001c6e.js";import{r as s}from"./vue.esm-bundler.caa622c4.js";import"./FModal.a85ac45d.js";import"./FButton.b7201e41.js";import"./VBtn.abf41941.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./VIcon.f37f8177.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./VDialog.8fc91e8b.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.a16b5884.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./display.ef8c62e1.js";import"./createSimpleFunctional.2286a9cd.js";import"./VAvatar.91a1aacd.js";import"./VImg.cbbbed87.js";import"./index.fc60a169.js";import"./FListItem.3736709d.js";import"./VListItem.a560c4b3.js";import"./FAssetLogo.860d7590.js";import"./VLazy.387ee881.js";import"./VList.a6d8b9f9.js";import"./index.07e0e4c3.js";import"./VDivider.18b197de.js";import"./FAssetSelectField.cce52c84.js";import"./FSearchInput.0576b422.js";import"./FInput.9e64898c.js";import"./number.ea2b3954.js";import"./VTextField.dbd49551.js";import"./VCounter.4d5defc1.js";import"./VInput.353ca9d2.js";import"./VMessages.e864fdf2.js";const nt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.3aa71caa.js.map
