var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{z as i,a as s,m as l}from"./vue.esm-bundler.3b29098a.js";import{V as a}from"./VSlider.d3484e8b.js";import"./VInput.f50d7073.js";import"./color.fef4ce02.js";import"./helpers.e1d6c4cc.js";import"./useRender.3ca1765f.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./locale.eccdb440.js";import"./VMessages.ff964b60.js";import"./index.f8ee2712.js";import"./transition.94342caf.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./index.09e65b91.js";const r=i({name:"FSlider",setup(e){const t={trackSize:4,thumbSize:16,elevation:0,tickSize:10,min:0,max:1,showTicks:"always",ticks:{.33:"",.66:""},color:"greyscale_1",trackColor:"greyscale_5"};return()=>s(a,l({class:["f-slider"]},t),null)}}),M={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
//# sourceMappingURL=FSlider.stories.a0d134b7.js.map
