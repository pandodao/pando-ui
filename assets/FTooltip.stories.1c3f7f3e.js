var r=Object.defineProperty;var n=(o,t)=>r(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.62cdaeff.js";import{F as e}from"./FTooltip.e45060f9.js";import{F as i}from"./FButton.7a11c708.js";import"./VTooltip.71b83f94.js";import"./proxiedModel.c2b98033.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./anchor.4b6c6135.js";import"./color.5ac0909d.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./locale.b4680344.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./VIcon.ddcbca9b.js";import"./variant.cb074882.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./position.daea1c07.js";import"./VProgressCircular.5a613386.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.1c3f7f3e.js.map
