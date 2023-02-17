var n=Object.defineProperty;var e=(t,o)=>n(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.caa622c4.js";import{F as r}from"./FSearchInput.0576b422.js";import"./FInput.9e64898c.js";import"./number.ea2b3954.js";import"./VTextField.dbd49551.js";import"./VCounter.4d5defc1.js";import"./index.07e0e4c3.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./VInput.353ca9d2.js";import"./color.795eceb6.js";import"./VIcon.f37f8177.js";import"./density.c07a8c02.js";import"./proxiedModel.073d34a6.js";import"./locale.312c25a1.js";import"./VMessages.e864fdf2.js";import"./transition.712d10eb.js";import"./loader.535d849b.js";import"./rounded.bd8ad820.js";import"./location.375c93f3.js";import"./anchor.57ff9838.js";import"./easing.36b781ab.js";import"./index.fc60a169.js";import"./forwardRefs.c003b6b8.js";const O={parameters:{storySource:{source:`import { ref } from "vue";
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
  template: \`<FSearchInput v-model="text" />\`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:47,line:10},endLoc:{col:2,line:18},startBody:{col:47,line:10},endBody:{col:2,line:18}}}}},title:"Components/FSearchInput",component:r},m=e(t=>({components:{FSearchInput:r},setup(){const o=p("");return{args:t,text:o}},template:'<FSearchInput v-model="text" />'}),"Template"),a=m.bind({});a.args={};const j=["Default"];export{a as Default,j as __namedExportsOrder,O as default};
//# sourceMappingURL=FSearchInput.stories.58f99bb5.js.map
