var e=Object.defineProperty;var r=(t,o)=>e(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import{F as n}from"./FSearchInput.c05c1a18.js";import"./FInput.f0bd3585.js";import"./number.d5e09512.js";import"./VTextField.32fb86ed.js";import"./VCounter.d53e5345.js";import"./index.38f7dd54.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VInput.c9d6b09b.js";import"./color.1fec8f8e.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./proxiedModel.f0d8de9f.js";import"./locale.0dcd1420.js";import"./VMessages.02e1bfc3.js";import"./transition.1a560eae.js";import"./loader.c496a144.js";import"./rounded.ccd03645.js";import"./location.11c487f7.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./easing.36b781ab.js";import"./index.21842925.js";import"./forwardRefs.c003b6b8.js";const j={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSearchInput.stories.691ba905.js.map
