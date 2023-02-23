var a=Object.defineProperty;var t=(e,o)=>a(e,"name",{value:o,configurable:!0});import{z as n,a as p,m}from"./vue.esm-bundler.57aa1454.js";import{V as s}from"./VTextarea.a70e48eb.js";import"./VCounter.03254f21.js";import"./index.5cb25ca4.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VInput.a59f36d0.js";import"./color.5e70182f.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./proxiedModel.aff93369.js";import"./locale.ce33eacd.js";import"./VMessages.7f48a74b.js";import"./transition.7787ec60.js";import"./loader.538ed1c8.js";import"./rounded.638bf334.js";import"./location.7ef01c4f.js";import"./anchor.8b678110.js";import"./easing.36b781ab.js";import"./index.168f645e.js";import"./forwardRefs.c003b6b8.js";const r=n({name:"FTextarea",setup(){const e={color:"primary"};return()=>p(s,m({class:"rounded f-textarea"},e),null)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
//# sourceMappingURL=FTextarea.stories.691b34e4.js.map
