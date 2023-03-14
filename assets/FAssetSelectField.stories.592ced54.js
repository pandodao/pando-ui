var n=Object.defineProperty;var s=(e,t)=>n(e,"name",{value:t,configurable:!0});import{F as o}from"./FAssetSelectField.75c93540.js";import"./vue.esm-bundler.62cdaeff.js";import"./FAssetLogo.dc864486.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./transition.28d05801.js";import"./dimensions.c27e6138.js";import"./locale.b4680344.js";import"./proxiedModel.c2b98033.js";import"./VIcon.ddcbca9b.js";import"./color.5ac0909d.js";const E={parameters:{storySource:{source:`import { Meta, StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=FAssetSelectField.stories.592ced54.js.map
