var s=Object.defineProperty;var a=(t,o)=>s(t,"name",{value:o,configurable:!0});import{A as l,a as e,m as p,F as i,r as c}from"./vue.esm-bundler.a5c4e1bf.js";import{F as v}from"./FButton.f3fc7c21.js";import{V as F}from"./VBottomNavigation.7efda0bc.js";import{V as u}from"./VIcon.5ca83e1b.js";import"./VBtn.b5444450.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./locale.76e208ea.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./layout.6d881cfa.js";const m=l({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t){const o={height:66,elevation:0,mandatory:!0},r=a(()=>e(i,null,[t.items.map(n=>e(v,{value:n.value,class:"f-bottom-nav__item"},{default:()=>[e(u,{class:"f-bottom-nav__icon"},{default:()=>[n.icon]}),e("span",{class:"f-bottom-nav__text"},[n.text])]}))]),"content");return()=>e(F,p({class:"f-bottom-nav"},o),{default:()=>r()})}}),j={parameters:{storySource:{source:`import { ref } from "vue";
import { FBottomNav } from "./FBottomNav";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FBottomNav",
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
`,locationsMap:{default:{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}}}}},title:"Components/FBottomNav",component:m},d=a(t=>({components:{FBottomNav:m},setup(){const o=c("home");return{args:t,model:o}},template:`
    <span>{{ model }}</span>
    <FBottomNav v-model="model" v-bind="args"></FBottomNav>
  `}),"Template"),f=d.bind({});f.args={items:[{text:"Home",icon:"$FIconHomeFill",value:"home"},{text:"Market",icon:"$FIconMarketFill",value:"market"},{text:"Swap",icon:"$FIconSwapFill",value:"swap"},{text:"Me",icon:"$FIconPersonAFill",value:"me"}]};const q=["Default"];export{f as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=FBottomNav.stories.8845829f.js.map
