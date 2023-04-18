var i=Object.defineProperty;var a=(t,n)=>i(t,"name",{value:n,configurable:!0});import{A as r,a as e,m as p,F,r as v}from"./vue.esm-bundler.9500adb2.js";import{F as u}from"./FButton.d61383cc.js";import{V as f}from"./VBottomNavigation.f76a89f4.js";import{V as d}from"./VIcon.b10ecbaa.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./ssrBoot.cad34dc3.js";const l=r({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t,{slots:n}){const m={height:66,elevation:0,mandatory:!0},s=a(()=>e(F,null,[t.items.map(o=>e(u,{value:o.value,to:o.to,exact:o.exact,active:o.active,class:"f-bottom-nav__item"},{default:()=>[e(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&e("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>e(f,p({class:"f-bottom-nav"},m),{default:()=>{var o;return((o=n.default)==null?void 0:o.call(n))||s()}})}}),K={parameters:{storySource:{source:`import { ref } from "vue";
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
    {
      text: "Market",
      icon: "$FIconMarketFill",
      value: "market",
      active: "true",
    },
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

export const Slots: StoryFn<typeof FBottomNav> = (args) => ({
  components: { FBottomNav },
  setup() {
    return { args };
  },
  template: \`
    <span>{{ model }}</span>
    <FBottomNav>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconHomeFill</VIcon>
        <span class="f-bottom-nav__text">Home</span>
      </FButton>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconMarketFill</VIcon>
        <span class="f-bottom-nav__text">Market</span>
      </FButton>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconSwapFill</VIcon>
        <span class="f-bottom-nav__text">Swap</span>
      </FButton>
    </FBottomNav>
  \`,
});
`,locationsMap:{default:{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}},"no-text":{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}},href:{startLoc:{col:45,line:10},endLoc:{col:2,line:21},startBody:{col:45,line:10},endBody:{col:2,line:21}},slots:{startLoc:{col:49,line:58},endLoc:{col:2,line:80},startBody:{col:49,line:58},endBody:{col:2,line:80}}}}},title:"Components/FBottomNav",component:l},c=a(t=>({components:{FBottomNav:l},setup(){const n=v("home");return{args:t,model:n}},template:`
    <span>{{ model }}</span>
    <FBottomNav v-model="model" v-bind="args"></FBottomNav>
  `}),"Template"),_=c.bind({});_.args={items:[{text:"Home",icon:"$FIconHomeFill",value:"home"},{text:"Market",icon:"$FIconMarketFill",value:"market",active:"true"},{text:"Swap",icon:"$FIconSwapFill",value:"swap"},{text:"Me",icon:"$FIconPersonAFill",value:"me"}]};const B=c.bind({});B.args={items:[{icon:"$FIconHomeFill",value:"home"},{icon:"$FIconMarketFill",value:"market"},{icon:"$FIconSwapFill",value:"swap"},{icon:"$FIconPersonAFill",value:"me"}]};const I=c.bind({});I.args={items:[{icon:"$FIconHomeFill",href:"/"},{icon:"$FIconMarketFill",href:"/market"},{icon:"$FIconSwapFill",value:"/swap"},{icon:"$FIconPersonAFill",value:"/me"}]};const Q=a(t=>({components:{FBottomNav:l},setup(){return{args:t}},template:`
    <span>{{ model }}</span>
    <FBottomNav>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconHomeFill</VIcon>
        <span class="f-bottom-nav__text">Home</span>
      </FButton>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconMarketFill</VIcon>
        <span class="f-bottom-nav__text">Market</span>
      </FButton>
      <FButton class="f-bottom-nav__item">
        <VIcon class="f-bottom-nav__icon">$FIconSwapFill</VIcon>
        <span class="f-bottom-nav__text">Swap</span>
      </FButton>
    </FBottomNav>
  `}),"Slots"),R=["Default","NoText","Href","Slots"];export{_ as Default,I as Href,B as NoText,Q as Slots,R as __namedExportsOrder,K as default};
//# sourceMappingURL=FBottomNav.stories.cfe8ec1d.js.map
