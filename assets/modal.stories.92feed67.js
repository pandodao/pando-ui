var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as i,h as m}from"./vue.esm-bundler.62cdaeff.js";import{F as p}from"./FButton.7a11c708.js";import"./FMessageModal.2619c773.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./VIcon.ddcbca9b.js";import"./color.5ac0909d.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./FModal.e70a199e.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.49a3aceb.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./display.21f5d2fe.js";import"./createSimpleFunctional.f6324448.js";import"./VAvatar.8eec326e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./FRender.3040b79d.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.92feed67.js.map
