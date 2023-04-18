var u=Object.defineProperty;var e=(t,p)=>u(t,"name",{value:p,configurable:!0});import{A as v,b as o,a as n,m as d,e as B}from"./vue.esm-bundler.9500adb2.js";import{u as f}from"./display.9827c8ac.js";import{a as F}from"./VAppBar.876e0a94.js";import{V as A}from"./VIcon.b10ecbaa.js";import{V as b}from"./VBtn.b26bd4ae.js";import{F as g}from"./FButton.d61383cc.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./index.c2993bc7.js";import"./border.eebb6db1.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./transition.10caf698.js";import"./dimensions.5f5b1dd8.js";import"./ssrBoot.cad34dc3.js";import"./VProgressCircular.8b82923d.js";import"./intersectionObserver.10253e57.js";import"./proxiedModel.881d858e.js";import"./density.0c8fab1e.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";const a=v({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(t,{attrs:p,slots:r}){const{smAndDown:s}=f(),m=o(()=>({"f-app-bar":!0,"f-app-bar--immersive":t.immersive,"f-app-bar--center":t.center})),i=o(()=>({height:s.value?48:64,elevation:0,app:!0})),l=e(()=>n(b,{icon:!0,size:"24",ripple:!1},{default:()=>[n(A,null,{default:()=>[B("$back")]})]}),"back"),c=t.back?l:r.prepend;return()=>n(F,d({class:m.value},i.value,p),{...r,prepend:c})}}),pt={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
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
  `}),"Template2"),h=P.bind({});h.args={center:!0,back:!1,immersive:!1};const nt=["Default","Custom"];export{h as Custom,k as Default,nt as __namedExportsOrder,pt as default};
//# sourceMappingURL=FAppBar.stories.f3e179f3.js.map
