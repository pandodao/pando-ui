var a=Object.defineProperty;var e=(n,r)=>a(n,"name",{value:r,configurable:!0});import{h as s}from"./vue.esm-bundler.03d0f9c2.js";import{F as t}from"./FRender.b8d235b9.js";const m={parameters:{storySource:{source:`import { h } from "vue";
import { FRender } from "./FRender";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FRender",
  component: FRender,
} as Meta<typeof FRender>;

const Template: StoryFn<typeof FRender> = (args) => ({
  components: { FRender },
  setup() {
    return { args };
  },
  template: \`
    <FRender v-bind="args" />
  \`,
});

export const Default = Template.bind({});
Default.args = { content: h("span", "123223") };

export const String = Template.bind({});
String.args = { content: "121212" };
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:18},startBody:{col:42,line:10},endBody:{col:2,line:18}},string:{startLoc:{col:42,line:10},endLoc:{col:2,line:18},startBody:{col:42,line:10},endBody:{col:2,line:18}}}}},name:"FRender",component:t},o=e(n=>({components:{FRender:t},setup(){return{args:n}},template:`
    <FRender v-bind="args" />
  `}),"Template"),c=o.bind({});c.args={content:s("span","123223")};const d=o.bind({});d.args={content:"121212"};const u=["Default","String"];export{c as Default,d as String,u as __namedExportsOrder,m as default};
//# sourceMappingURL=FRender.stories.ff04fe8c.js.map
