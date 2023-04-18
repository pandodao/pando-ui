var r=Object.defineProperty;var t=(o,n)=>r(o,"name",{value:n,configurable:!0});import{N as e}from"./vue.esm-bundler.9500adb2.js";import"./FAuthMethodModal.47f2a50b.js";import"./mixin.87a49014.js";import"./FModal.7ce358cf.js";import"./FButton.d61383cc.js";import"./VBtn.b26bd4ae.js";import"./border.eebb6db1.js";import"./useRender.44945942.js";import"./helpers.681e1792.js";import"./density.0c8fab1e.js";import"./elevation.d906eb56.js";import"./rounded.d16b72e9.js";import"./VIcon.b10ecbaa.js";import"./color.45246ddd.js";import"./variant.95637a5a.js";import"./proxiedModel.881d858e.js";import"./index.1967ded9.js";import"./dimensions.5f5b1dd8.js";import"./loader.4d40f77d.js";import"./location.c535e823.js";import"./locale.7efc9def.js";import"./anchor.1afb8064.js";import"./intersectionObserver.10253e57.js";import"./position.427d9f74.js";import"./router.6e1740fe.js";import"./VProgressCircular.8b82923d.js";import"./VDialog.38dab5f5.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.96b5c4e3.js";import"./easing.36b781ab.js";import"./transition.10caf698.js";import"./display.9827c8ac.js";import"./createSimpleFunctional.0b08b174.js";import"./VAvatar.9487a2f3.js";import"./VImg.6757be35.js";import"./index.91748bc9.js";import"./helpers.96e9126c.js";import"./base64.7ab69042.js";import"./iframe.a0f2adfa.js";import"./FQRCode.58288551.js";import"./qrious.a3727dde.js";function i(){return e().appContext.config.globalProperties.$uikit.auth}t(i,"useAuth");const X={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
//# sourceMappingURL=auth.stories.a44f92f5.js.map
