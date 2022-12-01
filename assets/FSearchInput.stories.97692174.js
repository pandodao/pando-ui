var n=Object.defineProperty;var o=(t,e)=>n(t,"name",{value:e,configurable:!0});import{d as p}from"./vue.esm-bundler.03d0f9c2.js";import{F as r}from"./FSearchInput.6dd3f7b5.js";import"./FInput.0625b872.js";import"./index.98b5e059.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./VLabel.f4f94bb7.js";import"./VIcon.48347d4a.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./VMessages.cbf0f59f.js";import"./transition.37736cb0.js";import"./loader.30593133.js";import"./easing.d7926d43.js";import"./index.7705c375.js";import"./forwardRefs.c5465513.js";const _={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:47,line:10},endLoc:{col:2,line:18},startBody:{col:47,line:10},endBody:{col:2,line:18}}}}},name:"FSearchInput",component:r},a=o(t=>({components:{FSearchInput:r},setup(){const e=p("");return{args:t,text:e}},template:'<FSearchInput v-model="text" />'}),"Template"),m=a.bind({});m.args={};const B=["Default"];export{m as Default,B as __namedExportsOrder,_ as default};
//# sourceMappingURL=FSearchInput.stories.97692174.js.map
