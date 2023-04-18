var e=Object.defineProperty;var n=(o,t)=>e(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import{F as r}from"./FTooltip.718212a9.js";import{F as i}from"./FButton.fd5dc93c.js";import"./VTooltip.e9edb427.js";import"./proxiedModel.f0d8de9f.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./color.1fec8f8e.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./display.fd968d5a.js";import"./locale.0dcd1420.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VIcon.81f7ecc0.js";import"./variant.eababd72.js";import"./index.eca3ba9a.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./intersectionObserver.8499cdfb.js";import"./position.6b49aae6.js";import"./VProgressCircular.8c9797f0.js";const z={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FTooltip.stories.07c0bc8a.js.map
