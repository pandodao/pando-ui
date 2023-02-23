var s=Object.defineProperty;var e=(t,o)=>s(t,"name",{value:o,configurable:!0});import{F as n}from"./FInput.be24e9fb.js";import{F as a}from"./FAssetInputTools.1e5c74ce.js";import{r as p}from"./vue.esm-bundler.57aa1454.js";import"./number.ea2b3954.js";import"./VTextField.5738fd9a.js";import"./VCounter.03254f21.js";import"./index.5cb25ca4.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VInput.a59f36d0.js";import"./color.5e70182f.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./proxiedModel.aff93369.js";import"./locale.ce33eacd.js";import"./VMessages.7f48a74b.js";import"./transition.7787ec60.js";import"./loader.538ed1c8.js";import"./rounded.638bf334.js";import"./location.7ef01c4f.js";import"./anchor.8b678110.js";import"./easing.36b781ab.js";import"./index.168f645e.js";import"./forwardRefs.c003b6b8.js";import"./FButton.95509114.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./elevation.08bb2882.js";import"./variant.58edd759.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VSpacer.da6438ea.js";import"./createSimpleFunctional.3ee3a08b.js";const K={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
  `}),"Default");m.args={loading:!1,singleLine:!1,disabled:!1,label:"Label"};const Q=e(()=>({components:{FInput:n},setup(){return{num:p(""),rules:[l=>!!l||"Field is required"]}},template:`
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
//# sourceMappingURL=FInput.stories.d830f4f3.js.map
