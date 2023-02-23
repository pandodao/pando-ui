var l=Object.defineProperty;var e=(o,s)=>l(o,"name",{value:s,configurable:!0});import{F as n}from"./FAssetInputTools.1e5c74ce.js";import"./vue.esm-bundler.57aa1454.js";import"./FButton.95509114.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VSpacer.da6438ea.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VMessages.7f48a74b.js";import"./index.5cb25ca4.js";import"./transition.7787ec60.js";const z={parameters:{storySource:{source:`import { FAssetInputTools } from "./FAssetInputTools";
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
//# sourceMappingURL=FAssetInputTools.stories.ede0e5bc.js.map
