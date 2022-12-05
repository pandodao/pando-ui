var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{F as a,c as s}from"./FTabs.a9d4af47.js";import"./vue.esm-bundler.0d7c29ee.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VIcon.27b7c9a9.js";import"./color.a1d36358.js";import"./VBtn.aebc80dd.js";import"./proxiedModel.0134c68c.js";import"./variant.f85b9fa5.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./locale.6d395d7c.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./easing.d7926d43.js";import"./index.e4eb9e0e.js";import"./display.8735be82.js";const k={parameters:{storySource:{source:`import { FTabs } from "./FTabs";
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
//# sourceMappingURL=FTabs.stories.1c5cfffe.js.map
