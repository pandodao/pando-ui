var m=Object.defineProperty;var e=(o,t)=>m(o,"name",{value:t,configurable:!0});import{d as a}from"./vue.esm-bundler.0d7c29ee.js";import{F as n}from"./FBottomNav.9593f782.js";import"./FButton.c94e3704.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./layout.81e3c011.js";const h={parameters:{storySource:{source:`import { ref } from "vue";
import { FBottomNav } from "./FBottomNav";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FBottomNav",
  component: FBottomNav,
} as Meta<typeof FBottomNav>;

const Template: StoryFn<typeof FBottomNav> = (args) => ({
  components: { FBottomNav },
  setup() {
    const model = ref("home");

    return { args, model };
  },
  template: \`
    <span>{{ model }}</span>
    <FBottomNav v-model="model" v-bind="args"></FBottomNav>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: "Home", icon: "$FIconHomeFill", value: "home" },
    { text: "Market", icon: "$FIconMarketFill", value: "market" },
    { text: "Swap", icon: "$FIconSwapFill", value: "swap" },
    { text: "Me", icon: "$FIconPersonAFill", value: "me" },
  ],
};
`,locationsMap:{default:{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}}}}},name:"FBottomNav",component:n},r=e(o=>({components:{FBottomNav:n},setup(){const t=a("home");return{args:o,model:t}},template:`
    <span>{{ model }}</span>
    <FBottomNav v-model="model" v-bind="args"></FBottomNav>
  `}),"Template"),l=r.bind({});l.args={items:[{text:"Home",icon:"$FIconHomeFill",value:"home"},{text:"Market",icon:"$FIconMarketFill",value:"market"},{text:"Swap",icon:"$FIconSwapFill",value:"swap"},{text:"Me",icon:"$FIconPersonAFill",value:"me"}]};const D=["Default"];export{l as Default,D as __namedExportsOrder,h as default};
//# sourceMappingURL=FBottomNav.stories.10a31047.js.map
