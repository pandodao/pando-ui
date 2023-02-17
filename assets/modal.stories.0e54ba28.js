var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{P as i,h as m}from"./vue.esm-bundler.caa622c4.js";import{F as p}from"./FButton.b7201e41.js";import"./FMessageModal.57a598ee.js";import"./VBtn.abf41941.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./VIcon.f37f8177.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./FModal.a85ac45d.js";import"./VDialog.8fc91e8b.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.a16b5884.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./display.ef8c62e1.js";import"./createSimpleFunctional.2286a9cd.js";import"./VAvatar.91a1aacd.js";import"./VImg.cbbbed87.js";import"./index.fc60a169.js";import"./FRender.e5c2ec5f.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.0e54ba28.js.map
