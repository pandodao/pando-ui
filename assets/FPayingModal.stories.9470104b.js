var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r}from"./vue.esm-bundler.06cbf4f3.js";import{F as e}from"./FPayingModal.8eb7b855.js";import{F as i}from"./FButton.042bb067.js";import"./locale.7c7f5def.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VBtn.a6fb96e2.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VOverlay.99ed030c.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./display.f0408c25.js";const G={parameters:{storySource:{source:`import { ref } from "vue";

import { FPayingModal } from "./FPayingModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FPayingModal",
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
      <FButton color="primary" v-bind="args" @click="open">
        Pay
      </FButton>

      <FPayingModal v-model="dialog" @cancel="close" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:38},startBody:{col:47,line:12},endBody:{col:2,line:38}}}}},title:"Components/FPayingModal",component:e},l=n(t=>({components:{FPayingModal:e,FButton:i},setup(){const o=r(!1);return{args:t,dialog:o,open:n(()=>{o.value=!0},"open"),close:n(()=>{o.value=!1},"close")}},template:`
    <div>
      <FButton color="primary" v-bind="args" @click="open">
        Pay
      </FButton>

      <FPayingModal v-model="dialog" @cancel="close" />
    </div>
  `}),"Template"),p=l.bind({});p.args={};const H=["Default"];export{p as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=FPayingModal.stories.9470104b.js.map
