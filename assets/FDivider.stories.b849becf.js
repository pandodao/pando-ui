var o=Object.defineProperty;var n=(e,r)=>o(e,"name",{value:r,configurable:!0});import{D as i,a as s,m as a}from"./vue.esm-bundler.80cafc0b.js";import{V as d}from"./VDivider.7c8b3fdb.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";const t=i({name:"FDivider",setup(){const e={color:"greyscale_6",thickness:1};return()=>s(d,a(e,{class:"f-divider"}),null)}}),u={parameters:{storySource:{source:`import { FDivider } from "./FDivider";
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
`,locationsMap:{default:{startLoc:{col:43,line:9},endLoc:{col:2,line:21},startBody:{col:43,line:9},endBody:{col:2,line:21}}}}},title:"Components/FDivider",component:t},c=n(e=>({components:{FDivider:t},setup(){return{args:e}},template:`
    <div class='pa-5'>
      <FDivider v-bind="args"></FDivider>
    </div>
  `}),"Template"),l=c.bind({});l.args={thickness:8,color:"greyscale_6"};const f=["Default"];export{l as Default,f as __namedExportsOrder,u as default};
//# sourceMappingURL=FDivider.stories.b849becf.js.map
