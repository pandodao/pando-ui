var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.06cbf4f3.js";import{V as s}from"./VTextarea.99b3f5e7.js";import"./VCounter.19239368.js";import"./index.b7dbf2f4.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VInput.747c82dc.js";import"./color.9c80aa54.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./proxiedModel.ffcb1955.js";import"./locale.7c7f5def.js";import"./VMessages.4767cc10.js";import"./transition.60048a78.js";import"./loader.ff14b575.js";import"./rounded.ae3fe3ca.js";import"./location.efb67ad2.js";import"./anchor.4d34e672.js";import"./easing.36b781ab.js";import"./index.667911d0.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.6f5951c3.js.map
