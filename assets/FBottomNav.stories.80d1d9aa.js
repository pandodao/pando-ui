var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as c,a as n,m as s,F as p,r as F}from"./vue.esm-bundler.1ba604f9.js";import{F as v}from"./FButton.da03e124.js";import{V as u}from"./VBottomNavigation.951ff2f8.js";import{V as d}from"./VIcon.518cdeb6.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./color.b891a321.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./layout.e043ac0b.js";const m=c({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t){const e={height:66,elevation:0,mandatory:!0},r=a(()=>n(p,null,[t.items.map(o=>n(v,{value:o.value,to:o.to,exact:o.exact,class:"f-bottom-nav__item"},{default:()=>[n(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&n("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>n(u,s({class:"f-bottom-nav"},e),{default:()=>r()})}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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

export const NoText = Template.bind({});
NoText.args = {
  items: [
    { icon: "$FIconHomeFill", value: "home" },
    { icon: "$FIconMarketFill", value: "market" },
    { icon: "$FIconSwapFill", value: "swap" },
    { icon: "$FIconPersonAFill", value: "me" },
  ],
};

export const Href = Template.bind({});
Href.args = {
  items: [
    { icon: "$FIconHomeFill", href: "/" },
    { icon: "$FIconMarketFill", href: "/market" },
    { icon: "$FIconSwapFill", value: "/swap" },
    { icon: "$FIconPersonAFill", value: "/me" },
  ],
};
`,locationsMap:{default:{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}},"no-text":{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}},href:{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}}}}},title:"Components/FBottomNav",component:m},l=a(t=>({components:{FBottomNav:m},setup(){const e=F("home");return{args:t,model:e}},template:`
    <span>{{ model }}</span>
    <FBottomNav v-model="model" v-bind="args"></FBottomNav>
  `}),"Template"),f=l.bind({});f.args={items:[{text:"Home",icon:"$FIconHomeFill",value:"home"},{text:"Market",icon:"$FIconMarketFill",value:"market"},{text:"Swap",icon:"$FIconSwapFill",value:"swap"},{text:"Me",icon:"$FIconPersonAFill",value:"me"}]};const I=l.bind({});I.args={items:[{icon:"$FIconHomeFill",value:"home"},{icon:"$FIconMarketFill",value:"market"},{icon:"$FIconSwapFill",value:"swap"},{icon:"$FIconPersonAFill",value:"me"}]};const $=l.bind({});$.args={items:[{icon:"$FIconHomeFill",href:"/"},{icon:"$FIconMarketFill",href:"/market"},{icon:"$FIconSwapFill",value:"/swap"},{icon:"$FIconPersonAFill",value:"/me"}]};const J=["Default","NoText","Href"];export{f as Default,$ as Href,I as NoText,J as __namedExportsOrder,G as default};
//# sourceMappingURL=FBottomNav.stories.80d1d9aa.js.map
