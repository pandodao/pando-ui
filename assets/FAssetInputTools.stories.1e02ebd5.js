var l=Object.defineProperty;var e=(o,s)=>l(o,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.d997a836.js";import"./vue.esm-bundler.06cbf4f3.js";import"./FButton.042bb067.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VSpacer.680927fa.js";import"./createSimpleFunctional.917a427b.js";import"./VMessages.4767cc10.js";import"./index.b7dbf2f4.js";import"./transition.60048a78.js";const z={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
//# sourceMappingURL=FAssetInputTools.stories.1e02ebd5.js.map
