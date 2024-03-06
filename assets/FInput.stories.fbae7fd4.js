var r=Object.defineProperty;var t=(e,n)=>r(e,"name",{value:n,configurable:!0});import{F as o}from"./FInput.ee50ce76.js";import{F as i}from"./FAssetInputTools.81431802.js";import{r as p}from"./vue.esm-bundler.80cafc0b.js";import"./bignumber.8dc24abd.js";import"./VTextField.be2090fb.js";import"./VField.59d98d58.js";import"./index.b676db0f.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./transition.b6a16e6c.js";import"./VInput.44c51e7f.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./VIcon.ac9f05d6.js";import"./VMessages.8e887dfb.js";import"./density.e2c1329b.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./anchor.5ba72fdd.js";import"./rounded.b42653ce.js";import"./easing.da2e9236.js";import"./forwardRefs.34034356.js";import"./index.f2b6c1e4.js";import"./FButton.5e8d1e13.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./variant.1e842247.js";import"./router.9241c2dd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VSpacer.beb84ecc.js";import"./createSimpleFunctional.19425ddc.js";const X={parameters:{storySource:{source:`import { FInput } from "./FInput";
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
  `}),"Template2"),d=c.bind({});d.args={precision:8};const Y=t(()=>({components:{FInput:o,FAssetInputTools:i},setup(){return{num:p("")}},template:`
    <FInput v-model="num" type="number" precision="8" :error-messages="['Amount is required']" hide-default-messages>
      <template #tools>
        <FAssetInputTools :messages="['Amount is required']" balance="1,000" connected />
      </template>
    </FInput>
  `}),"WithTools"),Z=t(()=>({components:{FInput:o},setup(){},template:`
    <FInput filled hide-details="auto" placeholder="Placeholder">
      <template #append-inner> % </template>
    </FInput>
  `}),"Slots"),ee=["Default","Density","NumberInput","WithTools","Slots"];export{m as Default,u as Density,d as NumberInput,Z as Slots,Y as WithTools,ee as __namedExportsOrder,X as default};
//# sourceMappingURL=FInput.stories.fbae7fd4.js.map
