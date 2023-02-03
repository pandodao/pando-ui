var n=Object.defineProperty;var s=(e,t)=>n(e,"name",{value:t,configurable:!0});import{F as o}from"./FAssetSelectField.c9b84b6e.js";import"./vue.esm-bundler.330b8bcd.js";import"./FAssetLogo.fc73f2f7.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./transition.d91c432b.js";import"./dimensions.6590eaa4.js";import"./locale.0eda84ca.js";import"./proxiedModel.815b9064.js";import"./VIcon.c758310f.js";import"./color.66c7a00f.js";const E={parameters:{storySource:{source:`import { Meta, StoryFn } from "@storybook/vue3";
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
`,locationsMap:{default:{startLoc:{col:52,line:9},endLoc:{col:2,line:21},startBody:{col:52,line:9},endBody:{col:2,line:21}}}}},title:"Components/FAssetSelectField",component:o},l=s(e=>({components:{FAssetSelectField:o},setup(){return{args:e,asset:{id:"c6d0c728-2624-429b-8e0d-d9d19b6592fa",symbol:"BTC",name:"Bitcoin",logo:"https://mixin-images.zeromesh.net/HvYGJsV5TGeZ-X9Ek3FEQohQZ3fE9LBEBGcOcn4c4BNHovP4fW4YB97Dg5LcXoQ1hUjMEgjbl1DPlKg1TW7kK6XP=s128"}}},template:'<FAssetSelectField :asset="asset" v-bind="args" />'}),"Template"),i=l.bind({});i.args={showName:!0,outlined:!0};const h=["Default"];export{i as Default,h as __namedExportsOrder,E as default};
//# sourceMappingURL=FAssetSelectField.stories.72c48a70.js.map
