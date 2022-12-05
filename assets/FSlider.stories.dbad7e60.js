var s=Object.defineProperty;var o=(e,r)=>s(e,"name",{value:r,configurable:!0});import{F as t}from"./FSlider.319f099a.js";import"./vue.esm-bundler.0d7c29ee.js";import"./VInput.76852b74.js";import"./color.a1d36358.js";import"./helpers.a29827d2.js";import"./useRender.9e1e1323.js";import"./VIcon.27b7c9a9.js";import"./density.1812b102.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./VMessages.5340d354.js";import"./index.e4eb9e0e.js";import"./transition.845f9488.js";import"./elevation.b2f78cc5.js";import"./index.9418ce7a.js";const L={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
//# sourceMappingURL=FSlider.stories.dbad7e60.js.map
