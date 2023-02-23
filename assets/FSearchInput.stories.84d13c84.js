var e=Object.defineProperty;var r=(t,o)=>e(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.57aa1454.js";import{F as n}from"./FSearchInput.de430b11.js";import"./FInput.be24e9fb.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./index.5cb25ca4.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VInput.a59f36d0.js";import"./color.5e70182f.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./proxiedModel.aff93369.js";import"./locale.ce33eacd.js";import"./VMessages.7f48a74b.js";import"./transition.7787ec60.js";import"./loader.538ed1c8.js";import"./rounded.638bf334.js";import"./location.7ef01c4f.js";import"./anchor.8b678110.js";import"./easing.36b781ab.js";import"./index.168f645e.js";import"./forwardRefs.c003b6b8.js";const O={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSearchInput.stories.84d13c84.js.map
