var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.330b8bcd.js";import{V as s}from"./VTextarea.9cbdaf41.js";import"./VCounter.a5b91a3f.js";import"./index.a5e0d629.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VInput.3a20875e.js";import"./color.66c7a00f.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./proxiedModel.815b9064.js";import"./locale.0eda84ca.js";import"./VMessages.206e4d2e.js";import"./transition.d91c432b.js";import"./loader.c202c022.js";import"./rounded.257cff90.js";import"./location.2cb2469d.js";import"./anchor.7cdf4a4d.js";import"./easing.36b781ab.js";import"./index.0fdd422f.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},title:"Components/FTextarea",component:r},i=t(e=>({components:{FTextarea:r},setup(){return{args:e}},template:'<FTextarea v-bind="args" placeholder="Text..."></FTextarea>'}),"Template"),l=i.bind({});l.args={};const N=["Default"];export{l as Default,N as __namedExportsOrder,E as default};
//# sourceMappingURL=FTextarea.stories.37b7f15b.js.map
