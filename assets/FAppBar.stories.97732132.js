var u=Object.defineProperty;var e=(t,n)=>u(t,"name",{value:n,configurable:!0});import{A as v,b as o,a as p,m as d,e as B}from"./vue.esm-bundler.60beb779.js";import{u as f}from"./display.49866675.js";import{a as F}from"./VAppBar.ab11e628.js";import{V as A}from"./VIcon.ccd22ecd.js";import{V as b}from"./VBtn.76288723.js";import{F as g}from"./FButton.7fb5afc5.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./index.2f1043ab.js";import"./border.84bdbe82.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./color.7f161142.js";import"./variant.f60f637f.js";import"./VImg.79a3bf78.js";import"./index.41c719a2.js";import"./transition.d5d90e7e.js";import"./dimensions.71f8bcb1.js";import"./layout.be832025.js";import"./VProgressCircular.1a876490.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./locale.656e3084.js";import"./proxiedModel.c4bc26c4.js";import"./anchor.46190ad2.js";import"./density.3ab93966.js";import"./index.d3586bd0.js";import"./position.31a6f1c1.js";import"./router.9cc51735.js";const a=v({name:"FAppBar",props:{back:{type:Boolean,default:!1},center:{type:Boolean,default:!1},immersive:{type:Boolean,default:!1}},setup(t,{attrs:n,slots:r}){const{smAndDown:s}=f(),m=o(()=>({"f-app-bar":!0,"f-app-bar--immersive":t.immersive,"f-app-bar--center":t.center})),i=o(()=>({height:s.value?48:64,elevation:0,app:!0})),l=e(()=>p(b,{icon:!0,size:"24",ripple:!1},{default:()=>[p(A,null,{default:()=>[B("$back")]})]}),"back"),c=t.back?l:r.prepend;return()=>p(F,d({class:m.value},i.value,n),{...r,prepend:c})}}),et={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
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
//# sourceMappingURL=FAppBar.stories.97732132.js.map
