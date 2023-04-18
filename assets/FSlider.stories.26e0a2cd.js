var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{A as i,a as s,m as l}from"./vue.esm-bundler.9500adb2.js";import{V as a}from"./VSlider.dde1f04d.js";import"./VInput.33e34f4e.js";import"./color.45246ddd.js";import"./helpers.681e1792.js";import"./useRender.44945942.js";import"./VIcon.b10ecbaa.js";import"./density.0c8fab1e.js";import"./proxiedModel.881d858e.js";import"./locale.7efc9def.js";import"./VMessages.a0bdae17.js";import"./index.c2993bc7.js";import"./transition.10caf698.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./index.1967ded9.js";const r=i({name:"FSlider",setup(e){const t={trackSize:4,thumbSize:16,elevation:0,tickSize:10,min:0,max:1,showTicks:"always",ticks:{.33:"",.66:""},color:"greyscale_1",trackColor:"greyscale_5"};return()=>s(a,l({class:["f-slider"]},t),null)}}),M={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
//# sourceMappingURL=FSlider.stories.26e0a2cd.js.map
