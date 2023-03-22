var i=Object.defineProperty;var a=(t,n)=>i(t,"name",{value:n,configurable:!0});import{z as r,a as e,m as p,F,r as v}from"./vue.esm-bundler.3b29098a.js";import{F as u}from"./FButton.72dd92af.js";import{V as f}from"./VBottomNavigation.7e8ada0a.js";import{V as d}from"./VIcon.c254d683.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./color.fef4ce02.js";import"./variant.be65e42d.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./ssrBoot.e29182c8.js";const l=r({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t,{slots:n}){const m={height:66,elevation:0,mandatory:!0},s=a(()=>e(F,null,[t.items.map(o=>e(u,{value:o.value,to:o.to,exact:o.exact,active:o.active,class:"f-bottom-nav__item"},{default:()=>[e(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&e("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>e(f,p({class:"f-bottom-nav"},m),{default:()=>{var o;return((o=n.default)==null?void 0:o.call(n))||s()}})}}),K={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FBottomNav.stories.bed92577.js.map
