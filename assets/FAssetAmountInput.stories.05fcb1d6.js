var f=Object.defineProperty;var n=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as o}from"./vue.esm-bundler.b09b7c5a.js";import{F as a}from"./FAssetAmountInput.fc442fe8.js";import{F as u}from"./FAssetInputTools.f445f24d.js";import{a as m}from"./assets.9a611d57.js";import{c as p}from"./helpers.c6c91249.js";import"./FInput.f0bd3585.js";import"./number.d5e09512.js";import"./VTextField.32fb86ed.js";import"./VCounter.d53e5345.js";import"./index.38f7dd54.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VInput.c9d6b09b.js";import"./color.1fec8f8e.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./proxiedModel.f0d8de9f.js";import"./locale.0dcd1420.js";import"./VMessages.02e1bfc3.js";import"./transition.1a560eae.js";import"./loader.c496a144.js";import"./rounded.ccd03645.js";import"./location.11c487f7.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./easing.36b781ab.js";import"./index.21842925.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.2ab09210.js";import"./FAssetLogo.14e1d903.js";import"./VImg.be2c1e9b.js";import"./dimensions.b549aab6.js";import"./FButton.fd5dc93c.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./elevation.844f69c6.js";import"./variant.eababd72.js";import"./index.eca3ba9a.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./VSpacer.14317ba5.js";import"./createSimpleFunctional.06ddaa9a.js";import"./FModal.edcf514e.js";import"./VDialog.f3d85c11.js";import"./VOverlay.4718cec8.js";import"./display.fd968d5a.js";import"./VAvatar.84448bc0.js";import"./FListItem.62927a00.js";import"./VListItem.679e6b02.js";import"./VLazy.292cd780.js";import"./VList.eb773df7.js";import"./VDivider.a6c176d7.js";import"./FSearchInput.c05c1a18.js";const Rt={parameters:{storySource:{source:`import { ref } from "vue";
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

const Template3: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput, FAssetInputTools },
  setup() {
    const asset = ref(null);
    const amount = ref("");
    const records = ref<string[]>([]);

    function handleUpdateRecords(value: string) {
      records.value.push(value);
    }

    function handleClearRecords() {
      records.value = [];
    }

    return {
      args,
      asset,
      amount,
      records,
      handleUpdateRecords,
      handleClearRecords,
      assets: assets.map((asset) => convertMixinAsset(asset)),
    };
  },
  template: \`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" :records="records" placeholder="Amount" @update:records="handleUpdateRecords" @clear:records="handleClearRecords">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  \`,
});

export const WithRecords = Template3.bind({});
WithRecords.args = {
  showRecords: true,
};
`,locationsMap:{default:{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"theme-color":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-rules":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-tools":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-error":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-records":{startLoc:{col:53,line:76},endLoc:{col:2,line:108},startBody:{col:53,line:76},endBody:{col:2,line:108}}}}},title:"Components/FAssetAmountInput",component:a},i=n(t=>({components:{FAssetAmountInput:a},setup(){const e=o(null),r=o("");return{args:t,asset:e,amount:r,assets:m.map(s=>p(s))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template1"),c=n(t=>({components:{FAssetAmountInput:a,FAssetInputTools:u},setup(){const e=o(null),r=o("");return{args:t,asset:e,amount:r,assets:m.map(s=>p(s))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template2"),h=i.bind({});h.args={fullfilled:!1};const g=i.bind({});g.args={themeColor:"error"};const F=i.bind({});F.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const I=c.bind({});I.args={fullfilled:!1,connected:!1};const v=c.bind({});v.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const T=n(t=>({components:{FAssetAmountInput:a,FAssetInputTools:u},setup(){const e=o(null),r=o(""),s=o([]);function d(l){s.value.push(l)}n(d,"handleUpdateRecords");function A(){s.value=[]}return n(A,"handleClearRecords"),{args:t,asset:e,amount:r,records:s,handleUpdateRecords:d,handleClearRecords:A,assets:m.map(l=>p(l))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" :records="records" placeholder="Amount" @update:records="handleUpdateRecords" @clear:records="handleClearRecords">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template3"),b=T.bind({});b.args={showRecords:!0};const Mt=["Default","ThemeColor","WithRules","WithTools","WithError","WithRecords"];export{h as Default,g as ThemeColor,v as WithError,b as WithRecords,F as WithRules,I as WithTools,Mt as __namedExportsOrder,Rt as default};
//# sourceMappingURL=FAssetAmountInput.stories.05fcb1d6.js.map
