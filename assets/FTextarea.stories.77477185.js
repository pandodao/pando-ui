var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.a5c4e1bf.js";import{V as s}from"./VTextarea.677b10f1.js";import"./VCounter.536d06c5.js";import"./index.628b3df7.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./VInput.34db0c3a.js";import"./color.43314d1d.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./proxiedModel.9639363f.js";import"./locale.76e208ea.js";import"./VMessages.90062972.js";import"./transition.c93b8895.js";import"./loader.7d1fab10.js";import"./rounded.a0c73c18.js";import"./easing.36b781ab.js";import"./index.549b0914.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),k={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}}}}},title:"Components/FTextarea",component:r},i=t(e=>({components:{FTextarea:r},setup(){return{args:e}},template:'<FTextarea v-bind="args" placeholder="Text..."></FTextarea>'}),"Template"),l=i.bind({});l.args={};const A=["Default"];export{l as Default,A as __namedExportsOrder,k as default};
//# sourceMappingURL=FTextarea.stories.77477185.js.map
