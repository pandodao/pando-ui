var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as r}from"./vue.esm-bundler.62cdaeff.js";import"./FAuthMethodModal.8be965d9.js";import"./mixin.87a49014.js";import"./FModal.e70a199e.js";import"./FButton.7a11c708.js";import"./VBtn.2cacbcac.js";import"./border.744ce806.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./density.a1d89e9f.js";import"./elevation.79ced88b.js";import"./rounded.9945cf4e.js";import"./VIcon.ddcbca9b.js";import"./color.5ac0909d.js";import"./variant.cb074882.js";import"./proxiedModel.c2b98033.js";import"./index.f175e2d9.js";import"./dimensions.c27e6138.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./locale.b4680344.js";import"./anchor.4b6c6135.js";import"./position.daea1c07.js";import"./router.19d79a04.js";import"./VProgressCircular.5a613386.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.49a3aceb.js";import"./easing.36b781ab.js";import"./transition.28d05801.js";import"./display.21f5d2fe.js";import"./createSimpleFunctional.f6324448.js";import"./VAvatar.8eec326e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./base64.c11e2199.js";import"./iframe.f8ff6e96.js";import"./FQRCode.70775a67.js";import"./qrious.a8332774.js";function i(){return r().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const V={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.1e7f1a0f.js.map
