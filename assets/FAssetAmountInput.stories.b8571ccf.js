var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.caa622c4.js";import{F as m}from"./FAssetAmountInput.37a69a40.js";import{F as c}from"./FAssetInputTools.e2386d94.js";import{a,c as l}from"./assets.a2001c6e.js";import"./FInput.9e64898c.js";import"./number.ea2b3954.js";import"./VTextField.dbd49551.js";import"./VCounter.4d5defc1.js";import"./index.07e0e4c3.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./VInput.353ca9d2.js";import"./color.795eceb6.js";import"./VIcon.f37f8177.js";import"./density.c07a8c02.js";import"./proxiedModel.073d34a6.js";import"./locale.312c25a1.js";import"./VMessages.e864fdf2.js";import"./transition.712d10eb.js";import"./loader.535d849b.js";import"./rounded.bd8ad820.js";import"./location.375c93f3.js";import"./anchor.57ff9838.js";import"./easing.36b781ab.js";import"./index.fc60a169.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.cce52c84.js";import"./FAssetLogo.860d7590.js";import"./VImg.cbbbed87.js";import"./dimensions.1a78e179.js";import"./FButton.b7201e41.js";import"./VBtn.abf41941.js";import"./border.ae4ccc68.js";import"./elevation.3fce6244.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./VSpacer.20cf6c63.js";import"./createSimpleFunctional.2286a9cd.js";import"./FModal.a85ac45d.js";import"./VDialog.8fc91e8b.js";import"./VOverlay.a16b5884.js";import"./display.ef8c62e1.js";import"./VAvatar.91a1aacd.js";import"./FListItem.3736709d.js";import"./VListItem.a560c4b3.js";import"./VLazy.387ee881.js";import"./VList.a6d8b9f9.js";import"./VDivider.18b197de.js";import"./FSearchInput.0576b422.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.b8571ccf.js.map
