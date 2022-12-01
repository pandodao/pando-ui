var o=Object.defineProperty;var n=(e,r)=>o(e,"name",{value:r,configurable:!0});import{F as t}from"./FDivider.bcc1cb3d.js";import"./vue.esm-bundler.03d0f9c2.js";import"./VDivider.19c63c46.js";import"./color.ec9b773d.js";import"./helpers.11996f79.js";import"./useRender.4b8f74ab.js";const D={parameters:{storySource:{source:`import { FDivider } from "./FDivider";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FDivider",
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
`,locationsMap:{default:{startLoc:{col:43,line:9},endLoc:{col:2,line:21},startBody:{col:43,line:9},endBody:{col:2,line:21}}}}},name:"FDivider",component:t},i=n(e=>({components:{FDivider:t},setup(){return{args:e}},template:`
    <div class='pa-5'>
      <FDivider v-bind="args"></FDivider>
    </div>
  `}),"Template"),s=i.bind({});s.args={thickness:8,color:"greyscale_6"};const F=["Default"];export{s as Default,F as __namedExportsOrder,D as default};
//# sourceMappingURL=FDivider.stories.c5490864.js.map
