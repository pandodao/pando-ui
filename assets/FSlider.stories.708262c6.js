var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{A as l,b as a,a as c,m}from"./vue.esm-bundler.60beb779.js";import{V as p}from"./VSlider.2e6fa364.js";import"./VInput.9d434e05.js";import"./color.7f161142.js";import"./helpers.f4a4e1c6.js";import"./useRender.06ad421e.js";import"./VIcon.ccd22ecd.js";import"./density.3ab93966.js";import"./proxiedModel.c4bc26c4.js";import"./locale.656e3084.js";import"./VMessages.e9237a13.js";import"./index.2f1043ab.js";import"./transition.d5d90e7e.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./index.d3586bd0.js";const t=l({name:"FSlider",props:{isProcess:Boolean},setup(e){const o=a(()=>({"f-slider--hide-thumb":e.isProcess})),n=e.isProcess?{trackSize:4,tickSize:4,color:"success",trackColor:"greyscale_6",rounded:0,showTicks:"always",readonly:!0}:{trackSize:8,thumbSize:24,elevation:0,color:"greyscale_1",trackColor:"greyscale_5"};return()=>c(p,m({class:["f-slider",o.value]},n),null)}}),D={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FSlider",
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
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}},process:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}}}}},title:"Components/FSlider",component:{FSlider:t}},s=r(e=>({components:{FSlider:t},setup(){return{args:e}},template:'<FSlider v-bind="args" />'}),"Template"),d=s.bind({});d.args={};const u=s.bind({});u.args={isProcess:!0,min:0,max:3,ticks:{0:"0%",1:"33.3%",2:"66.6%",3:"100%"},modelValue:1.5};const L=["Default","Process"];export{d as Default,u as Process,L as __namedExportsOrder,D as default};
//# sourceMappingURL=FSlider.stories.708262c6.js.map
