var i=Object.defineProperty;var a=(t,n)=>i(t,"name",{value:n,configurable:!0});import{D as r,a as e,m as p,F,r as v}from"./vue.esm-bundler.80cafc0b.js";import{F as u}from"./FButton.5e8d1e13.js";import{V as f}from"./VBottomNavigation.bf20c0ba.js";import{V as d}from"./VIcon.ac9f05d6.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./layout.c04eea67.js";import"./ssrBoot.e8acd638.js";const l=r({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t,{slots:n}){const m={height:66,elevation:0,mandatory:!0},s=a(()=>e(F,null,[t.items.map(o=>e(u,{value:o.value,to:o.to,exact:o.exact,active:o.active,class:"f-bottom-nav__item"},{default:()=>[e(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&e("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>e(f,p({class:"f-bottom-nav"},m),{default:()=>{var o;return((o=n.default)==null?void 0:o.call(n))||s()}})}}),K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.0961e4c1.js.map
