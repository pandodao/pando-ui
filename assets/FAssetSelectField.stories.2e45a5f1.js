var n=Object.defineProperty;var s=(e,t)=>n(e,"name",{value:t,configurable:!0});import{F as o}from"./FAssetSelectField.2424bebb.js";import"./vue.esm-bundler.a5c4e1bf.js";import"./FAssetLogo.5a526eb7.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./transition.c93b8895.js";import"./dimensions.b6fbc401.js";import"./locale.76e208ea.js";import"./proxiedModel.9639363f.js";import"./VIcon.5ca83e1b.js";import"./color.43314d1d.js";const E={parameters:{storySource:{source:`import { Meta, StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=FAssetSelectField.stories.2e45a5f1.js.map
