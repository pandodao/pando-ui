var e=Object.defineProperty;var r=(t,o)=>e(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.3b29098a.js";import{F as n}from"./FSearchInput.0d05f75d.js";import"./FInput.3756ea4b.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./index.f8ee2712.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VInput.f50d7073.js";import"./color.fef4ce02.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./locale.eccdb440.js";import"./VMessages.ff964b60.js";import"./transition.94342caf.js";import"./loader.5b0d5ca4.js";import"./rounded.375414e4.js";import"./location.3a6dce64.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./easing.36b781ab.js";import"./index.1414bb4a.js";import"./forwardRefs.c003b6b8.js";const j={parameters:{storySource:{source:`import { ref } from "vue";
import { FSearchInput } from "./FSearchInput";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FSearchInput",
  component: FSearchInput,
} as Meta<typeof FSearchInput>;

const Template: StoryFn<typeof FSearchInput> = (args) => ({
  components: { FSearchInput },
  setup() {
    const text = ref("");

    return { args, text };
  },
  template: \`<FSearchInput v-model="text" v-bind="args" />\`,
});

export const Default = Template.bind({});

Default.args = {
  variant: "outlined",
};
`,locationsMap:{default:{startLoc:{col:47,line:10},endLoc:{col:2,line:18},startBody:{col:47,line:10},endBody:{col:2,line:18}}}}},title:"Components/FSearchInput",component:n},m=r(t=>({components:{FSearchInput:n},setup(){const o=p("");return{args:t,text:o}},template:'<FSearchInput v-model="text" v-bind="args" />'}),"Template"),a=m.bind({});a.args={variant:"outlined"};const q=["Default"];export{a as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=FSearchInput.stories.bd47e034.js.map
