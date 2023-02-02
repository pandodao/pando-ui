var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{A as c,t as p,a as l}from"./vue.esm-bundler.1ba604f9.js";import{m,u as F}from"./position.747eb4b6.js";import{a as u}from"./color.b891a321.js";import{c as B}from"./VBtn.156ed533.js";import{F as f}from"./FButton.da03e124.js";import{V as I}from"./VIcon.518cdeb6.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./proxiedModel.23143766.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:a}=F(o),{backgroundColorClasses:e,backgroundColorStyles:s}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",a.value,e.value],style:[s.value]},n)}}),h={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
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
//# sourceMappingURL=FActionBar.stories.3093307c.js.map
