var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{A as i,a as s,m as l}from"./vue.esm-bundler.b09b7c5a.js";import{V as a}from"./VSlider.f3bb0dfe.js";import"./VInput.d8777c43.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./locale.88650f04.js";import"./VMessages.d6b13295.js";import"./index.5cf6a3e8.js";import"./transition.d2bea911.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./index.eca3ba9a.js";const r=i({name:"FSlider",setup(e){const t={trackSize:4,thumbSize:16,elevation:0,tickSize:10,min:0,max:1,showTicks:"always",ticks:{.33:"",.66:""},color:"greyscale_1",trackColor:"greyscale_5"};return()=>s(a,l({class:["f-slider"]},t),null)}}),z={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}}}}},title:"Components/FSlider",component:{FSlider:r}},p=o(e=>({components:{FSlider:r},setup(){return{args:e}},template:'<FSlider v-bind="args" />'}),"Template"),m=p.bind({});m.args={};const M=["Default"];export{m as Default,M as __namedExportsOrder,z as default};
//# sourceMappingURL=FSlider.stories.34ba9ea0.js.map
