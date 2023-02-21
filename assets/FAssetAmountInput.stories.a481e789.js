var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.60beb779.js";import{F as m}from"./FAssetAmountInput.1ce83b7a.js";import{F as c}from"./FAssetInputTools.865e7954.js";import{a,c as l}from"./assets.e02cf137.js";import"./FInput.47c266c5.js";import"./number.ea2b3954.js";import"./VTextField.8e117680.js";import"./VCounter.602ed76e.js";import"./index.2f1043ab.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./VInput.9d434e05.js";import"./color.7f161142.js";import"./VIcon.ccd22ecd.js";import"./density.3ab93966.js";import"./proxiedModel.c4bc26c4.js";import"./locale.656e3084.js";import"./VMessages.e9237a13.js";import"./transition.d5d90e7e.js";import"./loader.3ab44f13.js";import"./rounded.08843391.js";import"./location.3f71a5c2.js";import"./anchor.46190ad2.js";import"./easing.36b781ab.js";import"./index.41c719a2.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.d9190ffa.js";import"./FAssetLogo.a76723bd.js";import"./VImg.79a3bf78.js";import"./dimensions.71f8bcb1.js";import"./FButton.7fb5afc5.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./elevation.6146b715.js";import"./variant.f60f637f.js";import"./index.d3586bd0.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";import"./VSpacer.15b61edb.js";import"./createSimpleFunctional.057254cd.js";import"./FModal.e9ae3117.js";import"./VDialog.74ee3f5c.js";import"./VOverlay.6564e1f3.js";import"./display.49866675.js";import"./VAvatar.709f16cb.js";import"./FListItem.69cc58eb.js";import"./VListItem.e48c8813.js";import"./VLazy.dfd7813b.js";import"./VList.3d3d7549.js";import"./VDivider.7d468152.js";import"./FSearchInput.a6aa5690.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.a481e789.js.map
