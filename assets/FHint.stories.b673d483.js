var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{z as a,a as o,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.62cdaeff.js";import{F as T}from"./FTooltip.e45060f9.js";import{F as b}from"./FModal.e70a199e.js";import{V as B}from"./VIcon.ddcbca9b.js";import{a as c}from"./locale.b4680344.js";import{u as x}from"./display.21f5d2fe.js";import{F as d}from"./FButton.7a11c708.js";import"./VTooltip.71b83f94.js";import"./proxiedModel.c2b98033.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./anchor.4b6c6135.js";import"./color.5ac0909d.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.8aa0eb51.js";import"./variant.cb074882.js";import"./createSimpleFunctional.f6324448.js";import"./density.a1d89e9f.js";import"./VAvatar.8eec326e.js";import"./rounded.9945cf4e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./border.744ce806.js";import"./elevation.79ced88b.js";import"./position.daea1c07.js";import"./VBtn.2cacbcac.js";import"./VProgressCircular.5a613386.js";const _=a({name:"FHintActivator",setup(){return()=>o(B,{size:"12",class:"f-hint__activator"},{default:()=>[H("$info")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>o("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const s=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=x(),{t:v}=c(),l=p(!1),i=g(()=>{const e=f.value;return{isTooltip:e,wrapper:e?T:b,presets:e?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&o(m,{href:t.href},null):o("div",{class:"f-hint__modal-content"},[t.hint,t.href&&o(m,{href:t.href},null)]),"content");return()=>o(i.value.wrapper,y({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e},i.value.presets),{activator:n.activator?n.activator:e=>o(_,e.props,null),default:()=>F()})}}),dt={parameters:{storySource:{source:`import { ref } from "vue";

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
  `}),"Template"),k=u.bind({});k.args={location:"top",openOnHover:!1,openOnClick:!0};const A=u.bind({});A.args={href:"https://pando.im/",openOnHover:!1,openOnClick:!0};const L=r(t=>({components:{FHint:s,FButton:d},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  `}),"Template2"),O=L.bind({});O.args={href:"https://pando.im/"};const ut=["Text","Href","DefaultActivator"];export{O as DefaultActivator,A as Href,k as Text,ut as __namedExportsOrder,dt as default};
//# sourceMappingURL=FHint.stories.b673d483.js.map
