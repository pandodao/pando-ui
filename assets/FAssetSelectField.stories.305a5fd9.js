var n=Object.defineProperty;var s=(e,t)=>n(e,"name",{value:t,configurable:!0});import{F as o}from"./FAssetSelectField.6f827bc0.js";import"./vue.esm-bundler.b09b7c5a.js";import"./FAssetLogo.0e70c9a8.js";import"./locale.88650f04.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VIcon.bd07cc2b.js";const g={parameters:{storySource:{source:`import { Meta, StoryFn } from "@storybook/vue3";
import { FAssetSelectField } from "./FAssetSelectField";

export default {
  title: "Components/FAssetSelectField",
  component: FAssetSelectField,
} as Meta<typeof FAssetSelectField>;

const Template: StoryFn<typeof FAssetSelectField> = (args) => ({
  components: { FAssetSelectField },
  setup() {
    const asset = {
      id: "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
      symbol: "BTC",
      name: "Bitcoin",
      logo: "https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128",
    };
    return { args, asset };
  },
  template: \`<FAssetSelectField :asset="asset" v-bind="args" />\`,
});

export const Default = Template.bind({});
Default.args = { showName: true, outlined: true };
`,locationsMap:{default:{startLoc:{col:52,line:9},endLoc:{col:2,line:21},startBody:{col:52,line:9},endBody:{col:2,line:21}}}}},title:"Components/FAssetSelectField",component:o},l=s(e=>({components:{FAssetSelectField:o},setup(){return{args:e,asset:{id:"c6d0c728-2624-429b-8e0d-d9d19b6592fa",symbol:"BTC",name:"Bitcoin",logo:"https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"}}},template:'<FAssetSelectField :asset="asset" v-bind="args" />'}),"Template"),i=l.bind({});i.args={showName:!0,outlined:!0};const S=["Default"];export{i as Default,S as __namedExportsOrder,g as default};
//# sourceMappingURL=FAssetSelectField.stories.305a5fd9.js.map
