var u=Object.defineProperty;var r=(t,o)=>u(t,"name",{value:o,configurable:!0});import{r as s}from"./vue.esm-bundler.9500adb2.js";import{F as l}from"./FAssetAmountInput.cd126122.js";import{F as c}from"./FAssetInputTools.3327d484.js";import{a}from"./assets.dfe25f8f.js";import{c as i}from"./helpers.96e9126c.js";import"./FInput.1db1a978.js";import"./number.d5e09512.js";import"./VTextField.73cde862.js";import"./VCounter.a1a93cec.js";import"./index.c2993bc7.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VInput.33e34f4e.js";import"./color.45246ddd.js";import"./VIcon.b10ecbaa.js";import"./density.0c8fab1e.js";import"./proxiedModel.881d858e.js";import"./locale.7efc9def.js";import"./VMessages.a0bdae17.js";import"./transition.10caf698.js";import"./loader.4d40f77d.js";import"./rounded.d16b72e9.js";import"./location.c535e823.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./easing.36b781ab.js";import"./index.91748bc9.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.5d742c74.js";import"./FAssetLogo.27fc628c.js";import"./VImg.6757be35.js";import"./dimensions.5f5b1dd8.js";import"./FButton.d61383cc.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./elevation.d906eb56.js";import"./variant.95637a5a.js";import"./index.1967ded9.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VSpacer.0edf83e3.js";import"./createSimpleFunctional.0b08b174.js";import"./FModal.7ce358cf.js";import"./VDialog.38dab5f5.js";import"./VOverlay.96b5c4e3.js";import"./display.9827c8ac.js";import"./VAvatar.9487a2f3.js";import"./FListItem.7cf292ab.js";import"./VListItem.492edb65.js";import"./VLazy.d4a61acd.js";import"./VList.408dac73.js";import"./VDivider.4dfba538.js";import"./FSearchInput.57fdcded.js";const It={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.db743f0d.js.map
