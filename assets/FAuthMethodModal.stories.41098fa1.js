var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.899b4f90.js";import{F as i}from"./FButton.042bb067.js";import{r as p}from"./vue.esm-bundler.06cbf4f3.js";import{u as d}from"./toast.94d26868.js";import"./mixin.87a49014.js";import"./FModal.af77241e.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./anchor.4d34e672.js";import"./color.9c80aa54.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./locale.7c7f5def.js";import"./variant.e4970577.js";import"./createSimpleFunctional.917a427b.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./VAvatar.d0341de2.js";import"./rounded.ae3fe3ca.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./index.0e1c0398.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./border.386c98bf.js";import"./elevation.906ca0d0.js";import"./position.f250096a.js";import"./base64.a2866935.js";import"./iframe.58795953.js";import"./FQRCode.8702dc6f.js";import"./qrious.11100b76.js";import"./VProgressCircular.32071c16.js";import"./VBtn.a6fb96e2.js";import"./FToast.5a031a43.js";import"./VSnackbar.24cfd012.js";import"./VDivider.9ab6906e.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
  `}),"Template"),a=r.bind({});a.args={authMethods:["fennec","mixin","metamask","walletconnect","onekey"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2"};const u=r.bind({});u.args={...a.args,authMethodState:{fennec:!0,metamask:!0,onekey:!0}};const c=r.bind({});c.args={...a.args,pkce:!0};const mt=["Default","InstallState","PKCE"];export{a as Default,u as InstallState,c as PKCE,mt as __namedExportsOrder,lt as default};
//# sourceMappingURL=FAuthMethodModal.stories.41098fa1.js.map
