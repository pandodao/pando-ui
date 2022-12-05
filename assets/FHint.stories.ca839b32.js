var i=Object.defineProperty;var o=(t,n)=>i(t,"name",{value:n,configurable:!0});import{d as p}from"./vue.esm-bundler.0d7c29ee.js";import{F as e}from"./FHint.bf96fb2e.js";import{F as a}from"./FButton.c94e3704.js";import"./FTooltip.1ac232ae.js";import"./VTooltip.39b46481.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./scopeId.7054761b.js";import"./forwardRefs.c5465513.js";import"./VOverlay.664db6e2.js";import"./dimensions.512da313.js";import"./easing.d7926d43.js";import"./anchor.cecbc02b.js";import"./color.a1d36358.js";import"./transition.845f9488.js";import"./router.e34e74ab.js";import"./locale.6d395d7c.js";import"./FModal.1ffcee23.js";import"./createSimpleFunctional.e0d25bf4.js";import"./VIcon.27b7c9a9.js";import"./density.1812b102.js";import"./variant.f85b9fa5.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./index.9418ce7a.js";import"./loader.dd2f3ca6.js";import"./elevation.b2f78cc5.js";import"./VBtn.aebc80dd.js";import"./VProgressCircular.c944d5ab.js";import"./display.8735be82.js";const J={parameters:{storySource:{source:`import { ref } from "vue";

import { FHint } from "./FHint";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FHint",
  component: FHint,
} as Meta<typeof FHint>;

const Template: StoryFn<typeof FHint> = (args) => ({
  components: { FHint, FButton },

  setup() {
    const dialog = ref(false);
    return { args, dialog };
  },
  template: \`
    <div style="text-align: center; padding: 100px">
      APY
      <FHint
        v-model="dialog"
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  \`,
});

export const Text = Template.bind({});
Text.args = { location: "top", openOnHover: false, openOnClick: true };

export const Href = Template.bind({});
Href.args = {
  location: "bottom",
  href: "https://pando.im/",
  openOnHover: false,
  openOnClick: true,
};
`,locationsMap:{text:{startLoc:{col:40,line:12},endLoc:{col:2,line:29},startBody:{col:40,line:12},endBody:{col:2,line:29}},href:{startLoc:{col:40,line:12},endLoc:{col:2,line:29},startBody:{col:40,line:12},endBody:{col:2,line:29}}}}},name:"FHint",component:e},r=o(t=>({components:{FHint:e,FButton:a},setup(){const n=p(!1);return{args:t,dialog:n}},template:`
    <div style="text-align: center; padding: 100px">
      APY
      <FHint
        v-model="dialog"
        hint="The annual percentage yield (APY) is the real rate of return earned on an investment"
        v-bind="args"
      />
    </div>
  `}),"Template"),m=r.bind({});m.args={location:"top",openOnHover:!1,openOnClick:!0};const l=r.bind({});l.args={location:"bottom",href:"https://pando.im/",openOnHover:!1,openOnClick:!0};const K=["Text","Href"];export{l as Href,m as Text,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FHint.stories.ca839b32.js.map
