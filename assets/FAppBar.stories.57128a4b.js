var u=Object.defineProperty;var e=(t,n)=>u(t,"name",{value:n,configurable:!0});import{A as v,b as o,a as p,m as d,e as B}from"./vue.esm-bundler.caa622c4.js";import{u as f}from"./display.ef8c62e1.js";import{a as F}from"./VAppBar.b57ea4d4.js";import{V as A}from"./VIcon.f37f8177.js";import{V as b}from"./VBtn.abf41941.js";import{F as g}from"./FButton.b7201e41.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./index.07e0e4c3.js";import"./border.ae4ccc68.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./VImg.cbbbed87.js";import"./index.fc60a169.js";import"./transition.712d10eb.js";import"./dimensions.1a78e179.js";import"./layout.d0c53e40.js";import"./VProgressCircular.9b7ebd22.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./proxiedModel.073d34a6.js";import"./anchor.57ff9838.js";import"./density.c07a8c02.js";import"./index.4e4a2aa3.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";const a=v({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(t,{attrs:n,slots:r}){const{smAndDown:s}=f(),m=o(()=>({"f-app-bar":!0,"f-app-bar--immersive":t.immersive,"f-app-bar--center":t.center})),i=o(()=>({height:s.value?48:64,elevation:0,app:!0})),l=e(()=>p(b,{icon:!0,size:"24",ripple:!1},{default:()=>[p(A,null,{default:()=>[B("$back")]})]}),"back"),c=t.back?l:r.prepend;return()=>p(F,d({class:m.value},i.value,n),{...r,prepend:c})}}),et={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FAppBar",
  component: FAppBar,
} as Meta<typeof FAppBar>;

const Template: StoryFn<typeof FAppBar> = (args) => ({
  components: { FAppBar },
  setup() {
    return { args };
  },
  template: \`
    <FAppBar title="FAppBar" v-bind="args">
      <template #append>
        <v-icon>$search</v-icon>
      </template>
    </FAppBar>
  \`,
});

export const Default = Template.bind({});
Default.args = { center: true, back: true, immersive: false };

const Template2: StoryFn<typeof FAppBar> = (args) => ({
  components: { FAppBar, FButton },
  setup() {
    return { args };
  },
  template: \`
    <FAppBar v-bind="args">
      <template #prepend>
        <v-avatar size="28" image="https://randomuser.me/api/portraits/women/10.jpg" />
      </template>

      <template #title>
        <v-menu>
          <template #activator="{props}">
            <FButton size="small" v-bind="props" class="pa-4">
              Products
              <v-icon class="pl-1">$expand</v-icon>
            </FButton>
          </template>

          <v-list>
            <v-list-item>Product1</v-list-item>
            <v-list-item>Product2</v-list-item>
            <v-list-item>Product3</v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template #append>
      <v-icon>$search</v-icon>
    </template>
    </FAppBar>
  \`,
});

export const Custom = Template2.bind({});
Custom.args = { center: true, back: false, immersive: false };
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:22},startBody:{col:42,line:10},endBody:{col:2,line:22}},custom:{startLoc:{col:43,line:27},endLoc:{col:2,line:60},startBody:{col:43,line:27},endBody:{col:2,line:60}}}}},title:"Components/FAppBar",component:a},y=e(t=>({components:{FAppBar:a},setup(){return{args:t}},template:`
    <FAppBar title="FAppBar" v-bind="args">
      <template #append>
        <v-icon>$search</v-icon>
      </template>
    </FAppBar>
  `}),"Template"),k=y.bind({});k.args={center:!0,back:!0,immersive:!1};const P=e(t=>({components:{FAppBar:a,FButton:g},setup(){return{args:t}},template:`
    <FAppBar v-bind="args">
      <template #prepend>
        <v-avatar size="28" image="https://randomuser.me/api/portraits/women/10.jpg" />
      </template>

      <template #title>
        <v-menu>
          <template #activator="{props}">
            <FButton size="small" v-bind="props" class="pa-4">
              Products
              <v-icon class="pl-1">$expand</v-icon>
            </FButton>
          </template>

          <v-list>
            <v-list-item>Product1</v-list-item>
            <v-list-item>Product2</v-list-item>
            <v-list-item>Product3</v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template #append>
      <v-icon>$search</v-icon>
    </template>
    </FAppBar>
  `}),"Template2"),h=P.bind({});h.args={center:!0,back:!1,immersive:!1};const nt=["Default","Custom"];export{h as Custom,k as Default,nt as __namedExportsOrder,et as default};
//# sourceMappingURL=FAppBar.stories.57128a4b.js.map
