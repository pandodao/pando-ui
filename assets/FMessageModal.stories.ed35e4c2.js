var s=Object.defineProperty;var n=(e,o)=>s(e,"name",{value:o,configurable:!0});import{F as a}from"./FMessageModal.3d5c71b1.js";import{F as r}from"./FButton.f3fc7c21.js";import{h as t,r as l}from"./vue.esm-bundler.a5c4e1bf.js";import"./FModal.4fd09b84.js";import"./VDialog.8e3a7441.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./anchor.e4a88562.js";import"./color.43314d1d.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./locale.76e208ea.js";import"./variant.b9606795.js";import"./createSimpleFunctional.f00f4b71.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./VAvatar.da185431.js";import"./rounded.a0c73c18.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./position.d49ff30e.js";import"./display.1bd9c9dd.js";import"./FRender.a85647fa.js";import"./VBtn.b5444450.js";import"./VProgressCircular.ad6cc829.js";const U={parameters:{storySource:{source:`import { FMessageModal } from "./FMessageModal";
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
  `}),"Template"),c=i.bind({});c.args={title:"Title",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",confirm:{props:{color:"error"},text:"confirm"}};const p=i.bind({});p.args={title:"Custom Action",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",actions:t(r,{color:"error",block:!0},"Action")};const m=i.bind({});m.args={title:t("div",{style:{fontWight:600,textAlign:"left"}},"VNode Title"),text:t("div",{class:"text-warning"},[t("span","Text 1"),t("span","Text 2")]),actions:t(r,{block:!0,color:"primary"},"Action")};const X=["Default","CustomAction","CustomeRender"];export{p as CustomAction,m as CustomeRender,c as Default,X as __namedExportsOrder,U as default};
//# sourceMappingURL=FMessageModal.stories.ed35e4c2.js.map
