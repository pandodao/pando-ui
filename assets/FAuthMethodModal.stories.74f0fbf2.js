var p=Object.defineProperty;var o=(r,e)=>p(r,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.c2585347.js";import{F as i}from"./FButton.5e8d1e13.js";import{r as m}from"./vue.esm-bundler.80cafc0b.js";import{u as d}from"./toast.7664692e.js";import"./mixin.779267f9.js";import"./FModal.ac7dde43.js";import"./VCard.a6ed511f.js";import"./VOverlay.a7e28035.js";import"./proxiedModel.dbd4de1d.js";import"./color.7ba4ffe3.js";import"./helpers.32675158.js";import"./easing.da2e9236.js";import"./anchor.5ba72fdd.js";import"./router.9241c2dd.js";import"./display.1ed39e23.js";import"./locale.68d0262d.js";import"./transition.b6a16e6c.js";import"./forwardRefs.34034356.js";import"./VDefaultsProvider.522cf1e0.js";import"./createSimpleFunctional.19425ddc.js";import"./density.e2c1329b.js";import"./VIcon.ac9f05d6.js";import"./VAvatar.7760fc0a.js";import"./rounded.b42653ce.js";import"./variant.1e842247.js";import"./VImg.78b97665.js";import"./index.f2b6c1e4.js";import"./border.b14058ef.js";import"./elevation.8d0c61c6.js";import"./loader.5e66d0fd.js";import"./VProgressLinear.23574e13.js";import"./intersectionObserver.addd26f6.js";import"./position.19a0d7a5.js";import"./index.d4fa9fd4.js";import"./helpers.c6c91249.js";import"./base64.59bb57a4.js";import"./iframe.e1ac4337.js";import"./FQRCode.ac9dc89e.js";import"./qrious.9df11314.js";import"./VProgressCircular.fec55325.js";import"./VBtn.ce544012.js";import"./FToast.ba94b24b.js";import"./VSnackbar.285c8d85.js";import"./VDivider.7c8b3fdb.js";const it={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { useToast } from "../../plugins/toast";

export default {
  title: "Components/FAuthMethodModal",
  component: { FAuthMethodModal },
} as Meta<typeof FAuthMethodModal>;

const Template: StoryFn<typeof FAuthMethodModal> = (args) => ({
  components: { FAuthMethodModal, FButton },
  setup() {
    const authModal = ref();
    const toast = useToast();

    const open = () => {
      authModal.value.show();
    };

    const handleAuth = (data) => {
      toast.success({ message: JSON.stringify(data) });
    };

    const handleError = (error) => {
      toast.error({ message: error?.message });
    };

    return { args, open, authModal, handleAuth, handleError };
  },
  template: \`
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" @auth="handleAuth" @error="handleError" />
  \`,
});

export const Default = Template.bind({});
Default.args = {
  authMethods: ["fennec", "mixin", "metamask", "walletconnect", "onekey"],
  scope: "PROFILE:READ",
  clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
};

export const InstallState = Template.bind({});
InstallState.args = {
  ...Default.args,
  authMethodState: { fennec: true, metamask: true, onekey: true },
};

export const PKCE = Template.bind({});
PKCE.args = {
  ...Default.args,
  pkce: true,
};

export const Ed25519 = Template.bind({});
Ed25519.args = {
  authMethods: ["mixin"],
  clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
  scope: "PROFILE:READ",
  pkce: true,
  useEd25519KeyStore: true,
  privateKey:
    "7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",
  publicKey: "maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw",
};
`,locationsMap:{default:{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},"install-state":{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},pkce:{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},"ed-25519":{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}}}}},title:"Components/FAuthMethodModal",component:{FAuthMethodModal:l}},n=o(r=>({components:{FAuthMethodModal:l,FButton:i},setup(){const e=m(),s=d();return{args:r,open:o(()=>{e.value.show()},"open"),authModal:e,handleAuth:o(t=>{s.success({message:JSON.stringify(t)})},"handleAuth"),handleError:o(t=>{s.error({message:t==null?void 0:t.message})},"handleError")}},template:`
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" @auth="handleAuth" @error="handleError" />
  `}),"Template"),a=n.bind({});a.args={authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2"};const c=n.bind({});c.args={...a.args,authMethodState:{fennec:!0,metamask:!0,onekey:!0}};const u=n.bind({});u.args={...a.args,pkce:!0};const h=n.bind({});h.args={authMethods:["mixin"],clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",scope:"PROFILE:READ",pkce:!0,useEd25519KeyStore:!0,privateKey:"7nCu4fwxbTqYH5ymhEvincz8BbiMll8gnw6cSvfgp9OZo6pabLgeGhsTf3umWtj8jk-qSupIUsO4hulL6pVRTA",publicKey:"maOqWmy4HhobE397plrY_I5PqkrqSFLDuIbpS-qVUUw"};const mt=["Default","InstallState","PKCE","Ed25519"];export{a as Default,h as Ed25519,c as InstallState,u as PKCE,mt as __namedExportsOrder,it as default};
//# sourceMappingURL=FAuthMethodModal.stories.74f0fbf2.js.map
