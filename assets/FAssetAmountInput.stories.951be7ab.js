var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{d as e}from"./vue.esm-bundler.0d7c29ee.js";import{F as a}from"./FAssetAmountInput.b9f4b62c.js";import{F as c}from"./FAssetInputTools.57badf86.js";import{a as m}from"./assets.1d8eb205.js";import{c as l}from"./FInput.cc1e9cf7.js";import"./FAssetSelect.c02569e5.js";import"./FModal.1ffcee23.js";import"./FButton.c94e3704.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./createSimpleFunctional.e0d25bf4.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./forwardRefs.c5465513.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";import"./FListItem.ffbaa156.js";import"./FAssetLogo.abcf4585.js";import"./VLazy.299616ae.js";import"./index.e4eb9e0e.js";import"./VDivider.23958762.js";import"./FAssetSelectField.0a3080f2.js";import"./FSearchInput.51b8ce83.js";import"./VMessages.5340d354.js";import"./VCounter.af1b4b68.js";import"./VInput.76852b74.js";const lt={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template2"),A=i.bind({});A.args={fullfilled:!1};const d=i.bind({});d.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const f=p.bind({});f.args={fullfilled:!1};const F=p.bind({});F.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const it=["Default","WithRules","WithTools","WithError"];export{A as Default,F as WithError,d as WithRules,f as WithTools,it as __namedExportsOrder,lt as default};
//# sourceMappingURL=FAssetAmountInput.stories.951be7ab.js.map
