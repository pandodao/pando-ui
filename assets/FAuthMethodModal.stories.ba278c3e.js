var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.0a584c9d.js";import{F as i}from"./FButton.fd5dc93c.js";import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import{u as d}from"./toast.ca99ceb1.js";import"./mixin.87a49014.js";import"./FModal.edcf514e.js";import"./VDialog.f3d85c11.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.f0d8de9f.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./color.1fec8f8e.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./display.fd968d5a.js";import"./locale.0dcd1420.js";import"./variant.eababd72.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./VAvatar.84448bc0.js";import"./rounded.ccd03645.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./index.eca3ba9a.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./intersectionObserver.8499cdfb.js";import"./border.6d45fe61.js";import"./elevation.844f69c6.js";import"./position.6b49aae6.js";import"./helpers.c6c91249.js";import"./base64.4a4ed42a.js";import"./iframe.40e0ff7a.js";import"./FQRCode.af862eb6.js";import"./qrious.af770f26.js";import"./VProgressCircular.8c9797f0.js";import"./VBtn.7a77eb8b.js";import"./FToast.5b91172b.js";import"./VSnackbar.8d99b52c.js";import"./VDivider.a6c176d7.js";const it={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
`,locationsMap:{default:{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},"install-state":{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},pkce:{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}}}}},title:"Components/FAuthMethodModal",component:{FAuthMethodModal:l}},r=o(n=>({components:{FAuthMethodModal:l,FButton:i},setup(){const e=p(),s=d();return{args:n,open:o(()=>{e.value.show()},"open"),authModal:e,handleAuth:o(t=>{s.success({message:JSON.stringify(t)})},"handleAuth"),handleError:o(t=>{s.error({message:t==null?void 0:t.message})},"handleError")}},template:`
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" @auth="handleAuth" @error="handleError" />
  `}),"Template"),a=r.bind({});a.args={authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2"};const u=r.bind({});u.args={...a.args,authMethodState:{fennec:!0,metamask:!0,onekey:!0}};const c=r.bind({});c.args={...a.args,pkce:!0};const pt=["Default","InstallState","PKCE"];export{a as Default,u as InstallState,c as PKCE,pt as __namedExportsOrder,it as default};
//# sourceMappingURL=FAuthMethodModal.stories.ba278c3e.js.map
