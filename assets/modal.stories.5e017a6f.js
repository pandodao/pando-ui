var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{P as i,h as m}from"./vue.esm-bundler.1ba604f9.js";import{F as p}from"./FButton.da03e124.js";import"./FMessageModal.951934f4.js";import"./VBtn.156ed533.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./border.c2063388.js";import"./density.8ac56fa2.js";import"./elevation.7428fb70.js";import"./rounded.cb32523b.js";import"./VIcon.518cdeb6.js";import"./color.b891a321.js";import"./variant.22bbbe86.js";import"./index.27517d48.js";import"./dimensions.721a2e0b.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./locale.fb27b96c.js";import"./anchor.1637b665.js";import"./position.747eb4b6.js";import"./router.ba883828.js";import"./VProgressCircular.6a9473f8.js";import"./FModal.3e0c2496.js";import"./VDialog.0f487f73.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.16609424.js";import"./easing.36b781ab.js";import"./transition.ef0cc300.js";import"./display.de7ed398.js";import"./createSimpleFunctional.b271bf7a.js";import"./VAvatar.d7e1c088.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./FRender.1014c972.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.5e017a6f.js.map
