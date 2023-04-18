var r=Object.defineProperty;var n=(e,o)=>r(e,"name",{value:o,configurable:!0});import{F as t}from"./FInput.1db1a978.js";import{F as i}from"./FAssetInputTools.3327d484.js";import{r as l}from"./vue.esm-bundler.9500adb2.js";import"./number.d5e09512.js";import"./VTextField.73cde862.js";import"./VCounter.a1a93cec.js";import"./index.c2993bc7.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VInput.33e34f4e.js";import"./color.45246ddd.js";import"./VIcon.b10ecbaa.js";import"./density.0c8fab1e.js";import"./proxiedModel.881d858e.js";import"./locale.7efc9def.js";import"./VMessages.a0bdae17.js";import"./transition.10caf698.js";import"./loader.4d40f77d.js";import"./rounded.d16b72e9.js";import"./location.c535e823.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./easing.36b781ab.js";import"./index.91748bc9.js";import"./forwardRefs.c003b6b8.js";import"./FButton.d61383cc.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./elevation.d906eb56.js";import"./variant.95637a5a.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VSpacer.0edf83e3.js";import"./createSimpleFunctional.0b08b174.js";const U={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
//# sourceMappingURL=FInput.stories.877f0e8c.js.map
