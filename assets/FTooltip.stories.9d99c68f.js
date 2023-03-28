var e=Object.defineProperty;var n=(o,t)=>e(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.3b29098a.js";import{F as r}from"./FTooltip.d16a65ea.js";import{F as i}from"./FButton.72dd92af.js";import"./VTooltip.57ebbf91.js";import"./proxiedModel.67252d17.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./anchor.c52c8661.js";import"./color.fef4ce02.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./display.f5b0b65d.js";import"./locale.eccdb440.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./VIcon.c254d683.js";import"./variant.be65e42d.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./intersectionObserver.b06f0fb9.js";import"./position.6cc3b816.js";import"./VProgressCircular.c527f932.js";const z={parameters:{storySource:{source:`import { ref } from "vue";

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
      <FTooltip text="The annual percentage yield (APY) is the real rate of <br>  return earned on an investment" v-model="dialog" v-bind="args">
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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:2,line:36},startBody:{col:23,line:34},endBody:{col:2,line:36}}}}},title:"Components/FTooltip",component:r},m=n(o=>({components:{FTooltip:r,FButton:i},setup(){const t=p(!1);return{args:o,dialog:t}},template:`
    <div>
      <FTooltip text="The annual percentage yield (APY) is the real rate of <br>  return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
      
  `}),"Template"),G=m.bind({location:"top"}),H=["Default"];export{G as Default,H as __namedExportsOrder,z as default};
//# sourceMappingURL=FTooltip.stories.9d99c68f.js.map
