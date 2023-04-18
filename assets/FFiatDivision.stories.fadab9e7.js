var a=Object.defineProperty;var o=(n,t)=>a(n,"name",{value:t,configurable:!0});import{A as c,b as l,a as p}from"./vue.esm-bundler.9500adb2.js";const s=c({name:"FFiatDivision",props:{parts:{type:[Array,String],default:()=>[]}},setup(n){const t=l(()=>typeof n.parts=="string"?n.parts:n.parts.reduce((e,i)=>i.type==="currency"?`${e}<span class="f-fiat-division__symbol">${i.value}</span>`:`${e}${i.value}`,""));return()=>p("div",{innerHTML:t.value,class:"f-fiat-division"},null)}}),f={parameters:{storySource:{source:`import { FFiatDivision } from "./FFiatDivision";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FFiatDivision",
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
`,locationsMap:{default:{startLoc:{col:48,line:9},endLoc:{col:2,line:15},startBody:{col:48,line:9},endBody:{col:2,line:15}},string:{startLoc:{col:48,line:9},endLoc:{col:2,line:15},startBody:{col:48,line:9},endBody:{col:2,line:15}}}}},title:"Components/FFiatDivision",component:s},r=o(n=>({components:{FFiatDivision:s},setup(){return{args:n}},template:'<FFiatDivision v-bind="args"></FFiatDivision>'}),"Template"),F=new Intl.NumberFormat("en",{currency:"USD",style:"currency"}).formatToParts(121212),u=r.bind({});u.args={parts:F};const m=r.bind({});m.args={parts:"0"};const y=["Default","String"];export{u as Default,m as String,y as __namedExportsOrder,f as default};
//# sourceMappingURL=FFiatDivision.stories.fadab9e7.js.map
