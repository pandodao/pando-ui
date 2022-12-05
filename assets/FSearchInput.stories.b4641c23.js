var n=Object.defineProperty;var o=(t,e)=>n(t,"name",{value:e,configurable:!0});import{d as p}from"./vue.esm-bundler.0d7c29ee.js";import{F as r}from"./FSearchInput.51b8ce83.js";import"./FInput.cc1e9cf7.js";import"./VCounter.af1b4b68.js";import"./index.e4eb9e0e.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VInput.76852b74.js";import"./color.a1d36358.js";import"./VIcon.27b7c9a9.js";import"./density.1812b102.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./VMessages.5340d354.js";import"./transition.845f9488.js";import"./loader.dd2f3ca6.js";import"./easing.d7926d43.js";import"./index.da6e5ccf.js";import"./forwardRefs.c5465513.js";const B={parameters:{storySource:{source:`import { ref } from "vue";
import { FSearchInput } from "./FSearchInput";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FSearchInput",
  component: FSearchInput,
} as Meta<typeof FSearchInput>;

const Template: StoryFn<typeof FSearchInput> = (args) => ({
  components: { FSearchInput },
  setup() {
    const text = ref("");

    return { args, text };
  },
  template: \`<FSearchInput v-model="text" />\`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:47,line:10},endLoc:{col:2,line:18},startBody:{col:47,line:10},endBody:{col:2,line:18}}}}},name:"FSearchInput",component:r},a=o(t=>({components:{FSearchInput:r},setup(){const e=p("");return{args:t,text:e}},template:'<FSearchInput v-model="text" />'}),"Template"),m=a.bind({});m.args={};const L=["Default"];export{m as Default,L as __namedExportsOrder,B as default};
//# sourceMappingURL=FSearchInput.stories.b4641c23.js.map
