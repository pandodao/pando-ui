var n=Object.defineProperty;var o=(t,e)=>n(t,"name",{value:e,configurable:!0});import{F as r,a as p}from"./assets.dfe25f8f.js";import{r as s}from"./vue.esm-bundler.9500adb2.js";import{c as a}from"./helpers.96e9126c.js";import"./FModal.7ce358cf.js";import"./FButton.d61383cc.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VDialog.38dab5f5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.96b5c4e3.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./display.9827c8ac.js";import"./createSimpleFunctional.0b08b174.js";import"./VAvatar.9487a2f3.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./FListItem.7cf292ab.js";import"./VListItem.492edb65.js";import"./FAssetLogo.27fc628c.js";import"./VLazy.d4a61acd.js";import"./VList.408dac73.js";import"./index.c2993bc7.js";import"./VDivider.4dfba538.js";import"./FAssetSelectField.5d742c74.js";import"./FSearchInput.57fdcded.js";import"./FInput.1db1a978.js";import"./number.d5e09512.js";import"./VTextField.73cde862.js";import"./VCounter.a1a93cec.js";import"./VInput.33e34f4e.js";import"./VMessages.a0bdae17.js";const lt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.5c884dc5.js.map
