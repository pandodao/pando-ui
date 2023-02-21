var r=Object.defineProperty;var n=(o,t)=>r(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.60beb779.js";import{F as e}from"./FTooltip.665af9bf.js";import{F as i}from"./FButton.7fb5afc5.js";import"./VTooltip.368e4bdc.js";import"./proxiedModel.c4bc26c4.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./VOverlay.6564e1f3.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./anchor.46190ad2.js";import"./color.7f161142.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./display.49866675.js";import"./locale.656e3084.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.76288723.js";import"./border.84bdbe82.js";import"./density.3ab93966.js";import"./elevation.6146b715.js";import"./rounded.08843391.js";import"./VIcon.ccd22ecd.js";import"./variant.f60f637f.js";import"./index.d3586bd0.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./position.31a6f1c1.js";import"./VProgressCircular.1a876490.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

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
    <div>
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

export const Default = Template.bind({
  location: "top",
});
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:2,line:36},startBody:{col:23,line:34},endBody:{col:2,line:36}}}}},title:"Components/FTooltip",component:e},m=n(o=>({components:{FTooltip:e,FButton:i},setup(){const t=p(!1);return{args:o,dialog:t}},template:`
    <div>
      <FTooltip text="The annual percentage yield (APY) is the real rate of return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
      
  `}),"Template"),z=m.bind({location:"top"}),G=["Default"];export{z as Default,G as __namedExportsOrder,w as default};
//# sourceMappingURL=FTooltip.stories.15ac3282.js.map
