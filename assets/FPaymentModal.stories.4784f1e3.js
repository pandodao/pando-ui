var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.330b8bcd.js";import{F as c}from"./FPaymentModal.c250b57f.js";import{F as s}from"./FButton.d034f6f2.js";import{u as p}from"./toast.4a0832c2.js";import{d as l}from"./VSelect.97b26969.js";import"./mixin.87a49014.js";import"./FModal.6bf61d27.js";import"./VDialog.a4bfe643.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.815b9064.js";import"./useRender.b59b3e39.js";import"./helpers.6dbb45ef.js";import"./VOverlay.d681ab18.js";import"./dimensions.6590eaa4.js";import"./easing.36b781ab.js";import"./anchor.7cdf4a4d.js";import"./color.66c7a00f.js";import"./transition.d91c432b.js";import"./router.a6c113d7.js";import"./display.b3319b10.js";import"./locale.0eda84ca.js";import"./variant.b259332f.js";import"./createSimpleFunctional.05bfccd4.js";import"./VIcon.c758310f.js";import"./density.38f0f124.js";import"./VAvatar.f79052e0.js";import"./rounded.257cff90.js";import"./VImg.9ee07324.js";import"./index.0fdd422f.js";import"./index.b967f916.js";import"./loader.c202c022.js";import"./location.2cb2469d.js";import"./border.8a30a617.js";import"./elevation.b2f27a68.js";import"./position.03fcbfb6.js";import"./FPayingModal.7c2a8ce0.js";import"./VBtn.e55e9e37.js";import"./VProgressCircular.27e195cb.js";import"./FQRCode.c6b1272e.js";import"./qrious.95cbf4de.js";import"./iframe.50af98f3.js";import"./FToast.8c42eeda.js";import"./VSnackbar.1d57f851.js";import"./VDivider.a69cf6f1.js";import"./VTextField.d9025984.js";import"./VCounter.a5b91a3f.js";import"./index.a5e0d629.js";import"./VInput.3a20875e.js";import"./VMessages.206e4d2e.js";import"./VList.318061a0.js";import"./VListItem.4533e071.js";import"./VSelectionControl.d22e73c0.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
import { VSelect } from "vuetify/components";
import { FPaymentModal } from "./FPaymentModal";
import { FButton } from "../FButton";
import { Meta, StoryFn } from "@storybook/vue3";
import { useToast } from "../../plugins/toast";

export default {
  title: "Components/FPaymentModal",
  component: FPaymentModal,
} as Meta<typeof FPaymentModal>;

const Template: StoryFn<typeof FPaymentModal> = (args) => ({
  components: { FPaymentModal, FButton, VSelect },

  setup() {
    const dialog = ref();
    const toast = useToast();
    const channel = ref("mixin");

    const channels = ["mixin", "metamask", "fenenc"];

    const open = async () => {
      try {
        await dialog.value.show({
          assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
          scheme: "mixin://mock-payment-scheme",
          amount: "1",
          channel: channel.value,
          hideCheckingModal: false,
          actions: {
            fennec: () => {
              console.log("fennec payment called");
            },
            mvm: () => {
              console.log("mvm payment called");
            },
          },
          checker: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(true);
              }, 5000);
            });
          },
        });

        toast.success({ message: "payment checked" });
      } catch (error) {
        toast.error({ message: "" + error });
      }
    };

    return { args, channel, channels, dialog, open };
  },

  template: \`
    <div>
      <VSelect v-model="channel" :items="channels" class="mb-8" />

      <FButton color="primary" @click="open">Mock Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  \`,
});

export const Default = Template.bind({});
Default.args = {};
`,locationsMap:{default:{startLoc:{col:48,line:13},endLoc:{col:2,line:66},startBody:{col:48,line:13},endBody:{col:2,line:66}}}}},title:"Components/FPaymentModal",component:c},d=t(e=>({components:{FPaymentModal:c,FButton:s,VSelect:l},setup(){const n=a(),m=p(),r=a("mixin");return{args:e,channel:r,channels:["mixin","metamask","fenenc"],dialog:n,open:t(async()=>{try{await n.value.show({assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",scheme:"mixin://mock-payment-scheme",amount:"1",channel:r.value,hideCheckingModal:!1,actions:{fennec:()=>{console.log("fennec payment called")},mvm:()=>{console.log("mvm payment called")}},checker:()=>new Promise((o,h)=>{setTimeout(()=>{o(!0)},5e3)})}),m.success({message:"payment checked"})}catch(o){m.error({message:""+o})}},"open")}},template:`
    <div>
      <VSelect v-model="channel" :items="channels" class="mb-8" />

      <FButton color="primary" @click="open">Mock Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  `}),"Template"),u=d.bind({});u.args={};const gn=["Default"];export{u as Default,gn as __namedExportsOrder,Fn as default};
//# sourceMappingURL=FPaymentModal.stories.4784f1e3.js.map
