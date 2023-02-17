var l=Object.defineProperty;var e=(o,s)=>l(o,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.e2386d94.js";import"./vue.esm-bundler.caa622c4.js";import"./FButton.b7201e41.js";import"./VBtn.abf41941.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./VIcon.f37f8177.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./VSpacer.20cf6c63.js";import"./createSimpleFunctional.2286a9cd.js";import"./VMessages.e864fdf2.js";import"./index.07e0e4c3.js";import"./transition.712d10eb.js";const z={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
//# sourceMappingURL=FAssetInputTools.stories.25508992.js.map
