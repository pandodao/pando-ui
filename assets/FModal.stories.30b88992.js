var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as i}from"./FModal.b075f7f6.js";import{F as r}from"./FButton.95509114.js";import{r as m}from"./vue.esm-bundler.57aa1454.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.aff93369.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./anchor.8b678110.js";import"./color.5e70182f.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./locale.ce33eacd.js";import"./variant.58edd759.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./VAvatar.01c8c686.js";import"./rounded.638bf334.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./border.72c41e60.js";import"./elevation.08bb2882.js";import"./position.6bb498a5.js";import"./VBtn.ab71924f.js";import"./VProgressCircular.ce5720de.js";const Q={parameters:{storySource:{source:`import { FModal } from "./FModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FModal",
  component: { FModal },
} as Meta<typeof FModal>;

const Template: StoryFn<typeof FModal> = (args) => ({
  components: { FModal, FButton },
  setup() {
    const dialog = ref(false);
    const close = () => {
      dialog.value = false;
    };

    return { args, dialog, close };
  },
  template: \`
    <FModal v-model="dialog" v-bind="args">
      <template #activator="{props}">
        <FButton color="primary" v-bind="props">Active</FButton>
      </template>

      <v-list>
        <v-list-item title="Item1"></v-list-item>
        <v-list-item title="Item2"></v-list-item>
        <v-list-item title="Item3"></v-list-item>
      </v-list>
    </FModal>
  \`,
});

export const Default = Template.bind({});
Default.args = { title: "Title" };

export const Menu = Template.bind({});
Menu.args = { title: "Title", desktop: "menu", persistent: false };
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:34},startBody:{col:41,line:11},endBody:{col:2,line:34}},menu:{startLoc:{col:41,line:11},endLoc:{col:2,line:34},startBody:{col:41,line:11},endBody:{col:2,line:34}}}}},title:"Components/FModal",component:{FModal:i}},n=e(o=>({components:{FModal:i,FButton:r},setup(){const t=m(!1);return{args:o,dialog:t,close:e(()=>{t.value=!1},"close")}},template:`
    <FModal v-model="dialog" v-bind="args">
      <template #activator="{props}">
        <FButton color="primary" v-bind="props">Active</FButton>
      </template>

      <v-list>
        <v-list-item title="Item1"></v-list-item>
        <v-list-item title="Item2"></v-list-item>
        <v-list-item title="Item3"></v-list-item>
      </v-list>
    </FModal>
  `}),"Template"),s=n.bind({});s.args={title:"Title"};const p=n.bind({});p.args={title:"Title",desktop:"menu",persistent:!1};const R=["Default","Menu"];export{s as Default,p as Menu,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=FModal.stories.30b88992.js.map
