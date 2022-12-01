var m=Object.defineProperty;var e=(o,t)=>m(o,"name",{value:t,configurable:!0});import{d as a}from"./vue.esm-bundler.03d0f9c2.js";import{F as n}from"./FBottomNav.2b8ddebc.js";import"./FButton.2e1405fc.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./helpers.11996f79.js";import"./useRender.4b8f74ab.js";import"./variant.89df963d.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./VIcon.48347d4a.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./layout.758c3963.js";const h={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.9dfd1764.js.map
