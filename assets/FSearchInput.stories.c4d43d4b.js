var e=Object.defineProperty;var r=(t,o)=>e(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import{F as n}from"./FSearchInput.c8b3fa61.js";import"./FInput.239100f8.js";import"./number.d5e09512.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./index.5cf6a3e8.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VInput.d8777c43.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./locale.88650f04.js";import"./VMessages.d6b13295.js";import"./transition.d2bea911.js";import"./loader.a0162f6e.js";import"./rounded.28975b1c.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./easing.36b781ab.js";import"./index.8137a4d7.js";import"./forwardRefs.c003b6b8.js";const O={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:47,line:10},endLoc:{col:2,line:18},startBody:{col:47,line:10},endBody:{col:2,line:18}}}}},title:"Components/FSearchInput",component:n},a=r(t=>({components:{FSearchInput:n},setup(){const o=p("");return{args:t,text:o}},template:'<FSearchInput v-model="text" v-bind="args" />'}),"Template"),m=a.bind({});m.args={variant:"outlined"};const j=["Default"];export{m as Default,j as __namedExportsOrder,O as default};
//# sourceMappingURL=FSearchInput.stories.c4d43d4b.js.map
