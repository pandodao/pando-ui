var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as o,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.330b8bcd.js";import{F as T}from"./FTooltip.7983801f.js";import{F as b}from"./FModal.6bf61d27.js";import{V as B}from"./VIcon.c758310f.js";import{a as c}from"./locale.0eda84ca.js";import{u as x}from"./display.b3319b10.js";import{F as d}from"./FButton.d034f6f2.js";import"./VTooltip.069fa7d0.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./anchor.7cdf4a4d.js";import"./color.66c7a00f.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.a4bfe643.js";import"./variant.b259332f.js";import"./createSimpleFunctional.05bfccd4.js";import"./density.38f0f124.js";import"./VAvatar.f79052e0.js";import"./rounded.257cff90.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./border.8a30a617.js";import"./elevation.b2f27a68.js";import"./position.03fcbfb6.js";import"./VBtn.e55e9e37.js";import"./VProgressCircular.27e195cb.js";const _=a({name:"FHintActivator",setup(){return()=>o(B,{size:"12",color:"red",class:"f-hint__activator"},{default:()=>[H("$info")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>o("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const s=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{mdAndUp:f}=x(),{t:v}=c(),l=p(!1),i=g(()=>{const e=f.value;return{isTooltip:e,wrapper:e?T:b,presets:e?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&o(m,{href:t.href},null):o("div",{class:"f-hint__modal-content"},[t.hint,t.href&&o(m,{href:t.href},null)]),"content");return()=>o(i.value.wrapper,y({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e},i.value.presets),{activator:n.activator?n.activator:e=>o(_,e.props,null),default:()=>F()})}}),dt={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FHint.stories.9770efda.js.map
