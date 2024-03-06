var e=Object.defineProperty;var r=(t,o)=>e(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.80cafc0b.js";import{F as n}from"./FSearchInput.d7e59333.js";import"./FInput.ee50ce76.js";import"./bignumber.8dc24abd.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./index.b676db0f.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./transition.b6a16e6c.js";import"./VInput.44c51e7f.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./VIcon.ac9f05d6.js";import"./VMessages.8e887dfb.js";import"./density.e2c1329b.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./anchor.5ba72fdd.js";import"./rounded.b42653ce.js";import"./easing.da2e9236.js";import"./forwardRefs.34034356.js";import"./index.f2b6c1e4.js";const O={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSearchInput.stories.6fab248b.js.map
