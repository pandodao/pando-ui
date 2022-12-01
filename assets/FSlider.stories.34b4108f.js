var s=Object.defineProperty;var o=(e,r)=>s(e,"name",{value:r,configurable:!0});import{F as t}from"./FSlider.fa0bf1ec.js";import"./vue.esm-bundler.03d0f9c2.js";import"./VLabel.f4f94bb7.js";import"./VIcon.48347d4a.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./VMessages.cbf0f59f.js";import"./index.98b5e059.js";import"./transition.37736cb0.js";import"./elevation.ef328fb6.js";import"./index.71c8a79f.js";const L={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FSlider",
  component: { FSlider },
} as Meta<typeof FSlider>;

const Template: StoryFn<typeof FSlider> = (args) => ({
  components: {
    FSlider,
  },
  setup() {
    return { args };
  },
  template: \`<FSlider v-bind="args" />\`,
});

export const Default = Template.bind({});
Default.args = {};

export const Process = Template.bind({});
Process.args = {
  isProcess: true,
  min: 0,
  max: 3,
  ticks: { 0: "0%", 1: "33.3%", 2: "66.6%", 3: "100%" },
  modelValue: 1.5,
};
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}},process:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}}}}},name:"FSlider",component:{FSlider:t}},n=o(e=>({components:{FSlider:t},setup(){return{args:e}},template:'<FSlider v-bind="args" />'}),"Template"),i=n.bind({});i.args={};const l=n.bind({});l.args={isProcess:!0,min:0,max:3,ticks:{0:"0%",1:"33.3%",2:"66.6%",3:"100%"},modelValue:1.5};const T=["Default","Process"];export{i as Default,l as Process,T as __namedExportsOrder,L as default};
//# sourceMappingURL=FSlider.stories.34b4108f.js.map
