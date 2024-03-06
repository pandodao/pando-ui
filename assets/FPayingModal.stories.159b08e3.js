var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r}from"./vue.esm-bundler.80cafc0b.js";import{F as e}from"./FPayingModal.f4761d74.js";import{F as i}from"./FButton.5e8d1e13.js";import"./locale.68d0262d.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VOverlay.a7e28035.js";import"./easing.da2e9236.js";import"./display.1ed39e23.js";import"./transition.b6a16e6c.js";const G={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FPayingModal.stories.159b08e3.js.map
