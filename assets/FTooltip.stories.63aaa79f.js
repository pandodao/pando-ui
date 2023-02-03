var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.330b8bcd.js";import{F as e}from"./FTooltip.7983801f.js";import{F as i}from"./FButton.d034f6f2.js";import"./VTooltip.069fa7d0.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./anchor.7cdf4a4d.js";import"./color.66c7a00f.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./locale.0eda84ca.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./VIcon.c758310f.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./position.03fcbfb6.js";import"./VProgressCircular.27e195cb.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.63aaa79f.js.map
