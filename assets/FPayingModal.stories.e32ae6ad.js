var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r}from"./vue.esm-bundler.b09b7c5a.js";import{F as e}from"./FPayingModal.b8dadb12.js";import{F as i}from"./FButton.7621db81.js";import"./locale.88650f04.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VOverlay.7cd76152.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";const A={parameters:{storySource:{source:`import { ref } from "vue";

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
  `}),"Template"),p=l.bind({});p.args={};const G=["Default"];export{p as Default,G as __namedExportsOrder,A as default};
//# sourceMappingURL=FPayingModal.stories.e32ae6ad.js.map
