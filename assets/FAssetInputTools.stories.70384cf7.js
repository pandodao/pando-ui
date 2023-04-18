var l=Object.defineProperty;var o=(e,s)=>l(e,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.f445f24d.js";import"./vue.esm-bundler.b09b7c5a.js";import"./FButton.fd5dc93c.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VIcon.81f7ecc0.js";import"./color.1fec8f8e.js";import"./variant.eababd72.js";import"./proxiedModel.f0d8de9f.js";import"./index.eca3ba9a.js";import"./dimensions.b549aab6.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./VSpacer.14317ba5.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VMessages.02e1bfc3.js";import"./index.38f7dd54.js";import"./transition.1a560eae.js";const w={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FAssetInputTools",
  component: FAssetInputTools,
} as Meta<typeof FAssetInputTools>;

const Template: StoryFn<typeof FAssetInputTools> = (args) => ({
  components: { FAssetInputTools },
  setup() {
    return { args };
  },
  template: \`
  <FAssetInputTools v-bind="args">
    <template #append-left>
      <VIcon size="12">$check</VIcon>
    </template>
  </FAssetInputTools>
  \`,
});

export const Default = Template.bind({});
Default.args = {};

export const Connected = Template.bind({});
Connected.args = { connected: true, balance: "1,000" };

export const NotFillable = Template.bind({});
NotFillable.args = { connected: true, balance: "1,000", fillable: false };

export const FiatAmount = Template.bind({});
FiatAmount.args = { connected: true, balance: "1,213", fiatAmount: "$5,000" };

export const Messages = Template.bind({});
Messages.args = {
  connected: true,
  balance: "1,213",
  fiatAmount: "$5,000",
  messages: ["Amount is required"],
};
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},connected:{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},"not-fillable":{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},"fiat-amount":{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},messages:{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}}}}},title:"Components/FAssetInputTools",component:n},t=o(e=>({components:{FAssetInputTools:n},setup(){return{args:e}},template:`
  <FAssetInputTools v-bind="args">
    <template #append-left>
      <VIcon size="12">$check</VIcon>
    </template>
  </FAssetInputTools>
  `}),"Template"),a=t.bind({});a.args={};const r=t.bind({});r.args={connected:!0,balance:"1,000"};const c=t.bind({});c.args={connected:!0,balance:"1,000",fillable:!1};const i=t.bind({});i.args={connected:!0,balance:"1,213",fiatAmount:"$5,000"};const p=t.bind({});p.args={connected:!0,balance:"1,213",fiatAmount:"$5,000",messages:["Amount is required"]};const G=["Default","Connected","NotFillable","FiatAmount","Messages"];export{r as Connected,a as Default,i as FiatAmount,p as Messages,c as NotFillable,G as __namedExportsOrder,w as default};
//# sourceMappingURL=FAssetInputTools.stories.70384cf7.js.map
