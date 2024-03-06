var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{D as p,a as m,m as l}from"./vue.esm-bundler.80cafc0b.js";import{V as s}from"./VTextarea.b7eb8810.js";import"./VField.59d98d58.js";import"./index.b676db0f.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./transition.b6a16e6c.js";import"./VInput.44c51e7f.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./VIcon.ac9f05d6.js";import"./VMessages.8e887dfb.js";import"./density.e2c1329b.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./anchor.5ba72fdd.js";import"./rounded.b42653ce.js";import"./easing.da2e9236.js";import"./forwardRefs.34034356.js";import"./index.f2b6c1e4.js";const a=p({name:"FTextarea",setup(e,{slots:t}){const o={color:"primary"};return()=>m(s,l({class:"rounded f-textarea"},o),t)}}),E={parameters:{storySource:{source:`import { FTextarea } from "./FTextarea";
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
  `}),"Template2"),N=d.bind({}),O=["Default","Slots"];export{i as Default,N as Slots,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FTextarea.stories.fc313851.js.map
