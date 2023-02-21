var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.60beb779.js";import{V as s}from"./VTextarea.cb177d13.js";import"./VCounter.602ed76e.js";import"./index.2f1043ab.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./VInput.9d434e05.js";import"./color.7f161142.js";import"./VIcon.ccd22ecd.js";import"./density.3ab93966.js";import"./proxiedModel.c4bc26c4.js";import"./locale.656e3084.js";import"./VMessages.e9237a13.js";import"./transition.d5d90e7e.js";import"./loader.3ab44f13.js";import"./rounded.08843391.js";import"./location.3f71a5c2.js";import"./anchor.46190ad2.js";import"./easing.36b781ab.js";import"./index.41c719a2.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.dea456c9.js.map
