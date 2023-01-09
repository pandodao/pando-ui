var i=Object.defineProperty;var t=(e,o)=>i(e,"name",{value:o,configurable:!0});import{F as l}from"./FAuthMethodModal.f6f89f95.js";import{F as m}from"./FButton.f3fc7c21.js";import{r as p}from"./vue.esm-bundler.a5c4e1bf.js";import{u as d}from"./toast.d9382d0f.js";import"./mixin.87a49014.js";import"./FModal.4fd09b84.js";import"./VDialog.8e3a7441.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./anchor.e4a88562.js";import"./color.43314d1d.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./locale.76e208ea.js";import"./variant.b9606795.js";import"./createSimpleFunctional.f00f4b71.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./VAvatar.da185431.js";import"./rounded.a0c73c18.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./position.d49ff30e.js";import"./display.1bd9c9dd.js";import"./base64.92b13f23.js";import"./iframe.44f7c4d0.js";import"./FQRCode.8f456d01.js";import"./qrious.20baccc9.js";import"./VProgressCircular.ad6cc829.js";import"./VBtn.b5444450.js";import"./FToast.f9ed9694.js";import"./VSnackbar.40a0d4da.js";import"./VDivider.c33525c0.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
      toast.error({ message: JSON.stringify(error) });
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
`,locationsMap:{default:{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},"install-state":{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}},pkce:{startLoc:{col:51,line:12},endLoc:{col:2,line:37},startBody:{col:51,line:12},endBody:{col:2,line:37}}}}},title:"Components/FAuthMethodModal",component:{FAuthMethodModal:l}},r=t(e=>({components:{FAuthMethodModal:l,FButton:m},setup(){const o=p(),s=d();return{args:e,open:t(()=>{o.value.show()},"open"),authModal:o,handleAuth:t(n=>{s.success({message:JSON.stringify(n)})},"handleAuth"),handleError:t(n=>{s.error({message:JSON.stringify(n)})},"handleError")}},template:`
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" @auth="handleAuth" @error="handleError" />
  `}),"Template"),a=r.bind({});a.args={authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2"};const u=r.bind({});u.args={...a.args,authMethodState:{fennec:!0,metamask:!0,onekey:!0}};const c=r.bind({});c.args={...a.args,pkce:!0};const it=["Default","InstallState","PKCE"];export{a as Default,u as InstallState,c as PKCE,it as __namedExportsOrder,lt as default};
//# sourceMappingURL=FAuthMethodModal.stories.0f3ba844.js.map
