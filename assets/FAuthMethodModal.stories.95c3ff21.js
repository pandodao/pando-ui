var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.67682bc4.js";import{F as i}from"./FButton.7621db81.js";import{r as p}from"./vue.esm-bundler.b09b7c5a.js";import{u as d}from"./toast.fb53eb8f.js";import"./mixin.f972a917.js";import"./FModal.cc1ac870.js";import"./VDialog.ac2f44e1.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./locale.88650f04.js";import"./variant.fbd007cc.js";import"./createSimpleFunctional.6499d319.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./VAvatar.95d7d85f.js";import"./rounded.28975b1c.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./intersectionObserver.1e3a532e.js";import"./border.6019dc9f.js";import"./elevation.12d4edaf.js";import"./position.faf59b49.js";import"./helpers.c6c91249.js";import"./base64.9a27521e.js";import"./iframe.90d49179.js";import"./FQRCode.7ea3250f.js";import"./qrious.ed951bce.js";import"./VProgressCircular.7bee339a.js";import"./VBtn.7921a3d1.js";import"./FToast.3c9c610a.js";import"./VSnackbar.9a9fe2a4.js";import"./VDivider.810676cd.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
//# sourceMappingURL=FAuthMethodModal.stories.95c3ff21.js.map
