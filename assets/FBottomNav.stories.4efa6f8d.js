var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{A as c,a as n,m as s,F as p,r as F}from"./vue.esm-bundler.06cbf4f3.js";import{F as v}from"./FButton.042bb067.js";import{V as u}from"./VBottomNavigation.0ef11847.js";import{V as d}from"./VIcon.4e22765d.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./layout.81015a34.js";const m=c({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t){const e={height:66,elevation:0,mandatory:!0},r=a(()=>n(p,null,[t.items.map(o=>n(v,{value:o.value,to:o.to,exact:o.exact,class:"f-bottom-nav__item"},{default:()=>[n(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&n("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>n(u,s({class:"f-bottom-nav"},e),{default:()=>r()})}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.4efa6f8d.js.map
