var i=Object.defineProperty;var t=(n,o)=>i(n,"name",{value:o,configurable:!0});import{N as m}from"./vue.esm-bundler.b09b7c5a.js";import"./FAuthMethodModal.4b5aff30.js";import{u as a}from"./toast.fb53eb8f.js";import"./mixin.779267f9.js";import"./FModal.5405affb.js";import"./FButton.7621db81.js";import"./VBtn.7921a3d1.js";import"./border.6019dc9f.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./density.6083b2d4.js";import"./elevation.12d4edaf.js";import"./rounded.28975b1c.js";import"./VIcon.bd07cc2b.js";import"./variant.fbd007cc.js";import"./proxiedModel.28fe5444.js";import"./index.eca3ba9a.js";import"./router.b8d53e34.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./locale.88650f04.js";import"./anchor.b337e11f.js";import"./intersectionObserver.1e3a532e.js";import"./position.faf59b49.js";import"./VProgressCircular.7bee339a.js";import"./VDialog.ac2f44e1.js";import"./forwardRefs.c003b6b8.js";import"./VOverlay.7cd76152.js";import"./easing.36b781ab.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./createSimpleFunctional.6499d319.js";import"./VAvatar.95d7d85f.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./helpers.c6c91249.js";import"./base64.5ed57865.js";import"./iframe.cfadc77c.js";import"./FQRCode.62606249.js";import"./qrious.2ea5d61f.js";import"./FToast.3c9c610a.js";import"./VSnackbar.9a9fe2a4.js";import"./VDivider.810676cd.js";function s(){return m().appContext.config.globalProperties.$uikit.auth}t(s,"useAuth");const rt={parameters:{storySource:{source:`import { StoryFn } from "@storybook/vue3";
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
`,locationsMap:{default:{startLoc:{col:26,line:9},endLoc:{col:2,line:29},startBody:{col:26,line:9},endBody:{col:2,line:29}},"ed-25519":{startLoc:{col:27,line:34},endLoc:{col:2,line:59},startBody:{col:27,line:34},endBody:{col:2,line:59}}}}},title:"Plugin/Auth"},u=t(n=>({setup(){const o=a(),e=s();return{open:t(()=>{e.show({authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",handleAuth:r=>{o.show({message:JSON.stringify(r)})}})},"open")}},template:`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `}),"Template"),c=u.bind({});c.args={};const l=t(n=>({setup(){const o=a(),e=s();return{open:t(()=>{e.show({authMethods:["mixin"],scope:"PROFILE:READ",pkce:!0,useEd25519KeyStore:!0,privateKey:"7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",publicKey:"maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",handleAuth:r=>{o.show({message:JSON.stringify(r)})}})},"open")}},template:`
    <FButton color="primary" @click="open">Show Auth Modal</FButton>
  `}),"Template2"),h=l.bind({});h.args={};const at=["Default","Ed25519"];export{c as Default,h as Ed25519,at as __namedExportsOrder,rt as default};
//# sourceMappingURL=auth.stories.e54072f9.js.map
