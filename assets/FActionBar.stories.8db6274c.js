var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{z as c,t as p,a as l}from"./vue.esm-bundler.62cdaeff.js";import{m,u as F}from"./position.daea1c07.js";import{a as u}from"./color.5ac0909d.js";import{c as B}from"./VBtn.2cacbcac.js";import{F as f}from"./FButton.7a11c708.js";import{V as I}from"./VIcon.ddcbca9b.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:a}=F(o),{backgroundColorClasses:e,backgroundColorStyles:s}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",a.value,e.value],style:[s.value]},n)}}),h={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
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
  `}),"Template"),A=d.bind({});A.args={position:"fixed",color:"greyscale_5"};const j=["Default"];export{A as Default,j as __namedExportsOrder,h as default};
//# sourceMappingURL=FActionBar.stories.8db6274c.js.map
