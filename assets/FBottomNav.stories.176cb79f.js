var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as c,a as n,m as s,F as p,r as F}from"./vue.esm-bundler.caa622c4.js";import{F as v}from"./FButton.b7201e41.js";import{V as u}from"./VBottomNavigation.9c059bee.js";import{V as d}from"./VIcon.f37f8177.js";import"./VBtn.abf41941.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./layout.d0c53e40.js";const m=c({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t){const e={height:66,elevation:0,mandatory:!0},r=a(()=>n(p,null,[t.items.map(o=>n(v,{value:o.value,to:o.to,exact:o.exact,class:"f-bottom-nav__item"},{default:()=>[n(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&n("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>n(u,s({class:"f-bottom-nav"},e),{default:()=>r()})}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.176cb79f.js.map
