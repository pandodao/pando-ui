var l=Object.defineProperty;var e=(o,t)=>l(o,"name",{value:t,configurable:!0});import{F as i}from"./FModal.7ce358cf.js";import{F as r}from"./FButton.d61383cc.js";import{r as m}from"./vue.esm-bundler.9500adb2.js";import"./VDialog.38dab5f5.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.881d858e.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./VOverlay.96b5c4e3.js";import"./dimensions.5f5b1dd8.js";import"./easing.36b781ab.js";import"./anchor.1afb8064.js";import"./color.45246ddd.js";import"./transition.10caf698.js";import"./router.6e1740fe.js";import"./display.9827c8ac.js";import"./locale.7efc9def.js";import"./variant.95637a5a.js";import"./createSimpleFunctional.0b08b174.js";import"./VIcon.b10ecbaa.js";import"./density.0c8fab1e.js";import"./VAvatar.9487a2f3.js";import"./rounded.d16b72e9.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./index.1967ded9.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./intersectionObserver.10253e57.js";import"./border.eebb6db1.js";import"./elevation.d906eb56.js";import"./position.427d9f74.js";import"./VBtn.b26bd4ae.js";import"./VProgressCircular.8b82923d.js";const R={parameters:{storySource:{source:`import { FModal } from "./FModal";
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
  `}),"Template"),p=n.bind({});p.args={title:"Title"};const s=n.bind({});s.args={title:"Title",desktop:"menu",persistent:!1};const U=["Default","Menu"];export{p as Default,s as Menu,U as __namedExportsOrder,R as default};
//# sourceMappingURL=FModal.stories.915d34cd.js.map
