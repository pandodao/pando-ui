var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as i,h as m}from"./vue.esm-bundler.9500adb2.js";import{F as p}from"./FButton.d61383cc.js";import"./FMessageModal.bda497fa.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./FModal.7ce358cf.js";import"./VDialog.38dab5f5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.96b5c4e3.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./display.9827c8ac.js";import"./createSimpleFunctional.0b08b174.js";import"./VAvatar.9487a2f3.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./FRender.72bf5493.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const V={parameters:{storySource:{source:`import { h } from "vue";
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
  `}),"Template"),c=r.bind({});c.args={};const l=r.bind({});l.args={actions:m(p,{block:!0,color:"primary"},["Custom Action"])};const W=["Default","CustomAction"];export{l as CustomAction,c as Default,W as __namedExportsOrder,V as default};
//# sourceMappingURL=modal.stories.04d63fe4.js.map
