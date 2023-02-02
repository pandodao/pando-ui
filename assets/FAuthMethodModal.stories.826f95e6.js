var i=Object.defineProperty;var t=(e,o)=>i(e,"name",{value:o,configurable:!0});import{F as l}from"./FAuthMethodModal.b6409d0e.js";import{F as m}from"./FButton.da03e124.js";import{r as p}from"./vue.esm-bundler.1ba604f9.js";import{u as d}from"./toast.40fc08b3.js";import"./mixin.87a49014.js";import"./FModal.3e0c2496.js";import"./VDialog.0f487f73.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.23143766.js";import"./useRender.965bd6aa.js";import"./helpers.bd7a8d83.js";import"./VOverlay.16609424.js";import"./dimensions.721a2e0b.js";import"./easing.36b781ab.js";import"./anchor.1637b665.js";import"./color.b891a321.js";import"./transition.ef0cc300.js";import"./router.ba883828.js";import"./display.de7ed398.js";import"./locale.fb27b96c.js";import"./variant.22bbbe86.js";import"./createSimpleFunctional.b271bf7a.js";import"./VIcon.518cdeb6.js";import"./density.8ac56fa2.js";import"./VAvatar.d7e1c088.js";import"./rounded.cb32523b.js";import"./VImg.2750fab4.js";import"./index.c125b6ad.js";import"./index.27517d48.js";import"./loader.c9437e89.js";import"./location.f6b6fb7b.js";import"./border.c2063388.js";import"./elevation.7428fb70.js";import"./position.747eb4b6.js";import"./base64.cc90f32e.js";import"./iframe.b82cb2ff.js";import"./FQRCode.7a3d8252.js";import"./qrious.07917c37.js";import"./VProgressCircular.6a9473f8.js";import"./VBtn.156ed533.js";import"./FToast.ec3eff7d.js";import"./VSnackbar.f31880f4.js";import"./VDivider.7223c023.js";const lt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
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
//# sourceMappingURL=FAuthMethodModal.stories.826f95e6.js.map
