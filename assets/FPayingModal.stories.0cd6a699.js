var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{r}from"./vue.esm-bundler.57aa1454.js";import{F as e}from"./FPayingModal.1e620246.js";import{F as i}from"./FButton.95509114.js";import"./locale.ce33eacd.js";import"./proxiedModel.aff93369.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VOverlay.2998aec7.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./display.8ac49ecd.js";const G={parameters:{storySource:{source:`import { ref } from "vue";

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
//# sourceMappingURL=FPayingModal.stories.0cd6a699.js.map
