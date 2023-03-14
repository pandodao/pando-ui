var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.8be965d9.js";import{F as i}from"./FButton.7a11c708.js";import{r as p}from"./vue.esm-bundler.62cdaeff.js";import{u as d}from"./toast.741ba85e.js";import"./mixin.87a49014.js";import"./FModal.e70a199e.js";import"./VDialog.8aa0eb51.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.c2b98033.js";import"./useRender.bb8a5a4c.js";import"./helpers.f37785d0.js";import"./VOverlay.49a3aceb.js";import"./dimensions.c27e6138.js";import"./easing.36b781ab.js";import"./anchor.4b6c6135.js";import"./color.5ac0909d.js";import"./transition.28d05801.js";import"./router.19d79a04.js";import"./display.21f5d2fe.js";import"./locale.b4680344.js";import"./variant.cb074882.js";import"./createSimpleFunctional.f6324448.js";import"./VIcon.ddcbca9b.js";import"./density.a1d89e9f.js";import"./VAvatar.8eec326e.js";import"./rounded.9945cf4e.js";import"./VImg.485a2281.js";import"./index.68c608a7.js";import"./index.f175e2d9.js";import"./loader.c48359f5.js";import"./location.8179a009.js";import"./border.744ce806.js";import"./elevation.79ced88b.js";import"./position.daea1c07.js";import"./base64.c11e2199.js";import"./iframe.f8ff6e96.js";import"./FQRCode.70775a67.js";import"./qrious.a8332774.js";import"./VProgressCircular.5a613386.js";import"./VBtn.2cacbcac.js";import"./FToast.8c3293b9.js";import"./VSnackbar.5cad11aa.js";import"./VDivider.1215dc57.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
//# sourceMappingURL=FAuthMethodModal.stories.ee76e055.js.map
