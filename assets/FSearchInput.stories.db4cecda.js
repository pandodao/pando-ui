var e=Object.defineProperty;var r=(t,o)=>e(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.62cdaeff.js";import{F as n}from"./FSearchInput.762e7f63.js";import"./FInput.33440f61.js";import"./number.ea2b3954.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./index.31ee38b0.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VInput.7941d77b.js";import"./color.5ac0909d.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./proxiedModel.c2b98033.js";import"./locale.b4680344.js";import"./VMessages.c418de83.js";import"./transition.28d05801.js";import"./loader.c48359f5.js";import"./rounded.9945cf4e.js";import"./location.8179a009.js";import"./anchor.4b6c6135.js";import"./easing.36b781ab.js";import"./index.68c608a7.js";import"./forwardRefs.c003b6b8.js";const O={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSearchInput.stories.db4cecda.js.map
