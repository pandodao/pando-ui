var s=Object.defineProperty;var e=(t,o)=>s(t,"name",{value:o,configurable:!0});import{F as n}from"./FInput.9e64898c.js";import{F as a}from"./FAssetInputTools.e2386d94.js";import{r as p}from"./vue.esm-bundler.caa622c4.js";import"./number.ea2b3954.js";import"./VTextField.dbd49551.js";import"./VCounter.4d5defc1.js";import"./index.07e0e4c3.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./VInput.353ca9d2.js";import"./color.795eceb6.js";import"./VIcon.f37f8177.js";import"./density.c07a8c02.js";import"./proxiedModel.073d34a6.js";import"./locale.312c25a1.js";import"./VMessages.e864fdf2.js";import"./transition.712d10eb.js";import"./loader.535d849b.js";import"./rounded.bd8ad820.js";import"./location.375c93f3.js";import"./anchor.57ff9838.js";import"./easing.36b781ab.js";import"./index.fc60a169.js";import"./forwardRefs.c003b6b8.js";import"./FButton.b7201e41.js";import"./VBtn.abf41941.js";import"./border.ae4ccc68.js";import"./elevation.3fce6244.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./VSpacer.20cf6c63.js";import"./createSimpleFunctional.2286a9cd.js";const K={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
//# sourceMappingURL=FInput.stories.8e624b85.js.map
