var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as r}from"./vue.esm-bundler.b09b7c5a.js";import"./FAuthMethodModal.1d76ec4f.js";import"./mixin.87a49014.js";import"./FModal.e93f30c8.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VDialog.ac2f44e1.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.7cd76152.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./createSimpleFunctional.6499d319.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./helpers.c6c91249.js";import"./base64.a7785f35.js";import"./iframe.ee10f62a.js";import"./FQRCode.2745dbf7.js";import"./qrious.2aa17bfb.js";function i(){return r().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const V={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.e970ab0d.js.map
