var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{A as c,t as p,a as l}from"./vue.esm-bundler.a5c4e1bf.js";import{a as m,b as F}from"./position.d49ff30e.js";import{a as u}from"./color.43314d1d.js";import{c as B}from"./VBtn.b5444450.js";import{F as f}from"./FButton.f3fc7c21.js";import{V as I}from"./VIcon.5ca83e1b.js";import"./locale.76e208ea.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./anchor.e4a88562.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:a}=F(o),{backgroundColorClasses:e,backgroundColorStyles:s}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",a.value,e.value],style:[s.value]},n)}}),R={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
import { FButton } from "../FButton";
import { VIcon } from "vuetify/components";
import { StoryFn, Meta } from "@storybook/vue3";

export default {
  title: "Components/FActionBar",
  component: FActionBar,
} as Meta<typeof FActionBar>;

const Template: StoryFn<typeof FActionBar> = (args) => ({
  components: { FActionBar, FButton, VIcon },
  setup() {
    return { args };
  },
  template: \`
    <FActionBar v-bind="args">
      <FButton>
        <span>Home</span>
        <VIcon size="24">$FIconHomeFill</VIcon>
      </FButton>
      <FButton>
        <span>Pool</span>
        <VIcon size="24">$FIconPoolAFill</VIcon>
      </FButton>
      <FButton>
        <span>Global</span>
        <VIcon size="24">$FIconGlobalFill</VIcon>
      </FButton>
    </FActionBar>
  \`,
});

export const Default = Template.bind({});
Default.args = { position: "fixed", color: "greyscale_5" };
`,locationsMap:{default:{startLoc:{col:45,line:11},endLoc:{col:2,line:32},startBody:{col:45,line:11},endBody:{col:2,line:32}}}}},title:"Components/FActionBar",component:r},d=t(o=>({components:{FActionBar:r,FButton:f,VIcon:I},setup(){return{args:o}},template:`
    <FActionBar v-bind="args">
      <FButton>
        <span>Home</span>
        <VIcon size="24">$FIconHomeFill</VIcon>
      </FButton>
      <FButton>
        <span>Pool</span>
        <VIcon size="24">$FIconPoolAFill</VIcon>
      </FButton>
      <FButton>
        <span>Global</span>
        <VIcon size="24">$FIconGlobalFill</VIcon>
      </FButton>
    </FActionBar>
  `}),"Template"),A=d.bind({});A.args={position:"fixed",color:"greyscale_5"};const h=["Default"];export{A as Default,h as __namedExportsOrder,R as default};
//# sourceMappingURL=FActionBar.stories.2fb6a876.js.map
