var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{P as i,h as m}from"./vue.esm-bundler.06cbf4f3.js";import{F as p}from"./FButton.042bb067.js";import"./FMessageModal.fe343c92.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./FModal.af77241e.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.99ed030c.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./display.f0408c25.js";import"./createSimpleFunctional.917a427b.js";import"./VAvatar.d0341de2.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./FRender.1fb63581.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
import { StoryFn } from "@storybook/vue3";
import { FButton } from "../components/FButton";
import { useModal } from "./modal";

export default {
  title: "Plugin/Modal",
};

const Template: StoryFn = (args) => ({
  setup() {
    const modal = useModal();
    const open = () => {
      modal.show({
        title: "Title",
        text: "Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",
        confirm: {
          props: { color: "error" },
          text: "confirm",
        },
        ...args,
      });
    };

    return { open };
  },
  template: \`
    <FButton color="primary" @click="open">Show Message Modal</FButton>
  \`,
});

export const Default = Template.bind({});
Default.args = {};

export const CustomAction = Template.bind({});
CustomAction.args = {
  actions: h(FButton, { block: true, color: "primary" }, ["Custom Action"]),
};
`,locationsMap:{default:{startLoc:{col:26,line:10},endLoc:{col:2,line:30},startBody:{col:26,line:10},endBody:{col:2,line:30}},"custom-action":{startLoc:{col:26,line:10},endLoc:{col:2,line:30},startBody:{col:26,line:10},endBody:{col:2,line:30}}}}},title:"Plugin/Modal"},r=t(o=>({setup(){const n=a();return{open:t(()=>{n.show({title:"Title",text:"Once the transaction is executed, it is irrevocable, please pay after confirmation carefully",confirm:{props:{color:"error"},text:"confirm"},...o})},"open")}},template:`
    <FButton color="primary" @click="open">Show Message Modal</FButton>
  `}),"Template"),c=r.bind({});c.args={};const l=r.bind({});l.args={actions:m(p,{block:!0,color:"primary"},["Custom Action"])};const V=["Default","CustomAction"];export{l as CustomAction,c as Default,V as __namedExportsOrder,U as default};
//# sourceMappingURL=modal.stories.5bbdd69d.js.map
