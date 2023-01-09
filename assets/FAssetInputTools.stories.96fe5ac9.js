var l=Object.defineProperty;var e=(o,s)=>l(o,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.884eeec7.js";import"./vue.esm-bundler.a5c4e1bf.js";import"./FButton.f3fc7c21.js";import"./VBtn.b5444450.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./VIcon.5ca83e1b.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./locale.76e208ea.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VSpacer.3c3f34f8.js";import"./createSimpleFunctional.f00f4b71.js";import"./VMessages.90062972.js";import"./index.628b3df7.js";import"./transition.c93b8895.js";const w={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
  template: \`<FAssetInputTools v-bind="args"></FAssetInputTools>\`,
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
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},connected:{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},"not-fillable":{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},"fiat-amount":{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},messages:{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}}}}},title:"Components/FAssetInputTools",component:n},t=e(o=>({components:{FAssetInputTools:n},setup(){return{args:o}},template:'<FAssetInputTools v-bind="args"></FAssetInputTools>'}),"Template"),a=t.bind({});a.args={};const r=t.bind({});r.args={connected:!0,balance:"1,000"};const i=t.bind({});i.args={connected:!0,balance:"1,000",fillable:!1};const c=t.bind({});c.args={connected:!0,balance:"1,213",fiatAmount:"$5,000"};const p=t.bind({});p.args={connected:!0,balance:"1,213",fiatAmount:"$5,000",messages:["Amount is required"]};const z=["Default","Connected","NotFillable","FiatAmount","Messages"];export{r as Connected,a as Default,c as FiatAmount,p as Messages,i as NotFillable,z as __namedExportsOrder,w as default};
//# sourceMappingURL=FAssetInputTools.stories.96fe5ac9.js.map
