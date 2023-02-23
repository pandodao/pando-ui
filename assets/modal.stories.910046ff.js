var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as i,h as m}from"./vue.esm-bundler.57aa1454.js";import{F as p}from"./FButton.95509114.js";import"./FMessageModal.fd1af085.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./FModal.b075f7f6.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.2998aec7.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./display.8ac49ecd.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VAvatar.01c8c686.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./FRender.6fea16d5.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.910046ff.js.map
