var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{A as p,a as m,m as l}from"./vue.esm-bundler.b09b7c5a.js";import{V as s}from"./VTextarea.12fcda91.js";import"./VCounter.0660ffdc.js";import"./index.5cf6a3e8.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VInput.d8777c43.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./locale.88650f04.js";import"./VMessages.d6b13295.js";import"./transition.d2bea911.js";import"./loader.a0162f6e.js";import"./rounded.28975b1c.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./easing.36b781ab.js";import"./index.8137a4d7.js";import"./forwardRefs.c003b6b8.js";const a=p({name:"FTextarea",setup(e,{slots:t}){const o={color:"primary"};return()=>m(s,l({class:"rounded f-textarea"},o),t)}}),A={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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

const Template2: StoryFn<typeof FTextarea> = (args) => ({
  components: { FTextarea },
  setup() {
    return { args };
  },
  template: \`
    <FTextarea v-bind="args"  auto-grow placeholder="Text...">
      <template #prepend>
        <VIcon>$expand</VIcon>
      </template>
      <template #prepend-inner>
        <VIcon>$expand</VIcon>
      </template>
      <template #append>
        <VIcon>$expand</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$expand</VIcon>
      </template>
    </FTextarea>
  \`,
});

export const Slots = Template2.bind({});
`,locationsMap:{default:{startLoc:{col:44,line:9},endLoc:{col:2,line:15},startBody:{col:44,line:9},endBody:{col:2,line:15}},slots:{startLoc:{col:45,line:20},endLoc:{col:2,line:41},startBody:{col:45,line:20},endBody:{col:2,line:41}}}}},title:"Components/FTextarea",component:a},c=n(e=>({components:{FTextarea:a},setup(){return{args:e}},template:'<FTextarea v-bind="args" placeholder="Text..."></FTextarea>'}),"Template"),i=c.bind({});i.args={};const d=n(e=>({components:{FTextarea:a},setup(){return{args:e}},template:`
    <FTextarea v-bind="args"  auto-grow placeholder="Text...">
      <template #prepend>
        <VIcon>$expand</VIcon>
      </template>
      <template #prepend-inner>
        <VIcon>$expand</VIcon>
      </template>
      <template #append>
        <VIcon>$expand</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$expand</VIcon>
      </template>
    </FTextarea>
  `}),"Template2"),E=d.bind({}),N=["Default","Slots"];export{i as Default,E as Slots,N as __namedExportsOrder,A as default};
//# sourceMappingURL=FTextarea.stories.c59f0645.js.map
