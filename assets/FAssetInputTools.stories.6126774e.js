var l=Object.defineProperty;var n=(e,s)=>l(e,"name",{value:s,configurable:!0});import{F as o}from"./FAssetInputTools.81431802.js";import"./vue.esm-bundler.80cafc0b.js";import"./FButton.5e8d1e13.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VSpacer.beb84ecc.js";import"./createSimpleFunctional.19425ddc.js";import"./VMessages.8e887dfb.js";import"./index.b676db0f.js";import"./transition.b6a16e6c.js";const j={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
  `}),"Template"),a=t.bind({});a.args={};const r=t.bind({});r.args={connected:!0,balance:"1,000"};const c=t.bind({});c.args={connected:!0,balance:"1,000",fillable:!1};const i=t.bind({});i.args={connected:!0,balance:"1,213",fiatAmount:"$5,000"};const p=t.bind({});p.args={connected:!0,balance:"1,213",fiatAmount:"$5,000",messages:["Amount is required"]};const w=["Default","Connected","NotFillable","FiatAmount","Messages"];export{r as Connected,a as Default,i as FiatAmount,p as Messages,c as NotFillable,w as __namedExportsOrder,j as default};
//# sourceMappingURL=FAssetInputTools.stories.6126774e.js.map
