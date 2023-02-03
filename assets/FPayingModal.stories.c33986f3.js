var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r}from"./vue.esm-bundler.330b8bcd.js";import{F as e}from"./FPayingModal.7c2a8ce0.js";import{F as i}from"./FButton.d034f6f2.js";import"./locale.0eda84ca.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VBtn.e55e9e37.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./VIcon.c758310f.js";import"./color.66c7a00f.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./dimensions.6590eaa4.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./VOverlay.d681ab18.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./display.b3319b10.js";const G={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FPayingModal.stories.c33986f3.js.map
