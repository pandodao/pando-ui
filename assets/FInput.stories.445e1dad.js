var s=Object.defineProperty;var e=(t,o)=>s(t,"name",{value:o,configurable:!0});import{F as n}from"./FInput.3389dce9.js";import{F as a}from"./FAssetInputTools.5de1f0cc.js";import{r as p}from"./vue.esm-bundler.330b8bcd.js";import"./number.ea2b3954.js";import"./VTextField.d9025984.js";import"./VCounter.a5b91a3f.js";import"./index.a5e0d629.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VInput.3a20875e.js";import"./color.66c7a00f.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./proxiedModel.815b9064.js";import"./locale.0eda84ca.js";import"./VMessages.206e4d2e.js";import"./transition.d91c432b.js";import"./loader.c202c022.js";import"./rounded.257cff90.js";import"./location.2cb2469d.js";import"./anchor.7cdf4a4d.js";import"./easing.36b781ab.js";import"./index.0fdd422f.js";import"./forwardRefs.c003b6b8.js";import"./FButton.d034f6f2.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./elevation.b2f27a68.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./dimensions.6590eaa4.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./VSpacer.1ee3d07f.js";import"./createSimpleFunctional.05bfccd4.js";const K={parameters:{storySource:{source:`import { FInput } from "./FInput";
import { FAssetInputTools } from "../FAssetInputTools";
import { Meta, StoryFn } from "@storybook/vue3";
import { ref } from "vue";

export default {
  title: "Components/FInput",
  component: FInput,
} as Meta<typeof FInput>;

export const Default: StoryFn<typeof FInput> = (args) => ({
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
      <template #append-inner>
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

Default.args = {
  loading: false,
  singleLine: false,
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
`,locationsMap:{default:{startLoc:{col:47,line:11},endLoc:{col:2,line:61},startBody:{col:47,line:11},endBody:{col:2,line:61}},"number-input":{startLoc:{col:51,line:70},endLoc:{col:2,line:81},startBody:{col:51,line:70},endBody:{col:2,line:81}},"with-tools":{startLoc:{col:49,line:83},endLoc:{col:2,line:97},startBody:{col:49,line:83},endBody:{col:2,line:97}},slots:{startLoc:{col:45,line:99},endLoc:{col:2,line:107},startBody:{col:45,line:99},endBody:{col:2,line:107}}}}},title:"Components/FInput",component:n},m=e(t=>({components:{FInput:n},setup(){const o=p("");return{attrs:{...t,rules:[r=>!!r||"Field is required"]},text:o}},template:`
    <FInput v-model="text" v-bind="attrs" variant="underlined">
      <template #append>
        <VIcon>$close</VIcon>
      </template>
      <template #append-inner>
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
  `}),"Default");m.args={loading:!1,singleLine:!1,disabled:!1,label:"Label"};const Q=e(()=>({components:{FInput:n},setup(){return{num:p(""),rules:[l=>!l||"Field is required"]}},template:`
    <FInput v-model="num" type="number" precision="8" placeholder="Input Number" :rules="rules" />
  `}),"NumberInput"),R=e(()=>({components:{FInput:n,FAssetInputTools:a},setup(){return{num:p("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),U=e(()=>({components:{FInput:n},setup(){},template:`
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  `}),"Slots"),X=["Default","NumberInput","WithTools","Slots"];export{m as Default,Q as NumberInput,U as Slots,R as WithTools,X as __namedExportsOrder,K as default};
//# sourceMappingURL=FInput.stories.445e1dad.js.map
