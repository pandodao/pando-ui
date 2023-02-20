var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.06cbf4f3.js";import{F as c}from"./FPaymentModal.e6f2fa36.js";import{F as s}from"./FButton.042bb067.js";import{u as p}from"./toast.94d26868.js";import{d as l}from"./VSelect.6fd6fbfe.js";import"./mixin.87a49014.js";import"./FModal.af77241e.js";import"./VDialog.89f04ef5.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.ffcb1955.js";import"./useRender.61aaf11b.js";import"./helpers.0ba19e05.js";import"./VOverlay.99ed030c.js";import"./dimensions.f30e25d4.js";import"./easing.36b781ab.js";import"./anchor.4d34e672.js";import"./color.9c80aa54.js";import"./transition.60048a78.js";import"./router.26e45b89.js";import"./display.f0408c25.js";import"./locale.7c7f5def.js";import"./variant.e4970577.js";import"./createSimpleFunctional.917a427b.js";import"./VIcon.4e22765d.js";import"./density.4e133a57.js";import"./VAvatar.d0341de2.js";import"./rounded.ae3fe3ca.js";import"./VImg.601fba1e.js";import"./index.667911d0.js";import"./index.0e1c0398.js";import"./loader.ff14b575.js";import"./location.efb67ad2.js";import"./border.386c98bf.js";import"./elevation.906ca0d0.js";import"./position.f250096a.js";import"./FPayingModal.8eb7b855.js";import"./VBtn.a6fb96e2.js";import"./VProgressCircular.32071c16.js";import"./FQRCode.8702dc6f.js";import"./qrious.11100b76.js";import"./iframe.58795953.js";import"./FToast.5a031a43.js";import"./VSnackbar.24cfd012.js";import"./VDivider.9ab6906e.js";import"./VTextField.d88de585.js";import"./VCounter.19239368.js";import"./index.b7dbf2f4.js";import"./VInput.747c82dc.js";import"./VMessages.4767cc10.js";import"./VList.ed5b86d0.js";import"./VListItem.52553c7c.js";import"./VSelectionControl.ee3c2fe2.js";const Fn={parameters:{storySource:{source:`import { ref } from "vue";
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
//# sourceMappingURL=FPaymentModal.stories.1bc6b0dc.js.map
