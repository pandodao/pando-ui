var r=Object.defineProperty;var o=(n,t)=>r(n,"name",{value:t,configurable:!0});import{d as i}from"./vue.esm-bundler.0d7c29ee.js";import{a as e}from"./FPaymentModal.a560eee8.js";import{F as a}from"./FButton.c94e3704.js";import{u as p}from"./payment.f39e6755.js";import"./FModal.1ffcee23.js";import"./createSimpleFunctional.e0d25bf4.js";import"./useRender.9e1e1323.js";import"./helpers.a29827d2.js";import"./VIcon.27b7c9a9.js";import"./color.a1d36358.js";import"./density.1812b102.js";import"./variant.f85b9fa5.js";import"./VAvatar.b52a6938.js";import"./VImg.c981533d.js";import"./index.da6e5ccf.js";import"./transition.845f9488.js";import"./dimensions.512da313.js";import"./index.9418ce7a.js";import"./loader.dd2f3ca6.js";import"./proxiedModel.0134c68c.js";import"./locale.6d395d7c.js";import"./elevation.b2f78cc5.js";import"./VBtn.aebc80dd.js";import"./anchor.cecbc02b.js";import"./router.e34e74ab.js";import"./VProgressCircular.c944d5ab.js";import"./forwardRefs.c5465513.js";import"./scopeId.7054761b.js";import"./VOverlay.664db6e2.js";import"./easing.d7926d43.js";import"./display.8735be82.js";import"./FInput.cc1e9cf7.js";import"./VCounter.af1b4b68.js";import"./index.e4eb9e0e.js";import"./VInput.76852b74.js";import"./VMessages.5340d354.js";import"./iframe.18542905.js";import"./FPhoneInput.f53e0b4d.js";import"./FListItem.ffbaa156.js";import"./FSearchInput.51b8ce83.js";import"./VLazy.299616ae.js";import"./VDivider.23958762.js";import"./FQRCode.746dafd9.js";import"./FPayingModal.58872440.js";import"./FActionBar.231b34b9.js";import"./FAppBar.a483a7cb.js";import"./layout.81e3c011.js";import"./FAssetAmountInput.b9f4b62c.js";import"./FAssetSelect.c02569e5.js";import"./FAssetLogo.abcf4585.js";import"./FAssetSelectField.0a3080f2.js";import"./FAssetInputTools.57badf86.js";import"./FAssetSwapForm.7d59ccb0.js";import"./FBottomNav.9593f782.js";import"./FDivider.78d9db3a.js";import"./FFiatDivision.85b94e4a.js";import"./FHint.bf96fb2e.js";import"./FTooltip.1ac232ae.js";import"./VTooltip.39b46481.js";import"./FInfoGridItem.6030ded2.js";import"./FLoading.8c48f266.js";import"./FRender.e214a8d0.js";import"./FSegmentControl.b096dbf1.js";import"./FSlider.319f099a.js";import"./FSwitch.a0db7fb9.js";import"./FTabs.a9d4af47.js";import"./FTextarea.7a177367.js";import"./FToast.5b1fc8b0.js";const Dn={parameters:{storySource:{source:`import { ref } from "vue";

import { FPaymentModal } from "./FPaymentModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";

import { usePayment } from "../../plugins/payment";

export default {
  name: "FPaymentModal",
  component: FPaymentModal,
} as Meta<typeof FPaymentModal>;

const Template: StoryFn<typeof FPaymentModal> = (args) => ({
  components: { FPaymentModal, FButton },

  setup() {
    const dialog = ref(false);

    const open = () => {
      dialog.value.show({
        assetId: "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        scheme: "string-scheme",
        amount: "0.5",
        channel: "mixin",
        hideCheckingModal: false,
        actions: {
          mixin: () => {},
        },
        checker: () => {},
      });
    };

    return { args, dialog, open };
  },

  template: \`
    <div>
      <FButton color="primary" @click="open">Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = {};

const Template2: StoryFn<typeof FPaymentModal> = (args) => ({
  setup() {
    const payment = usePayment();

    const open = () => {
      payment.show({
        assetId: "c6d0c728-2624-429b-8e0d-d9d19b6592fa",
        scheme: "string-scheme",
        amount: "0.5",
        channel: "mixin",
        hideCheckingModal: false,
        actions: {
          mixin: () => {},
        },
        checker: () => {},
        ...args,
      });
    };

    return { open, args };
  },

  template: \`
    <FButton color="primary" @click="open">Payment</FButton>
  \`,
});

export const Functional = Template2.bind({});
Functional.args = {};`,locationsMap:{default:{startLoc:{col:48,line:14},endLoc:{col:2,line:44},startBody:{col:48,line:14},endBody:{col:2,line:44}},functional:{startLoc:{col:49,line:49},endLoc:{col:2,line:74},startBody:{col:49,line:49},endBody:{col:2,line:74}}}}},name:"FPaymentModal",component:e},c=o(n=>({components:{FPaymentModal:e,FButton:a},setup(){const t=i(!1);return{args:n,dialog:t,open:o(()=>{t.value.show({assetId:"c6d0c728-2624-429b-8e0d-d9d19b6592fa",scheme:"string-scheme",amount:"0.5",channel:"mixin",hideCheckingModal:!1,actions:{mixin:()=>{}},checker:()=>{}})},"open")}},template:`
    <div>
      <FButton color="primary" @click="open">Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  `}),"Template"),s=c.bind({});s.args={};const l=o(n=>({setup(){const t=p();return{open:o(()=>{t.show({assetId:"c6d0c728-2624-429b-8e0d-d9d19b6592fa",scheme:"string-scheme",amount:"0.5",channel:"mixin",hideCheckingModal:!1,actions:{mixin:()=>{}},checker:()=>{},...n})},"open"),args:n}},template:`
    <FButton color="primary" @click="open">Payment</FButton>
  `}),"Template2"),d=l.bind({});d.args={};const In=["Default","Functional"];export{s as Default,d as Functional,In as __namedExportsOrder,Dn as default};
//# sourceMappingURL=FPaymentModal.stories.66c19572.js.map
