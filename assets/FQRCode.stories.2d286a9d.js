var r=Object.defineProperty;var o=(e,n)=>r(e,"name",{value:n,configurable:!0});import{F as t}from"./FQRCode.c6b1272e.js";import"./vue.esm-bundler.330b8bcd.js";import"./helpers.6dbb45ef.js";import"./qrious.95cbf4de.js";import"./iframe.50af98f3.js";const F={parameters:{storySource:{source:`import { FQRCode } from "./FQRCode";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FQRCode",
  component: FQRCode,
} as Meta<typeof FQRCode>;

const Template: StoryFn<typeof FQRCode> = (args) => ({
  components: { FQRCode },
  setup() {
    return { args };
  },
  template: \`<FQRCode v-bind="args" />\`,
});

export const Default = Template.bind({});
Default.args = { text: "Hello", size: 128 };
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}}}}},title:"Components/FQRCode",component:t},s=o(e=>({components:{FQRCode:t},setup(){return{args:e}},template:'<FQRCode v-bind="args" />'}),"Template"),a=s.bind({});a.args={text:"Hello",size:128};const u=["Default"];export{a as Default,u as __namedExportsOrder,F as default};
//# sourceMappingURL=FQRCode.stories.2d286a9d.js.map
