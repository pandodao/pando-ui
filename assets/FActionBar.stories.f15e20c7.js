var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{D as c,t as p,a as l}from"./vue.esm-bundler.80cafc0b.js";import{m,u as F}from"./position.19a0d7a5.js";import{e as u}from"./color.7ba4ffe3.js";import{d as B}from"./VBtn.ce544012.js";import{F as f}from"./FButton.5e8d1e13.js";import{V as d}from"./VIcon.ac9f05d6.js";import"./helpers.32675158.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:e}=F(o),{backgroundColorClasses:a,backgroundColorStyles:s}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",e.value,a.value],style:[s.value]},n)}}),h={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
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
`,locationsMap:{default:{startLoc:{col:45,line:11},endLoc:{col:2,line:32},startBody:{col:45,line:11},endBody:{col:2,line:32}}}}},title:"Components/FActionBar",component:r},I=t(o=>({components:{FActionBar:r,FButton:f,VIcon:d},setup(){return{args:o}},template:`
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
  `}),"Template"),A=I.bind({});A.args={position:"fixed",color:"greyscale_5"};const j=["Default"];export{A as Default,j as __namedExportsOrder,h as default};
//# sourceMappingURL=FActionBar.stories.f15e20c7.js.map
