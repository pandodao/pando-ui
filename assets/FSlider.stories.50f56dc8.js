var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{A as l,b as a,a as c,m}from"./vue.esm-bundler.330b8bcd.js";import{V as p}from"./VSlider.31ee0424.js";import"./VInput.3a20875e.js";import"./color.66c7a00f.js";import"./helpers.6dbb45ef.js";import"./useRender.b59b3e39.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./proxiedModel.815b9064.js";import"./locale.0eda84ca.js";import"./VMessages.206e4d2e.js";import"./index.a5e0d629.js";import"./transition.d91c432b.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./index.b967f916.js";const t=l({name:"FSlider",props:{isProcess:Boolean},setup(e){const o=a(()=>({"f-slider--hide-thumb":e.isProcess})),n=e.isProcess?{trackSize:4,tickSize:4,color:"success",trackColor:"greyscale_6",rounded:0,showTicks:"always",readonly:!0}:{trackSize:8,thumbSize:24,elevation:0,color:"greyscale_1",trackColor:"greyscale_5"};return()=>c(p,m({class:["f-slider",o.value]},n),null)}}),D={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
//# sourceMappingURL=FSlider.stories.50f56dc8.js.map
