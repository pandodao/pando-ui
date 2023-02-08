var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.5bef5292.js";import{F as i}from"./FButton.d034f6f2.js";import{r as p}from"./vue.esm-bundler.330b8bcd.js";import{u as d}from"./toast.4a0832c2.js";import"./mixin.87a49014.js";import"./FModal.6bf61d27.js";import"./VDialog.a4bfe643.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./anchor.7cdf4a4d.js";import"./color.66c7a00f.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./locale.0eda84ca.js";import"./variant.b259332f.js";import"./createSimpleFunctional.05bfccd4.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./VAvatar.f79052e0.js";import"./rounded.257cff90.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./border.8a30a617.js";import"./elevation.b2f27a68.js";import"./position.03fcbfb6.js";import"./base64.cefb9991.js";import"./iframe.5f1931ef.js";import"./FQRCode.d934ce5c.js";import"./qrious.bc56c129.js";import"./VProgressCircular.27e195cb.js";import"./VBtn.e55e9e37.js";import"./FToast.8c42eeda.js";import"./VSnackbar.1d57f851.js";import"./VDivider.a69cf6f1.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
//# sourceMappingURL=FAuthMethodModal.stories.f1fdd8e4.js.map
