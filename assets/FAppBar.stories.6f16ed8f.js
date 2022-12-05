var o=Object.defineProperty;var e=(t,p)=>o(t,"name",{value:p,configurable:!0});import{F as n}from"./FAppBar.a483a7cb.js";import{F as r}from"./FButton.c94e3704.js";import"./vue.esm-bundler.0d7c29ee.js";import"./display.8735be82.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./index.e4eb9e0e.js";import"./VIcon.27b7c9a9.js";import"./color.a1d36358.js";import"./variant.f85b9fa5.js";import"./elevation.b2f78cc5.js";import"./density.1812b102.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./dimensions.512da313.js";import"./layout.81e3c011.js";import"./VProgressCircular.c944d5ab.js";import"./loader.dd2f3ca6.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./VBtn.aebc80dd.js";import"./index.9418ce7a.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";const w={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FAppBar",
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
Default.args = { center: true, back: true, immersive: false, elevation: 1 };

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
Custom.args = { center: true, back: false, immersive: false, elevation: 1 };
`,locationsMap:{default:{startLoc:{col:42,line:10},endLoc:{col:2,line:22},startBody:{col:42,line:10},endBody:{col:2,line:22}},custom:{startLoc:{col:43,line:27},endLoc:{col:2,line:60},startBody:{col:43,line:27},endBody:{col:2,line:60}}}}},name:"FAppBar",component:n},a=e(t=>({components:{FAppBar:n},setup(){return{args:t}},template:`
    <FAppBar title="FAppBar" v-bind="args">
      <template #append>
        <v-icon>$search</v-icon>
      </template>
    </FAppBar>
  `}),"Template"),i=a.bind({});i.args={center:!0,back:!0,immersive:!1,elevation:1};const m=e(t=>({components:{FAppBar:n,FButton:r},setup(){return{args:t}},template:`
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
  `}),"Template2"),s=m.bind({});s.args={center:!0,back:!1,immersive:!1,elevation:1};const E=["Default","Custom"];export{s as Custom,i as Default,E as __namedExportsOrder,w as default};
//# sourceMappingURL=FAppBar.stories.6f16ed8f.js.map
