var u=Object.defineProperty;var e=(t,p)=>u(t,"name",{value:p,configurable:!0});import{D as v,b as o,a as n,m as d,e as B}from"./vue.esm-bundler.80cafc0b.js";import{u as f}from"./display.1ed39e23.js";import{a as F}from"./VAppBar.dc4b7249.js";import{V as A}from"./VIcon.ac9f05d6.js";import{V as b}from"./VBtn.ce544012.js";import{F as g}from"./FButton.5e8d1e13.js";import"./helpers.32675158.js";import"./color.7ba4ffe3.js";import"./index.b676db0f.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./rounded.b42653ce.js";import"./VImg.78b97665.js";import"./router.9241c2dd.js";import"./transition.b6a16e6c.js";import"./index.f2b6c1e4.js";import"./VDefaultsProvider.522cf1e0.js";import"./layout.c04eea67.js";import"./VProgressCircular.fec55325.js";import"./intersectionObserver.addd26f6.js";import"./ssrBoot.e8acd638.js";import"./density.e2c1329b.js";import"./variant.1e842247.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";const a=v({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(t,{attrs:p,slots:r}){const{smAndDown:s}=f(),m=o(()=>({"f-app-bar":!0,"f-app-bar--immersive":t.immersive,"f-app-bar--center":t.center})),i=o(()=>({height:s.value?48:64,elevation:0,app:!0})),l=e(()=>n(b,{icon:!0,size:"24",ripple:!1},{default:()=>[n(A,null,{default:()=>[B("$back")]})]}),"back"),c=t.back?l:r.prepend;return()=>n(F,d({class:m.value},i.value,p),{...r,prepend:c})}}),pt={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
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
//# sourceMappingURL=FAppBar.stories.73893f47.js.map
