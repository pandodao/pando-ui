var r=Object.defineProperty;var n=(o,t)=>r(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.57aa1454.js";import{F as e}from"./FTooltip.b86a7ded.js";import{F as i}from"./FButton.95509114.js";import"./VTooltip.78003fdc.js";import"./proxiedModel.aff93369.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./anchor.8b678110.js";import"./color.5e70182f.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./locale.ce33eacd.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./variant.58edd759.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./position.6bb498a5.js";import"./VProgressCircular.ce5720de.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.841c178b.js.map
