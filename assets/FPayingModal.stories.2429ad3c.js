var r=Object.defineProperty;var n=(t,o)=>r(t,"name",{value:o,configurable:!0});import{r as a}from"./vue.esm-bundler.9500adb2.js";import{F as e}from"./FPayingModal.9bcf65bd.js";import{F as i}from"./FButton.d61383cc.js";import"./locale.7efc9def.js";import"./proxiedModel.881d858e.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VOverlay.96b5c4e3.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./display.9827c8ac.js";const H={parameters:{storySource:{source:`import { ref } from "vue";

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
`,locationsMap:{default:{startLoc:{col:47,line:12},endLoc:{col:2,line:38},startBody:{col:47,line:12},endBody:{col:2,line:38}}}}},title:"Components/FPayingModal",component:e},l=n(t=>({components:{FPayingModal:e,FButton:i},setup(){const o=a(!1);return{args:t,dialog:o,open:n(()=>{o.value=!0},"open"),close:n(()=>{o.value=!1},"close")}},template:`
    <div>
      <FButton color="primary" v-bind="args" @click="open">
        Pay
      </FButton>

      <FPayingModal v-model="dialog" @cancel="close" />
    </div>
  `}),"Template"),p=l.bind({});p.args={};const I=["Default"];export{p as Default,I as __namedExportsOrder,H as default};
//# sourceMappingURL=FPayingModal.stories.2429ad3c.js.map
