var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.9541c58c.js";import{F as i}from"./FButton.72dd92af.js";import{r as p}from"./vue.esm-bundler.3b29098a.js";import{u as d}from"./toast.c619c36f.js";import"./mixin.87a49014.js";import"./FModal.8996de1a.js";import"./VDialog.8fdf9bea.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.67252d17.js";import"./useRender.3ca1765f.js";import"./helpers.e1d6c4cc.js";import"./VOverlay.e2cb60a6.js";import"./dimensions.c2f0e23c.js";import"./easing.36b781ab.js";import"./anchor.c52c8661.js";import"./color.fef4ce02.js";import"./transition.94342caf.js";import"./router.6cb3b155.js";import"./display.f5b0b65d.js";import"./locale.eccdb440.js";import"./variant.be65e42d.js";import"./createSimpleFunctional.b1ebbe28.js";import"./VIcon.c254d683.js";import"./density.6dd2b9c7.js";import"./VAvatar.ab09abd9.js";import"./rounded.375414e4.js";import"./VImg.78cc729b.js";import"./index.1414bb4a.js";import"./index.09e65b91.js";import"./loader.5b0d5ca4.js";import"./location.3a6dce64.js";import"./intersectionObserver.b06f0fb9.js";import"./border.d0444c35.js";import"./elevation.154beddf.js";import"./position.6cc3b816.js";import"./helpers.96e9126c.js";import"./base64.77e65e9f.js";import"./iframe.e290c493.js";import"./FQRCode.724d1899.js";import"./qrious.de78998c.js";import"./VProgressCircular.c527f932.js";import"./VBtn.7f6a0830.js";import"./FToast.53bd4d10.js";import"./VSnackbar.d3ebbd55.js";import"./VDivider.cb2315f4.js";const it={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
//# sourceMappingURL=FAuthMethodModal.stories.6b6e8820.js.map
