var n=Object.defineProperty;var o=(e,t)=>n(e,"name",{value:t,configurable:!0});import{D as i,a as s,m as l}from"./vue.esm-bundler.80cafc0b.js";import{V as a}from"./VSlider.dec703cd.js";import"./elevation.8d0c61c6.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./rounded.b42653ce.js";import"./index.b676db0f.js";import"./index.d4fa9fd4.js";import"./VInput.44c51e7f.js";import"./VIcon.ac9f05d6.js";import"./VMessages.8e887dfb.js";import"./transition.b6a16e6c.js";import"./density.e2c1329b.js";const r=i({name:"FSlider",setup(e){const t={trackSize:4,thumbSize:16,elevation:0,tickSize:10,min:0,max:1,showTicks:"always",ticks:{.33:"",.66:""},color:"greyscale_1",trackColor:"greyscale_5"};return()=>s(a,l({class:["f-slider"]},t),null)}}),z={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
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
//# sourceMappingURL=FSlider.stories.069e815b.js.map
