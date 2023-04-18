var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.b09b7c5a.js";import{F as c}from"./FPaymentModal.ac6254dc.js";import{F as s}from"./FButton.fd5dc93c.js";import{u as p}from"./toast.ca99ceb1.js";import{d as l}from"./VSelect.8f2478f8.js";import"./mixin.87a49014.js";import"./FModal.edcf514e.js";import"./VDialog.f3d85c11.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.f0d8de9f.js";import"./useRender.5a19cee5.js";import"./helpers.4b349f1c.js";import"./VOverlay.4718cec8.js";import"./dimensions.b549aab6.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./color.1fec8f8e.js";import"./transition.1a560eae.js";import"./router.524cabd1.js";import"./display.fd968d5a.js";import"./locale.0dcd1420.js";import"./variant.eababd72.js";import"./createSimpleFunctional.06ddaa9a.js";import"./VIcon.81f7ecc0.js";import"./density.43b8d8b2.js";import"./VAvatar.84448bc0.js";import"./rounded.ccd03645.js";import"./VImg.be2c1e9b.js";import"./index.21842925.js";import"./index.eca3ba9a.js";import"./loader.c496a144.js";import"./location.11c487f7.js";import"./intersectionObserver.8499cdfb.js";import"./border.6d45fe61.js";import"./elevation.844f69c6.js";import"./position.6b49aae6.js";import"./FPayingModal.7fb55dbc.js";import"./VBtn.7a77eb8b.js";import"./VProgressCircular.8c9797f0.js";import"./FQRCode.6cfce458.js";import"./qrious.49a4e7a8.js";import"./iframe.48fee80f.js";import"./FToast.5b91172b.js";import"./VSnackbar.8d99b52c.js";import"./VDivider.a6c176d7.js";import"./VTextField.32fb86ed.js";import"./VCounter.d53e5345.js";import"./index.38f7dd54.js";import"./VInput.c9d6b09b.js";import"./VMessages.02e1bfc3.js";import"./VList.eb773df7.js";import"./VListItem.679e6b02.js";import"./VSelectionControl.096d7ba1.js";const gn={parameters:{storySource:{source:`import { ref } from "vue";
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
  `}),"Template"),u=d.bind({});u.args={};const vn=["Default"];export{u as Default,vn as __namedExportsOrder,gn as default};
//# sourceMappingURL=FPaymentModal.stories.8db8d870.js.map
