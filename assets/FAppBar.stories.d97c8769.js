var u=Object.defineProperty;var e=(t,n)=>u(t,"name",{value:n,configurable:!0});import{A as v,b as o,a as p,m as d,e as B}from"./vue.esm-bundler.1ba604f9.js";import{u as f}from"./display.de7ed398.js";import{a as F}from"./VAppBar.eedffce1.js";import{V as A}from"./VIcon.518cdeb6.js";import{V as b}from"./VBtn.156ed533.js";import{F as g}from"./FButton.da03e124.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./index.a7472254.js";import"./border.c2063388.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./color.b891a321.js";import"./variant.22bbbe86.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./transition.ef0cc300.js";import"./dimensions.721a2e0b.js";import"./layout.e043ac0b.js";import"./VProgressCircular.6a9473f8.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./proxiedModel.23143766.js";import"./anchor.1637b665.js";import"./density.8ac56fa2.js";import"./index.27517d48.js";import"./position.747eb4b6.js";import"./router.ba883828.js";const a=v({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(t,{attrs:n,slots:r}){const{smAndDown:s}=f(),m=o(()=>({"f-app-bar":!0,"f-app-bar--immersive":t.immersive,"f-app-bar--center":t.center})),i=o(()=>({height:s.value?48:64,elevation:0,app:!0})),l=e(()=>p(b,{icon:!0,size:"24",ripple:!1},{default:()=>[p(A,null,{default:()=>[B("$back")]})]}),"back"),c=t.back?l:r.prepend;return()=>p(F,d({class:m.value},i.value,n),{...r,prepend:c})}}),et={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
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
//# sourceMappingURL=FAppBar.stories.d97c8769.js.map
