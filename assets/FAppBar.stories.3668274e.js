var u=Object.defineProperty;var e=(t,n)=>u(t,"name",{value:n,configurable:!0});import{A as v,b as o,a as p,m as d,d as B}from"./vue.esm-bundler.a5c4e1bf.js";import{u as f}from"./display.1bd9c9dd.js";import{a as F}from"./VAppBar.a5b38287.js";import{V as A}from"./VIcon.5ca83e1b.js";import{V as b}from"./VBtn.b5444450.js";import{F as g}from"./FButton.f3fc7c21.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./index.628b3df7.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./transition.c93b8895.js";import"./dimensions.b6fbc401.js";import"./layout.6d881cfa.js";import"./VProgressCircular.ad6cc829.js";import"./loader.7d1fab10.js";import"./proxiedModel.9639363f.js";import"./locale.76e208ea.js";import"./density.b3e2de9a.js";import"./index.1b40d9d7.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";const a=v({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(t,{attrs:n,slots:r}){const{smAndDown:s}=f(),m=o(()=>({"f-app-bar":!0,"f-app-bar--immersive":t.immersive,"f-app-bar--center":t.center})),i=o(()=>({height:s.value?48:64,elevation:0,app:!0})),l=e(()=>p(b,{icon:!0,size:"24",ripple:!1},{default:()=>[p(A,null,{default:()=>[B("$back")]})]}),"back"),c=t.back?l:r.prepend;return()=>p(F,d({class:m.value},i.value,n),{...r,prepend:c})}}),tt={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
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
  `}),"Template2"),h=P.bind({});h.args={center:!0,back:!1,immersive:!1};const et=["Default","Custom"];export{h as Custom,k as Default,et as __namedExportsOrder,tt as default};
//# sourceMappingURL=FAppBar.stories.3668274e.js.map
