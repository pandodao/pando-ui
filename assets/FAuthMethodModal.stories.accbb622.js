var m=Object.defineProperty;var o=(n,e)=>m(n,"name",{value:e,configurable:!0});import{F as l}from"./FAuthMethodModal.86241908.js";import{F as i}from"./FButton.95509114.js";import{r as p}from"./vue.esm-bundler.57aa1454.js";import{u as d}from"./toast.388d9822.js";import"./mixin.87a49014.js";import"./FModal.b075f7f6.js";import"./VDialog.789dc96e.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.aff93369.js";import"./useRender.0f3b6188.js";import"./helpers.ff98b59e.js";import"./VOverlay.2998aec7.js";import"./dimensions.2a6ee421.js";import"./easing.36b781ab.js";import"./anchor.8b678110.js";import"./color.5e70182f.js";import"./transition.7787ec60.js";import"./router.359f3c68.js";import"./display.8ac49ecd.js";import"./locale.ce33eacd.js";import"./variant.58edd759.js";import"./createSimpleFunctional.3ee3a08b.js";import"./VIcon.b7876f5b.js";import"./density.5fc65f23.js";import"./VAvatar.01c8c686.js";import"./rounded.638bf334.js";import"./VImg.040b2a14.js";import"./index.168f645e.js";import"./index.17c04f25.js";import"./loader.538ed1c8.js";import"./location.7ef01c4f.js";import"./border.72c41e60.js";import"./elevation.08bb2882.js";import"./position.6bb498a5.js";import"./base64.f167f6b7.js";import"./iframe.5a9881f8.js";import"./FQRCode.9ab2a046.js";import"./qrious.b826cc59.js";import"./VProgressCircular.ce5720de.js";import"./VBtn.ab71924f.js";import"./FToast.75200401.js";import"./VSnackbar.3bed6e44.js";import"./VDivider.186db6a0.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
//# sourceMappingURL=FAuthMethodModal.stories.accbb622.js.map
