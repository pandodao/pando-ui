var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as c,a as n,m as s,F as p,r as F}from"./vue.esm-bundler.60beb779.js";import{F as v}from"./FButton.7fb5afc5.js";import{V as u}from"./VBottomNavigation.0e3622e8.js";import{V as d}from"./VIcon.ccd22ecd.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./proxiedModel.c4bc26c4.js";import"./index.d3586bd0.js";import"./dimensions.71f8bcb1.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./anchor.46190ad2.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";import"./VProgressCircular.1a876490.js";import"./layout.be832025.js";const m=c({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t){const e={height:66,elevation:0,mandatory:!0},r=a(()=>n(p,null,[t.items.map(o=>n(v,{value:o.value,to:o.to,exact:o.exact,class:"f-bottom-nav__item"},{default:()=>[n(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&n("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>n(u,s({class:"f-bottom-nav"},e),{default:()=>r()})}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.ebc235bf.js.map
