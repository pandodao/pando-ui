var i=Object.defineProperty;var s=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as r,a as p,c as a}from"./assets.1372edf9.js";import{r as o}from"./vue.esm-bundler.62cdaeff.js";import"./FModal.e70a199e.js";import"./FButton.7a11c708.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./VIcon.ddcbca9b.js";import"./color.5ac0909d.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.49a3aceb.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./display.21f5d2fe.js";import"./createSimpleFunctional.f6324448.js";import"./VAvatar.8eec326e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./FListItem.2d41da5b.js";import"./VListItem.ad71f0c6.js";import"./FAssetLogo.dc864486.js";import"./VLazy.8ad79713.js";import"./VList.0fe739a2.js";import"./index.31ee38b0.js";import"./VDivider.1215dc57.js";import"./FAssetSelectField.75c93540.js";import"./FSearchInput.762e7f63.js";import"./FInput.33440f61.js";import"./number.ea2b3954.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./VInput.7941d77b.js";import"./VMessages.c418de83.js";const pt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.f64ad493.js.map
