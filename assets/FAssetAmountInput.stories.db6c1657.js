var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.330b8bcd.js";import{F as m}from"./FAssetAmountInput.3ff8fe6c.js";import{F as c}from"./FAssetInputTools.5de1f0cc.js";import{a,c as l}from"./assets.56d1f40c.js";import"./FInput.3389dce9.js";import"./number.ea2b3954.js";import"./VTextField.d9025984.js";import"./VCounter.a5b91a3f.js";import"./index.a5e0d629.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VInput.3a20875e.js";import"./color.66c7a00f.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./proxiedModel.815b9064.js";import"./locale.0eda84ca.js";import"./VMessages.206e4d2e.js";import"./transition.d91c432b.js";import"./loader.c202c022.js";import"./rounded.257cff90.js";import"./location.2cb2469d.js";import"./anchor.7cdf4a4d.js";import"./easing.36b781ab.js";import"./index.0fdd422f.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.c9b84b6e.js";import"./FAssetLogo.fc73f2f7.js";import"./VImg.9ee07324.js";import"./dimensions.6590eaa4.js";import"./FButton.d034f6f2.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./elevation.b2f27a68.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./VSpacer.1ee3d07f.js";import"./createSimpleFunctional.05bfccd4.js";import"./FModal.6bf61d27.js";import"./VDialog.a4bfe643.js";import"./VOverlay.d681ab18.js";import"./display.b3319b10.js";import"./VAvatar.f79052e0.js";import"./FListItem.cff3e166.js";import"./VListItem.4533e071.js";import"./VLazy.fba54de2.js";import"./VList.318061a0.js";import"./VDivider.a69cf6f1.js";import"./FSearchInput.3fae5f4a.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.db6c1657.js.map
