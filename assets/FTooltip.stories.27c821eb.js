var e=Object.defineProperty;var n=(o,t)=>e(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.9500adb2.js";import{F as r}from"./FTooltip.81f0299e.js";import{F as i}from"./FButton.d61383cc.js";import"./VTooltip.3ad21be9.js";import"./proxiedModel.881d858e.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./anchor.1afb8064.js";import"./color.45246ddd.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./display.9827c8ac.js";import"./locale.7efc9def.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./variant.95637a5a.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./VProgressCircular.8b82923d.js";const z={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.27c821eb.js.map
