var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as i}from"./FModal.af77241e.js";import{F as r}from"./FButton.042bb067.js";import{r as m}from"./vue.esm-bundler.06cbf4f3.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./anchor.4d34e672.js";import"./color.9c80aa54.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./locale.7c7f5def.js";import"./variant.e4970577.js";import"./createSimpleFunctional.917a427b.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./VAvatar.d0341de2.js";import"./rounded.ae3fe3ca.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./index.0e1c0398.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./border.386c98bf.js";import"./elevation.906ca0d0.js";import"./position.f250096a.js";import"./VBtn.a6fb96e2.js";import"./VProgressCircular.32071c16.js";const Q={parameters:{storySource:{source:`import { FModal } from "./FModal";
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
//# sourceMappingURL=FModal.stories.1d2279a3.js.map
