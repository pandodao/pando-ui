var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.b09b7c5a.js";import{V as s}from"./VTextarea.dc6d8184.js";import"./VCounter.d53e5345.js";import"./index.38f7dd54.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VInput.c9d6b09b.js";import"./color.1fec8f8e.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./proxiedModel.f0d8de9f.js";import"./locale.0dcd1420.js";import"./VMessages.02e1bfc3.js";import"./transition.1a560eae.js";import"./loader.c496a144.js";import"./rounded.ccd03645.js";import"./location.11c487f7.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./easing.36b781ab.js";import"./index.21842925.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),N={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.174ac07a.js.map
