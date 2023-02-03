var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{P as i,h as m}from"./vue.esm-bundler.330b8bcd.js";import{F as p}from"./FButton.d034f6f2.js";import"./FMessageModal.c11ba688.js";import"./VBtn.e55e9e37.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./border.8a30a617.js";import"./density.38f0f124.js";import"./elevation.b2f27a68.js";import"./rounded.257cff90.js";import"./VIcon.c758310f.js";import"./color.66c7a00f.js";import"./variant.b259332f.js";import"./index.b967f916.js";import"./dimensions.6590eaa4.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./locale.0eda84ca.js";import"./anchor.7cdf4a4d.js";import"./position.03fcbfb6.js";import"./router.a6c113d7.js";import"./VProgressCircular.27e195cb.js";import"./FModal.6bf61d27.js";import"./VDialog.a4bfe643.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.d681ab18.js";import"./easing.36b781ab.js";import"./transition.d91c432b.js";import"./display.b3319b10.js";import"./createSimpleFunctional.05bfccd4.js";import"./VAvatar.f79052e0.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./FRender.ed5024ee.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.d22d8a29.js.map
