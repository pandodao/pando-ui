var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{z as n,a as p,m}from"./vue.esm-bundler.62cdaeff.js";import{V as s}from"./VTextarea.108094e3.js";import"./VCounter.8bd4f380.js";import"./index.31ee38b0.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VInput.7941d77b.js";import"./color.5ac0909d.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./proxiedModel.c2b98033.js";import"./locale.b4680344.js";import"./VMessages.c418de83.js";import"./transition.28d05801.js";import"./loader.c48359f5.js";import"./rounded.9945cf4e.js";import"./location.8179a009.js";import"./anchor.4b6c6135.js";import"./easing.36b781ab.js";import"./index.68c608a7.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.591a7951.js.map
