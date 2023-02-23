var i=Object.defineProperty;var t=(o,n)=>i(o,"name",{value:n,configurable:!0});import{z as c,t as p,a as l}from"./vue.esm-bundler.57aa1454.js";import{m,u as F}from"./position.6bb498a5.js";import{a as u}from"./color.5e70182f.js";import{c as B}from"./VBtn.ab71924f.js";import{F as f}from"./FButton.95509114.js";import{V as I}from"./VIcon.b7876f5b.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";const r=c({name:"FActionBar",props:{color:String,...m()},setup(o,{slots:n}){const{positionClasses:a}=F(o),{backgroundColorClasses:e,backgroundColorStyles:s}=u(p(o,"color"));return()=>l(B,{class:["f-action-bar",a.value,e.value],style:[s.value]},n)}}),h={parameters:{storySource:{source:`import { FActionBar } from "./FActionBar";
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
//# sourceMappingURL=FActionBar.stories.3f25a07f.js.map
