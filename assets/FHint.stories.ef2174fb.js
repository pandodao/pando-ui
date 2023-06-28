var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{A as a,a as e,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.b09b7c5a.js";import{F as T}from"./FTooltip.08228b46.js";import{F as b}from"./FModal.e93f30c8.js";import{V as B}from"./VIcon.bd07cc2b.js";import{a as c}from"./locale.88650f04.js";import{u as _}from"./display.c2299c89.js";import{F as d}from"./FButton.7621db81.js";import"./VTooltip.42cfaf74.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./forwardRefs.c003b6b8.js";import"./VDialog.ac2f44e1.js";import"./variant.fbd007cc.js";import"./createSimpleFunctional.6499d319.js";import"./density.6083b2d4.js";import"./VAvatar.95d7d85f.js";import"./rounded.28975b1c.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./intersectionObserver.1e3a532e.js";import"./border.6019dc9f.js";import"./elevation.12d4edaf.js";import"./position.faf59b49.js";import"./VBtn.7921a3d1.js";import"./VProgressCircular.7bee339a.js";const x=a({name:"FHintActivator",setup(){return()=>e(B,{size:"12",color:"greyscale_4",class:"f-hint__activator"},{default:()=>[H("$help")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>e("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const l=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=_(),{t:v}=c(),s=p(!1),i=g(()=>{const o=f.value;return{isTooltip:o,wrapper:o?T:b,presets:o?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&e(m,{href:t.href},null):e("div",{class:"f-hint__modal-content"},[e("span",{innerHTML:t.hint},null),t.href&&e(m,{href:t.href},null)]),"content");return()=>e(i.value.wrapper,y({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o},i.value.presets),{activator:n.activator?n.activator:o=>e(x,o.props,null),default:()=>F()})}}),ct={parameters:{storySource:{source:`import { ref } from "vue";

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
  `}),"Template2"),O=L.bind({});O.args={href:"https://pando.im/"};const dt=["Text","Href","DefaultActivator"];export{O as DefaultActivator,k as Href,A as Text,dt as __namedExportsOrder,ct as default};
//# sourceMappingURL=FHint.stories.ef2174fb.js.map
