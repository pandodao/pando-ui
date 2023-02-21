var l=Object.defineProperty;var e=(o,s)=>l(o,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.865e7954.js";import"./vue.esm-bundler.60beb779.js";import"./FButton.7fb5afc5.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./VIcon.ccd22ecd.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";import"./VSpacer.15b61edb.js";import"./createSimpleFunctional.057254cd.js";import"./VMessages.e9237a13.js";import"./index.2f1043ab.js";import"./transition.d5d90e7e.js";const z={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
`,locationsMap:{default:{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},connected:{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},"not-fillable":{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},"fiat-amount":{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}},messages:{startLoc:{col:51,line:9},endLoc:{col:2,line:15},startBody:{col:51,line:9},endBody:{col:2,line:15}}}}},title:"Components/FAssetInputTools",component:n},t=e(o=>({components:{FAssetInputTools:n},setup(){return{args:o}},template:'<FAssetInputTools v-bind="args"></FAssetInputTools>'}),"Template"),a=t.bind({});a.args={};const r=t.bind({});r.args={connected:!0,balance:"1,000"};const i=t.bind({});i.args={connected:!0,balance:"1,000",fillable:!1};const c=t.bind({});c.args={connected:!0,balance:"1,213",fiatAmount:"$5,000"};const p=t.bind({});p.args={connected:!0,balance:"1,213",fiatAmount:"$5,000",messages:["Amount is required"]};const G=["Default","Connected","NotFillable","FiatAmount","Messages"];export{r as Connected,a as Default,c as FiatAmount,p as Messages,i as NotFillable,G as __namedExportsOrder,z as default};
//# sourceMappingURL=FAssetInputTools.stories.04a17d2f.js.map
