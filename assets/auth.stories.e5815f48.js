var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{P as r}from"./vue.esm-bundler.06cbf4f3.js";import"./FAuthMethodModal.899b4f90.js";import"./mixin.87a49014.js";import"./FModal.af77241e.js";import"./FButton.042bb067.js";import"./VBtn.a6fb96e2.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./border.386c98bf.js";import"./density.4e133a57.js";import"./elevation.906ca0d0.js";import"./rounded.ae3fe3ca.js";import"./VIcon.4e22765d.js";import"./color.9c80aa54.js";import"./variant.e4970577.js";import"./index.0e1c0398.js";import"./dimensions.f30e25d4.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./locale.7c7f5def.js";import"./anchor.4d34e672.js";import"./position.f250096a.js";import"./router.26e45b89.js";import"./VProgressCircular.32071c16.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.99ed030c.js";import"./easing.36b781ab.js";import"./transition.60048a78.js";import"./display.f0408c25.js";import"./createSimpleFunctional.917a427b.js";import"./VAvatar.d0341de2.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./base64.a2866935.js";import"./iframe.58795953.js";import"./FQRCode.8702dc6f.js";import"./qrious.11100b76.js";function i(){return r().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const V={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.e5815f48.js.map
