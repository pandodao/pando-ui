var s=Object.defineProperty;var n=(e,o)=>s(e,"name",{value:o,configurable:!0});import{F as a}from"./FMessageModal.ba05115d.js";import{F as r}from"./FButton.5e8d1e13.js";import{h as t,r as l}from"./vue.esm-bundler.80cafc0b.js";import"./FModal.ac7dde43.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./VDefaultsProvider.522cf1e0.js";import"./createSimpleFunctional.19425ddc.js";import"./density.e2c1329b.js";import"./VIcon.ac9f05d6.js";import"./VAvatar.7760fc0a.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./FRender.b6fcf350.js";import"./VBtn.ce544012.js";import"./VProgressCircular.fec55325.js";const U={parameters:{storySource:{source:`import { FMessageModal } from "./FMessageModal";
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
//# sourceMappingURL=FMessageModal.stories.4b5885a0.js.map
