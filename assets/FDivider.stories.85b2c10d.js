var r=Object.defineProperty;var t=(e,o)=>r(e,"name",{value:o,configurable:!0});import{A as i,a as s}from"./vue.esm-bundler.b09b7c5a.js";import{V as a}from"./VDivider.a6c176d7.js";import"./color.1fec8f8e.js";import"./helpers.4b349f1c.js";import"./useRender.5a19cee5.js";const n=i({name:"FDivider",setup(){const e={color:"greyscale_6",thickness:1};return()=>s(a,e,null)}}),F={parameters:{storySource:{source:`import { FDivider } from "./FDivider";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FDivider",
  component: FDivider,
} as Meta<typeof FDivider>;

const Template: StoryFn<typeof FDivider> = (args) => ({
  components: { FDivider },

  setup() {
    return { args };
  },

  template: \`
    <div class='pa-5'>
      <FDivider v-bind="args"></FDivider>
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = { thickness: 8, color: "greyscale_6" };
`,locationsMap:{default:{startLoc:{col:43,line:9},endLoc:{col:2,line:21},startBody:{col:43,line:9},endBody:{col:2,line:21}}}}},title:"Components/FDivider",component:n},d=t(e=>({components:{FDivider:n},setup(){return{args:e}},template:`
    <div class='pa-5'>
      <FDivider v-bind="args"></FDivider>
    </div>
  `}),"Template"),c=d.bind({});c.args={thickness:8,color:"greyscale_6"};const f=["Default"];export{c as Default,f as __namedExportsOrder,F as default};
//# sourceMappingURL=FDivider.stories.85b2c10d.js.map