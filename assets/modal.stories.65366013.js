var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as i,h as m}from"./vue.esm-bundler.b09b7c5a.js";import{F as p}from"./FButton.fd5dc93c.js";import"./FMessageModal.f09d7b3d.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VIcon.81f7ecc0.js";import"./color.1fec8f8e.js";import"./variant.eababd72.js";import"./proxiedModel.f0d8de9f.js";import"./index.eca3ba9a.js";import"./dimensions.b549aab6.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./FModal.edcf514e.js";import"./VDialog.f3d85c11.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.4718cec8.js";import"./easing.36b781ab.js";import"./transition.1a560eae.js";import"./display.fd968d5a.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VAvatar.84448bc0.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./FRender.845cf91e.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const V={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.65366013.js.map
