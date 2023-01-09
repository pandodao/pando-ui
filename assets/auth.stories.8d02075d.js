var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{C as r}from"./vue.esm-bundler.a5c4e1bf.js";import"./FAuthMethodModal.f6f89f95.js";import"./mixin.87a49014.js";import"./FModal.4fd09b84.js";import"./FButton.f3fc7c21.js";import"./VBtn.b5444450.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./border.0d2c7ad0.js";import"./density.b3e2de9a.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./VIcon.5ca83e1b.js";import"./color.43314d1d.js";import"./variant.b9606795.js";import"./index.1b40d9d7.js";import"./dimensions.b6fbc401.js";import"./loader.7d1fab10.js";import"./locale.76e208ea.js";import"./position.d49ff30e.js";import"./anchor.e4a88562.js";import"./router.3d9f142b.js";import"./VProgressCircular.ad6cc829.js";import"./VDialog.8e3a7441.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./easing.36b781ab.js";import"./transition.c93b8895.js";import"./createSimpleFunctional.f00f4b71.js";import"./VAvatar.da185431.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./display.1bd9c9dd.js";import"./base64.92b13f23.js";import"./iframe.44f7c4d0.js";import"./FQRCode.8f456d01.js";import"./qrious.20baccc9.js";function i(){return r().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const V={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
import { useAuth } from "./auth";

export default {
  title: "Plugin/Auth",
};

const Template: StoryFn = (args) => ({
  setup() {
    const auth = useAuth();
    const open = () => {
      auth.show({
        authMethods: ["fennec", "mixin", "metamask", "walletconnect", "onekey"],
        scope: "PROFILE:READ",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
      });
    };

    return { open };
  },
  template: \`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:26,line:8},endLoc:{col:2,line:24},startBody:{col:26,line:8},endBody:{col:2,line:24}}}}},title:"Plugin/Auth"},p=t(o=>({setup(){const n=i();return{open:t(()=>{n.show({authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2"})},"open")}},template:`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `}),"Template"),m=p.bind({});m.args={};const W=["Default"];export{m as Default,W as __namedExportsOrder,V as default};
//# sourceMappingURL=auth.stories.8d02075d.js.map
