var f=Object.defineProperty;var r=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as n}from"./vue.esm-bundler.b09b7c5a.js";import{F as a}from"./FAssetAmountInput.1c098dff.js";import{F as p}from"./FAssetInputTools.d7ffc598.js";import{a as l}from"./assets.4a8cf356.js";import{c as m}from"./helpers.c6c91249.js";import"./FInput.239100f8.js";import"./number.d5e09512.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./index.5cf6a3e8.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VInput.d8777c43.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./locale.88650f04.js";import"./VMessages.d6b13295.js";import"./transition.d2bea911.js";import"./loader.a0162f6e.js";import"./rounded.28975b1c.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./easing.36b781ab.js";import"./index.8137a4d7.js";import"./forwardRefs.c003b6b8.js";import"./FAssetSelectField.6f827bc0.js";import"./FAssetLogo.0e70c9a8.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./elevation.12d4edaf.js";import"./variant.fbd007cc.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VSpacer.749a101d.js";import"./createSimpleFunctional.6499d319.js";import"./FModal.cc1ac870.js";import"./VDialog.ac2f44e1.js";import"./VOverlay.7cd76152.js";import"./display.c2299c89.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./FListItem.c2eb778d.js";import"./VListItem.f3bec281.js";import"./VLazy.ed808b3a.js";import"./VList.34423262.js";import"./VDivider.810676cd.js";import"./FSearchInput.c8b3fa61.js";const xt={parameters:{storySource:{source:`import { ref } from "vue";
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

const Template4: StoryFn<typeof FAssetAmountInput> = (args) => ({
  components: { FAssetAmountInput },
  setup() {
    const asset = ref({
      asset_id: "02a39171-dfc1-36d1-94c3-9e9725d59bbb",
      provider: "mixin",
      chain_id: "43d61dcd-e413-450d-80b8-101d5e903357",
      symbol: "ZIL",
      name: "Zilliqa",
      logo: "https://mixin-images.zeromesh.net/prUxZ_5EC6UYufpA3lYn7Sjiq8HeTCiZ7VsIFtso0sjZrck7T8oCHyaSKNwsrKAE82h1oxqAJM_hZsnRm-ZAIMc=s128",
      confirmations: 16,
      price_usd: "0.02306898",
      change_usd: "0.047327018826841996",
      balance: "0.00000001",
      destination: "0x4cC777dFb649b9Ebc524E78e7DA89f0916Dd0f24",
      tag: "",
    });
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

export const NotSelectable = Template4.bind({});
NotSelectable.args = {};
`,locationsMap:{default:{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"theme-color":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-rules":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-tools":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-error":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-records":{startLoc:{col:53,line:76},endLoc:{col:2,line:108},startBody:{col:53,line:76},endBody:{col:2,line:108}},"not-selectable":{startLoc:{col:53,line:115},endLoc:{col:2,line:142},startBody:{col:53,line:115},endBody:{col:2,line:142}}}}},title:"Components/FAssetAmountInput",component:a},c=r(t=>({components:{FAssetAmountInput:a},setup(){const e=n(null),o=n("");return{args:t,asset:e,amount:o,assets:l.map(s=>m(s))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template1"),u=r(t=>({components:{FAssetAmountInput:a,FAssetInputTools:p},setup(){const e=n(null),o=n("");return{args:t,asset:e,amount:o,assets:l.map(s=>m(s))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template2"),g=c.bind({});g.args={fullfilled:!1};const h=c.bind({});h.args={themeColor:"error"};const F=c.bind({});F.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const b=u.bind({});b.args={fullfilled:!1,connected:!1};const I=u.bind({});I.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const v=r(t=>({components:{FAssetAmountInput:a,FAssetInputTools:p},setup(){const e=n(null),o=n(""),s=n([]);function d(i){s.value.push(i)}r(d,"handleUpdateRecords");function A(){s.value=[]}return r(A,"handleClearRecords"),{args:t,asset:e,amount:o,records:s,handleUpdateRecords:d,handleClearRecords:A,assets:l.map(i=>m(i))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" :records="records" placeholder="Amount" @update:records="handleUpdateRecords" @clear:records="handleClearRecords">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template3"),T=v.bind({});T.args={showRecords:!0};const y=r(t=>({components:{FAssetAmountInput:a},setup(){const e=n({asset_id:"02a39171-dfc1-36d1-94c3-9e9725d59bbb",provider:"mixin",chain_id:"43d61dcd-e413-450d-80b8-101d5e903357",symbol:"ZIL",name:"Zilliqa",logo:"https://mixin-images.zeromesh.net/prUxZ_5EC6UYufpA3lYn7Sjiq8HeTCiZ7VsIFtso0sjZrck7T8oCHyaSKNwsrKAE82h1oxqAJM_hZsnRm-ZAIMc=s128",confirmations:16,price_usd:"0.02306898",change_usd:"0.047327018826841996",balance:"0.00000001",destination:"0x4cC777dFb649b9Ebc524E78e7DA89f0916Dd0f24",tag:""}),o=n("");return{args:t,asset:e,amount:o,assets:l.map(s=>m(s))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template4"),x=y.bind({});x.args={};const Rt=["Default","ThemeColor","WithRules","WithTools","WithError","WithRecords","NotSelectable"];export{g as Default,x as NotSelectable,h as ThemeColor,I as WithError,T as WithRecords,F as WithRules,b as WithTools,Rt as __namedExportsOrder,xt as default};
//# sourceMappingURL=FAssetAmountInput.stories.d105c9e2.js.map
