var i=Object.defineProperty;var a=(t,e)=>i(t,"name",{value:e,configurable:!0});import{z as c,a as n,m as s,F as p,r as F}from"./vue.esm-bundler.57aa1454.js";import{F as v}from"./FButton.95509114.js";import{V as u}from"./VBottomNavigation.211552fb.js";import{V as d}from"./VIcon.b7876f5b.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./ssrBoot.38082b65.js";const m=c({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t){const e={height:66,elevation:0,mandatory:!0},r=a(()=>n(p,null,[t.items.map(o=>n(v,{value:o.value,to:o.to,exact:o.exact,class:"f-bottom-nav__item"},{default:()=>[n(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&n("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>n(u,s({class:"f-bottom-nav"},e),{default:()=>r()})}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.93aff15a.js.map
