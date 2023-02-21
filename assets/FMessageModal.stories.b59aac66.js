var s=Object.defineProperty;var n=(e,o)=>s(e,"name",{value:o,configurable:!0});import{F as a}from"./FMessageModal.ede69085.js";import{F as r}from"./FButton.7fb5afc5.js";import{h as t,r as l}from"./vue.esm-bundler.60beb779.js";import"./FModal.e9ae3117.js";import"./VDialog.74ee3f5c.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.c4bc26c4.js";import"./useRender.06ad421e.js";import"./helpers.f4a4e1c6.js";import"./VOverlay.6564e1f3.js";import"./dimensions.71f8bcb1.js";import"./easing.36b781ab.js";import"./anchor.46190ad2.js";import"./color.7f161142.js";import"./transition.d5d90e7e.js";import"./router.9cc51735.js";import"./display.49866675.js";import"./locale.656e3084.js";import"./variant.f60f637f.js";import"./createSimpleFunctional.057254cd.js";import"./VIcon.ccd22ecd.js";import"./density.3ab93966.js";import"./VAvatar.709f16cb.js";import"./rounded.08843391.js";import"./VImg.79a3bf78.js";import"./index.41c719a2.js";import"./index.d3586bd0.js";import"./loader.3ab44f13.js";import"./location.3f71a5c2.js";import"./border.84bdbe82.js";import"./elevation.6146b715.js";import"./position.31a6f1c1.js";import"./FRender.edb2e7ed.js";import"./VBtn.76288723.js";import"./VProgressCircular.1a876490.js";const U={parameters:{storySource:{source:`import { FMessageModal } from "./FMessageModal";
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
//# sourceMappingURL=FMessageModal.stories.b59aac66.js.map
