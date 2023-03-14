var s=Object.defineProperty;var e=(t,o)=>s(t,"name",{value:o,configurable:!0});import{F as n}from"./FInput.33440f61.js";import{F as a}from"./FAssetInputTools.d5f2e51c.js";import{r as p}from"./vue.esm-bundler.62cdaeff.js";import"./number.ea2b3954.js";import"./VTextField.74d2a0fa.js";import"./VCounter.8bd4f380.js";import"./index.31ee38b0.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VInput.7941d77b.js";import"./color.5ac0909d.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./proxiedModel.c2b98033.js";import"./locale.b4680344.js";import"./VMessages.c418de83.js";import"./transition.28d05801.js";import"./loader.c48359f5.js";import"./rounded.9945cf4e.js";import"./location.8179a009.js";import"./anchor.4b6c6135.js";import"./easing.36b781ab.js";import"./index.68c608a7.js";import"./forwardRefs.c003b6b8.js";import"./FButton.7a11c708.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./elevation.79ced88b.js";import"./variant.cb074882.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./VSpacer.c706d964.js";import"./createSimpleFunctional.f6324448.js";const K={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
//# sourceMappingURL=FInput.stories.215cf851.js.map
