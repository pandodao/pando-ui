var u=Object.defineProperty;var n=(s,o)=>u(s,"name",{value:o,configurable:!0});import{d as t}from"./vue.esm-bundler.03d0f9c2.js";import{F as r}from"./FAssetSwapForm.b486ac65.js";import{F as l}from"./FAssetAmountInput.f0744640.js";import{F as A}from"./FAssetInputTools.d59af979.js";import{a as c}from"./assets.1d8eb205.js";import{e as d}from"./FInput.0625b872.js";import"./FButton.2e1405fc.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./helpers.11996f79.js";import"./useRender.4b8f74ab.js";import"./variant.89df963d.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./VIcon.48347d4a.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./VLabel.f4f94bb7.js";import"./VMessages.cbf0f59f.js";import"./index.98b5e059.js";import"./transition.37736cb0.js";import"./forwardRefs.c5465513.js";import"./FAssetSelect.a364511f.js";import"./FModal.2828546c.js";import"./createSimpleFunctional.80c809ed.js";import"./VAvatar.bb0c21d9.js";import"./VImg.40b0c651.js";import"./index.7705c375.js";import"./scopeId.adb6c097.js";import"./VOverlay.07008e41.js";import"./easing.d7926d43.js";import"./display.8ad1f519.js";import"./FListItem.689549fe.js";import"./FAssetLogo.cc338389.js";import"./VLazy.17fb2cc6.js";import"./VDivider.19c63c46.js";import"./FAssetSelectField.ea09c97f.js";import"./FSearchInput.6dd3f7b5.js";const it={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),F=e.bind({});F.args={};const f=e.bind({});f.args={hideDefaultMessages:!0,errorMessages:["Amount is require"]};const g=e.bind({});g.args={formLoading:!0};const ut=["Default","WithError","Loading"];export{F as Default,g as Loading,f as WithError,ut as __namedExportsOrder,it as default};
//# sourceMappingURL=FAssetSwapForm.stories.cc9adb09.js.map
