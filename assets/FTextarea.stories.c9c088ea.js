var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.1ba604f9.js";import{V as s}from"./VTextarea.a6ad8762.js";import"./VCounter.5f12ac31.js";import"./index.a7472254.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VInput.857b8225.js";import"./color.b891a321.js";import"./VIcon.518cdeb6.js";import"./density.8ac56fa2.js";import"./proxiedModel.23143766.js";import"./locale.fb27b96c.js";import"./VMessages.11ef5b61.js";import"./transition.ef0cc300.js";import"./loader.c9437e89.js";import"./rounded.cb32523b.js";import"./location.f6b6fb7b.js";import"./anchor.1637b665.js";import"./easing.36b781ab.js";import"./index.c125b6ad.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.c9c088ea.js.map
