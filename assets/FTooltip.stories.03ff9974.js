var e=Object.defineProperty;var n=(o,t)=>e(o,"name",{value:t,configurable:!0});import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import{F as r}from"./FTooltip.08228b46.js";import{F as i}from"./FButton.7621db81.js";import"./VTooltip.42cfaf74.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./locale.88650f04.js";import"./forwardRefs.c003b6b8.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";const q={parameters:{storySource:{source:`import { ref } from "vue";

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
`,locationsMap:{default:{startLoc:{col:23,line:34},endLoc:{col:2,line:36},startBody:{col:23,line:34},endBody:{col:2,line:36}}}}},title:"Components/FTooltip",component:r},a=n(o=>({components:{FTooltip:r,FButton:i},setup(){const t=p(!1);return{args:o,dialog:t}},template:`
    <div>
      <FTooltip text="The annual percentage yield (APY) is the real rate of <br>  return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
      
  `}),"Template"),w=a.bind({location:"top"}),z=["Default"];export{w as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=FTooltip.stories.03ff9974.js.map
