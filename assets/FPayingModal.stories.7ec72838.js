var e=Object.defineProperty;var n=(t,o)=>e(t,"name",{value:o,configurable:!0});import{d as r}from"./vue.esm-bundler.0d7c29ee.js";import{F as a}from"./FPayingModal.58872440.js";import{F as i}from"./FButton.c94e3704.js";import"./locale.6d395d7c.js";import"./proxiedModel.0134c68c.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VBtn.aebc80dd.js";import"./variant.f85b9fa5.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./elevation.b2f78cc5.js";import"./VIcon.27b7c9a9.js";import"./index.9418ce7a.js";import"./dimensions.512da313.js";import"./loader.dd2f3ca6.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./transition.845f9488.js";const j={parameters:{storySource:{source:`import { ref } from "vue";

import { FPayingModal } from "./FPayingModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FPayingModal",
  component: FPayingModal,
} as Meta<typeof FPayingModal>;

const Template: StoryFn<typeof FPayingModal> = (args) => ({
  components: { FPayingModal, FButton },

  setup() {
    const dialog = ref(false);

    const open = () => {
      dialog.value = true;
    };
    const close = () => {
      dialog.value = false;
    };

    return { args, dialog, open, close };
  },

  template: \`
    <div>
      <FButton variant="outlined" block color="primary" v-bind="args" @click="open">
        Pay
      </FButton>

      <FPayingModal :show="dialog" @cancel="close" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:37},startBody:{col:47,line:12},endBody:{col:2,line:37}}}}},name:"FPayingModal",component:a},l=n(t=>({components:{FPayingModal:a,FButton:i},setup(){const o=r(!1);return{args:t,dialog:o,open:n(()=>{o.value=!0},"open"),close:n(()=>{o.value=!1},"close")}},template:`
    <div>
      <FButton variant="outlined" block color="primary" v-bind="args" @click="open">
        Pay
      </FButton>

      <FPayingModal :show="dialog" @cancel="close" />
    </div>
  `}),"Template"),p=l.bind({});p.args={};const q=["Default"];export{p as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=FPayingModal.stories.7ec72838.js.map
