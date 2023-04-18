var r=Object.defineProperty;var n=(e,o)=>r(e,"name",{value:o,configurable:!0});import{F as t}from"./FInput.f0bd3585.js";import{F as i}from"./FAssetInputTools.f445f24d.js";import{r as l}from"./vue.esm-bundler.b09b7c5a.js";import"./number.d5e09512.js";import"./VTextField.32fb86ed.js";import"./VCounter.d53e5345.js";import"./index.38f7dd54.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VInput.c9d6b09b.js";import"./color.1fec8f8e.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./proxiedModel.f0d8de9f.js";import"./locale.0dcd1420.js";import"./VMessages.02e1bfc3.js";import"./transition.1a560eae.js";import"./loader.c496a144.js";import"./rounded.ccd03645.js";import"./location.11c487f7.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./easing.36b781ab.js";import"./index.21842925.js";import"./forwardRefs.c003b6b8.js";import"./FButton.fd5dc93c.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./elevation.844f69c6.js";import"./variant.eababd72.js";import"./index.eca3ba9a.js";import"./dimensions.b549aab6.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./VSpacer.14317ba5.js";import"./createSimpleFunctional.06ddaa9a.js";const U={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
//# sourceMappingURL=FInput.stories.5a5a2a0a.js.map
