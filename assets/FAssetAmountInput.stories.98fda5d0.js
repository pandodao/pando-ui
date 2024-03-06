var f=Object.defineProperty;var a=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as n}from"./vue.esm-bundler.80cafc0b.js";import{F as r}from"./FAssetAmountInput.d2fcb959.js";import{F as p}from"./FAssetInputTools.81431802.js";import{a as l}from"./assets.52e2b338.js";import{c as m}from"./helpers.c6c91249.js";import"./FInput.ee50ce76.js";import"./bignumber.8dc24abd.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./index.b676db0f.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./transition.b6a16e6c.js";import"./VInput.44c51e7f.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./VIcon.ac9f05d6.js";import"./VMessages.8e887dfb.js";import"./density.e2c1329b.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./anchor.5ba72fdd.js";import"./rounded.b42653ce.js";import"./easing.da2e9236.js";import"./forwardRefs.34034356.js";import"./index.f2b6c1e4.js";import"./FAssetSelectField.826cea61.js";import"./FAssetLogo.b5a60381.js";import"./FButton.5e8d1e13.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./variant.1e842247.js";import"./router.9241c2dd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VSpacer.beb84ecc.js";import"./createSimpleFunctional.19425ddc.js";import"./FModal.ac7dde43.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./display.1ed39e23.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./FListItem.b2ca06e9.js";import"./VListItem.da04c970.js";import"./VLazy.d1caeda2.js";import"./VList.c8ed43d6.js";import"./ssrBoot.e8acd638.js";import"./VDivider.7c8b3fdb.js";import"./FSearchInput.d7e59333.js";const Ct={parameters:{storySource:{source:`import { ref } from "vue";
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
NotSelectable.args = {
  selectable: false,
};
`,locationsMap:{default:{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"theme-color":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-rules":{startLoc:{col:53,line:13},endLoc:{col:2,line:27},startBody:{col:53,line:13},endBody:{col:2,line:27}},"with-tools":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-error":{startLoc:{col:53,line:29},endLoc:{col:2,line:49},startBody:{col:53,line:29},endBody:{col:2,line:49}},"with-records":{startLoc:{col:53,line:76},endLoc:{col:2,line:108},startBody:{col:53,line:76},endBody:{col:2,line:108}},"not-selectable":{startLoc:{col:53,line:115},endLoc:{col:2,line:142},startBody:{col:53,line:115},endBody:{col:2,line:142}}}}},title:"Components/FAssetAmountInput",component:r},c=a(t=>({components:{FAssetAmountInput:r},setup(){const e=n(null),o=n("");return{args:t,asset:e,amount:o,assets:l.map(s=>m(s))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template1"),u=a(t=>({components:{FAssetAmountInput:r,FAssetInputTools:p},setup(){const e=n(null),o=n("");return{args:t,asset:e,amount:o,assets:l.map(s=>m(s))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" placeholder="Amount">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template2"),g=c.bind({});g.args={fullfilled:!1};const h=c.bind({});h.args={themeColor:"error"};const b=c.bind({});b.args={fullfilled:!1,rules:[t=>!!t||"Amount is require"]};const F=u.bind({});F.args={fullfilled:!1,connected:!1};const I=u.bind({});I.args={fullfilled:!1,hideDefaultMessages:!0,errorMessages:["Amount is require"]};const v=a(t=>({components:{FAssetAmountInput:r,FAssetInputTools:p},setup(){const e=n(null),o=n(""),s=n([]);function d(i){s.value.push(i)}a(d,"handleUpdateRecords");function A(){s.value=[]}return a(A,"handleClearRecords"),{args:t,asset:e,amount:o,records:s,handleUpdateRecords:d,handleClearRecords:A,assets:l.map(i=>m(i))}},template:`
    <FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets" :records="records" placeholder="Amount" @update:records="handleUpdateRecords" @clear:records="handleClearRecords">
      <template #tools>
        <FAssetInputTools :connected="args.connected" balance="1,213" fiatAmount="$5,000" :messages="args.errorMessages" />
      </template>
    </FAssetAmountInput>
  `}),"Template3"),T=v.bind({});T.args={showRecords:!0};const y=a(t=>({components:{FAssetAmountInput:r},setup(){const e=n({asset_id:"02a39171-dfc1-36d1-94c3-9e9725d59bbb",provider:"mixin",chain_id:"43d61dcd-e413-450d-80b8-101d5e903357",symbol:"ZIL",name:"Zilliqa",logo:"https://mixin-images.zeromesh.net/prUxZ_5EC6UYufpA3lYn7Sjiq8HeTCiZ7VsIFtso0sjZrck7T8oCHyaSKNwsrKAE82h1oxqAJM_hZsnRm-ZAIMc=s128",confirmations:16,price_usd:"0.02306898",change_usd:"0.047327018826841996",balance:"0.00000001",destination:"0x4cC777dFb649b9Ebc524E78e7DA89f0916Dd0f24",tag:""}),o=n("");return{args:t,asset:e,amount:o,assets:l.map(s=>m(s))}},template:'<FAssetAmountInput v-model:asset="asset" v-model:amount="amount" v-bind="args" :assets="assets"></FAssetAmountInput>'}),"Template4"),x=y.bind({});x.args={selectable:!1};const Mt=["Default","ThemeColor","WithRules","WithTools","WithError","WithRecords","NotSelectable"];export{g as Default,x as NotSelectable,h as ThemeColor,I as WithError,T as WithRecords,b as WithRules,F as WithTools,Mt as __namedExportsOrder,Ct as default};
//# sourceMappingURL=FAssetAmountInput.stories.98fda5d0.js.map
