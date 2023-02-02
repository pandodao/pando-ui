var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.1ba604f9.js";import{F as m}from"./FAssetAmountInput.f974b11c.js";import{F as c}from"./FAssetInputTools.61dcf04e.js";import{a,c as l}from"./assets.e4531b9f.js";import"./FInput.9dd39b60.js";import"./number.ea2b3954.js";import"./VTextField.44316fe6.js";import"./VCounter.5f12ac31.js";import"./index.a7472254.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VInput.857b8225.js";import"./color.b891a321.js";import"./VIcon.518cdeb6.js";import"./density.8ac56fa2.js";import"./proxiedModel.23143766.js";import"./locale.fb27b96c.js";import"./VMessages.11ef5b61.js";import"./transition.ef0cc300.js";import"./loader.c9437e89.js";import"./rounded.cb32523b.js";import"./location.f6b6fb7b.js";import"./anchor.1637b665.js";import"./easing.36b781ab.js";import"./index.c125b6ad.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.b9914cfa.js";import"./FAssetLogo.f27a6fba.js";import"./VImg.2750fab4.js";import"./dimensions.721a2e0b.js";import"./FButton.da03e124.js";import"./VBtn.156ed533.js";import"./border.c2063388.js";import"./elevation.7428fb70.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./VSpacer.41a02cf9.js";import"./createSimpleFunctional.b271bf7a.js";import"./FModal.3e0c2496.js";import"./VDialog.0f487f73.js";import"./VOverlay.16609424.js";import"./display.de7ed398.js";import"./VAvatar.d7e1c088.js";import"./FListItem.bc4f8297.js";import"./VListItem.d10786fb.js";import"./VLazy.87923590.js";import"./VList.7218b974.js";import"./VDivider.7223c023.js";import"./FSearchInput.66fa1d18.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.2046efff.js.map
