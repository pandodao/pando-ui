var r=Object.defineProperty;var t=(n,e)=>r(n,"name",{value:e,configurable:!0});import{F as i}from"./FFiatDivision.6bfa7217.js";import"./vue.esm-bundler.03d0f9c2.js";const m={parameters:{storySource:{source:`import { FFiatDivision } from "./FFiatDivision";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FFiatDivision",
  component: FFiatDivision,
} as Meta<typeof FFiatDivision>;

const Template: StoryFn<typeof FFiatDivision> = (args) => ({
  components: { FFiatDivision },
  setup() {
    return { args };
  },
  template: \`<FFiatDivision v-bind="args"></FFiatDivision>\`,
});

const parts = new Intl.NumberFormat("en", {
  currency: "USD",
  style: "currency",
}).formatToParts(121212);

export const Default = Template.bind({});
Default.args = { parts };

export const String = Template.bind({});
String.args = { parts: "0" };
`,locationsMap:{default:{startLoc:{col:48,line:9},endLoc:{col:2,line:15},startBody:{col:48,line:9},endBody:{col:2,line:15}},string:{startLoc:{col:48,line:9},endLoc:{col:2,line:15},startBody:{col:48,line:9},endBody:{col:2,line:15}}}}},name:"FFiatDivision",component:i},o=t(n=>({components:{FFiatDivision:i},setup(){return{args:n}},template:'<FFiatDivision v-bind="args"></FFiatDivision>'}),"Template"),a=new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(121212),s=o.bind({});s.args={parts:a};const c=o.bind({});c.args={parts:"0"};const u=["Default","String"];export{s as Default,c as String,u as __namedExportsOrder,m as default};
//# sourceMappingURL=FFiatDivision.stories.21e9e916.js.map
