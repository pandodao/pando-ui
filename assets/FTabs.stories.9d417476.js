var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{F as a,c as s}from"./FTabs.1879d877.js";import"./vue.esm-bundler.03d0f9c2.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./VIcon.48347d4a.js";import"./color.ec9b773d.js";import"./VBtn.a413b61a.js";import"./proxiedModel.12bae561.js";import"./variant.89df963d.js";import"./density.e2a6824c.js";import"./elevation.ef328fb6.js";import"./index.71c8a79f.js";import"./dimensions.4f68b75e.js";import"./loader.30593133.js";import"./locale.9f7d6233.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./easing.d7926d43.js";import"./index.98b5e059.js";import"./display.8ad1f519.js";const k={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
import { VTab } from "vuetify/components";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FTabs",
  component: FTabs,
} as Meta<typeof FTabs>;

const Template: StoryFn<typeof FTabs> = (args) => ({
  components: { FTabs, VTab },
  setup() {
    return { args };
  },
  template: \`
    <FTabs v-bind="args">
      <VTab>
        <span>Supply</span>
      </VTab>
      <VTab>
        <span>Borrow</span>
      </VTab>
    </FTabs>
  \`,
});

export const Default = Template.bind({});
Default.args = { grow: false, narrow: false };
`,locationsMap:{default:{startLoc:{col:40,line:10},endLoc:{col:2,line:25},startBody:{col:40,line:10},endBody:{col:2,line:25}}}}},name:"FTabs",component:a},p=t(o=>({components:{FTabs:a,VTab:s},setup(){return{args:o}},template:`
    <FTabs v-bind="args">
      <VTab>
        <span>Supply</span>
      </VTab>
      <VTab>
        <span>Borrow</span>
      </VTab>
    </FTabs>
  `}),"Template"),e=p.bind({});e.args={grow:!1,narrow:!1};const E=["Default"];export{e as Default,E as __namedExportsOrder,k as default};
//# sourceMappingURL=FTabs.stories.9d417476.js.map
