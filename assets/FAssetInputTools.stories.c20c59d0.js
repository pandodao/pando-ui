var l=Object.defineProperty;var o=(e,s)=>l(e,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.0c157fb8.js";import"./vue.esm-bundler.3b29098a.js";import"./FButton.72dd92af.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./VIcon.c254d683.js";import"./color.fef4ce02.js";import"./variant.be65e42d.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./VSpacer.805c8e99.js";import"./createSimpleFunctional.b1ebbe28.js";import"./VMessages.ff964b60.js";import"./index.f8ee2712.js";import"./transition.94342caf.js";const w={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
//# sourceMappingURL=FAssetInputTools.stories.c20c59d0.js.map
