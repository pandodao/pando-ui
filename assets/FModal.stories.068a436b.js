var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as n}from"./FModal.1ffcee23.js";import{F as r}from"./FButton.c94e3704.js";import{d as m}from"./vue.esm-bundler.0d7c29ee.js";import"./createSimpleFunctional.e0d25bf4.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VIcon.27b7c9a9.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./variant.f85b9fa5.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./dimensions.512da313.js";import"./index.9418ce7a.js";import"./loader.dd2f3ca6.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./elevation.b2f78cc5.js";import"./VBtn.aebc80dd.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./forwardRefs.c5465513.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";const J={parameters:{storySource:{source:`import { FModal } from "./FModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  name: "FModal",
  component: { FModal },
} as Meta<typeof FModal>;

const Template: StoryFn<typeof FModal> = (args) => ({
  components: { FModal, FButton },
  setup() {
    const dialog = ref(false);
    const close = () => {
      console.log("close");
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
`,locationsMap:{default:{startLoc:{col:41,line:11},endLoc:{col:2,line:35},startBody:{col:41,line:11},endBody:{col:2,line:35}},menu:{startLoc:{col:41,line:11},endLoc:{col:2,line:35},startBody:{col:41,line:11},endBody:{col:2,line:35}}}}},name:"FModal",component:{FModal:n}},i=e(o=>({components:{FModal:n,FButton:r},setup(){const t=m(!1);return{args:o,dialog:t,close:e(()=>{console.log("close"),t.value=!1},"close")}},template:`
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
  `}),"Template"),s=i.bind({});s.args={title:"Title"};const a=i.bind({});a.args={title:"Title",desktop:"menu",persistent:!1};const K=["Default","Menu"];export{s as Default,a as Menu,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FModal.stories.068a436b.js.map
