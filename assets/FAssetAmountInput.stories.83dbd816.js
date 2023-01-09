var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.a5c4e1bf.js";import{F as m}from"./FAssetAmountInput.f1130245.js";import{F as c}from"./FAssetInputTools.884eeec7.js";import{a,c as l}from"./assets.b0200c3c.js";import"./FInput.4a7d7292.js";import"./number.ea2b3954.js";import"./VTextField.cc6d2074.js";import"./VCounter.536d06c5.js";import"./index.628b3df7.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./VInput.34db0c3a.js";import"./color.43314d1d.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./proxiedModel.9639363f.js";import"./locale.76e208ea.js";import"./VMessages.90062972.js";import"./transition.c93b8895.js";import"./loader.7d1fab10.js";import"./rounded.a0c73c18.js";import"./easing.36b781ab.js";import"./index.549b0914.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.2424bebb.js";import"./FAssetLogo.5a526eb7.js";import"./VImg.19441548.js";import"./dimensions.b6fbc401.js";import"./FButton.f3fc7c21.js";import"./VBtn.b5444450.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VSpacer.3c3f34f8.js";import"./createSimpleFunctional.f00f4b71.js";import"./FModal.4fd09b84.js";import"./VDialog.8e3a7441.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./VAvatar.da185431.js";import"./display.1bd9c9dd.js";import"./FListItem.cae78cf5.js";import"./VListItem.c102cb0b.js";import"./VLazy.ecac20e0.js";import"./VList.f6b5b9eb.js";import"./VDivider.c33525c0.js";import"./FSearchInput.81c5249a.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
import { FAssetAmountInput } from "./FAssetAmountInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  title: "Components/FAssetAmountInput",
  component: FAssetAmountInput,
} as Meta<typeof FAssetAmountInput>;

const Template1: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput },
  setup() {
    const asset = ref(null);
    const amount = ref("");

    return {
      args,
      asset,
      amount,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>\`,
});

const Template2: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput, FAssetInputTools },
  setup() {
    const asset = ref(null);
    const amount = ref("");

    return {
      args,
      asset,
      amount,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  \`,
});

export const Default = Template1.bind({});
Default.args = { fullfilled: false };

export const WithRules = Template1.bind({});
WithRules.args = {
  fullfilled: false,
  rules: [(v) => !!v || "Amount is require"],
};

export const WithTools = Template2.bind({});
WithTools.args = {
  fullfilled: false,
  connected: false,
};

export const WithError = Template2.bind({});
WithError.args = {
  fullfilled: false,
  hideDefaultMessages: true,
  errorMessages: ["Amount is require"],
};
`,locationsMap:{default:{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-rules":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-tools":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-error":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}}}}},title:"Components/FAssetAmountInput",component:m},i=r(t=>({components:{FAssetAmountInput:m},setup(){const s=e(null),o=e("");return{args:t,asset:s,amount:o,assets:a.map(n=>l(n))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template1"),p=r(t=>({components:{FAssetAmountInput:m,FAssetInputTools:c},setup(){const s=e(null),o=e("");return{args:t,asset:s,amount:o,assets:a.map(n=>l(n))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template2"),d=i.bind({});d.args={fullfilled:!1};const A=i.bind({});A.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const f=p.bind({});f.args={fullfilled:!1,connected:!1};const F=p.bind({});F.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const gt=["Default","WithRules","WithTools","WithError"];export{d as Default,F as WithError,A as WithRules,f as WithTools,gt as __namedExportsOrder,Ft as default};
//# sourceMappingURL=FAssetAmountInput.stories.83dbd816.js.map
