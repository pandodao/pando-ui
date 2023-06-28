var i=Object.defineProperty;var a=(t,n)=>i(t,"name",{value:n,configurable:!0});import{A as r,a as e,m as p,F,r as v}from"./vue.esm-bundler.b09b7c5a.js";import{F as u}from"./FButton.7621db81.js";import{V as f}from"./VBottomNavigation.710ba8b7.js";import{V as d}from"./VIcon.bd07cc2b.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./ssrBoot.4ecb96a7.js";const l=r({name:"FBottomNav",props:{items:{type:Array,default:()=>[]}},setup(t,{slots:n}){const m={height:66,elevation:0,mandatory:!0},s=a(()=>e(F,null,[t.items.map(o=>e(u,{value:o.value,to:o.to,exact:o.exact,active:o.active,class:"f-bottom-nav__item"},{default:()=>[e(d,{class:"f-bottom-nav__icon"},{default:()=>[o.icon]}),o.text&&e("span",{class:"f-bottom-nav__text"},[o.text])]}))]),"content");return()=>e(f,p({class:"f-bottom-nav"},m),{default:()=>{var o;return((o=n.default)==null?void 0:o.call(n))||s()}})}}),G={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),_=c.bind({});_.args={items:[{text:"Home",icon:"$FIconHomeFill",value:"home"},{text:"Market",icon:"$FIconMarketFill",value:"market",active:"true"},{text:"Swap",icon:"$FIconSwapFill",value:"swap"},{text:"Me",icon:"$FIconPersonAFill",value:"me"}]};const B=c.bind({});B.args={items:[{icon:"$FIconHomeFill",value:"home"},{icon:"$FIconMarketFill",value:"market"},{icon:"$FIconSwapFill",value:"swap"},{icon:"$FIconPersonAFill",value:"me"}]};const I=c.bind({});I.args={items:[{icon:"$FIconHomeFill",href:"/"},{icon:"$FIconMarketFill",href:"/market"},{icon:"$FIconSwapFill",value:"/swap"},{icon:"$FIconPersonAFill",value:"/me"}]};const J=a(t=>({components:{FBottomNav:l},setup(){return{args:t}},template:`
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
  `}),"Slots"),K=["Default","NoText","Href","Slots"];export{_ as Default,I as Href,B as NoText,J as Slots,K as __namedExportsOrder,G as default};
//# sourceMappingURL=FBottomNav.stories.da9f1a2c.js.map
