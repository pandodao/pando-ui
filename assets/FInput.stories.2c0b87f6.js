var r=Object.defineProperty;var t=(e,n)=>r(e,"name",{value:n,configurable:!0});import{F as o}from"./FInput.22dd0ba0.js";import{F as i}from"./FAssetInputTools.d7ffc598.js";import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import"./bignumber.8dc24abd.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./index.5cf6a3e8.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VInput.d8777c43.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./proxiedModel.28fe5444.js";import"./locale.88650f04.js";import"./VMessages.d6b13295.js";import"./transition.d2bea911.js";import"./loader.a0162f6e.js";import"./rounded.28975b1c.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./easing.36b781ab.js";import"./index.8137a4d7.js";import"./forwardRefs.c003b6b8.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./elevation.12d4edaf.js";import"./variant.fbd007cc.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VSpacer.749a101d.js";import"./createSimpleFunctional.6499d319.js";const U={parameters:{storySource:{source:`import { FInput } from "./FInput";
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

const Template2: StoryFn<typeof FInput> = (args) => ({
  components: { FInput },
  setup() {
    const num = ref("");
    const rules = [(v) => !!v || "Field is required"];

    return { args, num, rules };
  },
  template: \`
    <FInput v-model="num" is-number v-bind="args" placeholder="Input Number" :rules="rules"  inputmode="decimal" />
  \`,
});

export const NumberInput = Template2.bind({});

NumberInput.args = {
  precision: 8,
};

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
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:58},startBody:{col:41,line:11},endBody:{col:2,line:58}},density:{startLoc:{col:41,line:11},endLoc:{col:2,line:58},startBody:{col:41,line:11},endBody:{col:2,line:58}},"number-input":{startLoc:{col:42,line:80},endLoc:{col:2,line:91},startBody:{col:42,line:80},endBody:{col:2,line:91}},"with-tools":{startLoc:{col:49,line:99},endLoc:{col:2,line:113},startBody:{col:49,line:99},endBody:{col:2,line:113}},slots:{startLoc:{col:45,line:115},endLoc:{col:2,line:123},startBody:{col:45,line:115},endBody:{col:2,line:123}}}}},title:"Components/FInput",component:o},s=t(e=>({components:{FInput:o},setup(){const n=p("");return{attrs:{...e,rules:[l=>!!l||"Field is required"]},text:n}},template:`
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
  `}),"Template"),m=s.bind({});m.args={loading:!1,singleLine:!1,disabled:!1,clearable:!0,label:"Label"};const u=s.bind({});u.args={loading:!1,singleLine:!1,disabled:!1,label:"Label",density:"default"};const c=t(e=>({components:{FInput:o},setup(){const n=p("");return{args:e,num:n,rules:[l=>!!l||"Field is required"]}},template:`
    <FInput v-model="num" is-number v-bind="args" placeholder="Input Number" :rules="rules"  inputmode="decimal" />
  `}),"Template2"),d=c.bind({});d.args={precision:8};const X=t(()=>({components:{FInput:o,FAssetInputTools:i},setup(){return{num:p("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),Y=t(()=>({components:{FInput:o},setup(){},template:`
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  `}),"Slots"),Z=["Default","Density","NumberInput","WithTools","Slots"];export{m as Default,u as Density,d as NumberInput,Y as Slots,X as WithTools,Z as __namedExportsOrder,U as default};
//# sourceMappingURL=FInput.stories.2c0b87f6.js.map
