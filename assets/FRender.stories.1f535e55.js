var s=Object.defineProperty;var e=(n,r)=>s(n,"name",{value:r,configurable:!0});import{h as a}from"./vue.esm-bundler.a5c4e1bf.js";import{F as t}from"./FRender.a85647fa.js";const m={parameters:{storySource:{source:`import { h } from "vue";
import { FRender } from "./FRender";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FRender",
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
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:18},startBody:{col:42,line:10},endBody:{col:2,line:18}},string:{startLoc:{col:42,line:10},endLoc:{col:2,line:18},startBody:{col:42,line:10},endBody:{col:2,line:18}}}}},title:"Components/FRender",component:t},o=e(n=>({components:{FRender:t},setup(){return{args:n}},template:`
    <FRender v-bind="args" />
  `}),"Template"),l=o.bind({});l.args={content:a("span","123223")};const c=o.bind({});c.args={content:"121212"};const u=["Default","String"];export{l as Default,c as String,u as __namedExportsOrder,m as default};
//# sourceMappingURL=FRender.stories.1f535e55.js.map
