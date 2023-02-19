var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{P as r}from"./vue.esm-bundler.caa622c4.js";import"./FAuthMethodModal.40b085da.js";import"./mixin.87a49014.js";import"./FModal.a85ac45d.js";import"./FButton.b7201e41.js";import"./VBtn.abf41941.js";import"./proxiedModel.073d34a6.js";import"./useRender.15f4f58d.js";import"./helpers.83369341.js";import"./border.ae4ccc68.js";import"./density.c07a8c02.js";import"./elevation.3fce6244.js";import"./rounded.bd8ad820.js";import"./VIcon.f37f8177.js";import"./color.795eceb6.js";import"./variant.6a05f8d1.js";import"./index.4e4a2aa3.js";import"./dimensions.1a78e179.js";import"./loader.535d849b.js";import"./location.375c93f3.js";import"./locale.312c25a1.js";import"./anchor.57ff9838.js";import"./position.6630ce12.js";import"./router.f4dceb95.js";import"./VProgressCircular.9b7ebd22.js";import"./VDialog.8fc91e8b.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.a16b5884.js";import"./easing.36b781ab.js";import"./transition.712d10eb.js";import"./display.ef8c62e1.js";import"./createSimpleFunctional.2286a9cd.js";import"./VAvatar.91a1aacd.js";import"./VImg.cbbbed87.js";import"./index.fc60a169.js";import"./base64.7073daa1.js";import"./iframe.1d791503.js";import"./FQRCode.90b599ea.js";import"./qrious.3bdcbbc9.js";function i(){return r().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const V={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.8824c26b.js.map
