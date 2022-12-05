var i=Object.defineProperty;var t=(n,o)=>i(n,"name",{value:o,configurable:!0});import{F as e,u as l}from"./modal.04d63e88.js";import{F as s}from"./FButton.c94e3704.js";import{d as c}from"./vue.esm-bundler.0d7c29ee.js";import"./FModal.1ffcee23.js";import"./createSimpleFunctional.e0d25bf4.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VIcon.27b7c9a9.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./variant.f85b9fa5.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./dimensions.512da313.js";import"./index.9418ce7a.js";import"./loader.dd2f3ca6.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./elevation.b2f78cc5.js";import"./VBtn.aebc80dd.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./forwardRefs.c5465513.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";const P={parameters:{storySource:{source:`import { FMessageModal } from "./FMessageModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";

import { useModal } from "../../plugins/modal";

export default {
  name: "FMessageModal",
  component: { FMessageModal },
} as Meta<typeof FMessageModal>;

const Template: StoryFn<typeof FMessageModal> = (args) => ({
  components: { FMessageModal, FButton },
  setup() {
    const modal = ref(null);

    const open = () => {
      modal.value.show()
    }

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

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  title: "Warning",
  text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
  confirm: {
    props: { color: "error" },
    text: "confirm",
  },
};

const Template2: StoryFn<typeof FMessageModal> = (args) => ({
  setup() {
    const modal = useModal();

    const open = () => {
      modal.show({
        type: "warning",
        title: "Warning",
        text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
        confirm: {
          props: { color: "error" },
          text: "confirm",
        },
        ...args,
      });
    };

    return { open, args };
  },

  template: \`
    <FButton color="primary" @click="open">Open</FButton>
  \`,
});

export const Functional = Template2.bind({});
Functional.args = {};`,locationsMap:{default:{startLoc:{col:48,line:13},endLoc:{col:2,line:29},startBody:{col:48,line:13},endBody:{col:2,line:29}},warning:{startLoc:{col:48,line:13},endLoc:{col:2,line:29},startBody:{col:48,line:13},endBody:{col:2,line:29}},functional:{startLoc:{col:49,line:52},endLoc:{col:2,line:75},startBody:{col:49,line:52},endBody:{col:2,line:75}}}}},name:"FMessageModal",component:{FMessageModal:e}},r=t(n=>({components:{FMessageModal:e,FButton:s},setup(){const o=c(null);return{args:n,modal:o,open:t(()=>{o.value.show()},"open")}},template:`
    <FButton color="primary" @click="open">Open</FButton>

    <FMessageModal ref="modal" v-bind="args"></FMessageModal>
  `}),"Template"),p=r.bind({});p.args={title:"Title",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",confirm:{props:{color:"error"},text:"confirm"}};const m=r.bind({});m.args={type:"warning",title:"Warning",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",confirm:{props:{color:"error"},text:"confirm"}};const d=t(n=>({setup(){const o=l();return{open:t(()=>{o.show({type:"warning",title:"Warning",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",confirm:{props:{color:"error"},text:"confirm"},...n})},"open"),args:n}},template:`
    <FButton color="primary" @click="open">Open</FButton>
  `}),"Template2"),u=d.bind({});u.args={};const Q=["Default","Warning","Functional"];export{p as Default,u as Functional,m as Warning,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=FMessageModal.stories.d08474d6.js.map
