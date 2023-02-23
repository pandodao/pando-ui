var i=Object.defineProperty;var s=(t,e)=>i(t,"name",{value:e,configurable:!0});import{F as r,a as p,c as a}from"./assets.0a35c71b.js";import{r as o}from"./vue.esm-bundler.57aa1454.js";import"./FModal.b075f7f6.js";import"./FButton.95509114.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.2998aec7.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./display.8ac49ecd.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VAvatar.01c8c686.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./FListItem.39459486.js";import"./VListItem.f12d2f11.js";import"./FAssetLogo.a8055510.js";import"./VLazy.e8b6f832.js";import"./VList.8d2887de.js";import"./index.5cb25ca4.js";import"./VDivider.186db6a0.js";import"./FAssetSelectField.905e4907.js";import"./FSearchInput.de430b11.js";import"./FInput.be24e9fb.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./VInput.a59f36d0.js";import"./VMessages.7f48a74b.js";const pt={parameters:{storySource:{source:`import { FAssetSelect } from "./FAssetSelect";
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
//# sourceMappingURL=FAssetSelect.stories.7e3b74bf.js.map
