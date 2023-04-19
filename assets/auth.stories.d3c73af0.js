var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{N as e}from"./vue.esm-bundler.b09b7c5a.js";import"./FAuthMethodModal.4a24f7f1.js";import"./mixin.87a49014.js";import"./FModal.edcf514e.js";import"./FButton.fd5dc93c.js";import"./VBtn.7a77eb8b.js";import"./border.6d45fe61.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./density.43b8d8b2.js";import"./elevation.844f69c6.js";import"./rounded.ccd03645.js";import"./VIcon.81f7ecc0.js";import"./color.1fec8f8e.js";import"./variant.eababd72.js";import"./proxiedModel.f0d8de9f.js";import"./index.eca3ba9a.js";import"./dimensions.b549aab6.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./locale.0dcd1420.js";import"./anchor.b337e11f.js";import"./intersectionObserver.8499cdfb.js";import"./position.6b49aae6.js";import"./router.524cabd1.js";import"./VProgressCircular.8c9797f0.js";import"./VDialog.f3d85c11.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.4718cec8.js";import"./easing.36b781ab.js";import"./transition.1a560eae.js";import"./display.fd968d5a.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VAvatar.84448bc0.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./helpers.c6c91249.js";import"./base64.b2cf9844.js";import"./iframe.8206567b.js";import"./FQRCode.0ac85531.js";import"./qrious.d38499e5.js";function i(){return e().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.d3c73af0.js.map
