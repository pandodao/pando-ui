var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{F as r}from"./FPaymentModal.a560eee8.js";import{F as i}from"./FButton.c94e3704.js";import{d as m}from"./vue.esm-bundler.0d7c29ee.js";import{u as s,a as l}from"./index.72cdf6b1.js";import"./FModal.1ffcee23.js";import"./createSimpleFunctional.e0d25bf4.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VIcon.27b7c9a9.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./variant.f85b9fa5.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./dimensions.512da313.js";import"./index.9418ce7a.js";import"./loader.dd2f3ca6.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./elevation.b2f78cc5.js";import"./VBtn.aebc80dd.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./forwardRefs.c5465513.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";import"./FInput.cc1e9cf7.js";import"./VCounter.af1b4b68.js";import"./index.e4eb9e0e.js";import"./VInput.76852b74.js";import"./VMessages.5340d354.js";import"./iframe.18542905.js";import"./FPhoneInput.f53e0b4d.js";import"./FListItem.ffbaa156.js";import"./FSearchInput.51b8ce83.js";import"./VLazy.299616ae.js";import"./VDivider.23958762.js";import"./FQRCode.746dafd9.js";import"./FPayingModal.58872440.js";import"./FActionBar.231b34b9.js";import"./FAppBar.a483a7cb.js";import"./layout.81e3c011.js";import"./FAssetAmountInput.b9f4b62c.js";import"./FAssetSelect.c02569e5.js";import"./FAssetLogo.abcf4585.js";import"./FAssetSelectField.0a3080f2.js";import"./FAssetInputTools.57badf86.js";import"./FAssetSwapForm.7d59ccb0.js";import"./FBottomNav.9593f782.js";import"./FDivider.78d9db3a.js";import"./FFiatDivision.85b94e4a.js";import"./FHint.bf96fb2e.js";import"./FTooltip.1ac232ae.js";import"./VTooltip.39b46481.js";import"./FInfoGridItem.6030ded2.js";import"./FLoading.8c48f266.js";import"./FRender.e214a8d0.js";import"./FSegmentControl.b096dbf1.js";import"./FSlider.319f099a.js";import"./FSwitch.a0db7fb9.js";import"./FTabs.a9d4af47.js";import"./FTextarea.7a177367.js";import"./FToast.5b1fc8b0.js";const Rt={parameters:{storySource:{source:`import { FAuthMethodModal } from "./FAuthMethodModal";
import { FButton } from "../FButton";
import { ref } from "vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { useAuth } from "../../plugins/auth";

import { usePassport } from "../../../../passport/src/index"

export default {
  name: "FAuthMethodModal",
  component: { FAuthMethodModal },
} as Meta<typeof FAuthMethodModal>;

const Template: StoryFn<typeof FAuthMethodModal> = (args) => ({
  components: { FAuthMethodModal, FButton },
  setup() {
    const authModal = ref(null);

    const open = () => {
      authModal.value.show();
    };

    return { args, open, authModal };
  },
  template: \`
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" />
  \`,
});

export const Default = Template.bind({});
Default.args = {
  wallets: ["fennec", "mixin", "metamask", "walletconnect"],
  scope: "PROFILE:READ",
  clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
  pkce: true,
};

const Template2: StoryFn<typeof FAuthMethodModal> = (args) => ({
  setup() {
    const auth = useAuth();

    const open = () => {
      auth.show({
        wallets: ["fennec", "mixin", "metamask", "walletconnect"],
        scope: "PROFILE:READ",
        clientId: "fbd26bc6-3d04-4964-a7fe-a540432b16e2",
        pkce: true,
        ...args,
      });
    };

    return { open, args };
  },

  template: \`
    <FButton color="primary" @click="open">Auth</FButton>
  \`,
});

export const Functional = Template2.bind({});
Functional.args = {};

const Template3: StoryFn = () => ({
  setup() {
    const passport = usePassport();

    const openAuth = async () => {
      try {
        const { channel, token } = await passport.auth();
        alert(channel + token)
      } catch (error: any) {
        alert(error);
      }
    }

    return { openAuth }
  },

  template: \`
    <FButton color="primary" @click="openAuth">Auth</FButton>
  \`
})

export const Passport = Template3.bind({});
Passport.args = {};`,locationsMap:{default:{startLoc:{col:51,line:14},endLoc:{col:2,line:30},startBody:{col:51,line:14},endBody:{col:2,line:30}},functional:{startLoc:{col:52,line:40},endLoc:{col:2,line:60},startBody:{col:52,line:40},endBody:{col:2,line:60}},passport:{startLoc:{col:27,line:65},endLoc:{col:2,line:84},startBody:{col:27,line:65},endBody:{col:2,line:84}}}}},name:"FAuthMethodModal",component:{FAuthMethodModal:r}},c=n(t=>({components:{FAuthMethodModal:r,FButton:i},setup(){const o=m(null);return{args:t,open:n(()=>{o.value.show()},"open"),authModal:o}},template:`
    <FButton color="primary" @click="open">Auth</FButton>

    <FAuthMethodModal ref="authModal" v-bind="args" />
  `}),"Template"),u=c.bind({});u.args={wallets:["fennec","mixin","metamask","walletconnect"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",pkce:!0};const d=n(t=>({setup(){const o=s();return{open:n(()=>{o.show({wallets:["fennec","mixin","metamask","walletconnect"],scope:"PROFILE:READ",clientId:"fbd26bc6-3d04-4964-a7fe-a540432b16e2",pkce:!0,...t})},"open"),args:t}},template:`
    <FButton color="primary" @click="open">Auth</FButton>
  `}),"Template2"),h=d.bind({});h.args={};const F=n(()=>({setup(){const t=l();return{openAuth:n(async()=>{try{const{channel:e,token:p}=await t.auth();alert(e+p)}catch(e){alert(e)}},"openAuth")}},template:`
    <FButton color="primary" @click="openAuth">Auth</FButton>
  `}),"Template3"),f=F.bind({});f.args={};const vt=["Default","Functional","Passport"];export{u as Default,h as Functional,f as Passport,vt as __namedExportsOrder,Rt as default};
//# sourceMappingURL=FAuthMethodModal.stories.cd30af85.js.map
