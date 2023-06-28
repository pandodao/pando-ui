var a=Object.defineProperty;var o=(e,s)=>a(e,"name",{value:s,configurable:!0});import{F as t}from"./FAssetLogo.0e70c9a8.js";import"./vue.esm-bundler.b09b7c5a.js";const c={parameters:{storySource:{source:`import { FAssetLogo } from "./FAssetLogo";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FAssetLogo",
  component: FAssetLogo,
} as Meta<typeof FAssetLogo>;

const Template: StoryFn<typeof FAssetLogo> = (args) => ({
  components: { FAssetLogo },
  setup() {
    const asset = {
      name: "Mixin",
      logo: "https://mixin-images.zeromesh.net/UasWtBZO0TZyLTLCFQjvE_UYekjC7eHCuT_9_52ZpzmCC-X-NPioVegng7Hfx0XmIUavZgz5UL-HIgPCBECc-Ws=s128",
      chainLogo:
        "https://mixin-images.zeromesh.net/zVDjOxNTQvVsA8h2B4ZVxuHoCF3DJszufYKWpd9duXUSbSapoZadC7_13cnWBqg0EmwmRcKGbJaUpA8wFfpgZA=s128",
    };
    return { args, asset };
  },
  template: \`<FAssetLogo :asset="asset" v-bind="args"></FAssetLogo>\`,
});

export const Default = Template.bind({});
Default.args = {};

export const Size = Template.bind({});
Size.args = { size: 32, chainSize: 10 };
`,locationsMap:{default:{startLoc:{col:45,line:9},endLoc:{col:2,line:21},startBody:{col:45,line:9},endBody:{col:2,line:21}},size:{startLoc:{col:45,line:9},endLoc:{col:2,line:21},startBody:{col:45,line:9},endBody:{col:2,line:21}}}}},title:"Components/FAssetLogo",component:t},n=o(e=>({components:{FAssetLogo:t},setup(){return{args:e,asset:{name:"Mixin",logo:"https://mixin-images.zeromesh.net/UasWtBZO0TZyLTLCFQjvE_UYekjC7eHCuT_9_52ZpzmCC-X-NPioVegng7Hfx0XmIUavZgz5UL-HIgPCBECc-Ws=s128",chainLogo:"https://mixin-images.zeromesh.net/zVDjOxNTQvVsA8h2B4ZVxuHoCF3DJszufYKWpd9duXUSbSapoZadC7_13cnWBqg0EmwmRcKGbJaUpA8wFfpgZA=s128"}}},template:'<FAssetLogo :asset="asset" v-bind="args"></FAssetLogo>'}),"Template"),i=n.bind({});i.args={};const m=n.bind({});m.args={size:32,chainSize:10};const l=["Default","Size"];export{i as Default,m as Size,l as __namedExportsOrder,c as default};
//# sourceMappingURL=FAssetLogo.stories.e7b3b73a.js.map
