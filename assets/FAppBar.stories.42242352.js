var o=Object.defineProperty;var e=(t,p)=>o(t,"name",{value:p,configurable:!0});import{F as n}from"./FAppBar.81888c17.js";import{F as r}from"./FButton.2e1405fc.js";import"./vue.esm-bundler.03d0f9c2.js";import"./display.8ad1f519.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./index.98b5e059.js";import"./VIcon.48347d4a.js";import"./color.ec9b773d.js";import"./variant.89df963d.js";import"./elevation.ef328fb6.js";import"./density.e2a6824c.js";import"./VImg.40b0c651.js";import"./index.7705c375.js";import"./transition.37736cb0.js";import"./dimensions.4f68b75e.js";import"./layout.758c3963.js";import"./VProgressCircular.3dc750a1.js";import"./loader.30593133.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./VBtn.a413b61a.js";import"./index.71c8a79f.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";const w={parameters:{storySource:{source:`import { FAppBar } from "./FAppBar";
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
//# sourceMappingURL=FAppBar.stories.42242352.js.map
