var s=Object.defineProperty;var n=(e,o)=>s(e,"name",{value:o,configurable:!0});import{F as a}from"./FMessageModal.e470252c.js";import{F as r}from"./FButton.7621db81.js";import{h as t,r as l}from"./vue.esm-bundler.b09b7c5a.js";import"./FModal.cc1ac870.js";import"./VDialog.ac2f44e1.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./locale.88650f04.js";import"./variant.fbd007cc.js";import"./createSimpleFunctional.6499d319.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./VAvatar.95d7d85f.js";import"./rounded.28975b1c.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./intersectionObserver.1e3a532e.js";import"./border.6019dc9f.js";import"./elevation.12d4edaf.js";import"./position.faf59b49.js";import"./FRender.845cf91e.js";import"./VBtn.7921a3d1.js";import"./VProgressCircular.7bee339a.js";const Q={parameters:{storySource:{source:`import { FMessageModal } from "./FMessageModal";
import { FButton } from "../FButton";
import { ref, h } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FMessageModal",
  component: { FMessageModal },
} as Meta<typeof FMessageModal>;

const Template: StoryFn<typeof FMessageModal> = (args) => ({
  components: { FMessageModal, FButton },
  setup() {
    const modal = ref();

    const open = () => {
      modal.value.show();
    };

    return { args, modal, open };
  },
  template: \`
    <FButton color="primary" @click="open">Open</FButton>

    <FMessageModal ref="modal" v-bind="args"></FMessageModal>
  \`,
});

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
  confirm: {
    props: { color: "error" },
    text: "confirm",
  },
};

export const CustomAction = Template.bind({});
CustomAction.args = {
  title: "Custom Action",
  text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
  actions: h(FButton, { color: "error", block: true }, "Action"),
};

export const CustomeRender = Template.bind({});
CustomeRender.args = {
  title: h(
    "div",
    { style: { fontWight: 600, textAlign: "left" } },
    "VNode Title"
  ),
  text: h("div", { class: "text-warning" }, [
    h("span", "Text 1"),
    h("span", "Text 2"),
  ]),
  actions: h(FButton, { block: true, color: "primary" }, "Action"),
};
`,locationsMap:{default:{startLoc:{col:48,line:11},endLoc:{col:2,line:27},startBody:{col:48,line:11},endBody:{col:2,line:27}},"custom-action":{startLoc:{col:48,line:11},endLoc:{col:2,line:27},startBody:{col:48,line:11},endBody:{col:2,line:27}},"custome-render":{startLoc:{col:48,line:11},endLoc:{col:2,line:27},startBody:{col:48,line:11},endBody:{col:2,line:27}}}}},title:"Components/FMessageModal",component:{FMessageModal:a}},i=n(e=>({components:{FMessageModal:a,FButton:r},setup(){const o=l();return{args:e,modal:o,open:n(()=>{o.value.show()},"open")}},template:`
    <FButton color="primary" @click="open">Open</FButton>

    <FMessageModal ref="modal" v-bind="args"></FMessageModal>
  `}),"Template"),c=i.bind({});c.args={title:"Title",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",confirm:{props:{color:"error"},text:"confirm"}};const p=i.bind({});p.args={title:"Custom Action",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",actions:t(r,{color:"error",block:!0},"Action")};const m=i.bind({});m.args={title:t("div",{style:{fontWight:600,textAlign:"left"}},"VNode Title"),text:t("div",{class:"text-warning"},[t("span","Text 1"),t("span","Text 2")]),actions:t(r,{block:!0,color:"primary"},"Action")};const U=["Default","CustomAction","CustomeRender"];export{p as CustomAction,m as CustomeRender,c as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=FMessageModal.stories.638be827.js.map
