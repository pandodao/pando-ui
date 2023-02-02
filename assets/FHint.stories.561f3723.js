var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as o,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.1ba604f9.js";import{F as T}from"./FTooltip.62e74860.js";import{F as b}from"./FModal.3e0c2496.js";import{V as B}from"./VIcon.518cdeb6.js";import{a as c}from"./locale.fb27b96c.js";import{u as x}from"./display.de7ed398.js";import{F as d}from"./FButton.da03e124.js";import"./VTooltip.9e0bd7e0.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./anchor.1637b665.js";import"./color.b891a321.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.0f487f73.js";import"./variant.22bbbe86.js";import"./createSimpleFunctional.b271bf7a.js";import"./density.8ac56fa2.js";import"./VAvatar.d7e1c088.js";import"./rounded.cb32523b.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./index.27517d48.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./border.c2063388.js";import"./elevation.7428fb70.js";import"./position.747eb4b6.js";import"./VBtn.156ed533.js";import"./VProgressCircular.6a9473f8.js";const _=a({name:"FHintActivator",setup(){return()=>o(B,{size:"12",color:"red",class:"f-hint__activator"},{default:()=>[H("$info")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>o("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const s=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{mdAndUp:f}=x(),{t:v}=c(),l=p(!1),i=g(()=>{const e=f.value;return{isTooltip:e,wrapper:e?T:b,presets:e?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&o(m,{href:t.href},null):o("div",{class:"f-hint__modal-content"},[t.hint,t.href&&o(m,{href:t.href},null)]),"content");return()=>o(i.value.wrapper,y({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e},i.value.presets),{activator:n.activator?n.activator:e=>o(_,e.props,null),default:()=>F()})}}),dt={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FHint.stories.561f3723.js.map
