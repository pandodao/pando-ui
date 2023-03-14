var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.62cdaeff.js";import{F as m}from"./FAssetAmountInput.57ef0a9e.js";import{F as c}from"./FAssetInputTools.d5f2e51c.js";import{a,c as l}from"./assets.1372edf9.js";import"./FInput.33440f61.js";import"./number.ea2b3954.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./index.31ee38b0.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VInput.7941d77b.js";import"./color.5ac0909d.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./proxiedModel.c2b98033.js";import"./locale.b4680344.js";import"./VMessages.c418de83.js";import"./transition.28d05801.js";import"./loader.c48359f5.js";import"./rounded.9945cf4e.js";import"./location.8179a009.js";import"./anchor.4b6c6135.js";import"./easing.36b781ab.js";import"./index.68c608a7.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.75c93540.js";import"./FAssetLogo.dc864486.js";import"./VImg.485a2281.js";import"./dimensions.c27e6138.js";import"./FButton.7a11c708.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./elevation.79ced88b.js";import"./variant.cb074882.js";import"./index.f175e2d9.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./VSpacer.c706d964.js";import"./createSimpleFunctional.f6324448.js";import"./FModal.e70a199e.js";import"./VDialog.8aa0eb51.js";import"./VOverlay.49a3aceb.js";import"./display.21f5d2fe.js";import"./VAvatar.8eec326e.js";import"./FListItem.2d41da5b.js";import"./VListItem.ad71f0c6.js";import"./VLazy.8ad79713.js";import"./VList.0fe739a2.js";import"./VDivider.1215dc57.js";import"./FSearchInput.762e7f63.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.c3d89095.js.map
