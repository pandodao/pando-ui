var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{G as i,h as m}from"./vue.esm-bundler.80cafc0b.js";import{F as p}from"./FButton.5e8d1e13.js";import"./FMessageModal.ba05115d.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./FModal.ac7dde43.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./easing.da2e9236.js";import"./display.1ed39e23.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./createSimpleFunctional.19425ddc.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./FRender.b6fcf350.js";function a(){return i().appContext.config.globalProperties.$uikit.modal}t(a,"useModal");const U={parameters:{storySource:{source:`import { h } from "vue";
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
//# sourceMappingURL=modal.stories.ca752ab3.js.map
