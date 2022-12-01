var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as n}from"./FModal.2828546c.js";import{F as r}from"./FButton.2e1405fc.js";import{d as m}from"./vue.esm-bundler.03d0f9c2.js";import"./createSimpleFunctional.80c809ed.js";import"./useRender.4b8f74ab.js";import"./helpers.11996f79.js";import"./VIcon.48347d4a.js";import"./color.ec9b773d.js";import"./density.e2a6824c.js";import"./variant.89df963d.js";import"./VAvatar.bb0c21d9.js";import"./VImg.40b0c651.js";import"./index.7705c375.js";import"./transition.37736cb0.js";import"./dimensions.4f68b75e.js";import"./index.71c8a79f.js";import"./loader.30593133.js";import"./proxiedModel.12bae561.js";import"./locale.9f7d6233.js";import"./elevation.ef328fb6.js";import"./VBtn.a413b61a.js";import"./anchor.a0b334cc.js";import"./router.6303e2ed.js";import"./VProgressCircular.3dc750a1.js";import"./forwardRefs.c5465513.js";import"./scopeId.adb6c097.js";import"./VOverlay.07008e41.js";import"./easing.d7926d43.js";import"./display.8ad1f519.js";const J={parameters:{storySource:{source:`import { FModal } from "./FModal";
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
//# sourceMappingURL=FModal.stories.7ee3801c.js.map
