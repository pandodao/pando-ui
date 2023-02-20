var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{r as p}from"./vue.esm-bundler.06cbf4f3.js";import{F as e}from"./FTooltip.b4ea39bb.js";import{F as i}from"./FButton.042bb067.js";import"./VTooltip.354f2661.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./anchor.4d34e672.js";import"./color.9c80aa54.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./locale.7c7f5def.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.a6fb96e2.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./position.f250096a.js";import"./VProgressCircular.32071c16.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.4b369ab7.js.map
