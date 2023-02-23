var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.57aa1454.js";import{F as m}from"./FAssetAmountInput.4dc41c79.js";import{F as c}from"./FAssetInputTools.1e5c74ce.js";import{a,c as l}from"./assets.0a35c71b.js";import"./FInput.be24e9fb.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./index.5cb25ca4.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VInput.a59f36d0.js";import"./color.5e70182f.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./proxiedModel.aff93369.js";import"./locale.ce33eacd.js";import"./VMessages.7f48a74b.js";import"./transition.7787ec60.js";import"./loader.538ed1c8.js";import"./rounded.638bf334.js";import"./location.7ef01c4f.js";import"./anchor.8b678110.js";import"./easing.36b781ab.js";import"./index.168f645e.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.905e4907.js";import"./FAssetLogo.a8055510.js";import"./VImg.040b2a14.js";import"./dimensions.2a6ee421.js";import"./FButton.95509114.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./elevation.08bb2882.js";import"./variant.58edd759.js";import"./index.17c04f25.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VSpacer.da6438ea.js";import"./createSimpleFunctional.3ee3a08b.js";import"./FModal.b075f7f6.js";import"./VDialog.789dc96e.js";import"./VOverlay.2998aec7.js";import"./display.8ac49ecd.js";import"./VAvatar.01c8c686.js";import"./FListItem.39459486.js";import"./VListItem.f12d2f11.js";import"./VLazy.e8b6f832.js";import"./VList.8d2887de.js";import"./VDivider.186db6a0.js";import"./FSearchInput.de430b11.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.ad0ee15e.js.map
