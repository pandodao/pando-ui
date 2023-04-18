var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{A as i,a as s,m as l}from"./vue.esm-bundler.b09b7c5a.js";import{V as a}from"./VSlider.5d68b977.js";import"./VInput.c9d6b09b.js";import"./color.1fec8f8e.js";import"./helpers.4b349f1c.js";import"./useRender.5a19cee5.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./proxiedModel.f0d8de9f.js";import"./locale.0dcd1420.js";import"./VMessages.02e1bfc3.js";import"./index.38f7dd54.js";import"./transition.1a560eae.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./index.eca3ba9a.js";const r=i({name:"FSlider",setup(e){const t={trackSize:4,thumbSize:16,elevation:0,tickSize:10,min:0,max:1,showTicks:"always",ticks:{.33:"",.66:""},color:"greyscale_1",trackColor:"greyscale_5"};return()=>s(a,l({class:["f-slider"]},t),null)}}),M={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}}}}},title:"Components/FSlider",component:{FSlider:r}},p=o(e=>({components:{FSlider:r},setup(){return{args:e}},template:'<FSlider v-bind="args" />'}),"Template"),m=p.bind({});m.args={};const V=["Default"];export{m as Default,V as __namedExportsOrder,M as default};
//# sourceMappingURL=FSlider.stories.91b6015a.js.map
