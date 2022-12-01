var l=Object.defineProperty;var n=(e,t)=>l(e,"name",{value:t,configurable:!0});import{F as o}from"./FInput.0625b872.js";import{F as u}from"./FAssetInputTools.d59af979.js";import{d as r}from"./vue.esm-bundler.03d0f9c2.js";import"./index.98b5e059.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./VLabel.f4f94bb7.js";import"./VIcon.48347d4a.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./VMessages.cbf0f59f.js";import"./transition.37736cb0.js";import"./loader.30593133.js";import"./easing.d7926d43.js";import"./index.7705c375.js";import"./forwardRefs.c5465513.js";import"./FButton.2e1405fc.js";import"./VBtn.a413b61a.js";import"./variant.89df963d.js";import"./elevation.ef328fb6.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./createSimpleFunctional.80c809ed.js";const z={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
  `,setup(){const t=r("Default");return{rules:[p=>!!p||"Field is required"],args:e,text:t}}}),"Template"),i=m.bind({});i.args={loading:!1,singleLine:!0,disabled:!1,label:"Label"};const C=n(()=>({components:{FInput:o},setup(){return{num:r(""),rules:[s=>!s||"Field is required"]}},template:`
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  `}),"NumberInput"),G=n(()=>({components:{FInput:o,FAssetInputTools:u},setup(){return{num:r("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),H=["Default","NumberInput","WithTools"];export{i as Default,C as NumberInput,G as WithTools,H as __namedExportsOrder,z as default};
//# sourceMappingURL=FInput.stories.9b333266.js.map
