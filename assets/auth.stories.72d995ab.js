var e=Object.defineProperty;var t=(o,n)=>e(o,"name",{value:n,configurable:!0});import{N as r}from"./vue.esm-bundler.57aa1454.js";import"./FAuthMethodModal.fd7e45e9.js";import"./mixin.87a49014.js";import"./FModal.b075f7f6.js";import"./FButton.95509114.js";import"./VBtn.ab71924f.js";import"./border.72c41e60.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./density.5fc65f23.js";import"./elevation.08bb2882.js";import"./rounded.638bf334.js";import"./VIcon.b7876f5b.js";import"./color.5e70182f.js";import"./variant.58edd759.js";import"./proxiedModel.aff93369.js";import"./index.17c04f25.js";import"./dimensions.2a6ee421.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./locale.ce33eacd.js";import"./anchor.8b678110.js";import"./position.6bb498a5.js";import"./router.359f3c68.js";import"./VProgressCircular.ce5720de.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.2998aec7.js";import"./easing.36b781ab.js";import"./transition.7787ec60.js";import"./display.8ac49ecd.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VAvatar.01c8c686.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./base64.655b2a46.js";import"./iframe.88348554.js";import"./FQRCode.fd493542.js";import"./qrious.3554cffb.js";function i(){return r().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const V={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.72d995ab.js.map
