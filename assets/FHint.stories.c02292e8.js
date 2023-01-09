var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as o,d as H,r as p,b as g,m as y}from"./vue.esm-bundler.a5c4e1bf.js";import{F as T}from"./FTooltip.6441e661.js";import{F as b}from"./FModal.4fd09b84.js";import{V as B}from"./VIcon.5ca83e1b.js";import{a as c}from"./locale.76e208ea.js";import{u as x}from"./display.1bd9c9dd.js";import{F as d}from"./FButton.f3fc7c21.js";import"./VTooltip.effd6529.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./scopeId.782553fc.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./anchor.e4a88562.js";import"./color.43314d1d.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./VDialog.8e3a7441.js";import"./variant.b9606795.js";import"./createSimpleFunctional.f00f4b71.js";import"./density.b3e2de9a.js";import"./VAvatar.da185431.js";import"./rounded.a0c73c18.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./position.d49ff30e.js";import"./VBtn.b5444450.js";import"./VProgressCircular.ad6cc829.js";const _=a({name:"FHintActivator",setup(){return()=>o(B,{size:"12",color:"red",class:"f-hint__activator"},{default:()=>[H("$info")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>o("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const s=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{mdAndUp:f}=x(),{t:v}=c(),l=p(!1),i=g(()=>{const e=f.value;return{isTooltip:e,wrapper:e?T:b,presets:e?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&o(m,{href:t.href},null):o("div",{class:"f-hint__modal-content"},[t.hint,t.href&&o(m,{href:t.href},null)]),"content");return()=>o(i.value.wrapper,y({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e},i.value.presets),{activator:n.activator?n.activator:e=>o(_,e.props,null),default:()=>F()})}}),dt={parameters:{storySource:{source:`import { ref } from "vue";

import { FHint } from "./FHint";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FHint",
  component: FHint,
} as Meta<typeof FHint>;

const Template: StoryFn<typeof FHint> = (args) => ({
  components: { FHint, FButton },

  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },
  template: \`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      >
      <template #activator="{props}">
        <FButton color="primary" v-bind="props">
          Hint
        </FButton>
      </template>
      </FHint>
    </div>
  \`,
});

export const Text = Template.bind({});
Text.args = { location: "top", openOnHover: false, openOnClick: true };

export const Href = Template.bind({});
Href.args = {
  href: "https://pando.im/",
  openOnHover: false,
  openOnClick: true,
};

const Template2: StoryFn<typeof FHint> = (args) => ({
  components: { FHint, FButton },

  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },
  template: \`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  \`,
});

export const DefaultActivator = Template2.bind({});

DefaultActivator.args = { href: "https://pando.im/" };
`,locationsMap:{text:{startLoc:{col:40,line:12},endLoc:{col:2,line:33},startBody:{col:40,line:12},endBody:{col:2,line:33}},href:{startLoc:{col:40,line:12},endLoc:{col:2,line:33},startBody:{col:40,line:12},endBody:{col:2,line:33}},"default-activator":{startLoc:{col:41,line:45},endLoc:{col:2,line:60},startBody:{col:41,line:45},endBody:{col:2,line:60}}}}},title:"Components/FHint",component:s},u=r(t=>({components:{FHint:s,FButton:d},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      >
      <template #activator="{props}">
        <FButton color="primary" v-bind="props">
          Hint
        </FButton>
      </template>
      </FHint>
    </div>
  `}),"Template"),A=u.bind({});A.args={location:"top",openOnHover:!1,openOnClick:!0};const k=u.bind({});k.args={href:"https://pando.im/",openOnHover:!1,openOnClick:!0};const L=r(t=>({components:{FHint:s,FButton:d},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  `}),"Template2"),O=L.bind({});O.args={href:"https://pando.im/"};const ut=["Text","Href","DefaultActivator"];export{O as DefaultActivator,k as Href,A as Text,ut as __namedExportsOrder,dt as default};
//# sourceMappingURL=FHint.stories.c02292e8.js.map
