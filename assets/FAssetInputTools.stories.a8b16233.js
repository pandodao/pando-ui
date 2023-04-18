var l=Object.defineProperty;var o=(e,s)=>l(e,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.3327d484.js";import"./vue.esm-bundler.9500adb2.js";import"./FButton.d61383cc.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VSpacer.0edf83e3.js";import"./createSimpleFunctional.0b08b174.js";import"./VMessages.a0bdae17.js";import"./index.c2993bc7.js";import"./transition.10caf698.js";const w={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
//# sourceMappingURL=FAssetInputTools.stories.a8b16233.js.map
