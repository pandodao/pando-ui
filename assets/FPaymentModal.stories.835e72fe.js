var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.a5c4e1bf.js";import{F as c}from"./FPaymentModal.fc5da7b4.js";import{F as s}from"./FButton.f3fc7c21.js";import{u as p}from"./toast.d9382d0f.js";import{d as l}from"./VSelect.a145032d.js";import"./mixin.87a49014.js";import"./FModal.4fd09b84.js";import"./VDialog.8e3a7441.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.9639363f.js";import"./useRender.c7ecffde.js";import"./helpers.cec2c044.js";import"./scopeId.782553fc.js";import"./VOverlay.74b7cee1.js";import"./dimensions.b6fbc401.js";import"./easing.36b781ab.js";import"./anchor.e4a88562.js";import"./color.43314d1d.js";import"./transition.c93b8895.js";import"./router.3d9f142b.js";import"./locale.76e208ea.js";import"./variant.b9606795.js";import"./createSimpleFunctional.f00f4b71.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./VAvatar.da185431.js";import"./rounded.a0c73c18.js";import"./VImg.19441548.js";import"./index.549b0914.js";import"./index.1b40d9d7.js";import"./loader.7d1fab10.js";import"./border.0d2c7ad0.js";import"./elevation.52b4704c.js";import"./position.d49ff30e.js";import"./display.1bd9c9dd.js";import"./FPayingModal.c962507e.js";import"./VBtn.b5444450.js";import"./VProgressCircular.ad6cc829.js";import"./FQRCode.8f456d01.js";import"./qrious.20baccc9.js";import"./iframe.44f7c4d0.js";import"./FToast.f9ed9694.js";import"./VSnackbar.40a0d4da.js";import"./VDivider.c33525c0.js";import"./VTextField.cc6d2074.js";import"./VCounter.536d06c5.js";import"./index.628b3df7.js";import"./VInput.34db0c3a.js";import"./VMessages.90062972.js";import"./VList.f6b5b9eb.js";import"./VListItem.c102cb0b.js";import"./VSelectionControl.9b121a3d.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FPaymentModal.stories.835e72fe.js.map
