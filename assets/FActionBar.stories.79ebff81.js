var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{A as c,t as p,a as l}from"./vue.esm-bundler.b09b7c5a.js";import{m,u as F}from"./position.faf59b49.js";import{e as u}from"./color.7fbf1750.js";import{c as B}from"./VBtn.7921a3d1.js";import{F as f}from"./FButton.7621db81.js";import{V as I}from"./VIcon.bd07cc2b.js";import"./helpers.4b349f1c.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./VProgressCircular.7bee339a.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:e}=F(o),{backgroundColorClasses:a,backgroundColorStyles:s}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",e.value,a.value],style:[s.value]},n)}}),R={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
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
//# sourceMappingURL=FActionBar.stories.79ebff81.js.map
