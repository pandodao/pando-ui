var i=Object.defineProperty;var t=(n,o)=>i(n,"name",{value:o,configurable:!0});import{G as m}from"./vue.esm-bundler.80cafc0b.js";import"./FAuthMethodModal.f79a2ac6.js";import{u as a}from"./toast.7664692e.js";import"./mixin.779267f9.js";import"./FModal.ac7dde43.js";import"./FButton.5e8d1e13.js";import"./VBtn.ce544012.js";import"./border.b14058ef.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./density.e2c1329b.js";import"./elevation.8d0c61c6.js";import"./rounded.b42653ce.js";import"./VIcon.ac9f05d6.js";import"./variant.1e842247.js";import"./proxiedModel.dbd4de1d.js";import"./router.9241c2dd.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./locale.68d0262d.js";import"./anchor.5ba72fdd.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./VDefaultsProvider.522cf1e0.js";import"./VProgressCircular.fec55325.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./easing.da2e9236.js";import"./display.1ed39e23.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./createSimpleFunctional.19425ddc.js";import"./VAvatar.7760fc0a.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./helpers.c6c91249.js";import"./base64.cdc5cb9c.js";import"./iframe.b9577b0c.js";import"./FQRCode.76df491d.js";import"./qrious.5b00c41b.js";import"./FToast.ba94b24b.js";import"./VSnackbar.285c8d85.js";import"./VDivider.7c8b3fdb.js";function p(){return m().appContext.config.globalProperties.$uikit.auth}t(p,"useAuth");const at={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
import { useAuth } from "./auth";
import { useToast } from "./toast";

export default {
  title: "Plugin/Auth",
};

const Template: StoryFn = (args) => ({
  setup() {
    const toast = useToast();
    const auth = useAuth();
    const open = () => {
      auth.show({
        authMethods: ["fennec", "mixin", "metamask", "walletconnect", "onekey"],
        scope: "PROFILE:READ",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
        handleAuth: (data) => {
          toast.show({ message: JSON.stringify(data) });
        },
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

const Template2: StoryFn = (args) => ({
  setup() {
    const toast = useToast();
    const auth = useAuth();
    const open = () => {
      auth.show({
        authMethods: ["mixin"],
        scope: "PROFILE:READ",
        pkce: true,
        useEd25519KeyStore: true,
        privateKey:
          "7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",
        publicKey: "maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
        handleAuth: (data) => {
          toast.show({ message: JSON.stringify(data) });
        },
      });
    };

    return { open };
  },
  template: \`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  \`,
});

export const Ed25519 = Template2.bind({});
Ed25519.args = {};
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:29},startBody:{col:26,line:9},endBody:{col:2,line:29}},"ed-25519":{startLoc:{col:27,line:34},endLoc:{col:2,line:59},startBody:{col:27,line:34},endBody:{col:2,line:59}}}}},title:"Plugin/Auth"},u=t(n=>({setup(){const o=a(),e=p();return{open:t(()=>{e.show({authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",handleAuth:r=>{o.show({message:JSON.stringify(r)})}})},"open")}},template:`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `}),"Template"),c=u.bind({});c.args={};const l=t(n=>({setup(){const o=a(),e=p();return{open:t(()=>{e.show({authMethods:["mixin"],scope:"PROFILE:READ",pkce:!0,useEd25519KeyStore:!0,privateKey:"7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",publicKey:"maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",handleAuth:r=>{o.show({message:JSON.stringify(r)})}})},"open")}},template:`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `}),"Template2"),h=l.bind({});h.args={};const pt=["Default","Ed25519"];export{c as Default,h as Ed25519,pt as __namedExportsOrder,at as default};
//# sourceMappingURL=auth.stories.f88705e6.js.map
