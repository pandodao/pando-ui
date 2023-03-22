var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{z as n,a as p,m}from"./vue.esm-bundler.3b29098a.js";import{V as s}from"./VTextarea.cb6e9f82.js";import"./VCounter.66bfd87a.js";import"./index.f8ee2712.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VInput.f50d7073.js";import"./color.fef4ce02.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./locale.eccdb440.js";import"./VMessages.ff964b60.js";import"./transition.94342caf.js";import"./loader.5b0d5ca4.js";import"./rounded.375414e4.js";import"./location.3a6dce64.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./easing.36b781ab.js";import"./index.1414bb4a.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),N={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FTextarea",
  component: FTextarea,
} as Meta<typeof FTextarea>;

const Template: StoryFn<typeof FTextarea> = (args) => ({
  components: { FTextarea },
  setup() {
    return { args };
  },
  template: '<FTextarea v-bind="args" placeholder="Text..."></FTextarea>',
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},title:"Components/FTextarea",component:r},i=t(e=>({components:{FTextarea:r},setup(){return{args:e}},template:'<FTextarea v-bind="args" placeholder="Text..."></FTextarea>'}),"Template"),l=i.bind({});l.args={};const O=["Default"];export{l as Default,O as __namedExportsOrder,N as default};
//# sourceMappingURL=FTextarea.stories.c2cdbfef.js.map
