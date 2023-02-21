var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as i}from"./FModal.e9ae3117.js";import{F as r}from"./FButton.7fb5afc5.js";import{r as m}from"./vue.esm-bundler.60beb779.js";import"./VDialog.74ee3f5c.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.c4bc26c4.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./VOverlay.6564e1f3.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./anchor.46190ad2.js";import"./color.7f161142.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./display.49866675.js";import"./locale.656e3084.js";import"./variant.f60f637f.js";import"./createSimpleFunctional.057254cd.js";import"./VIcon.ccd22ecd.js";import"./density.3ab93966.js";import"./VAvatar.709f16cb.js";import"./rounded.08843391.js";import"./VImg.79a3bf78.js";import"./index.41c719a2.js";import"./index.d3586bd0.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./border.84bdbe82.js";import"./elevation.6146b715.js";import"./position.31a6f1c1.js";import"./VBtn.76288723.js";import"./VProgressCircular.1a876490.js";const Q={parameters:{storySource:{source:`import { FModal } from "./FModal";
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
//# sourceMappingURL=FModal.stories.32e6b0fe.js.map
