var n=Object.defineProperty;var e=(t,o)=>n(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.06cbf4f3.js";import{F as r}from"./FSearchInput.b5b40896.js";import"./FInput.15987765.js";import"./number.ea2b3954.js";import"./VTextField.d88de585.js";import"./VCounter.19239368.js";import"./index.b7dbf2f4.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VInput.747c82dc.js";import"./color.9c80aa54.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./proxiedModel.ffcb1955.js";import"./locale.7c7f5def.js";import"./VMessages.4767cc10.js";import"./transition.60048a78.js";import"./loader.ff14b575.js";import"./rounded.ae3fe3ca.js";import"./location.efb67ad2.js";import"./anchor.4d34e672.js";import"./easing.36b781ab.js";import"./index.667911d0.js";import"./forwardRefs.c003b6b8.js";const O={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FSearchInput.stories.8e1e00e3.js.map
