var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as e,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.9500adb2.js";import{F as T}from"./FTooltip.81f0299e.js";import{F as b}from"./FModal.7ce358cf.js";import{V as B}from"./VIcon.b10ecbaa.js";import{a as c}from"./locale.7efc9def.js";import{u as _}from"./display.9827c8ac.js";import{F as d}from"./FButton.d61383cc.js";import"./VTooltip.3ad21be9.js";import"./proxiedModel.881d858e.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./anchor.1afb8064.js";import"./color.45246ddd.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.38dab5f5.js";import"./variant.95637a5a.js";import"./createSimpleFunctional.0b08b174.js";import"./density.0c8fab1e.js";import"./VAvatar.9487a2f3.js";import"./rounded.d16b72e9.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./intersectionObserver.10253e57.js";import"./border.eebb6db1.js";import"./elevation.d906eb56.js";import"./position.427d9f74.js";import"./VBtn.b26bd4ae.js";import"./VProgressCircular.8b82923d.js";const x=a({name:"FHintActivator",setup(){return()=>e(B,{size:"12",color:"greyscale_4",class:"f-hint__activator"},{default:()=>[H("$help")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>e("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const l=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=_(),{t:v}=c(),s=p(!1),i=g(()=>{const o=f.value;return{isTooltip:o,wrapper:o?T:b,presets:o?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&e(m,{href:t.href},null):e("div",{class:"f-hint__modal-content"},[e("span",{innerHTML:t.hint},null),t.href&&e(m,{href:t.href},null)]),"content");return()=>e(i.value.wrapper,y({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o},i.value.presets),{activator:n.activator?n.activator:o=>e(x,o.props,null),default:()=>F()})}}),ut={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FHint.stories.ce219cee.js.map
