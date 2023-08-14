var s=Object.defineProperty;var t=(e,n)=>s(e,"name",{value:n,configurable:!0});import{r as a}from"./vue.esm-bundler.b09b7c5a.js";import{F as c}from"./FPaymentModal.62390472.js";import{F as i}from"./FButton.7621db81.js";import{u as p}from"./toast.fb53eb8f.js";import{d as l}from"./VSelect.637a83ce.js";import"./mixin.f972a917.js";import"./FModal.cc1ac870.js";import"./VDialog.ac2f44e1.js";import"./forwardRefs.c003b6b8.js";import"./proxiedModel.28fe5444.js";import"./color.7fbf1750.js";import"./helpers.4b349f1c.js";import"./VOverlay.7cd76152.js";import"./router.b8d53e34.js";import"./easing.36b781ab.js";import"./anchor.b337e11f.js";import"./transition.d2bea911.js";import"./display.c2299c89.js";import"./locale.88650f04.js";import"./variant.fbd007cc.js";import"./createSimpleFunctional.6499d319.js";import"./VIcon.bd07cc2b.js";import"./density.6083b2d4.js";import"./VAvatar.95d7d85f.js";import"./rounded.28975b1c.js";import"./VImg.11b5f250.js";import"./index.8137a4d7.js";import"./index.eca3ba9a.js";import"./loader.a0162f6e.js";import"./location.b7cdffb8.js";import"./intersectionObserver.1e3a532e.js";import"./border.6019dc9f.js";import"./elevation.12d4edaf.js";import"./position.faf59b49.js";import"./FPayingModal.b8dadb12.js";import"./VBtn.7921a3d1.js";import"./VProgressCircular.7bee339a.js";import"./FQRCode.7ea3250f.js";import"./qrious.ed951bce.js";import"./iframe.90d49179.js";import"./FToast.3c9c610a.js";import"./VSnackbar.9a9fe2a4.js";import"./VDivider.810676cd.js";import"./VTextField.a51746b8.js";import"./VCounter.0660ffdc.js";import"./index.5cf6a3e8.js";import"./VInput.d8777c43.js";import"./VMessages.d6b13295.js";import"./VList.34423262.js";import"./VListItem.f3bec281.js";import"./VSelectionControl.9c612953.js";const hn={parameters:{storySource:{source:`import { ref } from "vue";
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
`,locationsMap:{default:{startLoc:{col:48,line:13},endLoc:{col:2,line:66},startBody:{col:48,line:13},endBody:{col:2,line:66}}}}},title:"Components/FPaymentModal",component:c},d=t(e=>({components:{FPaymentModal:c,FButton:i,VSelect:l},setup(){const n=a(),m=p(),r=a("mixin");return{args:e,channel:r,channels:["mixin","metamask","fenenc"],dialog:n,open:t(async()=>{try{await n.value.show({assetId:"965e5c6e-434c-3fa9-b780-c50f43cd955c",scheme:"mixin://mock-payment-scheme",amount:"1",channel:r.value,hideCheckingModal:!1,actions:{fennec:()=>{console.log("fennec payment called")},mvm:()=>{console.log("mvm payment called")}},checker:()=>new Promise((o,h)=>{setTimeout(()=>{o(!0)},5e3)})}),m.success({message:"payment checked"})}catch(o){m.error({message:""+o})}},"open")}},template:`
    <div>
      <VSelect v-model="channel" :items="channels" class="mb-8" />

      <FButton color="primary" @click="open">Mock Payment</FButton>

      <FPaymentModal ref="dialog" v-bind="args" />
    </div>
  `}),"Template"),u=d.bind({});u.args={};const Fn=["Default"];export{u as Default,Fn as __namedExportsOrder,hn as default};
//# sourceMappingURL=FPaymentModal.stories.31a958c3.js.map
