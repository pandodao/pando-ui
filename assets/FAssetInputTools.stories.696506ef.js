var l=Object.defineProperty;var n=(e,s)=>l(e,"name",{value:s,configurable:!0});import{F as o}from"./FAssetInputTools.d7ffc598.js";import"./vue.esm-bundler.b09b7c5a.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VSpacer.749a101d.js";import"./createSimpleFunctional.6499d319.js";import"./VMessages.d6b13295.js";import"./index.5cf6a3e8.js";import"./transition.d2bea911.js";const O={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},connected:{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},"not-fillable":{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},"fiat-amount":{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}},messages:{startLoc:{col:51,line:9},endLoc:{col:2,line:21},startBody:{col:51,line:9},endBody:{col:2,line:21}}}}},title:"Components/FAssetInputTools",component:o},t=n(e=>({components:{FAssetInputTools:o},setup(){return{args:e}},template:`
  <FAssetInputTools v-bind="args">
    <template #append-left>
      <VIcon size="12">$check</VIcon>
    </template>
  </FAssetInputTools>
  `}),"Template"),a=t.bind({});a.args={};const r=t.bind({});r.args={connected:!0,balance:"1,000"};const c=t.bind({});c.args={connected:!0,balance:"1,000",fillable:!1};const i=t.bind({});i.args={connected:!0,balance:"1,213",fiatAmount:"$5,000"};const p=t.bind({});p.args={connected:!0,balance:"1,213",fiatAmount:"$5,000",messages:["Amount is required"]};const j=["Default","Connected","NotFillable","FiatAmount","Messages"];export{r as Connected,a as Default,i as FiatAmount,p as Messages,c as NotFillable,j as __namedExportsOrder,O as default};
//# sourceMappingURL=FAssetInputTools.stories.696506ef.js.map
