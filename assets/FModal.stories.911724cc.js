var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as i}from"./FModal.3e0c2496.js";import{F as r}from"./FButton.da03e124.js";import{r as m}from"./vue.esm-bundler.1ba604f9.js";import"./VDialog.0f487f73.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./anchor.1637b665.js";import"./color.b891a321.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./display.de7ed398.js";import"./locale.fb27b96c.js";import"./variant.22bbbe86.js";import"./createSimpleFunctional.b271bf7a.js";import"./VIcon.518cdeb6.js";import"./density.8ac56fa2.js";import"./VAvatar.d7e1c088.js";import"./rounded.cb32523b.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./index.27517d48.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./border.c2063388.js";import"./elevation.7428fb70.js";import"./position.747eb4b6.js";import"./VBtn.156ed533.js";import"./VProgressCircular.6a9473f8.js";const Q={parameters:{storySource:{source:`import { FModal } from "./FModal";
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
//# sourceMappingURL=FModal.stories.911724cc.js.map
