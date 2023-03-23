var u=Object.defineProperty;var r=(t,o)=>u(t,"name",{value:o,configurable:!0});import{r as s}from"./vue.esm-bundler.3b29098a.js";import{F as l}from"./FAssetAmountInput.6ba2d3c8.js";import{F as c}from"./FAssetInputTools.0c157fb8.js";import{a}from"./assets.0042eb13.js";import{c as i}from"./helpers.96e9126c.js";import"./FInput.3756ea4b.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./index.f8ee2712.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VInput.f50d7073.js";import"./color.fef4ce02.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./locale.eccdb440.js";import"./VMessages.ff964b60.js";import"./transition.94342caf.js";import"./loader.5b0d5ca4.js";import"./rounded.375414e4.js";import"./location.3a6dce64.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./easing.36b781ab.js";import"./index.1414bb4a.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.15777a49.js";import"./FAssetLogo.9456d591.js";import"./VImg.78cc729b.js";import"./dimensions.c2f0e23c.js";import"./FButton.72dd92af.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./elevation.154beddf.js";import"./variant.be65e42d.js";import"./index.09e65b91.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./VSpacer.805c8e99.js";import"./createSimpleFunctional.b1ebbe28.js";import"./FModal.4db458cf.js";import"./VDialog.8fdf9bea.js";import"./VOverlay.e2cb60a6.js";import"./display.f5b0b65d.js";import"./VAvatar.ab09abd9.js";import"./FListItem.57780b30.js";import"./VListItem.aa6733a2.js";import"./VLazy.ef579524.js";import"./VList.ce24c533.js";import"./VDivider.cb2315f4.js";import"./FSearchInput.0d05f75d.js";const It={parameters:{storySource:{source:`import { ref } from "vue";
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

export const ThemeColor = Template1.bind({});
ThemeColor.args = { themeColor: "error" };

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
`,locationsMap:{default:{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"theme-color":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-rules":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-tools":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-error":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}}}}},title:"Components/FAssetAmountInput",component:l},m=r(t=>({components:{FAssetAmountInput:l},setup(){const o=s(null),e=s("");return{args:t,asset:o,amount:e,assets:a.map(n=>i(n))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template1"),p=r(t=>({components:{FAssetAmountInput:l,FAssetInputTools:c},setup(){const o=s(null),e=s("");return{args:t,asset:o,amount:e,assets:a.map(n=>i(n))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template2"),d=m.bind({});d.args={fullfilled:!1};const A=m.bind({});A.args={themeColor:"error"};const f=m.bind({});f.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const F=p.bind({});F.args={fullfilled:!1,connected:!1};const g=p.bind({});g.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const Tt=["Default","ThemeColor","WithRules","WithTools","WithError"];export{d as Default,A as ThemeColor,g as WithError,f as WithRules,F as WithTools,Tt as __namedExportsOrder,It as default};
//# sourceMappingURL=FAssetAmountInput.stories.11f1e0c2.js.map
