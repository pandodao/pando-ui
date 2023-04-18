var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{A as n,a as p,m}from"./vue.esm-bundler.9500adb2.js";import{V as s}from"./VTextarea.8588669b.js";import"./VCounter.a1a93cec.js";import"./index.c2993bc7.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VInput.33e34f4e.js";import"./color.45246ddd.js";import"./VIcon.b10ecbaa.js";import"./density.0c8fab1e.js";import"./proxiedModel.881d858e.js";import"./locale.7efc9def.js";import"./VMessages.a0bdae17.js";import"./transition.10caf698.js";import"./loader.4d40f77d.js";import"./rounded.d16b72e9.js";import"./location.c535e823.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./easing.36b781ab.js";import"./index.91748bc9.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),N={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.4c684707.js.map
