var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as i}from"./FModal.e70a199e.js";import{F as r}from"./FButton.7a11c708.js";import{r as m}from"./vue.esm-bundler.62cdaeff.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.c2b98033.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./anchor.4b6c6135.js";import"./color.5ac0909d.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./locale.b4680344.js";import"./variant.cb074882.js";import"./createSimpleFunctional.f6324448.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./VAvatar.8eec326e.js";import"./rounded.9945cf4e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./border.744ce806.js";import"./elevation.79ced88b.js";import"./position.daea1c07.js";import"./VBtn.2cacbcac.js";import"./VProgressCircular.5a613386.js";const Q={parameters:{storySource:{source:`import { FModal } from "./FModal";
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
//# sourceMappingURL=FModal.stories.28b8f7d3.js.map
