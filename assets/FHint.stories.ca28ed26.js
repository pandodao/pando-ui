var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{z as a,a as e,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.3b29098a.js";import{F as T}from"./FTooltip.d16a65ea.js";import{F as b}from"./FModal.8996de1a.js";import{V as B}from"./VIcon.c254d683.js";import{a as c}from"./locale.eccdb440.js";import{u as _}from"./display.f5b0b65d.js";import{F as d}from"./FButton.72dd92af.js";import"./VTooltip.57ebbf91.js";import"./proxiedModel.67252d17.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./anchor.c52c8661.js";import"./color.fef4ce02.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.8fdf9bea.js";import"./variant.be65e42d.js";import"./createSimpleFunctional.b1ebbe28.js";import"./density.6dd2b9c7.js";import"./VAvatar.ab09abd9.js";import"./rounded.375414e4.js";import"./VImg.78cc729b.js";import"./index.1414bb4a.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./intersectionObserver.b06f0fb9.js";import"./border.d0444c35.js";import"./elevation.154beddf.js";import"./position.6cc3b816.js";import"./VBtn.7f6a0830.js";import"./VProgressCircular.c527f932.js";const x=a({name:"FHintActivator",setup(){return()=>e(B,{size:"12",color:"greyscale_4",class:"f-hint__activator"},{default:()=>[H("$help")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>e("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const l=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=_(),{t:v}=c(),s=p(!1),i=g(()=>{const o=f.value;return{isTooltip:o,wrapper:o?T:b,presets:o?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&e(m,{href:t.href},null):e("div",{class:"f-hint__modal-content"},[e("span",{innerHTML:t.hint},null),t.href&&e(m,{href:t.href},null)]),"content");return()=>e(i.value.wrapper,y({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o},i.value.presets),{activator:n.activator?n.activator:o=>e(x,o.props,null),default:()=>F()})}}),ut={parameters:{storySource:{source:`import { ref } from "vue";

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
  `}),"Template"),k=u.bind({});k.args={location:"top",openOnHover:!1,openOnClick:!0};const A=u.bind({});A.args={href:"https://pando.im/",openOnHover:!1,openOnClick:!0};const L=r(t=>({components:{FHint:l,FButton:d},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div>
      <FHint
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  `}),"Template2"),O=L.bind({});O.args={href:"https://pando.im/"};const ft=["Text","Href","DefaultActivator"];export{O as DefaultActivator,A as Href,k as Text,ft as __namedExportsOrder,ut as default};
//# sourceMappingURL=FHint.stories.ca28ed26.js.map
