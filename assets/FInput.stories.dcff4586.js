var s=Object.defineProperty;var e=(t,o)=>s(t,"name",{value:o,configurable:!0});import{F as n}from"./FInput.15987765.js";import{F as a}from"./FAssetInputTools.d997a836.js";import{r as p}from"./vue.esm-bundler.06cbf4f3.js";import"./number.ea2b3954.js";import"./VTextField.d88de585.js";import"./VCounter.19239368.js";import"./index.b7dbf2f4.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VInput.747c82dc.js";import"./color.9c80aa54.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./proxiedModel.ffcb1955.js";import"./locale.7c7f5def.js";import"./VMessages.4767cc10.js";import"./transition.60048a78.js";import"./loader.ff14b575.js";import"./rounded.ae3fe3ca.js";import"./location.efb67ad2.js";import"./anchor.4d34e672.js";import"./easing.36b781ab.js";import"./index.667911d0.js";import"./forwardRefs.c003b6b8.js";import"./FButton.042bb067.js";import"./VBtn.a6fb96e2.js";import"./border.386c98bf.js";import"./elevation.906ca0d0.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VSpacer.680927fa.js";import"./createSimpleFunctional.917a427b.js";const K={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
//# sourceMappingURL=FInput.stories.dcff4586.js.map
