var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as e,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.b09b7c5a.js";import{F as T}from"./FTooltip.718212a9.js";import{F as b}from"./FModal.edcf514e.js";import{V as B}from"./VIcon.81f7ecc0.js";import{a as c}from"./locale.0dcd1420.js";import{u as _}from"./display.fd968d5a.js";import{F as d}from"./FButton.fd5dc93c.js";import"./VTooltip.e9edb427.js";import"./proxiedModel.f0d8de9f.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./color.1fec8f8e.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.f3d85c11.js";import"./variant.eababd72.js";import"./createSimpleFunctional.06ddaa9a.js";import"./density.43b8d8b2.js";import"./VAvatar.84448bc0.js";import"./rounded.ccd03645.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./index.eca3ba9a.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./intersectionObserver.8499cdfb.js";import"./border.6d45fe61.js";import"./elevation.844f69c6.js";import"./position.6b49aae6.js";import"./VBtn.7a77eb8b.js";import"./VProgressCircular.8c9797f0.js";const x=a({name:"FHintActivator",setup(){return()=>e(B,{size:"12",color:"greyscale_4",class:"f-hint__activator"},{default:()=>[H("$help")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>e("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const l=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=_(),{t:v}=c(),s=p(!1),i=g(()=>{const o=f.value;return{isTooltip:o,wrapper:o?T:b,presets:o?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&e(m,{href:t.href},null):e("div",{class:"f-hint__modal-content"},[e("span",{innerHTML:t.hint},null),t.href&&e(m,{href:t.href},null)]),"content");return()=>e(i.value.wrapper,y({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o},i.value.presets),{activator:n.activator?n.activator:o=>e(x,o.props,null),default:()=>F()})}}),ut={parameters:{storySource:{source:`import { ref } from "vue";

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
        hint="The annual percentage yield (APY) is the real rate of <br> return earned on an investment"
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
`,locationsMap:{text:{startLoc:{col:40,line:12},endLoc:{col:2,line:33},startBody:{col:40,line:12},endBody:{col:2,line:33}},href:{startLoc:{col:40,line:12},endLoc:{col:2,line:33},startBody:{col:40,line:12},endBody:{col:2,line:33}},"default-activator":{startLoc:{col:41,line:45},endLoc:{col:2,line:60},startBody:{col:41,line:45},endBody:{col:2,line:60}}}}},title:"Components/FHint",component:l},u=r(t=>({components:{FHint:l,FButton:d},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of <br> return earned on an investment"
        v-bind="args"
      >
      <template #activator="{props}">
        <FButton color="primary" v-bind="props">
          Hint
        </FButton>
      </template>
      </FHint>
    </div>
  `}),"Template"),A=u.bind({});A.args={location:"top",openOnHover:!1,openOnClick:!0};const k=u.bind({});k.args={href:"https://pando.im/",openOnHover:!1,openOnClick:!0};const L=r(t=>({components:{FHint:l,FButton:d},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  `}),"Template2"),O=L.bind({});O.args={href:"https://pando.im/"};const ft=["Text","Href","DefaultActivator"];export{O as DefaultActivator,k as Href,A as Text,ft as __namedExportsOrder,ut as default};
//# sourceMappingURL=FHint.stories.09f1377a.js.map
