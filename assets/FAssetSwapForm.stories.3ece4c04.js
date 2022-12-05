var u=Object.defineProperty;var n=(s,o)=>u(s,"name",{value:o,configurable:!0});import{d as t}from"./vue.esm-bundler.0d7c29ee.js";import{F as r}from"./FAssetSwapForm.7d59ccb0.js";import{F as l}from"./FAssetAmountInput.b9f4b62c.js";import{F as A}from"./FAssetInputTools.57badf86.js";import{a as c}from"./assets.1d8eb205.js";import{c as d}from"./FInput.cc1e9cf7.js";import"./FButton.c94e3704.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./VInput.76852b74.js";import"./VMessages.5340d354.js";import"./index.e4eb9e0e.js";import"./transition.845f9488.js";import"./forwardRefs.c5465513.js";import"./FAssetSelect.c02569e5.js";import"./FModal.1ffcee23.js";import"./createSimpleFunctional.e0d25bf4.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";import"./FListItem.ffbaa156.js";import"./FAssetLogo.abcf4585.js";import"./VLazy.299616ae.js";import"./VDivider.23958762.js";import"./FAssetSelectField.0a3080f2.js";import"./FSearchInput.51b8ce83.js";import"./VCounter.af1b4b68.js";const ut={parameters:{storySource:{source:`import { ref } from "vue";
import { FAssetSwapForm } from "./FAssetSwapForm";
import { FAssetAmountInput } from "../FAssetAmountInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { StoryFn, Meta } from "@storybook/vue3";
import assets from "../../data/assets.json";
import { convertMixinAsset } from "../../utils";

export default {
  name: "FAssetSwapForm",
  component: FAssetSwapForm,
} as Meta<typeof FAssetSwapForm>;

const Template: StoryFn<typeof FAssetSwapForm> = (args) => ({
  components: { FAssetSwapForm, FAssetAmountInput, FAssetInputTools },
  setup() {
    const inputAmount = ref("");
    const outputAmount = ref("");
    const inputAsset = ref(null);
    const outputAsset = ref(null);

    return {
      args,
      inputAmount,
      outputAmount,
      inputAsset,
      outputAsset,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`
    <FAssetSwapForm :loading="args.formLoading">
      <template #input>
        <FAssetAmountInput v-model:asset="inputAsset" v-model:amount="inputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>

      <template #output>
        <FAssetAmountInput v-model:asset="outputAsset" v-model:amount="outputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>
    </FAssetSwapForm>
  \`,
});

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  hideDefaultMessages: true,
  errorMessages: ["Amount is require"],
};

export const Loading = Template.bind({});
Loading.args = { formLoading: true };
`,locationsMap:{default:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},"with-error":{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}},loading:{startLoc:{col:49,line:14},endLoc:{col:2,line:50},startBody:{col:49,line:14},endBody:{col:2,line:50}}}}},name:"FAssetSwapForm",component:r},e=n(s=>({components:{FAssetSwapForm:r,FAssetAmountInput:l,FAssetInputTools:A},setup(){const o=t(""),m=t(""),a=t(null),p=t(null);return{args:s,inputAmount:o,outputAmount:m,inputAsset:a,outputAsset:p,assets:c.map(i=>d(i))}},template:`
    <FAssetSwapForm :loading="args.formLoading">
      <template #input>
        <FAssetAmountInput v-model:asset="inputAsset" v-model:amount="inputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>

      <template #output>
        <FAssetAmountInput v-model:asset="outputAsset" v-model:amount="outputAmount" :assets="assets" fullfilled v-bind="args">
          <template #tools>
            <FAssetInputTools :connected="true" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
          </template>
        </FAssetAmountInput>
      </template>
    </FAssetSwapForm>
  `}),"Template"),F=e.bind({});F.args={};const f=e.bind({});f.args={hideDefaultMessages:!0,errorMessages:["Amount is require"]};const g=e.bind({});g.args={formLoading:!0};const lt=["Default","WithError","Loading"];export{F as Default,g as Loading,f as WithError,lt as __namedExportsOrder,ut as default};
//# sourceMappingURL=FAssetSwapForm.stories.3ece4c04.js.map
