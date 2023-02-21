var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as o,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.60beb779.js";import{F as T}from"./FTooltip.665af9bf.js";import{F as b}from"./FModal.e9ae3117.js";import{V as B}from"./VIcon.ccd22ecd.js";import{a as c}from"./locale.656e3084.js";import{u as x}from"./display.49866675.js";import{F as d}from"./FButton.7fb5afc5.js";import"./VTooltip.368e4bdc.js";import"./proxiedModel.c4bc26c4.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./VOverlay.6564e1f3.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./anchor.46190ad2.js";import"./color.7f161142.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.74ee3f5c.js";import"./variant.f60f637f.js";import"./createSimpleFunctional.057254cd.js";import"./density.3ab93966.js";import"./VAvatar.709f16cb.js";import"./rounded.08843391.js";import"./VImg.79a3bf78.js";import"./index.41c719a2.js";import"./index.d3586bd0.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./border.84bdbe82.js";import"./elevation.6146b715.js";import"./position.31a6f1c1.js";import"./VBtn.76288723.js";import"./VProgressCircular.1a876490.js";const _=a({name:"FHintActivator",setup(){return()=>o(B,{size:"12",color:"red",class:"f-hint__activator"},{default:()=>[H("$info")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>o("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const s=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=x(),{t:v}=c(),l=p(!1),i=g(()=>{const e=f.value;return{isTooltip:e,wrapper:e?T:b,presets:e?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&o(m,{href:t.href},null):o("div",{class:"f-hint__modal-content"},[t.hint,t.href&&o(m,{href:t.href},null)]),"content");return()=>o(i.value.wrapper,y({modelValue:l.value,"onUpdate:modelValue":e=>l.value=e},i.value.presets),{activator:n.activator?n.activator:e=>o(_,e.props,null),default:()=>F()})}}),dt={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FHint.stories.b86a9def.js.map
