var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.a5c4e1bf.js";import{F as e}from"./FTooltip.6441e661.js";import{F as i}from"./FButton.f3fc7c21.js";import"./VTooltip.effd6529.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./scopeId.782553fc.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./anchor.e4a88562.js";import"./color.43314d1d.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./locale.76e208ea.js";import"./VBtn.b5444450.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./VIcon.5ca83e1b.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./position.d49ff30e.js";import"./VProgressCircular.ad6cc829.js";const q={parameters:{storySource:{source:`import { ref } from "vue";

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
`,locationsMap:{default:{startLoc:{col:43,line:12},endLoc:{col:2,line:32},startBody:{col:43,line:12},endBody:{col:2,line:32}}}}},title:"Components/FTooltip",component:e},a=n(t=>({components:{FTooltip:e,FButton:i},setup(){const o=p(!1);return{args:t,dialog:o}},template:`
    <div style="padding-top: 100px;">
      <FTooltip text="The annual percentage yield (APY) is the real rate of return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
      
  `}),"Template"),w=a.bind({}),z=["Default"];export{w as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=FTooltip.stories.f96cb413.js.map
