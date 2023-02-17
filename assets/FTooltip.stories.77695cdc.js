var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.caa622c4.js";import{F as e}from"./FTooltip.b3cba82b.js";import{F as i}from"./FButton.b7201e41.js";import"./VTooltip.583dae81.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./VOverlay.a16b5884.js";import"./dimensions.1a78e179.js";import"./easing.36b781ab.js";import"./anchor.57ff9838.js";import"./color.795eceb6.js";import"./transition.712d10eb.js";import"./router.f4dceb95.js";import"./display.ef8c62e1.js";import"./locale.312c25a1.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.abf41941.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./VIcon.f37f8177.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./position.6630ce12.js";import"./VProgressCircular.9b7ebd22.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.77695cdc.js.map
