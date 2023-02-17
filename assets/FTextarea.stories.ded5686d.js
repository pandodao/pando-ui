var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.caa622c4.js";import{V as s}from"./VTextarea.93298019.js";import"./VCounter.4d5defc1.js";import"./index.07e0e4c3.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./VInput.353ca9d2.js";import"./color.795eceb6.js";import"./VIcon.f37f8177.js";import"./density.c07a8c02.js";import"./proxiedModel.073d34a6.js";import"./locale.312c25a1.js";import"./VMessages.e864fdf2.js";import"./transition.712d10eb.js";import"./loader.535d849b.js";import"./rounded.bd8ad820.js";import"./location.375c93f3.js";import"./anchor.57ff9838.js";import"./easing.36b781ab.js";import"./index.fc60a169.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.ded5686d.js.map
