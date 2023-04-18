var n=Object.defineProperty;var o=(t,e)=>n(t,"name",{value:e,configurable:!0});import{F as r,a as p}from"./assets.59956f03.js";import{r as s}from"./vue.esm-bundler.b09b7c5a.js";import{c as a}from"./helpers.96e9126c.js";import"./FModal.edcf514e.js";import"./FButton.fd5dc93c.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VIcon.81f7ecc0.js";import"./color.1fec8f8e.js";import"./variant.eababd72.js";import"./proxiedModel.f0d8de9f.js";import"./index.eca3ba9a.js";import"./dimensions.b549aab6.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./VDialog.f3d85c11.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.4718cec8.js";import"./easing.36b781ab.js";import"./transition.1a560eae.js";import"./display.fd968d5a.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VAvatar.84448bc0.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./FListItem.62927a00.js";import"./VListItem.679e6b02.js";import"./FAssetLogo.14e1d903.js";import"./VLazy.292cd780.js";import"./VList.eb773df7.js";import"./index.38f7dd54.js";import"./VDivider.a6c176d7.js";import"./FAssetSelectField.2ab09210.js";import"./FSearchInput.c05c1a18.js";import"./FInput.f0bd3585.js";import"./number.d5e09512.js";import"./VTextField.32fb86ed.js";import"./VCounter.d53e5345.js";import"./VInput.c9d6b09b.js";import"./VMessages.02e1bfc3.js";const lt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.d744ead5.js.map
