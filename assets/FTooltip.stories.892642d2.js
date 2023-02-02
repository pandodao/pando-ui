var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.1ba604f9.js";import{F as e}from"./FTooltip.62e74860.js";import{F as i}from"./FButton.da03e124.js";import"./VTooltip.9e0bd7e0.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./anchor.1637b665.js";import"./color.b891a321.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./display.de7ed398.js";import"./locale.fb27b96c.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.156ed533.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./VIcon.518cdeb6.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./position.747eb4b6.js";import"./VProgressCircular.6a9473f8.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

import { FTooltip } from "./FTooltip";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FTooltip",
  component: FTooltip,
} as Meta<typeof FTooltip>;

const Template: StoryFn<typeof FTooltip> = (args) => ({
  components: { FTooltip, FButton },

  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },

  template: \`
    <div style="padding-top: 100px;">
      <FTooltip text="The annual percentage yield (APY) is the real rate of return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
      
  \`,
});

export const Default = Template.bind({});
`,locationsMap:{default:{startLoc:{col:43,line:12},endLoc:{col:2,line:32},startBody:{col:43,line:12},endBody:{col:2,line:32}}}}},title:"Components/FTooltip",component:e},m=n(t=>({components:{FTooltip:e,FButton:i},setup(){const o=p(!1);return{args:t,dialog:o}},template:`
    <div style="padding-top: 100px;">
      <FTooltip text="The annual percentage yield (APY) is the real rate of return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
      
  `}),"Template"),z=m.bind({}),G=["Default"];export{z as Default,G as __namedExportsOrder,w as default};
//# sourceMappingURL=FTooltip.stories.892642d2.js.map
