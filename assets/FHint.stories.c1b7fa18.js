var h=Object.defineProperty;var r=(t,n)=>h(t,"name",{value:n,configurable:!0});import{D as a,a as e,e as H,r as p,b as g,m as y}from"./vue.esm-bundler.80cafc0b.js";import{F as T}from"./FTooltip.082ea180.js";import{F as b}from"./FModal.ac7dde43.js";import{V as B}from"./VIcon.ac9f05d6.js";import{a as c}from"./locale.68d0262d.js";import{u as _}from"./display.1ed39e23.js";import{F as d}from"./FButton.5e8d1e13.js";import"./VTooltip.73d686bc.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./VCard.a6ed511f.js";import"./VDefaultsProvider.522cf1e0.js";import"./createSimpleFunctional.19425ddc.js";import"./density.e2c1329b.js";import"./VAvatar.7760fc0a.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VBtn.ce544012.js";import"./VProgressCircular.fec55325.js";const x=a({name:"FHintActivator",setup(){return()=>e(B,{size:"12",color:"greyscale_4",class:"f-hint__activator"},{default:()=>[H("$help")]})}}),m=a({name:"FHintLink",props:{href:{type:String,default:""}},setup(t){const{t:n}=c();return()=>e("a",{class:"f-hint__link",href:t.href,target:"_blank"},[n("$vuetify.uikit.learn_more")])}});const l=a({name:"FHint",props:{hint:{type:String,default:""},href:{type:String,default:""}},setup(t,{slots:n}){const{smAndUp:f}=_(),{t:v}=c(),s=p(!1),i=g(()=>{const o=f.value;return{isTooltip:o,wrapper:o?T:b,presets:o?{contentClass:"f-hint__content",text:t.hint}:{title:v("$vuetify.uikit.details")}}}),F=r(()=>i.value.isTooltip?t.href&&e(m,{href:t.href},null):e("div",{class:"f-hint__modal-content"},[e("span",{innerHTML:t.hint},null),t.href&&e(m,{href:t.href},null)]),"content");return()=>e(i.value.wrapper,y({modelValue:s.value,"onUpdate:modelValue":o=>s.value=o},i.value.presets),{activator:n.activator?n.activator:o=>e(x,o.props,null),default:()=>F()})}}),dt={parameters:{storySource:{source:`import { ref } from "vue";

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
  `}),"Template2"),O=L.bind({});O.args={href:"https://pando.im/"};const ut=["Text","Href","DefaultActivator"];export{O as DefaultActivator,A as Href,k as Text,ut as __namedExportsOrder,dt as default};
//# sourceMappingURL=FHint.stories.c1b7fa18.js.map
