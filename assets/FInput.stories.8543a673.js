var l=Object.defineProperty;var n=(e,t)=>l(e,"name",{value:t,configurable:!0});import{F as o}from"./FInput.cc1e9cf7.js";import{F as u}from"./FAssetInputTools.57badf86.js";import{d as r}from"./vue.esm-bundler.0d7c29ee.js";import"./VCounter.af1b4b68.js";import"./index.e4eb9e0e.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VInput.76852b74.js";import"./color.a1d36358.js";import"./VIcon.27b7c9a9.js";import"./density.1812b102.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./VMessages.5340d354.js";import"./transition.845f9488.js";import"./loader.dd2f3ca6.js";import"./easing.d7926d43.js";import"./index.da6e5ccf.js";import"./forwardRefs.c5465513.js";import"./FButton.c94e3704.js";import"./VBtn.aebc80dd.js";import"./variant.f85b9fa5.js";import"./elevation.b2f78cc5.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./createSimpleFunctional.e0d25bf4.js";const C={parameters:{storySource:{source:`import { FInput } from "./FInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  name: "FInput",
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
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:24},startBody:{col:41,line:11},endBody:{col:2,line:24}},"number-input":{startLoc:{col:51,line:34},endLoc:{col:2,line:45},startBody:{col:51,line:34},endBody:{col:2,line:45}},"with-tools":{startLoc:{col:49,line:47},endLoc:{col:2,line:61},startBody:{col:49,line:47},endBody:{col:2,line:61}}}}},name:"FInput",component:o},m=n(e=>({components:{FInput:o},template:`
    <div style="display: grid; gap: 16px;">
      <FInput v-model="text" placeholder="Placeholder" :rules="rules" v-bind="args" />
    </div>
  `,setup(){const t=r("Default");return{rules:[p=>!!p||"Field is required"],args:e,text:t}}}),"Template"),i=m.bind({});i.args={loading:!1,singleLine:!0,disabled:!1,label:"Label"};const G=n(()=>({components:{FInput:o},setup(){return{num:r(""),rules:[s=>!s||"Field is required"]}},template:`
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  `}),"NumberInput"),H=n(()=>({components:{FInput:o,FAssetInputTools:u},setup(){return{num:r("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),J=["Default","NumberInput","WithTools"];export{i as Default,G as NumberInput,H as WithTools,J as __namedExportsOrder,C as default};
//# sourceMappingURL=FInput.stories.8543a673.js.map
