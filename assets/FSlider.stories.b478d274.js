var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{z as l,b as a,a as c,m}from"./vue.esm-bundler.57aa1454.js";import{V as p}from"./VSlider.eb1a9a5a.js";import"./VInput.a59f36d0.js";import"./color.5e70182f.js";import"./helpers.ff98b59e.js";import"./useRender.0f3b6188.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./proxiedModel.aff93369.js";import"./locale.ce33eacd.js";import"./VMessages.7f48a74b.js";import"./index.5cb25ca4.js";import"./transition.7787ec60.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./index.17c04f25.js";const t=l({name:"FSlider",props:{isProcess:Boolean},setup(e){const o=a(()=>({"f-slider--hide-thumb":e.isProcess})),n=e.isProcess?{trackSize:4,tickSize:4,color:"success",trackColor:"greyscale_6",rounded:0,showTicks:"always",readonly:!0}:{trackSize:8,thumbSize:24,elevation:0,color:"greyscale_1",trackColor:"greyscale_5"};return()=>c(p,m({class:["f-slider",o.value]},n),null)}}),D={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
//# sourceMappingURL=FSlider.stories.b478d274.js.map
