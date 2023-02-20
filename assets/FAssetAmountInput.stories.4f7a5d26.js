var u=Object.defineProperty;var r=(t,s)=>u(t,"name",{value:s,configurable:!0});import{r as e}from"./vue.esm-bundler.06cbf4f3.js";import{F as m}from"./FAssetAmountInput.9e22b6ca.js";import{F as c}from"./FAssetInputTools.d997a836.js";import{a,c as l}from"./assets.0fcaa6dc.js";import"./FInput.15987765.js";import"./number.ea2b3954.js";import"./VTextField.d88de585.js";import"./VCounter.19239368.js";import"./index.b7dbf2f4.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VInput.747c82dc.js";import"./color.9c80aa54.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./proxiedModel.ffcb1955.js";import"./locale.7c7f5def.js";import"./VMessages.4767cc10.js";import"./transition.60048a78.js";import"./loader.ff14b575.js";import"./rounded.ae3fe3ca.js";import"./location.efb67ad2.js";import"./anchor.4d34e672.js";import"./easing.36b781ab.js";import"./index.667911d0.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.56da3f1f.js";import"./FAssetLogo.2cb09797.js";import"./VImg.601fba1e.js";import"./dimensions.f30e25d4.js";import"./FButton.042bb067.js";import"./VBtn.a6fb96e2.js";import"./border.386c98bf.js";import"./elevation.906ca0d0.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VSpacer.680927fa.js";import"./createSimpleFunctional.917a427b.js";import"./FModal.af77241e.js";import"./VDialog.89f04ef5.js";import"./VOverlay.99ed030c.js";import"./display.f0408c25.js";import"./VAvatar.d0341de2.js";import"./FListItem.f16980b8.js";import"./VListItem.52553c7c.js";import"./VLazy.617c76cf.js";import"./VList.ed5b86d0.js";import"./VDivider.9ab6906e.js";import"./FSearchInput.b5b40896.js";const Ft={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FAssetAmountInput.stories.4f7a5d26.js.map
