var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{N as e}from"./vue.esm-bundler.3b29098a.js";import"./FAuthMethodModal.d6dc2654.js";import"./mixin.87a49014.js";import"./FModal.4db458cf.js";import"./FButton.72dd92af.js";import"./VBtn.7f6a0830.js";import"./border.d0444c35.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./density.6dd2b9c7.js";import"./elevation.154beddf.js";import"./rounded.375414e4.js";import"./VIcon.c254d683.js";import"./color.fef4ce02.js";import"./variant.be65e42d.js";import"./proxiedModel.67252d17.js";import"./index.09e65b91.js";import"./dimensions.c2f0e23c.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./locale.eccdb440.js";import"./anchor.c52c8661.js";import"./intersectionObserver.b06f0fb9.js";import"./position.6cc3b816.js";import"./router.6cb3b155.js";import"./VProgressCircular.c527f932.js";import"./VDialog.8fdf9bea.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.e2cb60a6.js";import"./easing.36b781ab.js";import"./transition.94342caf.js";import"./display.f5b0b65d.js";import"./createSimpleFunctional.b1ebbe28.js";import"./VAvatar.ab09abd9.js";import"./VImg.78cc729b.js";import"./index.1414bb4a.js";import"./helpers.96e9126c.js";import"./base64.98bbeec5.js";import"./iframe.8d555d06.js";import"./FQRCode.a40260db.js";import"./qrious.3f8f55df.js";function i(){return e().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
  `}),"Template"),m=p.bind({});m.args={};const Y=["Default"];export{m as Default,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=auth.stories.74f3f90c.js.map
