var i=Object.defineProperty;var e=(t,n)=>i(t,"name",{value:n,configurable:!0});import{d as p}from"./vue.esm-bundler.0d7c29ee.js";import{F as r}from"./FTooltip.1ac232ae.js";import{F as l}from"./FButton.c94e3704.js";import"./VTooltip.39b46481.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./scopeId.7054761b.js";import"./forwardRefs.c5465513.js";import"./VOverlay.664db6e2.js";import"./dimensions.512da313.js";import"./easing.d7926d43.js";import"./anchor.cecbc02b.js";import"./color.a1d36358.js";import"./transition.845f9488.js";import"./router.e34e74ab.js";import"./locale.6d395d7c.js";import"./VBtn.aebc80dd.js";import"./variant.f85b9fa5.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./loader.dd2f3ca6.js";import"./VProgressCircular.c944d5ab.js";const w={parameters:{storySource:{source:`import { ref } from "vue";

import { FTooltip } from "./FTooltip";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FTooltip",
  component: FTooltip,
} as Meta<typeof FTooltip>;

const Template: StoryFn<typeof FTooltip> = (args) => ({
  components: { FTooltip, FButton },

  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },

  template: \`
    <div style="text-align: center; padding: 100px">
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

export const Top = Template.bind({});
Top.args = { location: "top", openOnHover: false, openOnClick: true };

export const End = Template.bind({});
End.args = { location: "end", openOnHover: false, openOnClick: true };

export const Bottom = Template.bind({});
Bottom.args = { location: "bottom", openOnHover: false, openOnClick: true };

export const Start = Template.bind({});
Start.args = { location: "start", openOnHover: false, openOnClick: true };
`,locationsMap:{top:{startLoc:{col:43,line:12},endLoc:{col:2,line:31},startBody:{col:43,line:12},endBody:{col:2,line:31}},end:{startLoc:{col:43,line:12},endLoc:{col:2,line:31},startBody:{col:43,line:12},endBody:{col:2,line:31}},bottom:{startLoc:{col:43,line:12},endLoc:{col:2,line:31},startBody:{col:43,line:12},endBody:{col:2,line:31}},start:{startLoc:{col:43,line:12},endLoc:{col:2,line:31},startBody:{col:43,line:12},endBody:{col:2,line:31}}}}},name:"FTooltip",component:r},o=e(t=>({components:{FTooltip:r,FButton:l},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div style="text-align: center; padding: 100px">
      <FTooltip text="The annual percentage yield (APY) is the real rate of return earned on an investment" v-model="dialog" v-bind="args">
        <template #activator="{props}">
          <FButton color="primary" v-bind="props">
            Tooltip
          </FButton>
        </template>
      </FTooltip>
    </div>
  `}),"Template"),a=o.bind({});a.args={location:"top",openOnHover:!1,openOnClick:!0};const s=o.bind({});s.args={location:"end",openOnHover:!1,openOnClick:!0};const c=o.bind({});c.args={location:"bottom",openOnHover:!1,openOnClick:!0};const m=o.bind({});m.args={location:"start",openOnHover:!1,openOnClick:!0};const z=["Top","End","Bottom","Start"];export{c as Bottom,s as End,m as Start,a as Top,z as __namedExportsOrder,w as default};
//# sourceMappingURL=FTooltip.stories.0fdc246a.js.map
