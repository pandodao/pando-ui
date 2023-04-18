var s=Object.defineProperty;var t=(o,n)=>s(o,"name",{value:n,configurable:!0});import{A as c,t as p,a as l}from"./vue.esm-bundler.9500adb2.js";import{m,u as F}from"./position.427d9f74.js";import{a as u}from"./color.45246ddd.js";import{c as B}from"./VBtn.b26bd4ae.js";import{F as f}from"./FButton.d61383cc.js";import{V as I}from"./VIcon.b10ecbaa.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:a}=F(o),{backgroundColorClasses:e,backgroundColorStyles:i}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",a.value,e.value],style:[i.value]},n)}}),j={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
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
  `}),"Template"),A=d.bind({});A.args={position:"fixed",color:"greyscale_5"};const q=["Default"];export{A as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=FActionBar.stories.9bef4ee7.js.map
