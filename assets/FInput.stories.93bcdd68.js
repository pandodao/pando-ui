var l=Object.defineProperty;var t=(e,o)=>l(e,"name",{value:o,configurable:!0});import{F as n}from"./FInput.4a7d7292.js";import{F as u}from"./FAssetInputTools.884eeec7.js";import{r}from"./vue.esm-bundler.a5c4e1bf.js";import"./number.ea2b3954.js";import"./VTextField.cc6d2074.js";import"./VCounter.536d06c5.js";import"./index.628b3df7.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./VInput.34db0c3a.js";import"./color.43314d1d.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./proxiedModel.9639363f.js";import"./locale.76e208ea.js";import"./VMessages.90062972.js";import"./transition.c93b8895.js";import"./loader.7d1fab10.js";import"./rounded.a0c73c18.js";import"./easing.36b781ab.js";import"./index.549b0914.js";import"./forwardRefs.c003b6b8.js";import"./FButton.f3fc7c21.js";import"./VBtn.b5444450.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VSpacer.3c3f34f8.js";import"./createSimpleFunctional.f00f4b71.js";const R={parameters:{storySource:{source:`import { FInput } from "./FInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/FInput",
  component: FInput,
} as Meta<typeof FInput>;

const Template: StoryFn<typeof FInput> = (args) => ({
  components: { FInput },
  template: \`
    <div style="display: grid; gap: 16px;">
      <FInput v-model="text" placeholder="Placeholder" :rules="rules" v-bind="args" />
    </div>
  \`,
  setup() {
    const text = ref("Default");
    const rules = [(v) => !!v || "Field is required"];

    return { rules, args, text };
  },
});

export const Default = Template.bind({});
Default.args = {
  loading: false,
  singleLine: true,
  disabled: false,
  label: "Label",
};

export const NumberInput: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  setup() {
    const num = ref("");
    const rules = [(v) => !v || "Field is required"];

    return { num, rules };
  },
  template: \`
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  \`,
});

export const WithTools: StoryFn<typeof FInput> = () => ({
  components: { FInput, FAssetInputTools },
  setup() {
    const num = ref("");

    return { num };
  },
  template: \`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  \`,
});

export const Slots: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  setup() {},
  template: \`
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  \`,
});
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:24},startBody:{col:41,line:11},endBody:{col:2,line:24}},"number-input":{startLoc:{col:51,line:34},endLoc:{col:2,line:45},startBody:{col:51,line:34},endBody:{col:2,line:45}},"with-tools":{startLoc:{col:49,line:47},endLoc:{col:2,line:61},startBody:{col:49,line:47},endBody:{col:2,line:61}},slots:{startLoc:{col:45,line:63},endLoc:{col:2,line:71},startBody:{col:45,line:63},endBody:{col:2,line:71}}}}},title:"Components/FInput",component:n},i=t(e=>({components:{FInput:n},template:`
    <div style="display: grid; gap: 16px;">
      <FInput v-model="text" placeholder="Placeholder" :rules="rules" v-bind="args" />
    </div>
  `,setup(){const o=r("Default");return{rules:[s=>!!s||"Field is required"],args:e,text:o}}}),"Template"),m=i.bind({});m.args={loading:!1,singleLine:!0,disabled:!1,label:"Label"};const U=t(()=>({components:{FInput:n},setup(){return{num:r(""),rules:[p=>!p||"Field is required"]}},template:`
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  `}),"NumberInput"),V=t(()=>({components:{FInput:n,FAssetInputTools:u},setup(){return{num:r("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),X=t(()=>({components:{FInput:n},setup(){},template:`
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  `}),"Slots"),Y=["Default","NumberInput","WithTools","Slots"];export{m as Default,U as NumberInput,X as Slots,V as WithTools,Y as __namedExportsOrder,R as default};
//# sourceMappingURL=FInput.stories.93bcdd68.js.map
