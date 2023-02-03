var s=Object.defineProperty;var n=(e,o)=>s(e,"name",{value:o,configurable:!0});import{F as a}from"./FMessageModal.c11ba688.js";import{F as r}from"./FButton.d034f6f2.js";import{h as t,r as l}from"./vue.esm-bundler.330b8bcd.js";import"./FModal.6bf61d27.js";import"./VDialog.a4bfe643.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./anchor.7cdf4a4d.js";import"./color.66c7a00f.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./locale.0eda84ca.js";import"./variant.b259332f.js";import"./createSimpleFunctional.05bfccd4.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./VAvatar.f79052e0.js";import"./rounded.257cff90.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./border.8a30a617.js";import"./elevation.b2f27a68.js";import"./position.03fcbfb6.js";import"./FRender.ed5024ee.js";import"./VBtn.e55e9e37.js";import"./VProgressCircular.27e195cb.js";const U={parameters:{storySource:{source:`import { FMessageModal } from "./FMessageModal";
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
//# sourceMappingURL=FMessageModal.stories.ddfb0d32.js.map
