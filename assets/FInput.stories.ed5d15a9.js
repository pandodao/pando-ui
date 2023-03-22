var r=Object.defineProperty;var n=(e,o)=>r(e,"name",{value:o,configurable:!0});import{F as t}from"./FInput.3756ea4b.js";import{F as i}from"./FAssetInputTools.0dfb03e9.js";import{r as l}from"./vue.esm-bundler.3b29098a.js";import"./number.ea2b3954.js";import"./VTextField.4378b041.js";import"./VCounter.66bfd87a.js";import"./index.f8ee2712.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VInput.f50d7073.js";import"./color.fef4ce02.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./proxiedModel.67252d17.js";import"./locale.eccdb440.js";import"./VMessages.ff964b60.js";import"./transition.94342caf.js";import"./loader.5b0d5ca4.js";import"./rounded.375414e4.js";import"./location.3a6dce64.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./easing.36b781ab.js";import"./index.1414bb4a.js";import"./forwardRefs.c003b6b8.js";import"./FButton.72dd92af.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./elevation.154beddf.js";import"./variant.be65e42d.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./VSpacer.805c8e99.js";import"./createSimpleFunctional.b1ebbe28.js";const U={parameters:{storySource:{source:`import { FInput } from "./FInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/FInput",
  component: FInput,
} as Meta<typeof FInput>;

const Template: StoryFn<typeof FInput> = (args) => ({
  components: { FInput },
  setup() {
    const text = ref("");
    const rules = [(v) => !!v || "Field is required"];

    return { attrs: { ...args, rules }, text };
  },
  template: \`
    <FInput v-model="text" v-bind="attrs" variant="underlined">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="outlined">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="filled">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="solo">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="plain">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
  \`,
});

export const Default = Template.bind({});

Default.args = {
  loading: false,
  singleLine: false,
  disabled: false,
  clearable: true,
  label: "Label",
};

export const Density = Template.bind({});

Density.args = {
  loading: false,
  singleLine: false,
  disabled: false,
  label: "Label",
  density: "default",
};

export const NumberInput: StoryFn<typeof FInput> = () => ({
  components: { FInput },
  setup() {
    const num = ref("");
    const rules = [(v) => !!v || "Field is required"];

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
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:58},startBody:{col:41,line:11},endBody:{col:2,line:58}},density:{startLoc:{col:41,line:11},endLoc:{col:2,line:58},startBody:{col:41,line:11},endBody:{col:2,line:58}},"number-input":{startLoc:{col:51,line:80},endLoc:{col:2,line:91},startBody:{col:51,line:80},endBody:{col:2,line:91}},"with-tools":{startLoc:{col:49,line:93},endLoc:{col:2,line:107},startBody:{col:49,line:93},endBody:{col:2,line:107}},slots:{startLoc:{col:45,line:109},endLoc:{col:2,line:117},startBody:{col:45,line:109},endBody:{col:2,line:117}}}}},title:"Components/FInput",component:t},s=n(e=>({components:{FInput:t},setup(){const o=l("");return{attrs:{...e,rules:[a=>!!a||"Field is required"]},text:o}},template:`
    <FInput v-model="text" v-bind="attrs" variant="underlined">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="outlined">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="filled">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="solo">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
    <FInput v-model="text" v-bind="attrs" variant="plain">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
        <VIcon>$close</VIcon>
      </template>
    </FInput>
  `}),"Template"),m=s.bind({});m.args={loading:!1,singleLine:!1,disabled:!1,clearable:!0,label:"Label"};const u=s.bind({});u.args={loading:!1,singleLine:!1,disabled:!1,label:"Label",density:"default"};const X=n(()=>({components:{FInput:t},setup(){return{num:l(""),rules:[p=>!!p||"Field is required"]}},template:`
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  `}),"NumberInput"),Y=n(()=>({components:{FInput:t,FAssetInputTools:i},setup(){return{num:l("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),Z=n(()=>({components:{FInput:t},setup(){},template:`
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  `}),"Slots"),ee=["Default","Density","NumberInput","WithTools","Slots"];export{m as Default,u as Density,X as NumberInput,Z as Slots,Y as WithTools,ee as __namedExportsOrder,U as default};
//# sourceMappingURL=FInput.stories.ed5d15a9.js.map
