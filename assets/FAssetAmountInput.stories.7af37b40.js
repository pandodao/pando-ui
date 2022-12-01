var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{d as e}from"./vue.esm-bundler.03d0f9c2.js";import{F as a}from"./FAssetAmountInput.f0744640.js";import{F as c}from"./FAssetInputTools.d59af979.js";import{a as m}from"./assets.1d8eb205.js";import{e as l}from"./FInput.0625b872.js";import"./FAssetSelect.a364511f.js";import"./FModal.2828546c.js";import"./FButton.2e1405fc.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./helpers.11996f79.js";import"./useRender.4b8f74ab.js";import"./variant.89df963d.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./VIcon.48347d4a.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./createSimpleFunctional.80c809ed.js";import"./VAvatar.bb0c21d9.js";import"./VImg.40b0c651.js";import"./index.7705c375.js";import"./transition.37736cb0.js";import"./forwardRefs.c5465513.js";import"./scopeId.adb6c097.js";import"./VOverlay.07008e41.js";import"./easing.d7926d43.js";import"./display.8ad1f519.js";import"./FListItem.689549fe.js";import"./FAssetLogo.cc338389.js";import"./VLazy.17fb2cc6.js";import"./index.98b5e059.js";import"./VDivider.19c63c46.js";import"./FAssetSelectField.ea09c97f.js";import"./FSearchInput.6dd3f7b5.js";import"./VMessages.cbf0f59f.js";import"./VLabel.f4f94bb7.js";const mt={parameters:{storySource:{source:`import { ref } from "vue";
import { FAssetAmountInput } from "./FAssetAmountInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  name: "FAssetAmountInput",
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
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets">
      <template #tools>
        <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
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
};

export const WithError = Template2.bind({});
WithError.args = {
  fullfilled: false,
  hideDefaultMessages: true,
  errorMessages: ["Amount is require"],
};
`,locationsMap:{default:{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-rules":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-tools":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-error":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}}}}},name:"FAssetAmountInput",component:a},i=r(t=>({components:{FAssetAmountInput:a},setup(){const s=e(null),o=e("");return{args:t,asset:s,amount:o,assets:m.map(n=>l(n))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template1"),p=r(t=>({components:{FAssetAmountInput:a,FAssetInputTools:c},setup(){const s=e(null),o=e("");return{args:t,asset:s,amount:o,assets:m.map(n=>l(n))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets">
      <template #tools>
        <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template2"),A=i.bind({});A.args={fullfilled:!1};const d=i.bind({});d.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const f=p.bind({});f.args={fullfilled:!1};const F=p.bind({});F.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const lt=["Default","WithRules","WithTools","WithError"];export{A as Default,F as WithError,d as WithRules,f as WithTools,lt as __namedExportsOrder,mt as default};
//# sourceMappingURL=FAssetAmountInput.stories.7af37b40.js.map
